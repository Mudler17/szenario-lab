export { createNoPersistenceAdapter } from './adapter/noPersistenceAdapter.js';
export { createLocalStorageDraftAdapter } from './adapter/localStorageDraftAdapter.js';

export {
  NON_PERSISTENCE_ACTION,
  PERSISTENCE_ACTION,
  guardNoPersistenceMode,
  guardPersistenceAction,
  isNonPersistenceAction,
  isPersistenceAction,
  isPersistenceTechnologyBlocked,
} from './orchestration/persistenceGuards.js';

export {
  PERSISTENCE_REASON,
  PERSISTENCE_STATUS,
  createPersistenceResult,
} from './status/persistenceStatus.js';
export { createPersistenceStatusMessage } from './status/persistenceStatusMessages.js';