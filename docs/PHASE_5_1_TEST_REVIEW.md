# Phase 5.1 Review · Testfundament prüfen

## 1. Zweck des Reviews

Dieses Review prüft das in Phase 5.1 eingeführte minimale Testfundament.

Ziel von Phase 5.1 war nicht, eine vollständige Teststrategie umzusetzen. Ziel war, den bestehenden Draft-State-Kern technisch abzusichern, bevor neue Funktionen wie Speicherung, weitere Felder oder weitere Entitäten ergänzt werden.

## 2. Ausgangspunkt

Phase 4 hat eine kontrollierte lokale Szenario-Bearbeitung aufgebaut.

Vorhanden sind:

- lokaler Szenario-Draft im Arbeitsspeicher
- Reset auf Originalzustand
- Bearbeitung von drei Grundfeldern:
  - `name`
  - `description`
  - `goal`
- minimale lokale Validierung
- getrennte State-Utilities
- visuell getrennter Bearbeitungs- und Vorschau-Bereich

Bewusst noch nicht vorhanden:

- Speicherung
- LocalStorage
- Simulation
- OpenAI-Anbindung
- weitere Fachmodule
- Bearbeitung von Personas, Ressourcen oder Interventionen

## 3. Umgesetztes Testfundament

In Phase 5.1 wurde ein minimales Testfundament eingeführt.

Verwendet wird:

- nativer Node-Test-Runner
- `node:test`
- `node:assert/strict`
- `npm test` führt `node --test` aus

Getestet werden ausschließlich Draft-State-Utilities:

- `createDraftFromScenario`
- `resetDraft`
- `updateScenarioDraftField`
- `validateScenarioDraftBasics`

## 4. Geprüfte Testfälle

Die Tests decken folgende Fälle ab:

### createDraftFromScenario

- erzeugt eine Arbeitskopie aus einem Szenario
- gibt bei `null` ebenfalls `null` zurück
- erzeugt keine bloße Referenz auf das Original
- schützt verschachtelte Daten durch Kopie

### resetDraft

- erzeugt erneut eine Arbeitskopie aus dem Original
- stellt den ursprünglichen Zustand wieder her
- gibt keine Referenz auf das Original zurück

### updateScenarioDraftField

- verändert nur das angegebene Feld
- erhält andere Felder unverändert
- gibt bei fehlendem Draft `null` zurück

### validateScenarioDraftBasics

- meldet leere Pflichtfelder
- akzeptiert gefüllte Pflichtfelder
- prüft aktuell nur:
  - `name`
  - `description`
  - `goal`

## 5. Bewertung

Das Testfundament erfüllt den Zweck von Phase 5.1.

Positiv:

- Die wichtigsten Draft-State-Utilities sind abgesichert.
- Das Test-Setup bleibt bewusst schlank.
- Es wurden keine zusätzlichen Test-Abhängigkeiten eingeführt.
- Die Tests betreffen reine Funktionen und sind dadurch stabil.
- Der nächste Entwicklungsschritt kann mit geringerem Regressionsrisiko erfolgen.

Begrenzt bleibt:

- keine React-Komponententests
- keine Integrationstests
- keine UI-Tests
- keine Tests für CSS oder Layout
- keine Tests für zukünftige Speicherung
- keine Tests für zukünftige Simulation
- keine Tests für OpenAI-Anbindung

## 6. Risiken

### Risiko 1 · Tests bleiben zu schmal

Die aktuellen Tests sichern nur die Draft-State-Utilities ab. Das ist für Phase 5.1 korrekt, reicht aber langfristig nicht aus.

### Risiko 2 · Neue Funktionen ohne Testausbau

Wenn Speicherung, weitere Felder oder weitere Entitäten ergänzt werden, müssen passende Tests mitwachsen.

### Risiko 3 · HomePage bleibt ungetestet

Die Orchestrierung in `HomePage` ist weiterhin nicht getestet. Das ist aktuell akzeptabel, sollte aber bei weiterer UI-Komplexität neu bewertet werden.

### Risiko 4 · Keine CI-Prüfung

`npm test` existiert, wird aber noch nicht automatisch in einer Pipeline ausgeführt.

## 7. Empfehlung

Das Testfundament sollte als abgeschlossen gelten.

Empfohlene nächste Wege:

### Option A · Weitere Utility-Tests ergänzen

Sinnvoll, wenn neue reine Funktionen entstehen.

### Option B · Erste CI-/Build-Prüfung vorbereiten

Sinnvoll, wenn jeder Commit künftig automatisch prüfen soll:

- `npm test`
- `npm run build`

### Option C · Speicherung konzeptionell vorbereiten

Erst sinnvoll, wenn klar ist:

- Was ist Draft?
- Was ist gespeicherter Zustand?
- Was ist Original?
- Was macht Reset nach Speicherung?

### Option D · UI-Orchestrierung entlasten

Sinnvoll, bevor `HomePage` weiter wächst.

## 8. Empfehlung für den nächsten Schritt

Empfohlener nächster Schritt:

Phase 5.2 · Build- und Testbefehle als Qualitätsgrenze dokumentieren

Begründung:

Bevor neue Fachlogik entsteht, sollte festgelegt werden, dass jeder weitere Schritt mindestens diese Befehle bestehen muss:

- `npm test`
- `npm run build`

Damit wird das Projekt weiter gegen den alten Vibe-Coding-Fehler abgesichert.

## 9. Review-Ergebnis

Phase 5.1 gilt als abgeschlossen.

Der aktuelle Stand ist:

- minimales Testfundament vorhanden
- Draft-State-Utilities getestet
- keine neue Fachlogik eingeführt
- keine UI verändert
- keine Speicherung eingeführt
- keine neuen Module ergänzt

Die nächste Phase soll die Qualitätsgrenze für weitere Entwicklungsschritte festlegen.
