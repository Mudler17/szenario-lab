function cloneResources(resources) {
  if (!Array.isArray(resources)) {
    return [];
  }

  return resources
    .filter((resource) => resource !== null && typeof resource === 'object' && !Array.isArray(resource))
    .map((resource) => ({ ...resource }));
}

function normalizeResourceInput(resource) {
  if (resource === null || typeof resource !== 'object' || Array.isArray(resource)) {
    return null;
  }

  return { ...resource };
}

export function getDraftResources(draft) {
  return cloneResources(draft?.resources);
}

export function addDraftResource(draft, newResource) {
  if (!draft) {
    return draft;
  }

  const normalizedResource = normalizeResourceInput(newResource);
  if (!normalizedResource) {
    return draft;
  }

  const resources = getDraftResources(draft);

  return {
    ...draft,
    resources: [...resources, normalizedResource],
  };
}

export function updateDraftResource(draft, resourceId, updates) {
  if (!draft || typeof resourceId !== 'string' || resourceId.trim().length === 0) {
    return draft;
  }

  const normalizedUpdates = normalizeResourceInput(updates);
  if (!normalizedUpdates) {
    return draft;
  }

  const resources = getDraftResources(draft);
  const index = resources.findIndex((resource) => resource?.id === resourceId);

  if (index === -1) {
    return draft;
  }

  const nextResources = resources.map((resource, resourceIndex) => {
    if (resourceIndex !== index) {
      return resource;
    }

    return {
      ...resource,
      ...normalizedUpdates,
    };
  });

  return {
    ...draft,
    resources: nextResources,
  };
}

export function removeDraftResource(draft, resourceId) {
  if (!draft || typeof resourceId !== 'string' || resourceId.trim().length === 0) {
    return draft;
  }

  const resources = getDraftResources(draft);
  const nextResources = resources.filter((resource) => resource?.id !== resourceId);

  if (nextResources.length === resources.length) {
    return draft;
  }

  return {
    ...draft,
    resources: nextResources,
  };
}
