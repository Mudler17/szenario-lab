# Phase 7.2.3 Review · Annahmen-UI-Vorbereitung prüfen

## Review-Ziel
Dieses Review prüft die Umsetzung aus Phase 7.2.3 gezielt auf den vereinbarten Scope: reine Anzeige der Annahmen im lokalen Draft, ohne Editier-/Speicherlogik und ohne Seiteneffekte auf Import, Export, Vorschau oder Simulation.

## Geprüfte Dateien
- `docs/PHASE_7_2_3_ASSUMPTIONS_UI_PREP.md`
- `src/features/scenarios/editing/components/AssumptionDraftForm.jsx`
- `src/features/scenarios/editing/components/AssumptionDraftForm.test.jsx`
- `src/pages/HomePage.jsx`
- `src/features/scenarios/editing/state/assumptionDraftUtilities.js`
- `src/features/scenarios/editing/state/index.js`

## Ergebnis: UI nur Anzeige?
- `AssumptionDraftForm` liest Annahmen ausschließlich via `getDraftAssumptions(scenarioDraft)`.
- Es gibt in der Komponente keine Add-/Update-/Remove-Anbindung.
- Es existieren keine Eingabefelder (`input`, `textarea`, `select`) in der Annahmen-Komponente.
- Es existieren keine Bearbeitungs-Buttons (z. B. „Hinzufügen“, „Speichern“, „Löschen“) und keine Eventhandler (`onChange`, `onClick`) für Annahmen-Bearbeitung.
- Ergebnis: **Ja, die UI ist in 7.2.3 strikt Anzeige-only umgesetzt.**

## Ergebnis: Empty State
- Der Text ist exakt vorhanden: „Noch keine Annahmen im Szenario-Draft vorhanden.“
- Der Empty State wird nur bei leerer Annahmenliste gerendert (`assumptions.length === 0`).
- Inhaltlich ist der Text neutral-deskriptiv und nicht als Validierungs- oder Fehlermeldung missverständlich.
- Ergebnis: **Empty State ist klar und korrekt konditional.**

## Ergebnis: unvollständige Annahmen
- Das Mindestkriterium „`title` oder `content` fehlt/leer“ ist für diese Zwischenphase sinnvoll und defensiv.
- Die Markierung „Unvollständige Annahme“ ist als sichtbarer Text vorhanden.
- Die Markierung erfolgt nicht nur über Farbe, sondern explizit sprachlich.
- Fehlende/leerzeichen-only Feldwerte werden nachvollziehbar mit `—` dargestellt.
- Ergebnis: **Unvollständigkeit ist für 7.2.3 ausreichend und verständlich markiert.**

## Ergebnis: Platzierung in `HomePage.jsx`
- Die Platzierung direkt unter `ScenarioDraftForm` ist fachlich stimmig (erst Grunddaten, dann Annahmenbereich).
- Der Bearbeitungsbereich bleibt trotz zusätzlichem Abschnitt übersichtlich, da die Annahmen aktuell nur passiv angezeigt werden.
- Reset-, JSON-Download- und JSON-Import-Bereiche bleiben logisch getrennt und unverändert bedienbar.
- Keine Seiteneffekte auf Vorschau, Import oder Download durch die Einbindung erkennbar.
- Ergebnis: **Platzierung ist sinnvoll und konsistent zum aktuellen Editorfluss.**

## Ergebnis: Name `AssumptionDraftForm`
- Der Name ist semantisch derzeit nur teilweise präzise, da die Komponente noch kein Formular mit Bearbeitung ist.
- Für Phase 7.2.3 ist die Benennung dennoch tragbar, weil sie konsistent zur bestehenden Komponentenstruktur ist und die nächste Ausbaustufe (7.2.4) vorwegnimmt.
- **Explizite Empfehlung für 7.2.4:** Namensfrage erneut prüfen, falls die Komponente wider Erwarten weiterhin reine Anzeige bleibt.
- Ergebnis: **Aktuell akzeptabel, als Übergangsbenennung dokumentiert.**

## Ergebnis: Tests
- Vorhandene Abdeckung in `AssumptionDraftForm.test.jsx` umfasst:
  - Empty State
  - Anzeige vorhandener Annahmenfelder
  - Markierung unvollständiger Annahmen
  - Nicht-Anzeige ungültiger Phantom-Einträge
- Kleine echte Lücke identifiziert: expliziter Nachweis, dass keine Bearbeitungs-Controls gerendert werden.
- **Testergänzung durchgeführt:** zusätzlicher Minimaltest auf Nichtvorhandensein von Formularfeldern und Bearbeitungsbuttons.
- Ergebnis: **Testabdeckung für 7.2.3 nach Ergänzung ausreichend.**

## Ergebnis: keine versteckte Editier-/Speicher-/Import-/Export-/Simulationslogik
Geprüft wurden gezielt folgende Risikoindikatoren:
- keine `setScenarioDraft`-Nutzung in `AssumptionDraftForm`
- keine `onChange`/`onClick`-Editierlogik in `AssumptionDraftForm`
- keine UI-Anbindung von `addDraftAssumption`/`updateDraftAssumption`/`removeDraftAssumption`
- kein `localStorage`
- keine Backend-/API-Aufrufe
- keine OpenAI-Aufrufe
- keine Import-/Export-Kopplung in der Annahmen-Komponente
- keine Simulationslogik

Ergebnis: **Keine versteckte Logik gefunden; Komponente bleibt strikt auf lesende Darstellung begrenzt.**

## ggf. kleine Testergänzung
- Ergänzt wurde ein einzelner Minimaltest in `AssumptionDraftForm.test.jsx`, der sicherstellt, dass weder Formularfelder noch Bearbeitungsbuttons in der Anzeige-Komponente erscheinen.

## Negativ-Liste: Was im Review NICHT gemacht wurde
- keine neue UI-Funktionalität
- keine Editierlogik
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine fachliche Erweiterung des Annahmenmodells
- keine größere Refaktorierung

## Quality-Gate-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Entscheidung
**Phase 7.2.3 freigegeben.**

## Anschlusslogik für Phase 7.2.4
- Auf Basis der bestätigten Anzeige-Komponente gezielte, kleine Bearbeitungsschritte ergänzen (Add/Update/Remove) ohne Persistenz.
- Vor Einführung neuer UI-Elemente klare UX-Entscheidung treffen, ob `AssumptionDraftForm` als Formularname beibehalten oder präzisiert wird.
- Testabdeckung parallel erweitern: Interaktionsfälle, Feldvalidierung und Statusmeldungen pro Aktion.
