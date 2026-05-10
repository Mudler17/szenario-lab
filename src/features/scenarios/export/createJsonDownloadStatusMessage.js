const UNKNOWN_STATUS_MESSAGE = {
  type: 'info',
  message: 'Noch kein JSON-Download gestartet.'
};

const FALLBACK_ERROR_MESSAGE = {
  type: 'error',
  message: 'Der JSON-Download konnte nicht abgeschlossen werden.'
};

const REASON_TO_MESSAGE = {
  'missing-export-draft': 'Der aktuelle lokale Draft konnte nicht für den Download vorbereitet werden.',
  'missing-payload': 'Die Exportdaten konnten nicht für den Download vorbereitet werden.',
  'missing-filename': 'Der Dateiname für den JSON-Download konnte nicht erstellt werden.',
  'download-api-unavailable': 'Der JSON-Download wird in dieser Browser-Umgebung nicht unterstützt.',
  'payload-not-json-serializable': 'Die Exportdaten konnten nicht als JSON-Datei vorbereitet werden.',
  'download-click-failed': 'Der Browser konnte den JSON-Download nicht starten.',
  'download-cleanup-failed': 'Der Download wurde versucht, aber temporäre Browserdaten konnten nicht vollständig aufgeräumt werden.'
};

export function createJsonDownloadStatusMessage(result) {
  if (!result || typeof result !== 'object') {
    return UNKNOWN_STATUS_MESSAGE;
  }

  if (result.ok === true) {
    if (result.filename) {
      return {
        type: 'success',
        message: `JSON-Download vorbereitet: ${result.filename}`
      };
    }

    return {
      type: 'success',
      message: 'JSON-Download vorbereitet.'
    };
  }

  if (result.ok === false) {
    const mappedMessage = REASON_TO_MESSAGE[result.reason];

    if (mappedMessage) {
      return {
        type: 'error',
        message: mappedMessage
      };
    }

    return FALLBACK_ERROR_MESSAGE;
  }

  return UNKNOWN_STATUS_MESSAGE;
}
