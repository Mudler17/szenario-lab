export const exampleScenario = {
  id: 'scenario-example-001',
  name: 'Pilot: Teamübergreifende Prozessabstimmung',
  description:
    'Ein statisches Beispielszenario zur Vorbereitung des ersten Fachmoduls ohne Simulation oder Persistenz.',
  personas: [
    { id: 'persona-1', name: 'Teamleitung Operations' },
    { id: 'persona-2', name: 'Projektkoordination' },
    { id: 'persona-3', name: 'Fachbereich Service' }
  ],
  resources: [
    { id: 'resource-1', name: 'Budget Q3' },
    { id: 'resource-2', name: 'Moderationszeit' }
  ],
  phases: [
    { id: 'phase-1', name: 'Vorbereitung' },
    { id: 'phase-2', name: 'Abstimmung' },
    { id: 'phase-3', name: 'Nachbereitung' }
  ],
  assumptions: [
    { id: 'assumption-1', name: 'Teilnahmequote bleibt stabil' },
    { id: 'assumption-2', name: 'Keine zusätzlichen Compliance-Auflagen' }
  ],
  relationships: [
    { id: 'relationship-1', from: 'persona-1', to: 'persona-2', type: 'koordiniert' }
  ],
  interventions: [
    { id: 'intervention-1', name: 'Wöchentlicher Sync-Termin' },
    { id: 'intervention-2', name: 'Gemeinsames Priorisierungsboard' }
  ],
  strategies: [
    { id: 'strategy-1', name: 'Schrittweise Einführung' }
  ]
};
