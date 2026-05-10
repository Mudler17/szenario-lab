export function createScenarioExportPayload(scenarioDraft, options = {}) {
  const { exportedAt = new Date().toISOString() } = options;

  return {
    exportType: 'szenario-lab.scenario',
    formatVersion: 1,
    exportedAt,
    source: 'szenario-lab',
    scenario: scenarioDraft == null ? null : structuredClone(scenarioDraft),
  };
}
