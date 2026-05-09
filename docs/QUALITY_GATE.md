# Quality Gate · Build und Tests

## 1. Zweck

Dieses Dokument definiert die technische Qualitätsgrenze für die weitere Entwicklung von szenario-lab.

Nach Phase 5.1 existiert ein minimales Testfundament für die Draft-State-Utilities. Phase 5.2 legt nun fest, dass weitere technische Änderungen nicht nur implementiert, sondern auch prüfbar abgeschlossen werden müssen.

Ziel ist, den kontrollierten Neustart des Projekts abzusichern und Rückfälle in unkontrolliertes Vibe-Coding zu vermeiden.

## 2. Verbindliche Prüfungen

Ab Phase 5.2 müssen vor Abschluss eines technischen Entwicklungsschritts mindestens folgende Befehle erfolgreich laufen:

npm test
npm run build

## 3. Bedeutung der Befehle

npm test führt die vorhandenen Tests aus.

Aktuell nutzt das Projekt den nativen Node-Test-Runner:

node --test

Derzeit werden ausschließlich die Draft-State-Utilities getestet:

- createDraftFromScenario
- resetDraft
- updateScenarioDraftField
- validateScenarioDraftBasics

npm run build prüft, ob die Anwendung produktionsfähig gebaut werden kann.

Damit werden unter anderem Importfehler, Syntaxprobleme und Build-Probleme früh sichtbar.

## 4. Geltungsbereich

Diese Qualitätsgrenze gilt für alle weiteren technischen Änderungen, insbesondere für:

- neue Utility-Funktionen
- Refactorings
- Formularänderungen
- UI-Strukturänderungen
- spätere Speicherlogik
- spätere LocalStorage-Integration
- spätere zusätzliche Entitäten
- spätere Simulation
- spätere OpenAI-Anbindung

## 5. Nicht-Ziele

Phase 5.2 führt bewusst noch nicht ein:

- keine CI-Pipeline
- keine GitHub Actions
- keine neuen Tests
- keine React-Komponententests
- keine Integrationstests
- keine End-to-End-Tests
- keine neuen Features
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung

## 6. Arbeitsregel ab Phase 5.2

Jeder neue technische Arbeitsschritt soll künftig mit einer kurzen Prüfung abgeschlossen werden:

Prüfung:
- npm test: bestanden
- npm run build: bestanden

Wenn einer der Befehle fehlschlägt, gilt der Schritt nicht als abgeschlossen.

## 7. Umgang mit Ausnahmen

Falls ein Schritt bewusst noch nicht buildfähig oder testfähig ist, muss dies ausdrücklich dokumentiert werden.

Ausnahmen sollen selten bleiben und brauchen eine klare Begründung.

Beispiel:

Ausnahme:
npm run build schlägt fehl, weil [konkreter Grund].
Der Fehler wird nicht ignoriert, sondern als nächster Fix priorisiert.

## 8. Warum diese Grenze wichtig ist

Das Vorgängerprojekt ist unter anderem dadurch instabil geworden, dass viele Änderungen aufeinander aufbauten, ohne systematische technische Prüfung.

szenario-lab soll anders entwickelt werden:

- kleine Schritte
- klare Grenzen
- dokumentierte Entscheidungen
- prüfbare Änderungen
- keine verdeckten Reparaturschichten

Die Qualitätsgrenze ist deshalb keine Bürokratie, sondern ein Schutzmechanismus.

## 9. Aktueller Status

Aktueller Stand nach Phase 5.2:

- minimales Testfundament vorhanden
- Draft-State-Utilities werden getestet
- Build-Befehl vorhanden
- Test-Befehl vorhanden
- Qualitätsgrenze dokumentiert
- noch keine CI-Automatisierung

## 10. Nächste mögliche Schritte

Nach Phase 5.2 sind mehrere Richtungen möglich:

### Option A · CI vorbereiten

Automatische Prüfung von:

- npm test
- npm run build

### Option B · Weitere Utility-Tests ergänzen

Nur wenn neue reine Funktionen entstehen.

### Option C · UI-Orchestrierung entlasten

Erst nach erfolgreicher Qualitätsprüfung.

### Option D · Speicherung konzeptionell vorbereiten

Erst mit klarer Draft-/Original-/Speicherlogik.

## 11. Ergebnis

Phase 5.2 definiert die Qualitätsgrenze für die weitere Entwicklung.

Ab jetzt gilt:

npm test
npm run build

müssen für technische Entwicklungsschritte erfolgreich sein, bevor der jeweilige Schritt als abgeschlossen gilt.
