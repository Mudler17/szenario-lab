# JSON-Import-Parsing · Konzeptvorbereitung (Phase 6.4)

## 1. Zweck
Dieses Dokument bereitet die **nächste Stufe der JSON-Import-Kette** vor: das Parsing von Dateiinhalt als Text bis zur Weitergabe eines strukturierten Ergebnisobjekts.

Ausgangslage nach Phase 6.3:
- `validateScenarioImportPayload` existiert als reine Utility für **bereits geparste** JSON-Payloads.

Ziel von Phase 6.4:
- noch **keine Implementierung**,
- sondern ein klarer Vertrag für eine spätere Parsing-Utility.

## 2. Klare Importkette (fachlich)
Die spätere Kette soll explizit und getrennt aufgebaut sein:

1. **Dateiinhalt/Text** liegt vor (z. B. als String aus späterer Upload-Logik).
2. **`JSON.parse`** versucht, den Text in einen JavaScript-Wert zu überführen.
3. **`validateScenarioImportPayload`** prüft diesen geparsten Wert fachlich/strukturell.
4. Es entsteht ein **Result-Objekt** der Parsing-Utility.
5. Dieses Result wird später in **UI-Meldungen** übersetzt.
6. Erst danach erfolgt ggf. eine **bewusste Draft-Übernahme** durch die Nutzenden.

Wichtig: Validierung und Parsing bedeuten noch **keine** Übernahme.

## 3. Abgrenzung in Phase 6.4
Nicht Teil dieser Phase:
- keine UI,
- kein Datei-Upload,
- kein `FileReader`,
- keine Speicherung,
- kein `LocalStorage`,
- keine automatische Draft-Übernahme,
- keine OpenAI-/Server-Anbindung.

Damit bleibt Phase 6.4 rein konzeptionell und technisch sauber von Browser- und Persistenzthemen getrennt.

## 4. Zielvertrag für spätere Parsing-Utility
Vorgeschlagene spätere Utility:

`parseScenarioImportJsonText(jsonText)`

### 4.1 Eingabe
- `jsonText`: String mit dem erwarteten Dateiinhalt.

### 4.2 Verhalten
1. JSON-Syntax prüfen via `JSON.parse`.
2. Bei Syntaxfehlern ein eigenes, nutzerorientiertes Fehlerobjekt zurückgeben.
3. Bei erfolgreichem Parsing den geparsten Wert an `validateScenarioImportPayload` weitergeben.
4. Ergebnis der Validierungs-Utility konsistent zurückgeben.

### 4.3 Erfolgsfall
```js
{
  ok: true,
  scenario,
  warnings
}
```

### 4.4 Fehlerfall: ungültige JSON-Syntax
```js
{
  ok: false,
  reason: "invalid-json-syntax",
  message: "Die Datei enthält kein gültiges JSON."
}
```

### 4.5 Fehlerfall: JSON syntaktisch gültig, aber Szenario ungültig
- Das Ergebnis von `validateScenarioImportPayload` wird **unverändert weitergereicht**.
- Dadurch bleibt die Reason-/Message-Logik zentral in der bestehenden Validierungs-Utility.

## 5. Rollenaufteilung (später)
Saubere Trennung für spätere Implementierung:

- **Parsing-Utility** (`parseScenarioImportJsonText`):
  - zuständig für Text → `JSON.parse` → Validierungsaufruf,
  - kennt nur Parsing- und Weiterleitungslogik.

- **Validierungs-Utility** (`validateScenarioImportPayload`):
  - zuständig für Struktur-/Fachprüfung des geparsten Werts,
  - liefert `ok`, `reason`, `message`, `warnings`, `scenario` nach bestehendem Vertrag.

- **Spätere UI-Schicht**:
  - zeigt Meldungen,
  - steuert bewusste Übernahme,
  - führt keine implizite Speicherung durch.

## 6. Testfälle für spätere Implementierung
Folgende Tests sollen in der Implementierungsphase abgedeckt werden:

1. **Gültiger JSON-Text**
   - `JSON.parse` erfolgreich,
   - Validierung erfolgreich,
   - `ok: true` mit `scenario` und `warnings`.

2. **Syntaktisch ungültiger JSON-Text**
   - `JSON.parse` schlägt fehl,
   - `ok: false`, `reason: "invalid-json-syntax"`.

3. **Leerer Text**
   - Parsingfehler,
   - ebenfalls `invalid-json-syntax`.

4. **JSON-Array**
   - `JSON.parse` erfolgreich,
   - Validierung schlägt mit passendem Reason fehl (aus `validateScenarioImportPayload`).

5. **Gültiges JSON, aber falscher `exportType`**
   - Parsing erfolgreich,
   - Validierungsfehler wird durchgereicht.

6. **Gültiges JSON mit Warnungen**
   - Parsing + Validierung erfolgreich,
   - `warnings` enthalten erwartete Hinweise.

7. **Keine Mutation der validierten Struktur**
   - Sicherstellen, dass weder Parsing- noch Validierungskette die Eingabestruktur unbemerkt mutiert,
   - insbesondere Referenztrennung des zurückgegebenen `scenario` beachten.

## 7. Nicht-Ziele in Phase 6.4
Explizit ausgeschlossen:
- keine Implementierung von `parseScenarioImportJsonText`,
- keine React-Änderungen,
- keine Upload-Komponenten,
- keine Import-Buttons,
- keine Persistenz,
- keine Draft-Ersetzung,
- keine Serverkommunikation.

## 8. Empfohlener nächster Schritt
**Phase 6.4 Review · JSON-Import-Parsing-Konzept prüfen**

Erst danach:
**Phase 6.5 Implementierung der Parsing-Utility** (ohne UI-Übernahme), mit den oben genannten Testfällen.
