import { PERSISTENCE_STATUS } from './persistenceStatus.js';

export function createPersistenceStatusMessage(status) {
  if (status === PERSISTENCE_STATUS.NOT_ACTIVE) {
    return {
      type: 'info',
      text: 'Speicherung ist aktuell nicht aktiv. Bitte nutze den JSON-Export für eine bewusste Sicherung.',
    };
  }

  return {
    type: 'info',
    text: 'Speicherstatus ist derzeit nicht verfügbar. Es wird nichts automatisch gespeichert.',
  };
}
