import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';

import HomePage from './HomePage.jsx';

function renderPage() {
  return renderToStaticMarkup(<HomePage />);
}

test('renders editor section navigation with anchor links', () => {
  const html = renderPage();
  assert.match(html, /aria-label="Abschnitte im Bearbeitungsbereich"/);
  ['#editor-basic', '#editor-actors', '#editor-system', '#editor-actions', '#editor-tools'].forEach((anchor) => {
    assert.match(html, new RegExp(`href="${anchor}"`));
  });
});

test('renders grouped editor sections and tool area', () => {
  const html = renderPage();
  ['id="editor-basic"', 'id="editor-actors"', 'id="editor-system"', 'id="editor-actions"', 'id="editor-tools"'].forEach((sectionId) => {
    assert.match(html, new RegExp(sectionId));
  });
  assert.match(html, /<h3>Werkzeuge<\/h3>/);
  assert.match(html, /Draft auf Original zurücksetzen/);
  assert.match(html, /JSON-Download/);
  assert.match(html, /JSON-Import prüfen/);
});
