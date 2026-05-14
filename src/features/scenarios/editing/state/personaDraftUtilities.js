function clonePersonas(personas) {
  if (!Array.isArray(personas)) {
    return [];
  }

  return personas
    .filter((persona) => persona !== null && typeof persona === 'object' && !Array.isArray(persona))
    .map((persona) => ({ ...persona }));
}

function normalizePersonaInput(persona) {
  if (persona === null || typeof persona !== 'object' || Array.isArray(persona)) {
    return null;
  }

  return { ...persona };
}

export function getDraftPersonas(draft) {
  return clonePersonas(draft?.personas);
}

export function addDraftPersona(draft, newPersona) {
  if (!draft) {
    return draft;
  }

  const normalizedPersona = normalizePersonaInput(newPersona);
  if (!normalizedPersona) {
    return draft;
  }

  const personas = getDraftPersonas(draft);

  return {
    ...draft,
    personas: [...personas, normalizedPersona],
  };
}

export function updateDraftPersona(draft, personaId, updates) {
  if (!draft || typeof personaId !== 'string' || personaId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizePersonaInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const personas = getDraftPersonas(draft);
  const index = personas.findIndex((persona) => persona?.id === personaId);

  if (index === -1) {
    return draft;
  }

  const nextPersonas = personas.map((persona, personaIndex) => {
    if (personaIndex !== index) {
      return persona;
    }

    return {
      ...persona,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    personas: nextPersonas,
  };
}

export function removeDraftPersona(draft, personaId) {
  if (!draft || typeof personaId !== 'string' || personaId.trim().length === 0) {
    return draft;
  }

  const personas = getDraftPersonas(draft);
  const nextPersonas = personas.filter((persona) => persona?.id !== personaId);

  if (nextPersonas.length === personas.length) {
    return draft;
  }

  return {
    ...draft,
    personas: nextPersonas,
  };
}
