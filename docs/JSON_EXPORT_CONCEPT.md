# JSON-Export · Konzeptvorbereitung

## 1. Zweck

Dieses Dokument bereitet den späteren JSON-Export für `szenario-lab` vor.

Es wird noch kein Export implementiert.

Ziel ist, vor der technischen Umsetzung zu klären:

- Was soll exportiert werden?
- Wird der aktuelle Draft exportiert oder ein bereinigtes Szenario?
- Welche Metadaten braucht das Exportformat?
- Wie wird Validierung berücksichtigt?
- Wie soll die Datei benannt werden?
- Wie bleibt das Format später importierbar?
- Welche Risiken gibt es?

## 2. Ausgangspunkt

Die App besitzt aktuell eine lokale Szenario-Bearbeitung für drei Grundfelder:

- `name`
- `description`
- `goal`

Vorhanden sind:

- lokaler Draft im Arbeitsspeicher
- Reset auf Originalzustand
- direkte Vorschau
- minimale lokale Validierung
- Tests für Draft-State-Utilities
- Quality Gate mit `npm test` und `npm run build`
- konzeptionelle Speicherentscheidung

Bewusst noch nicht vorhanden:

- JSON-Export
- JSON-Import
- LocalStorage
- Datenbank
- Backend
- Versionierung
- Szenarioverwaltung
- automatische Speicherung
- Download-UI

## 3. Grundentscheidung

Für den ersten Export soll der aktuelle lokale Draft exportiert werden.

Begründung:

- Der Draft ist der aktuell sichtbare Arbeitsstand.
- Die Vorschau basiert ebenfalls auf dem Draft.
- Nutzerinnen und Nutzer erwarten, dass exportiert wird, was sie gerade sehen und bearbeiten.
- Es wird noch kein gespeicherter Zustand eingeführt.
- Der Export bleibt dadurch transparent und nachvollziehbar.

Nicht exportiert wird:

- ein versteckter Speicherzustand
- ein Backend-Zustand
- ein LocalStorage-Zustand
- ein automatisch bereinigtes anderes Szenario

## 4. Exportgegenstand

Der erste JSON-Export soll enthalten:

- Export-Metadaten
- Formatversion
- Exportzeitpunkt
- Anwendungskontext
- Szenario-Daten aus dem aktuellen Draft

Mindeststruktur:

```json
{
  "exportType": "szenario-lab.scenario",
  "formatVersion": 1,
  "exportedAt": "2026-01-01T12:00:00.000Z",
  "source": "szenario-lab",
  "scenario": {
    "id": "example-scenario",
    "name": "Szenario-Name",
    "description": "Beschreibung",
    "goal": "Ziel"
  }
}
```

## 5. Feldregeln und Validierung

Für Phase 5.4 wird nur konzeptionell festgelegt:

- Exportiert wird der aktuelle Draft-Stand, auch wenn Felder formal ungültig sein können.
- Es findet im Export selbst keine automatische Nachbearbeitung von Texten statt.
- Leerzeichen-Trimming, inhaltliche Korrektur oder Normalisierung sind nicht Teil dieser Phase.

Hinweis zur späteren Umsetzung:

- Die UI kann vor dem Export auf bestehende Validierungsfehler hinweisen.
- Ob ein Export bei Validierungsfehlern blockiert oder mit Warnung erlaubt wird, ist eine separate Umsetzungsentscheidung.

## 6. Dateiname (Vorschlag)

Vorgeschlagenes Muster für den Dateinamen:

- `szenario-lab-scenario-<scenarioId>-<timestamp>.json`

Beispiel:

- `szenario-lab-scenario-example-scenario-2026-01-01T120000Z.json`

Konventionen:

- nur ASCII-Zeichen
- keine Leerzeichen
- Doppelpunkte im Zeitstempel vermeiden (kompatibler für Dateisysteme)
- Endung immer `.json`

## 7. Importfähigkeit vorbereiten

Damit ein späterer JSON-Import möglich bleibt, wird bereits jetzt empfohlen:

- stabiles Kennzeichen über `exportType`
- explizite Versionsnummer über `formatVersion`
- klarer Container `scenario` für fachliche Daten
- reservierte Möglichkeit für zusätzliche Felder in zukünftigen Versionen

Regel für Weiterentwicklung:

- `formatVersion: 1` bleibt rückwärtskompatibel lesbar.
- Zukünftige Erweiterungen sollen additive Änderungen bevorzugen.

## 8. Grenzen dieser Phase

Nicht Bestandteil von Phase 5.4:

- Implementierung einer Exportfunktion
- Download-Button oder UI-Interaktion für Export
- JSON-Import
- Speicherung in LocalStorage
- Speicherung in Datenbank oder Backend
- automatische Versionierung
- neue Tests zur Exportlogik

## 9. Risiken und offene Punkte

Risiken:

- Unklare Erwartung, ob ungültige Drafts exportiert werden dürfen.
- Spätere Strukturänderungen ohne Versionierung würden Import erschweren.
- Dateinamen können ohne ausreichende Normalisierung ungültige Zeichen enthalten.

Offene Punkte für spätere Phase:

- genaue Blocking-Regel bei Validierungsfehlern
- konkrete Sanitizing-Regeln für `scenario.id` im Dateinamen
- UI-Texte für Exporthinweise und Fehlermeldungen
- Entscheidung, ob weitere Metadaten (z. B. App-Version) aufgenommen werden

## 10. Ergebnis von Phase 5.4

Phase 5.4 liefert ausschließlich eine fachlich-technische Vorabklärung des JSON-Exportformats.

Es existiert danach weiterhin keine Export-Implementierung im Code.
