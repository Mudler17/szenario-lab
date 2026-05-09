import test from 'node:test';
import assert from 'node:assert/strict';

import { createDraftFromScenario } from './createDraftFromScenario.js';
import { resetDraft } from './resetDraft.js';
import { updateScenarioDraftField } from './updateScenarioDraftField.js';
import { validateScenarioDraftBasics } from './validateScenarioDraftBasics.js';

const makeScenario = () => ({
  id: 'scenario-1',
  name: 'Stromausfall in der Innenstadt',
  description: 'Ein langanhaltender Ausfall legt kritische Infrastruktur lahm.',
  goal: 'Handlungsoptionen zur Stabilisierung priorisieren',
  phases: [{ id: 'phase-1', title: 'Lagebild' }],
});

test('createDraftFromScenario erzeugt eine Arbeitskopie', () => {
  const original = makeScenario();

  const draft = createDraftFromScenario(original);

  assert.deepEqual(draft, original);
  assert.notEqual(draft, original);

  draft.phases[0].title = 'Verändertes Lagebild';
  assert.equal(original.phases[0].title, 'Lagebild');
});

test('createDraftFromScenario(null) gibt null zurück', () => {
  assert.equal(createDraftFromScenario(null), null);
});

test('resetDraft erzeugt wieder eine Arbeitskopie aus dem Original', () => {
  const original = makeScenario();
  const changedDraft = updateScenarioDraftField(
    createDraftFromScenario(original),
    'name',
    'Geänderter Name',
  );

  const reset = resetDraft(original);

  assert.equal(changedDraft.name, 'Geänderter Name');
  assert.deepEqual(reset, original);
  assert.notEqual(reset, original);
  assert.equal(reset.name, 'Stromausfall in der Innenstadt');
});

test('updateScenarioDraftField verändert nur das angegebene Feld', () => {
  const draft = makeScenario();

  const updated = updateScenarioDraftField(draft, 'name', 'Neuer Szenario-Name');

  assert.equal(updated.name, 'Neuer Szenario-Name');
  assert.equal(updated.description, draft.description);
  assert.equal(updated.goal, draft.goal);
  assert.equal(updated.phases, draft.phases);
});

test('updateScenarioDraftField(null, ...) gibt null zurück', () => {
  assert.equal(updateScenarioDraftField(null, 'name', 'x'), null);
});

test('validateScenarioDraftBasics meldet leere Pflichtfelder', () => {
  const errors = validateScenarioDraftBasics({
    name: ' ',
    description: '',
    goal: '   ',
  });

  assert.deepEqual(errors, {
    name: 'Bitte einen Szenario-Namen eingeben.',
    description: 'Bitte eine Szenario-Beschreibung eingeben.',
    goal: 'Bitte ein Szenario-Ziel eingeben.',
  });
});

test('validateScenarioDraftBasics gibt für gefüllte Felder leere Fehlermeldungen zurück', () => {
  const errors = validateScenarioDraftBasics({
    name: 'Szenario A',
    description: 'Beschreibung A',
    goal: 'Ziel A',
  });

  assert.deepEqual(errors, {
    name: '',
    description: '',
    goal: '',
  });
});
