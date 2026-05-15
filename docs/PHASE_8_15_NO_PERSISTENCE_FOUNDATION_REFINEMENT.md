# Phase 8.15 · NoPersistence-Grundlage nachschärfen

## 1. Ziel der Phase
Nachschärfung der in Phase 8.14 identifizierten Hinweise zur NoPersistence-/Guard-/Status-Grundlage.

## 2. Ausgangspunkt
- Phase 8.13 implementierte die erste NoPersistence-Grundlage.
- Phase 8.14 gab diese Grundlage mit Hinweisen frei.
- Phase 8.15 setzt nur kleine Nachschärfungen um.
- Weiterhin keine echte Speicherung.

## 3. Umgesetzte Nachschärfungen
- NoPersistenceAdapter API erweitert/angeglichen
- Statuswerte ergänzt
- Guard-Aktionen expliziter gemacht
- Statusmeldungen nutzernäher formuliert
- Tests gegen Browser-API-Zugriffe ergänzt
- Tests für Nicht-Speicheraktionen ergänzt

## 4. NoPersistenceAdapter
- Zusätzliche Methoden ergänzt: `isAvailable`, `saveScenario`, `loadScenario`, `deleteScenario`, `listSavedScenarios`, `getStorageInfo`.
- Alte Methoden bleiben kompatibel: `saveScenarioDraft`, `loadScenarioDraft`, `clearScenarioDraft` als nicht-speichernde Aliasse.
- Kein echtes Speichern/Laden/Löschen.
- Keine Browser-/Backend-APIs.
- `storageMode: none` und `getStorageInfo()` mit `available: false`, `persistent: false`.

## 5. Guards
- Persistence-Aktionen explizit: Save/Load/Delete/List.
- Non-Persistence-Aktionen explizit: DraftChanged/JSONImported/JSONExported/AppStarted/DraftReset.
- Klassifikation über `isPersistenceAction` und `isNonPersistenceAction`.
- Speicheraktionen werden blockiert, Nicht-Speicheraktionen nur klassifiziert.
- Patternprüfung in `isPersistenceTechnologyBlocked` bleibt eine einfache Heuristik ohne Sicherheitsgarantie.

## 6. Status und Meldungen
- Ergänzt: `storageInactive`, `storageBlocked`, `storageUnavailable`.
- `NOT_ACTIVE` bleibt aus Kompatibilitätsgründen erhalten.
- Meldungen verwenden „JSON herunterladen“.
- Keine Erfolgsmeldung über gespeicherte Daten.

## 7. Tests
- NoPersistenceAdapter-Tests für neue API ergänzt.
- Browser-API-Negativtests ergänzt (`localStorage`, `sessionStorage`, `indexedDB`, `fetch`).
- Guard-Tests für Non-Persistence-Aktionen ergänzt.
- Statusmessage-Tests für neue Statuswerte ergänzt.

## 8. Nicht umgesetzt
- keine echte Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine API
- keine UI
- keine HomePage-Anbindung
- keine JSON-Export-/Importänderung
- kein Auto-Save
- keine Speicheraktivierung

## 9. Quality Gate
- `npm test`: bestanden
- `npm run build`: bestanden
- Ergebnis: alle Tests bestanden (sichtbar über Node-Test-Summary), Build erfolgreich.

## 10. Entscheidung
Phase 8.15 ist umgesetzt: Tests grün, Build grün, keine echte Speicherung eingeführt und keine HomePage-/UI-/Import-/Export-Änderung ergänzt.

## 11. Empfohlener nächster Schritt
Phase 8.16 · Review der nachgeschärften NoPersistence-Grundlage prüfen

## 12. Negativ-Liste
- keine echte Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine API
- keine Migration
- keine UI
- keine CSS-Änderung
- keine HomePage-Anbindung
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- kein Auto-Save
- keine Speicheraktivierung
- keine OpenAI-Anbindung
- keine Simulation
- keine Strategie-Implementierung
- keine Report-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
