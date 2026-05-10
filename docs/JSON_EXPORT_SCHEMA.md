# JSON-Export-Schema · Konzept

## 1. Zweck

Dieses Dokument legt das konzeptionelle JSON-Export-Schema für `szenario-lab` fest.

Es beschreibt, welche Struktur ein Export-Payload haben soll, welche Felder verpflichtend sind, welche Felder optional bleiben und welche Regeln für spätere Erweiterungen gelten.

Es wird noch keine neue Exportfunktion implementiert.

## 2. Ausgangspunkt

In Phase 5.4 wurde der JSON-Export konzeptionell vorbereitet.

In Phase 5.5 wurde eine reine Utility-Funktion eingeführt:

`createScenarioExportPayload(scenarioDraft, options = {})`

Diese Funktion erzeugt ein serialisierbares JavaScript-Objekt, aber noch keine Datei und keinen Download.

Aktuell weiterhin nicht vorhanden:

- kein Download-Button
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
- keine Datenbank
- kein Backend
- keine automatische Versionierung
- keine Export-UI

## 3. Grundstruktur des Export-Payloads

Das Export-Payload folgt dieser Top-Level-Struktur:

```json
{
  "exportType": "szenario-lab.scenario",
  "formatVersion": 1,
  "exportedAt": "2026-01-01T12:00:00.000Z",
  "source": "szenario-lab",
  "scenario": {}
}
```

## 4. Felddefinitionen (Top-Level)

### 4.1 `exportType` (Pflicht)
- Typ: `string`
- Fester Wert für Version 1: `"szenario-lab.scenario"`
- Zweck: Eindeutige Kennzeichnung des Exportformats.

### 4.2 `formatVersion` (Pflicht)
- Typ: `number` (Integer)
- Wert für dieses Schema: `1`
- Zweck: Versionierung des Exportformats (nicht der Szenarioinhalte).

### 4.3 `exportedAt` (Pflicht)
- Typ: `string` im ISO-8601-UTC-Format
- Beispiel: `"2026-01-01T12:00:00.000Z"`
- Zweck: Zeitpunkt der Export-Erstellung.

### 4.4 `source` (Pflicht)
- Typ: `string`
- Empfohlener Wert: `"szenario-lab"`
- Zweck: Herkunft des Export-Payloads.

### 4.5 `scenario` (Pflicht)
- Typ: `object`
- Zweck: Enthält den eigentlichen Szenario-Inhalt.
- Regel: Das Objekt soll den zum Exportzeitpunkt vorliegenden Draft-Zustand abbilden.

## 5. Felddefinitionen (`scenario`-Objekt)

Für `formatVersion: 1` werden folgende Kernfelder erwartet:

- `name`: `string` (Pflicht)
- `description`: `string` (Pflicht)
- `goal`: `string` (Pflicht)

Weitere bereits vorhandene Szenario-Felder können enthalten sein, sofern sie serialisierbar sind und dem aktuellen Draft-Modell entsprechen.

Nicht erlaubt sind Funktionen, Klasseninstanzen mit Methoden, DOM-Referenzen oder zyklische Referenzen.

## 6. Optionales Metadatenfeld

Optional kann ein Top-Level-Metadatenobjekt ergänzt werden:

```json
{
  "meta": {
    "appVersion": "optional",
    "notes": "optional"
  }
}
```

Regeln:
- `meta` ist optional.
- Fehlt `meta`, bleibt das Payload gültig.
- Zusätzliche Metadaten dürfen die Pflichtfelder nicht ersetzen oder semantisch verändern.

## 7. Kompatibilitäts- und Erweiterungsregeln

1. **Abwärtskompatibilität bevorzugen**
   - Neue optionale Felder dürfen ergänzt werden, ohne bestehende Pflichtfelder zu entfernen.

2. **Pflichtfeldänderungen nur mit neuer `formatVersion`**
   - Wird ein Pflichtfeld entfernt, umbenannt oder in seiner Bedeutung geändert, muss `formatVersion` erhöht werden.

3. **Import-seitige Robustheit (zukünftig)**
   - Eine spätere Importlogik soll unbekannte optionale Felder tolerieren, sofern Kernstruktur und Pflichtfelder gültig sind.

4. **Schema vor Implementierung**
   - Änderungen am Datenvertrag werden zuerst in diesem Dokument festgehalten und erst danach technisch umgesetzt.

## 8. Beispielpayload (Version 1)

```json
{
  "exportType": "szenario-lab.scenario",
  "formatVersion": 1,
  "exportedAt": "2026-01-01T12:00:00.000Z",
  "source": "szenario-lab",
  "scenario": {
    "name": "Pilotbereich Kundenservice",
    "description": "Einführung einer neuen Übergaberoutine im First-Level-Support.",
    "goal": "Reduktion von Eskalationen und Wartezeiten."
  },
  "meta": {
    "appVersion": "0.0.0",
    "notes": "Konzeptbeispiel"
  }
}
```

## 9. Abgrenzung (nicht Teil von Phase 5.6)

Nicht Teil dieses Schritts sind:

- Implementierung eines Downloads
- Export-Button oder Export-UI
- JSON-Dateischreiben
- Importfunktion
- Persistenz (LocalStorage, Datei, Backend, Datenbank)
- Migrationslogik zwischen Formatversionen

Phase 5.6 definiert ausschließlich den konzeptionellen Datenvertrag für den JSON-Export.
