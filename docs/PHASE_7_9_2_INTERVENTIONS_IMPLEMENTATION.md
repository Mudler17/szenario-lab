# Phase 7.9.2 · Interventionen-Implementierung

## Ziel der Phase
Interventionen im lokalen Szenario-Draft minimal bearbeitbar machen (Add/Update/Remove) inklusive Basis-a11y, Status-/Hilfetexte, Tests und Dokumentation.

## Bezug auf Phase 7.9.1
Phase 7.9.1 hat Interventionen als nächste editierbare Entität konzeptionell ausgewählt. Phase 7.9.2 setzt diese Auswahl minimal um.

## Umgesetzter Datenzuschnitt
Editierbare Felder je Intervention:
- id
- name
- goal
- description
- targetRelationshipId
- phaseId
- status
- risks

Statuswerte:
- idea
- planned
- active
- completed
- unclear

## Umgesetzte Dateien
- `src/features/scenarios/editing/state/interventionDraftUtilities.js`
- `src/features/scenarios/editing/state/interventionDraftUtilities.test.js`
- `src/features/scenarios/editing/state/index.js`
- `src/features/scenarios/editing/components/InterventionDraftForm.jsx`
- `src/features/scenarios/editing/components/InterventionDraftForm.test.jsx`
- `src/pages/HomePage.jsx`
- `README.md`
- `ROADMAP.md`

## UI-Verhalten
- Neue Sektion „Interventionen im lokalen Draft“ mit sichtbaren Scope-Hinweisen.
- Empty State mit „Intervention hinzufügen“.
- Pro Intervention editierbare Minimalfelder gemäß Datenzuschnitt.
- Unvollständigkeits-Hinweis bei fehlendem `name`, `goal` oder `description`.
- Interventionen ohne gültige id bleiben sichtbar, aber schreibgeschützt.

## Utility-Verhalten
- Defensive, nicht-mutierende Utilities analog zu bestehenden Draft-Utilities.
- Ungültige Einträge werden beim Lesen gefiltert.
- Bei ungültigen ids/updates wird der ursprüngliche Draft unverändert zurückgegeben.
- Keine harte relationale Validierung gegen andere Entitäten.

## Testabdeckung
- Utility-Tests für Read/Add/Update/Remove, defensive Kopien, Filterung, Nicht-Mutation und LocalStorage-Guard.
- Komponenten-Tests für Empty State, Hinweise, Felder, Remove-Button, Unvollständigkeits-Hinweis, Read-only bei fehlender id und LocalStorage-Guard.

## a11y-Basis
- Semantische Sektion mit `aria-label`.
- Sichtbare Labels für alle Felder.
- Keine Icon-only-Buttons.

## Scope-Hygiene
Interventionen sind lokale beschreibende Handlungsoptionen. Es wurde **keine Maßnahmensteuerung** eingeführt.

## Negativ-Liste
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- keine Maßnahmensteuerung
- keine Aufgabenverwaltung
- kein Projektmanagement
- keine Termine
- keine Verantwortlichkeiten
- keine Ressourcenplanung
- keine automatische Wirksamkeitsbewertung
- keine KI-Empfehlung
- keine Workflow-Logik
- keine harte relationale Validierung gegen Beziehungen, Phasen, Ressourcen, Personas, Annahmen oder Evidenz
- keine neue Entität außer Interventionen
- keine neue Dependency
- keine globale State-Architektur
- kein Import-/Export-Ausbau
- keine Änderung am bestehenden JSON-Import-/Export-Verhalten
- keine Änderung an `InterventionList.jsx`
- keine UI-Strukturreform

## Quality-Gate-Ergebnis
- `npm test`: erfolgreich
- `npm run build`: erfolgreich
