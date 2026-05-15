import {
  PERSISTENCE_REASON,
  PERSISTENCE_STATUS,
  createPersistenceResult,
} from '../status/persistenceStatus.js';

function createBlockedResult(action, data = null) {
  return createPersistenceResult({
    ok: false,
    status: PERSISTENCE_STATUS.STORAGE_INACTIVE,
    reason: PERSISTENCE_REASON.PERSISTENCE_NOT_ACTIVE,
    action,
    data,
  });
}

export function createNoPersistenceAdapter() {
  return {
    kind: 'no-persistence',
    storageMode: 'none',
    isPersistenceActive() {
      return false;
    },
    isAvailable() {
      return false;
    },
    saveScenario(payload) {
      return createBlockedResult('saveScenario');
    },
    loadScenario() {
      return createBlockedResult('loadScenario');
    },
    deleteScenario() {
      return createBlockedResult('deleteScenario');
    },
    listSavedScenarios() {
      return createBlockedResult('listSavedScenarios', []);
    },
    getStorageInfo() {
      return {
        storageMode: 'none',
        available: false,
        persistent: false,
        description: 'App-interne Speicherung ist deaktiviert. Nutze JSON herunterladen für bewusste Sicherung.',
      };
    },
    saveScenarioDraft(payload) {
      return this.saveScenario(payload);
    },
    loadScenarioDraft() {
      return this.loadScenario();
    },
    clearScenarioDraft() {
      return this.deleteScenario();
    },
  };
}
