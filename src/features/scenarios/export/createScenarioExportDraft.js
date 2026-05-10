import { createScenarioExportPayload } from './createScenarioExportPayload.js';
import { createScenarioExportFilename } from './createScenarioExportFilename.js';

export function createScenarioExportDraft(scenarioDraft, options = {}) {
  const exportedAt = options.exportedAt ?? new Date().toISOString();

  const payload = createScenarioExportPayload(scenarioDraft, { exportedAt });
  const filename = createScenarioExportFilename(scenarioDraft, { exportedAt });

  return {
    payload,
    filename,
    exportedAt,
  };
}
