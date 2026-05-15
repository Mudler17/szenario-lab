export const PERSISTENCE_STATUS = Object.freeze({
  NOT_ACTIVE: 'not-active',
  STORAGE_INACTIVE: 'storageInactive',
  STORAGE_BLOCKED: 'storageBlocked',
  STORAGE_UNAVAILABLE: 'storageUnavailable',
});

export const PERSISTENCE_REASON = Object.freeze({
  PERSISTENCE_NOT_ACTIVE: 'persistence-not-active',
  PERSISTENCE_ACTION_BLOCKED: 'persistence-action-blocked',
  STORAGE_UNAVAILABLE: 'storage-unavailable',
  NOT_A_PERSISTENCE_ACTION: 'not-a-persistence-action',
  UNKNOWN: 'unknown',
});

export function createPersistenceResult({ ok = false, status, reason, action = null, data = null } = {}) {
  return { ok, status, reason, action, data };
}
