import { validateScenarioImportPayload } from './validateScenarioImportPayload.js';

export function parseScenarioImportJsonText(jsonText) {
  try {
    const parsedValue = JSON.parse(jsonText);
    return validateScenarioImportPayload(parsedValue);
  } catch {
    return {
      ok: false,
      reason: 'invalid-json-syntax',
      message: 'Die Datei enthält kein gültiges JSON.',
    };
  }
}
