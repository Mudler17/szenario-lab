# Phase 5.7 Review · JSON-Export-Dateinamen prüfen

## 1. Zweck des Reviews

Dieses Review prüft die in Phase 5.7 eingeführte JSON-Export-Dateinamen-Utility.

Ziel von Phase 5.7 war nicht, einen vollständigen JSON-Export oder Download bereitzustellen. Ziel war ausschließlich, eine reine Utility-Funktion vorzubereiten, die aus einem Szenario-Draft und einem Exportzeitpunkt einen sicheren Dateinamen erzeugt.

## 2. Ausgangspunkt

In den vorherigen Phasen wurden vorbereitet:

- JSON-Export-Konzept
- JSON-Export-Payload-Utility
- JSON-Export-Schema
- Quality Gate mit `npm test` und `npm run build`

Weiterhin bewusst nicht vorhanden:

- Download-Button
- Export-UI
- Browser-Blob
- `URL.createObjectURL`
- JSON-Import
- LocalStorage
- Speicherung
- Datenbank
- Backend

## 3. Umgesetzte Utility

In Phase 5.7 wurde folgende Utility ergänzt:

`createScenarioExportFilename(scenarioDraft, options = {})`

Die Funktion erzeugt einen Dateinamen nach dem Muster:

`szenario-lab-[slug]-[YYYY-MM-DD].json`

Beispiel:

`szenario-lab-pilotbereich-kundenservice-2026-01-01.json`

## 4. Geprüfte Eigenschaften

Die Tests prüfen:

- Dateiname wird aus `scenario.name` und `exportedAt` erzeugt
- Leerzeichen werden zu Bindestrichen
- Großbuchstaben werden kleingeschrieben
- Umlaute und `ß` werden vereinfacht
- Sonderzeichen werden entfernt
- mehrere Bindestriche werden reduziert
- `null`-Draft nutzt `export` als Slug
- leerer oder unbrauchbarer Name nutzt `export` als Slug
- Dateiname endet auf `.json`
- Rückgabewert ist ein String
- die Funktion mutiert den Draft nicht

## 5. Bewertung

Die Utility erfüllt den Zweck von Phase 5.7.

Positiv:

- Die Funktion ist klein und rein.
- Sie ist unabhängig von React.
- Sie ist testbar.
- Sie erzeugt einen stabilen Dateinamen.
- Sie berücksichtigt deutsche Umlaute und `ß`.
- Sie nutzt einen robusten Fallback mit `export`.
- Sie verändert den Original-Draft nicht.
- Sie ist ein sinnvoller Zwischenschritt vor Download-Logik.

Begrenzt bleibt:

- kein Datei-Download
- kein Browser-Blob
- kein `URL.createObjectURL`
- kein Export-Button
- keine UI
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
- keine Prüfung, ob `exportedAt` ein gültiger Zeitpunkt ist
- keine Garantie für alle internationalen Schriftsysteme

## 6. Technische Hinweise

Die Utility erzeugt das Datum aus `options.exportedAt` oder aus dem aktuellen Zeitpunkt.

Der Datumsanteil wird als `YYYY-MM-DD` verwendet.

Zu prüfen bleibt später:

- Was soll bei ungültigem `exportedAt` passieren?
- Soll die Funktion bei ungültigem Datum einen Fallback verwenden?
- Soll ein Fehler geworfen werden?
- Soll die Export-Payload denselben Zeitpunkt wie der Dateiname verwenden?
- Soll eine gemeinsame Export-Orchestrierung später Payload und Dateiname mit demselben Zeitstempel erzeugen?

Für Phase 5.7 ist dies kein Blocker.

## 7. Risiken

### Risiko 1 · Dateiname und Payload-Zeitpunkt laufen auseinander

Wenn Payload und Dateiname später getrennt erzeugt werden, könnten unterschiedliche Zeitpunkte entstehen.

Beispiel:

- Payload: `exportedAt = 2026-05-10T08:30:00.000Z`
- Dateiname: `2026-05-10`
- oder bei späterem Timing sogar ein anderes Datum

Daher sollte ein späterer Exportablauf denselben Zeitstempel an beide Utilities übergeben.

### Risiko 2 · Dateinamen-Utility wird mit fertigem Export verwechselt

Die Utility erzeugt nur einen String. Sie ist noch kein Export.

Es gibt noch:

- keinen Download
- keinen Button
- keine Datei
- keine Speicherfunktion

### Risiko 3 · Internationalisierung

Die aktuelle Slug-Logik ist gut für deutschsprachige Namen und einfache lateinische Schrift. Für andere Schriftsysteme müsste später geprüft werden, ob `export` als Fallback ausreicht.

### Risiko 4 · Ungültiges Datum

Wenn `options.exportedAt` ungültig ist, kann die Datumsbildung fehlschlagen. Das sollte vor einer nutzbaren Download-Funktion bewusst behandelt werden.

## 8. Empfehlung

Phase 5.7 gilt als abgeschlossen.

Empfohlene nächste Optionen:

### Option A · Export-Orchestrierung konzeptionell vorbereiten

Noch keine UI und kein Download. Erst klären, wie Payload und Dateiname zusammen erzeugt werden.

Mögliche spätere Funktion:

`createScenarioExportDraft(scenarioDraft, options = {})`

Diese könnte gemeinsam erzeugen:

- `payload`
- `filename`
- `exportedAt`

### Option B · Export-Dateinamen-Utility robuster machen

Mögliche Ergänzungen:

- Umgang mit ungültigem `exportedAt`
- expliziter Fallback bei fehlerhaftem Datum
- Tests für ungültige Datumswerte

### Option C · Download-Logik konzeptionell vorbereiten

Noch nicht implementieren, sondern klären:

- Button-Text
- Nutzerhinweis
- Validierungswarnung
- wann ein Export erlaubt ist
- ob ungültige Drafts exportiert werden dürfen

## 9. Empfehlung für den nächsten Schritt

Empfohlener nächster Schritt:

Phase 5.8 · JSON-Export-Orchestrierung konzeptionell vorbereiten

Begründung:

Payload und Dateiname existieren jetzt als getrennte reine Utilities. Bevor ein Download-Button oder Browser-Download gebaut wird, sollte geklärt werden, wie beide konsistent zusammengeführt werden.

Der nächste Schritt soll weiterhin keine UI und keinen Download einführen.

## 10. Review-Ergebnis

Phase 5.7 gilt als abgeschlossen.

Der aktuelle Stand ist:

- Export-Payload-Utility vorhanden
- Export-Dateinamen-Utility vorhanden
- beide Utilities sind getestet
- keine UI ergänzt
- kein Download ergänzt
- kein JSON-Import ergänzt
- kein LocalStorage ergänzt
- keine Speicherung ergänzt
- Quality Gate bleibt gültig
