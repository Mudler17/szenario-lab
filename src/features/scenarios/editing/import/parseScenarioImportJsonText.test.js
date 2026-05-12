import test from 'node:test';
import assert from 'node:assert/strict';

import { parseScenarioImportJsonText } from './parseScenarioImportJsonText.js';

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

test('returns validation success for valid JSON text', () => {
  const payload = createValidPayload();
  const result = parseScenarioImportJsonText(JSON.stringify(payload));

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, []);
  assert.deepEqual(result.scenario, payload.scenario);
});

test('returns invalid-json-syntax for syntactically invalid JSON text', () => {
  const result = parseScenarioImportJsonText('{"exportType":');

  assert.deepEqual(result, {
    ok: false,
    reason: 'invalid-json-syntax',
    message: 'Die Datei enthält kein gültiges JSON.',
  });
});

test('returns invalid-json-syntax for empty text', () => {
  const result = parseScenarioImportJsonText('');

  assert.deepEqual(result, {
    ok: false,
    reason: 'invalid-json-syntax',
    message: 'Die Datei enthält kein gültiges JSON.',
  });
});

test('passes through validation error for top-level array', () => {
  const result = parseScenarioImportJsonText('[]');

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'top-level-array');
});

test('passes through validation error for unsupported exportType', () => {
  const payload = { ...createValidPayload(), exportType: 'other' };
  const result = parseScenarioImportJsonText(JSON.stringify(payload));

  assert.equal(result.ok, false);
  assert.equal(result.reason, 'unsupported-export-type');
  assert.equal(result.message, 'Dieser Export-Typ wird nicht unterstützt.');
});

test('passes warnings through unchanged for unknown fields', () => {
  const payload = {
    ...createValidPayload(),
    customTopLevel: true,
    scenario: {
      ...createValidPayload().scenario,
      customNode: { active: true },
    },
  };

  const result = parseScenarioImportJsonText(JSON.stringify(payload));

  assert.equal(result.ok, true);
  assert.deepEqual(result.warnings, [
    { code: 'unknown-top-level-fields', fields: ['customTopLevel'] },
    { code: 'unknown-scenario-fields', fields: ['customNode'] },
  ]);
});

test('does not reinterpret validation result payload', () => {
  const payload = { ...createValidPayload() };
  delete payload.scenario;

  const result = parseScenarioImportJsonText(JSON.stringify(payload));

  assert.deepEqual(result, {
    ok: false,
    reason: 'missing-scenario',
    message: 'Das Feld "scenario" fehlt.',
  });
});

test('returns deep-cloned scenario via validation utility', () => {
  const payload = createValidPayload();
  payload.scenario.personas = [{ id: 'p1', name: 'Persona A' }];

  const result = parseScenarioImportJsonText(JSON.stringify(payload));

  assert.equal(result.ok, true);
  assert.notEqual(result.scenario, payload.scenario);
  assert.notEqual(result.scenario.personas, payload.scenario.personas);

  result.scenario.personas[0].name = 'Geändert';
  assert.equal(payload.scenario.personas[0].name, 'Persona A');
});
