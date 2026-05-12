const SUPPORTED_EXPORT_TYPE = 'szenario-lab.scenario';
const SUPPORTED_FORMAT_VERSION = 1;
const REQUIRED_SCENARIO_FIELDS = ['name', 'description', 'goal'];
const KNOWN_TOP_LEVEL_FIELDS = ['exportType', 'formatVersion', 'exportedAt', 'source', 'scenario'];
const KNOWN_SCENARIO_FIELDS = [
  'id',
  'name',
  'description',
  'goal',
  'assumptions',
  'evidence',
  'personas',
  'resources',
  'relationships',
  'interventions',
  'strategies',
  'phases',
];

function createError(reason, message, details) {
  if (details === undefined) {
    return { ok: false, reason, message };
  }

  return { ok: false, reason, message, details };
}

function cloneScenario(scenario) {
  return structuredClone(scenario);
}

function findUnknownFields(value, knownFields) {
  return Object.keys(value).filter((field) => !knownFields.includes(field));
}

export function validateScenarioImportPayload(payload, options = {}) {
  const _options = options;
  void _options;

  if (payload === null || payload === undefined || typeof payload !== 'object') {
    return createError('invalid-json-value', 'Das Import-Payload muss ein Objekt sein.');
  }

  if (Array.isArray(payload)) {
    return createError('top-level-array', 'Das Import-Payload darf kein Array sein.');
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

  const scenario = payload.scenario;
  if (scenario === null || Array.isArray(scenario) || typeof scenario !== 'object') {
    return createError('invalid-scenario', 'Das Feld "scenario" muss ein Objekt sein.');
  }

  for (const field of REQUIRED_SCENARIO_FIELDS) {
    if (!Object.hasOwn(scenario, field)) {
      return createError('missing-required-field', `Das Pflichtfeld "${field}" fehlt im Szenario.`, { field });
    }

    if (typeof scenario[field] !== 'string') {
      return createError('invalid-required-field-type', `Das Pflichtfeld "${field}" muss ein String sein.`, { field });
    }

    if (scenario[field].trim().length === 0) {
      return createError('empty-required-field', `Das Pflichtfeld "${field}" darf nicht leer sein.`, { field });
    }
  }

  const warnings = [];
  const unknownTopLevelFields = findUnknownFields(payload, KNOWN_TOP_LEVEL_FIELDS);
  if (unknownTopLevelFields.length > 0) {
    warnings.push({
      code: 'unknown-top-level-fields',
      fields: unknownTopLevelFields,
    });
  }

  const unknownScenarioFields = findUnknownFields(scenario, KNOWN_SCENARIO_FIELDS);
  if (unknownScenarioFields.length > 0) {
    warnings.push({
      code: 'unknown-scenario-fields',
      fields: unknownScenarioFields,
    });
  }

  return {
    ok: true,
    scenario: cloneScenario(scenario),
    warnings,
  };
}
