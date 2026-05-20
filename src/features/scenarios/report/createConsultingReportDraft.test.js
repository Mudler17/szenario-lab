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

function getSectionItems(result, title) {
  return result.sections.find((section) => section.title === title)?.items ?? [];
}

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

test('mappt name und description in Ausgangslage', () => {
  const result = createConsultingReportDraft({
    name: 'Szenario A',
    description: 'Beschreibung A'
  });

  assert.deepEqual(getSectionItems(result, 'Ausgangslage'), ['Szenario A', 'Beschreibung A']);
});

test('mappt goal in Zielbild / Fragestellung', () => {
  const result = createConsultingReportDraft({ goal: 'Ziel X' });

  assert.deepEqual(getSectionItems(result, 'Zielbild / Fragestellung'), ['Ziel X']);
});

test('mappt personas in Personas / Stakeholder', () => {
  const result = createConsultingReportDraft({
    personas: [{ name: 'Persona 1' }, { name: 'Persona 2' }],
    stakeholders: [{ name: 'Stakeholder A' }]
  });

  assert.deepEqual(getSectionItems(result, 'Personas / Stakeholder'), ['Persona 1', 'Persona 2']);
});

test('mappt assumptions, evidence, resources, phases, relationships, interventions in passende Sektionen', () => {
  const result = createConsultingReportDraft({
    assumptions: [{ name: 'Annahme 1' }],
    evidence: [{ name: 'Evidenz 1' }],
    resources: [{ name: 'Ressource 1' }],
    phases: [{ name: 'Phase 1' }],
    relationships: [{ name: 'Beziehung 1' }],
    interventions: [{ name: 'Intervention 1' }]
  });

  assert.deepEqual(getSectionItems(result, 'Annahmen'), ['Annahme 1']);
  assert.deepEqual(getSectionItems(result, 'Evidenz'), ['Evidenz 1']);
  assert.deepEqual(getSectionItems(result, 'Ressourcen'), ['Ressource 1']);
  assert.deepEqual(getSectionItems(result, 'Phasen'), ['Phase 1']);
  assert.deepEqual(getSectionItems(result, 'Beziehungen'), ['Beziehung 1']);
  assert.deepEqual(getSectionItems(result, 'Interventionen'), ['Intervention 1']);
});

test('mappt relationships[].risks in Risiken / Unsicherheiten', () => {
  const result = createConsultingReportDraft({
    relationships: [{ name: 'R1', risks: ['Risiko Beziehung A', { name: 'Risiko Beziehung B' }] }]
  });

  assert.deepEqual(getSectionItems(result, 'Risiken / Unsicherheiten'), ['Risiko Beziehung A', 'Risiko Beziehung B']);
});

test('mappt assumptions[].uncertainty neutral in Risiken / Unsicherheiten', () => {
  const result = createConsultingReportDraft({
    assumptions: [{ name: 'A1', uncertainty: 'Unsicherheit A' }, { name: 'A2', uncertainty: { name: 'Unsicherheit B' } }]
  });

  assert.deepEqual(getSectionItems(result, 'Risiken / Unsicherheiten'), ['Unsicherheit A', 'Unsicherheit B']);
});

test('übernimmt offene Fragen nur aus openQuestions oder clarificationQuestions', () => {
  const result = createConsultingReportDraft({
    openQuestions: ['Frage A'],
    clarificationQuestions: [{ name: 'Frage B' }]
  });

  assert.deepEqual(getSectionItems(result, 'Offene Klärungsfragen'), ['Frage A', 'Frage B']);
});

test('übernimmt nächste Schritte nur aus nextSteps oder workSteps', () => {
  const result = createConsultingReportDraft({
    nextSteps: ['Schritt A'],
    workSteps: [{ name: 'Schritt B' }]
  });

  assert.deepEqual(getSectionItems(result, 'Nächste Arbeitsschritte'), ['Schritt A', 'Schritt B']);
});

test('offene Fragen und nächste Schritte bleiben leer ohne explizite Felder', () => {
  const result = createConsultingReportDraft({
    assumptions: [{ name: 'A1' }],
    relationships: [{ name: 'R1', risks: ['Risiko 1'] }]
  });

  assert.deepEqual(getSectionItems(result, 'Offene Klärungsfragen'), []);
  assert.deepEqual(getSectionItems(result, 'Nächste Arbeitsschritte'), []);
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
    assumptions: [{ name: 'A1', uncertainty: 'Unklar' }],
    relationships: [{ name: 'R1', risks: ['R1'] }],
    openQuestions: ['Q1']
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
  const result = createConsultingReportDraft({ name: 'X', goal: 'Y' });

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
