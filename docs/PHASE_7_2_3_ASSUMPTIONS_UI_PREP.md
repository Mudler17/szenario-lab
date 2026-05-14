# Phase 7.2.3 · Annahmen-UI minimal vorbereiten

## Ziel der Phase
Annahmen im bestehenden lokalen Draft-/Editing-Bereich minimal sichtbar machen, ohne vollständige Bearbeitungslogik, Speicherung oder neue Architektur einzuführen.

## Ausgangspunkt aus Phase 7.2.2 Review
Die Review aus 7.2.2 bestätigt robuste Draft-Utilities (`getDraftAssumptions`, Add/Update/Remove) und gefilterte Annahmenlisten ohne `{}`-Phantomobjekte als Grundlage für eine kleine UI-Anbindung.

## Umgesetzte minimale UI-Vorbereitung
- Die bisherige Platzhalter-Komponente `AssumptionDraftForm` wurde zu einer kleinen reinen Anzeige-Komponente ausgebaut.
- Die Komponente liest Annahmen über `getDraftAssumptions(scenarioDraft)` aus dem bestehenden Draft-State.
- Annahmen werden als Liste (`ul > li > article`) dargestellt.
- Angezeigt werden ausschließlich die vorgesehenen Felder:
  - `title`
  - `content`
  - `scope`
  - `confidence`
  - `rationale`
- Ein minimaler Hinweis als Platzhalter für die nächste Phase wurde ergänzt („Bearbeitung wird in Phase 7.2.4 vorbereitet.“).
- Die Komponente wurde im bestehenden Bearbeitungsbereich (`HomePage`) direkt unterhalb der Grunddaten eingebunden.

## Umgang mit leerem Zustand
Wenn keine Annahmen im Draft vorhanden sind, zeigt die Komponente den klaren Empty-State-Text:

„Noch keine Annahmen im Szenario-Draft vorhanden.“

## Umgang mit unvollständigen Annahmen
Eine Annahme wird als inhaltlich unvollständig markiert, wenn `title` oder `content` leer bzw. nur Whitespace ist.

Sichtbarer Hinweis je Eintrag:

„Unvollständige Annahme“

## a11y-Hinweise
- Sinnvolle Abschnittsüberschrift (`h3`): „Annahmen“.
- Lesbare Listenstruktur für mehrere Annahmen (`ul`/`li`/`article`).
- Statushinweis nicht nur farblich, sondern explizit textlich („Unvollständige Annahme“).
- Verständlicher, expliziter Empty State.

## Bewusste Grenzen
Die Phase bleibt bewusst klein und vorbereitet nur die Sichtbarkeit in der Draft-UI.

## Negativ-Liste: Was diese Phase NICHT tut
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- kein vollständiges Annahmenformular
- keine neue globale State-Architektur
- keine fachliche Erweiterung des Annahmenmodells
- keine größere Refaktorierung

## Test-/Build-Ergebnis
- `npm test`: erfolgreich
- `npm run build`: erfolgreich

## Anschlusslogik für Phase 7.2.4
- Aufbau einer minimalen, kontrollierten Bearbeitungslogik für Annahmen innerhalb des bestehenden Draft-Patterns.
- Nutzung der bereits vorhandenen Utilities (`addDraftAssumption`, `updateDraftAssumption`, `removeDraftAssumption`) nur mit klarer UI-Anbindung und ohne Persistenz.
- Ergänzung gezielter Eingabeführung/Validierung für Annahmenfelder im bestehenden Bearbeitungsbereich.
