# Phase 8.3 · Speicherarchitektur für bewusst aktivierbaren Speicherpfad konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung einer Speicherarchitektur für einen später bewusst aktivierbaren Speicherpfad. Der JSON-Datei-Workflow bleibt der sichere Standard. Speicherung wird nur als optionale, explizit aktivierte Möglichkeit vorbereitet.

Diese Phase implementiert noch keine Speicherung.

## 2. Ausgangspunkt
- Phase 8.2 hat den Hybridpfad ausgewählt.
- JSON-Datei-Workflow bleibt Standard.
- Speicherung darf nicht automatisch oder verdeckt erfolgen.
- Aktuell gibt es nur lokalen React-Draft-State.
- JSON-Download ist der bewusste Sicherungsweg.
- JSON-Import-Prüfung ist der bewusste Wiederaufnahmeweg.
- Es gibt keine App-Speicherung.
- Es gibt kein LocalStorage, SessionStorage, IndexedDB, Backend, Datenbank, API, Authentifizierung oder Accounts.

## 3. Leitprinzipien der Speicherarchitektur
1. Datei-Workflow bleibt Standard.
2. Speicherung ist optional.
3. Speicherung ist bewusst aktivierbar.
4. Speicherung ist jederzeit erklärbar.
5. Speicherung ist deaktivierbar oder löschbar.
6. Keine automatische Speicherung ohne Nutzerentscheidung.
7. Keine verdeckte Browser-Speicherung.
8. Keine Vermischung mit JSON-Export/-Import.
9. Keine Vermischung mit Simulation, Report oder OpenAI-Anbindung.
10. Datenschutz und Datenminimierung vor Komfort.
11. Nutzerkontrolle vor technischer Bequemlichkeit.
12. Architektur vor Speichertechnologie.

## 4. Begriffsmodell

### Lokaler Draft
- aktueller bearbeitbarer Zustand im React-State
- nicht automatisch dauerhaft
- Grundlage für Vorschau, Download und ggf. spätere Speicheraktion

### Datei-Workflow
- JSON-Download als bewusste Sicherung
- JSON-Import-Prüfung als bewusste Wiederaufnahme
- bleibt Standardpfad

### Optionaler Speicherpfad
- später bewusst aktivierbare App-Speicherung
- noch keine konkrete Technologie
- darf nur nach Nutzerentscheidung greifen
- muss löschbar/deaktivierbar sein

### Gespeichertes Szenario
- späterer persistierter Zustand
- braucht Metadaten, Versions-/Zeitbezug und Herkunftshinweis
- darf nicht stillschweigend mit lokalem Draft verwechselt werden

## 5. Zielarchitektur als konzeptioneller Datenfluss
1. Start:
   - App lädt Beispiel-Szenario oder importiertes Szenario in lokalen Draft.
2. Bearbeitung:
   - Nutzer bearbeitet den lokalen Draft.
3. Sicherung Standard:
   - Nutzer nutzt JSON-Download.
4. Wiederaufnahme Standard:
   - Nutzer prüft JSON-Import und übernimmt bewusst in lokalen Draft.
5. Optionaler Speicherpfad:
   - Nutzer aktiviert Speicherung bewusst.
   - App erklärt, was gespeichert wird.
   - Nutzer bestätigt.
   - erst danach darf ein Speicheradapter genutzt werden.
6. Löschen/Deaktivieren:
   - Nutzer kann gespeicherte Daten löschen oder Speicherung deaktivieren.
7. Export bleibt möglich:
   - auch bei aktivierter Speicherung bleibt JSON-Download verfügbar.

Wichtig:
- Dieser Datenfluss ist konzeptionell.
- Keine konkrete Speichertechnologie festlegen.

## 6. Architekturschichten

### 6.1 Draft-State-Schicht
Aufgabe:
- lokaler Bearbeitungszustand
- bestehende Draft-Utilities bleiben Grundlage
- keine Persistenzlogik in Draft-Utilities

Regel:
- Draft-Utilities dürfen nicht heimlich speichern.

### 6.2 Datei-Workflow-Schicht
Aufgabe:
- Export-Draft erzeugen
- JSON herunterladen
- JSON prüfen
- geprüften Import bewusst übernehmen

Regel:
- Export/Import bleiben explizite Nutzeraktionen.
- Keine Speicherlogik in Export-/Import-Utilities einbauen.

### 6.3 Persistenz-Adapter-Schicht
Aufgabe:
- spätere technische Speicherform kapseln
- erst nach expliziter Aktivierung nutzbar
- klare Schnittstelle

Mögliche spätere Adapter:
- LocalBrowserPersistenceAdapter
- FileSystemAccessPersistenceAdapter
- BackendPersistenceAdapter

Wichtig:
- Diese Adapter werden jetzt nicht implementiert.
- LocalStorage wird nicht als Standard festgelegt.
- Backend wird nicht vorbereitet als Umsetzung, nur als mögliches späteres Zielbild.

### 6.4 Persistenz-Orchestrierung
Aufgabe:
- entscheidet später, ob Speicherpfad aktiv ist
- trennt Draft, Datei-Workflow und Speicherung
- verwaltet Status:
  - nicht aktiviert
  - aktiviert
  - gespeichert
  - Speicherfehler
  - gelöscht/deaktiviert

Wichtig:
- jetzt nur konzeptionell beschreiben
- keine State-Machine implementieren

### 6.5 Nutzerkommunikation / UI-Hinweise
Aufgabe:
- erklärt, ob gespeichert wird
- erklärt, wo gespeichert wird
- erklärt, wie gelöscht/deaktiviert wird
- trennt Download von App-Speicherung

Wichtig:
- keine UI jetzt implementieren

## 7. Mindestmetadaten für spätere Speicherung
Gespeicherte Szenarien sollten später mindestens Metadaten enthalten:
- persistenceVersion
- savedAt
- updatedAt
- storageMode
- source
- scenarioId
- scenarioName
- schemaVersion oder formatVersion
- userAcknowledgedStorageRisk: nur falls später fachlich sinnvoll
- optional: lastExportedAt
- optional: importedFrom

Wichtig:
- Metadaten jetzt nicht im Datenmodell implementieren.
- Kein Schema ändern.
- Nur Anforderungen dokumentieren.

## 8. Speicherstatus-Konzept
Konzeptionelle Statuswerte für spätere UI/Logik:
- storageNotEnabled
- storageAvailableButInactive
- storageEnabled
- saving
- saved
- saveFailed
- storageDisabled
- storageDeleted
- storageUnavailable

Bewertung:
- nützlich für spätere UI und Tests
- noch keine Runtime-Statuslogik

## 9. Kontrollpunkte vor Aktivierung
Eine spätere Speicherung darf erst nach sichtbaren Kontrollpunkten aktiv werden:
- Nutzer wird informiert, dass Speicherung App-intern ist.
- Nutzer wird informiert, ob Speicherung lokal oder serverseitig wäre.
- Nutzer bestätigt bewusst.
- Nutzer kann abbrechen.
- Nutzer erhält Hinweis zu sensiblen/personenbezogenen Daten.
- Nutzer kann Speicherung deaktivieren.
- Nutzer kann gespeicherte Daten löschen.
- JSON-Download bleibt verfügbar.

## 10. Datenschutz- und Datenminimierungsanforderungen
- Szenarien können personenbezogene Daten enthalten.
- Szenarien können vertrauliche Organisationsinformationen enthalten.
- Speicherung darf nicht verdeckt erfolgen.
- Speicherung muss minimiert werden.
- Löschbarkeit muss vorbereitet werden.
- Speicherort muss erklärbar sein.
- Bei Backendpfad wären Rollen/Rechte/Auth/Betrieb eigene Themen.
- Bei Browserpfad müssen geteilte Geräte berücksichtigt werden.
- Keine sensiblen Daten ohne Warnung dauerhaft speichern.

## 11. Verhältnis zu JSON-Export/-Import
- JSON-Download bleibt Standard.
- JSON-Import-Prüfung bleibt Standard für Wiederaufnahme.
- Speicherpfad ergänzt den Datei-Workflow nur optional.
- JSON darf nicht heimlich durch Speicherung ersetzt werden.
- Export bleibt wichtig für Portabilität, Review, Debugging, manuelle Versionierung.
- Import bleibt bewusst und geprüft.

## 12. Nicht-Entscheidungen dieser Phase
Diese Phase entscheidet ausdrücklich nicht:
- LocalStorage zu verwenden
- SessionStorage zu verwenden
- IndexedDB zu verwenden
- Backend zu verwenden
- Datenbank zu verwenden
- Authentifizierung einzuführen
- Accounts einzuführen
- API zu bauen
- Speicherung zu implementieren
- UI zu ändern
- JSON-Export/-Import zu ändern

## 13. Risiken
- Architektur kann zu früh als Implementierungsauftrag missverstanden werden.
- LocalStorage bleibt als schnelle Lösung verführerisch.
- Nutzer könnten optionalen Speicherpfad mit automatischer Speicherung verwechseln.
- Hybridpfad kann UX-komplex werden.
- Datenschutzanforderungen können unterschätzt werden.
- Spätere Adapter-Schnittstelle kann zu abstrakt werden.
- Speicherstatus kann zu früh aufgebläht werden.

Gegenmaßnahmen:
- eigene Reviewphase.
- keine Implementierung ohne neue Freigabe.
- Negativ-Liste in jeder Folgephase.
- JSON-Workflow als Standard immer sichtbar halten.
- Speicheraktivierung strikt opt-in.
- zunächst Architektur prüfen, dann erst möglichen Implementierungsschnitt definieren.

## 14. Empfohlener nächster Schritt
Phase 8.4 · Review der Speicherarchitektur-Konzeption prüfen

Ziel:
- prüfen, ob die Speicherarchitektur klar genug ist
- prüfen, ob keine Technologie vorschnell festgelegt wurde
- prüfen, ob Datenschutz-/Nutzerkontrollanforderungen ausreichend sind
- prüfen, ob Phase 8.5 als Implementierungsvorbereitung oder weitere Konzeptphase sinnvoll ist

Alternative:
Falls ein strengerer Schnitt gewünscht ist:
- Phase 8.4 · Persistenz-Architekturentscheidung prüfen und Implementierungsschnitt festlegen

Empfehlung:
Zuerst Review, keine Implementierung.

## 15. Negativ-Liste
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Utility
- keine neue Komponente
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine API
- keine Migration
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine OpenAI-Anbindung
- keine Simulation
- keine Strategie-Implementierung
- keine Report-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine neue State-Architektur
- keine Persistenz-Adapter implementieren
- keine Statuslogik implementieren
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 16. Quality-Gate-Hinweis
Da reine Architektur-/Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
