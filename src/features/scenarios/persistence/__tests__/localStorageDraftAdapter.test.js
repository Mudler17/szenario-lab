import test from 'node:test';
import assert from 'node:assert/strict';

import { createLocalStorageDraftAdapter } from '../adapter/localStorageDraftAdapter.js';

function installMemoryStorage() {
  const store = new Map();
  const storage = {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
  };

  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
  return () => {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  };
}

test('LocalStorageDraftAdapter speichert, lädt und löscht Draft', () => {
  const restore = installMemoryStorage();
  try {
    const adapter = createLocalStorageDraftAdapter();
    const payload = { name: 'Test' };
    assert.equal(adapter.isAvailable(), true);
    assert.equal(adapter.saveScenarioDraft(payload).ok, true);
    const loaded = adapter.loadScenarioDraft();
    assert.equal(loaded.ok, true);
    assert.deepEqual(loaded.data, payload);
    assert.equal(adapter.clearScenarioDraft().ok, true);
    assert.equal(adapter.loadScenarioDraft().status, 'draftNotFound');
  } finally { restore(); }
});

test('LocalStorageDraftAdapter behandelt ungültiges JSON robust', () => {
  const restore = installMemoryStorage();
  try {
    globalThis.localStorage.setItem('szenario-lab:current-scenario-draft:v1', '{bad');
    const adapter = createLocalStorageDraftAdapter();
    const loaded = adapter.loadScenarioDraft();
    assert.equal(loaded.ok, false);
    assert.equal(loaded.status, 'draftInvalid');
  } finally { restore(); }
});
