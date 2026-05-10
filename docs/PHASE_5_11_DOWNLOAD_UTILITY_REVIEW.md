# Phase 5.11 Review · JSON-Download-Utility

## Zweck des Reviews
Dieses Review prüft die in Phase 5.11 ergänzte Utility `downloadScenarioExport(exportDraft, options = {})` als technischen Browser-Adapter nach `createScenarioExportDraft`.

Ziel ist die fachliche Abgrenzung und technische Plausibilisierung, ohne neue UI, ohne React-Einbindung und ohne Änderungen an Export-Fachlogik.

## Geprüfter Umfang
- Implementierung der Utility `downloadScenarioExport`.
- Testabdeckung in `downloadScenarioExport.test.js`.
- Abgrenzung gegenüber Fachlogik, UI und Persistenz.

Nicht Teil dieses Reviews:
- Einbau eines Download-Buttons.
- Integration in React-Komponenten.
- JSON-Import, LocalStorage oder andere Speicherpfade.

## Geprüfte Dateien
- `src/features/scenarios/export/downloadScenarioExport.js`
- `src/features/scenarios/export/downloadScenarioExport.test.js`

## Prüfergebnis Utility
Die Utility ist grundsätzlich passend umgesetzt.

Positiv geprüft:
- nimmt ein fertiges `exportDraft` entgegen.
- prüft fehlendes `exportDraft` (`missing-export-draft`).
- prüft fehlendes `payload` (`missing-payload`).
- prüft fehlenden/leeren `filename` (`missing-filename`).
- prüft fehlende Browser-Download-APIs (`download-api-unavailable`).
- serialisiert mit `JSON.stringify(payload, null, 2)`.
- erzeugt einen Blob mit `application/json;charset=utf-8`.
- nutzt `URL.createObjectURL`.
- erzeugt ein temporäres `a`-Element.
- setzt `href` und `download`.
- führt `click()` aus.
- entfernt den Link wieder.
- ruft `URL.revokeObjectURL` auf.
- gibt kontrollierte Ergebnisobjekte zurück (`ok: false` mit reason / `ok: true` mit filename).
- mutiert `exportDraft`, `payload` oder `filename` nicht.

Architekturbezug:
Die Utility bleibt ein rein technischer Adapter und bestimmt keine Exportdaten, keine Dateinamen und keine Speicherlogik.

## Prüfergebnis Tests
Die Tests sind für Phase 5.11 insgesamt stimmig und decken die Kernanforderungen ab.

Positiv geprüft:
- Fehlerfälle werden abgedeckt:
  - fehlender `exportDraft`
  - fehlendes `payload`
  - fehlender/leerer `filename`
  - fehlende Browser-APIs
  - nicht serialisierbares Payload
- erfolgreicher Download-Ablauf wird geprüft.
- Blob-MIME-Type wird geprüft.
- `createObjectURL`, Link-Erzeugung, `download`-Attribut, `click`, Entfernen und `revokeObjectURL` werden geprüft.
- es wird geprüft, dass `payload` und `filename` nicht mutiert werden.
- Tests bleiben bei `node:test` und `node:assert/strict`.
- es wurde kein `jsdom` eingeführt.

## Architekturgrenze
Explizit bestätigt:
- keine UI
- kein Button
- keine React-Einbindung
- kein Import
- kein LocalStorage
- keine Speicherung
- keine Änderung an `createScenarioExportDraft`
- keine Änderung am Szenario-Datenmodell

## Nicht enthalten / weiterhin ausgeschlossen
Weiterhin nicht enthalten:
- Download-UI oder Bedienfläche.
- Importpfade für JSON.
- Persistenzmechanismen (inkl. LocalStorage).
- Fachliche Erweiterung des Szenario-Modells.

## Risiken und Hinweise
Wichtiger Hinweis für spätere Härtung:
Die aktuelle Utility ruft `URL.revokeObjectURL` nach `link.click()` und `removeChild()` auf.

Für eine spätere Härtungsphase sollte geprüft werden, ob Cleanup robuster über `try/finally` abgesichert wird. Das ist kein Blocker für Phase 5.11, aber vor einer UI-Einbindung sinnvoll.

## Empfehlung für nächste Phase
Empfohlen wird vor einer UI-Einbindung:
- entweder eine kleine Härtungsphase für robustes Cleanup,
- oder die Härtung direkt in der nächsten technischen Phase fest einzuplanen.

Bevorzugte nächste Phase:
**Phase 5.12: JSON-Download-Cleanup härten**.
