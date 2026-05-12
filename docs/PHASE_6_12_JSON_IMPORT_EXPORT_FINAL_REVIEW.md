# Phase 6.12 · JSON-Import/Export fachlich abschließend geprüft

## Prüfgegenstand
Abschließender fachlicher Review der bestehenden lokalen JSON-Import-/Export-Kette ohne neue Features, ohne neue Fachlogik und ohne neue UI.

Geprüfter Scope:
- `src/pages/HomePage.jsx`
- `src/features/scenarios/export/*`
- `src/features/scenarios/import/index.js`
- `src/features/scenarios/editing/import/*`
- `src/features/scenarios/editing/state/*`
- `README.md`
- `ROADMAP.md`

## 1) Export-Kette
Geprüfte Kette:
Lokaler Draft → `createScenarioExportDraft(...)` → Export-Payload → Dateiname → `downloadScenarioExport(...)` → Browser-Download → `createJsonDownloadStatusMessage(...)` → sichtbare Statusmeldung.

Ergebnis:
- Export verwendet den aktuellen lokalen Draft aus React-State (`scenarioDraft`).
- Export-Payload enthält konsistent `exportType`, `formatVersion`, `exportedAt`, `source`, `scenario`.
- Download ist als Browser-Adapter getrennt und löst keine App-Speicherung aus.
- Kein LocalStorage, kein Server-Upload, keine OpenAI-Anbindung.
- Statusmeldung ist nutzerverständlich und sichtbar.
- Statusmeldung nutzt `role="status"` und `aria-live="polite"`.
- Datenschutz-/Vertraulichkeitshinweis ist sichtbar.
- Exportformat bleibt zur Importvalidierung kompatibel (`exportType: "szenario-lab.scenario"`, `formatVersion: 1`).

## 2) Import-Prüfkette
Geprüfte Kette:
Datei auswählen → FileReader liest lokal als Text → `parseScenarioImportJsonText(text)` → `validateScenarioImportPayload(payload)` → `createJsonImportStatusMessage(result)` → Status/Warnung/Fehler anzeigen.

Ergebnis:
- Datei wird lokal mit `FileReader.readAsText(...)` gelesen.
- Kein Server-Upload, kein OpenAI-Aufruf, kein LocalStorage.
- `JSON.parse` ist in Parsing-Utility gekapselt.
- Validierungsfehler werden nicht umgedeutet; Parsing reicht Validierungsergebnis durch.
- Warnungen bleiben nicht-blockierend (`ok: true` mit `warnings`).
- Fehler blockieren die Übernahme (`importResult?.ok === true` als Voraussetzung).
- Statusmeldung ist sichtbar sowie mit `role="status"` und `aria-live="polite"` ausgezeichnet.
- Datei-Auswahl ist beschriftet (`label` + `htmlFor`).
- Button „JSON prüfen“ ist deaktiviert, solange keine Datei gewählt ist.

## 3) Import-Übernahme
Geprüfte Kette:
Gültiges Importergebnis → sichtbarer Warnhinweis → bewusster Klick → `createDraftFromScenario(importResult.scenario)` → `setScenarioDraft(nextDraft)` → `validateScenarioDraftBasics(nextDraft)` → Vorschau aktualisiert → Erfolgsmeldung „nicht gespeichert“.

Ergebnis:
- Übernahmebereich erscheint nur bei `importResult?.ok === true`.
- Keine automatische Übernahme nach Dateiauswahl.
- Keine automatische Übernahme nach erfolgreicher Prüfung.
- `handleAdoptValidatedImport` prüft defensiv `importResult?.ok` und `importResult.scenario`.
- Bei ungültigem Ergebnis keine Übernahme.
- Nach Übernahme wird `validateScenarioDraftBasics` erneut ausgeführt.
- Nach Übernahme wird Download-Status neutral zurückgesetzt.
- Erfolgsmeldung stellt klar: übernommen, aber nicht gespeichert.
- Übernahme ersetzt nur lokalen React-State.
- Keine Speicherung, kein LocalStorage, kein Server-Upload, keine OpenAI-Anbindung, kein automatisches Backup, keine Undo-Funktion, keine Simulation, keine neuen Fachmodule.

## 4) Rundlauf Export → Import → Übernahme
Ergebnis:
- Exportformat und Importvalidierung passen zusammen.
- Pflichtfelder `name`, `description`, `goal` bleiben im Export erhalten und werden im Import gefordert.
- `exportType` und `formatVersion` sind konsistent zwischen Export/Import.
- Warnungen für unbekannte Felder blockieren den Rundlauf nicht.
- Gültige Exporte aus der App sind wieder importierbar.
- Import/Download ersetzen keine Speicherung.

## 5) UI-/Textkonsistenz
Ergebnis:
- Hero-Hinweis beschreibt den aktuellen Stand korrekt.
- JSON-Download-Hinweis: Download ist keine Speicherung.
- JSON-Import-Hinweis: Prüfung ersetzt Draft nicht.
- Übernahmehinweis: aktueller lokaler Draft wird ersetzt.
- Erfolgsmeldung nach Übernahme: nicht gespeichert.
- README/ROADMAP/UI wurden auf Phase 6.12 konsistent fortgeschrieben.
- Keine veraltete Aussage „kein JSON-Import“ im aktuellen Status.

## 6) Accessibility (minimal)
Ergebnis:
- Datei-Input hat sichtbares Label.
- Buttons sind verständlich beschriftet.
- Statusbereiche nutzen `role="status"` + `aria-live="polite"`.
- Warnungen/Fehler sind textlich sichtbar.
- Keine reine Farbcodierung als einziges Signal.
- Tastaturbedienbarkeit bleibt plausibel (Standard-Formelemente/Buttons).

## 7) Dokumentation
Ergebnis:
- README beschreibt den aktuellen Stand mit Phase 6.12.
- ROADMAP bleibt chronologisch und ergänzt Phase 6.12 als erledigt.
- Review-Dokumente bis Phase 6.11 bleiben verlinkt; Phase 6.12 wurde ergänzt.
- Keine offenen Widersprüche zum aktuellen Stand gefunden.

## 8) Technische Grenzen (weiterhin ausgeschlossen)
Gezielt geprüft: keine Verwendung von
- `localStorage`
- `sessionStorage`
- `fetch` / Server-Upload
- `axios` / andere HTTP-Clients
- OpenAI-Anbindung
- Backend-Speicherung
- Simulation
- neuen Fachmodulen
- automatischer Persistenz
- automatischer Importübernahme ohne Nutzeraktion

Ergebnis: Keine Abweichung gefunden.

## 9) Tests / Quality Gate
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnis:
- Beide Befehle erfolgreich.
- Keine Blocker.

## Fachliches Gesamtergebnis
**Phase 6.12 fachlich bestanden. JSON-Import/Export ist als lokale Draft-Import-/Export-Kette abgeschlossen.**
