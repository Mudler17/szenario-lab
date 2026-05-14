function cloneAssumptions(assumptions) {
  if (!Array.isArray(assumptions)) {
    return [];
  }

  return assumptions.map((assumption) => {
    if (assumption === null || typeof assumption !== 'object' || Array.isArray(assumption)) {
      return {};
    }

    return { ...assumption };
  });
}

function normalizeAssumptionInput(assumption) {
  if (assumption === null || typeof assumption !== 'object' || Array.isArray(assumption)) {
    return null;
  }

  return { ...assumption };
}

export function getDraftAssumptions(draft) {
  return cloneAssumptions(draft?.assumptions);
}

export function updateDraftAssumption(draft, assumptionId, updates) {
  if (!draft || typeof assumptionId !== 'string' || assumptionId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizeAssumptionInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const assumptions = getDraftAssumptions(draft);
  const index = assumptions.findIndex((assumption) => assumption?.id === assumptionId);

  if (index === -1) {
    return draft;
  }

  const nextAssumptions = assumptions.map((assumption, assumptionIndex) => {
    if (assumptionIndex !== index) {
      return assumption;
    }

    return {
      ...assumption,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    assumptions: nextAssumptions,
  };
}

export function addDraftAssumption(draft, newAssumption) {
  if (!draft) {
    return draft;
  }

  const normalizedAssumption = normalizeAssumptionInput(newAssumption);
  if (!normalizedAssumption) {
    return draft;
  }

  const assumptions = getDraftAssumptions(draft);

  return {
    ...draft,
    assumptions: [...assumptions, normalizedAssumption],
  };
}

export function removeDraftAssumption(draft, assumptionId) {
  if (!draft || typeof assumptionId !== 'string' || assumptionId.trim().length === 0) {
    return draft;
  }

  const assumptions = getDraftAssumptions(draft);
  const nextAssumptions = assumptions.filter((assumption) => assumption?.id !== assumptionId);

  if (nextAssumptions.length === assumptions.length) {
    return draft;
  }

  return {
    ...draft,
    assumptions: nextAssumptions,
  };
}
