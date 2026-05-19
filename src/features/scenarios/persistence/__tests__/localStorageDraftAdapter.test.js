import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  createLocalStorageDraftAdapter,
  PERSISTENCE_STATUS,
  PERSISTENCE_REASON,
} from '../index.js';

function installMemoryStorage(overrides = {}) {
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
    ...overrides,
  };

  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
  return () => {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  };
}

test('LocalStorageDraftAdapter exposes base mode metadata', () => {
  const restore = installMemoryStorage();
  try {
    const adapter = createLocalStorageDraftAdapter();
    assert.equal(adapter.kind, 'local-storage-draft');
    assert.equal(adapter.storageMode, 'localStorage');
    assert.equal(adapter.isPersistenceActive(), true);
  } finally { restore(); }
});

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

test('LocalStorageDraftAdapter getStorageInfo liefert konsistente Werte', () => {
  const restore = installMemoryStorage();
  try {
    const adapter = createLocalStorageDraftAdapter();
    const info = adapter.getStorageInfo();
    assert.equal(info.storageMode, 'localStorage');
    assert.equal(info.available, true);
    assert.equal(info.persistent, true);
    assert.match(info.storageKey, /szenario-lab:current-scenario-draft:v1/);
    assert.match(info.description, /Browserlokale Speicherung/);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter listSavedScenarios gibt in Single-Draft-Mode leere Liste zurück', () => {
  const adapter = createLocalStorageDraftAdapter();
  const result = adapter.listSavedScenarios();
  assert.equal(result.ok, true);
  assert.equal(result.status, PERSISTENCE_STATUS.DRAFT_LIST_EMPTY);
  assert.equal(result.reason, PERSISTENCE_REASON.SINGLE_DRAFT_MODE);
  assert.deepEqual(result.data, []);
});

test('LocalStorageDraftAdapter alias methods delegate auf Draft-Methoden', () => {
  const restore = installMemoryStorage();
  try {
    const adapter = createLocalStorageDraftAdapter();
    const payload = { name: 'Alias' };

    const saveResult = adapter.saveScenario(payload);
    assert.equal(saveResult.ok, true);

    const loadResult = adapter.loadScenario();
    assert.equal(loadResult.ok, true);
    assert.deepEqual(loadResult.data, payload);

    const deleteResult = adapter.deleteScenario();
    assert.equal(deleteResult.ok, true);
    assert.equal(adapter.loadScenarioDraft().status, PERSISTENCE_STATUS.DRAFT_NOT_FOUND);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter behandelt storage unavailable robust', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  delete globalThis.localStorage;
  try {
    const adapter = createLocalStorageDraftAdapter();
    assert.equal(adapter.isAvailable(), false);
    assert.equal(adapter.saveScenarioDraft({}).status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
    assert.equal(adapter.loadScenarioDraft().status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
    assert.equal(adapter.clearScenarioDraft().status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
    assert.equal(adapter.getStorageInfo().available, false);
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
  }
});

test('LocalStorageDraftAdapter behandelt werfenden localStorage getter robust', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('access denied');
    },
  });

  try {
    const adapter = createLocalStorageDraftAdapter();
    assert.equal(adapter.isAvailable(), false);
    assert.equal(adapter.saveScenarioDraft({}).status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
    assert.equal(adapter.loadScenarioDraft().status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
    assert.equal(adapter.clearScenarioDraft().status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  }
});

test('LocalStorageDraftAdapter behandelt werfendes setItem robust', () => {
  const restore = installMemoryStorage({
    setItem() {
      throw new Error('quota');
    },
  });
  try {
    const adapter = createLocalStorageDraftAdapter();
    const result = adapter.saveScenarioDraft({ name: 'X' });
    assert.equal(result.status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter behandelt werfendes getItem robust', () => {
  const restore = installMemoryStorage({
    getItem() {
      throw new Error('denied');
    },
  });
  try {
    const adapter = createLocalStorageDraftAdapter();
    const result = adapter.loadScenarioDraft();
    assert.equal(result.status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter behandelt werfendes removeItem robust', () => {
  const restore = installMemoryStorage({
    removeItem() {
      throw new Error('denied');
    },
  });
  try {
    const adapter = createLocalStorageDraftAdapter();
    const result = adapter.clearScenarioDraft();
    assert.equal(result.status, PERSISTENCE_STATUS.STORAGE_UNAVAILABLE);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter behandelt ungültiges JSON robust', () => {
  const restore = installMemoryStorage();
  try {
    globalThis.localStorage.setItem('szenario-lab:current-scenario-draft:v1', '{bad');
    const adapter = createLocalStorageDraftAdapter();
    const loaded = adapter.loadScenarioDraft();
    assert.equal(loaded.ok, false);
    assert.equal(loaded.status, PERSISTENCE_STATUS.DRAFT_INVALID);
  } finally { restore(); }
});

test('LocalStorageDraftAdapter source bleibt frei von Backend/API/Netzwerk/LLM/DOM-Zugriffen', async () => {
  const source = await readFile(new URL('../adapter/localStorageDraftAdapter.js', import.meta.url), 'utf8');
  const forbiddenPatterns = [
    'fetch(',
    'XMLHttpRequest',
    'axios',
    'openai',
    'OpenAI',
    'indexedDB',
    'sessionStorage',
    'document.',
    'navigator.',
    '/api',
    '/export',
    '/import',
  ];

  forbiddenPatterns.forEach((pattern) => {
    assert.equal(
      source.includes(pattern),
      false,
      `Forbidden pattern found in localStorage adapter: ${pattern}`,
    );
  });
});
