import test from 'node:test';
import assert from 'node:assert/strict';

import {
  guardNoPersistenceMode,
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

test('isPersistenceTechnologyBlocked erkennt ausgeschlossene Speichertechnologien', () => {
  assert.equal(isPersistenceTechnologyBlocked('LocalStorage'), true);
  assert.equal(isPersistenceTechnologyBlocked('sessionStorage connector'), true);
  assert.equal(isPersistenceTechnologyBlocked('IndexedDB'), true);
  assert.equal(isPersistenceTechnologyBlocked('Backend API'), true);
  assert.equal(isPersistenceTechnologyBlocked('Database'), true);
  assert.equal(isPersistenceTechnologyBlocked('Auth + Account'), true);

  assert.equal(isPersistenceTechnologyBlocked('json export only'), false);
  assert.equal(isPersistenceTechnologyBlocked(null), false);
});
