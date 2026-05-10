import test from 'node:test';
import assert from 'node:assert/strict';

import { validateScenarioImportPayload } from './validateScenarioImportPayload.js';

function createValidPayload() {
  return {
    exportType: 'szenario-lab.scenario',
    formatVersion: 1,
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

test('rejects missing payload', () => {
  const result = validateScenarioImportPayload(undefined);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'invalid-json-value');
});

test('rejects top-level arrays', () => {
  const result = validateScenarioImportPayload([]);

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'top-level-array');
});

test('rejects invalid export type and format version', () => {
  const wrongType = validateScenarioImportPayload({
    ...createValidPayload(),
    exportType: 'other',
  });
  assert.equal(wrongType.ok, false);
  assert.equal(wrongType.reason, 'unsupported-export-type');

  const wrongVersion = validateScenarioImportPayload({
    ...createValidPayload(),
    formatVersion: '1',
  });
  assert.equal(wrongVersion.ok, false);
  assert.equal(wrongVersion.reason, 'unsupported-format-version');
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

test('rejects missing, invalid and empty required fields', () => {
  const missing = createValidPayload();
  delete missing.scenario.name;
  assert.equal(validateScenarioImportPayload(missing).reason, 'missing-required-field');

  const invalidType = createValidPayload();
  invalidType.scenario.description = 123;
  assert.equal(validateScenarioImportPayload(invalidType).reason, 'invalid-required-field-type');

  const empty = createValidPayload();
  empty.scenario.goal = '   \n\t';
  assert.equal(validateScenarioImportPayload(empty).reason, 'empty-required-field');
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

test('returns scenario as copy and does not mutate input payload', () => {
  const payload = createValidPayload();
  const originalSnapshot = structuredClone(payload);

  const result = validateScenarioImportPayload(payload);

  assert.notEqual(result.scenario, payload.scenario);
  assert.deepEqual(payload, originalSnapshot);
});
