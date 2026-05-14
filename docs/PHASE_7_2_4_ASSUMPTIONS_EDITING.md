# Phase 7.2.4 · Annahmen-Bearbeitung minimal umsetzen

## Ziel der Phase
Annahmen im bestehenden lokalen Draft minimal bearbeitbar machen (anzeigen, hinzufügen, ändern, entfernen) – ohne Speicherung und ohne neue Architektur.

## Ausgangspunkt aus Phase 7.2.3 Review
Phase 7.2.3 Review hat eine stabile Anzeige-Basis bestätigt: Annahmen sind sichtbar, Empty State ist klar, unvollständige Annahmen werden textlich markiert.

## Tempo-Entscheidung
Diese Phase ist eine Umsetzungsphase. Daher wurde direkt die minimale Bearbeitungsfunktion ergänzt statt weitere Vorbereitung zu erstellen.

## Umgesetzte minimale Bearbeitung
- Vorhandene Annahmen werden als einfache Formularfelder gerendert.
- Neue Annahmen können über „Annahme hinzufügen“ ergänzt werden.
- Pro Annahme gibt es „Annahme entfernen“.
- Änderungen laufen ausschließlich im lokalen React-Draft-State.
- Sichtbarer Hinweis: „Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.“

## Verwendete Draft-Utilities
- `getDraftAssumptions`
- `addDraftAssumption`
- `updateDraftAssumption`
- `removeDraftAssumption`

## Entscheidung zur Namensfrage `AssumptionDraftForm`
Der Name `AssumptionDraftForm` wurde beibehalten, da die Komponente nun tatsächlich Formularfunktion hat.

## Umgang mit neuen Annahmen
Neue Annahmen werden lokal erzeugt mit einer einfachen ID nach Muster `assumption-${Date.now()}` und Defaultfeldern im Draft ergänzt.

## Umgang mit unvollständigen Annahmen
Eine Annahme bleibt als „Unvollständige Annahme“ markiert, wenn `title` oder `content` leer bzw. nur Whitespace ist.

## a11y-Hinweise
- Alle Eingabefelder haben klare Labels.
- Buttons sind sprechend beschriftet.
- Unvollständigkeit wird textlich ausgegeben.

## Testgrenzen
Der aktuelle Teststil mit `renderToStaticMarkup` prüft Struktur/Rendering gut, aber keine browsernahe Interaktion. Es wurde bewusst keine neue Testbibliothek eingeführt.

## Bewusste Grenzen
Nur minimale lokale Bearbeitung von Annahmen im bestehenden Draft-Pattern.

## Negativ-Liste
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine neuen fachlichen Felder
- keine Änderung am Annahmenmodell
- keine neue globale State-Architektur
- keine komplexe Validierungsengine
- keine neue Dependency
- keine KI-generierten Annahmen
- keine Verknüpfung mit Evidenz, Personas, Ressourcen, Interventionen oder Phasen

## Test-/Build-Ergebnis
- `npm test`: erfolgreich
- `npm run build`: erfolgreich

## Anschlusslogik für Phase 7.2.4 Review
Review prüft, ob die minimale Bearbeitung vollständig lokal bleibt, ob die Negativ-Liste eingehalten wurde und ob die Tests die Strukturgrenzen angemessen absichern.
