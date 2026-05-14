import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftResources,
  addDraftResource,
  updateDraftResource,
  removeDraftResource,
} from './resourceDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    resources: [{ id: 'resource-1', name: 'Team', type: 'staff', description: 'Kernteam', availability: 'medium', relevance: 'high', constraints: 'Engpass' }],
  };
}

test('getDraftResources reads resources as cloned list', () => {
  const draft = createDraft();
  const resources = getDraftResources(draft);

  assert.deepEqual(resources, draft.resources);
  assert.notEqual(resources, draft.resources);
  assert.notEqual(resources[0], draft.resources[0]);
});

test('getDraftResources filters invalid resource entries', () => {
  const resources = getDraftResources({
    resources: [{ id: 'valid-1', name: 'A' }, null, 'invalid', ['invalid'], { id: 'valid-2', name: 'B' }],
  });

  assert.deepEqual(resources, [{ id: 'valid-1', name: 'A' }, { id: 'valid-2', name: 'B' }]);
});

test('addDraftResource appends resource without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = addDraftResource(draft, { id: 'resource-2', name: 'Zeitbudget' });

  assert.equal(updated.resources.length, 2);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
  assert.notEqual(updated.resources, draft.resources);
});

test('updateDraftResource updates one resource without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = updateDraftResource(draft, 'resource-1', { availability: 'high' });

  assert.equal(updated.resources[0].availability, 'high');
  assert.deepEqual(draft, before);
  assert.notEqual(updated.resources[0], draft.resources[0]);
});

test('removeDraftResource removes entry by id without mutating input draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);

  const updated = removeDraftResource(draft, 'resource-1');

  assert.deepEqual(updated.resources, []);
  assert.deepEqual(draft, before);
  assert.notEqual(updated, draft);
});


test('resource utilities do not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in resource draft utilities');
    },
  });

  try {
    const draft = createDraft();
    assert.doesNotThrow(() => getDraftResources(draft));
    assert.doesNotThrow(() => addDraftResource(draft, { id: 'resource-2' }));
    assert.doesNotThrow(() => updateDraftResource(draft, 'resource-1', { name: 'Neu' }));
    assert.doesNotThrow(() => removeDraftResource(draft, 'resource-1'));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
