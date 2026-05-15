const DEFAULT_BOUNDARIES = [
  'Keine Empfehlung, keine automatische Entscheidung, kein Score und keine Rangfolge.'
];

const PLACEHOLDERS = {
  decisionPoint:
    'Entscheidungspunkt aus dem aktuellen Entwurfsstand gemeinsam klären und präzisieren.',
  options: 'Optionen aus dem aktuellen Entwurfsstand gemeinsam klären.',
  centralDifferences: 'Zentrale Unterschiede zwischen möglichen Optionen gemeinsam klären.',
  targetConflicts: 'Mögliche Zielkonflikte im aktuellen Entwurfsstand gemeinsam klären.',
  criticalAssumptions: 'Kritische Annahmen und deren Tragfähigkeit gemeinsam klären.',
  openQuestions: 'Welche Kernfrage muss vor einer Entscheidung noch geklärt werden?',
  nextClarificationStep:
    'Als nächsten Schritt die offenen Punkte im aktuellen Entwurfsstand strukturiert klären.'
};

function normalizeString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function firstNonEmpty(values) {
  for (const value of values) {
    const normalized = normalizeString(value);
    if (normalized) {
      return normalized;
    }
  }

  return '';
}

function toNonEmptyStringArray(values, fallback) {
  if (!Array.isArray(values)) {
    return [fallback];
  }

  const cleaned = values
    .map(normalizeString)
    .filter(Boolean);

  return cleaned.length > 0 ? cleaned : [fallback];
}

export function createDecisionNoteDraft(scenarioDraft, options = {}) {
  void options;

  const draft = scenarioDraft && typeof scenarioDraft === 'object' ? scenarioDraft : {};

  const decisionPoint = firstNonEmpty([draft.goal, draft.name, draft.description]) || PLACEHOLDERS.decisionPoint;
  const optionCandidates = [
    ...(Array.isArray(draft.interventions)
      ? draft.interventions.map((item) => item?.name)
      : []),
    ...(Array.isArray(draft.strategies)
      ? draft.strategies.map((item) => item?.name)
      : [])
  ];

  const note = {
    decisionPoint,
    options: toNonEmptyStringArray(optionCandidates, PLACEHOLDERS.options),
    centralDifferences: [PLACEHOLDERS.centralDifferences],
    targetConflicts: [PLACEHOLDERS.targetConflicts],
    criticalAssumptions: toNonEmptyStringArray(
      Array.isArray(draft.assumptions) ? draft.assumptions.map((item) => item?.name) : [],
      PLACEHOLDERS.criticalAssumptions
    ),
    openQuestions: [PLACEHOLDERS.openQuestions],
    nextClarificationStep: PLACEHOLDERS.nextClarificationStep,
    boundaries: [...DEFAULT_BOUNDARIES]
  };

  return note;
}
