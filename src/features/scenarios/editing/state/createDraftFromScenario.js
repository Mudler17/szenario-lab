export function createDraftFromScenario(scenario) {
  if (!scenario) {
    return null;
  }

  if (typeof structuredClone === 'function') {
    return structuredClone(scenario);
  }

  return JSON.parse(JSON.stringify(scenario));
}
