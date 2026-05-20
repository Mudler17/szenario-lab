# Report-Utility (Phase 11.7)

Dieses Modul enthält die reine, funktionale Utility `createConsultingReportDraft(scenarioDraft)`.

## Scope-Grenzen
- kein UI
- keine Persistenz
- keine API
- keine OpenAI-/LLM-Anbindung

## Mapping (nachgeschärft)
- Ausgangslage: `name`, `description`
- Zielbild / Fragestellung: `goal`
- Annahmen: `assumptions`
- Evidenz: `evidence`
- Personas / Stakeholder: `personas` (nicht `stakeholders`)
- Ressourcen: `resources`
- Phasen: `phases`
- Beziehungen: `relationships`
- Interventionen: `interventions`
- Risiken / Unsicherheiten: vorhandene `risks`-Angaben sowie `assumptions[].uncertainty` mit neutralem Annahmenbezug (`Annahme: … · Unsicherheit: …`, Fallback ohne Namen)
- Offene Klärungsfragen: optional `openQuestions`/`clarificationQuestions`
- Nächste Arbeitsschritte: optional `nextSteps`/`workSteps`
