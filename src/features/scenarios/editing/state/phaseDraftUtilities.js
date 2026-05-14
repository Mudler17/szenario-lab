function clonePhases(phases) {
  if (!Array.isArray(phases)) {
    return [];
  }

  return phases
    .filter((phase) => phase !== null && typeof phase === 'object' && !Array.isArray(phase))
    .map((phase) => ({ ...phase }));
}

function normalizePhaseInput(phase) {
  if (phase === null || typeof phase !== 'object' || Array.isArray(phase)) {
    return null;
  }

  return { ...phase };
}

export function getDraftPhases(draft) {
  return clonePhases(draft?.phases);
}

export function addDraftPhase(draft, newPhase) {
  if (!draft) {
    return draft;
  }

  const normalizedPhase = normalizePhaseInput(newPhase);
  if (!normalizedPhase) {
    return draft;
  }

  const phases = getDraftPhases(draft);

  return {
    ...draft,
    phases: [...phases, normalizedPhase],
  };
}

export function updateDraftPhase(draft, phaseId, updates) {
  if (!draft || typeof phaseId !== 'string' || phaseId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizePhaseInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const phases = getDraftPhases(draft);
  const index = phases.findIndex((phase) => phase?.id === phaseId);

  if (index === -1) {
    return draft;
  }

  const nextPhases = phases.map((phase, phaseIndex) => {
    if (phaseIndex !== index) {
      return phase;
    }

    return {
      ...phase,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    phases: nextPhases,
  };
}

export function removeDraftPhase(draft, phaseId) {
  if (!draft || typeof phaseId !== 'string' || phaseId.trim().length === 0) {
    return draft;
  }

  const phases = getDraftPhases(draft);
  const nextPhases = phases.filter((phase) => phase?.id !== phaseId);

  if (nextPhases.length === phases.length) {
    return draft;
  }

  return {
    ...draft,
    phases: nextPhases,
  };
}
