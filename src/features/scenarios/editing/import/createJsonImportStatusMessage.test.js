import test from 'node:test';
import assert from 'node:assert/strict';

import { createJsonImportStatusMessage } from './createJsonImportStatusMessage.js';

test('returns success message for valid result without warnings', () => {
  const result = createJsonImportStatusMessage({
    ok: true,
    scenario: { name: 'A', description: 'B', goal: 'C' },
    warnings: [],
  });

  assert.deepEqual(result, {
    type: 'success',
    message: 'Die JSON-Datei wurde geprüft und enthält ein gültiges Szenario.',
  });
});

test('returns warning message for valid result with warnings', () => {
  const result = createJsonImportStatusMessage({
    ok: true,
    scenario: { name: 'A', description: 'B', goal: 'C' },
    warnings: [{ code: 'unknown-scenario-fields', fields: ['custom'] }],
  });

  assert.deepEqual(result, {
    type: 'warning',
    message: 'Die Datei enthält gültige Szenariodaten, aber zusätzliche unbekannte Felder.',
  });
});

test('maps invalid-json-syntax to user-friendly error', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'invalid-json-syntax' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Die Datei enthält kein gültiges JSON.',
  });
});

test('maps unsupported-export-type to user-friendly error', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'unsupported-export-type' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Diese Datei ist kein unterstützter szenario-lab-Export.',
  });
});

test('maps missing-required-field to grouped required-fields error', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'missing-required-field' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Name, Beschreibung oder Ziel fehlen oder sind leer.',
  });
});

test('maps empty-required-field to grouped required-fields error', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'empty-required-field' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Name, Beschreibung oder Ziel fehlen oder sind leer.',
  });
});

test('maps top-level-array to generic import validation error', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'top-level-array' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Die Datei konnte nicht als gültiger Szenario-Import geprüft werden.',
  });
});

test('uses fallback for unknown reason', () => {
  const result = createJsonImportStatusMessage({ ok: false, reason: 'totally-unknown' });

  assert.deepEqual(result, {
    type: 'error',
    message: 'Die Datei konnte nicht als gültiger Szenario-Import geprüft werden.',
  });
});

test('returns info status when result is null or undefined', () => {
  assert.deepEqual(createJsonImportStatusMessage(null), {
    type: 'info',
    message: 'Es wurde noch keine Importdatei geprüft.',
  });

  assert.deepEqual(createJsonImportStatusMessage(undefined), {
    type: 'info',
    message: 'Es wurde noch keine Importdatei geprüft.',
  });
});
