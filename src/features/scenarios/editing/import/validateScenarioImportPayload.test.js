import test from 'node:test';
import assert from 'node:assert/strict';

import { validateScenarioImportPayload } from './validateScenarioImportPayload.js';

function createValidPayload() {
  return {
    exportType: 'szenario-lab.scenario',
    formatVersion: 1,
    exportedAt: '2026-05-12T12:00:00.000Z',
    source: 'test-suite',
    scenario: {
      id: 'scenario-1',
      name: 'Name',
      description: 'Beschreibung',
      goal: 'Ziel',
      assumptions: [],
      evidence: [],
      personas: [],
      resources: [],
      relationships: [],
      interventions: [],
      strategies: [],
      phases: [],
    },
  };
}

test('returns success and cloned scenario for valid payload', () => {
  const payload = createValidPayload();
  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, []);
  assert.deepEqual(result.scenario, payload.scenario);
  assert.notEqual(result.scenario, payload.scenario);
});

test('rejects invalid top-level values', () => {
  assert.equal(validateScenarioImportPayload(null).reason, 'invalid-json-value');
  assert.equal(validateScenarioImportPayload('x').reason, 'invalid-json-value');
  assert.equal(validateScenarioImportPayload(1).reason, 'invalid-json-value');
  assert.equal(validateScenarioImportPayload(true).reason, 'invalid-json-value');
  assert.equal(validateScenarioImportPayload([]).reason, 'top-level-array');
});

test('rejects missing required top-level fields', () => {
  const noExportType = createValidPayload();
  delete noExportType.exportType;
  assert.equal(validateScenarioImportPayload(noExportType).reason, 'missing-export-type');

  const noFormatVersion = createValidPayload();
  delete noFormatVersion.formatVersion;
  assert.equal(validateScenarioImportPayload(noFormatVersion).reason, 'missing-format-version');

  const noScenario = createValidPayload();
  delete noScenario.scenario;
  assert.equal(validateScenarioImportPayload(noScenario).reason, 'missing-scenario');
});

test('rejects unsupported exportType and formatVersion', () => {
  assert.equal(
    validateScenarioImportPayload({ ...createValidPayload(), exportType: 'other' }).reason,
    'unsupported-export-type',
  );

  assert.equal(
    validateScenarioImportPayload({ ...createValidPayload(), formatVersion: 2 }).reason,
    'unsupported-format-version',
  );
});

test('rejects invalid scenario containers', () => {
  assert.equal(validateScenarioImportPayload({ ...createValidPayload(), scenario: null }).reason, 'invalid-scenario');
  assert.equal(validateScenarioImportPayload({ ...createValidPayload(), scenario: [] }).reason, 'invalid-scenario');
  assert.equal(validateScenarioImportPayload({ ...createValidPayload(), scenario: 7 }).reason, 'invalid-scenario');
});

test('rejects missing required scenario fields', () => {
  for (const field of ['name', 'description', 'goal']) {
    const payload = createValidPayload();
    delete payload.scenario[field];
    const result = validateScenarioImportPayload(payload);

    assert.equal(result.reason, 'missing-required-field');
    assert.deepEqual(result.details, { field });
  }
});

test('rejects non-string required scenario fields', () => {
  for (const field of ['name', 'description', 'goal']) {
    const payload = createValidPayload();
    payload.scenario[field] = 42;
    const result = validateScenarioImportPayload(payload);

    assert.equal(result.reason, 'invalid-required-field-type');
    assert.deepEqual(result.details, { field });
  }
});

test('rejects empty required scenario fields', () => {
  const inputs = {
    name: '   ',
    description: '\n\t',
    goal: '',
  };

  for (const [field, value] of Object.entries(inputs)) {
    const payload = createValidPayload();
    payload.scenario[field] = value;
    const result = validateScenarioImportPayload(payload);

    assert.equal(result.reason, 'empty-required-field');
    assert.deepEqual(result.details, { field });
  }
});

test('returns clone instead of reference', () => {
  const payload = createValidPayload();
  payload.scenario.personas = [{ id: 'p1', name: 'Persona A' }];

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, true);
  assert.notEqual(result.scenario, payload.scenario);
  assert.notEqual(result.scenario.personas, payload.scenario.personas);

  result.scenario.personas[0].name = 'Geändert';
  assert.equal(payload.scenario.personas[0].name, 'Persona A');
});

test('accepts known optional top-level fields without warnings', () => {
  const result = validateScenarioImportPayload(createValidPayload());

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, []);
});

test('adds warning for unknown top-level fields', () => {
  const payload = {
    ...createValidPayload(),
    customMeta: { foo: 'bar' },
  };

  const result = validateScenarioImportPayload(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, [
    {
      code: 'unknown-top-level-fields',
      fields: ['customMeta'],
    },
  ]);
});

test('adds warning for unknown scenario fields', () => {
  const payload = createValidPayload();
  payload.scenario.customNode = { active: true };

  const result = validateScenarioImportPayload(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, [
    {
      code: 'unknown-scenario-fields',
      fields: ['customNode'],
    },
  ]);
});

test('unknown fields do not block import', () => {
  const payload = {
    ...createValidPayload(),
    customTopLevel: true,
    scenario: {
      ...createValidPayload().scenario,
      customScenarioPart: 'x',
    },
  };

  const result = validateScenarioImportPayload(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, [
    { code: 'unknown-top-level-fields', fields: ['customTopLevel'] },
    { code: 'unknown-scenario-fields', fields: ['customScenarioPart'] },
  ]);
  assert.deepEqual(result.scenario, payload.scenario);
});

test('does not mutate payload object', () => {
  const payload = createValidPayload();
  payload.extra = { value: 1 };
  payload.scenario.unknown = 'keep';
  const before = structuredClone(payload);

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, true);
  assert.deepEqual(payload, before);
});
