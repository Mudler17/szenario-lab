# Phase 8.8 · Review der Persistenz-Integrationsgrenzen prüfen

## 1. Review-Ziel
Prüfung, ob das in Phase 8.7 dokumentierte Konzept zu Persistenz-Integrationsgrenzen klar, ausreichend begrenzt und anschlussfähig ist, ohne eine Speichertechnologie, Implementierung oder neue Modulstruktur vorzubereiten.

## 2. Geprüfte Dateien
- README.md
- ROADMAP.md
- docs/PHASE_8_5_PERSISTENCE_INTERFACES_AND_CONTROLS_CONCEPT.md
- docs/PHASE_8_6_REVIEW_PERSISTENCE_INTERFACES_AND_CONTROLS.md
- docs/PHASE_8_7_PERSISTENCE_INTEGRATION_BOUNDARIES_CONCEPT.md
- docs/PHASE_8_3_ACTIVATABLE_PERSISTENCE_ARCHITECTURE_CONCEPT.md
- docs/PHASE_8_4_REVIEW_ACTIVATABLE_PERSISTENCE_ARCHITECTURE.md
- src/pages/HomePage.jsx
- src/features/scenarios/export/index.js
- src/features/scenarios/import/index.js
- src/features/scenarios/editing/state/index.js
- src/features/scenarios/editing/index.js
- src/domain/seeds/exampleScenario.js

## 3. Ergebnis: Zielpfad und Grenzen eingehalten?
Prüfung:
- Hybridpfad bleibt Grundlage: **ja**.
- JSON-Datei-Workflow bleibt Standard: **ja**.
- Speicherung bleibt optional: **ja**.
- Speicherung bleibt bewusst aktivierbar: **ja**.
- Keine automatische Speicherung: **ja**.
- Keine verdeckte Speicherung: **ja**.
- Keine konkrete Speichertechnologie festgelegt: **ja**.
- Kein LocalStorage festgelegt: **ja**.
- Kein SessionStorage festgelegt: **ja**.
- Kein IndexedDB festgelegt: **ja**.
- Kein Backend festgelegt: **ja**.
- Keine API festgelegt: **ja**.
- Keine Implementierung: **ja**.
- Keine neue Modulstruktur angelegt: **ja**.
- Keine Exporte ergänzt: **ja**.

Bewertung: **freigegeben mit Hinweisen**.

## 4. Ergebnis: Integrationsprinzipien
Prüfung:
- Persistenzlogik nicht in Draft-Utilities: **klar benannt**.
- Persistenzlogik nicht in JSON-Export: **klar benannt**.
- Persistenzlogik nicht in JSON-Import: **klar benannt**.
- HomePage nicht dauerhaft als Persistenz-Monolith: **klar benannt**.
- Lokaler Draft bleibt primärer Bearbeitungszustand: **klar benannt**.
- JSON-Datei-Workflow bleibt Standard: **klar benannt**.
- Optionaler Speicherpfad bleibt opt-in: **klar benannt**.
- Orchestrator nutzt Adapter nur nach bewusster Aktivierung: **klar benannt**.
- Speicherstatus bleibt von Downloadstatus unterscheidbar: **klar benannt**.
- Speicherfehler überlagern Import-/Exportstatus nicht: **klar benannt**.
- Keine automatische Speicherung ohne eigene spätere Entscheidung: **klar benannt**.
- Keine Speichertechnologie in Phase 8.7 festgelegt: **klar benannt**.

Bewertung:
- Prinzipien sind weitgehend vollständig.
- Prinzipien sind für spätere Tests ausreichend konkret ableitbar.
- Zentrale fehlende Grenze wurde nicht gefunden.
- Hinweis: Phase 8.9 sollte die Schnittkanten für Statusgrenzen und Handler-Verantwortung noch präzisieren.

## 5. Ergebnis: Bestehende Modulgrenzen

### HomePage
- aktuelle Rolle korrekt beschrieben: **ja**.
- spätere erlaubte Rolle realistisch: **ja**.
- nicht erlaubte Rolle klar genug: **ja**.
- Risiko HomePage-Monolith ausreichend adressiert: **ja, mit Rest-Risiko bei zu vielen Handlern**.

### Draft-Utilities
- rein lokale Datenoperationen: **ja**.
- keine Adapter-/Storage-Nutzung: **ja**.
- keine Speicherstatuslogik: **ja**.

### JSON-Export
- bleibt bewusster Datei-Download: **ja**.
- kein Ersatz für App-Speicherung: **ja**.
- kein Adapteraufruf: **ja**.
- keine Speicheraktivierung: **ja**.

### JSON-Import
- bleibt geprüfter Wiederaufnahmeweg: **ja**.
- keine automatische Speicherung: **ja**.
- keine Speicheraktivierung durch Import: **ja**.
- kein Adapteraufruf: **ja**.

### Persistenz-Orchestrator
- Rolle klar genug: **ja**.
- Grenze klar genug: **ja**.
- ersetzt keine Draft-Utilities: **ja**.
- ersetzt keinen JSON-Export/-Import: **ja**.
- entscheidet nicht allein über Speichertechnologie: **ja**.

Bewertung:
- Modulgrenzen sind konkret genug für eine nächste konzeptionelle Vorphase.
- Für direkte Implementierung noch leicht zu abstrakt.
- Empfehlung: Vor Implementierung eine eigene Modulstruktur-Konzeptphase (Phase 8.9).

## 6. Ergebnis: Erlaubte spätere Datenflüsse
Prüfung:
- Draft bearbeiten: **abgedeckt**.
- JSON herunterladen: **abgedeckt**.
- JSON importieren: **abgedeckt**.
- Speicherung aktivieren: **abgedeckt**.
- Einmalig speichern: **abgedeckt**.
- Gespeichertes Szenario laden: **abgedeckt**.
- Speicherung deaktivieren: **abgedeckt**.
- Gespeicherte Daten löschen: **abgedeckt**.

Bewertung:
- Flüsse sind vollständig genug.
- Trennung ist ausreichend klar.
- „Ungelespeicherte Änderungen“ bleibt konzeptionell und nicht als Autosave definiert.
- Laden/Ersetzen des Drafts sollte in Phase 8.9 mit Bestätigungsgrenzen geschärft werden.
- Löschen gespeicherter Daten ist ausreichend vom Draft-Reset getrennt beschrieben.

## 7. Ergebnis: Nicht erlaubte Datenflüsse
Prüfung, ob ausgeschlossen:
- Draft-Änderung speichert automatisch: **ja**.
- Import speichert automatisch: **ja**.
- Export aktiviert Speicherung: **ja**.
- Reset löscht gespeicherte Daten: **ja**.
- Deaktivieren löscht automatisch Daten ohne Hinweis: **ja**.
- Speicherfehler wird als Importfehler gemeldet: **ja**.
- Downloadstatus wird als Speicherstatus verwendet: **ja**.
- Draft-Utility ruft Adapter auf: **ja**.
- JSON-Utility ruft Adapter auf: **ja**.
- HomePage nutzt localStorage direkt: **ja**.
- Persistenz-Orchestrator wird ohne Aktivierung genutzt: **ja**.
- Speichertechnologie wird festgelegt: **ja**.

Bewertung:
- Ausschlüsse sind vollständig genug.
- Kritischer Ausschluss fehlt nicht.
- Auto-Save bleibt explizit als separate spätere Entscheidung empfohlen.

## 8. Ergebnis: Statusgrenzen
Prüfung:
- Draft-Status: **konzeptionell getrennt**.
- Downloadstatus: **bestehend und getrennt**.
- Importstatus: **bestehend und getrennt**.
- Speicherstatus: **als eigener künftiger Statusraum vorgesehen**.

Bewertung:
- Statusarten sind klar getrennt beschrieben.
- Speicherstatus ist ausreichend von `downloadStatus` und Importstatus abgegrenzt.
- Spätere Implementierung sollte einen eigenen Persistenzstatus besitzen.
- HomePage-Überladung bleibt ein Risiko und sollte in Phase 8.9 strukturell minimiert werden.

## 9. Ergebnis: HomePage-Integrationsgrenze
Prüfung:
HomePage darf später:
- Speicherstatus aus Orchestrator anzeigen.
- bewusst ausgelöste Speicheraktionen delegieren.
- nach bewusstem Laden/Import den Draft ersetzen.
- Kontrollpunkt-Komponenten platzieren.

HomePage darf nicht:
- Speicheradapter direkt importieren.
- Browser-Speicher direkt ansprechen.
- Aktivierungs-/Hinweislogik verstreut halten.
- Speicherung automatisch bei jeder Draft-Änderung auslösen.
- Speicherstatus mit Import-/Downloadstatus vermischen.

Bewertung:
- Grenze ist robust genug.
- Zusätzliche Grenze empfohlen: Handler in HomePage klein halten und in Orchestrator-nahen Funktionen bündeln.
- Phase 8.9 sollte kleine Orchestrator-Schicht als Konzept vorbereiten statt HomePage-Ausbau.

## 10. Ergebnis: Mögliche spätere Modulstruktur
Prüfung Zielbild:
- `src/features/scenarios/persistence/`
  - `persistenceAdapter`
  - `persistenceOrchestrator`
  - `persistenceStatusMessages`
  - `persistenceMetadata`
  - `persistenceGuards`

Bewertung:
- Als Zielbild hilfreich.
- Es wurden noch keine Dateien angelegt.
- Es wurden keine Exporte ergänzt.
- Es wurden keine neuen Dependencies eingeführt.
- Empfehlung: Nächste Phase als Modulstruktur-Konzeption statt Implementierung.

## 11. Ergebnis: Testschnitt für spätere Integration
Prüfung konzeptioneller Anforderungen:
- Draft-Änderung löst keinen Adapteraufruf aus.
- Export löst keinen Adapteraufruf aus.
- Import löst keinen Adapteraufruf aus.
- Speichern ohne Aktivierung wird blockiert.
- Aktivierung benötigt Kontrollpunkte.
- Deaktivieren verhindert künftige Adapteraufrufe.
- Löschen löscht gespeicherte Daten, aber nicht automatisch den Draft.
- Laden ersetzt Draft nur nach Bestätigung.
- Speicherstatus ist getrennt von Import-/Downloadstatus.
- Kein Zugriff auf localStorage ohne explizite Technologiephase.
- HomePage importiert keinen konkreten Speicheradapter.

Bewertung:
- Testanforderungen sind ausreichend für Vorbereitung.
- Guard-Tests gegen direkte Browser-Storage-Nutzung sollten expliziter präzisiert werden.
- Tests für Statusgrenzen sollten als eigener Block in Phase 8.9 geplant werden.
- In dieser Reviewphase wurden **keine Tests neu angelegt**.

## 12. Ergebnis: Datenschutz-/Nutzerhinweis-Integration
Prüfung:
- Hinweise nicht verstreut in HomePage: **als Ziel klar**.
- Hinweis- und Kontrollpunktlogik zentral ableitbar: **ja**.
- Nutzerhinweise später a11y-tauglich: **ja**.
- Warnung zu gemeinsam genutzten Geräten Pflicht: **ja**.
- Sensible-/personenbezogene-Daten-Hinweis Pflicht: **ja**.
- Lösch-/Deaktivierungshinweis Pflicht: **ja**.
- Speicherort-Hinweis Pflicht: **ja**.

Bewertung:
- Insgesamt ausreichend.
- Teilweise noch allgemein; vor UI-Implementierung eigene Datenschutz-/Nutzerhinweis-Konzeptphase sinnvoll.
- Keine juristische Einwilligungslogik eingeführt.

## 13. Ergebnis: Offene Entscheidungen
Prüfung:
- konkrete Speichertechnologie offen: **ja**.
- konkrete Datei-/Modulstruktur offen: **ja**.
- Orchestrator als Utility oder Hook offen: **ja**.
- Speicheraktivierung pro Szenario oder global offen: **ja**.
- mehrere gespeicherte Szenarien offen: **ja**.
- Auto-Save offen bzw. gesondert zu prüfen: **ja**.
- Speicherstatusdarstellung offen: **ja**.
- Lade-/Ersetzungsbestätigung offen: **ja**.
- Datenschutzprüfung vor Implementierung offen: **ja**.

Bewertung:
- Offene Entscheidungen sind transparent.
- Als nächste Entscheidung am sinnvollsten: konzeptionelle Modulstruktur (Phase 8.9).
- Keine Blocker erkennbar.

## 14. Ergebnis: Scope-Hygiene
Geprüft, dass **nicht** eingeführt wurde:
- Codeänderung
- UI-Änderung
- CSS-Änderung
- Teständerung
- Speicherung
- LocalStorage
- SessionStorage
- IndexedDB
- Backend
- Datenbank
- Authentifizierung
- Accounts
- API
- Migration
- Persistenz-Adapter
- Statuslogik
- Speicheraktivierungs-UI
- Löschlogik
- neue Modulstruktur
- neue Exporte
- Änderung an JSON-Export
- Änderung an JSON-Import
- OpenAI-Anbindung
- Simulation
- Strategie
- Report
- automatische Bewertung
- Entscheidungsautomatisierung
- neue Dependency

## 15. Ergebnis: README/ROADMAP
Prüfung vor Abschluss:
- README nannte Phase 8.7 als aktuellen Stand: **ja**.
- README verwies auf Phase-8.7-Dokument: **ja**.
- ROADMAP markierte Phase 8.7 als abgeschlossen: **ja**.
- ROADMAP führte Phase 8.8 vor Review-Abschluss offen: **ja**.

Review-Ergebnis ohne Blocker:
- README minimal auf Phase 8.8 aktualisiert.
- ROADMAP Phase 8.8 abgeschlossen.
- Nächster Schritt ergänzt: Phase 8.9.

## 16. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnisse:
- `npm test`: **bestanden** (167 Tests bestanden, 0 fehlgeschlagen).
- `npm run build`: **bestanden**.
- Keine Codeänderung zur Fehlerbehebung vorgenommen.

## 17. Ggf. kleine Korrekturen
Keine Korrekturen erforderlich.

Sinnvolle Nacharbeitskandidaten (nur konzeptionell):
- Statusgrenzen in eigener Implementierungsvorbereitung weiter schärfen.
- Modulstruktur vor Code konkretisieren.
- Guard-Test-Anforderungen gegen direkte Browser-Storage-Nutzung präzisieren.
- Datenschutz-/Nutzerhinweise vor UI gesondert konzipieren.

## 18. Entscheidung
**Phase 8.7 freigegeben mit Hinweisen.**

- Keine Implementierung als nächster Schritt.
- Nächster Schritt: **Phase 8.9 · Persistenz-Modulstruktur konzeptionell vorbereiten**.

## 19. Anschlusslogik
Bei Freigabe:
- Nächster Schritt:
  **Phase 8.9 · Persistenz-Modulstruktur konzeptionell vorbereiten**

Begründung:
- Vor Implementierung sollte die spätere Modulstruktur konkret genug sein, damit Persistenz nicht unstrukturiert in HomePage, Draft-Utilities oder JSON-Import/-Export wächst.
- Noch keine Speichertechnologie festlegen.
- Noch kein LocalStorage.
- Noch kein Backend.
- Noch keine UI.
- Noch keine Adapter implementieren.

Alternative:
- **Phase 8.9 · Persistenz-Implementierungsvorbereitung**
- nur falls Integrationsgrenzen und Modulstruktur bereits ausreichend konkret wären.

Empfehlung:
- Zuerst Modulstruktur konzeptionell vorbereiten.

## 20. Negativ-Liste: Was im Review NICHT gemacht wurde
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine Datenänderung
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
- keine Persistenz-Adapter
- keine Statuslogik
- keine Speicheraktivierungs-UI
- keine Löschlogik
- keine neue Modulstruktur
- keine Exporte
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
