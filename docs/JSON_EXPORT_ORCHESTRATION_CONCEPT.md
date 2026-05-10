# JSON-Export-Orchestrierung · Konzept

## 1. Zweck

Dieses Dokument bereitet die spätere JSON-Export-Orchestrierung für `szenario-lab` vor.

Es wird noch keine neue Funktion implementiert.

Ziel ist, vor der technischen Umsetzung zu klären, wie die bereits vorhandenen Export-Bausteine später konsistent zusammengeführt werden:

- Export-Payload
- Export-Dateiname
- gemeinsamer Exportzeitpunkt
- spätere Download-Logik
- spätere Nutzerhinweise
- spätere Validierungswarnungen

## 2. Ausgangspunkt

In den vorherigen Phasen wurden folgende Bausteine vorbereitet:

### Phase 5.4 · JSON-Export-Konzept

Der spätere JSON-Export wurde konzeptionell vorbereitet.

### Phase 5.5 · Export-Payload-Utility

Die Utility `createScenarioExportPayload(scenarioDraft, options = {})` erzeugt ein serialisierbares JavaScript-Objekt mit:

- `exportType`
- `formatVersion`
- `exportedAt`
- `source`
- `scenario`

### Phase 5.6 · JSON-Export-Schema

Das Export-Schema wurde konzeptionell festgelegt.

### Phase 5.7 · Export-Dateinamen-Utility

Die Utility `createScenarioExportFilename(scenarioDraft, options = {})` erzeugt einen sicheren Dateinamen nach dem Muster:

`szenario-lab-[slug]-[YYYY-MM-DD].json`

Weiterhin bewusst nicht vorhanden:

- kein Download
- kein Button
- keine Export-UI
- kein Browser-Blob
- kein `URL.createObjectURL`
- kein JSON-Import
- kein LocalStorage
- keine Speicherung

## 3. Problemstellung

Payload und Dateiname können aktuell getrennt erzeugt werden.

Dabei besteht ein Risiko:

- Payload bekommt einen `exportedAt`-Zeitpunkt.
- Dateiname bekommt ebenfalls einen `exportedAt`-Zeitpunkt.
- Wenn beide Zeitpunkte getrennt erzeugt werden, können sie auseinanderlaufen.

Beispiel:

```text
Payload exportedAt: 2026-05-10T23:59:59.999Z
Dateiname: 2026-05-11
```

Dann passt das Datum im Dateinamen nicht mehr eindeutig zum Zeitstempel in der Payload.

## 4. Zielbild der späteren Orchestrierung

Für die spätere technische Umsetzung soll es einen gemeinsamen Orchestrierungs-Schritt geben, der:

1. genau einen Exportzeitpunkt festlegt,
2. diesen Zeitpunkt an Payload- und Dateinamenerzeugung übergibt,
3. beide Ergebnisse als zusammengehöriges Export-Ergebnis bereitstellt.

Konzeptionell soll damit ein gemeinsamer Exportkontext entstehen, in dem Metadaten konsistent bleiben.

## 5. Geplanter Ablauf (konzeptionell)

Späterer Ablauf in logischer Reihenfolge:

1. Export anstoßen (z. B. durch zukünftige UI-Aktion).
2. Einmalig `exportedAt` erzeugen.
3. Payload mit diesem `exportedAt` erzeugen.
4. Dateiname mit demselben `exportedAt` erzeugen.
5. Optional: Vorab-Validierung der Exportdaten.
6. Danach erst technische Download-Schritte (außerhalb dieses Dokuments).

Wichtig: Diese Reihenfolge wird hier nur konzeptionell definiert, nicht implementiert.

## 6. Konzeptionelle Schnittstelle der Orchestrierung

Eine spätere Orchestrierung soll fachlich ein Ergebnis mit mindestens zwei Teilen liefern:

- `payload`: serialisierbares Exportobjekt
- `filename`: sicherer Dateiname

Optional kann ein dritter Teil ergänzt werden:

- `warnings`: Hinweise auf nicht-kritische Datenqualitätsprobleme

Damit bleibt die Verantwortung getrennt:

- Payload-Utility bleibt für Exportstruktur zuständig.
- Filename-Utility bleibt für Dateinamensregeln zuständig.
- Orchestrierung verbindet beide konsistent.

## 7. Validierungs- und Hinweisstrategie (vorbereitet, nicht implementiert)

Für spätere Phasen wird vorbereitet:

- harte Fehler (Export nicht möglich)
- weiche Warnungen (Export möglich, aber mit Hinweis)

Beispiele für potenzielle Warnungen (konzeptionell):

- Szenario-Name leer oder nur Platzhalter
- einzelne optionale Felder fehlen
- Metadaten unvollständig

Diese Strategie ist hier nur als Leitlinie definiert und erzeugt noch keine Runtime-Logik.

## 8. Abgrenzung dieser Phase

Nicht Teil von Phase 5.8:

- keine neue Utility-Implementierung
- keine Download-Implementierung
- kein Button
- keine Export-UI
- kein Browser-Blob
- kein `URL.createObjectURL`
- kein JSON-Import
- kein LocalStorage
- keine Speicherung

## 9. Ergebnis von Phase 5.8

Phase 5.8 liefert eine belastbare Konzeptgrundlage, damit die spätere technische Umsetzung von Export-Orchestrierung, Download und Nutzerhinweisen in konsistenter Reihenfolge erfolgen kann.
