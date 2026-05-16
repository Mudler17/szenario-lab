import { PERSISTENCE_REASON, PERSISTENCE_STATUS } from './persistenceStatus.js';

export function createPersistenceStatusMessage(status, reason) {
  if (status === PERSISTENCE_STATUS.STORAGE_ACTIVE) {
    return { type: 'info', text: 'Browserlokale Speicherung ist aktiv.' };
  }

  if (status === PERSISTENCE_STATUS.DRAFT_SAVED) {
    return { type: 'success', text: 'Aktueller Draft browserlokal gespeichert.' };
  }

  if (status === PERSISTENCE_STATUS.DRAFT_LOADED) {
    return { type: 'success', text: 'Browserlokaler Draft geladen.' };
  }

  if (status === PERSISTENCE_STATUS.DRAFT_NOT_FOUND) {
    return { type: 'info', text: 'Kein browserlokal gespeicherter Draft gefunden. Beispielentwurf geladen.' };
  }

  if (status === PERSISTENCE_STATUS.DRAFT_CLEARED) {
    return { type: 'success', text: 'Browserlokaler Draft gelöscht.' };
  }

  if (status === PERSISTENCE_STATUS.DRAFT_INVALID) {
    return { type: 'error', text: 'Browserlokal gespeicherter Draft konnte nicht gelesen werden.' };
  }

  if (status === PERSISTENCE_STATUS.STORAGE_UNAVAILABLE) {
    return { type: 'error', text: 'Speicherfunktion ist derzeit nicht verfügbar. Es wurde nichts app-intern gespeichert.' };
  }

  if (status === PERSISTENCE_STATUS.STORAGE_BLOCKED) {
    return { type: 'warning', text: 'Speicheraktion ist blockiert. Es wurde nichts app-intern gespeichert.' };
  }

  if (reason === PERSISTENCE_REASON.NOT_A_PERSISTENCE_ACTION) {
    return { type: 'info', text: 'Diese Aktion ist keine Speicheraktion. Es wurde nichts app-intern gespeichert.' };
  }

  if (status === PERSISTENCE_STATUS.STORAGE_INACTIVE || status === PERSISTENCE_STATUS.NOT_ACTIVE) {
    return { type: 'info', text: 'App-Speicherung ist nicht aktiv. Nutze JSON herunterladen für eine bewusste Sicherung.' };
  }

  return { type: 'info', text: 'Speicherstatus ist derzeit nicht verfügbar. Es wurde nichts app-intern gespeichert.' };
}
