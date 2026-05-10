# Phase 5.16 Review · UI-Hinweise

## Zweck des Reviews
Dieses Review prüft die in Phase 5.16 neutralisierten UI-Hinweise mit Fokus auf Verständlichkeit, fachliche Abgrenzung und Einhaltung der Architekturgrenzen. Insbesondere wird bewertet, ob der Hero-Hinweis nicht mehr einen historischen Entwicklungsstand referenziert, sondern den aktuellen Nutzungsmodus korrekt und nutzerorientiert beschreibt.

## Geprüfter Umfang
- Sichtbare Hinweistexte in der Home-Ansicht
- Konsistenz zwischen Hero-Hinweis und Workspace-Hinweisen
- Abgrenzung Download vs. App-Speicherung
- Architekturgrenze: keine neue Fachlogik, keine Speicher-/Importerweiterung
- Kleinere Formatierungsbereinigungen in `HomePage.jsx`

Nicht Teil des Umfangs:
- Neue Feature-Entwicklung
- UI-Umbau
- Erweiterung von Export-, Download- oder Statuslogik

## Geprüfte Dateien
- `src/pages/HomePage.jsx`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Hero-Hinweis
Die Neutralisierung der Hero-Phase-Note ist grundsätzlich passend umgesetzt. Der sichtbare Hinweis beschreibt nun den aktuellen Nutzungsmodus der App und vermeidet eine veraltete technische Phasenangabe.

Positiv:
- Die alte Phase-4.8-Note wurde entfernt.
- Der neue Hinweis ist nutzerorientiert formuliert.
- Der lokale Draft wird explizit benannt.
- Bearbeitung, Vorschau und JSON-Download werden konkret genannt.
- „ohne App-Speicherung“ grenzt Download klar von interner Speicherung ab.
- Es wurde keine neue Fachlogik ergänzt.
- Es wurde keine Exportlogik geändert.
- Es wurde keine Downloadlogik geändert.
- Es wurde keine Speicherung ergänzt.
- Es wurde kein LocalStorage ergänzt.
- Es wurde kein JSON-Import ergänzt.
- Es wurde keine Simulation ergänzt.
- Es wurde keine OpenAI-Anbindung ergänzt.
- Es wurden keine neuen Fachmodule ergänzt.

Zusatzbefund zur Formatierung:
- Die kleine Bereinigung rund um Leerzeile/Einrückung ist konsistent und unauffällig umgesetzt.

## Prüfergebnis UI-Verständlichkeit
Der neue Hero-Hinweis ist für Nutzende verständlicher als die frühere technische Phasenangabe.

Bewertung:
- Kurzform im Hero-Bereich ist weiterhin angemessen.
- Der Text ist überwiegend nicht-technisch und auf Nutzung ausgerichtet.
- „App-Speicherung“ ist fachlich korrekt und in Kombination mit Workspace-Hinweisen verständlich.
- Der Hinweis ergänzt sinnvoll den Bearbeitungshinweis „Lokaler Draft (nicht gespeichert)“.
- Die Abgrenzung Download ≠ Speicherung wird unterstützt.

## Prüfergebnis Architekturgrenze
Die Änderung bleibt auf sichtbare Hinweise und kleine Formatierung begrenzt.

Bestätigung:
- `HomePage` bleibt UI-Orchestrierung ohne neue Fachlogik.
- Export-Utilities bleiben unverändert.
- Download-Utility bleibt unverändert.
- Statusmeldungs-Utility bleibt unverändert.
- Keine Speicherung, kein LocalStorage, kein JSON-Import, keine Backend-Speicherung.

## Nicht enthalten / weiterhin ausgeschlossen
- Keine Speicherung
- Kein LocalStorage
- Kein JSON-Import
- Keine Backend-Speicherung
- Keine Simulation
- Keine OpenAI-Anbindung
- Keine neuen Fachmodule
- Keine neue Fachlogik

## Risiken und Hinweise
- „App-Speicherung“ ist fachlich korrekt, könnte für manche Nutzende später noch einfacher erklärt werden, z. B. durch zusätzlichen Hilfetext oder Tooltip.
- Die Hero-Zeile nennt jetzt mehrere Funktionen; bei weiterem Ausbau sollte geprüft werden, ob sie dauerhaft als kurzer Modus-Hinweis geeignet bleibt.
- Wenn später JSON-Import oder echte Speicherung ergänzt werden, muss der Hinweis erneut angepasst werden.

## Empfehlung für nächste Phase
**Phase 5.17 · UI-Zugänglichkeit der Download-Statusmeldung prüfen und ggf. verbessern**

Begründung:
Nach Hero-Hinweis und Download-UI ist der nächste kleine Qualitätsschritt die Statusmeldung. In Phase 5.15 Review wurde bereits notiert, dass zusätzlich zu `aria-live` später `role="status"` geprüft werden kann.

Weiterhin nicht Teil der nächsten Phase:
- keine Speicherung
- kein JSON-Import
- kein LocalStorage
- keine neue Fachlogik
