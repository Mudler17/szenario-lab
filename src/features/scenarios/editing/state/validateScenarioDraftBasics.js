export function validateScenarioDraftBasics(draft) {
  const name = draft?.name?.trim() ?? '';
  const description = draft?.description?.trim() ?? '';
  const goal = draft?.goal?.trim() ?? '';

  return {
    name: name ? '' : 'Bitte einen Szenario-Namen eingeben.',
    description: description ? '' : 'Bitte eine Szenario-Beschreibung eingeben.',
    goal: goal ? '' : 'Bitte ein Szenario-Ziel eingeben.',
  };
}
