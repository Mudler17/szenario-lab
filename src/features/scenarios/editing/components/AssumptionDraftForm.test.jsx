import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import AssumptionDraftForm from './AssumptionDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <AssumptionDraftForm
      onAddAssumption={() => {}}
      onUpdateAssumption={() => {}}
      onRemoveAssumption={() => {}}
      {...props}
    />,
  );
}

test('shows empty state when no assumptions are in draft', () => {
  const html = renderComponent({ scenarioDraft: { assumptions: [] } });

  assert.match(html, /Noch keine Annahmen im Szenario-Draft vorhanden\./);
});

test('shows add button in empty state', () => {
  const html = renderComponent({ scenarioDraft: { assumptions: [] } });

  assert.match(html, /Annahme hinzufügen/);
});

test('shows assumptions as editable form fields', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        {
          id: 'a-1',
          title: 'Annahme A',
          content: 'Inhalt A',
          scope: 'Gesamtszenario',
          confidence: 'medium',
          rationale: 'Begründung A',
        },
      ],
    },
  });

  assert.match(html, /Titel/);
  assert.match(html, /Inhalt/);
  assert.match(html, /Geltungsbereich/);
  assert.match(html, /Vertrauen/);
  assert.match(html, /Begründung/);
  assert.match(html, /<input/i);
  assert.match(html, /<textarea/i);
  assert.match(html, /<select/i);
});

test('renders remove button per assumption', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        { id: 'a-1', title: 'Annahme A', content: 'Inhalt A' },
        { id: 'a-2', title: 'Annahme B', content: 'Inhalt B' },
      ],
    },
  });

  const removeCount = (html.match(/Annahme entfernen/g) || []).length;
  assert.equal(removeCount, 2);
});

test('marks incomplete assumptions', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        {
          id: 'a-1',
          title: '   ',
          content: 'Inhalt A',
        },
      ],
    },
  });

  assert.match(html, /Unvollständige Annahme/);
});


test('renders id-less assumptions as read-only with explicit hint', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        {
          title: 'Ohne ID',
          content: 'Kann angezeigt werden, aber nicht robust bearbeitet.',
        },
      ],
    },
  });

  assert.match(html, /Annahme ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 6);
});
