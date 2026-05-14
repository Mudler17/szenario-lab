import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftEvidence,
  addDraftEvidence,
  updateDraftEvidence,
  removeDraftEvidence,
} from './evidenceDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    evidence: [
      {
        id: 'evidence-1',
        title: 'Nutzungsdaten',
        content: 'Dashboard zeigt steigende Nutzung.',
        sourceType: 'data',
        relation: 'supports',
        confidence: 'medium',
        assumptionId: 'assumption-1',
      },
    ],
  };
}

test('getDraftEvidence reads evidence as cloned list', () => {
  const draft = createDraft();
  const evidence = getDraftEvidence(draft);

  assert.deepEqual(evidence, draft.evidence);
  assert.notEqual(evidence, draft.evidence);
  assert.notEqual(evidence[0], draft.evidence[0]);
});

test('getDraftEvidence returns empty list for missing or invalid draft data', () => {
  assert.deepEqual(getDraftEvidence(null), []);
  assert.deepEqual(getDraftEvidence({ evidence: null }), []);
  assert.deepEqual(getDraftEvidence({ evidence: 'invalid' }), []);
});

test('getDraftEvidence filters invalid evidence entries', () => {
  const evidence = getDraftEvidence({
    evidence: [
      { id: 'valid-1', title: 'Valide Evidenz' },
      null,
      'invalid',
      ['invalid-array'],
      { id: 'valid-2', title: 'Weitere valide Evidenz' },
    ],
  });

  assert.deepEqual(evidence, [
    { id: 'valid-1', title: 'Valide Evidenz' },
    { id: 'valid-2', title: 'Weitere valide Evidenz' },
  ]);
});

test('addDraftEvidence appends evidence without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = addDraftEvidence(draft, {
    id: 'evidence-2',
    title: 'Interviewnotiz',
    content: 'Team nennt hohe Akzeptanz.',
    sourceType: 'interview',
    relation: 'qualifies',
    confidence: 'high',
    assumptionId: '',
  });

  assert.equal(updated.evidence.length, 2);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
  assert.notEqual(updated.evidence, draft.evidence);
});

test('updateDraftEvidence updates one entry without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = updateDraftEvidence(draft, 'evidence-1', {
    confidence: 'high',
    relation: 'qualifies',
  });

  assert.equal(updated.evidence[0].confidence, 'high');
  assert.equal(updated.evidence[0].title, draft.evidence[0].title);
  assert.deepEqual(draft, before);
  assert.notEqual(updated.evidence[0], draft.evidence[0]);
});

test('removeDraftEvidence removes entry by id without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = removeDraftEvidence(draft, 'evidence-1');

  assert.deepEqual(updated.evidence, []);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
});

test('utilities handle empty or invalid inputs robustly', () => {
  const draft = createDraft();

  assert.equal(addDraftEvidence(null, { id: 'x' }), null);
  assert.equal(addDraftEvidence(draft, null), draft);

  assert.equal(updateDraftEvidence(null, 'evidence-1', { title: 'x' }), null);
  assert.equal(updateDraftEvidence(draft, '', { title: 'x' }), draft);
  assert.equal(updateDraftEvidence(draft, 'missing-id', { title: 'x' }), draft);
  assert.equal(updateDraftEvidence(draft, 'evidence-1', null), draft);

  assert.equal(removeDraftEvidence(null, 'evidence-1'), null);
  assert.equal(removeDraftEvidence(draft, ''), draft);
  assert.equal(removeDraftEvidence(draft, 'missing-id'), draft);
});
