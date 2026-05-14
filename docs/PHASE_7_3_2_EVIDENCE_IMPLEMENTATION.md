# Phase 7.3.2 · Evidenz-Implementierung

## Ziel der Phase
Evidenz im lokalen Szenario-Draft minimal bearbeitbar machen.

## Ausgangspunkt aus Phase 7.3.1
Phase 7.3.1 hat Evidenz als nächste Entität gewählt und den gebündelten Implementierungsmodus festgelegt.

## Hinweis auf gebündelte Implementierung
Diese Phase bündelt Utility, UI, Add/Update/Remove, a11y-Grundabsicherung, Status-/Hilfetexte, Tests, Doku und Quality Gate ohne Unterphasen.

## Umgesetzte Evidenz-Utilities
- `getDraftEvidence`
- `addDraftEvidence`
- `updateDraftEvidence`
- `removeDraftEvidence`

Alle Utilities arbeiten immutable und filtern ungültige Listeneinträge robust.

## Umgesetzte minimale Evidenz-UI
- Neue Komponente `EvidenceDraftForm`.
- Empty State, Listenansicht, Add-Button, Remove-Button je Eintrag.
- Bearbeitung der erlaubten Felder als einfache Inputs/Selects.

## Verwendete Felder
- `id`
- `title`
- `content`
- `sourceType`
- `relation`
- `confidence`
- `assumptionId`

## Umgang mit optionalem assumptionId
`assumptionId` bleibt optional und wird als freies Textfeld bearbeitet. Keine harte Validierung gegen Annahmenliste.

## Umgang mit neuer Evidenz
Neue Evidenz wird lokal über „Evidenz hinzufügen“ mit minimalen Defaultwerten erstellt.

## Umgang mit unvollständiger Evidenz
Evidenz gilt als unvollständig, wenn `title` oder `content` leer/Whitespace ist. Sichtbarer Hinweis: „Unvollständige Evidenz“.

## Umgang mit id-loser Evidenz
Id-lose Evidenz bleibt sichtbar, ist aber schreibgeschützt. Felder und Entfernen-Button sind deaktiviert; Hinweistext: „Evidenz ohne gültige id ist schreibgeschützt.“

## a11y-Hinweise
- Alle Felder haben Labels.
- Buttons haben sprechende Texte.
- Unvollständigkeit und Schreibschutz werden textlich sichtbar gemacht.
- Abschnitt, Liste und Einträge bleiben strukturiert nachvollziehbar.

## Status-/Hilfetexte
- „Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.“
- Empty State: „Noch keine Evidenz im Szenario-Draft vorhanden.“

## Testgrenzen
Der bestehende Teststil (Server-Rendering + Utility-Tests) prüft Struktur, Rendering und Immutable-Verhalten. Echte Browser-Interaktionen werden weiterhin nicht tief simuliert.

## Bewusste Grenzen
Lokale Draft-Bearbeitung ohne Persistenz- oder Plattformausbau.

## Negativ-Liste
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine neue Dependency
- keine globale State-Architektur
- keine komplexe Validierungsengine
- keine Quellenverwaltung
- keine KI-Bewertung
- keine automatische Evidenzbewertung
- keine harte relationale Modellkaskade
- keine zusätzliche Utility-/UI-/a11y-/Status-Sonderphase

## Test-/Build-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Anschlusslogik für Phase 7.3.3 Review
Nächster Schritt ist Phase 7.3.3 Review mit Fokus auf Scope-Hygiene, Utility-/UI-Konsistenz, a11y-Basis, Randfälle und Quality Gate.
