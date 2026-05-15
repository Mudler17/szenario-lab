export function createNoPersistenceAdapter() {
  return {
    kind: 'no-persistence',
    isPersistenceActive() {
      return false;
    },
    saveScenarioDraft() {
      return {
        ok: false,
        reason: 'persistence-not-active',
      };
    },
    loadScenarioDraft() {
      return {
        ok: false,
        reason: 'persistence-not-active',
      };
    },
    clearScenarioDraft() {
      return {
        ok: false,
        reason: 'persistence-not-active',
      };
    },
  };
}
