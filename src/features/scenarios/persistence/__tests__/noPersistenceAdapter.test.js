import test from 'node:test';
import assert from 'node:assert/strict';

import { createNoPersistenceAdapter } from '../adapter/noPersistenceAdapter.js';

test('createNoPersistenceAdapter liefert dauerhaft nicht aktive Persistenz', () => {
  const adapter = createNoPersistenceAdapter();

  assert.equal(adapter.kind, 'no-persistence');
  assert.equal(adapter.isPersistenceActive(), false);
});

test('NoPersistence-Adapter speichert, lädt und löscht nicht', () => {
  const adapter = createNoPersistenceAdapter();

  assert.deepEqual(adapter.saveScenarioDraft({ name: 'X' }), {
    ok: false,
    reason: 'persistence-not-active',
  });

  assert.deepEqual(adapter.loadScenarioDraft(), {
    ok: false,
    reason: 'persistence-not-active',
  });

  assert.deepEqual(adapter.clearScenarioDraft(), {
    ok: false,
    reason: 'persistence-not-active',
  });
});
