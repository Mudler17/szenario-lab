# Phase 7.2.3 Review · Annahmen-UI-Vorbereitung prüfen

## Review-Ziel
Prüfung, ob die in Phase 7.2.3 beschriebene minimale UI-Vorbereitung für Annahmen im lokalen Draft wie vorgesehen umgesetzt wurde – ohne neue Persistenz, ohne Architekturwechsel und ohne vorgezogene vollständige Bearbeitungslogik.

## Geprüfte Dateien
- `docs/PHASE_7_2_3_ASSUMPTIONS_UI_PREP.md`
- `src/features/scenarios/editing/components/AssumptionDraftForm.jsx`
- `src/pages/HomePage.jsx`

## Ergebnis zur UI-Einbindung
- `AssumptionDraftForm` ist im bestehenden Bearbeitungsbereich (`HomePage`) direkt unterhalb der Grunddaten eingebunden.
- Die Einbindung nutzt weiterhin das bestehende Draft-Pattern (`scenarioDraft` als Prop), ohne zusätzliche globale State-Struktur.

## Ergebnis zur Datenanbindung
- Die Komponente liest Annahmen ausschließlich über `getDraftAssumptions(scenarioDraft)` aus dem bestehenden Editing-State.
- Es wurde keine zusätzliche Datenquelle, kein Persistenzzugriff und keine indirekte Nebenlogik eingeführt.

## Ergebnis zur Darstellung der Annahmenliste
- Annahmen werden als semantische Liste (`ul > li > article`) gerendert.
- Sichtbar sind die vorgesehenen Felder:
  - `title` (als Überschrift je Eintrag)
  - `content`
  - `scope`
  - `confidence`
  - `rationale`
- Für leere oder nicht-string-Felder wird defensiv ein Platzhalter (`—`) gerendert, statt fehleranfälliger Rohwerte.

## Ergebnis zu Empty State und Unvollständigkeit
- Wenn keine Annahmen vorhanden sind, erscheint der erwartete Empty-State-Text:
  - „Noch keine Annahmen im Szenario-Draft vorhanden.“
- Einträge werden als „Unvollständige Annahme“ markiert, wenn `title` oder `content` leer bzw. nur Whitespace sind.
- Damit ist die Trennung zwischen „keine Annahmen vorhanden“ und „Annahme vorhanden, aber unvollständig“ klar umgesetzt.

## a11y-Bewertung
- Abschnittsüberschrift (`h3`) „Annahmen“ vorhanden.
- Listenstruktur ist für mehrere Einträge nachvollziehbar.
- Der Unvollständigkeitsstatus wird explizit textlich ausgegeben (nicht nur visuell/farblich).
- Der Empty State ist eindeutig und verständlich formuliert.

## Negativ-Liste: Was in 7.2.3 weiterhin NICHT gemacht wurde
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine vollständige Annahmen-Bearbeitungslogik
- keine neue globale State-Architektur
- keine fachliche Erweiterung des Annahmenmodells
- keine größere Refaktorierung

## Quality-Gate-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Entscheidung
**Phase 7.2.3 freigegeben.**

## Anschlusslogik für Phase 7.2.4
- Ergänzung einer minimalen, kontrollierten Bearbeitungslogik für Annahmen im bestehenden Draft-Pattern.
- Anbindung der vorhandenen Utilities (`addDraftAssumption`, `updateDraftAssumption`, `removeDraftAssumption`) an konkrete UI-Interaktionen.
- Gezielte Eingabevalidierung mit klaren Statushinweisen pro Feld/Eintrag, weiterhin ohne Persistenz.
