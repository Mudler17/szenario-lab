# Phase 8.4 · Review der Speicherarchitektur-Konzeption prüfen

## 1. Review-Ziel
Prüfung, ob die in Phase 8.3 konzeptionell vorbereitete Speicherarchitektur klar, ausreichend abgegrenzt und anschlussfähig ist, ohne eine Speichertechnologie vorschnell festzulegen oder Implementierung auszulösen.

## 2. Geprüfte Dateien
- README.md
- ROADMAP.md
- docs/PHASE_8_0_NEXT_MAIN_PHASE_DECISION.md
- docs/PHASE_8_1_PERSISTENCE_DECISION_CONCEPT.md
- docs/PHASE_8_2_PERSISTENCE_OPTIONS_EVALUATION.md
- docs/PHASE_8_3_ACTIVATABLE_PERSISTENCE_ARCHITECTURE_CONCEPT.md
- docs/PHASE_7_11_2_PHASE_7_COMPLETION_AUDIT.md
- src/pages/HomePage.jsx
- src/features/scenarios/export/index.js
- src/features/scenarios/import/index.js
- src/features/scenarios/editing/state/index.js
- src/domain/seeds/exampleScenario.js

## 3. Ergebnis: Zielpfad aus Phase 8.2 eingehalten?
Prüfung:
- Hybridpfad bleibt Grundlage: **ja**.
- JSON-Datei-Workflow bleibt Standard: **ja**.
- Speicherung bleibt optional: **ja**.
- Speicherung bleibt bewusst aktivierbar: **ja**.
- Keine automatische Speicherung: **ja**.
- Keine verdeckte Browser-Speicherung: **ja**.
- Keine konkrete Speichertechnologie wurde festgelegt: **ja**.
- LocalStorage wurde nicht als Standard gesetzt: **ja**.
- Backend wurde nicht als nächster Implementierungspfad gesetzt: **ja**.

Bewertung: **freigegeben mit Hinweis**.

Hinweis:
- Die Architektur ist stimmig abgegrenzt; für Phase 8.5 sollte die Aktivierungs- und Kontrollpunktlogik als kleines Schnittstellenkonzept vor möglicher Implementierung weiter präzisiert werden.

## 4. Ergebnis: Begriffsmodell
Prüfung:
- lokaler Draft: klar als nicht-persistenter Arbeitszustand.
- Datei-Workflow: klar als Standardweg über JSON-Download/-Import.
- optionaler Speicherpfad: klar als späterer Opt-in-Pfad.
- gespeichertes Szenario: als später persistierter Zustand benannt.

Bewertung:
- Trennung ist verständlich und reduziert Verwechslung zwischen Draft, Download und Speicherung.
- Kein zwingend fehlender Grundbegriff.
- Restrisiko: „gespeichertes Szenario“ kann als frühes Datenmodell fehlgedeutet werden; deshalb in Phase 8.5 technische Metadaten vs. Nutzereinwilligungs-/Hinweisstatus explizit trennen.

## 5. Ergebnis: Datenfluss
Prüfung:
- Start über Beispiel-Szenario oder Import: abgedeckt.
- Bearbeitung im lokalen Draft: abgedeckt.
- JSON-Download als Standard-Sicherung: abgedeckt.
- JSON-Import-Prüfung als Standard-Wiederaufnahme: abgedeckt.
- Optionaler Speicherpfad erst nach bewusster Aktivierung: abgedeckt.
- Löschen/Deaktivieren konzeptionell vorgesehen: abgedeckt.
- JSON-Download bleibt auch bei späterer Speicherung verfügbar: abgedeckt.

Bewertung:
- Fluss ist vollständig genug für eine Reviewphase.
- Keine kritischen Übergänge unklar.
- Speicherung ist ausreichend vom Datei-Workflow getrennt.

## 6. Ergebnis: Architekturschichten
Prüfung:
- Draft-State-Schicht ohne Persistenzlogik: eingehalten.
- Datei-Workflow-Schicht als explizite Nutzeraktion: eingehalten.
- Persistenz-Adapter-Schicht nur konzeptionell: eingehalten.
- Persistenz-Orchestrierung nur konzeptionell: eingehalten.
- Nutzerkommunikation/UI-Hinweise nur konzeptionell: eingehalten.
- Keine State-Machine implementiert: eingehalten.
- Keine Adapter implementiert: eingehalten.

Bewertung:
- Schichtung ist klar genug.
- Adapteridee ist hilfreich, solange sie in Phase 8.5 nur als Schnittstellenkonzept konkretisiert wird.
- Empfehlung: Phase 8.5 zuerst als Schnittstellenkonzept, nicht als Implementierungsvorbereitung.

## 7. Ergebnis: Mindestmetadaten
Prüfung der vorgeschlagenen Felder:
- persistenceVersion
- savedAt
- updatedAt
- storageMode
- source
- scenarioId
- scenarioName
- schemaVersion oder formatVersion
- userAcknowledgedStorageRisk
- optional: lastExportedAt
- optional: importedFrom

Bewertung:
- Metadaten sind grundsätzlich sinnvoll.
- `userAcknowledgedStorageRisk` ist fachlich sinnvoll, aber sensibel: sollte nicht mit rein technischen Speichermetadaten vermischt werden.
- Empfehlung: in Phase 8.5 Trennung in (a) technische Persistenzmetadaten und (b) Einwilligungs-/Hinweisstatus konzeptionell festlegen.
- Keine Schemaänderung erfolgt: bestätigt.

## 8. Ergebnis: Speicherstatus-Konzept
Prüfung:
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
- Statuswerte sind verständlich.
- Für den aktuellen Reifegrad potenziell etwas detailliert.
- Empfehlung: Phase 8.5 sollte eine kleinere Kernmenge priorisieren (z. B. inaktiv, aktiv, speichert, gespeichert, fehlerhaft) und optionale Zustände nachrangig kennzeichnen.
- Keine Runtime-Statuslogik umgesetzt: bestätigt.

## 9. Ergebnis: Kontrollpunkte vor Aktivierung
Prüfung:
- Information vor Speicherung: vorgesehen.
- Speicherort wird erklärt: vorgesehen.
- bewusste Bestätigung: vorgesehen.
- Abbruchmöglichkeit: vorgesehen.
- Hinweis zu sensiblen/personenbezogenen Daten: vorgesehen.
- Deaktivieren möglich: vorgesehen.
- Löschen möglich: vorgesehen.
- JSON-Download bleibt verfügbar: vorgesehen.

Bewertung:
- Kontrollpunkte sind ausreichend.
- Ergänzung empfohlen: Warnhinweis zu gemeinsam genutzten Geräten explizit als eigener Kontrollpunkt.
- Zusätzlich prüfen: „Speicherung aktivieren“ später klar von „einmalig speichern“ trennen.

## 10. Ergebnis: Datenschutz und Datenminimierung
Prüfung:
- personenbezogene Daten berücksichtigt: ja.
- vertrauliche Organisationsinformationen berücksichtigt: ja.
- keine verdeckte Speicherung: ja.
- Speicherort muss erklärbar sein: ja.
- Löschbarkeit wird gefordert: ja.
- Backendpfad benennt Rollen/Rechte/Auth/Betrieb als eigene Themen: ja.
- Browserpfad berücksichtigt geteilte Geräte: ja.
- sensible Daten nicht ohne Warnung dauerhaft speichern: ja.

Bewertung:
- Für den Konzeptstand ausreichend.
- Offene Punkte für Phase 8.5:
  1. Mindestumfang der Nutzerhinweise vor Aktivierung.
  2. Abgrenzung zwischen Einwilligung, Kenntnisnahme und technischer Speicherung.
  3. Lösch-/Deaktivierungssemantik (lokal vs. ggf. später serverseitig) rein konzeptionell präzisieren.

## 11. Ergebnis: Verhältnis zu JSON-Export/-Import
Prüfung:
- JSON-Download bleibt Standard: bestätigt.
- JSON-Import-Prüfung bleibt Standard: bestätigt.
- Speicherpfad ergänzt nur optional: bestätigt.
- JSON wird nicht heimlich ersetzt: bestätigt.
- Export bleibt wichtig für Portabilität/Review/Debugging/manuelle Versionierung: bestätigt.
- Speicherlogik wandert nicht in Export-/Import-Utilities: bestätigt.

Bewertung:
- Trennung ist ausreichend.
- Spätere Test-/Review-Kriterien sind daraus ableitbar.

## 12. Ergebnis: Nicht-Entscheidungen eingehalten?
Prüfung bestätigt weiterhin nicht entschieden/implementiert:
- LocalStorage
- SessionStorage
- IndexedDB
- Backend
- Datenbank
- Authentifizierung
- Accounts
- API
- Speicherung
- UI-Änderung
- JSON-Export/-Import-Änderung

Bewertung:
- Keine Technologieverhärtung erkennbar.
- Keine versteckte Implementierungsentscheidung erkennbar.

## 13. Ergebnis: Scope-Hygiene
Prüfung bestätigt: nicht eingeführt wurden
- Codeänderung außerhalb Dokumentation
- UI-Änderung
- CSS-Änderung
- Teständerung
- Speicherung
- Browser-Persistenz
- Backend
- Datenbank
- Authentifizierung
- API
- Adapter
- State-Machine
- Statuslogik
- OpenAI-Anbindung
- Simulation
- Report
- Strategie
- automatische Bewertung
- Entscheidungsautomatisierung
- neue Dependency

## 14. Ergebnis: README/ROADMAP
Prüfung vor Abschluss:
- README stand auf Phase 8.3.
- README verweist auf Phase-8.3-Dokument.
- ROADMAP markierte Phase 8.3 als abgeschlossen.
- ROADMAP führte Phase 8.4 als offen.

Review-Ergebnis ohne Blocker:
- README minimal auf Phase 8.4 aktualisiert.
- ROADMAP Phase 8.4 abgeschlossen.
- Phase 8.5 als nächster konzeptioneller Schritt ergänzt.

## 15. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnisse:
- `npm test`: **bestanden** (167 Tests bestanden, 0 fehlgeschlagen).
- `npm run build`: **bestanden**.
- Keine Codeänderung zur Fehlerbehebung vorgenommen.

## 16. Ggf. kleine Korrekturen
Keine Korrekturen erforderlich.

Sinnvolle Nacharbeitskandidaten für Folgephase (nur konzeptionell):
- Statuswerte reduzieren/priorisieren.
- Metadaten in technische Metadaten vs. Nutzer-/Hinweis-Metadaten trennen.
- Kontrollpunkt „gemeinsam genutztes Gerät“ expliziter aufnehmen.
- Phase 8.5 als Schnittstellenkonzept statt Implementierungsvorbereitung planen.

## 17. Entscheidung
**Phase 8.3 freigegeben mit Hinweisen.**

- Keine Implementierung als nächster Schritt.
- Nächster Schritt: **Phase 8.5 · Persistenz-Schnittstellen und Kontrollpunkte konzeptionell vorbereiten**.

## 18. Anschlusslogik
Bei Freigabe:
- Nächster Schritt:
  **Phase 8.5 · Persistenz-Schnittstellen und Kontrollpunkte konzeptionell vorbereiten**

Begründung:
- Vor Implementierung sollte zuerst eine kleinere Schnittstellen-/Kontrollpunkt-Konzeption erfolgen.
- Noch keine Speichertechnologie festlegen.
- Noch kein LocalStorage.
- Noch kein Backend.
- Noch keine UI.

Alternative:
- Phase 8.5 · Persistenz-Implementierungsvorbereitung
- Nur falls die Architektur bereits konkret genug wäre.

Empfehlung:
- Zuerst Schnittstellen und Kontrollpunkte konzeptionell vorbereiten.

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
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
