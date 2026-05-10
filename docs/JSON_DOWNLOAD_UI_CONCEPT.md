# JSON-Download-UI · Konzept

## 1. Zweck
Die spätere UI soll Nutzenden ermöglichen, den aktuellen lokalen Szenario-Draft als JSON-Datei herunterzuladen.
Die UI ist dabei ausschließlich ein Auslöser für bereits vorbereitete Export-Logik:
- `createScenarioExportDraft`
- `downloadScenarioExport`

## 2. Ausgangspunkt
Die fachliche Exportlogik ist vorbereitet.
Die technische Download-Utility ist vorbereitet und gehärtet.
Es fehlt noch die UI-Einbindung.

## 3. Zentrale Abgrenzung
Download ist nicht Speichern.

Download bedeutet:
- Datei wird lokal auf dem Gerät der nutzenden Person abgelegt
- kein LocalStorage
- keine Backend-Speicherung
- keine Versionierung
- kein gemeinsamer Projektstand
- keine automatische Wiederherstellung in der App

## 4. Spätere UI-Position
Der spätere Download sollte zunächst im bestehenden Bearbeitungsbereich oder in der Nähe der Vorschau erscheinen, nicht als neues Hauptmodul.

Begründung:
Der Export bezieht sich auf den aktuell sichtbaren lokalen Draft.
Die Funktion sollte nicht wie ein separates Speicher- oder Projektmodul wirken.

Mögliche spätere Platzierung:
- unterhalb der Draft-Bearbeitung
- neben „Draft auf Original zurücksetzen“
- oder in einem kleinen Export-Hinweisbereich unterhalb der Vorschau

Noch keine Umsetzung.

## 5. Spätere UI-Beschriftung
Vorschlag für Button-Text:
„JSON herunterladen“

Nicht bevorzugt:
- „Speichern“
- „Sichern“
- „Export speichern“

Begründung:
„Speichern“ kann fälschlich als App-interne Speicherung verstanden werden.

## 6. Spätere Nutzerhinweise
Vor oder neben dem Button sollte ein kurzer Hinweis stehen:

„Lädt den aktuellen lokalen Draft als JSON-Datei auf dein Gerät herunter. Dies ist keine Speicherung in der App.“

Zusätzlich Datenschutzhinweis:
„Prüfe vor dem Download, ob der Entwurf personenbezogene oder vertrauliche Informationen enthält.“

## 7. Spätere Status- und Fehlermeldungen
Bei Erfolg:
„JSON-Datei wurde zum Download vorbereitet: [filename]“

Bei Fehlern:
- `missing-export-draft`:
  „Es ist kein Export-Entwurf vorhanden.“
- `missing-payload`:
  „Die Exportdaten konnten nicht vorbereitet werden.“
- `missing-filename`:
  „Der Dateiname konnte nicht erstellt werden.“
- `download-api-unavailable`:
  „Der Download wird in dieser Browser-Umgebung nicht unterstützt.“
- `payload-not-json-serializable`:
  „Die Exportdaten konnten nicht als JSON serialisiert werden.“
- `download-click-failed`:
  „Der Browser konnte den Download nicht starten.“
- `download-cleanup-failed`:
  „Der Download wurde versucht, aber das technische Aufräumen war nicht vollständig erfolgreich.“

Wichtig:
Die UI sollte technische Gründe nicht roh anzeigen, sondern nutzerfreundliche Meldungen verwenden.

## 8. Spätere technische Ablaufskizze
Nur konzeptionell:

1. Nutzer klickt auf „JSON herunterladen“.
2. UI erzeugt aus dem aktuellen `scenarioDraft` einen Export-Draft:
   `createScenarioExportDraft(scenarioDraft)`
3. UI ruft `downloadScenarioExport(exportDraft)` auf.
4. UI wertet `result.ok` und `result.reason` aus.
5. UI zeigt Erfolg oder Hinweis.
6. Keine Speicherung.

## 9. Barrierefreiheit
Konzeptionell festhalten:
- Button klar beschriften
- Statusmeldung über `aria-live` vorbereiten
- Fehlermeldungen textlich verständlich
- keine rein farbliche Statuscodierung
- Datenschutz-/Download-Hinweis sichtbar nahe am Button

## 10. Nicht Teil von Phase 5.13
- keine UI-Implementierung
- kein Button
- keine React-Änderung
- kein Import von `downloadScenarioExport` in React
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
- keine Änderung am Szenario-Datenmodell
- keine Änderung an Export-Utilities

## 11. Ergebnis von Phase 5.13
Phase 5.13 liefert die fachlich-technische Grundlage für eine spätere minimale UI-Einbindung, ohne sie bereits umzusetzen.


## 12. Umsetzungsstand Phase 5.14
Phase 5.14 bereitet die nutzerfreundliche Übersetzung von Download-Ergebnissen vor. Eine spätere UI soll diese Meldungen nutzen können, ohne technische reason-Werte selbst interpretieren zu müssen.
