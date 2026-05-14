# Phase 7.5.2 · Ressourcen-Implementierung

## Ziel der Phase
Ressourcen im lokalen Szenario-Draft minimal bearbeitbar machen (anzeigen, hinzufügen, ändern, entfernen) inklusive Utility, UI, Basis-a11y, Statushinweisen, Tests und Doku.

## Ausgangspunkt aus Phase 7.5.1
Phase 7.5.1 hat Ressourcen als nächste Entität konzeptionell ausgewählt. Diese Phase setzt die Umsetzung gebündelt um.

## Hinweis auf gebündelte Implementierung
Keine Unterphasen: Utility, UI, Add/Update/Remove, a11y, Statustexte, Tests, Dokumentation sowie README/ROADMAP-Update wurden in einem Schritt umgesetzt.

## Umgesetzte Ressourcen-Utilities
- `getDraftResources`
- `addDraftResource`
- `updateDraftResource`
- `removeDraftResource`

Pattern analog zu Annahmen/Evidenz/Personas, immutable, robust bei ungültigen Eingaben.

## Umgesetzte minimale Ressourcen-UI
- Neue Komponente `ResourceDraftForm`.
- Abschnitt mit Überschrift, Liste, Einträgen und klaren Labels.
- Empty State: „Noch keine Ressourcen im Szenario-Draft vorhanden.“
- Sichtbarer Hinweis zur lokalen Draft-Grenze.

## Verwendete Felder
- `id`
- `name`
- `type`
- `description`
- `availability`
- `relevance`
- `constraints`

## Umgang mit neuen Ressourcen
Neue Ressourcen werden lokal erzeugt mit:
- `id: resource-${Date.now()}`
- `name: ''`
- `type: 'other'`
- `description: ''`
- `availability: 'unclear'`
- `relevance: 'medium'`
- `constraints: ''`

## Umgang mit unvollständigen Ressourcen
Unvollständig, wenn `name` oder `description` leer/Whitespace sind.
Nicht-blockierende Markierung: „Unvollständige Ressource“.

## Umgang mit id-losen Ressourcen
Id-lose Ressourcen bleiben sichtbar, aber schreibgeschützt:
- Felder deaktiviert
- Entfernen-Button deaktiviert
- Hinweis: „Ressource ohne gültige id ist schreibgeschützt.“

## a11y-Hinweise
- Alle Felder mit Label.
- Buttons mit sprechenden Texten.
- Unvollständigkeit und Schreibschutz textlich sichtbar.
- Status-/Hilfetexte nicht nur farblich.

## Status-/Hilfetexte
- „Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.“
- Empty State wie oben.
- Unvollständigkeitshinweis pro Eintrag.

## Testgrenzen
Mit bestehendem Teststil (SSR-Markup + Utility-Tests) werden Struktur, Rendering, Defaults, Randfälle und Utility-Verhalten abgesichert. Keine neue Testing-Library, keine echte Browserinteraktion.

## Bewusste Grenzen
Nur lokale Draft-Bearbeitung. Keine Persistenz- oder Backend-Ausweitung.

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
- keine Kostenrechnung
- keine Budgetplanung
- keine Personalplanung
- kein Ressourcenmanagementsystem
- keine Kapazitätsplanung
- keine Organisationsstrukturmodellierung
- keine Beschaffungslogik
- keine Beziehungslogik
- keine Interventionen
- keine automatische Ressourcenbewertung
- keine zusätzliche Utility-/UI-/a11y-/Status-Sonderphase

## Test-/Build-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Anschlusslogik für Phase 7.5.3 Review
Nächster Schritt ist der gebündelte Review der Ressourcen-Implementierung (Scope-Hygiene, Utility/UI-Konsistenz, a11y-Basis, Tests, Doku).
