import test from 'node:test';
import assert from 'node:assert/strict';

import { PERSISTENCE_REASON, PERSISTENCE_STATUS } from '../status/persistenceStatus.js';
import { createPersistenceStatusMessage } from '../status/persistenceStatusMessages.js';

test('Inaktivmeldung nennt JSON herunterladen', () => {
  assert.deepEqual(createPersistenceStatusMessage(PERSISTENCE_STATUS.STORAGE_INACTIVE), {
    type: 'info',
    text: 'App-Speicherung ist nicht aktiv. Nutze JSON herunterladen für eine bewusste Sicherung.',
  });

  assert.deepEqual(createPersistenceStatusMessage(PERSISTENCE_STATUS.NOT_ACTIVE), {
    type: 'info',
    text: 'App-Speicherung ist nicht aktiv. Nutze JSON herunterladen für eine bewusste Sicherung.',
  });
});

test('storageBlocked erzeugt Warning', () => {
  assert.deepEqual(createPersistenceStatusMessage(PERSISTENCE_STATUS.STORAGE_BLOCKED), {
    type: 'warning',
    text: 'Speicheraktion ist blockiert. Es wurde nichts app-intern gespeichert.',
  });
});

test('storageUnavailable erzeugt Error', () => {
  assert.deepEqual(createPersistenceStatusMessage(PERSISTENCE_STATUS.STORAGE_UNAVAILABLE), {
    type: 'error',
    text: 'Speicherfunktion ist derzeit nicht verfügbar. Es wurde nichts app-intern gespeichert.',
  });
});

test('Nicht-Speicheraktion erzeugt Info', () => {
  assert.deepEqual(createPersistenceStatusMessage(undefined, PERSISTENCE_REASON.NOT_A_PERSISTENCE_ACTION), {
    type: 'info',
    text: 'Diese Aktion ist keine Speicheraktion. Es wurde nichts app-intern gespeichert.',
  });
});

test('Fallback behauptet keine Speicherung', () => {
  const fallback = createPersistenceStatusMessage('unknown');

  assert.deepEqual(fallback, {
    type: 'info',
    text: 'Speicherstatus ist derzeit nicht verfügbar. Es wurde nichts app-intern gespeichert.',
  });

  assert.equal(/gespeichert/i.test(fallback.text), true);
  assert.equal(/nichts app-intern gespeichert/i.test(fallback.text), true);
});
