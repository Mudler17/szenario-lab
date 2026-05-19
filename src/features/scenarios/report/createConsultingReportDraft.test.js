import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createConsultingReportDraft } from './createConsultingReportDraft.js';

const REQUIRED_SECTION_TITLES = [
  'Ausgangslage',
  'Zielbild / Fragestellung',
  'Annahmen',
  'Evidenz',
  'Personas / Stakeholder',
  'Ressourcen',
  'Phasen',
  'Beziehungen',
  'Interventionen',
  'Risiken / Unsicherheiten',
  'Offene Klärungsfragen',
  'Nächste Arbeitsschritte'
];

test('erzeugt reportDraft mit reportType, formatVersion, boundary, source, sections', () => {
  const result = createConsultingReportDraft({});

  assert.equal(result.reportType, 'consulting-report-draft');
  assert.equal(result.formatVersion, 1);
  assert.equal(typeof result.boundary, 'object');
  assert.equal(typeof result.source, 'object');
  assert.ok(Array.isArray(result.sections));
});

test('enthält alle 12 Pflichtsektionen', () => {
  const result = createConsultingReportDraft({});
  const titles = result.sections.map((section) => section.title);

  assert.equal(result.sections.length, 12);
  assert.deepEqual(titles, REQUIRED_SECTION_TITLES);
});

test('enthält keinen createdAt-Zeitstempel', () => {
  const result = createConsultingReportDraft({});
  assert.equal('createdAt' in result, false);
});

test('enthält keine verbotenen Top-Level-Felder', () => {
  const result = createConsultingReportDraft({});
  const forbidden = ['recommendation', 'score', 'ranking', 'decision', 'bestOption', 'priority', 'rating', 'recommendedAction'];

  for (const field of forbidden) {
    assert.equal(field in result, false, `${field} must not exist`);
  }
});

test('enthält Boundary-Flags korrekt', () => {
  const result = createConsultingReportDraft({});

  assert.deepEqual(result.boundary, {
    structuralOnly: true,
    decisionSupportOnly: true,
    noRecommendation: true,
    noScoring: true,
    noRanking: true,
    noSimulation: true,
    noLlmOutput: true
  });
});

test('nutzt source.type = scenario-draft und source.mode = input-only', () => {
  const result = createConsultingReportDraft({});

  assert.equal(result.source.type, 'scenario-draft');
  assert.equal(result.source.mode, 'input-only');
});

test('mutiert Input nicht', () => {
  const input = {
    assumptions: [{ name: 'A1' }],
    evidence: [{ name: 'E1' }]
  };

  const before = JSON.parse(JSON.stringify(input));
  createConsultingReportDraft(input);
  assert.deepEqual(input, before);
});

test('funktioniert mit null / undefined / leerem Objekt', () => {
  assert.doesNotThrow(() => createConsultingReportDraft(null));
  assert.doesNotThrow(() => createConsultingReportDraft(undefined));
  assert.doesNotThrow(() => createConsultingReportDraft({}));
});

test('funktioniert bei fehlenden optionalen Arrays', () => {
  const result = createConsultingReportDraft({ name: 'X' });

  for (const section of result.sections) {
    assert.ok(Array.isArray(section.items));
  }
});

test('quelltext enthält keine verbotenen Browser-/Netzwerk-/LLM-/Zeitmuster', () => {
  const currentFile = fileURLToPath(import.meta.url);
  const sourcePath = path.join(path.dirname(currentFile), 'createConsultingReportDraft.js');
  const source = fs.readFileSync(sourcePath, 'utf8');

  const forbidden = [
    'localStorage',
    'sessionStorage',
    'indexedDB',
    'fetch(',
    'XMLHttpRequest',
    'axios',
    '../export',
    '/export',
    'from "../export"',
    "from '../../export'",
    'OpenAI',
    'openai',
    'LLM',
    'document.',
    'window.',
    'navigator.',
    'Date.now',
    'new Date'
  ];

  for (const pattern of forbidden) {
    assert.equal(source.includes(pattern), false, `source must not include: ${pattern}`);
  }
});

test('Output enthält keine verbotenen Begriffe', () => {
  const result = createConsultingReportDraft({});
  const text = JSON.stringify(result).toLowerCase();

  const forbidden = [
    'dringend empfohlen',
    'zwingend',
    'beste wahl',
    'handlungsempfehlung',
    'bewertung',
    'empfehlung',
    'recommendedaction'
  ];

  for (const pattern of forbidden) {
    assert.equal(text.includes(pattern), false, `output must not include: ${pattern}`);
  }
});
