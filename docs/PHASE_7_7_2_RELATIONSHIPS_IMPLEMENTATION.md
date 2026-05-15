# Phase 7.7.2 · Beziehungen-Implementierung

## Ziel der Phase
Beziehungen sind im lokalen Szenario-Draft minimal bearbeitbar (Add/Update/Remove) – ohne Speicherung.

## Bezug auf Phase 7.7.1
Phase 7.7.1 hat Beziehungen als nächste Entität ausgewählt. Diese Phase setzt die minimale Bearbeitung um.

## Umgesetzter Datenzuschnitt
Felder: `id`, `sourceId`, `targetId`, `type`, `description`, `strength`, `quality`, `risks`.

## Umgesetzte Dateien
- `src/features/scenarios/editing/state/relationshipDraftUtilities.js`
- `src/features/scenarios/editing/state/relationshipDraftUtilities.test.js`
- `src/features/scenarios/editing/state/index.js`
- `src/features/scenarios/editing/components/RelationshipDraftForm.jsx`
- `src/features/scenarios/editing/components/RelationshipDraftForm.test.jsx`
- `src/pages/HomePage.jsx`
- `README.md`
- `ROADMAP.md`

## UI-Verhalten
- Eigener Abschnitt „Beziehungen“ im Bearbeitungsbereich (nach Phasen, vor Evidenz).
- Add/Update/Remove für Beziehungen im lokalen Draft.
- Empty State, Hilfetexte und Schreibschutz für id-lose Einträge.

## Utility-Verhalten
- Defensive Kopien, Filterung ungültiger Einträge.
- Kein Mutieren des Eingabe-Drafts.
- Bei ungültiger `id` oder ungültigen `updates`: Original-Draft unverändert.

## Testabdeckung
- Utility-Tests für Lesen/Kopieren/Filtern/Add/Update/Remove + LocalStorage-Guard.
- Komponenten-Tests für Empty State, Felder, Hinweise, Read-only id-los + LocalStorage-Guard.

## a11y-Basis
- Semantische `section` mit `aria-label`.
- Sichtbare Status-/Hilfetexte.
- Keine icon-only Buttons.

## Scope-Hygiene
Nur lokale Draft-Bearbeitung; keine Architekturänderung.

## Negativ-Liste
Keine Speicherung, kein LocalStorage, kein Backend, keine OpenAI-Anbindung, keine Simulation, kein Import-/Export-Ausbau, keine neue Dependency, keine globale State-Architektur, keine Graph-Visualisierung, keine Netzwerkanalyse, keine Zentralitätsberechnung, keine Clusteranalyse, keine automatische Konfliktanalyse, keine Stakeholderbewertung, keine Organisationsdiagnostik, keine Interventionsplanung, keine Maßnahmensteuerung, keine automatische Beziehungsbewertung, keine harte relationale Validierung gegen Personas/Ressourcen/Phasen/Evidenz, keine Interventionen, keine neue Entität außer Beziehungen, keine Änderung am bestehenden JSON-Import-/Export-Verhalten, keine Persistenzentscheidung.

## Quality-Gate-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden
