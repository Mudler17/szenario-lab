import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import EvidenceDraftForm from './EvidenceDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <EvidenceDraftForm
      onAddEvidence={() => {}}
      onUpdateEvidence={() => {}}
      onRemoveEvidence={() => {}}
      {...props}
    />,
  );
}

test('shows empty state when no evidence is in draft', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [] } });
  assert.match(html, /Noch keine Evidenz im Szenario-Draft vorhanden\./);
});

test('shows add button', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [] } });
  assert.match(html, /Evidenz hinzufügen/);
});

test('shows evidence as editable form fields', () => {
  const html = renderComponent({
    scenarioDraft: {
      evidence: [{
        id: 'e-1', title: 'Titel', content: 'Inhalt', sourceType: 'data', relation: 'supports', confidence: 'medium', assumptionId: 'a-1',
      }],
    },
  });

  assert.match(html, /Titel/);
  assert.match(html, /Inhalt/);
  assert.match(html, /Quellentyp/);
  assert.match(html, /Bezug/);
  assert.match(html, /Vertrauen/);
  assert.match(html, /Annahmenbezug/);
  assert.match(html, /<input/i);
  assert.match(html, /<textarea/i);
  assert.match(html, /<select/i);
});


test('shows assumption reference hint as optional guidance', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [{ id: 'e-1', title: 'Titel', content: 'Inhalt' }] } });
  assert.match(html, /Optionaler Bezug auf eine Annahmen-ID\./);
});

test('renders remove button per evidence entry', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [{ id: 'e-1', title: 'A', content: 'x' }, { id: 'e-2', title: 'B', content: 'y' }] } });
  const removeCount = (html.match(/Evidenz entfernen/g) || []).length;
  assert.equal(removeCount, 2);
});

test('marks incomplete evidence', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [{ id: 'e-1', title: '  ', content: 'Inhalt' }] } });
  assert.match(html, /Unvollständige Evidenz/);
});

test('renders id-less evidence as read-only with explicit hint', () => {
  const html = renderComponent({ scenarioDraft: { evidence: [{ title: 'Ohne ID', content: 'Nur sichtbar' }] } });
  assert.match(html, /Evidenz ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 7);
});
