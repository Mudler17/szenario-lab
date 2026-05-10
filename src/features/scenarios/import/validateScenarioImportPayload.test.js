import test from 'node:test';
import assert from 'node:assert/strict';

import { validateScenarioImportPayload } from './validateScenarioImportPayload.js';

function createValidPayload() {
  return {
    exportType: 'szenario-lab.scenario',
    formatVersion: 1,
    exportedAt: '2026-05-10T00:00:00.000Z',
    source: 'szenario-lab',
    scenario: {
      id: 's1',
      name: 'Name',
      description: 'Beschreibung',
      goal: 'Ziel',
    },
  };
}

test('returns success for a valid payload', () => {
  const result = validateScenarioImportPayload(createValidPayload());

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, []);
  assert.deepEqual(result.scenario, createValidPayload().scenario);
});

test('rejects null payload', () => {
  const result = validateScenarioImportPayload(null);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-json-value');
});

test('rejects string payload', () => {
  const result = validateScenarioImportPayload('x');

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-json-value');
});

test('rejects number payload', () => {
  const result = validateScenarioImportPayload(42);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-json-value');
});

test('rejects boolean payload', () => {
  const result = validateScenarioImportPayload(false);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-json-value');
});

test('rejects top-level arrays', () => {
  const result = validateScenarioImportPayload([]);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'top-level-array');
});

test('rejects missing exportType', () => {
  const payload = createValidPayload();
  delete payload.exportType;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'missing-export-type');
});

test('rejects missing formatVersion', () => {
  const payload = createValidPayload();
  delete payload.formatVersion;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'missing-format-version');
});

test('rejects unsupported formatVersion', () => {
  const result = validateScenarioImportPayload({
    ...createValidPayload(),
    formatVersion: 2,
  });

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'unsupported-format-version');
});

test('rejects missing scenario', () => {
  const payload = createValidPayload();
  delete payload.scenario;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'missing-scenario');
});

test('rejects invalid export type', () => {
  const result = validateScenarioImportPayload({
    ...createValidPayload(),
    exportType: 'other',
  });

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'unsupported-export-type');
});

test('rejects invalid scenario containers', () => {
  assert.equal(
    validateScenarioImportPayload({ ...createValidPayload(), scenario: null }).reason,
    'invalid-scenario',
  );
  assert.equal(
    validateScenarioImportPayload({ ...createValidPayload(), scenario: [] }).reason,
    'invalid-scenario',
  );
  assert.equal(
    validateScenarioImportPayload({ ...createValidPayload(), scenario: 'x' }).reason,
    'invalid-scenario',
  );
});

test('rejects missing description field', () => {
  const payload = createValidPayload();
  delete payload.scenario.description;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'missing-required-field');
  assert.deepEqual(result.details, { field: 'description' });
});

test('rejects missing goal field', () => {
  const payload = createValidPayload();
  delete payload.scenario.goal;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'missing-required-field');
  assert.deepEqual(result.details, { field: 'goal' });
});

test('rejects non-string name field', () => {
  const payload = createValidPayload();
  payload.scenario.name = 123;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-required-field-type');
  assert.deepEqual(result.details, { field: 'name' });
});

test('rejects non-string goal field', () => {
  const payload = createValidPayload();
  payload.scenario.goal = 123;

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-required-field-type');
  assert.deepEqual(result.details, { field: 'goal' });
});

test('rejects empty name field', () => {
  const payload = createValidPayload();
  payload.scenario.name = '  ';

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'empty-required-field');
  assert.deepEqual(result.details, { field: 'name' });
});

test('rejects empty description field', () => {
  const payload = createValidPayload();
  payload.scenario.description = '\n\t';

  const result = validateScenarioImportPayload(payload);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'empty-required-field');
  assert.deepEqual(result.details, { field: 'description' });
});

test('valid app export payload with exportedAt and source creates no unknown-top-level-fields warning', () => {
  const result = validateScenarioImportPayload(createValidPayload());

  assert.equal(result.ok, true);
  assert.equal(result.warnings.some((warning) => warning.code === 'unknown-top-level-fields'), false);
});

test('collects warnings for unknown top-level and scenario fields without failing', () => {
  const result = validateScenarioImportPayload({
    ...createValidPayload(),
    extra: true,
    scenario: {
      ...createValidPayload().scenario,
      customField: 'x',
    },
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, [
    { code: 'unknown-top-level-fields', fields: ['extra'] },
    { code: 'unknown-scenario-fields', fields: ['customField'] },
  ]);
});

test('returns deeply copied scenario and does not mutate input payload', () => {
  const payload = createValidPayload();
  payload.scenario.personas = [{ id: 'p1', name: 'Persona A' }];
  const originalSnapshot = structuredClone(payload);

  const result = validateScenarioImportPayload(payload);

  assert.notEqual(result.scenario, payload.scenario);
  assert.notEqual(result.scenario.personas, payload.scenario.personas);
  assert.notEqual(result.scenario.personas[0], payload.scenario.personas[0]);

  result.scenario.personas[0].name = 'Geändert';

  assert.equal(payload.scenario.personas[0].name, 'Persona A');
  assert.deepEqual(payload, originalSnapshot);
});
