# Phase 10.3 · Browserlokale Draft-Speicherung nachschärfen

## Ziel
Die bestehende browserlokale Speicherung des aktuellen Szenario-Drafts via `localStorage` wird stabilisiert und testseitig gehärtet – ohne neue Produktfunktion.

## Anlass aus Phase 10.2
Die Review aus Phase 10.2 hat die Grundfunktion freigegeben, aber gezielte Nachschärfungen empfohlen: robustere Fehlerbehandlung im Adapter, breitere Negativtests und ein Guard gegen unerwünschtes Initial-Überschreiben beim Hydrationsstart.

## Geänderte Dateien
- `src/features/scenarios/persistence/adapter/localStorageDraftAdapter.js`
- `src/features/scenarios/persistence/__tests__/localStorageDraftAdapter.test.js`
- `src/pages/HomePage.jsx`
- `README.md`
- `ROADMAP.md`

## Technische Nachschärfungen
- Defensive Behandlung von `localStorage`-Zugriffen über Getter und Methoden (`setItem`, `getItem`, `removeItem`).
- Klare Unterscheidung im Ladepfad:
  - ungültiges JSON → `draftInvalid`
  - nicht verfügbare/werfende Storage-Zugriffe → `storageUnavailable`
- Öffentliche Adapter-API bleibt unverändert (`kind`, `storageMode`, `isPersistenceActive`, `isAvailable`, `saveScenarioDraft`, `loadScenarioDraft`, `clearScenarioDraft`, Alias-Methoden, `listSavedScenarios`, `getStorageInfo`).
- HomePage-Hydration-Guard ergänzt, damit ein bereits gespeicherter Draft beim Initialisieren nicht sofort durch einen Initial-Save überschrieben wird.

## Tests
Erweiterte Tests für:
- Adapter-Metadaten (`kind`, `storageMode`, `isPersistenceActive`)
- `getStorageInfo`
- `listSavedScenarios`
- Alias-Methoden (`saveScenario`, `loadScenario`, `deleteScenario`)
- Storage-unavailable-Fälle
- werfenden `localStorage`-Getter
- werfendes `setItem`
- werfendes `getItem`
- werfendes `removeItem`
- ungültiges JSON
- Quelltext-Negativtest gegen Backend/API/Netzwerk/LLM/DOM-Abhängigkeiten

## Quality Gate
- `npm test` grün
- `npm run build` grün

## Negativ-Liste
Nicht enthalten in Phase 10.3:
- keine Mehrszenario-Verwaltung
- kein Backend
- keine Accounts
- keine API
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine UI-Umstrukturierung
- keine neue Produktfunktion

## Anschlusslogik
Als nächster Schritt folgt Phase 10.4: Review der nachgeschärften browserlokalen Draft-Speicherung.
