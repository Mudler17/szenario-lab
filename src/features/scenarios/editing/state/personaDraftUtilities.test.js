import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getDraftPersonas,
  addDraftPersona,
  updateDraftPersona,
  removeDraftPersona,
} from './personaDraftUtilities.js';

test('getDraftPersonas reads existing personas', () => {
  const draft = { personas: [{ id: 'p-1', name: 'A' }] };
  const result = getDraftPersonas(draft);

  assert.deepEqual(result, [{ id: 'p-1', name: 'A' }]);
  assert.notEqual(result, draft.personas);
});

test('addDraftPersona appends persona without mutating input draft', () => {
  const draft = { id: 's-1', personas: [{ id: 'p-1', name: 'A' }] };
  const result = addDraftPersona(draft, { id: 'p-2', name: 'B' });

  assert.deepEqual(result.personas, [{ id: 'p-1', name: 'A' }, { id: 'p-2', name: 'B' }]);
  assert.deepEqual(draft.personas, [{ id: 'p-1', name: 'A' }]);
  assert.notEqual(result, draft);
});

test('updateDraftPersona updates persona without mutating input draft', () => {
  const draft = { personas: [{ id: 'p-1', name: 'A', role: 'old' }] };
  const result = updateDraftPersona(draft, 'p-1', { role: 'new' });

  assert.equal(result.personas[0].role, 'new');
  assert.equal(draft.personas[0].role, 'old');
  assert.notEqual(result.personas, draft.personas);
});

test('removeDraftPersona removes persona without mutating input draft', () => {
  const draft = { personas: [{ id: 'p-1', name: 'A' }, { id: 'p-2', name: 'B' }] };
  const result = removeDraftPersona(draft, 'p-1');

  assert.deepEqual(result.personas, [{ id: 'p-2', name: 'B' }]);
  assert.deepEqual(draft.personas, [{ id: 'p-1', name: 'A' }, { id: 'p-2', name: 'B' }]);
  assert.notEqual(result, draft);
});

test('filters invalid persona entries and handles invalid persona payloads', () => {
  const draft = {
    personas: [
      { id: 'p-1', name: 'A' },
      null,
      ['array'],
      'text',
      { id: 'p-2', name: 'B' },
    ],
  };

  assert.deepEqual(getDraftPersonas(draft), [{ id: 'p-1', name: 'A' }, { id: 'p-2', name: 'B' }]);
  assert.equal(addDraftPersona(draft, null), draft);
  assert.equal(updateDraftPersona(draft, 'p-1', null), draft);
});
