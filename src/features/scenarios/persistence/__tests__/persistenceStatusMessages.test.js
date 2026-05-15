import test from 'node:test';
import assert from 'node:assert/strict';

import { PERSISTENCE_STATUS } from '../status/persistenceStatus.js';
import { createPersistenceStatusMessage } from '../status/persistenceStatusMessages.js';

test('createPersistenceStatusMessage liefert NoPersistence-Hinweis bei NOT_ACTIVE', () => {
  assert.deepEqual(createPersistenceStatusMessage(PERSISTENCE_STATUS.NOT_ACTIVE), {
    type: 'info',
    text: 'Speicherung ist aktuell nicht aktiv. Bitte nutze den JSON-Export für eine bewusste Sicherung.',
  });
});

test('createPersistenceStatusMessage liefert robusten Fallback für unbekannten Status', () => {
  assert.deepEqual(createPersistenceStatusMessage('unknown'), {
    type: 'info',
    text: 'Speicherstatus ist derzeit nicht verfügbar. Es wird nichts automatisch gespeichert.',
  });
});
