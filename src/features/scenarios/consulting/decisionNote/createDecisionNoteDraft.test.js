import test from 'node:test';
import assert from 'node:assert/strict';

import { createDecisionNoteDraft } from './createDecisionNoteDraft.js';

test('returns stable decision note structure with expected field types', () => {
  const result = createDecisionNoteDraft({});

  assert.equal(typeof result.decisionPoint, 'string');
  assert.ok(Array.isArray(result.options));
  assert.ok(Array.isArray(result.centralDifferences));
  assert.ok(Array.isArray(result.targetConflicts));
  assert.ok(Array.isArray(result.criticalAssumptions));
  assert.ok(Array.isArray(result.openQuestions));
  assert.equal(typeof result.nextClarificationStep, 'string');
  assert.ok(Array.isArray(result.boundaries));
});

test('uses placeholders for missing data and keeps required fields non-empty', () => {
  const result = createDecisionNoteDraft();

  assert.ok(result.decisionPoint.length > 0);
  assert.ok(result.options.length > 0);
  assert.ok(result.boundaries.length > 0);
  assert.ok(result.nextClarificationStep.length > 0);
});

test('reads draft values defensively for decision point and options', () => {
  const result = createDecisionNoteDraft({
    goal: 'Pilotumfang entscheiden',
    interventions: [{ name: 'Governance-Check' }, { name: 'Team-Review' }],
    strategies: [{ name: 'Schrittweiser Rollout' }],
    assumptions: [{ name: 'Akzeptanz im Team bleibt stabil' }]
  });

  assert.equal(result.decisionPoint, 'Pilotumfang entscheiden');
  assert.deepEqual(result.options, ['Governance-Check', 'Team-Review', 'Schrittweiser Rollout']);
  assert.deepEqual(result.criticalAssumptions, ['Akzeptanz im Team bleibt stabil']);
});

test('does not mutate the input draft', () => {
  const scenarioDraft = {
    name: 'Originalname',
    interventions: [{ id: 'i1', name: 'Option A' }]
  };

  const before = JSON.parse(JSON.stringify(scenarioDraft));
  createDecisionNoteDraft(scenarioDraft);

  assert.deepEqual(scenarioDraft, before);
});

test('contains no recommendation/automation fields', () => {
  const result = createDecisionNoteDraft({});

  assert.equal('score' in result, false);
  assert.equal('ranking' in result, false);
  assert.equal('recommendation' in result, false);
  assert.equal('decision' in result, false);
});

test('avoids forbidden directive language in output strings', () => {
  const forbidden = [
    'optimal',
    'alternativlos',
    'empfohlen',
    'beste option',
    'risikofrei',
    'jetzt entscheiden',
    'sofort umsetzen',
    'objektiv besser',
    'sollte gewählt werden',
    'keine weitere prüfung nötig',
    'entscheidung ist reif'
  ];

  const result = createDecisionNoteDraft({});
  const text = [
    result.decisionPoint,
    ...result.options,
    ...result.centralDifferences,
    ...result.targetConflicts,
    ...result.criticalAssumptions,
    ...result.openQuestions,
    result.nextClarificationStep,
    ...result.boundaries
  ]
    .join(' ')
    .toLowerCase();

  for (const word of forbidden) {
    assert.equal(text.includes(word), false, `must not include: ${word}`);
  }
});
