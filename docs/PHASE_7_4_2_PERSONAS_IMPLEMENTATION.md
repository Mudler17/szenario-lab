# Phase 7.4.2 · Personas-Implementierung

## Ziel der Phase
Personas im lokalen Szenario-Draft minimal bearbeitbar machen.

## Ausgangspunkt aus Phase 7.4.1
Phase 7.4.1 hat Personas als nächste Entität konzeptionell ausgewählt und den Minimal-Scope festgelegt.

## Hinweis auf gebündelte Implementierung
Die Phase wurde gebündelt umgesetzt (Utility, UI, Add/Update/Remove, a11y-Basis, Status-/Hilfetexte, Tests, Doku).

## Umgesetzte Persona-Utilities
- `getDraftPersonas`
- `addDraftPersona`
- `updateDraftPersona`
- `removeDraftPersona`

Pattern analog zu Annahmen/Evidenz: immutable Updates, robuste Eingaben, Filterung ungültiger Persona-Listeneinträge (kein Objekt, `null`, Arrays).

## Umgesetzte minimale Personas-UI
Neue Komponente `PersonaDraftForm` mit:
- Abschnittsüberschrift
- sichtbarem Local-Draft-Hinweis
- Empty State
- Liste vorhandener Personas
- „Persona hinzufügen“
- „Persona entfernen“ je Eintrag

## Verwendete Felder
- `id`
- `name`
- `role`
- `perspective`
- `needs`
- `influence` (`low` | `medium` | `high`)
- `constraints`

## Umgang mit neuen Personas
Neue Personas werden lokal erstellt mit:
- `id: persona-${Date.now()}`
- `name: ''`
- `role: ''`
- `perspective: ''`
- `needs: ''`
- `influence: 'medium'`
- `constraints: ''`

## Umgang mit unvollständigen Personas
Wenn `name` oder `role` leer/Whitespace sind, wird sichtbar markiert:
- „Unvollständige Persona“

Keine blockierende Validierung.

## Umgang mit id-losen Personas
id-lose Personas bleiben sichtbar, aber sind schreibgeschützt:
- Felder und Entfernen-Button deaktiviert
- Hinweis: „Persona ohne gültige id ist schreibgeschützt.“

## a11y-Hinweise
- Alle Felder haben klare Labels.
- Buttons haben sprechende Texte.
- Status-/Hilfetexte sind textlich sichtbar (nicht nur Farbe).
- Struktur bleibt als Abschnitt + Liste + Einträge nachvollziehbar.

## Status-/Hilfetexte
- „Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.“
- Empty State: „Noch keine Personas im Szenario-Draft vorhanden.“
- Unvollständigkeit und Schreibschutz jeweils textlich sichtbar.

## Testgrenzen
Mit bestehendem Teststil (SSR-Rendering + Utility-Tests) wurden Struktur, Rendering, Hinweise und Randfälle abgesichert.
Keine neue Testing-Library, keine echte Browserinteraktionssimulation.

## Bewusste Grenzen
Nur minimaler lokaler Draft-Ausbau für Personas ohne Architekturwechsel.

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
- keine Beziehungslogik
- keine Hierarchie-/Netzwerklogik
- keine Organisationsstrukturmodellierung
- keine Interventionen
- keine psychologische Profilierung
- keine Stakeholdermanagement-Funktion
- keine automatische Persona-Bewertung
- keine zusätzliche Utility-/UI-/a11y-/Status-Sonderphase

## Test-/Build-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Anschlusslogik für Phase 7.4.3 Review
Phase 7.4.3 prüft die Umsetzung auf Scope-Hygiene, lokale Draft-Grenzen, a11y-Basis und Testabdeckung.
