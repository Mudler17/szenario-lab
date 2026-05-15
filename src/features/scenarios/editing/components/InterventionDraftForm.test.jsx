import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import InterventionDraftForm from './InterventionDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <InterventionDraftForm
      onAddIntervention={() => {}}
      onUpdateIntervention={() => {}}
      onRemoveIntervention={() => {}}
      {...props}
    />,
  );
}

test('empty state is shown', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [] } });
  assert.match(html, /Noch keine Interventionen im Szenario-Draft vorhanden\./);
});

test('shows add intervention button', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [] } });
  assert.match(html, /Intervention hinzufügen/);
});

test('renders all intervention form fields', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [{ id: 'i-1', name: 'N', goal: 'G', description: 'D', targetRelationshipId: 'r-1', phaseId: 'p-1', status: 'planned', risks: 'R' }] } });
  ['Name', 'Ziel', 'Beschreibung', 'Bezug zu Beziehung', 'Bezug zu Phase', 'Status', 'Risiken'].forEach((label) => assert.match(html, new RegExp(label)));
});

test('renders remove button for intervention entry', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [{ id: 'i-1' }] } });
  assert.match(html, /Intervention entfernen/);
});

test('marks incomplete intervention', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [{ id: 'i-1', name: 'x', goal: 'y', description: ' ' }] } });
  assert.match(html, /Unvollständige Intervention/);
});

test('renders id-less intervention as read-only', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [{ name: 'x', goal: 'y', description: 'z' }] } });
  assert.match(html, /Intervention ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 8);
});

test('shows local draft boundary and intervention scope hint', () => {
  const html = renderComponent({ scenarioDraft: { interventions: [] } });
  assert.match(html, /Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert\./);
  assert.match(html, /Interventionen beschreiben Handlungsoptionen, keine Aufgabensteuerung, keine Termine und keine Simulation\./);
});

test('intervention form does not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in intervention draft form');
    },
  });

  try {
    assert.doesNotThrow(() => renderComponent({ scenarioDraft: { interventions: [] } }));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
