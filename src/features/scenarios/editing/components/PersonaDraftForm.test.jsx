import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import PersonaDraftForm from './PersonaDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <PersonaDraftForm
      onAddPersona={() => {}}
      onUpdatePersona={() => {}}
      onRemovePersona={() => {}}
      {...props}
    />,
  );
}

test('shows empty state when no personas are in draft', () => {
  const html = renderComponent({ scenarioDraft: { personas: [] } });
  assert.match(html, /Noch keine Personas im Szenario-Draft vorhanden\./);
});

test('shows add button', () => {
  const html = renderComponent({ scenarioDraft: { personas: [] } });
  assert.match(html, /Persona hinzufügen/);
});

test('shows personas as editable form fields', () => {
  const html = renderComponent({ scenarioDraft: { personas: [{ id: 'p-1', name: 'Max', role: 'Leitung', perspective: 'Langfristig', needs: 'Planung', influence: 'high', constraints: 'Budget' }] } });
  assert.match(html, /Name/);
  assert.match(html, /Rolle/);
  assert.match(html, /Perspektive/);
  assert.match(html, /Bedürfnisse/);
  assert.match(html, /Einfluss/);
  assert.match(html, /Einschränkungen/);
});

test('renders remove button per persona entry', () => {
  const html = renderComponent({ scenarioDraft: { personas: [{ id: 'p-1', name: 'A', role: 'R1' }, { id: 'p-2', name: 'B', role: 'R2' }] } });
  const removeCount = (html.match(/Persona entfernen/g) || []).length;
  assert.equal(removeCount, 2);
});

test('marks incomplete persona', () => {
  const html = renderComponent({ scenarioDraft: { personas: [{ id: 'p-1', name: ' ', role: 'Rolle' }] } });
  assert.match(html, /Unvollständige Persona/);
});

test('renders id-less persona as read-only with explicit hint', () => {
  const html = renderComponent({ scenarioDraft: { personas: [{ name: 'Ohne ID', role: 'Sichtbar' }] } });
  assert.match(html, /Persona ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 7);
});
