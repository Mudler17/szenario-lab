# Phase 5.13 Review · JSON-Download-UI-Konzept

## Zweck des Reviews
Dieses Review prüft das konzeptionelle Dokument zur späteren UI-Einbindung des JSON-Downloads. Ziel ist die fachlich-technische Einordnung, ob die geplante UI klar abgegrenzt bleibt und keine Speicherung suggeriert.

## Geprüfter Umfang
Geprüft wurde ausschließlich die Konzeptbeschreibung für die spätere UI des JSON-Downloads:
- Zweck und Abgrenzung der UI
- Einordnung der bestehenden Export-/Download-Bausteine
- Nutzerführung, Hinweise, Meldungen
- Barrierefreiheitsaspekte
- Nicht-Ziele und Architekturgrenzen

Keine Umsetzung und keine Runtime-Integration sind Teil dieses Reviews.

## Geprüfte Dateien
- `docs/JSON_DOWNLOAD_UI_CONCEPT.md`

## Prüfergebnis UI-Konzept
Das UI-Konzept ist grundsätzlich passend.

Positiv:
- Der Zweck der späteren UI ist klar: Sie soll den lokalen Szenario-Draft als JSON-Datei herunterladen lassen.
- Die UI wird korrekt nur als Auslöser verstanden, nicht als Träger der Exportfachlogik.
- `createScenarioExportDraft` und `downloadScenarioExport` sind korrekt als spätere Ablaufbausteine genannt.
- Die Abgrenzung „Download ist nicht Speichern“ ist klar und ausreichend deutlich formuliert.
- Die vorgeschlagene Button-Beschriftung „JSON herunterladen“ ist geeignet und vermeidet Speicher-Missverständnisse.
- Missverständliche Begriffe wie „Speichern“, „Sichern“ und „Export speichern“ werden sinnvoll vermieden.

## Prüfergebnis Architekturgrenze
Die Architekturgrenze ist im Konzept konsistent dokumentiert.

Positiv:
- Exportlogik bleibt bei `createScenarioExportDraft`.
- Downloadlogik bleibt bei `downloadScenarioExport`.
- Kein neues Speicherverständnis und keine Vermischung mit Persistenz.
- Ausdrücklich festgehalten sind:
  - kein LocalStorage
  - keine Backend-Speicherung
  - keine Versionierung
  - kein gemeinsamer Projektstand
  - keine automatische Wiederherstellung in der App
- Nicht-Ziele sind sauber dokumentiert (keine React-Änderung, kein Button in dieser Phase, keine Utility-Änderungen).

## Prüfergebnis Nutzerführung
Die Nutzerführung ist überwiegend nutzerfreundlich und klar.

Positiv:
- Platzierungsvorschlag ist plausibel: bestehender Bearbeitungsbereich oder Nähe zur Vorschau, nicht als neues Hauptmodul.
- Nutzerhinweis trennt Download klar von App-Speicherung.
- Datenschutzhinweis zu personenbezogenen/vertraulichen Inhalten ist sinnvoll.
- Erfolgsmeldung und Fehlermeldungen sind verständlich formuliert.
- Technische `reason`-Werte werden nicht für Rohanzeige empfohlen, sondern als Grundlage für nutzerfreundliche Meldungen.
- Alle bekannten `reason`-Werte aus `downloadScenarioExport` sind berücksichtigt:
  - `missing-export-draft`
  - `missing-payload`
  - `missing-filename`
  - `download-api-unavailable`
  - `payload-not-json-serializable`
  - `download-click-failed`
  - `download-cleanup-failed`

## Prüfergebnis Barrierefreiheit
Die konzeptionelle Berücksichtigung von Barrierefreiheit ist angemessen.

Positiv:
- Klarer Button-Text.
- `aria-live` für Statusmeldungen vorgesehen.
- Fehlermeldungen textlich verständlich.
- Keine rein farbliche Statuscodierung.
- Download-/Datenschutzhinweis nahe am Button vorgesehen.

## Nicht enthalten / weiterhin ausgeschlossen
Weiterhin nicht enthalten und nicht umgesetzt:
- kein Download-Button
- keine Export-UI
- keine React-Einbindung
- kein Import von `downloadScenarioExport` in React
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
- keine Änderung am Szenario-Datenmodell
- keine Änderung an `createScenarioExportDraft`
- keine Änderung an `downloadScenarioExport`
- keine Änderung an Export-Utilities

## Risiken und Hinweise
- Die spätere UI darf Download nicht als „Speichern“ labeln.
- Der Button sollte nicht in einem „Speicher“-Modul platziert werden.
- Statusmeldungen sollten nicht dauerhaft fälschlich Erfolg suggerieren.
- Datenschutz-Hinweis muss knapp, aber sichtbar bleiben.
- Vor einer echten UI-Implementierung sollte entschieden werden, ob der Button eher im Bearbeitungsbereich oder unter der Vorschau platziert wird.
- Optional kann eine kleine Mapping-Utility für `reason` → nutzerfreundlicher Text vorbereitet werden, damit React-Komponenten nicht mit technischen `reason`-Strings überladen werden.

## Empfehlung für nächste Phase
Bevorzugte Empfehlung:
**Phase 5.14 · JSON-Download-Statusmeldungen vorbereiten**

Alternative:
**Phase 5.14 · JSON-Download-UI minimal vorbereiten**

Begründung:
Vor dem Button sollte eine kleine, testbare Mapping-Utility für `result.reason` → nutzerfreundliche Meldung entstehen. So bleibt die spätere React-UI schlank und die technische Fehlersemantik sauber gekapselt.
