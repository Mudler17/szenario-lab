# Phase 7.6.2 · Phasen-Implementierung

## Ziel der Phase
Phasen im lokalen Szenario-Draft minimal bearbeitbar machen (anzeigen, hinzufügen, ändern, entfernen) im bestehenden Draft-Muster.

## Ausgangspunkt aus Phase 7.6.1
Phase 7.6.1 hat die Entität „Phasen“ konzeptionell ausgewählt und den Minimalzuschnitt festgelegt. Diese Phase setzt das Konzept gebündelt um.

## Hinweis auf gebündelte Implementierung
Umsetzung in einer Phase ohne Unterphasen: Utilities, UI, Add/Update/Remove, a11y-Grundlage, Status-/Hilfetexte, Tests, Doku, README/ROADMAP, Quality Gate.

## Umgesetzte Phasen-Utilities
Neu umgesetzt:
- `getDraftPhases`
- `addDraftPhase`
- `updateDraftPhase`
- `removeDraftPhase`

Eigenschaften:
- analog zu Annahmen/Evidenz/Personas/Ressourcen
- immutable Verarbeitung
- robuste Behandlung ungültiger Einträge (nicht-Objekte, `null`, Arrays werden gefiltert/ignoriert)
- keine LocalStorage-Nutzung

## Umgesetzte minimale Phasen-UI
Neue Komponente `PhaseDraftForm`:
- Abschnitt „Phasen“
- Empty State
- Liste vorhandener Phasen
- Button „Phase hinzufügen“
- Button „Phase entfernen“ pro Eintrag
- sichtbarer Hinweis zur lokalen Draft-Grenze

## Verwendete Felder
Nur die freigegebenen Felder:
- `id`
- `title`
- `description`
- `order`
- `timeframe`
- `status`
- `risks`

## Umgang mit neuen Phasen
Neue lokale Phase via `handleAddPhase` mit:
- `id: phase-${Date.now()}`
- `title: ''`
- `description: ''`
- `order: ''`
- `timeframe: ''`
- `status: 'unclear'`
- `risks: ''`

## Umgang mit unvollständigen Phasen
Eine Phase gilt als unvollständig, wenn `title` oder `description` leer bzw. nur Whitespace sind.
Es wird sichtbar markiert mit: „Unvollständige Phase“.
Keine blockierende Validierung.

## Umgang mit id-losen Phasen
Id-lose Phasen bleiben sichtbar, werden aber schreibgeschützt dargestellt:
- Felder deaktiviert
- Entfernen-Button deaktiviert
- Hinweis: „Phase ohne gültige id ist schreibgeschützt.“

## Umgang mit `order` als einfachem Orientierungswert
`order` bleibt ein freies Eingabefeld ohne Sortierlogik, ohne Projektplanung.
Hilfetext: „Die Reihenfolge ist ein einfacher Orientierungswert, keine Projektplanung.“

## Umgang mit `timeframe` als freier Beschreibung
`timeframe` bleibt freies Textfeld ohne Termin-/Kalenderlogik.
Hilfetext: „Der Zeitraum ist eine freie Beschreibung, kein Kalendertermin.“

## a11y-Hinweise
- Alle Felder mit sichtbaren Labels
- sprechende Buttontexte
- keine Icon-only-Buttons
- textliche Hinweise für Unvollständigkeit und Schreibschutz
- nachvollziehbare Struktur (Abschnitt, Liste, Einträge)

## Status-/Hilfetexte
Sichtbar umgesetzt:
- „Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.“
- Empty State: „Noch keine Phasen im Szenario-Draft vorhanden.“
- Unvollständigkeitsmarker
- Schreibschutzhinweis für id-lose Phasen
- Hilfetexte zu `order` und `timeframe`

## Testgrenzen
Der bestehende Teststil (node:test + statisches Markup) prüft Struktur/Rendering/Utility-Verhalten zuverlässig.
Echte Browser-Interaktionspfade werden in dieser Phase nicht erweitert, keine neue Testing-Library eingeführt.

## Bewusste Grenzen
Nur lokale Draft-Bearbeitung; kein Architekturwechsel, keine Persistenz.

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
- keine Projektplanung
- kein Prozessmanagement
- keine Prozessautomatisierung
- keine Maßnahmensteuerung
- keine Kalenderlogik
- keine Gantt-Logik
- keine Drag-and-drop-Sortierung
- keine Phasenabhängigkeiten
- keine automatische Fortschrittsberechnung
- keine Beziehungslogik
- keine Interventionen
- keine automatische Phasenbewertung
- keine zusätzliche Utility-/UI-/a11y-/Status-Sonderphase

## Test-/Build-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Anschlusslogik für Phase 7.6.3 Review
Phase 7.6.3 prüft die umgesetzte Phasen-Bearbeitung auf Scope-Hygiene, Utility-/UI-Konsistenz, a11y-Basis, Tests und Doku-Kohärenz.
