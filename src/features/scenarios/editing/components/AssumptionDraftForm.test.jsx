import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import AssumptionDraftForm from './AssumptionDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(<AssumptionDraftForm {...props} />);
}

test('shows empty state when no assumptions are in draft', () => {
  const html = renderComponent({ scenarioDraft: { assumptions: [] } });

  assert.match(html, /Noch keine Annahmen im Szenario-Draft vorhanden\./);
});

test('shows assumptions with selected fields', () => {
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

  assert.match(html, /Annahme A/);
  assert.match(html, /Inhalt A/);
  assert.match(html, /Gesamtszenario/);
  assert.match(html, /medium/);
  assert.match(html, /Begründung A/);
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

test('does not render invalid phantom assumption entries', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        null,
        'invalid',
        { id: 'a-2', title: 'Valide Annahme', content: 'Valider Inhalt' },
      ],
    },
  });

  assert.doesNotMatch(html, /invalid/);
  assert.match(html, /Valide Annahme/);
});


test('does not render editing controls or form fields', () => {
  const html = renderComponent({
    scenarioDraft: {
      assumptions: [
        { id: 'a-1', title: 'Annahme A', content: 'Inhalt A' },
      ],
    },
  });

  assert.doesNotMatch(html, /<input/i);
  assert.doesNotMatch(html, /<textarea/i);
  assert.doesNotMatch(html, /<select/i);
  assert.doesNotMatch(html, /Hinzufügen|Speichern|Löschen|Bearbeiten/);
});
