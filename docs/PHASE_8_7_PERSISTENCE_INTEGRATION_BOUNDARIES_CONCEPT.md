# Phase 8.7 · Persistenz-Integrationsgrenzen konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung der Integrationsgrenzen für einen späteren Persistenz-Orchestrator.

Diese Phase klärt nur, wo spätere Persistenzlogik grundsätzlich andocken dürfte und wo ausdrücklich nicht. Es wird keine Speicherung implementiert.

## 2. Ausgangspunkt
- Die App nutzt aktuell lokalen React-Draft-State in `HomePage.jsx`.
- Draft-Utilities bearbeiten lokale Szenariodaten.
- JSON-Export bleibt bewusster Datei-Download.
- JSON-Import bleibt geprüfter Wiederaufnahmeweg.
- Phase 8.5 hat Schnittstellen und Kontrollpunkte konzeptionell vorbereitet.
- Phase 8.6 hat empfohlen, vor Code zuerst Integrationsgrenzen zu klären.
- Es gibt weiterhin keine App-Speicherung, keine Browser-Persistenz, kein Backend und keine API.

## 3. Leitfrage
Wie kann ein späterer Persistenz-Orchestrator konzeptionell in die bestehende Struktur eingebunden werden, ohne Draft-Utilities, JSON-Export/-Import oder HomePage unkontrolliert mit Speicherlogik zu überladen?

## 4. Integrationsprinzipien
- Persistenzlogik darf nicht in Draft-Utilities.
- Persistenzlogik darf nicht in JSON-Export.
- Persistenzlogik darf nicht in JSON-Import.
- HomePage darf nicht dauerhaft zum Persistenz-Monolithen werden.
- Lokaler Draft bleibt primärer Bearbeitungszustand.
- JSON-Datei-Workflow bleibt Standard.
- Optionaler Speicherpfad bleibt opt-in.
- Persistenz-Orchestrator darf Adapter nur nach bewusster Aktivierung nutzen.
- Speicherstatus muss von Downloadstatus unterscheidbar bleiben.
- Speicherfehler dürfen nicht Import-/Exportstatus überlagern.
- Keine automatische Speicherung ohne eigene spätere Entscheidung.
- Keine Speichertechnologie in dieser Phase festlegen.

## 5. Bestehende Modulgrenzen

### 5.1 HomePage
Aktuelle Rolle:
- hält lokalen `scenarioDraft`
- orchestriert Bearbeitung
- bindet Formulare ein
- steuert JSON-Download
- steuert JSON-Import-Prüfung
- hält Statusmeldungen für Download/Import

Grenze:
- HomePage darf später nur Integrationspunkt sein, nicht Träger der gesamten Persistenzlogik.

Spätere erlaubte Rolle:
- Orchestrator aufrufen
- Status anzeigen
- Kontrollpunkt-UI einbinden
- Draft nach bewusstem Laden ersetzen

Nicht erlaubte Rolle:
- direkte Speichertechnologie ansprechen
- Adapterlogik enthalten
- Datenschutz-/Hinweislogik verstreut implementieren
- Speicherung automatisch aus Draft-Änderungen auslösen

### 5.2 Draft-Utilities
Aktuelle Rolle:
- reine lokale Datenoperationen
- Add/Update/Remove
- Nicht-Mutation
- robuste Eingaben

Grenze:
- niemals speichern
- niemals Adapter aufrufen
- niemals localStorage/sessionStorage/IndexedDB/API nutzen
- keine Speicherstatuslogik

### 5.3 JSON-Export
Aktuelle Rolle:
- bewusster Datei-Download
- Export-Payload erzeugen
- Dateiname/Download-Status unterstützen

Grenze:
- kein Ersatz für App-Speicherung
- keine Speicherung im Hintergrund
- kein Adapteraufruf
- keine Speicheraktivierung

### 5.4 JSON-Import
Aktuelle Rolle:
- JSON prüfen
- Importstatus erzeugen
- bewusste Übernahme in lokalen Draft ermöglichen

Grenze:
- importierte Daten nicht automatisch speichern
- keine Speicheraktivierung durch Import
- kein Adapteraufruf
- kein automatisches Überschreiben gespeicherter Daten

### 5.5 Persistenz-Orchestrator
Spätere konzeptionelle Rolle:
- zentrale Koordination des optionalen Speicherpfads
- prüft Aktivierungsstatus
- ruft Adapter nur bei aktivem Speicherpfad
- erzeugt Speicherstatus
- kapselt Speicherfehler
- trennt Speichern, Laden, Löschen, Deaktivieren

Grenze:
- kennt nicht die UI-Struktur im Detail
- ersetzt nicht Draft-Utilities
- ersetzt nicht JSON-Export/-Import
- entscheidet nicht über Speichertechnologie allein

## 6. Erlaubte spätere Datenflüsse

### 6.1 Draft bearbeiten
- Nutzer ändert Formular.
- Draft-Utility aktualisiert lokalen Draft.
- Keine Speicherung.
- Keine Adapter-Nutzung.
- Downloadstatus darf neutralisiert werden.
- Speicherstatus darf später höchstens „ungespeicherte Änderungen“ konzeptionell anzeigen, aber nicht automatisch speichern.

### 6.2 JSON herunterladen
- Nutzer löst Download bewusst aus.
- Export-Utility erzeugt Payload.
- Browser lädt Datei herunter.
- Kein Speicheradapter.
- Keine Speicheraktivierung.

### 6.3 JSON importieren
- Nutzer wählt JSON.
- Import wird geprüft.
- Nutzer übernimmt bewusst in lokalen Draft.
- Keine automatische Speicherung.
- Speicherstatus muss später ggf. klarstellen: importiert ≠ gespeichert.

### 6.4 Speicherung aktivieren
- Nutzer startet Speicheraktivierung bewusst.
- Kontrollpunkte werden angezeigt.
- Nutzer bestätigt.
- Orchestrator setzt Speicherpfad konzeptionell aktiv.
- Kein Speichern ohne weitere bewusste Aktion, außer spätere Phase entscheidet explizit anders.

### 6.5 Einmalig speichern
- Nur nach Aktivierung.
- Nutzer löst Speichern bewusst aus.
- Orchestrator prüft Aktivierung.
- Adapter speichert.
- Statusmeldung zeigt Ergebnis.

### 6.6 Gespeichertes Szenario laden
- Nutzer wählt gespeichertes Szenario.
- Orchestrator lädt über Adapter.
- App zeigt Hinweis auf Ersetzen des lokalen Drafts.
- Nutzer bestätigt Übernahme in Draft.
- Draft wird ersetzt.
- Kein Importstatus als Ersatz für Speicherstatus verwenden.

### 6.7 Speicherung deaktivieren
- Nutzer deaktiviert Speicherpfad bewusst.
- Orchestrator beendet künftige Adapter-Nutzung.
- Gespeicherte Daten bleiben ggf. bestehen, wenn nicht zusätzlich gelöscht.

### 6.8 Gespeicherte Daten löschen
- Nutzer löst Löschen bewusst aus.
- Orchestrator ruft Adapter-Löschung auf.
- Ergebnis wird verständlich gemeldet.
- Lokaler Draft wird dadurch nicht automatisch gelöscht, sofern nicht ausdrücklich bestätigt.

## 7. Nicht erlaubte Datenflüsse
Explizit ausschließen:

- Draft-Änderung speichert automatisch.
- Import speichert automatisch.
- Export aktiviert Speicherung.
- Reset löscht gespeicherte Daten.
- Deaktivieren löscht automatisch Daten ohne Hinweis.
- Speicherfehler wird als Importfehler gemeldet.
- Downloadstatus wird als Speicherstatus verwendet.
- Draft-Utility ruft Adapter auf.
- JSON-Utility ruft Adapter auf.
- HomePage nutzt localStorage direkt.
- Persistenz-Orchestrator wird ohne Aktivierung genutzt.
- Speichertechnologie wird in dieser Phase festgelegt.

## 8. Statusgrenzen
Unterscheide konzeptionell:

### Draft-Status
Beispiele:
- leer
- geändert
- zurückgesetzt
- aus Import übernommen

### Downloadstatus
Beispiele:
- bereit
- Download erfolgreich
- Download nicht möglich
- Downloadfehler

### Importstatus
Beispiele:
- keine Datei geprüft
- Import gültig
- Import mit Warnungen
- Import ungültig
- übernommen

### Speicherstatus
Beispiele:
- storageInactive
- storageActivationRequired
- storageActive
- storageSaving
- storageSaved
- storageError
- storageDisabled

Regel:
Diese Statusarten dürfen später nicht vermischt werden.

## 9. HomePage-Integrationsgrenze
Konzeptionelle Empfehlung:

HomePage darf später:
- Speicherstatus aus Orchestrator anzeigen
- bewusst ausgelöste Speicheraktionen an Orchestrator delegieren
- nach bewusstem Laden/Import den Draft ersetzen
- Kontrollpunkt-Komponenten platzieren

HomePage darf nicht:
- Speicheradapter direkt importieren
- Browser-Speicher direkt ansprechen
- Aktivierungs-/Hinweislogik verstreut halten
- Speicherung automatisch bei jeder Draft-Änderung auslösen
- Speicherstatus mit Import-/Downloadstatus vermischen

## 10. Mögliche spätere Modulstruktur
Nur konzeptionell, keine Dateien anlegen:

- `src/features/scenarios/persistence/`
  - `persistenceAdapter`
  - `persistenceOrchestrator`
  - `persistenceStatusMessages`
  - `persistenceMetadata`
  - `persistenceGuards`

Wichtig:
- Dies ist nur ein Zielbild.
- Keine Dateien anlegen.
- Keine Exporte ergänzen.
- Keine Dependencies.

## 11. Testschnitt für spätere Integration
Konzeptionelle spätere Tests:
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

Keine Tests jetzt anlegen.

## 12. Datenschutz-/Nutzerhinweis-Integration
Konzeptionell vorbereiten:
- Hinweise nicht verstreut in HomePage.
- Hinweis- und Kontrollpunktlogik sollte zentral aus Orchestrator-/Persistence-Konzept ableitbar sein.
- Nutzerhinweise müssen später a11y-tauglich sein.
- Warnung zu gemeinsam genutzten Geräten bleibt Pflicht.
- Sensible-/personenbezogene-Daten-Hinweis bleibt Pflicht.
- Lösch-/Deaktivierungshinweis bleibt Pflicht.
- Speicherort-Hinweis bleibt Pflicht.

## 13. Offene Entscheidungen
Offen bleibt:
- konkrete Speichertechnologie
- konkrete Datei-/Modulstruktur
- ob Orchestrator als reine Utility oder Hook umgesetzt würde
- ob Speicheraktivierung pro Szenario oder global gilt
- ob es mehrere gespeicherte Szenarien geben darf
- ob Auto-Save ausgeschlossen bleibt oder gesondert geprüft wird
- wie Speicherstatus visuell dargestellt würde
- wie Lade-/Ersetzungsbestätigung gestaltet würde
- ob Datenschutzprüfung vor Implementierung verpflichtend wird

## 14. Empfohlener nächster Schritt
Empfohlener nächster Schritt:
**Phase 8.8 · Review der Persistenz-Integrationsgrenzen prüfen**

Ziel:
- prüfen, ob Integrationsgrenzen klar genug sind
- prüfen, ob HomePage, Draft-Utilities, JSON-Export und JSON-Import ausreichend geschützt sind
- prüfen, ob eine spätere Implementierungsvorbereitung möglich ist
- weiterhin keine Speichertechnologie festlegen

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
- keine Speicheraktivierungs-UI
- keine Löschlogik
- keine neue Modulstruktur anlegen
- keine Exporte ergänzen
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 16. Quality-Gate-Hinweis
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
