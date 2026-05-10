# Phase 5.12 Review · JSON-Download-Cleanup

## Zweck des Reviews
Dieses Review bewertet die in Phase 5.12 umgesetzte Härtung des Cleanup-Verhaltens der JSON-Download-Utility. Ziel ist die fachlich-technische Einordnung, ob das Fehler- und Aufräumverhalten robust genug umgesetzt wurde, ohne die Architekturgrenzen zu erweitern.

## Geprüfter Umfang
Geprüft wurden ausschließlich:
- die technische Download-Utility für Browser-seitiges JSON-Ausleiten,
- die zugehörigen Tests für Fehler- und Cleanup-Pfade,
- sowie die Dokumentation des Projektstatus.

Nicht Gegenstand dieses Reviews sind neue Features, UI-Implementierungen oder Änderungen an Export-Fachlogik.

## Geprüfte Dateien
- `src/features/scenarios/export/downloadScenarioExport.js`
- `src/features/scenarios/export/downloadScenarioExport.test.js`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Utility
Die Cleanup-Härtung ist grundsätzlich passend umgesetzt.

Bewertung im Detail:
- Die Utility bleibt ein technischer Browser-Adapter nachgelagert zu `createScenarioExportDraft`.
- Sie übernimmt weiterhin keine Exportdaten-, Dateinamen- oder Speicherlogik.
- Die bestehende Fehlerlogik bleibt erhalten:
  - `missing-export-draft`
  - `missing-payload`
  - `missing-filename`
  - `download-api-unavailable`
  - `payload-not-json-serializable`
- Das Cleanup ist robuster abgesichert:
  - `link.click()` wird kontrolliert versucht.
  - `removeChild(link)` wird auch nach `click`-Fehlern versucht.
  - `URL.revokeObjectURL(objectUrl)` wird auch dann versucht, wenn `click()` fehlschlägt.
  - `URL.revokeObjectURL(objectUrl)` wird ebenso weiterhin versucht, wenn `removeChild()` fehlschlägt.
- Ergebnisobjekte bleiben kontrolliert und explizit:
  - bei Klick-Fehlern: `{ ok: false, reason: 'download-click-failed' }`
  - bei Cleanup-Fehlern nach erfolgreichem Klick: `{ ok: false, reason: 'download-cleanup-failed' }`
- Die Priorisierung ist korrekt: Klick-Fehler haben Vorrang vor Cleanup-Fehlern.
- `payload`, `filename` und `exportDraft` bleiben unverändert.

Damit ist das Verhalten vor späterer UI-Einbindung robuster als zuvor.

## Prüfergebnis Tests
Die Testabdeckung für die Utility ist konsistent mit der Härtung erweitert.

Bewertung im Detail:
- Bestehende fachliche Tests wurden nicht entwertet.
- Neue Cleanup-Tests sind vorhanden.
- Klick-Fehler werden geprüft.
- `removeChild`-Fehler werden geprüft.
- `revokeObjectURL`-Fehler werden geprüft.
- Kombinierte Fehlerfälle werden geprüft.
- Die Priorisierung `download-click-failed` vor `download-cleanup-failed` wird explizit geprüft.
- Tests bleiben beim nativen Setup mit `node:test` und `node:assert/strict`.
- Kein `jsdom`.
- Keine zusätzlichen Testbibliotheken.

## Architekturgrenze
Die Utility verbleibt innerhalb der vorgesehenen Architekturgrenze eines technischen Browser-Adapters.

Explizit bestätigt:
- keine UI
- kein Button
- keine React-Einbindung
- kein Import
- kein LocalStorage
- keine Speicherung
- keine Änderung an `createScenarioExportDraft`
- keine Änderung an `createScenarioExportPayload`
- keine Änderung an `createScenarioExportFilename`
- keine Änderung am Szenario-Datenmodell

## Nicht enthalten / weiterhin ausgeschlossen
Nicht enthalten und weiterhin ausgeschlossen in dieser Phase:
- Implementierung eines Download-Buttons
- Aufbau einer Export-UI
- React-Integration des Downloads
- JSON-Import
- Persistenz (inkl. LocalStorage)
- Fachliche Erweiterungen am Szenario-Modell

## Risiken und Hinweise
Der Kernfall ist jetzt abgedeckt.

Optionaler späterer Randfall:
- Es kann als Mikro-Härtung geprüft werden, ob auch ein Fehler bei `document.body.appendChild(link)` noch zu garantiertem `URL.revokeObjectURL(objectUrl)` führt, da `objectUrl` bereits vorher erzeugt wird.

Das ist **kein Blocker** für Phase 5.12, sondern ein möglicher späterer Feinpunkt vor sehr strenger Produktionsreife.

## Empfehlung für nächste Phase
Nächste sinnvolle Phase:
- **Phase 5.13 · JSON-Download-UI konzeptionell vorbereiten**

Weiterhin noch nicht direkt umsetzen:
- keinen Button implementieren
- keine React-Einbindung direkt einbauen
