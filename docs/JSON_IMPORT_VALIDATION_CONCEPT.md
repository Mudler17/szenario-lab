# JSON-Import-Validierung · Konzeptvorbereitung

## 1. Zweck
Dieses Dokument bereitet die spätere **reine Validierungslogik** für JSON-Importe in szenario-lab vor.

In dieser Phase wird bewusst **keine Validierungsfunktion implementiert**.
Ebenfalls werden **kein Datei-Upload**, **keine UI** und **keine Importübernahme** umgesetzt.

Ziel ist ein klarer, fachlich konsistenter **Validierungsvertrag vor der Implementierung**.

## 2. Abgrenzung
Die spätere Validierung ist ausschließlich für die Prüfung importierter Datenstrukturen zuständig.

Sie:
- speichert nichts,
- verändert keinen bestehenden Draft,
- übernimmt kein Szenario,
- liest keine Datei selbst ein,
- zeigt keine UI,
- sendet nichts an einen Server,
- ruft keine KI- oder OpenAI-Anbindung auf.

Damit bleibt klar: **Importprüfung ist nicht Speicherung und nicht Wiederherstellung**.

## 3. Eingabeform der späteren Utility
Die spätere Utility soll **kein Dateiobjekt** verarbeiten und **kein JSON.parse** selbst ausführen.
Sie prüft einen bereits geparsten JSON-Wert.

Vorgeschlagene Signatur:

`validateScenarioImportPayload(payload, options = {})`

Eingabe:
- `payload`: unbekannter JavaScript-Wert nach `JSON.parse`
- `options`: optional (z. B. unterstützte Formatversionen, Warnschwellen)

Nicht Teil der Utility:
- `FileReader`
- Upload-Input
- `JSON.parse` selbst
- UI-Statusdarstellung

Begründung:
Die Validierungslogik bleibt dadurch **rein, testbar und unabhängig von Browser-APIs**.

## 4. Ergebnisobjekt
Die spätere Utility soll für erwartbare Validierungsfälle **keine Exceptions** werfen, sondern ein Result-Objekt zurückgeben.

Vorschlag bei Erfolg:

```js
{
  ok: true,
  scenario: <kopierter Scenario-Draft>,
  warnings: []
}
```

Vorschlag bei Fehler:

```js
{
  ok: false,
  reason: "unsupported-format-version",
  message: "Diese Exportversion wird noch nicht unterstützt.",
  details: {}
}
```

Konzeptregeln:
- `reason` ist maschinenlesbar.
- `message` ist nutzerverständlich.
- `details` ist optional für interne Hinweise.
- Das Rückgabeobjekt mutiert das Eingabeobjekt nicht.
- Das `scenario` sollte bei Erfolg als **Kopie** zurückgegeben werden.

## 5. Fehlercodes / Reasons
Für die erste Version der späteren Validierung wird folgende Reason-Liste konzeptionell vorbereitet:

- `invalid-json-value`
  - Payload ist kein geeignetes Top-Level-Objekt.
- `top-level-array`
  - Payload ist ein Array.
- `missing-export-type`
- `unsupported-export-type`
- `missing-format-version`
- `unsupported-format-version`
- `missing-scenario`
- `invalid-scenario`
  - `scenario` ist `null`, Array oder kein Objekt.
- `missing-required-field`
- `invalid-required-field-type`
- `empty-required-field`
  - Auch bei Werten, die nach `trim()` leer sind.
- `payload-too-large`
  - Als definierter Grenzfall für spätere Größenbehandlung.

Optional als Fallback:
- `unknown-validation-error`

## 6. Warnungen
Konzeptionell wird zwischen blockierenden Fehlern und nicht-blockierenden Warnungen unterschieden:

- **Fehler** blockieren den Import.
- **Warnungen** blockieren den Import nicht zwingend.

Mögliche Warnungen:
- unbekannte Top-Level-Felder vorhanden,
- unbekannte Felder im `scenario` vorhanden,
- sehr lange Texte in Pflichtfeldern,
- sehr große Struktur knapp unter einer späteren Grenze.

Wichtig:
Warnungen lösen keine Speicherung aus und dienen ausschließlich der späteren Nutzerkommunikation.

## 7. Reihenfolge der Validierung
Vorgeschlagene Reihenfolge der späteren Prüfungen:

1. Payload ist Objekt?
2. Payload ist kein Array?
3. `exportType` vorhanden?
4. `exportType` unterstützt?
5. `formatVersion` vorhanden?
6. `formatVersion` unterstützt?
7. `scenario` vorhanden?
8. `scenario` ist Objekt?
9. `scenario` ist nicht `null`?
10. `scenario` ist kein Array?
11. Pflichtfelder `name`, `description`, `goal` vorhanden?
12. Pflichtfelder sind Strings?
13. Pflichtfelder nach `trim()` nicht leer?
14. Optionale Felder prüfen/tolerieren?
15. Warnungen sammeln?
16. Kopie des Szenarios für spätere Übernahme vorbereiten?

Hinweis:
Die Reihenfolge darf angepasst werden, wenn Fehlermeldungen dadurch klarer werden.
Wichtig ist ein **deterministisches Verhalten**.

## 8. Nutzerverständliche Statusmeldungen
Die spätere Validierungs-Utility kann entweder direkt Meldungstexte liefern oder primär Reason-Codes zurückgeben, die in einer separaten Mapping-Utility übersetzt werden.

Empfehlung:
- Reason-Codes in der Validierungs-Utility,
- Nutzertexte entweder ergänzend im Result oder über Mapping-Utility,
- keine rohen Parserfehler und keine Stacktraces in UI-Meldungen.

Beispieltexte:
- „Die Datei enthält kein gültiges Szenario.“
- „Diese Datei ist kein szenario-lab-Szenarioexport.“
- „Diese Exportversion wird noch nicht unterstützt.“
- „Der Import enthält kein Szenario.“
- „Name, Beschreibung oder Ziel fehlen.“
- „Name, Beschreibung oder Ziel dürfen nicht leer sein.“
- „Der Import wurde geprüft, aber noch nicht übernommen.“
- „Der Import würde den aktuellen Entwurf ersetzen.“

## 9. Testfälle für spätere Implementierung
Konkrete Testfälle für die nächste Umsetzungsphase:

Erfolg:
- gültiger Export Version 1 wird akzeptiert,
- unbekannte optionale Top-Level-Felder werden toleriert,
- unbekannte optionale Scenario-Felder werden toleriert,
- Ergebnis-`scenario` ist Kopie und keine Originalreferenz.

Fehler:
- Payload ist `null`,
- Payload ist String/Zahl/Boolean,
- Top-Level ist Array,
- `exportType` fehlt,
- `exportType` ist falsch,
- `formatVersion` fehlt,
- `formatVersion` ist nicht `1`,
- `scenario` fehlt,
- `scenario` ist `null`,
- `scenario` ist Array,
- `scenario` ist String/Zahl,
- `name` fehlt,
- `description` fehlt,
- `goal` fehlt,
- `name` ist kein String,
- `description` ist kein String,
- `goal` ist kein String,
- `name` ist leer,
- `description` ist leer,
- `goal` ist leer,
- Pflichtfeld besteht nur aus Leerzeichen,
- sehr große Struktur wird definiert behandelt.

## 10. Sicherheits- und Datenschutzgrenzen
Für die spätere Validierungsphase gilt:

- Validierung führt keine Inhalte aus.
- Keine HTML-Ausführung aus importierten Textfeldern.
- Keine Serverübertragung.
- Keine OpenAI-Anbindung.
- Keine Speicherung.
- Keine automatische Übernahme in den Draft.
- Importierte personenbezogene/vertrauliche Inhalte bleiben lokal im Browserkontext.
- Die spätere UI soll klar hinweisen: Daten sind geprüft, aber noch nicht gespeichert.

## 11. Nicht-Ziele
Explizit ausgeschlossen in dieser Phase:

- keine Implementierung von `validateScenarioImportPayload`,
- kein Datei-Upload,
- kein `FileReader`,
- kein zusätzliches `JSON.parse` im Anwendungscode,
- keine UI,
- keine Status-Komponente,
- keine Speicherung,
- kein LocalStorage,
- keine Datenbank,
- kein Backend,
- keine automatische Wiederherstellung,
- keine Importübernahme in den Draft,
- keine Änderung an Export-/Download-Utilities,
- keine neuen Fachmodule.

## 12. Empfehlung für nächste Phase
Empfohlener nächster Schritt:

**Phase 6.2 Review · JSON-Import-Validierungskonzept prüfen**

Noch nicht:

**Phase 6.3 Implementierung**

Begründung:
Vor der Implementierung sollte geprüft werden, ob Fehlercodes, Ergebnisobjekt, Validierungsreihenfolge, Nutzertexte und Testfälle konsistent und vollständig sind.
