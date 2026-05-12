# Phase 7.1 Review · Auswahl des nächsten editierbaren Szenariofelds prüfen

## Ergebnis

**Phase 7.1 Review fachlich bestanden (ohne Blocker).**

Die Auswahlentscheidung für das nächste editierbare Szenariofeld ist fachlich konsistent dokumentiert, nachvollziehbar begründet und klar von Implementierung abgegrenzt.

## Prüfgegenstand

- `docs/PHASE_7_1_NEXT_EDITABLE_FIELD_SELECTION.md`
- `README.md`
- `ROADMAP.md`

## Prüfpunkte und Bewertung

## 1) Ausgangslage nach Phase 7.0

**Bewertung: erfüllt**

Die Ausgangslage ist korrekt beschrieben:

- Phase 6.12 als abgeschlossene fachliche Prüfung der lokalen JSON-Import-/Export-Kette.
- Phase 7.0 als Richtungsentscheidung auf breiter editierbares Szenariomodell.
- Aktuell editierbar: nur `name`, `description`, `goal`.
- Für Phase 7.1 explizit keine Implementierung.

## 2) Kandidaten vollständig genug geprüft

**Bewertung: erfüllt**

Alle geforderten Kandidaten sind enthalten und vergleichend bewertet:

- Annahmen
- Evidenz
- Personas
- Ressourcen
- Beziehungen
- Interventionen
- Phasen

## 3) Bewertungskriterien sinnvoll

**Bewertung: erfüllt**

Die verwendeten Kriterien sind fachlich passend und decken Nutzen, Machbarkeit, Risiko und Anschlussfähigkeit gut ab:

- fachlicher Nutzen
- Anschlussfähigkeit
- Komplexität
- Risiko für Übersteuerung
- Testbarkeit
- JSON-Rundlauf
- Nutzen für spätere Simulation
- Empfehlung

## 4) Entscheidung für Annahmen fachlich plausibel

**Bewertung: erfüllt**

Die Entscheidung ist plausibel und konsistent begründet:

- Annahmen sind zentral für Szenarioarbeit.
- Gute Brücke zwischen Ziel/Beschreibung und späterer Simulation.
- Listenartige Struktur erlaubt schrittweise Erweiterung.
- Geringere Komplexität als Personas/Beziehungen/Interventionen.
- Gute Testbarkeit und gute Eignung für Import/Export-Rundlauf.

## 5) Alternativen ausreichend abgegrenzt

**Bewertung: erfüllt**

Die Nachrangigkeit der Alternativen ist fachlich nachvollziehbar erläutert:

- Evidenz später wegen Bezug auf Annahmen.
- Personas später wegen struktureller Komplexität.
- Ressourcen später ohne Annahmen-/Akteurskontext weniger wirksam.
- Beziehungen später wegen Abhängigkeit von Personas.
- Interventionen später nach stabilerer Ausgangslage.
- Phasen später bei mehr inhaltlicher Dichte sinnvoller.

## 6) Konsequenz für Phase 7.2 korrekt

**Bewertung: erfüllt**

Die Folgephase ist konsistent abgeleitet:

- **Phase 7.2 · Annahmen als ersten zusätzlichen editierbaren Bereich konzeptionell vorbereiten.**

## 7) Keine Implementierung ergänzt

**Bewertung: erfüllt**

Im Rahmen von Phase 7.1 bleibt die Abgrenzung zur Implementierung klar dokumentiert:

- keine neuen Formularfelder
- keine Änderung an `HomePage.jsx`
- keine Änderung an `ScenarioDraftForm`
- keine Änderung an `ScenarioPreview`
- keine Draft-State-Änderung
- keine JSON-Schema-Änderung
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-/Server-Anbindung

## Gesamtfazit

Die Phase-7.1-Unterlage ist inhaltlich konsistent, methodisch ausreichend und für die nächste Konzeptphase belastbar.

**Freigabeempfehlung:**

- Phase 7.1 als fachlich geprüft markieren.
- In Phase 7.2 die konzeptionelle Vorbereitung des Annahmen-Bereichs fortsetzen (weiterhin ohne Implementierung).
