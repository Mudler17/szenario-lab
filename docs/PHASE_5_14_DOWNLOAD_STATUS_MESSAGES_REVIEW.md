# Phase 5.14 Review · JSON-Download-Statusmeldungen

## Zweck des Reviews

Dieses Review prüft die in Phase 5.14 ergänzte Mapping-Utility `createJsonDownloadStatusMessage` fachlich und technisch auf Abgrenzung, Robustheit und Testabdeckung. Ziel ist die Bewertung, ob technische Ergebnisobjekte des Download-Adapters in nutzerfreundliche Statusmeldungen übersetzt werden, ohne UI- oder Runtime-Integration vorzuziehen.

## Geprüfter Umfang

- Utility-Verhalten und Mapping-Regeln in `createJsonDownloadStatusMessage.js`
- Testabdeckung in `createJsonDownloadStatusMessage.test.js`
- Export-Grenze im Export-Modul `src/features/scenarios/export/index.js`
- Architekturkonformität mit den bisherigen Phasengrenzen (keine UI/React/Storage-Erweiterung)

## Geprüfte Dateien

- `src/features/scenarios/export/createJsonDownloadStatusMessage.js`
- `src/features/scenarios/export/createJsonDownloadStatusMessage.test.js`
- `src/features/scenarios/export/index.js`

## Prüfergebnis Utility

Die Statusmeldungs-Utility ist grundsätzlich passend umgesetzt. Sie kapselt technische `result`-/`reason`-Werte und stellt nutzerfreundliche Meldungen für eine spätere UI bereit, ohne selbst UI-, Browser- oder Download-Logik auszuführen.

Positiv bewertet:

- reine Mapping-Utility
- rein synchrones Verhalten
- keine DOM-API
- keine Browser-API
- kein Download-Aufruf
- keine React-Abhängigkeit
- keine UI-Auslösung
- keine Speicherung
- Rückgabeformat als Objekt mit `type` und `message`
- plausible Typen `success`, `error`, `info`
- Info-Fallback für fehlendes/ungültiges `result`
- Erfolgsmeldung mit Dateiname bei `ok === true` und `filename`
- generische Erfolgsmeldung bei `ok === true` ohne `filename`
- alle bekannten `reason`-Werte berücksichtigt:
  - `missing-export-draft`
  - `missing-payload`
  - `missing-filename`
  - `download-api-unavailable`
  - `payload-not-json-serializable`
  - `download-click-failed`
  - `download-cleanup-failed`
- generischer Fehler-Fallback für unbekannten `reason`
- generischer Fehler-Fallback für `ok === false` ohne `reason`
- technische Fehlersemantik bleibt von späterer React-UI entkoppelt
- Eingabeobjekt wird nicht mutiert

## Prüfergebnis Tests

Die Tests decken die Kernfälle der Utility stimmig ab.

Positiv bewertet:

- Test für fehlendes `result`
- Test für `null`
- Tests für primitive Werte
- Test für `ok === true` mit `filename`
- Test für `ok === true` ohne `filename`
- alle bekannten `reason`-Werte testabgedeckt
- unbekannter `reason` testabgedeckt
- `ok === false` ohne `reason` testabgedeckt
- Nicht-Mutation testabgedeckt
- Verwendung von `node:test` und `node:assert/strict`
- kein `jsdom`
- keine zusätzlichen Testbibliotheken

## Prüfergebnis Architekturgrenze

Die Export-Grenze bleibt sauber:

- `createJsonDownloadStatusMessage` wird im Export-Index korrekt exportiert.
- Es wird keine UI- oder React-Abhängigkeit eingeführt.
- Das Export-Modul bleibt auf Export-/Download-Hilfslogik begrenzt.

## Nicht enthalten / weiterhin ausgeschlossen

- kein Download-Button
- keine Export-UI
- keine React-Einbindung des Downloads
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
- keine Änderungen am Szenario-Datenmodell
- keine Änderungen an `createScenarioExportDraft`
- keine Änderungen an `downloadScenarioExport`

## Risiken und Hinweise

- Die Utility gibt für fehlendes/ungültiges `result` und für unbekannte Fehler aktuell konstante Objekt-Referenzen zurück. Das ist in der aktuellen Nutzung unproblematisch, könnte aber später gehärtet werden, indem immer neue Objekte zurückgegeben werden.
- Vor einer echten UI-Implementierung sollte entschieden werden, ob Statusmeldungen nach erfolgreichem Download dauerhaft sichtbar bleiben oder nach Nutzeraktion/weiterer Änderung zurückgesetzt werden.
- Die spätere UI sollte weiterhin nicht technische `reason`-Werte anzeigen.
- Die spätere UI sollte die Meldung über `aria-live` ausgeben.

## Empfehlung für nächste Phase

Nächste sinnvolle Phase:

**Phase 5.15 · JSON-Download-UI minimal vorbereiten**

Jetzt kann erstmals eine sehr kleine UI-Integration vorbereitet werden, aber weiterhin begrenzt:

- ein kleiner Exportbereich
- Button „JSON herunterladen“
- Hinweistext Download ≠ Speicherung
- Statusmeldung über `createJsonDownloadStatusMessage`
- keine Speicherung
- kein Import
- kein LocalStorage
