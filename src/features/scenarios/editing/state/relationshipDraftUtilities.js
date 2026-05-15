function cloneRelationships(relationships) {
  if (!Array.isArray(relationships)) {
    return [];
  }

  return relationships
    .filter((relationship) => relationship !== null && typeof relationship === 'object' && !Array.isArray(relationship))
    .map((relationship) => ({ ...relationship }));
}

function normalizeRelationshipInput(relationship) {
  if (relationship === null || typeof relationship !== 'object' || Array.isArray(relationship)) {
    return null;
  }

  return { ...relationship };
}

export function getDraftRelationships(draft) {
  return cloneRelationships(draft?.relationships);
}

export function addDraftRelationship(draft, newRelationship) {
  if (!draft) {
    return draft;
  }

  const normalizedRelationship = normalizeRelationshipInput(newRelationship);
  if (!normalizedRelationship) {
    return draft;
  }

  const relationships = getDraftRelationships(draft);

  return {
    ...draft,
    relationships: [...relationships, normalizedRelationship],
  };
}

export function updateDraftRelationship(draft, relationshipId, updates) {
  if (!draft || typeof relationshipId !== 'string' || relationshipId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizeRelationshipInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const relationships = getDraftRelationships(draft);
  const index = relationships.findIndex((relationship) => relationship?.id === relationshipId);

  if (index === -1) {
    return draft;
  }

  const nextRelationships = relationships.map((relationship, relationshipIndex) => {
    if (relationshipIndex !== index) {
      return relationship;
    }

    return {
      ...relationship,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    relationships: nextRelationships,
  };
}

export function removeDraftRelationship(draft, relationshipId) {
  if (!draft || typeof relationshipId !== 'string' || relationshipId.trim().length === 0) {
    return draft;
  }

  const relationships = getDraftRelationships(draft);
  const nextRelationships = relationships.filter((relationship) => relationship?.id !== relationshipId);

  if (nextRelationships.length === relationships.length) {
    return draft;
  }

  return {
    ...draft,
    relationships: nextRelationships,
  };
}
