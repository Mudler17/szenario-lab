import test from 'node:test';
import assert from 'node:assert/strict';

import { createScenarioExportPayload } from './createScenarioExportPayload.js';

test('createScenarioExportPayload erzeugt die erwartete Top-Level-Struktur', () => {
  const draft = {
    id: 'example-scenario',
    name: 'Szenario A',
  };

  const payload = createScenarioExportPayload(draft, {
    exportedAt: '2026-01-01T12:00:00.000Z',
  });

  assert.equal(payload.exportType, 'szenario-lab.scenario');
  assert.equal(payload.formatVersion, 1);
  assert.equal(payload.exportedAt, '2026-01-01T12:00:00.000Z');
  assert.equal(payload.source, 'szenario-lab');
  assert.deepEqual(payload.scenario, draft);
});

test('exportedAt kann über options.exportedAt stabil gesetzt werden', () => {
  const payload = createScenarioExportPayload({}, {
    exportedAt: '2026-02-02T08:30:00.000Z',
  });

  assert.equal(payload.exportedAt, '2026-02-02T08:30:00.000Z');
});

test('scenario enthält eine Kopie des Drafts', () => {
  const draft = {
    name: 'Szenario A',
    meta: {
      owner: 'Team Alpha',
    },
  };

  const payload = createScenarioExportPayload(draft);

  assert.notEqual(payload.scenario, draft);
  assert.notEqual(payload.scenario.meta, draft.meta);
  assert.deepEqual(payload.scenario, draft);
});

test('Änderungen am exportierten scenario verändern den Original-Draft nicht', () => {
  const draft = {
    name: 'Szenario A',
    meta: {
      owner: 'Team Alpha',
    },
  };

  const payload = createScenarioExportPayload(draft);

  payload.scenario.name = 'Szenario B';
  payload.scenario.meta.owner = 'Team Beta';

  assert.equal(draft.name, 'Szenario A');
  assert.equal(draft.meta.owner, 'Team Alpha');
});

test('null-Draft erzeugt scenario: null', () => {
  const payload = createScenarioExportPayload(null, {
    exportedAt: '2026-03-03T00:00:00.000Z',
  });

  assert.equal(payload.scenario, null);
});

test('die Funktion erzeugt keinen JSON-String, sondern ein Objekt', () => {
  const payload = createScenarioExportPayload({ id: 'example' });

  assert.equal(typeof payload, 'object');
  assert.equal(Array.isArray(payload), false);
});
