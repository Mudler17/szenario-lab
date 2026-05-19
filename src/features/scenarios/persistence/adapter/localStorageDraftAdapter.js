import {
  PERSISTENCE_REASON,
  PERSISTENCE_STATUS,
  createPersistenceResult,
} from '../status/persistenceStatus.js';

const DEFAULT_STORAGE_KEY = 'szenario-lab:current-scenario-draft:v1';

function getLocalStorageSafely() {
  try {
    return globalThis.localStorage;
  } catch {
    return null;
  }
}

function getStorageAccess() {
  const storage = getLocalStorageSafely();
  if (!storage) {
    return { available: false, storage: null };
  }

  return { available: true, storage };
}

function createUnavailableResult(action) {
  return createPersistenceResult({
    ok: false,
    status: PERSISTENCE_STATUS.STORAGE_UNAVAILABLE,
    reason: PERSISTENCE_REASON.STORAGE_UNAVAILABLE,
    action,
    data: null,
  });
}

export function createLocalStorageDraftAdapter(options = {}) {
  const storageKey = typeof options.storageKey === 'string' && options.storageKey.length > 0
    ? options.storageKey
    : DEFAULT_STORAGE_KEY;

  const adapter = {
    kind: 'local-storage-draft',
    storageMode: 'localStorage',
    isPersistenceActive() {
      return true;
    },
    isAvailable() {
      const access = getStorageAccess();
      if (!access.available) {
        return false;
      }

      try {
        const probeKey = `${storageKey}:availability-probe`;
        access.storage.setItem(probeKey, '1');
        access.storage.removeItem(probeKey);
        return true;
      } catch {
        return false;
      }
    },
    saveScenarioDraft(payload) {
      const access = getStorageAccess();
      if (!access.available) {
        return createUnavailableResult('saveScenarioDraft');
      }

      try {
        const serialized = JSON.stringify(payload);
        access.storage.setItem(storageKey, serialized);
        return createPersistenceResult({
          ok: true,
          status: PERSISTENCE_STATUS.DRAFT_SAVED,
          reason: PERSISTENCE_REASON.DRAFT_SAVED,
          action: 'saveScenarioDraft',
          data: { storageKey },
        });
      } catch {
        return createUnavailableResult('saveScenarioDraft');
      }
    },
    loadScenarioDraft() {
      const access = getStorageAccess();
      if (!access.available) {
        return createUnavailableResult('loadScenarioDraft');
      }

      try {
        const serialized = access.storage.getItem(storageKey);
        if (serialized === null) {
          return createPersistenceResult({
            ok: false,
            status: PERSISTENCE_STATUS.DRAFT_NOT_FOUND,
            reason: PERSISTENCE_REASON.DRAFT_NOT_FOUND,
            action: 'loadScenarioDraft',
            data: null,
          });
        }

        let draft;
        try {
          draft = JSON.parse(serialized);
        } catch {
          return createPersistenceResult({
            ok: false,
            status: PERSISTENCE_STATUS.DRAFT_INVALID,
            reason: PERSISTENCE_REASON.DRAFT_INVALID,
            action: 'loadScenarioDraft',
            data: null,
          });
        }

        return createPersistenceResult({
          ok: true,
          status: PERSISTENCE_STATUS.DRAFT_LOADED,
          reason: PERSISTENCE_REASON.DRAFT_LOADED,
          action: 'loadScenarioDraft',
          data: draft,
        });
      } catch {
        return createUnavailableResult('loadScenarioDraft');
      }
    },
    clearScenarioDraft() {
      const access = getStorageAccess();
      if (!access.available) {
        return createUnavailableResult('clearScenarioDraft');
      }

      try {
        access.storage.removeItem(storageKey);
        return createPersistenceResult({
          ok: true,
          status: PERSISTENCE_STATUS.DRAFT_CLEARED,
          reason: PERSISTENCE_REASON.DRAFT_CLEARED,
          action: 'clearScenarioDraft',
          data: { storageKey },
        });
      } catch {
        return createUnavailableResult('clearScenarioDraft');
      }
    },
    saveScenario(payload) {
      return this.saveScenarioDraft(payload);
    },
    loadScenario() {
      return this.loadScenarioDraft();
    },
    deleteScenario() {
      return this.clearScenarioDraft();
    },
    listSavedScenarios() {
      return createPersistenceResult({
        ok: true,
        status: PERSISTENCE_STATUS.DRAFT_LIST_EMPTY,
        reason: PERSISTENCE_REASON.SINGLE_DRAFT_MODE,
        action: 'listSavedScenarios',
        data: [],
      });
    },
    getStorageInfo() {
      const available = this.isAvailable();
      return {
        storageMode: 'localStorage',
        available,
        persistent: available,
        storageKey,
        description: 'Browserlokale Speicherung des aktuellen Drafts via localStorage (nur dieser Browser, kein Backend, keine Accounts).',
      };
    },
  };

  return adapter;
}
