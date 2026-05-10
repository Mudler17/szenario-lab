# Phase 5.9 Review · JSON-Export-Orchestrierungs-Utility prüfen

## 1. Zweck des Reviews

Dieses Review prüft die in Phase 5.9 eingeführte JSON-Export-Orchestrierungs-Utility.

Ziel von Phase 5.9 war nicht, einen vollständigen JSON-Export oder Download bereitzustellen. Ziel war ausschließlich, eine reine Utility-Funktion vorzubereiten, die Export-Payload, Export-Dateiname und Exportzeitpunkt konsistent zusammenführt.

## 2. Ausgangspunkt

In den vorherigen Phasen wurden vorbereitet:

- JSON-Export-Konzept
- JSON-Export-Payload-Utility
- JSON-Export-Schema
- JSON-Export-Dateinamen-Utility
- JSON-Export-Orchestrierungskonzept
- Quality Gate mit `npm test` und `npm run build`

Weiterhin bewusst nicht vorhanden:

- Download-Button
- Export-UI
- Browser-Blob
- `URL.createObjectURL`
- `JSON.stringify`
- JSON-Import
- LocalStorage
- Speicherung
- Datenbank
- Backend

## 3. Umgesetzte Utility

In Phase 5.9 wurde folgende Utility ergänzt:

`createScenarioExportDraft(scenarioDraft, options = {})`

Die Funktion erzeugt ein Objekt mit:

```json
{
  "payload": {},
  "filename": "szenario-lab-beispiel-2026-05-10.json",
  "exportedAt": "2026-05-10T08:30:00.000Z"
}
```

Bewertete Kernidee: Ein gemeinsamer Exportzeitpunkt wird einmal bestimmt und konsistent für Payload-Metadaten und Dateinamen verwendet.

## 4. Prüfergebnis: Erfüllt die Utility den Zweck?

Kurzfazit: **Ja, im vorgesehenen Scope von Phase 5.9.**

- Die Utility bleibt auf Orchestrierung begrenzt und führt bestehende Export-Bausteine zusammen.
- Es wird kein zusätzlicher Persistenz- oder Download-Pfad eingeführt.
- Das Ergebnis ist ein klarer Draft für einen späteren Export-Use-Case.
- Die Verantwortung bleibt getrennt: Payload-Erzeugung, Dateiname und Orchestrierung sind weiterhin als getrennte Schritte nachvollziehbar.

Damit erfüllt die Utility den Zielzustand „vorbereiten statt ausliefern“.

## 5. Gültige Grenzen (explizit bestätigt)

Die folgenden Grenzen bleiben nach Phase 5.9 unverändert gültig:

- Kein Download-Button
- Keine Export-UI
- Kein Browser-Blob
- Kein `URL.createObjectURL`
- Kein `JSON.stringify`
- Kein JSON-Import
- Kein LocalStorage
- Keine Speicherung
- Kein Backend/Datenbankpfad

Die Utility liefert damit ausschließlich einen **internen Export-Entwurf** und keinen benutzerseitigen Datei-Export.

## 6. Risiken vor dem nächsten Schritt

Vor einem späteren echten Export-Schritt sind folgende Risiken zu beachten:

1. **Schnittstellen-Stabilität:**
   - Nachgelagerte Export-Schritte müssen das Objektformat (`payload`, `filename`, `exportedAt`) als vertragliche Schnittstelle behandeln.
2. **Zeitpunkt-Konsistenz:**
   - Weitere Implementierungen dürfen keinen zweiten unabhängigen Zeitstempel einführen, um Inkonsistenzen zwischen Payload und Dateiname zu vermeiden.
3. **Dateinamens-Regeln vs. Nutzererwartung:**
   - Sonderfälle bei sehr kurzen/leeren oder ungewöhnlich formatierten Szenario-Namen müssen weiterhin über die Dateinamen-Utility abgefangen bleiben.
4. **Scope-Risiko (Feature-Creep):**
   - Bei der nächsten Phase besteht die Gefahr, Download, Serialisierung und UI zu früh zu vermischen. Diese Schritte sollten weiterhin bewusst getrennt geplant werden.

## 7. Empfehlung für den nächsten Schritt

Für die nächste Phase sollte zunächst nur festgelegt werden,

- **wo** die Orchestrierungs-Utility aufgerufen wird,
- **welcher** technische Übergabepunkt für den späteren Download vorgesehen ist,
- und **welche** Validierungen vor einem echten Exportlauf verpflichtend sind.

Dabei sollte die bestehende Trennung der Verantwortlichkeiten ausdrücklich beibehalten werden.

## 8. Gesamtfazit

Phase 5.9 ist als Vorbereitungsphase erfolgreich abgeschlossen.

Die JSON-Export-Orchestrierungs-Utility erfüllt ihren Zweck innerhalb der definierten Grenzen und schafft eine saubere Grundlage für spätere Export-Schritte, ohne vorzeitig UI-, Download- oder Persistenzlogik einzuführen.
