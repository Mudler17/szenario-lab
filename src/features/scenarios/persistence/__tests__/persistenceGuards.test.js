import test from 'node:test';
import assert from 'node:assert/strict';

import {
  NON_PERSISTENCE_ACTION,
  PERSISTENCE_ACTION,
  guardNoPersistenceMode,
  guardPersistenceAction,
  isNonPersistenceAction,
  isPersistenceAction,
  isPersistenceTechnologyBlocked,
} from '../orchestration/persistenceGuards.js';

test('guardNoPersistenceMode blockiert aktive Persistenz', () => {
  assert.deepEqual(guardNoPersistenceMode({ persistenceActive: true }), {
    ok: false,
    reason: 'persistence-not-active-only',
  });
});

test('guardNoPersistenceMode erlaubt inaktive Persistenz', () => {
  assert.deepEqual(guardNoPersistenceMode({ persistenceActive: false }), {
    ok: true,
  });

  assert.deepEqual(guardNoPersistenceMode(), {
    ok: true,
  });
});

test('isPersistenceTechnologyBlocked bleibt reine Patternprüfung', () => {
  assert.equal(isPersistenceTechnologyBlocked('LocalStorage'), true);
  assert.equal(isPersistenceTechnologyBlocked('sessionStorage connector'), true);
  assert.equal(isPersistenceTechnologyBlocked('IndexedDB'), true);
  assert.equal(isPersistenceTechnologyBlocked('Backend API'), true);
  assert.equal(isPersistenceTechnologyBlocked('Database'), true);
  assert.equal(isPersistenceTechnologyBlocked('Auth + Account'), true);

  assert.equal(isPersistenceTechnologyBlocked('json export only'), false);
  assert.equal(isPersistenceTechnologyBlocked(null), false);
});

test('Nicht-Speicheraktionen werden explizit erkannt', () => {
  assert.equal(isNonPersistenceAction(NON_PERSISTENCE_ACTION.DRAFT_CHANGED), true);
  assert.equal(isNonPersistenceAction(NON_PERSISTENCE_ACTION.JSON_IMPORTED), true);
  assert.equal(isNonPersistenceAction(NON_PERSISTENCE_ACTION.JSON_EXPORTED), true);
  assert.equal(isNonPersistenceAction(NON_PERSISTENCE_ACTION.APP_STARTED), true);
  assert.equal(isNonPersistenceAction(NON_PERSISTENCE_ACTION.DRAFT_RESET), true);
});

test('Speicheraktionen werden blockiert', () => {
  for (const action of Object.values(PERSISTENCE_ACTION)) {
    assert.equal(isPersistenceAction(action), true);
    assert.deepEqual(guardPersistenceAction(action), {
      ok: false,
      status: undefined,
      reason: 'persistence-action-blocked',
      action,
      data: null,
    });
  }
});

test('Nicht-Speicheraktionen sind erlaubt, aber nicht-speichernd klassifiziert', () => {
  const result = guardPersistenceAction(NON_PERSISTENCE_ACTION.JSON_EXPORTED);

  assert.deepEqual(result, {
    ok: true,
    status: undefined,
    reason: 'not-a-persistence-action',
    action: 'jsonExported',
    data: null,
  });
});

test('Unbekannte Aktion wird nicht als erlaubt behandelt', () => {
  assert.equal(isPersistenceAction('unknown-action'), false);
  assert.equal(isNonPersistenceAction('unknown-action'), false);

  assert.deepEqual(guardPersistenceAction('unknown-action'), {
    ok: false,
    status: undefined,
    reason: 'unknown',
    action: 'unknown-action',
    data: null,
  });
});

test('Guards greifen nicht auf Browser-APIs zu', () => {
  const restore = [];
  const names = ['localStorage', 'sessionStorage', 'indexedDB'];

  for (const name of names) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, name);
    restore.push(() => {
      if (descriptor) {
        Object.defineProperty(globalThis, name, descriptor);
      } else {
        delete globalThis[name];
      }
    });

    Object.defineProperty(globalThis, name, {
      configurable: true,
      get() {
        throw new Error(`${name} must not be accessed`);
      },
    });
  }

  const originalFetch = globalThis.fetch;
  restore.push(() => {
    if (typeof originalFetch === 'undefined') {
      delete globalThis.fetch;
    } else {
      globalThis.fetch = originalFetch;
    }
  });
  globalThis.fetch = () => {
    throw new Error('fetch must not be called');
  };

  try {
    assert.doesNotThrow(() => {
      isPersistenceTechnologyBlocked('localStorage');
      isPersistenceAction(PERSISTENCE_ACTION.SAVE_SCENARIO);
      isNonPersistenceAction(NON_PERSISTENCE_ACTION.DRAFT_CHANGED);
      guardPersistenceAction(PERSISTENCE_ACTION.LOAD_SCENARIO);
      guardPersistenceAction(NON_PERSISTENCE_ACTION.APP_STARTED);
      guardPersistenceAction('unknown-action');
    });
  } finally {
    while (restore.length > 0) {
      restore.pop()();
    }
  }
});
