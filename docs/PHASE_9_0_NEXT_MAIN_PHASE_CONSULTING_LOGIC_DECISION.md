# Phase 9.0 · Nächste Hauptphase Beratungslogik festlegen

## 1. Ziel der Phase
Festlegung der nächsten Hauptphase nach Abschluss von Phase 8.

Phase 9 soll die Beratungslogik und Entscheidungsqualität der App ausbauen. Phase 9.0 entscheidet nur die fachliche Richtung und bereitet keine Implementierung vor.

## 2. Ausgangspunkt
- Phase 8 ist abgeschlossen.
- Persistenz ist bewusst begrenzt.
- JSON-Datei-Workflow bleibt Standard.
- NoPersistence-/Guard-/Status-Grundlage ist etabliert.
- Es gibt weiterhin keine echte Speicherung.
- Phase 9 soll nicht mit technischer Speicherung fortfahren.
- Der nächste fachliche Wert liegt in Beratungslogik, Vergleichbarkeit, Entscheidungsqualität und anschlussfähigen Ergebnissen.

## 3. Leitfrage
Welche nächste Hauptphase erhöht den fachlichen Beratungsnutzen der App am stärksten, ohne jetzt neue technische Infrastruktur oder echte Persistenz einzuführen?

## 4. Bewertungsmaßstab
Bewerte mögliche Richtungen anhand dieser Kriterien:

- Beratungsnutzen für reale Organisationsfragen
- Anschluss an vorhandene Szenariodaten
- Umsetzbarkeit in kleinen Phasen
- Risiko von Scope Creep
- Nähe zu bestehender UI/Logik
- Nutzen ohne echte Speicherung
- Testbarkeit
- Dokumentierbarkeit
- späterer Ausbauwert

## 5. Kandidat A: Vergleichs- und Entscheidungslogik

Ziel:
- Szenarien besser vergleichbar machen.
- Zielkonflikte sichtbar machen.
- Entscheidungsgründe strukturieren.
- Beratungstauglichkeit erhöhen.

Mögliche spätere Inhalte:
- Zielkonfliktanalyse
- Vergleich von Szenarien anhand fachlicher Kriterien
- „Was gewinnt man?“ / „Was verliert man?“
- entscheidende Annahmen
- gemeinsame Interventionen
- kritische Differenzen
- Entscheidungsnotiz

Vorteile:
- hoher unmittelbarer Beratungsnutzen
- nah an bestehender Szenario-/Vergleichsidee
- gut konzeptionell zuschneidbar
- keine echte Speicherung nötig

Risiken:
- Gefahr vorschneller Scoring-Logik
- Gefahr scheinobjektiver Bewertung
- klare Trennung zwischen Analyse und Empfehlung nötig
- keine automatische Entscheidung

Bewertung:
- fachlich sehr stark
- als erste Phase 9 geeignet

## 6. Kandidat B: Report- und Beratungsdokumentlogik

Ziel:
- Aus Szenariodaten bessere Beratungsberichte ableiten.
- Management-Briefing und Arbeitsreport unterscheiden.
- spätere Exportfähigkeit vorbereiten.

Mögliche spätere Inhalte:
- Arbeitsreport
- Management-Briefing
- Executive Summary
- Maßnahmen-/Entscheidungsvorlage
- offene Fragen
- Risiken und Grenzen
- Trennung von Beobachtung, Annahme, Hypothese und Empfehlung

Vorteile:
- hoher Nutzwert für Kommunikation
- gute Anschlussfähigkeit an Beratungsprozesse
- später gut exportierbar

Risiken:
- Reportlogik kann schnell groß werden
- Gefahr von Textproduktion ohne stabile Entscheidungslogik
- Exportfragen könnten zu früh wieder technische Folgefragen öffnen

Bewertung:
- wichtig, aber besser nach Stärkung der Vergleichs-/Entscheidungslogik

## 7. Kandidat C: Phasen- und Beziehungslogik

Ziel:
- Organisationsdynamik stärker abbilden.
- Phasenverlauf, Beziehungen, Kipppunkte und Interventionen perspektivisch verbinden.

Mögliche spätere Inhalte:
- Phasenverlauf
- Beziehungsmatrix
- Einfluss/Vertrauen/Spannung
- Kipppunkte
- Brückenrollen
- Koalitionen
- Interventionswirkungen über Phasen

Vorteile:
- stärkster Schritt Richtung echter Organisationssimulation
- fachlich sehr attraktiv
- hoher Modellierungswert

Risiken:
- deutlich größerer Scope
- Modelllogik komplex
- Gefahr, zu früh Simulation zu versprechen
- braucht saubere Konzeptkette vor Code

Bewertung:
- strategisch sehr wichtig
- aber als unmittelbarer nächster Schritt riskanter als Vergleichs-/Entscheidungslogik

## 8. Entscheidung

Entscheidung:
**Phase 9 startet mit Vergleichs- und Entscheidungslogik.**

Begründung:
- höchster unmittelbarer Beratungsnutzen
- gute Anschlussfähigkeit an vorhandene Szenariodaten
- kleiner zuschneidbar als Report- oder Phasen-/Beziehungslogik
- stärkt die Entscheidungsebene, bevor Report oder Simulation ausgebaut werden
- vermeidet vorschnellen Ausbau in technische Persistenz oder komplexe Simulation
- hält die App im Kern als Beratungs- und Strukturierungsinstrument stabil

## 9. Zielbild für Phase 9
Phase 9 soll nicht automatisch entscheiden, sondern Entscheidungsvorbereitung verbessern.

Leitprinzip:
Die App soll keine Entscheidung ersetzen, sondern Entscheidungsqualität erhöhen.

Phase 9 soll helfen:
- Unterschiede zwischen Szenarien sichtbar zu machen
- Zielkonflikte zu benennen
- Annahmen zu markieren
- Risiken zu ordnen
- offene Fragen herauszuarbeiten
- Beratungsnotizen vorzubereiten
- spätere Reports fundierter zu machen

## 10. Grenzen von Phase 9
Phase 9 führt zunächst nicht ein:
- automatische Entscheidung
- finales Scoring
- KI-generierte Empfehlung
- echte Simulation
- Report-Export
- Speicherung
- Backend
- OpenAI-Anbindung
- neue UI als erster Schritt
- Management-Report als fertiges Produkt

## 11. Empfohlener nächster Schritt
Nächster Schritt:
**Phase 9.1 · Vergleichs- und Entscheidungslogik konzeptionell vorbereiten**

Ziel:
- definieren, welche Vergleichsfragen fachlich sinnvoll sind
- Zielkonflikte als Kernlogik beschreiben
- Beratungsnutzen abgrenzen
- Negativ-Liste festhalten
- noch keine Implementierung
- noch keine UI
- noch keine Scoring-Automatik

## 12. Mögliche spätere Phase-9-Kette
Nur grob, nicht vollständig ausplanen:

- Phase 9.1: Vergleichs- und Entscheidungslogik konzeptionell vorbereiten
- Phase 9.2: Review der Vergleichs- und Entscheidungslogik
- Phase 9.3: kleinsten Implementierungsschnitt für Entscheidungsnotizen oder Vergleichsfragen vorbereiten
- Phase 9.4: Review
- Danach entscheiden:
  - minimale Vergleichslogik implementieren
  - oder Reportlogik konzeptionell vorbereiten
  - oder Phasen-/Beziehungslogik als nächste Unterlinie vorbereiten

## 13. Offene Punkte
Offen bleibt:
- welche Vergleichskriterien konkret genutzt werden
- ob A/B oder mehrere Szenarien verglichen werden
- ob bestehende Daten reichen oder neue Felder nötig wären
- ob Vergleich nur dokumentarisch oder später UI-seitig sichtbar wird
- wie Scoring vermieden oder begrenzt wird
- wie Empfehlungen sprachlich von Entscheidungen getrennt werden
- wie spätere Reportlogik anschließt

## 14. Negativ-Liste
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Utility
- keine neue Komponente
- keine neue Fachlogik
- keine Änderung an bestehenden Formularen
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine API
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine HomePage-Anbindung
- keine OpenAI-Anbindung
- keine Simulation
- keine Report-Implementierung
- keine Vergleichs-Implementierung
- keine Phasen-/Beziehungs-Implementierung
- keine Strategie-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 15. Quality-Gate-Hinweis
Da reine Konzeptphase:
- `npm test` und `npm run build` sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
