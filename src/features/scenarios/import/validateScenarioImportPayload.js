const SUPPORTED_EXPORT_TYPE = 'szenario-lab.scenario';
const SUPPORTED_FORMAT_VERSION = 1;
const REQUIRED_SCENARIO_FIELDS = ['name', 'description', 'goal'];
const KNOWN_TOP_LEVEL_FIELDS = ['exportType', 'formatVersion', 'exportedAt', 'source', 'scenario'];
const KNOWN_SCENARIO_FIELDS = [
  'id',
  'name',
  'description',
  'goal',
  'personas',
  'assumptions',
  'evidence',
  'interventions',
  'resources',
  'phases',
  'relationships',
  'strategies',
  'createdAt',
  'updatedAt',
];

function createError(reason, message, details = {}, warnings = []) {
  return {
    ok: false,
    reason,
    message,
    details,
    warnings,
  };
}

function cloneScenario(scenario) {
  return structuredClone(scenario);
}

export function validateScenarioImportPayload(payload, options = {}) {
  const _options = options;
  void _options;

  if (payload === undefined || payload === null) {
    return createError('invalid-json-value', 'Die Importdaten fehlen oder sind ungültig.');
  }

  if (Array.isArray(payload)) {
    return createError('top-level-array', 'Das Import-Payload darf kein Array sein.');
  }

  if (typeof payload !== 'object') {
    return createError('invalid-json-value', 'Das Import-Payload muss ein Objekt sein.');
  }

  if (!Object.hasOwn(payload, 'exportType')) {
    return createError('missing-export-type', 'Das Feld "exportType" fehlt.');
  }

  if (payload.exportType !== SUPPORTED_EXPORT_TYPE) {
    return createError('unsupported-export-type', 'Dieser Export-Typ wird nicht unterstützt.');
  }

  if (!Object.hasOwn(payload, 'formatVersion')) {
    return createError('missing-format-version', 'Das Feld "formatVersion" fehlt.');
  }

  if (payload.formatVersion !== SUPPORTED_FORMAT_VERSION) {
    return createError('unsupported-format-version', 'Diese Exportversion wird nicht unterstützt.');
  }

  if (!Object.hasOwn(payload, 'scenario')) {
    return createError('missing-scenario', 'Das Feld "scenario" fehlt.');
  }

  if (payload.scenario === null || Array.isArray(payload.scenario) || typeof payload.scenario !== 'object') {
    return createError('invalid-scenario', 'Das Feld "scenario" muss ein Objekt sein.');
  }

  for (const field of REQUIRED_SCENARIO_FIELDS) {
    if (!Object.hasOwn(payload.scenario, field)) {
      return createError('missing-required-field', `Das Pflichtfeld "${field}" fehlt im Szenario.`, { field });
    }

    const value = payload.scenario[field];
    if (typeof value !== 'string') {
      return createError('invalid-required-field-type', `Das Pflichtfeld "${field}" muss ein String sein.`, { field });
    }

    if (value.trim().length === 0) {
      return createError('empty-required-field', `Das Pflichtfeld "${field}" darf nicht leer sein.`, { field });
    }
  }

  const warnings = [];
  const unknownTopLevelFields = Object.keys(payload).filter((key) => !KNOWN_TOP_LEVEL_FIELDS.includes(key));
  if (unknownTopLevelFields.length > 0) {
    warnings.push({
      code: 'unknown-top-level-fields',
      fields: unknownTopLevelFields,
    });
  }

  const unknownScenarioFields = Object.keys(payload.scenario).filter((key) => !KNOWN_SCENARIO_FIELDS.includes(key));
  if (unknownScenarioFields.length > 0) {
    warnings.push({
      code: 'unknown-scenario-fields',
      fields: unknownScenarioFields,
    });
  }

  return {
    ok: true,
    scenario: cloneScenario(payload.scenario),
    warnings,
  };
}
