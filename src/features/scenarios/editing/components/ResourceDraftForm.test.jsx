import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import ResourceDraftForm from './ResourceDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <ResourceDraftForm
      onAddResource={() => {}}
      onUpdateResource={() => {}}
      onRemoveResource={() => {}}
      {...props}
    />,
  );
}

test('shows empty state when no resources are in draft', () => {
  const html = renderComponent({ scenarioDraft: { resources: [] } });
  assert.match(html, /Noch keine Ressourcen im Szenario-Draft vorhanden\./);
});

test('shows add resource button', () => {
  const html = renderComponent({ scenarioDraft: { resources: [] } });
  assert.match(html, /Ressource hinzufügen/);
});

test('renders resources as form fields', () => {
  const html = renderComponent({ scenarioDraft: { resources: [{ id: 'r-1', name: 'Team', type: 'staff', description: 'Kernteam', availability: 'high', relevance: 'medium', constraints: 'Zeit' }] } });
  assert.match(html, /Name/);
  assert.match(html, /Typ/);
  assert.match(html, /Beschreibung/);
  assert.match(html, /Verfügbarkeit/);
  assert.match(html, /Relevanz/);
  assert.match(html, /Einschränkungen/);
});

test('renders remove button per resource entry', () => {
  const html = renderComponent({ scenarioDraft: { resources: [{ id: 'r-1' }, { id: 'r-2' }] } });
  const removeCount = (html.match(/Ressource entfernen/g) || []).length;
  assert.equal(removeCount, 2);
});

test('marks incomplete resource', () => {
  const html = renderComponent({ scenarioDraft: { resources: [{ id: 'r-1', name: ' ', description: 'ok' }] } });
  assert.match(html, /Unvollständige Ressource/);
});

test('renders id-less resource as read-only with explicit hint', () => {
  const html = renderComponent({ scenarioDraft: { resources: [{ name: 'Ohne ID', description: 'sichtbar' }] } });
  assert.match(html, /Ressource ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 7);
});

test('defaults selects to other, unclear, and medium when missing', () => {
  const html = renderComponent({ scenarioDraft: { resources: [{ id: 'r-1', name: 'A', description: 'B' }] } });
  assert.match(html, /<option value="other" selected="">other<\/option>/);
  assert.match(html, /<option value="unclear" selected="">unclear<\/option>/);
  assert.match(html, /<option value="medium" selected="">medium<\/option>/);
});
