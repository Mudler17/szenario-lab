# Phase 9.7 · Entscheidungsnotiz-Utility minimal implementieren

## 1. Ziel
Minimale Implementierung der in Phase 9.5 präzisierten und in Phase 9.6 geprüften Utility-Grundlage für eine Entscheidungsnotiz.

## 2. Umsetzung
Neu angelegt wurde ausschließlich der Consulting-Modulbereich für die Entscheidungsnotiz:

```text
src/features/scenarios/consulting/
  README.md
  decisionNote/
    README.md
    index.js
    createDecisionNoteDraft.js
    createDecisionNoteDraft.test.js
```

Implementiert wurde die reine Utility:
- `createDecisionNoteDraft(scenarioDraft, options = {})`

## 3. Ergebnisverhalten
Die Utility liefert stabil ein Objekt mit den Pflichtfeldern:
- `decisionPoint`
- `options`
- `centralDifferences`
- `targetConflicts`
- `criticalAssumptions`
- `openQuestions`
- `nextClarificationStep`
- `boundaries`

Kontraktgrenzen:
- defensive Fallbacks bei fehlenden Daten
- keine Mutation des Inputs
- keine Empfehlung, kein Score, keine Rangfolge, keine Entscheidungsautomatisierung

## 4. Tests
Ergänzt wurden Tests für:
- stabile Struktur und Typen
- Fallbacks bei fehlender Datenlage
- defensive Nutzung von Draft-Inhalten
- Immutability
- keine Score-/Ranking-/Recommendation-/Decision-Felder
- Negativtest auf verbotene Richtungssprache

## 5. Abgrenzung
Nicht umgesetzt:
- keine UI
- keine HomePage-Anbindung
- keine Formularänderung
- keine Speicherung
- kein LocalStorage/SessionStorage/IndexedDB
- kein Backend/API/fetch/axios/XMLHttpRequest
- keine OpenAI-/LLM-Anbindung
- keine Simulation
- keine Reportlogik
- keine Vergleichsautomatisierung
- kein Multi-Szenario-Vergleich
- keine automatische Empfehlung
- kein Scoring
- keine Rangfolge
- keine Entscheidungsautomatisierung
- keine Änderung an JSON-Export/JSON-Import/Persistenz
- keine Änderung an bestehenden Editing-Utilities
- keine neue Dependency

## 6. Quality Gate
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnis:
- beide Befehle bestanden.

## 7. Anschluss
Phase 9.7 ist als minimaler Implementierungsschnitt abgeschlossen.
