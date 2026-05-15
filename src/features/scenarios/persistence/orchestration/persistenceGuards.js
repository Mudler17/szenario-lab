import { PERSISTENCE_REASON, createPersistenceResult } from '../status/persistenceStatus.js';

const BLOCKED_PERSISTENCE_TECHNOLOGY_PATTERN = /(localstorage|sessionstorage|indexeddb|backend|api|database|auth|account)/i;

export const PERSISTENCE_ACTION = Object.freeze({
  SAVE_SCENARIO: 'saveScenario',
  LOAD_SCENARIO: 'loadScenario',
  DELETE_SCENARIO: 'deleteScenario',
  LIST_SAVED_SCENARIOS: 'listSavedScenarios',
});

export const NON_PERSISTENCE_ACTION = Object.freeze({
  DRAFT_CHANGED: 'draftChanged',
  JSON_IMPORTED: 'jsonImported',
  JSON_EXPORTED: 'jsonExported',
  APP_STARTED: 'appStarted',
  DRAFT_RESET: 'draftReset',
});

const PERSISTENCE_ACTION_VALUES = new Set(Object.values(PERSISTENCE_ACTION));
const NON_PERSISTENCE_ACTION_VALUES = new Set(Object.values(NON_PERSISTENCE_ACTION));

export function isPersistenceTechnologyBlocked(value) {
  if (typeof value !== 'string') {
    return false;
  }

  return BLOCKED_PERSISTENCE_TECHNOLOGY_PATTERN.test(value);
}

export function isPersistenceAction(action) {
  return PERSISTENCE_ACTION_VALUES.has(action);
}

export function isNonPersistenceAction(action) {
  return NON_PERSISTENCE_ACTION_VALUES.has(action);
}

export function guardPersistenceAction(action) {
  if (isPersistenceAction(action)) {
    return createPersistenceResult({
      ok: false,
      reason: PERSISTENCE_REASON.PERSISTENCE_ACTION_BLOCKED,
      action,
    });
  }

  if (isNonPersistenceAction(action)) {
    return createPersistenceResult({
      ok: true,
      reason: PERSISTENCE_REASON.NOT_A_PERSISTENCE_ACTION,
      action,
    });
  }

  return createPersistenceResult({
    ok: false,
    reason: PERSISTENCE_REASON.UNKNOWN,
    action,
  });
}

export function guardNoPersistenceMode({ persistenceActive } = {}) {
  if (persistenceActive === true) {
    return {
      ok: false,
      reason: 'persistence-not-active-only',
    };
  }

  return {
    ok: true,
  };
}
