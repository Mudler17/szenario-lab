# Phase 9.3 · Kleinsten Implementierungsschnitt für Entscheidungsnotiz konzeptionell zuschneiden

## 1. Ziel der Phase
Konzeptioneller Zuschnitt des kleinsten später möglichen Implementierungsschnitts für eine Entscheidungsnotiz.

Diese Phase bereitet nur vor, was später minimal implementiert werden dürfte. Es wird keine Entscheidungsnotiz implementiert.

## 2. Ausgangspunkt
- Phase 9.1 hat Vergleichs- und Entscheidungslogik konzeptionell vorbereitet.
- Phase 9.2 hat das Konzept freigegeben mit Hinweisen.
- Entscheidungsnotiz wurde als kleinster, risikoärmerer erster Schnitt empfohlen.
- Vollständiger Szenariovergleich, Reportlogik, UI und Scoring bleiben ausgeschlossen.
- Die App soll keine Entscheidung treffen, sondern Entscheidungsqualität erhöhen.

## 3. Leitfrage
Was ist der kleinste spätere Implementierungsschnitt, der eine Entscheidungsnotiz vorbereitet, ohne Entscheidung, Empfehlung, Bewertung, Scoring oder Reportlogik zu automatisieren?

## 4. Entscheidung
Der erste spätere Implementierungsschnitt soll sein:

**reine Entscheidungsnotiz-Struktur als Utility-Grundlage**

Dieser Schnitt darf später nur:
- ein neutrales Entscheidungsnotiz-Skelett erzeugen
- vorhandene Szenariodaten defensiv lesen
- offene Fragen sammeln
- kritische Annahmen markieren
- Zielkonflikte als Platzhalter/Struktur aufnehmen
- Entscheidungsreife nur sprachlich vorsichtig rahmen
- keine Empfehlung ausgeben
- keine Option priorisieren
- keinen Score berechnen
- keinen Report erzeugen

## 5. Warum Entscheidungsnotiz zuerst?
- kleiner als vollständiger Szenariovergleich
- fachlich direkt beratungsnah
- gut testbar
- keine neue UI nötig
- keine Speicherung nötig
- keine Simulation nötig
- reduziert Risiko von Scheinobjektivität
- stärkt Trennung zwischen Analyse, Bewertung, Empfehlung und Entscheidung

## 6. Minimales späteres Artefakt: Entscheidungsnotiz

Eine spätere Entscheidungsnotiz soll maximal diese Struktur haben:

```text
decisionPoint
options
centralDifferences
targetConflicts
criticalAssumptions
openQuestions
nextClarificationStep
boundaries
```

Erläuterung der Struktur:
- `decisionPoint`: Welche konkrete Entscheidung vorbereitet wird.
- `options`: Welche Optionen in der Beratungssituation betrachtet werden.
- `centralDifferences`: Wodurch sich Optionen wesentlich unterscheiden.
- `targetConflicts`: Welche Zielkonflikte offen und nicht aufgelöst sind.
- `criticalAssumptions`: Welche Annahmen entscheidungsrelevant und unsicher sind.
- `openQuestions`: Welche Fragen vor einer belastbaren Entscheidung geklärt werden müssen.
- `nextClarificationStep`: Kleinster nächster Klärungsschritt ohne Vorentscheidung.
- `boundaries`: Explizite Grenze gegen Empfehlung, Priorisierung, Score und Entscheidungsautomatisierung.

## 7. Explizite Abgrenzung für den späteren Minimal-Schnitt
Ausgeschlossen bleiben für den ersten späteren Implementierungsschritt:
- UI-Anbindung
- Persistenz jeder Art
- Simulation
- Report-Logik
- Vergleichsautomatisierung über mehrere Szenarien
- Scoring, Ranking, Priorisierung
- Empfehlungstexte oder Entscheidungsvorschläge
- OpenAI-/LLM-Anbindung

## 8. Akzeptanzkriterien für den späteren Minimal-Schnitt (nur konzeptionell)
Ein späterer Minimal-Schnitt ist nur dann im Zielpfad, wenn:
- ausschließlich eine neutrale Struktur erzeugt wird,
- keine Entscheidungslogik automatisiert wird,
- keine Bewertungen errechnet werden,
- keine Empfehlung formuliert wird,
- keine neuen Datenfelder im Domänenschema erzwungen werden,
- keine Speicher- oder UI-Pfade mitgezogen werden.

## 9. Ergebnis der Phase 9.3
- Der kleinste spätere Implementierungsschnitt ist fachlich zugeschnitten.
- Der Schnitt bleibt bewusst unterhalb von Vergleichs-, Report- und Bewertungssystemen.
- Die Trennung zwischen menschlicher Entscheidung und technischer Vorbereitung bleibt gewahrt.
