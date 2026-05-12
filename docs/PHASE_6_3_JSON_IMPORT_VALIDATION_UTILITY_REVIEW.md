# Phase 6.3 Review · JSON-Import-Validierungs-Utility

## Ergebnis
Phase 6.3 ist fachlich **bestanden**.

Die Utility `validateScenarioImportPayload` ist als reine Validierungsfunktion für bereits geparste Import-Payloads umgesetzt und testseitig nachvollziehbar abgesichert.

## Zweck der Utility
`validateScenarioImportPayload(payload, options = {})` prüft, ob ein bereits geparstes JSON-Import-Payload fachlich als Szenario-Import geeignet ist.

Ziele:
- frühes Erkennen ungültiger Importdaten,
- standardisierte Fehlerantworten mit `reason`-Codes,
- nicht-blockierende Warnungen für unbekannte Felder,
- sichere Rückgabe einer **tiefen Kopie** des validierten `scenario`-Objekts bei Erfolg.

## Geprüfte Validierungsfälle
Die Utility prüft in einer klaren Reihenfolge:

1. Top-Level-Wert ist ein Objekt (kein `null`, kein primitiver Typ)
2. Top-Level-Wert ist **kein Array**
3. Pflichtfeld `exportType` vorhanden
4. `exportType` entspricht `szenario-lab.scenario`
5. Pflichtfeld `formatVersion` vorhanden
6. `formatVersion` entspricht `1`
7. Pflichtfeld `scenario` vorhanden
8. `scenario` ist ein Objekt (nicht `null`, kein Array, kein primitiver Typ)
9. Pflichtfelder im Scenario vorhanden: `name`, `description`, `goal`
10. Pflichtfelder sind vom Typ `string`
11. Pflichtfelder sind nicht leer (`trim().length > 0`)
12. Nicht-blockierende Prüfung auf unbekannte Felder:
   - unbekannte Top-Level-Felder
   - unbekannte Felder innerhalb von `scenario`

## Fehlercodes (`reason`)
Bei blockierenden Validierungsfehlern liefert die Utility `ok: false` und einen `reason`-Code:

- `invalid-json-value`
- `top-level-array`
- `missing-export-type`
- `unsupported-export-type`
- `missing-format-version`
- `unsupported-format-version`
- `missing-scenario`
- `invalid-scenario`
- `missing-required-field` (mit `details.field`)
- `invalid-required-field-type` (mit `details.field`)
- `empty-required-field` (mit `details.field`)

## Warncodes (`warnings[].code`)
Bei fachlich zulässigem Payload (`ok: true`) werden unbekannte Felder als nicht-blockierende Warnungen zurückgegeben:

- `unknown-top-level-fields` mit `fields: string[]`
- `unknown-scenario-fields` mit `fields: string[]`

Diese Warnungen blockieren den Import explizit nicht.

## Testabdeckung
Die vorhandenen Tests decken insbesondere ab:

- Erfolgsfall mit gültigem Payload,
- alle wesentlichen Fehlerpfade (Top-Level, Pflichtfelder, Typen, Leere-Werte),
- Warnungen für unbekannte Top-Level- und Scenario-Felder,
- Nicht-Blockierung trotz Warnungen,
- **Nicht-Mutation** des Eingabe-Payloads,
- **tiefe Kopie** des zurückgegebenen Scenario-Objekts (keine Referenzweitergabe).

## Abgrenzung (bewusst nicht Teil von Phase 6.3)
Nicht Teil dieser Utility und dieser Phase:

- keine UI,
- kein Datei-Upload,
- kein FileReader,
- kein `JSON.parse` im Anwendungscode,
- keine Speicherung,
- kein LocalStorage,
- keine Importübernahme in App-State.

## Testergebnis / auszuführende Befehle
Für die Phase gelten weiterhin folgende Prüfkommandos:

```bash
npm test
npm run build
```

Die Utility ist damit als stabiler Baustein für die spätere Importkette vorbereitet, ohne bereits Upload-, Parsing- oder UI-Verantwortung zu übernehmen.
