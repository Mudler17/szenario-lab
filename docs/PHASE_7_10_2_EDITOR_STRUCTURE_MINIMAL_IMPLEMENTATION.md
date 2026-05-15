# Phase 7.10.2 · Bearbeitungsbereich-Struktur minimal umgesetzt

## Ziel
Die in Phase 7.10.1 vorbereitete Strukturverbesserung wurde im bestehenden Bearbeitungsbereich minimal umgesetzt.

## Umgesetzt
- Abschnittsnavigation mit Sprunglinks im Bearbeitungsbereich ergänzt.
- Fachliche Gruppen-Wrapper ergänzt:
  - Szenario-Basis
  - Akteure und Mittel
  - Verlauf und Systemstruktur
  - Handlungsoptionen
  - Werkzeuge
- Reset, JSON-Download und JSON-Import-Prüfung sichtbar als Werkzeuge gebündelt.
- Minimales CSS für Navigation und Gruppen ergänzt.
- Strukturtests für die Home-Ansicht ergänzt.

## Unverändert
- Keine Änderung an Formularfeldern.
- Keine Änderung an Draft-Utilities.
- Keine Änderung an Import-/Export-Logik.
- Keine Tabs.
- Keine Accordions.
- Kein Routing.
- Keine neue State-Architektur.

## Quality Gate
- `npm test`
- `npm run build`
