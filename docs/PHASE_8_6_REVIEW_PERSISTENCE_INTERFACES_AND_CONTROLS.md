# Phase 8.6 · Review der Persistenz-Schnittstellen und Kontrollpunkte prüfen

## 1. Review-Ziel
Prüfung, ob das in Phase 8.5 dokumentierte Konzept zu Persistenz-Schnittstellen und Kontrollpunkten klar, ausreichend begrenzt, datenschutzsensibel und anschlussfähig ist, ohne eine Speichertechnologie oder Implementierung vorzubereiten.

## 2. Geprüfte Dateien
- README.md
- ROADMAP.md
- docs/PHASE_8_0_NEXT_MAIN_PHASE_DECISION.md
- docs/PHASE_8_1_PERSISTENCE_DECISION_CONCEPT.md
- docs/PHASE_8_2_PERSISTENCE_OPTIONS_EVALUATION.md
- docs/PHASE_8_3_ACTIVATABLE_PERSISTENCE_ARCHITECTURE_CONCEPT.md
- docs/PHASE_8_4_REVIEW_ACTIVATABLE_PERSISTENCE_ARCHITECTURE.md
- docs/PHASE_8_5_PERSISTENCE_INTERFACES_AND_CONTROLS_CONCEPT.md
- src/pages/HomePage.jsx
- src/features/scenarios/export/index.js
- src/features/scenarios/import/index.js
- src/features/scenarios/editing/state/index.js
- src/domain/seeds/exampleScenario.js

## 3. Ergebnis: Zielpfad und Grenzen eingehalten?
Prüfungsergebnis:
- Hybridpfad bleibt Grundlage: **ja**.
- JSON-Datei-Workflow bleibt Standard: **ja**.
- Speicherung bleibt optional: **ja**.
- Speicherung bleibt bewusst aktivierbar: **ja**.
- Keine automatische Speicherung: **ja**.
- Keine verdeckte Speicherung: **ja**.
- Keine konkrete Speichertechnologie festgelegt: **ja**.
- Kein LocalStorage/SessionStorage/IndexedDB/Backend/API: **ja**.
- Keine Implementierung: **ja**.

**Bewertung:** freigegeben mit Hinweis.

Hinweis:
- Die konzeptionelle Trennschärfe ist gut. Vor einer Implementierung sollte die Integrationsgrenze HomePage ↔ Orchestrator in einer eigenen Konzeptphase präzisiert werden.

## 4. Ergebnis: Konzeptionelle Schnittstellen

### PersistenceAdapter
- Zweck ist klar beschrieben.
- Operationen sind für eine spätere adapterbasierte Anbindung sinnvoll:
  - isAvailable()
  - saveScenario(payload)
  - loadScenario(reference)
  - deleteScenario(reference)
  - listSavedScenarios()
  - getStorageInfo()
- Keine direkte Nutzung durch Draft-Utilities vorgesehen.
- Keine Technologieentscheidung getroffen.

### PersistenceOrchestrator
- Zweck ist klar beschrieben.
- Trennung von Draft, Datei-Workflow und optionaler Speicherung ist nachvollziehbar.
- Adapter-Nutzung ist an bewusste Aktivierung geknüpft.
- Operationen sind schlüssig:
  - getStorageState()
  - activateStorage(consentContext)
  - deactivateStorage()
  - saveCurrentDraft(draft)
  - loadSavedScenario(reference)
  - deleteSavedScenario(reference)
  - createStorageStatusMessage(result)
- Keine State-Machine implementiert.

### StorageConsent / StorageAcknowledgement
- Passend als Kenntnisnahme-/Aktivierungskontext beschrieben.
- Nicht als juristische Einwilligung überhöht.
- Felder sind sinnvoll:
  - acknowledgedAt
  - acknowledgedStorageMode
  - acknowledgedRisks
  - sharedDeviceWarningShown
  - sensitiveDataWarningShown
  - userCanDeleteNoticeShown

### PersistenceMetadata
- Trennung technischer Metadaten von Kenntnisnahme-Status ist sauber.
- Felder sind sinnvoll:
  - persistenceVersion
  - scenarioId
  - scenarioName
  - storageMode
  - savedAt
  - updatedAt
  - source
  - formatVersion
  - lastExportedAt
  - importedFrom
- Keine Schemaänderung umgesetzt.

Bewertung:
- Schnittstellen sind konkret genug für spätere Konzept-/Implementierungsvorbereitung.
- Für den aktuellen Stand nicht zu konkret, da keine Technologie/Runtime festgelegt wurde.
- Keine zwingend fehlende Schnittstelle erkennbar.
- Empfehlung: vor Code zuerst Orchestrator-Integrationskonzept (Phase 8.7).

## 5. Ergebnis: Statuskonzept
Prüfung:
- storageInactive
- storageActivationRequired
- storageActive
- storageSaving
- storageSaved
- storageError
- storageDisabled

Bewertung:
- Kernmenge ist klein genug.
- Statusnamen sind überwiegend verständlich.
- `storageActivationRequired` ist sinnvoll als Guard-/Nutzerhinweisstatus.
- `storageDisabled` sollte später klar von `storageInactive` abgegrenzt werden (Hinweis).
- Optionale Statuswerte sind korrekt nachrangig:
  - storageDeleted
  - storageUnavailable
  - storageAvailableButInactive
- Keine Runtime-Statuslogik umgesetzt.

## 6. Ergebnis: Aktivierungskontrollpunkte
Prüfung:
- Speicherabsicht anzeigen: **ja**.
- Speicherort erklären: **ja**.
- Sensible-Daten-Hinweis anzeigen: **ja**.
- Geteiltes-Gerät-Warnung anzeigen: **ja**.
- Nutzer bestätigt bewusst: **ja**.
- Abbruchmöglichkeit: **ja**.
- Lösch-/Deaktivierungsmöglichkeit erklären: **ja**.
- JSON-Download als Alternative sichtbar halten: **ja**.

Bewertung:
- Kontrollpunkte sind ausreichend.
- Reihenfolge ist plausibel.
- Speicherung ist klar vom JSON-Download getrennt.
- Geteiltes Gerät wird angemessen berücksichtigt.
- „bewusst aktivieren“ ist stark genug formuliert.

## 7. Ergebnis: Trennung von Aktionen
Prüfung:
- „Speicherung aktivieren“ getrennt von „einmalig speichern“: **ja**.
- „JSON herunterladen“ bleibt eigener Datei-Workflow: **ja**.
- Aktivierung ist keine Speicherung: **ja**.
- Speichern ist nicht automatisch Aktivieren: **ja**.
- Download ist keine App-Speicherung: **ja**.

Bewertung:
- Trennung ist für spätere UI-Texte tragfähig.
- Ergänzung sinnvoll: Aktion „Speicherstatus anzeigen“ später konzeptionell ausformulieren.
- „Speicherung deaktivieren“ und „gespeicherte Daten löschen“ sollten getrennt bleiben.

## 8. Ergebnis: Lösch- und Deaktivierungskonzept
Prüfung:
- Speicherung deaktivieren: **klar getrennt**.
- Gespeicherte Daten löschen: **klar getrennt**.
- Draft zurücksetzen: **klar getrennt**.
- JSON-Datei löschen: **klar als extern**.

Bewertung:
- Vier Fälle sind gut getrennt.
- Verwechslung „Reset = Datenlöschung“ wird konzeptionell adressiert.
- Klarheit zu externen JSON-Dateien ist vorhanden.
- Spätere Testanforderungen sind ableitbar.

## 9. Ergebnis: Datenschutz- und Nutzerhinweise
Prüfung:
- sensible Organisationsdaten: **ja**.
- personenbezogene Daten: **ja**.
- Speicherort und Dauer: **ja**.
- gemeinsam genutzte Geräte: **ja**.
- Backend-Sonderthemen (Konto/Zugriff/Rollen/Betreiber): **ja**.
- JSON-Datei auf Nutzergerät: **ja**.
- App-interne Speicherung davon getrennt: **ja**.
- Abbruch: **ja**.
- Löschen/Deaktivieren: **ja**.

Bewertung:
- ausreichend für den aktuellen Konzeptstand.
- nicht zu allgemein, aber mit Spielraum für Konkretisierung.
- Empfehlung: Phase 8.7 ergänzt eine kleine Datenschutz-/Nutzerhinweis-Konzeption auf Integrationsniveau vor Implementierung.
- Keine Rechtsberatung / juristische Einwilligungslogik eingeführt.

## 10. Ergebnis: Verhältnis zu bestehenden Modulen
Prüfung:
- Draft-State bleibt lokaler Arbeitszustand: **ja**.
- Keine Persistenzlogik in Draft-Utilities: **ja**.
- JSON-Export bleibt bewusster Datei-Download: **ja**.
- JSON-Import bleibt geprüfter Wiederaufnahmeweg: **ja**.
- Import speichert nicht automatisch: **ja**.
- HomePage darf später nicht unstrukturiert überladen werden: **als Hinweis enthalten**.

Bewertung:
- Integrationsgrenze ist grundsätzlich klar.
- Empfehlung: vor Code ein Integrationskonzept HomePage/Orchestrator.
- Keine Änderung an bestehenden Modulen erfolgt.

## 11. Ergebnis: Testschnitt für spätere Implementierung
Prüfung:
- Adapter wird nicht genutzt, solange Speicherung inaktiv ist: **enthalten**.
- Aktivierung erfordert Kontrollpunkte: **enthalten**.
- Speichern ohne Aktivierung ist nicht möglich: **enthalten**.
- JSON-Download funktioniert unabhängig von Speicherung: **enthalten**.
- JSON-Import speichert nicht automatisch: **enthalten**.
- Deaktivieren verhindert weitere Speicherzugriffe: **enthalten**.
- Löschen ruft spätere Löschoperation auf: **enthalten**.
- Fehler werden verständlich gemeldet: **enthalten**.
- Keine LocalStorage-Nutzung ohne explizite Technologieentscheidung: **enthalten**.

Bewertung:
- Testanforderungen sind ausreichend als Startpunkt.
- a11y-/Statusmeldungstests können in 8.7/8.8 präzisiert werden.
- Guard-Tests gegen verdeckte Browser-Persistenz sollten später expliziter ergänzt werden.
- In Phase 8.6 wurden keine Tests angelegt (nur Quality Gate ausgeführt).

## 12. Ergebnis: Offene Entscheidungen
Prüfung:
- konkrete Speichertechnologie offen.
- lokaler Adapter vs. Backend-Zielbild offen.
- File System Access API offen.
- Szenario-IDs offen.
- Versionierung offen.
- mehrere gespeicherte Szenarien offen.
- Auto-Save offen (gesondert prüfen).
- Aktivierung pro Szenario oder global offen.
- organisatorische Datenschutzprüfung offen.

Bewertung:
- offene Entscheidungen sind transparent.
- keine Blocker für Abschluss von Phase 8.5-Konzeptreview.
- nächste Vorbereitung: Integrationsgrenzen (Phase 8.7).

## 13. Ergebnis: Scope-Hygiene
Geprüft: Nicht eingeführt wurden
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
- Änderung an JSON-Export
- Änderung an JSON-Import
- OpenAI-Anbindung
- Simulation
- Strategie
- Report
- automatische Bewertung
- Entscheidungsautomatisierung
- neue Dependency

## 14. Ergebnis: README/ROADMAP
Prüfung vor Abschluss:
- README nennt Phase 8.5 als aktuellen Stand: **ja**.
- README verweist auf Phase-8.5-Dokument: **ja**.
- ROADMAP markiert Phase 8.5 als abgeschlossen: **ja**.
- ROADMAP führt Phase 8.6 vor Review-Abschluss offen: **ja**.

Nach Freigabe umgesetzt:
- README minimal auf Phase 8.6 aktualisiert.
- ROADMAP Phase 8.6 abgeschlossen.
- Nächster Schritt Phase 8.7 ergänzt.

## 15. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnis `npm test`:
- erfolgreich
- sichtbare Testanzahl: 167 bestanden, 0 fehlgeschlagen

Ergebnis `npm run build`:
- erfolgreich
- Produktionsbuild erstellt

Hinweis:
- keine Codeänderung zur Fehlerbehebung erforderlich.

## 16. Ggf. kleine Korrekturen
Keine Korrekturen erforderlich.

Nacharbeits-Hinweise für nächste Konzeptphase:
- Status `storageInactive` vs. `storageDisabled` genauer abgrenzen.
- Aktion „Speicherstatus anzeigen“ konzeptionell ergänzen.
- Guard-Test-Anforderungen gegen verdeckte Browser-Persistenz expliziter machen.
- HomePage-/Orchestrator-Integrationskonzept vorbereiten.

## 17. Entscheidung
**Phase 8.5 freigegeben mit Hinweisen.**

- Keine Implementierung als nächster Schritt.
- Nächster Schritt: Phase 8.7 · Persistenz-Integrationsgrenzen konzeptionell vorbereiten.

## 18. Anschlusslogik
Bei Freigabe:
- Nächster Schritt:
  Phase 8.7 · Persistenz-Integrationsgrenzen konzeptionell vorbereiten

Begründung:
- Vor Implementierung sollte geklärt werden, wie ein späterer Orchestrator in die bestehende HomePage-/Draft-/Import-/Export-Struktur integriert werden dürfte.
- Noch keine Speichertechnologie festlegen.
- Noch kein LocalStorage.
- Noch kein Backend.
- Noch keine UI.
- Noch keine Adapter.

Alternative:
- Phase 8.7 · Persistenz-Implementierungsvorbereitung
  Nur falls ein Folge-Review die Integrationsgrenzen bereits als vollständig geklärt bewertet.

Empfehlung:
- Zuerst Integrationsgrenzen konzeptionell vorbereiten.

## 19. Negativ-Liste: Was im Review NICHT gemacht wurde
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
- keine Speicherung-aktivieren-UI
- keine Löschlogik
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
