export function updateScenarioDraftField(draft, fieldName, value) {
  if (!draft) {
    return draft;
  }

  return {
    ...draft,
    [fieldName]: value,
  };
}
