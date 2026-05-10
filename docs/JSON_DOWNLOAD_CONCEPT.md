# JSON Download Concept (Phase 5.10)

## Zweck des späteren JSON-Downloads
Der spätere JSON-Download soll es ermöglichen, einen bereits orchestrierten Export-Entwurf (`exportDraft`) als Datei im Browser bereitzustellen.
Die fachliche Exportstruktur ist dabei bereits vorhanden; der Download ist eine technische Ausleitungsfunktion in die Browser-Umgebung.

## Abgrenzung zur vorhandenen Export-Orchestrierung
Die vorhandene Export-Orchestrierung endet bei `createScenarioExportDraft`.
Diese Utility führt bereits zusammen:
- `payload`
- `filename`
- `exportedAt`

Damit ist die fachlich-strukturelle Vorbereitung abgeschlossen. Der spätere Download setzt erst danach an.

## Warum Download ein technischer Browser-Adapter ist
Der Download ist kein Domänen- oder Exportfachthema, sondern ein Infrastruktur-/Umgebungsthema des Browsers.
Er übersetzt ein fertiges `exportDraft` in einen konkreten Download-Vorgang innerhalb der Laufzeitumgebung.

## Verantwortung des späteren Download-Adapters
Der spätere Download-Adapter soll:
- ein fertiges `exportDraft` entgegennehmen
- den technischen Download-Vorgang im Browser ausführen
- ein kontrolliertes Ergebnisobjekt zurückgeben (Erfolg/Fehlerhinweis)

## Verantwortung, die **nicht** beim Download-Adapter liegt
Der spätere Download-Adapter soll **nicht**:
- fachliche Exportdaten bestimmen oder verändern
- Dateinamensregeln definieren
- Exportzeitpunkt fachlich orchestrieren
- Importlogik übernehmen
- lokale Persistenz/LocalStorage-Verhalten übernehmen

## Konzeptioneller Ablauf
Szenario-Draft
→ `createScenarioExportDraft`
→ `payload` + `filename` + `exportedAt`
→ späterer Download-Adapter
→ JSON-Datei im Browser

## Mögliche spätere Schnittstelle
Beispielhaft kann eine technische Adapterfunktion so aussehen:
- `downloadScenarioExport(exportDraft)`

## Erwartetes späteres Ergebnisformat
Beispielhafte Rückgabe bei Erfolg:
- `{ ok: true, filename }`

Beispielhafte Rückgabe bei kontrolliertem Hinweis-/Fehlerfall:
- `{ ok: false, reason }`

## Datenschutz- und Sicherheitshinweis
Die spätere JSON-Datei kann sensible Organisationsinformationen enthalten.
Personenbezogene Daten sollen in Exportinhalten vermieden werden.
Der lokale Speicherort einer heruntergeladenen Datei liegt außerhalb der App-Kontrolle.

## Klare Phasengrenze (Phase 5.10)
Nicht Teil von Phase 5.10 sind:
- Implementierung einer Download-Utility
- UI-Änderungen
- Download-Button
- Browser-Blob
- `URL.createObjectURL`
- `JSON.stringify` im Anwendungscode
- JSON-Import
- LocalStorage
- Speicherung
