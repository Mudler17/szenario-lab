function cloneInterventions(interventions) {
  if (!Array.isArray(interventions)) {
    return [];
  }

  return interventions
    .filter((intervention) => intervention !== null && typeof intervention === 'object' && !Array.isArray(intervention))
    .map((intervention) => ({ ...intervention }));
}

function normalizeInterventionInput(intervention) {
  if (intervention === null || typeof intervention !== 'object' || Array.isArray(intervention)) {
    return null;
  }

  return { ...intervention };
}

export function getDraftInterventions(draft) {
  return cloneInterventions(draft?.interventions);
}

export function addDraftIntervention(draft, newIntervention) {
  if (!draft) {
    return draft;
  }

  const normalizedIntervention = normalizeInterventionInput(newIntervention);
  if (!normalizedIntervention) {
    return draft;
  }

  const interventions = getDraftInterventions(draft);

  return {
    ...draft,
    interventions: [...interventions, normalizedIntervention],
  };
}

export function updateDraftIntervention(draft, interventionId, updates) {
  if (!draft || typeof interventionId !== 'string' || interventionId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizeInterventionInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const interventions = getDraftInterventions(draft);
  const index = interventions.findIndex((intervention) => intervention?.id === interventionId);

  if (index === -1) {
    return draft;
  }

  const nextInterventions = interventions.map((intervention, interventionIndex) => {
    if (interventionIndex !== index) {
      return intervention;
    }

    return {
      ...intervention,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    interventions: nextInterventions,
  };
}

export function removeDraftIntervention(draft, interventionId) {
  if (!draft || typeof interventionId !== 'string' || interventionId.trim().length === 0) {
    return draft;
  }

  const interventions = getDraftInterventions(draft);
  const nextInterventions = interventions.filter((intervention) => intervention?.id !== interventionId);

  if (nextInterventions.length === interventions.length) {
    return draft;
  }

  return {
    ...draft,
    interventions: nextInterventions,
  };
}
