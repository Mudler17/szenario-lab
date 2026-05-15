# Phase 8.5 · Persistenz-Schnittstellen und Kontrollpunkte konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung möglicher Persistenz-Schnittstellen und Kontrollpunkte für einen später bewusst aktivierbaren Speicherpfad.

Diese Phase implementiert noch keine Speicherung und legt keine Speichertechnologie fest.

## 2. Ausgangspunkt
- Phase 8.4 hat Phase 8.3 freigegeben mit Hinweisen.
- Speicherarchitektur bleibt konzeptionell.
- Hybridpfad bleibt Grundlage.
- JSON-Datei-Workflow bleibt Standard.
- Speicherung bleibt optional und bewusst aktivierbar.
- Es gibt weiterhin keine App-Speicherung.
- Es gibt weiterhin kein LocalStorage, SessionStorage, IndexedDB, Backend, Datenbank, API, Authentifizierung oder Accounts.
- Phase 8.5 präzisiert nur Schnittstellen, Kontrollpunkte, Metadatenlogik und Statuskonzept.

## 3. Leitfrage
Welche minimalen konzeptionellen Schnittstellen und Kontrollpunkte braucht ein späterer Speicherpfad, damit Speicherung bewusst, transparent, löschbar, testbar und klar vom JSON-Datei-Workflow getrennt bleibt?

## 4. Grundprinzipien
- Datei-Workflow bleibt Standard.
- Speicherung bleibt Opt-in.
- Kein automatisches Speichern.
- Kein verdecktes Speichern.
- Speicherort muss erklärbar sein.
- Nutzer muss aktiv bestätigen.
- Nutzer muss abbrechen können.
- Nutzer muss Speicherung deaktivieren können.
- Nutzer muss gespeicherte Daten löschen können.
- JSON-Download bleibt verfügbar.
- JSON-Import-Prüfung bleibt verfügbar.
- Speicherlogik darf nicht in Draft-Utilities wandern.
- Speicherlogik darf nicht in JSON-Export/-Import wandern.
- Keine konkrete Speichertechnologie wird festgelegt.

## 5. Konzeptionelle Schnittstellen

Beschreibe rein konzeptionell mögliche spätere Schnittstellen. Keine Datei anlegen, keine Types, keine Interfaces im Code.

### 5.1 PersistenceAdapter
Zweck:
- kapselt später eine konkrete Speichertechnologie
- wird nur genutzt, wenn Speicherung bewusst aktiviert wurde
- darf nicht direkt von Draft-Utilities genutzt werden

Konzeptionelle Operationen:
- isAvailable()
- saveScenario(payload)
- loadScenario(reference)
- deleteScenario(reference)
- listSavedScenarios()
- getStorageInfo()

Wichtig:
- keine Implementierung
- keine Technologieentscheidung
- keine LocalStorage-Festlegung
- keine Backend-Festlegung

### 5.2 PersistenceOrchestrator
Zweck:
- trennt lokalen Draft, Datei-Workflow und optionale Speicherung
- entscheidet später, ob ein Speicherpfad aktiv ist
- ruft Adapter nur nach Aktivierung auf
- erzeugt verständliche Statusobjekte

Konzeptionelle Operationen:
- getStorageState()
- activateStorage(consentContext)
- deactivateStorage()
- saveCurrentDraft(draft)
- loadSavedScenario(reference)
- deleteSavedScenario(reference)
- createStorageStatusMessage(result)

Wichtig:
- keine State-Machine implementieren
- keine Runtime-Logik
- nur Schnittstellenidee dokumentieren

### 5.3 StorageConsent / StorageAcknowledgement
Zweck:
- trennt Nutzerhinweis-/Kenntnisnahme von technischen Speichermetadaten
- dokumentiert später, dass Nutzer Speicherung bewusst aktiviert hat

Konzeptionelle Felder:
- acknowledgedAt
- acknowledgedStorageMode
- acknowledgedRisks
- sharedDeviceWarningShown
- sensitiveDataWarningShown
- userCanDeleteNoticeShown

Wichtig:
- nicht als juristische Einwilligung im Datenschutzsinn überhöhen
- besser als Kenntnisnahme-/Aktivierungsnachweis beschreiben
- keine Rechtsprüfung ersetzen

### 5.4 PersistenceMetadata
Zweck:
- technische Metadaten eines später gespeicherten Szenarios

Konzeptionelle Felder:
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

Wichtig:
- technische Metadaten von Nutzer-/Hinweisstatus trennen
- keine Schemaänderung jetzt

## 6. Minimales Statuskonzept

Phase 8.4 hat empfohlen, die Statuswerte zu reduzieren/priorisieren.

Lege eine kleine Kernmenge für spätere Konzeption fest:

### Kernstatus
- storageInactive
- storageActivationRequired
- storageActive
- storageSaving
- storageSaved
- storageError
- storageDisabled

Kurzbeschreibung:
- `storageInactive`: Speicherpfad ist aktuell nicht aktiv und wird nicht genutzt.
- `storageActivationRequired`: Ein Speichervorgang wurde angefragt, aber Aktivierung/Kenntnisnahme fehlt.
- `storageActive`: Speicherpfad ist grundsätzlich aktiviert und darf verwendet werden.
- `storageSaving`: Ein bewusster Speichervorgang läuft.
- `storageSaved`: Ein Speichervorgang wurde erfolgreich abgeschlossen.
- `storageError`: Ein Speichervorgang ist fehlgeschlagen und muss verständlich rückmeldbar sein.
- `storageDisabled`: Speicherpfad wurde bewusst deaktiviert.

### Nicht priorisierte optionale Statuswerte
Aus Phase 8.3 nur später prüfen:
- storageDeleted
- storageUnavailable
- storageAvailableButInactive

Bewertung:
- Kernstatus reicht für erste spätere UI-/Schnittstellenkonzeption.
- Optionale Statuswerte nicht jetzt verwerfen, aber nachrangig behandeln.
- Keine Runtime-Statuslogik implementieren.

## 7. Aktivierungskontrollpunkte

Eine spätere Speicheraktivierung muss konzeptionell mindestens folgende Schritte enthalten:

1. Speicherabsicht anzeigen
   - App erklärt: Es geht um App-interne Speicherung, nicht JSON-Download.
2. Speicherort erklären
   - lokal im Browser, Datei-System oder Server – abhängig von späterer Technologie.
3. Sensible-Daten-Hinweis anzeigen
   - Szenarien können personenbezogene oder vertrauliche Organisationsdaten enthalten.
4. Geteiltes-Gerät-Warnung anzeigen
   - besonders wichtig bei Browser- oder lokaler Speicherung.
5. Nutzer bestätigt bewusst
   - Aktivierung nicht nebenbei.
6. Abbruchmöglichkeit anbieten
   - ohne Datenverlust im lokalen Draft.
7. Lösch-/Deaktivierungsmöglichkeit erklären
   - Nutzer muss wissen, wie Speicherung beendet wird.
8. JSON-Download als Alternative sichtbar halten
   - Datei-Workflow bleibt Standard.

## 8. „Speicherung aktivieren“ vs. „einmalig speichern“

Phase 8.4 empfiehlt diese Trennung.

### Speicherung aktivieren
- schaltet einen optionalen Speicherpfad grundsätzlich frei
- setzt Kenntnisnahme-/Aktivierungskontext voraus
- kann später Status, Hinweise und Löschlogik benötigen

### Einmalig speichern
- speichert einen konkreten Draft-Zustand
- darf nur möglich sein, wenn Speicherpfad aktiv ist
- ist nicht dasselbe wie Aktivierung

### JSON herunterladen
- bleibt eigener Datei-Workflow
- ist keine App-Speicherung
- bleibt unabhängig vom Speicherpfad verfügbar

## 9. Lösch- und Deaktivierungskonzept

Konzeptionell unterscheiden:

### Speicherung deaktivieren
- beendet die Nutzung des Speicherpfads
- bedeutet nicht zwingend, dass bereits gespeicherte Daten gelöscht sind
- muss später klar erklärt werden

### Gespeicherte Daten löschen
- entfernt gespeicherte Szenariodaten aus dem gewählten Speicherort
- muss später technisch nachweisbar/testbar sein

### Draft zurücksetzen
- betrifft nur den lokalen Draft
- ist nicht identisch mit Löschen gespeicherter Daten

### JSON-Datei löschen
- liegt außerhalb der App
- Nutzer ist dafür selbst verantwortlich

Wichtig:
Diese Unterschiede später in Nutzertexten klar machen.

## 10. Datenschutz- und Nutzerhinweise

Mindesthinweise für spätere UI-Konzeption:
- Speicherung kann sensible Organisationsdaten betreffen.
- Speicherung kann personenbezogene Daten betreffen.
- Speicherort und Dauer müssen verständlich sein.
- Bei Browser-Speicherung: Hinweis auf gemeinsam genutzte Geräte.
- Bei Backend-Speicherung: Hinweis auf Konto, Zugriff, Rollen/Rechte und Betreiberverantwortung.
- JSON-Download ist eine Datei auf dem Gerät des Nutzers.
- App-interne Speicherung ist davon getrennt.
- Nutzer kann Speicherung abbrechen.
- Nutzer kann gespeicherte Daten löschen oder Speicherpfad deaktivieren.

## 11. Verhältnis zu bestehenden Modulen

### Draft-State
- bleibt lokaler Arbeitszustand.
- keine Persistenzlogik in Draft-Utilities.

### JSON-Export
- bleibt bewusster Datei-Download.
- keine automatische Speicherung.
- keine Speicherstatuslogik.

### JSON-Import
- bleibt geprüfter Wiederaufnahmeweg.
- keine automatische Speicherung importierter Daten.
- Übernahme bleibt bewusst.

### HomePage
- bleibt aktueller Orchestrierungsort.
- spätere Persistenz-Orchestrierung darf nicht unstrukturiert in HomePage wachsen.
- vor Implementierung ggf. eigene Konzeptphase für Integrationsschnitt prüfen.

## 12. Testschnitt für spätere Implementierung

Konzeptionelle Testanforderungen:
- Adapter wird nicht genutzt, solange Speicherung inaktiv ist.
- Aktivierung erfordert Kontrollpunkte.
- Speichern ohne Aktivierung ist nicht möglich.
- JSON-Download funktioniert unabhängig von Speicherung.
- JSON-Import speichert nicht automatisch.
- Deaktivieren verhindert weitere Speicherzugriffe.
- Löschen ruft Löschoperation des späteren Adapters auf.
- Fehler werden nutzerverständlich gemeldet.
- keine LocalStorage-Nutzung ohne explizite Adapter-/Technologieentscheidung.

Keine Tests jetzt anlegen.

## 13. Offene Entscheidungen für spätere Phasen
Offen bleibt:
- konkrete Speichertechnologie
- ob zuerst lokaler Adapter oder Backend-Zielbild
- ob File System Access API geprüft werden soll
- wie Szenario-IDs erzeugt werden
- wie Versionierung aussieht
- ob mehrere gespeicherte Szenarien unterstützt werden
- ob Auto-Save grundsätzlich ausgeschlossen bleibt oder später gesondert geprüft wird
- ob Speicheraktivierung pro Szenario oder global gilt
- wie Datenschutzprüfung organisatorisch eingebunden wird

## 14. Empfohlener nächster Schritt

Empfohlener nächster Schritt:
**Phase 8.6 · Review der Persistenz-Schnittstellen und Kontrollpunkte prüfen**

Ziel:
- prüfen, ob Schnittstellenkonzept klar genug ist
- prüfen, ob Kontrollpunkte ausreichend sind
- prüfen, ob Statuskonzept klein genug ist
- prüfen, ob Metadaten sauber getrennt sind
- entscheiden, ob danach eine Implementierungsvorbereitung oder weitere Konzeptphase sinnvoll ist

Keine Implementierung als direkter nächster Schritt.

## 15. Negativ-Liste
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
- keine Persistenz-Adapter implementieren
- keine Statuslogik implementieren
- keine Speicherung-aktivieren-UI
- keine Löschlogik
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 16. Quality-Gate-Hinweis
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
