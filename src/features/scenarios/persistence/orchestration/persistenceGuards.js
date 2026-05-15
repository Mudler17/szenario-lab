const BLOCKED_PERSISTENCE_TECHNOLOGY_PATTERN = /(localstorage|sessionstorage|indexeddb|backend|api|database|auth|account)/i;

export function isPersistenceTechnologyBlocked(value) {
  if (typeof value !== 'string') {
    return false;
  }

  return BLOCKED_PERSISTENCE_TECHNOLOGY_PATTERN.test(value);
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
