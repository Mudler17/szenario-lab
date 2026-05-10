export function downloadScenarioExport(exportDraft, options = {}) {
  if (!exportDraft) {
    return { ok: false, reason: 'missing-export-draft' };
  }

  if (exportDraft.payload === undefined) {
    return { ok: false, reason: 'missing-payload' };
  }

  if (typeof exportDraft.filename !== 'string' || exportDraft.filename.trim() === '') {
    return { ok: false, reason: 'missing-filename' };
  }

  const documentRef = options.documentRef ?? globalThis.document;
  const BlobRef = options.BlobRef ?? globalThis.Blob;
  const URLRef = options.URLRef ?? globalThis.URL;

  if (
    !documentRef
    || !BlobRef
    || !URLRef
    || typeof documentRef.createElement !== 'function'
    || !documentRef.body
    || typeof documentRef.body.appendChild !== 'function'
    || typeof documentRef.body.removeChild !== 'function'
    || typeof URLRef.createObjectURL !== 'function'
    || typeof URLRef.revokeObjectURL !== 'function'
  ) {
    return { ok: false, reason: 'download-api-unavailable' };
  }

  let json;
  try {
    json = JSON.stringify(exportDraft.payload, null, 2);
  } catch {
    return { ok: false, reason: 'payload-not-json-serializable' };
  }

  const blob = new BlobRef([json], { type: 'application/json;charset=utf-8' });
  const objectUrl = URLRef.createObjectURL(blob);

  const link = documentRef.createElement('a');
  link.href = objectUrl;
  link.download = exportDraft.filename;

  documentRef.body.appendChild(link);
  link.click();
  documentRef.body.removeChild(link);
  URLRef.revokeObjectURL(objectUrl);

  return {
    ok: true,
    filename: exportDraft.filename,
  };
}
