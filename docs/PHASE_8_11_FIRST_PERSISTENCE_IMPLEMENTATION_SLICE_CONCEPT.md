# Phase 8.11 · Erste Persistenz-Implementierungsvorbereitung konzeptionell zuschneiden

## 1. Ziel der Phase
Konzeptioneller Zuschnitt des ersten später möglichen Implementierungsschritts im Persistenzbereich.

Die Phase entscheidet nicht über eine Speichertechnologie und implementiert nichts. Sie legt nur fest, welcher erste Umsetzungsschnitt später sicher wäre, ohne echte Speicherung einzuführen.

## 2. Ausgangspunkt
Phase 8.10 hat die Persistenz-Modulstruktur geprüft und freigegeben. Die spätere Persistenz-Modulstruktur ist konzeptionell vorbereitet.

- Es existiert weiterhin kein Ordner `src/features/scenarios/persistence/`.
- Es gibt weiterhin keine App-Speicherung.
- Es gibt weiterhin kein LocalStorage, SessionStorage, IndexedDB, Backend, API, Authentifizierung oder Accounts.
- JSON-Download bleibt bewusster Datei-Workflow.
- JSON-Import bleibt bewusster Wiederaufnahmeweg.
- Der erste Implementierungsschritt muss daher eine sichere Nicht-Speicherungs-Grenze sein.

## 3. Leitfrage
Was ist der kleinste sinnvolle spätere Implementierungsschritt, der Persistenzarchitektur vorbereitet, ohne tatsächlich Speicherung einzuführen?

## 4. Entscheidung
Der erste spätere Implementierungsschnitt soll sein:

**NoPersistence-/Guard-/Status-Grundlage ohne echte Speicherung**

Dieser Schnitt darf später nur vorbereiten:
- einen Persistenzbereich als Modulrahmen
- einen sicheren NoPersistence-/Noop-Adapter
- Guard-Funktionen gegen verdeckte Speicherung
- technische Statuswerte für „Speicherung nicht aktiv“
- Statusmeldungen, die klar sagen: Es wird nicht gespeichert
- Tests, die Nicht-Speicherung absichern

Dieser Schnitt darf nicht:
- Szenarien speichern
- Browser-Speicher nutzen
- LocalStorage nutzen
- SessionStorage nutzen
- IndexedDB nutzen
- Backend/API nutzen
- UI zur Speicheraktivierung einführen
- Auto-Save vorbereiten
- Import/Export verändern
- HomePage funktional anbinden

## 5. Warum zuerst NoPersistence?
- Es ist der sicherste erste Schritt.
- Er macht Persistenzgrenzen testbar, bevor echte Speicherung existiert.
- Er schützt Draft-Utilities, Import und Export vor versehentlicher Speicherlogik.
- Er verhindert, dass LocalStorage als schnelle Lösung heimlich zur Architektur wird.
- Er schafft ein klares Fundament für spätere Technologieentscheidungen.
- Er erhält den JSON-Datei-Workflow als Standard.

## 6. Vorgeschlagener späterer Minimalumfang

Nur konzeptionell, keine Dateien anlegen:

```text
src/features/scenarios/persistence/
  README.md
  index.js
  adapter/
    noPersistenceAdapter.js
  orchestration/
    persistenceGuards.js
  status/
    persistenceStatus.js
    persistenceStatusMessages.js
  __tests__/
    noPersistenceAdapter.test.js
    persistenceGuards.test.js
    persistenceStatusMessages.test.js
```
