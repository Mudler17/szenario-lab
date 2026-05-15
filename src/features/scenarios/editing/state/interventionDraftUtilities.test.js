import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftInterventions,
  addDraftIntervention,
  updateDraftIntervention,
  removeDraftIntervention,
} from './interventionDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    interventions: [{ id: 'intervention-1', name: 'Kommunikationskanal', goal: 'Ausrichtung verbessern', description: 'Wöchentliche Synchronisation', targetRelationshipId: 'relationship-1', phaseId: 'phase-1', status: 'planned', risks: 'Akzeptanz unklar' }],
  };
}

test('getDraftInterventions reads existing interventions', () => {
  const draft = createDraft();
  const interventions = getDraftInterventions(draft);

  assert.deepEqual(interventions, draft.interventions);
});

test('getDraftInterventions returns defensive copies', () => {
  const draft = createDraft();
  const interventions = getDraftInterventions(draft);

  assert.notEqual(interventions, draft.interventions);
  assert.notEqual(interventions[0], draft.interventions[0]);
});

test('getDraftInterventions filters invalid intervention entries', () => {
  const interventions = getDraftInterventions({
    interventions: [{ id: 'valid-1' }, null, 'invalid', ['invalid'], { id: 'valid-2' }],
  });

  assert.deepEqual(interventions, [{ id: 'valid-1' }, { id: 'valid-2' }]);
});

test('addDraftIntervention appends intervention', () => {
  const updated = addDraftIntervention(createDraft(), { id: 'intervention-2' });
  assert.equal(updated.interventions.length, 2);
});

test('addDraftIntervention ignores invalid input', () => {
  const draft = createDraft();
  const updated = addDraftIntervention(draft, null);
  assert.equal(updated, draft);
});

test('updateDraftIntervention updates only matching id', () => {
  const draft = {
    interventions: [{ id: 'intervention-1', name: 'A' }, { id: 'intervention-2', name: 'B' }],
  };
  const updated = updateDraftIntervention(draft, 'intervention-2', { name: 'Neu' });
  assert.equal(updated.interventions[0].name, 'A');
  assert.equal(updated.interventions[1].name, 'Neu');
});

test('updateDraftIntervention does not mutate original draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);
  const updated = updateDraftIntervention(draft, 'intervention-1', { status: 'active' });

  assert.deepEqual(draft, before);
  assert.equal(updated.interventions[0].status, 'active');
});

test('updateDraftIntervention ignores invalid id', () => {
  const draft = createDraft();
  const updated = updateDraftIntervention(draft, ' ', { name: 'Neu' });
  assert.equal(updated, draft);
});

test('removeDraftIntervention removes matching id', () => {
  const draft = createDraft();
  const updated = removeDraftIntervention(draft, 'intervention-1');
  assert.deepEqual(updated.interventions, []);
});

test('removeDraftIntervention returns original draft if id not found', () => {
  const draft = createDraft();
  const updated = removeDraftIntervention(draft, 'missing-id');
  assert.equal(updated, draft);
});

test('intervention utilities do not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in intervention draft utilities');
    },
  });

  try {
    const draft = createDraft();
    assert.doesNotThrow(() => getDraftInterventions(draft));
    assert.doesNotThrow(() => addDraftIntervention(draft, { id: 'intervention-2' }));
    assert.doesNotThrow(() => updateDraftIntervention(draft, 'intervention-1', { status: 'active' }));
    assert.doesNotThrow(() => removeDraftIntervention(draft, 'intervention-1'));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
