import { createDraftFromScenario } from './createDraftFromScenario';

export function resetDraft(originalScenario) {
  if (!originalScenario) {
    return null;
  }

  return createDraftFromScenario(originalScenario);
}
