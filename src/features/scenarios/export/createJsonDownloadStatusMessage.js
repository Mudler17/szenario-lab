const UNKNOWN_STATUS_MESSAGE = {
  type: 'info',
  message: 'Es liegt noch kein Download-Status vor.'
};

const FALLBACK_ERROR_MESSAGE = {
  type: 'error',
  message: 'Der JSON-Download konnte nicht abgeschlossen werden.'
};

const REASON_TO_MESSAGE = {
  'missing-export-draft': 'Es ist kein Export-Entwurf vorhanden.',
  'missing-payload': 'Die Exportdaten konnten nicht vorbereitet werden.',
  'missing-filename': 'Der Dateiname konnte nicht erstellt werden.',
  'download-api-unavailable': 'Der Download wird in dieser Browser-Umgebung nicht unterstützt.',
  'payload-not-json-serializable': 'Die Exportdaten konnten nicht als JSON serialisiert werden.',
  'download-click-failed': 'Der Browser konnte den Download nicht starten.',
  'download-cleanup-failed': 'Der Download wurde versucht, aber das technische Aufräumen war nicht vollständig erfolgreich.'
};

export function createJsonDownloadStatusMessage(result) {
  if (!result || typeof result !== 'object') {
    return UNKNOWN_STATUS_MESSAGE;
  }

  if (result.ok === true) {
    if (result.filename) {
      return {
        type: 'success',
        message: `JSON-Datei wurde zum Download vorbereitet: ${result.filename}`
      };
    }

    return {
      type: 'success',
      message: 'JSON-Datei wurde zum Download vorbereitet.'
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
