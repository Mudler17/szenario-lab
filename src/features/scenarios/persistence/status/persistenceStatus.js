export const PERSISTENCE_STATUS = Object.freeze({
  NOT_ACTIVE: 'not-active',
  STORAGE_INACTIVE: 'storageInactive',
  STORAGE_BLOCKED: 'storageBlocked',
  STORAGE_UNAVAILABLE: 'storageUnavailable',
  STORAGE_ACTIVE: 'storageActive',
  DRAFT_SAVED: 'draftSaved',
  DRAFT_LOADED: 'draftLoaded',
  DRAFT_NOT_FOUND: 'draftNotFound',
  DRAFT_CLEARED: 'draftCleared',
  DRAFT_INVALID: 'draftInvalid',
  DRAFT_LIST_EMPTY: 'draftListEmpty',
});

export const PERSISTENCE_REASON = Object.freeze({
  PERSISTENCE_NOT_ACTIVE: 'persistence-not-active',
  PERSISTENCE_ACTION_BLOCKED: 'persistence-action-blocked',
  STORAGE_UNAVAILABLE: 'storage-unavailable',
  NOT_A_PERSISTENCE_ACTION: 'not-a-persistence-action',
  DRAFT_SAVED: 'draft-saved',
  DRAFT_LOADED: 'draft-loaded',
  DRAFT_NOT_FOUND: 'draft-not-found',
  DRAFT_CLEARED: 'draft-cleared',
  DRAFT_INVALID: 'draft-invalid',
  SINGLE_DRAFT_MODE: 'single-draft-mode',
  UNKNOWN: 'unknown',
});

export function createPersistenceResult({ ok = false, status, reason, action = null, data = null } = {}) {
  return { ok, status, reason, action, data };
}
