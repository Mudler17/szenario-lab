import test from 'node:test';
import assert from 'node:assert/strict';

import { createNoPersistenceAdapter } from '../adapter/noPersistenceAdapter.js';

test('createNoPersistenceAdapter liefert dauerhaft nicht aktive Persistenz', () => {
  const adapter = createNoPersistenceAdapter();

  assert.equal(adapter.kind, 'no-persistence');
  assert.equal(adapter.storageMode, 'none');
  assert.equal(adapter.isPersistenceActive(), false);
  assert.equal(adapter.isAvailable(), false);
});

test('NoPersistence-Adapter speichert, lädt, löscht und listet nicht', () => {
  const adapter = createNoPersistenceAdapter();

  assert.deepEqual(adapter.saveScenario({ name: 'X' }), {
    ok: false,
    status: 'storageInactive',
    reason: 'persistence-not-active',
    action: 'saveScenario',
    data: null,
  });

  assert.deepEqual(adapter.loadScenario(), {
    ok: false,
    status: 'storageInactive',
    reason: 'persistence-not-active',
    action: 'loadScenario',
    data: null,
  });

  assert.deepEqual(adapter.deleteScenario(), {
    ok: false,
    status: 'storageInactive',
    reason: 'persistence-not-active',
    action: 'deleteScenario',
    data: null,
  });

  assert.deepEqual(adapter.listSavedScenarios(), {
    ok: false,
    status: 'storageInactive',
    reason: 'persistence-not-active',
    action: 'listSavedScenarios',
    data: [],
  });
});

test('NoPersistence-Adapter liefert StorageInfo ohne Persistenz', () => {
  const adapter = createNoPersistenceAdapter();

  assert.deepEqual(adapter.getStorageInfo(), {
    storageMode: 'none',
    available: false,
    persistent: false,
    description: 'App-interne Speicherung ist deaktiviert. Nutze JSON herunterladen für bewusste Sicherung.',
  });
});

test('Alte Draft-Methoden bleiben kompatible Aliasse und bleiben nicht-speichernd', () => {
  const adapter = createNoPersistenceAdapter();

  assert.deepEqual(adapter.saveScenarioDraft({ name: 'X' }), adapter.saveScenario({ name: 'X' }));
  assert.deepEqual(adapter.loadScenarioDraft(), adapter.loadScenario());
  assert.deepEqual(adapter.clearScenarioDraft(), adapter.deleteScenario());
});

test('NoPersistence-Adapter mutiert übergebene Payloads nicht', () => {
  const adapter = createNoPersistenceAdapter();
  const payload = Object.freeze({
    name: 'Nicht speichern',
    nested: Object.freeze({ value: 1 }),
  });

  assert.doesNotThrow(() => {
    adapter.saveScenario(payload);
    adapter.saveScenarioDraft(payload);
  });
});

test('NoPersistence-Adapter greift nicht auf Browser-APIs zu', () => {
  const adapter = createNoPersistenceAdapter();

  const restore = [];
  const installThrowingGetter = (name) => {
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
  };

  const installThrowingFunction = (name) => {
    const original = globalThis[name];
    restore.push(() => {
      if (typeof original === 'undefined') {
        delete globalThis[name];
      } else {
        globalThis[name] = original;
      }
    });

    globalThis[name] = () => {
      throw new Error(`${name} must not be called`);
    };
  };

  installThrowingGetter('localStorage');
  installThrowingGetter('sessionStorage');
  installThrowingGetter('indexedDB');
  installThrowingFunction('fetch');

  try {
    assert.doesNotThrow(() => {
      adapter.saveScenario({ name: 'X' });
      adapter.loadScenario();
      adapter.deleteScenario();
      adapter.listSavedScenarios();
      adapter.getStorageInfo();
      adapter.saveScenarioDraft({ name: 'X' });
      adapter.loadScenarioDraft();
      adapter.clearScenarioDraft();
    });
  } finally {
    while (restore.length > 0) {
      const restoreFn = restore.pop();
      restoreFn();
    }
  }
});
