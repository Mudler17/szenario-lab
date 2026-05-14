import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import PhaseDraftForm from './PhaseDraftForm.jsx';

function renderComponent(props) {
  return renderToStaticMarkup(
    <PhaseDraftForm
      onAddPhase={() => {}}
      onUpdatePhase={() => {}}
      onRemovePhase={() => {}}
      {...props}
    />,
  );
}

test('shows empty state when no phases are in draft', () => {
  const html = renderComponent({ scenarioDraft: { phases: [] } });
  assert.match(html, /Noch keine Phasen im Szenario-Draft vorhanden\./);
});

test('shows add phase button', () => {
  const html = renderComponent({ scenarioDraft: { phases: [] } });
  assert.match(html, /Phase hinzufügen/);
});

test('renders phases as form fields', () => {
  const html = renderComponent({ scenarioDraft: { phases: [{ id: 'p-1', title: 'Analyse', description: 'Start', order: '1', timeframe: 'Q1', status: 'planned', risks: 'Zeit' }] } });
  assert.match(html, /Titel/);
  assert.match(html, /Beschreibung/);
  assert.match(html, /Reihenfolge/);
  assert.match(html, /Zeitraum/);
  assert.match(html, /Status/);
  assert.match(html, /Risiken/);
});

test('renders remove button per phase entry', () => {
  const html = renderComponent({ scenarioDraft: { phases: [{ id: 'p-1' }, { id: 'p-2' }] } });
  const removeCount = (html.match(/Phase entfernen/g) || []).length;
  assert.equal(removeCount, 2);
});

test('marks incomplete phase', () => {
  const html = renderComponent({ scenarioDraft: { phases: [{ id: 'p-1', title: ' ', description: 'ok' }] } });
  assert.match(html, /Unvollständige Phase/);
});

test('renders id-less phase as read-only with explicit hint', () => {
  const html = renderComponent({ scenarioDraft: { phases: [{ title: 'Ohne ID', description: 'sichtbar' }] } });
  assert.match(html, /Phase ohne gültige id ist schreibgeschützt\./);
  const disabledCount = (html.match(/disabled=""/g) || []).length;
  assert.equal(disabledCount, 7);
});

test('defaults status select to unclear when missing', () => {
  const html = renderComponent({ scenarioDraft: { phases: [{ id: 'p-1', title: 'A', description: 'B' }] } });
  assert.match(html, /<option value="unclear" selected="">unclear<\/option>/);
});

test('renders helper texts for order and timeframe boundaries', () => {
  const html = renderComponent({ scenarioDraft: { phases: [] } });
  assert.match(html, /Die Reihenfolge ist ein einfacher Orientierungswert, keine Projektplanung\./);
  assert.match(html, /Der Zeitraum ist eine freie Beschreibung, kein Kalendertermin\./);
});


test('phase form does not access localStorage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      throw new Error('localStorage must not be used in phase draft form');
    },
  });

  try {
    assert.doesNotThrow(() => renderComponent({ scenarioDraft: { phases: [] } }));
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});
