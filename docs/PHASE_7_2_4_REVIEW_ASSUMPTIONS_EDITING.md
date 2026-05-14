# Phase 7.2.4 Review · Annahmen-Bearbeitung prüfen

## Review-Ziel
Prüfen, ob Phase 7.2.4 die minimale lokale Bearbeitung von Annahmen vollständig, utility-basiert und innerhalb der Scope-Grenzen umgesetzt hat.

## Geprüfte Dateien
- `src/features/scenarios/editing/components/AssumptionDraftForm.jsx`
- `src/features/scenarios/editing/components/AssumptionDraftForm.test.jsx`
- `src/pages/HomePage.jsx`
- `src/features/scenarios/editing/state/assumptionDraftUtilities.js`
- `src/features/scenarios/editing/state/assumptionDraftUtilities.test.js`
- `docs/PHASE_7_2_4_ASSUMPTIONS_EDITING.md`
- `README.md`
- `ROADMAP.md`

## Ergebnis: minimale Bearbeitung vollständig?
Ja.
- Vorhandene Annahmen werden als Formularfelder angezeigt.
- Erlaubte Felder (`title`, `content`, `scope`, `confidence`, `rationale`) sind bearbeitbar.
- „Annahme hinzufügen“ ist vorhanden (Empty State + Listenansicht).
- Pro Annahme ist „Annahme entfernen“ vorhanden.
- „Unvollständige Annahme“ bleibt sichtbar bei leerem `title` oder `content`.

## Ergebnis: Draft-State lokal und utility-basiert?
Ja.
- `HomePage` nutzt `addDraftAssumption`, `updateDraftAssumption`, `removeDraftAssumption`.
- Änderungen laufen im lokalen React-Draft-State über `setScenarioDraft`.
- Kein Eingangsdraft wird mutiert (Utility-Pattern bleibt immutable).
- Download-Status wird nach Annahmenänderungen wie bei anderen Draft-Änderungen neutralisiert.
- Keine separate State-Architektur eingeführt.

## Ergebnis: id-Randfall geprüft
Teilweise problematisch identifiziert, minimal abgesichert.
- `AssumptionDraftForm` erzeugt für Rendering-Fälle ohne gültige `id` weiterhin einen Fallback (`assumption-${index}`).
- `updateDraftAssumption` und `removeDraftAssumption` arbeiten jedoch korrekt id-basiert gegen echte Draft-IDs.
- Dadurch waren id-lose Annahmen optisch editierbar, aber nicht verlässlich veränderbar/löschbar.

### Kleine Korrektur
Für Annahmen ohne gültige `id` wurden Felder und Entfernen-Button deaktiviert und ein klarer Hinweis ergänzt:
- „Annahme ohne gültige id ist schreibgeschützt.“

Damit werden fehlerhafte Schein-Edits vermieden, ohne neue Validierungsengine oder Modelländerung einzuführen.

## Ergebnis: Scope-Hygiene
Keine Verstöße gegen die Stoppliste festgestellt.
Insbesondere keine Erweiterung in Richtung Speicherung, LocalStorage, Backend, OpenAI, Simulation, Import-/Export-Ausbau, neue Dependencies, neue fachliche Felder, Modellumbau oder globale State-Architektur.

## Ergebnis: a11y
Bestanden.
- Eingabefelder sind gelabelt.
- Buttons sind klar beschriftet.
- Keine reinen Icon-Buttons.
- Unvollständigkeit wird textlich angezeigt.
- Hinweis zur lokalen Draft-Bearbeitung ist sichtbar.
- Struktur bleibt nachvollziehbar.
- Ergänzend: id-lose Fälle werden textlich erklärt (schreibgeschützt).

## Ergebnis: Tests
Bestehende Tests decken die Mindestpunkte gut ab:
- Empty State
- Add-Button
- Formularfelder (`input`/`textarea`/`select`)
- Remove-Button pro Annahme
- Markierung unvollständiger Annahmen

Kleine Ergänzung wurde aufgenommen:
- id-loser Randfall: schreibgeschützter Zustand + Hinweistext.

Keine neue Testing-Library, kein Stilbruch.

## Ergebnis: README/ROADMAP
- README-Status bleibt fachlich konsistent zu Phase 7.2.4.
- ROADMAP wurde um den Review-Schritt ergänzt.

## ggf. kleine Korrekturen
- Minimaler Robustheitsfix für id-losen Randfall in `AssumptionDraftForm`.
- Kleiner ergänzender Test für den Randfall.
- Neues Review-Dokument erstellt.

## Negativ-Liste: Was im Review NICHT gemacht wurde
- keine neue Funktionalität
- keine neue Entität
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine neuen fachlichen Felder
- keine Änderung am Annahmenmodell
- keine neue globale State-Architektur
- keine neue Dependency
- keine zusätzliche Zwischenphase

## Quality-Gate-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Entscheidung
**Phase 7.2.4 freigegeben.**

## Anschlusslogik
Annahmen-Bearbeitung ist im minimalen lokalen Scope geprüft und freigegeben. Nächster Schritt: nächste priorisierte Entität im gleichen lokalen Draft-Muster bearbeiten (ohne Speicher-/Backend-Ausbau).
