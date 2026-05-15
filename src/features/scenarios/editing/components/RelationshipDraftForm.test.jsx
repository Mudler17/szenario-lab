import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import RelationshipDraftForm from './RelationshipDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <RelationshipDraftForm
      onAddRelationship={() => {}}
      onUpdateRelationship={() => {}}
      onRemoveRelationship={() => {}}
      {...props}
    />,
  );
}

test('empty state is shown', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [] } });
  assert.match(html, /Noch keine Beziehungen im Szenario-Draft vorhanden\./);
});

test('shows add relationship button', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [] } });
  assert.match(html, /Beziehung hinzufügen/);
});

test('renders all relationship form fields', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [{ id: 'r-1', sourceId: 'p1', targetId: 'p2', type: 'communication', description: 'A', strength: 'high', quality: 'neutral', risks: 'B' }] } });
  ['Quelle', 'Ziel', 'Typ', 'Beschreibung', 'Stärke', 'Qualität', 'Risiken'].forEach((label) => assert.match(html, new RegExp(label)));
});

test('renders remove button for relationship entry', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [{ id: 'r-1' }] } });
  assert.match(html, /Beziehung entfernen/);
});

test('marks incomplete relationship', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [{ id: 'r-1', sourceId: 'x', targetId: 'y', description: ' ' }] } });
  assert.match(html, /Unvollständige Beziehung/);
});

test('renders id-less relationship as read-only', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [{ sourceId: 'x', targetId: 'y', description: 'z' }] } });
  assert.match(html, /Beziehung ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 8);
});

test('shows local draft boundary and network-analysis hint', () => {
  const html = renderComponent({ scenarioDraft: { relationships: [] } });
  assert.match(html, /Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert\./);
  assert.match(html, /Beziehungen beschreiben Verbindungen, keine Netzwerkanalyse und keine Simulation\./);
});

test('relationship form does not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in relationship draft form');
    },
  });

  try {
    assert.doesNotThrow(() => renderComponent({ scenarioDraft: { relationships: [] } }));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
