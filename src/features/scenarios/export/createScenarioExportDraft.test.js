import test from 'node:test';
import assert from 'node:assert/strict';

import { createScenarioExportDraft } from './createScenarioExportDraft.js';

test('createScenarioExportDraft erzeugt payload, filename und exportedAt', () => {
  const draft = {
    id: 'example-scenario',
    name: 'Pilotbereich Kundenservice',
    description: 'Beschreibung',
    goal: 'Ziel',
  };

  const exportDraft = createScenarioExportDraft(draft, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(typeof exportDraft, 'object');
  assert.ok(exportDraft.payload);
  assert.equal(typeof exportDraft.filename, 'string');
  assert.equal(typeof exportDraft.exportedAt, 'string');
});

test('options.exportedAt wird stabil übernommen', () => {
  const exportDraft = createScenarioExportDraft({}, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(exportDraft.exportedAt, '2026-05-10T08:30:00.000Z');
});

test('payload.exportedAt entspricht dem zurückgegebenen exportedAt', () => {
  const exportDraft = createScenarioExportDraft({}, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(exportDraft.payload.exportedAt, exportDraft.exportedAt);
});

test('filename nutzt dasselbe Datum wie exportedAt', () => {
  const exportDraft = createScenarioExportDraft(
    { name: 'Pilotbereich Kundenservice' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(
    exportDraft.filename,
    'szenario-lab-pilotbereich-kundenservice-2026-05-10.json',
  );
});

test('payload enthält den Szenario-Draft als Kopie', () => {
  const draft = {
    id: 'example-scenario',
    name: 'Szenario A',
    meta: {
      owner: 'Team Alpha',
    },
  };

  const exportDraft = createScenarioExportDraft(draft);

  assert.notEqual(exportDraft.payload.scenario, draft);
  assert.notEqual(exportDraft.payload.scenario.meta, draft.meta);
  assert.deepEqual(exportDraft.payload.scenario, draft);
});

test('Änderungen am payload.scenario verändern den Original-Draft nicht', () => {
  const draft = {
    id: 'example-scenario',
    name: 'Szenario A',
    meta: {
      owner: 'Team Alpha',
    },
  };

  const exportDraft = createScenarioExportDraft(draft);

  exportDraft.payload.scenario.name = 'Szenario B';
  exportDraft.payload.scenario.meta.owner = 'Team Beta';

  assert.equal(draft.name, 'Szenario A');
  assert.equal(draft.meta.owner, 'Team Alpha');
});

test('null-Draft erzeugt payload.scenario: null', () => {
  const exportDraft = createScenarioExportDraft(null, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(exportDraft.payload.scenario, null);
});

test('null-Draft erzeugt Dateiname mit export-Fallback', () => {
  const exportDraft = createScenarioExportDraft(null, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(exportDraft.filename, 'szenario-lab-export-2026-05-10.json');
});

test('die Funktion gibt ein Objekt zurück', () => {
  const exportDraft = createScenarioExportDraft({ id: 'example' });

  assert.equal(typeof exportDraft, 'object');
  assert.equal(Array.isArray(exportDraft), false);
});

test('die Funktion erzeugt keinen JSON-String', () => {
  const exportDraft = createScenarioExportDraft({ id: 'example' });

  assert.notEqual(typeof exportDraft, 'string');
  assert.notEqual(typeof exportDraft.payload, 'string');
});

test('die Funktion mutiert den Draft nicht', () => {
  const draft = {
    id: 'example-scenario',
    name: 'Pilotbereich Kundenservice',
    goal: 'Ziel',
  };
  const originalDraft = structuredClone(draft);

  createScenarioExportDraft(draft, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.deepEqual(draft, originalDraft);
});
