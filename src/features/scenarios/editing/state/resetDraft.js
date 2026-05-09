import { createDraftFromScenario } from './createDraftFromScenario.js';

export function resetDraft(originalScenario) {
  if (!originalScenario) {
    return null;
  }

  return createDraftFromScenario(originalScenario);
}
