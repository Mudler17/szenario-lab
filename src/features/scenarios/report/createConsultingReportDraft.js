const SECTION_DEFINITIONS = [
  {
    id: 'ausgangslage',
    title: 'Ausgangslage',
    type: 'context',
    emptyState: 'Ausgangslage aus dem vorliegenden Entwurfsstand strukturiert erfassen.'
  },
  {
    id: 'zielbild-fragestellung',
    title: 'Zielbild / Fragestellung',
    type: 'focus',
    emptyState: 'Zielbild und leitende Fragestellung aus dem Entwurfsstand klären.'
  },
  {
    id: 'annahmen',
    title: 'Annahmen',
    type: 'assumptions',
    emptyState: 'Tragende Annahmen aus dem Entwurfsstand dokumentieren und prüfen.'
  },
  {
    id: 'evidenz',
    title: 'Evidenz',
    type: 'evidence',
    emptyState: 'Vorliegende Evidenz aus dem Entwurfsstand zusammenstellen.'
  },
  {
    id: 'personas-stakeholder',
    title: 'Personas / Stakeholder',
    type: 'stakeholders',
    emptyState: 'Beteiligte Perspektiven und Stakeholder aus dem Entwurfsstand erfassen.'
  },
  {
    id: 'ressourcen',
    title: 'Ressourcen',
    type: 'resources',
    emptyState: 'Relevante Ressourcen aus dem Entwurfsstand zusammentragen.'
  },
  {
    id: 'phasen',
    title: 'Phasen',
    type: 'phases',
    emptyState: 'Phasenbezogene Aspekte aus dem Entwurfsstand strukturieren.'
  },
  {
    id: 'beziehungen',
    title: 'Beziehungen',
    type: 'relationships',
    emptyState: 'Beziehungen und Wechselwirkungen aus dem Entwurfsstand sichtbar machen.'
  },
  {
    id: 'interventionen',
    title: 'Interventionen',
    type: 'interventions',
    emptyState: 'Genannte Interventionen aus dem Entwurfsstand ordnen.'
  },
  {
    id: 'risiken-unsicherheiten',
    title: 'Risiken / Unsicherheiten',
    type: 'risks',
    emptyState: 'Risiken und Unsicherheiten aus dem Entwurfsstand festhalten.'
  },
  {
    id: 'offene-klaerungsfragen',
    title: 'Offene Klärungsfragen',
    type: 'open-questions',
    emptyState: 'Offene Klärungsfragen aus dem Entwurfsstand bündeln.'
  },
  {
    id: 'naechste-arbeitsschritte',
    title: 'Nächste Arbeitsschritte',
    type: 'next-steps',
    emptyState: 'Nächste Klär- und Prüfschritte aus dem Entwurfsstand neutral festhalten.'
  }
];

function toItems(values) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map((item) => {
      if (typeof item === 'string') {
        return item.trim();
      }

      if (item && typeof item === 'object' && typeof item.name === 'string') {
        return item.name.trim();
      }

      return '';
    })
    .filter(Boolean);
}

export function createConsultingReportDraft(scenarioDraft) {
  const draft = scenarioDraft && typeof scenarioDraft === 'object' ? scenarioDraft : {};

  return {
    reportType: 'consulting-report-draft',
    formatVersion: 1,
    boundary: {
      structuralOnly: true,
      decisionSupportOnly: true,
      noRecommendation: true,
      noScoring: true,
      noRanking: true,
      noSimulation: true,
      noLlmOutput: true
    },
    source: {
      type: 'scenario-draft',
      mode: 'input-only'
    },
    sections: SECTION_DEFINITIONS.map((section) => ({
      id: section.id,
      title: section.title,
      type: section.type,
      items: toItems(draft[section.type]),
      emptyState: section.emptyState
    }))
  };
}
