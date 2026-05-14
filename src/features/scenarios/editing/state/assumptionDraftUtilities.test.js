import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftAssumptions,
  addDraftAssumption,
  updateDraftAssumption,
  removeDraftAssumption,
} from './assumptionDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    name: 'Szenario A',
    description: 'Beschreibung A',
    goal: 'Ziel A',
    assumptions: [
      {
        id: 'assumption-1',
        title: 'Ausreichende Akzeptanz im Team',
        content: 'Das Team ist bereit, neue Arbeitsweisen zu testen.',
        scope: 'Gesamtszenario',
        confidence: 'medium',
        rationale: 'Workshop-Rückmeldungen sind überwiegend positiv.',
      },
    ],
  };
}

test('getDraftAssumptions reads assumptions as cloned list', () => {
  const draft = createDraft();
  const assumptions = getDraftAssumptions(draft);

  assert.deepEqual(assumptions, draft.assumptions);
  assert.notEqual(assumptions, draft.assumptions);
  assert.notEqual(assumptions[0], draft.assumptions[0]);
});

test('getDraftAssumptions returns empty list for missing or invalid draft data', () => {
  assert.deepEqual(getDraftAssumptions(null), []);
  assert.deepEqual(getDraftAssumptions({ assumptions: null }), []);
  assert.deepEqual(getDraftAssumptions({ assumptions: 'invalid' }), []);
});


test('getDraftAssumptions filters invalid assumption entries', () => {
  const assumptions = getDraftAssumptions({
    assumptions: [
      { id: 'valid-1', title: 'Valide Annahme' },
      null,
      'invalid',
      ['invalid-array'],
      { id: 'valid-2', title: 'Weitere valide Annahme' },
    ],
  });

  assert.deepEqual(assumptions, [
    { id: 'valid-1', title: 'Valide Annahme' },
    { id: 'valid-2', title: 'Weitere valide Annahme' },
  ]);
});

test('addDraftAssumption appends a new assumption without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = addDraftAssumption(draft, {
    id: 'assumption-2',
    title: 'Technische Infrastruktur bleibt stabil',
    content: 'Es treten während der Pilotphase keine größeren Ausfälle auf.',
    scope: 'Pilotphase',
    confidence: 'low',
    rationale: '',
  });

  assert.equal(updated.assumptions.length, 2);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
  assert.notEqual(updated.assumptions, draft.assumptions);
});

test('updateDraftAssumption updates one assumption without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = updateDraftAssumption(draft, 'assumption-1', {
    confidence: 'high',
    rationale: 'Neue interne Pilotdaten stützen die Annahme.',
  });

  assert.equal(updated.assumptions[0].confidence, 'high');
  assert.equal(updated.assumptions[0].title, draft.assumptions[0].title);
  assert.deepEqual(draft, before);
  assert.notEqual(updated.assumptions[0], draft.assumptions[0]);
});

test('removeDraftAssumption removes assumption by id without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = removeDraftAssumption(draft, 'assumption-1');

  assert.deepEqual(updated.assumptions, []);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
});

test('utilities handle empty or invalid inputs robustly', () => {
  const draft = createDraft();

  assert.equal(addDraftAssumption(null, { id: 'x' }), null);
  assert.equal(addDraftAssumption(draft, null), draft);

  assert.equal(updateDraftAssumption(null, 'assumption-1', { title: 'x' }), null);
  assert.equal(updateDraftAssumption(draft, '', { title: 'x' }), draft);
  assert.equal(updateDraftAssumption(draft, 'missing-id', { title: 'x' }), draft);
  assert.equal(updateDraftAssumption(draft, 'assumption-1', null), draft);

  assert.equal(removeDraftAssumption(null, 'assumption-1'), null);
  assert.equal(removeDraftAssumption(draft, ''), draft);
  assert.equal(removeDraftAssumption(draft, 'missing-id'), draft);
});
