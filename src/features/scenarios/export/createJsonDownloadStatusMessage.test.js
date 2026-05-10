import test from 'node:test';
import assert from 'node:assert/strict';

import { createJsonDownloadStatusMessage } from './createJsonDownloadStatusMessage.js';

test('returns info message for missing result', () => {
  assert.deepEqual(createJsonDownloadStatusMessage(), {
    type: 'info',
    message: 'Noch kein JSON-Download gestartet.'
  });
});

test('returns info message for null result', () => {
  assert.deepEqual(createJsonDownloadStatusMessage(null), {
    type: 'info',
    message: 'Noch kein JSON-Download gestartet.'
  });
});

test('returns info message for primitive results', () => {
  assert.deepEqual(createJsonDownloadStatusMessage('x'), {
    type: 'info',
    message: 'Noch kein JSON-Download gestartet.'
  });

  assert.deepEqual(createJsonDownloadStatusMessage(123), {
    type: 'info',
    message: 'Noch kein JSON-Download gestartet.'
  });
});

test('returns success message with filename when ok is true and filename exists', () => {
  assert.deepEqual(createJsonDownloadStatusMessage({ ok: true, filename: 'scenario.json' }), {
    type: 'success',
    message: 'JSON-Download vorbereitet: scenario.json'
  });
});

test('returns generic success message when ok is true and filename is missing', () => {
  assert.deepEqual(createJsonDownloadStatusMessage({ ok: true }), {
    type: 'success',
    message: 'JSON-Download vorbereitet.'
  });
});

for (const [reason, message] of Object.entries({
  'missing-export-draft': 'Der aktuelle lokale Draft konnte nicht für den Download vorbereitet werden.',
  'missing-payload': 'Die Exportdaten konnten nicht für den Download vorbereitet werden.',
  'missing-filename': 'Der Dateiname für den JSON-Download konnte nicht erstellt werden.',
  'download-api-unavailable': 'Der JSON-Download wird in dieser Browser-Umgebung nicht unterstützt.',
  'payload-not-json-serializable': 'Die Exportdaten konnten nicht als JSON-Datei vorbereitet werden.',
  'download-click-failed': 'Der Browser konnte den JSON-Download nicht starten.',
  'download-cleanup-failed': 'Der Download wurde versucht, aber temporäre Browserdaten konnten nicht vollständig aufgeräumt werden.'
})) {
  test(`maps reason "${reason}" to a user-friendly error message`, () => {
    assert.deepEqual(createJsonDownloadStatusMessage({ ok: false, reason }), {
      type: 'error',
      message
    });
  });
}

test('returns fallback error message for unknown reason', () => {
  assert.deepEqual(createJsonDownloadStatusMessage({ ok: false, reason: 'unknown-reason' }), {
    type: 'error',
    message: 'Der JSON-Download konnte nicht abgeschlossen werden.'
  });
});

test('returns fallback error message when ok is false without reason', () => {
  assert.deepEqual(createJsonDownloadStatusMessage({ ok: false }), {
    type: 'error',
    message: 'Der JSON-Download konnte nicht abgeschlossen werden.'
  });
});

test('does not mutate input object', () => {
  const result = { ok: false, reason: 'missing-payload' };
  const before = { ...result };

  createJsonDownloadStatusMessage(result);

  assert.deepEqual(result, before);
});
