import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftPhases,
  addDraftPhase,
  updateDraftPhase,
  removeDraftPhase,
} from './phaseDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    phases: [{ id: 'phase-1', title: 'Analyse', description: 'Startphase', order: '1', timeframe: 'Q1', status: 'planned', risks: 'unklar' }],
  };
}

test('getDraftPhases reads phases as cloned list', () => {
  const draft = createDraft();
  const phases = getDraftPhases(draft);

  assert.deepEqual(phases, draft.phases);
  assert.notEqual(phases, draft.phases);
  assert.notEqual(phases[0], draft.phases[0]);
});

test('getDraftPhases filters invalid phase entries', () => {
  const phases = getDraftPhases({
    phases: [{ id: 'valid-1', title: 'A' }, null, 'invalid', ['invalid'], { id: 'valid-2', title: 'B' }],
  });

  assert.deepEqual(phases, [{ id: 'valid-1', title: 'A' }, { id: 'valid-2', title: 'B' }]);
});

test('addDraftPhase appends phase without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = addDraftPhase(draft, { id: 'phase-2', title: 'Umsetzung' });

  assert.equal(updated.phases.length, 2);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
  assert.notEqual(updated.phases, draft.phases);
});

test('updateDraftPhase updates one phase without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = updateDraftPhase(draft, 'phase-1', { status: 'active' });

  assert.equal(updated.phases[0].status, 'active');
  assert.deepEqual(draft, before);
  assert.notEqual(updated.phases[0], draft.phases[0]);
});

test('removeDraftPhase removes entry by id without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = removeDraftPhase(draft, 'phase-1');

  assert.deepEqual(updated.phases, []);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
});

test('phase utilities do not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in phase draft utilities');
    },
  });

  try {
    const draft = createDraft();
    assert.doesNotThrow(() => getDraftPhases(draft));
    assert.doesNotThrow(() => addDraftPhase(draft, { id: 'phase-2' }));
    assert.doesNotThrow(() => updateDraftPhase(draft, 'phase-1', { title: 'Neu' }));
    assert.doesNotThrow(() => removeDraftPhase(draft, 'phase-1'));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
