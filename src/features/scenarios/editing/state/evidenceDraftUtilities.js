function cloneEvidenceList(evidenceList) {
  if (!Array.isArray(evidenceList)) {
    return [];
  }

  return evidenceList
    .filter((evidence) => evidence !== null && typeof evidence === 'object' && !Array.isArray(evidence))
    .map((evidence) => ({ ...evidence }));
}

function normalizeEvidenceInput(evidence) {
  if (evidence === null || typeof evidence !== 'object' || Array.isArray(evidence)) {
    return null;
  }

  return { ...evidence };
}

export function getDraftEvidence(draft) {
  return cloneEvidenceList(draft?.evidence);
}

export function addDraftEvidence(draft, newEvidence) {
  if (!draft) {
    return draft;
  }

  const normalizedEvidence = normalizeEvidenceInput(newEvidence);
  if (!normalizedEvidence) {
    return draft;
  }

  const evidence = getDraftEvidence(draft);

  return {
    ...draft,
    evidence: [...evidence, normalizedEvidence],
  };
}

export function updateDraftEvidence(draft, evidenceId, updates) {
  if (!draft || typeof evidenceId !== 'string' || evidenceId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizeEvidenceInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const evidence = getDraftEvidence(draft);
  const index = evidence.findIndex((entry) => entry?.id === evidenceId);

  if (index === -1) {
    return draft;
  }

  const nextEvidence = evidence.map((entry, entryIndex) => {
    if (entryIndex !== index) {
      return entry;
    }

    return {
      ...entry,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    evidence: nextEvidence,
  };
}

export function removeDraftEvidence(draft, evidenceId) {
  if (!draft || typeof evidenceId !== 'string' || evidenceId.trim().length === 0) {
    return draft;
  }

  const evidence = getDraftEvidence(draft);
  const nextEvidence = evidence.filter((entry) => entry?.id !== evidenceId);

  if (nextEvidence.length === evidence.length) {
    return draft;
  }

  return {
    ...draft,
    evidence: nextEvidence,
  };
}
