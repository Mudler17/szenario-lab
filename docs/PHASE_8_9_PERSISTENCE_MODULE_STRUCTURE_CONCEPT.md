# Phase 8.9 · Persistenz-Modulstruktur konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung einer späteren Modulstruktur für Persistenzfunktionen. Ziel ist, Verantwortlichkeiten, Grenzen und mögliche Dateigruppen zu beschreiben, ohne Dateien anzulegen oder Implementierung zu starten.

## 2. Ausgangspunkt
- Phase 8.8 hat die Integrationsgrenzen freigegeben, inklusive konkreter Hinweise für die weitere Architekturarbeit.
- Persistenz darf nicht unkontrolliert in HomePage, Draft-Utilities, JSON-Import oder JSON-Export wachsen.
- Eine spätere Modulstruktur soll Persistenzlogik kapseln und als klarer Integrationspunkt dienen.
- Es gibt weiterhin keine Speicherung, keine Browser-Persistenz, kein Backend und keine API.
- Diese Phase ist rein konzeptionell.

## 3. Leitfrage
Welche spätere Modulstruktur schützt die bestehende App-Architektur am besten vor verstreuter Persistenzlogik, ohne jetzt eine Speichertechnologie oder Implementierung festzulegen?

## 4. Strukturprinzipien
- Persistenzlogik bekommt später einen eigenen Feature-Bereich.
- Draft-Utilities bleiben speicherfrei.
- JSON-Export bleibt speicherfrei.
- JSON-Import bleibt speicherfrei.
- HomePage bleibt Integrationspunkt, nicht Persistenz-Monolith.
- Speicheradapter werden später technologieneutral gekapselt.
- Statusmeldungen werden nicht mit Import-/Downloadstatus vermischt.
- Guard-Logik verhindert verdeckte Speicherung.
- Metadaten bleiben getrennt von Nutzer-/Hinweisstatus.
- Keine Datei wird in dieser Phase angelegt.
- Keine Technologieentscheidung wird getroffen.

## 5. Empfohlenes späteres Modul-Zielbild

Nur konzeptionell, keine Dateien anlegen:

```text
src/features/scenarios/persistence/
  README.md
  index.js
  adapter/
    persistenceAdapterContract.js
    noPersistenceAdapter.js
  orchestration/
    persistenceOrchestrator.js
    persistenceGuards.js
  metadata/
    persistenceMetadata.js
    storageAcknowledgement.js
  status/
    persistenceStatus.js
    persistenceStatusMessages.js
  __tests__/
    persistenceGuards.test.js
    persistenceStatusMessages.test.js
```

## 6. Verantwortungsrahmen der späteren Dateigruppen

### 6.1 `adapter/`
- Kapselt künftig die technische Anbindung an eine **später** auswählbare Speichertechnologie.
- Definiert einen neutralen Contract (`persistenceAdapterContract.js`) für `save`, `load`, `clear` oder vergleichbare Operationen (nur als spätere Schnittstellenidee).
- Enthält initial einen bewusst passiven `noPersistenceAdapter.js`, damit ohne Aktivierung keine Speicherung erfolgt.
- Enthält keine UI-Logik, keine Formvalidierung und keine Domain-Bearbeitungslogik.

### 6.2 `orchestration/`
- Bündelt später den fachlichen Ablauf rund um bewusst ausgelöste Persistenzaktionen.
- `persistenceOrchestrator.js` dient als einziger Ablaufpunkt zwischen UI-Triggern und Adapter-Aufrufen.
- `persistenceGuards.js` schützt Grenzen: keine implizite Speicherung bei Draft-Änderungen, Import, Export oder Seitenaufbau.
- Enthält keine eigene Speichertechnologie und keine Vermischung mit JSON-Import-/Export-Orchestrierung.

### 6.3 `metadata/`
- Hält später strukturierte Persistenz-Metadaten (z. B. technische Kennzeichen, Zeitstempel- oder Herkunftsmarker) getrennt von UI-Status.
- `storageAcknowledgement.js` kann später explizite Nutzerbestätigungen modellieren, ohne Import-/Downloadstatus zu beeinflussen.
- Verhindert, dass Metadaten ungeordnet in HomePage-State oder Draft-Objekte einfließen.

### 6.4 `status/`
- Kapselt später persistenzspezifische Statusmodelle und nutzerfreundliche Meldungen.
- Trennung zu bestehenden Import-/Download-Meldungen bleibt erhalten.
- Sorgt dafür, dass Persistenzgründe und Persistenzfehler nicht als Import- oder Exportstatus fehlgedeutet werden.

### 6.5 `index.js` und `README.md`
- `index.js` wird später als kontrollierter öffentlicher Entry-Point genutzt.
- `README.md` dokumentiert Grenzen, Aktivierungsprinzip, Nicht-Ziele und Schnittstellenregeln innerhalb des Persistenzbereichs.
- Ziel: klare Orientierung ohne Querverteilung der Persistenzverantwortung in fachfremde Module.

## 7. Integrationsgrenzen zur bestehenden App
- `src/pages/HomePage.jsx` bleibt Integrations- und Verdrahtungspunkt, aber ohne direkte Speicherdetails.
- `src/features/scenarios/editing/state/*` bleibt zuständig für lokalen Draft im Arbeitsspeicher.
- `src/features/scenarios/import/index.js` bleibt zuständig für Datei-Importprüfung und bewusste Draft-Übernahme.
- `src/features/scenarios/export/index.js` bleibt zuständig für Export-/Downloadablauf.
- `src/features/scenarios/editing/index.js` und `src/domain/seeds/exampleScenario.js` bleiben persistenzneutral.

## 8. Guard-Regeln (konzeptionell)
- Keine automatische Speicherung bei Feldänderung.
- Keine automatische Speicherung nach JSON-Import.
- Keine automatische Speicherung beim JSON-Export/Download.
- Keine Speicherung beim initialen Laden der App.
- Persistenz bleibt ein später bewusst aktivierbarer, expliziter Pfad.

## 9. Abgrenzung / Nicht-Ziele dieser Phase
- Keine Implementierung der beschriebenen Struktur.
- Kein Anlegen von Dateien unter `src/features/scenarios/persistence/`.
- Keine Erweiterung bestehender Exporte.
- Keine Speichertechnologieauswahl.
- Kein LocalStorage, kein SessionStorage, kein IndexedDB.
- Kein Backend, keine API, keine Datenbank.
- Keine UI für Speicheraktivierung.
- Keine Änderungen an JSON-Import/Export-Verhalten.

## 10. Ergebnis der Phase
Die spätere Persistenz-Modulstruktur ist konzeptionell vorbereitet: Verantwortlichkeiten, Grenzen und mögliche Dateigruppen sind dokumentiert. Die bestehende App-Architektur bleibt unverändert, und Persistenz bleibt weiterhin vollständig unimplementiert.
