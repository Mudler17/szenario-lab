import test from 'node:test';
import assert from 'node:assert/strict';

import { createScenarioExportFilename } from './createScenarioExportFilename.js';

test('Dateiname wird aus scenario.name und exportedAt erzeugt', () => {
  const filename = createScenarioExportFilename(
    { name: 'Pilotbereich Kundenservice' },
    { exportedAt: '2026-01-01T12:00:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-pilotbereich-kundenservice-2026-01-01.json');
});

test('Leerzeichen werden zu Bindestrichen', () => {
  const filename = createScenarioExportFilename(
    { name: 'Pilotbereich   Kundenservice' },
    { exportedAt: '2026-01-01T12:00:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-pilotbereich-kundenservice-2026-01-01.json');
});

test('Großbuchstaben werden kleingeschrieben', () => {
  const filename = createScenarioExportFilename(
    { name: 'PILOTBEREICH KundenSERVICE' },
    { exportedAt: '2026-01-01T12:00:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-pilotbereich-kundenservice-2026-01-01.json');
});

test('Umlaute und ß werden korrekt vereinfacht', () => {
  const filename = createScenarioExportFilename(
    { name: 'Äußere Prüfung Übergröße' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-aeussere-pruefung-uebergroesse-2026-05-10.json');
});

test('Sonderzeichen werden entfernt', () => {
  const filename = createScenarioExportFilename(
    { name: 'KI-Einführung: Pädagogik & Verwaltung!' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-ki-einfuehrung-paedagogik-verwaltung-2026-05-10.json');
});

test('Mehrere Bindestriche werden reduziert', () => {
  const filename = createScenarioExportFilename(
    { name: 'Team --- Alpha -- Beta' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(filename, 'szenario-lab-team-alpha-beta-2026-05-10.json');
});

test('null-Draft nutzt export als Slug', () => {
  const filename = createScenarioExportFilename(null, {
    exportedAt: '2026-05-10T08:30:00.000Z',
  });

  assert.equal(filename, 'szenario-lab-export-2026-05-10.json');
});

test('leerer oder unbrauchbarer Name nutzt export als Slug', () => {
  const emptyName = createScenarioExportFilename(
    { name: '   ' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  const unusableName = createScenarioExportFilename(
    { name: '!!!' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(emptyName, 'szenario-lab-export-2026-05-10.json');
  assert.equal(unusableName, 'szenario-lab-export-2026-05-10.json');
});

test('Dateiname endet auf .json', () => {
  const filename = createScenarioExportFilename(
    { name: 'Szenario A' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(filename.endsWith('.json'), true);
});

test('Die Funktion gibt einen String zurück', () => {
  const filename = createScenarioExportFilename(
    { name: 'Szenario A' },
    { exportedAt: '2026-05-10T08:30:00.000Z' },
  );

  assert.equal(typeof filename, 'string');
});

test('Die Funktion mutiert den Draft nicht', () => {
  const draft = { name: 'Pilotbereich Kundenservice' };
  const originalDraft = structuredClone(draft);

  createScenarioExportFilename(draft, {
    exportedAt: '2026-01-01T12:00:00.000Z',
  });

  assert.deepEqual(draft, originalDraft);
});
