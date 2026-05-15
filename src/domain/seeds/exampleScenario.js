export const exampleScenario = {
  id: 'scenario-example-001',
  name: 'Pilot: KI-Einführung in einem Bereichsteam',
  description:
    'Ein Bereichsteam prüft, wie KI verantwortungsvoll in Arbeitsprozesse eingeführt werden kann. Dabei bestehen unterschiedliche Erwartungen, Unsicherheiten und Governance-Anforderungen.',
  personas: [
    {
      id: 'persona-1',
      name: 'Bereichsleitung',
      role: 'Sponsoring und Priorisierung',
      perspective:
        'Erwartet messbare Effizienzgewinne, muss aber Risiken und Reputationsfragen gegenüber dem Management vertreten.'
    },
    {
      id: 'persona-2',
      name: 'Teamkoordination',
      role: 'Operative Umsetzung',
      perspective:
        'Möchte pragmatische Entlastung im Alltag erreichen und achtet auf Akzeptanz im Team sowie realistische Einführungsaufwände.'
    },
    {
      id: 'persona-3',
      name: 'Fachexpertin Service',
      role: 'Domänenwissen und Qualitätssicherung',
      perspective:
        'Sieht Potenzial für bessere Antwortqualität, befürchtet jedoch Fehlinterpretationen und zusätzlichen Prüfaufwand.'
    },
    {
      id: 'persona-4',
      name: 'Compliance-Vertretung',
      role: 'Governance und Regulierung',
      perspective:
        'Fokussiert auf Nachvollziehbarkeit, Datenschutz und dokumentierte Leitplanken für zulässige KI-Nutzung.'
    }
  ],
  resources: [
    {
      id: 'resource-1',
      name: 'Leitfaden Verantwortungsvolle KI',
      type: 'Dokument',
      description: 'Interne Richtlinie mit Mindestanforderungen für Transparenz, Freigabe und Monitoring.'
    },
    {
      id: 'resource-2',
      name: 'Zeitfenster Pilotphase',
      type: 'Kapazität',
      description: 'Sechs Wochen reservierte Teamzeit für Analyse, Tests und Abstimmungsschleifen.'
    },
    {
      id: 'resource-3',
      name: 'Use-Case Backlog',
      type: 'Arbeitsartefakt',
      description: 'Priorisierte Liste potenzieller KI-Anwendungsfälle aus dem Bereichsteam.'
    }
  ],
  phases: [
    {
      id: 'phase-1',
      name: 'Orientierung',
      order: 1,
      goal: 'Gemeinsames Verständnis über Chancen, Grenzen und Rahmenbedingungen des Piloten herstellen.'
    },
    {
      id: 'phase-2',
      name: 'Pilotdesign',
      order: 2,
      goal: 'Ein bis zwei umsetzbare Anwendungsfälle inklusive Governance-Leitplanken definieren.'
    },
    {
      id: 'phase-3',
      name: 'Statische Auswertung',
      order: 3,
      goal: 'Beobachtungen, Risiken und Entscheidungsoptionen für die nächste Ausbaustufe dokumentieren.'
    }
  ],
  assumptions: [
    {
      id: 'assumption-1',
      name: 'Mitarbeitende nehmen neue Arbeitsroutinen in der Pilotphase an',
      uncertainty: 'mittel'
    },
    {
      id: 'assumption-2',
      name: 'Datenschutzvorgaben erlauben den gewählten KI-Einsatz im vorgesehenen Prozess',
      uncertainty: 'hoch'
    },
    {
      id: 'assumption-3',
      name: 'Erste Qualitätseffekte sind innerhalb von sechs Wochen beobachtbar',
      uncertainty: 'mittel'
    }
  ],
  evidence: [
    {
      id: 'evidence-1',
      source: 'Pilot-Retrospektive KW 12',
      evidenceType: 'Team-Feedback',
      confidence: 'mittel',
      relatedAssumptionId: 'assumption-1',
      note: 'Mehrere Teammitglieder berichten über schnellere Einarbeitung in neue Arbeitsschritte.'
    },
    {
      id: 'evidence-2',
      source: 'Datenschutz-Checkliste v1.2',
      evidenceType: 'Compliance-Dokument',
      confidence: 'hoch',
      relatedAssumptionId: 'assumption-2',
      note: 'Für den ausgewählten Use Case sind zusätzliche Freigabeschritte und Protokollpflichten benannt.'
    },
    {
      id: 'evidence-3',
      source: 'Qualitätsprotokoll Pilotwoche 4',
      evidenceType: 'Messprotokoll',
      confidence: 'mittel',
      relatedAssumptionId: 'assumption-3',
      note: 'Erste Stichproben zeigen weniger Nachkorrekturen bei standardisierten Serviceantworten.'
    }
  ],
  relationships: [
    {
      id: 'relationship-1',
      sourceId: 'persona-1',
      targetId: 'persona-2',
      type: 'influence',
      description:
        'Die Bereichsleitung priorisiert den Piloten, die Teamkoordination übersetzt die Erwartungen in operative Schritte.',
      strength: 'high',
      quality: 'neutral',
      risks:
        'Erwartungsdruck kann entstehen, wenn Effizienzgewinne schneller erwartet werden als das Team sie belastbar liefern kann.'
    },
    {
      id: 'relationship-2',
      sourceId: 'persona-2',
      targetId: 'persona-3',
      type: 'communication',
      description:
        'Die Teamkoordination stimmt operative Umsetzungsschritte mit der Fachexpertin ab, um Qualität und Alltagstauglichkeit zu sichern.',
      strength: 'medium',
      quality: 'supportive',
      risks:
        'Zusätzliche Abstimmungen können den Pilotfortschritt verlangsamen, wenn Prioritäten nicht klar vereinbart sind.'
    },
    {
      id: 'relationship-3',
      sourceId: 'persona-4',
      targetId: 'persona-1',
      type: 'dependency',
      description:
        'Die Compliance-Vertretung setzt Leitplanken, die von der Bereichsleitung in Priorisierung und Kommunikation integriert werden müssen.',
      strength: 'high',
      quality: 'neutral',
      risks:
        'Bei unklaren Freigabewegen können Entscheidungen verzögert werden und die Akzeptanz des Piloten sinken.'
    }
  ],
  interventions: [
    {
      id: 'intervention-1',
      name: 'Wöchentlicher Governance-Check-in',
      goal: 'Offene Compliance-Fragen frühzeitig klären und Unsicherheiten transparent machen.'
    },
    {
      id: 'intervention-2',
      name: 'Use-Case Review im Teamforum',
      goal: 'Nutzerperspektiven bündeln und die Auswahl auf tragfähige Pilotfälle fokussieren.'
    }
  ],
  strategies: [
    {
      id: 'strategy-1',
      name: 'Risikoorientierte Schrittfolge',
      guidingLogic: 'Zuerst niedrig-riskante Aufgaben adressieren, anschließend kontrolliert in anspruchsvollere Prozesse erweitern.'
    },
    {
      id: 'strategy-2',
      name: 'Governance by Design',
      guidingLogic: 'Regelanforderungen von Beginn an in Entscheidungen integrieren statt nachträglich ergänzen.'
    }
  ]
};
