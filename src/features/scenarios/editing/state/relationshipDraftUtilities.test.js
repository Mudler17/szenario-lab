import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftRelationships,
  addDraftRelationship,
  updateDraftRelationship,
  removeDraftRelationship,
} from './relationshipDraftUtilities.js';

function createDraft() {
  return {
    id: 'scenario-1',
    relationships: [{ id: 'relationship-1', sourceId: 'persona-1', targetId: 'resource-1', type: 'dependency', description: 'arbeitet mit', strength: 'medium', quality: 'neutral', risks: 'unklar' }],
  };
}

test('getDraftRelationships reads existing relationships', () => {
  const draft = createDraft();
  const relationships = getDraftRelationships(draft);

  assert.deepEqual(relationships, draft.relationships);
});

test('getDraftRelationships returns defensive copies', () => {
  const draft = createDraft();
  const relationships = getDraftRelationships(draft);

  assert.notEqual(relationships, draft.relationships);
  assert.notEqual(relationships[0], draft.relationships[0]);
});

test('getDraftRelationships filters invalid relationship entries', () => {
  const relationships = getDraftRelationships({
    relationships: [{ id: 'valid-1' }, null, 'invalid', ['invalid'], { id: 'valid-2' }],
  });

  assert.deepEqual(relationships, [{ id: 'valid-1' }, { id: 'valid-2' }]);
});

test('addDraftRelationship appends relationship', () => {
  const updated = addDraftRelationship(createDraft(), { id: 'relationship-2' });
  assert.equal(updated.relationships.length, 2);
});

test('addDraftRelationship ignores invalid input', () => {
  const draft = createDraft();
  const updated = addDraftRelationship(draft, null);
  assert.equal(updated, draft);
});

test('updateDraftRelationship updates only matching id', () => {
  const draft = {
    relationships: [{ id: 'relationship-1', description: 'A' }, { id: 'relationship-2', description: 'B' }],
  };
  const updated = updateDraftRelationship(draft, 'relationship-2', { description: 'Neu' });
  assert.equal(updated.relationships[0].description, 'A');
  assert.equal(updated.relationships[1].description, 'Neu');
});

test('updateDraftRelationship does not mutate original draft', () => {
  const draft = createDraft();
  const before = structuredClone(draft);
  const updated = updateDraftRelationship(draft, 'relationship-1', { strength: 'high' });

  assert.deepEqual(draft, before);
  assert.equal(updated.relationships[0].strength, 'high');
});

test('updateDraftRelationship ignores invalid id', () => {
  const draft = createDraft();
  const updated = updateDraftRelationship(draft, ' ', { description: 'Neu' });
  assert.equal(updated, draft);
});

test('removeDraftRelationship removes matching id', () => {
  const draft = createDraft();
  const updated = removeDraftRelationship(draft, 'relationship-1');
  assert.deepEqual(updated.relationships, []);
});

test('removeDraftRelationship returns original draft if id not found', () => {
  const draft = createDraft();
  const updated = removeDraftRelationship(draft, 'missing-id');
  assert.equal(updated, draft);
});

test('relationship utilities do not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in relationship draft utilities');
    },
  });

  try {
    const draft = createDraft();
    assert.doesNotThrow(() => getDraftRelationships(draft));
    assert.doesNotThrow(() => addDraftRelationship(draft, { id: 'relationship-2' }));
    assert.doesNotThrow(() => updateDraftRelationship(draft, 'relationship-1', { type: 'support' }));
    assert.doesNotThrow(() => removeDraftRelationship(draft, 'relationship-1'));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
