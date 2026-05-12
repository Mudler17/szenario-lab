# JSON-Import-Statusmeldungen (Phase 6.6)

## Ziel
In Phase 6.6 wird **nur konzeptionell** vorbereitet, wie technische Result-Objekte aus der späteren JSON-Import-Kette in nutzerfreundliche Statusmeldungen übersetzt werden können.

Ausgangspunkt:
- `validateScenarioImportPayload` (Phase 6.3) validiert bereits geparste Payloads.
- `parseScenarioImportJsonText` (Phase 6.5) parst JSON-Text und delegiert erfolgreiche Parse-Ergebnisse an die Validierung.

Nicht Teil dieser Phase sind Implementierung, UI-Integration oder Datenübernahme.

## Technische Result-Objekte als Mapping-Eingang
Späteres Mapping soll mindestens folgende Result-Fälle unterstützen:

1. `ok: true` ohne `warnings`
2. `ok: true` mit `warnings`
3. `invalid-json-syntax`
4. `invalid-json-value`
5. `top-level-array`
6. `missing-export-type`
7. `unsupported-export-type`
8. `missing-format-version`
9. `unsupported-format-version`
10. `missing-scenario`
11. `invalid-scenario`
12. `missing-required-field`
13. `invalid-required-field-type`
14. `empty-required-field`
15. `unknown-top-level-fields`
16. `unknown-scenario-fields`

## Geplante Meldungstypen
Die spätere Mapping-Utility soll ein UI-geeignetes Meldungsobjekt mit einem klaren Meldungstyp liefern:

- `success`: positiver Abschluss ohne Blocker
- `warning`: Import formal gültig, aber mit fachlichen Hinweisen
- `error`: Import kann nicht übernommen werden
- `info`: neutraler Hinweiszustand (z. B. noch keine Übernahme)

## Beispielhafte Nutzertexte
Beispieltexte als Grundlage für spätere UI-Formulierungen:

- „Die JSON-Datei wurde geprüft und enthält ein gültiges Szenario.“
- „Die Datei enthält gültige Szenariodaten, aber zusätzliche unbekannte Felder.“
- „Die Datei enthält kein gültiges JSON.“
- „Diese Datei ist kein unterstützter szenario-lab-Export.“
- „Name, Beschreibung oder Ziel fehlen oder sind leer.“
- „Der Import wurde geprüft, aber noch nicht übernommen.“

## Konzeptionelles Mapping (Vorschlag)
- `ok: true` ohne Warnungen → `success`
- `ok: true` mit Warnungen (`unknown-top-level-fields`, `unknown-scenario-fields`) → `warning`
- Alle parse-/validierungsbezogenen `reason`-Fehlerfälle → `error`
- Vor oder nach technischer Prüfung, solange keine Übernahme stattfindet → optional `info`

## Abgrenzung (nicht Teil von Phase 6.6)
Weiterhin **nicht** enthalten:

- keine UI
- kein Importbutton
- kein Datei-Upload
- kein FileReader
- keine Speicherung
- kein LocalStorage
- keine Draft-Übernahme
- keine OpenAI-/Server-Anbindung

## Spätere Testfälle für Mapping-Utility
Für eine spätere technische Mapping-Utility sind mindestens folgende Testfälle vorzusehen:

1. Erfolg ohne Warnungen (`ok: true`, keine `warnings`)
2. Erfolg mit Warnungen (`ok: true`, inkl. Warnungen)
3. Syntaxfehler (`invalid-json-syntax`)
4. Falscher Exporttyp (`unsupported-export-type`)
5. Fehlende Pflichtfelder (`missing-required-field`)
6. Leere Pflichtfelder (`empty-required-field`)
7. Unbekannter `reason`-Fallback (robustes Default-Fehler-Mapping)

## Ergebnis von Phase 6.6
Phase 6.6 liefert eine fachliche Grundlage für konsistente, nutzerfreundliche Import-Statusmeldungen, ohne bereits Importfluss, UI oder Persistenz zu implementieren.
