const DEFAULT_ERROR_MESSAGE = 'Die Datei konnte nicht als gültiger Szenario-Import geprüft werden.';

const REQUIRED_FIELDS_ERROR_REASONS = new Set([
  'missing-required-field',
  'invalid-required-field-type',
  'empty-required-field',
]);

const GENERIC_IMPORT_ERROR_REASONS = new Set([
  'invalid-json-value',
  'top-level-array',
  'missing-export-type',
  'missing-format-version',
  'unsupported-format-version',
  'missing-scenario',
  'invalid-scenario',
]);

export function createJsonImportStatusMessage(result) {
  if (result === null || result === undefined) {
    return {
      type: 'info',
      message: 'Es wurde noch keine Importdatei geprüft.',
    };
  }

  if (result.ok === true) {
    if (Array.isArray(result.warnings) && result.warnings.length > 0) {
      return {
        type: 'warning',
        message: 'Die Datei enthält gültige Szenariodaten, aber zusätzliche unbekannte Felder.',
      };
    }

    return {
      type: 'success',
      message: 'Die JSON-Datei wurde geprüft und enthält ein gültiges Szenario.',
    };
  }

  if (result.reason === 'invalid-json-syntax') {
    return {
      type: 'error',
      message: 'Die Datei enthält kein gültiges JSON.',
    };
  }

  if (result.reason === 'unsupported-export-type') {
    return {
      type: 'error',
      message: 'Diese Datei ist kein unterstützter szenario-lab-Export.',
    };
  }

  if (REQUIRED_FIELDS_ERROR_REASONS.has(result.reason)) {
    return {
      type: 'error',
      message: 'Name, Beschreibung oder Ziel fehlen oder sind leer.',
    };
  }

  if (GENERIC_IMPORT_ERROR_REASONS.has(result.reason)) {
    return {
      type: 'error',
      message: DEFAULT_ERROR_MESSAGE,
    };
  }

  return {
    type: 'error',
    message: DEFAULT_ERROR_MESSAGE,
  };
}
