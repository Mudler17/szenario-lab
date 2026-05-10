# Phase 5.5 Review · JSON-Export-Payload-Utility prüfen

## 1. Zweck des Reviews

Dieses Review prüft die in Phase 5.5 eingeführte JSON-Export-Payload-Utility.

Ziel von Phase 5.5 war nicht, einen vollständigen JSON-Export für Nutzerinnen und Nutzer bereitzustellen. Ziel war ausschließlich, eine reine Utility-Funktion vorzubereiten, die aus einem Szenario-Draft ein serialisierbares Export-Payload-Objekt erzeugt.

## 2. Ausgangspunkt

Phase 5.4 hat den JSON-Export konzeptionell vorbereitet.

Festgelegt wurde:

- Exportiert werden soll später der aktuelle lokale Draft.
- Das Exportformat soll Metadaten enthalten.
- Der Export soll später importfähig bleiben.
- Es soll noch keine Speicherung und kein LocalStorage eingeführt werden.
- Es soll noch keine UI und kein Download-Button entstehen.

## 3. Umgesetzte Utility

In Phase 5.5 wurde folgende Utility ergänzt:

`createScenarioExportPayload(scenarioDraft, options = {})`

Die Funktion erzeugt ein JavaScript-Objekt mit folgender Struktur:

```json
{
  "exportType": "szenario-lab.scenario",
  "formatVersion": 1,
  "exportedAt": "ISO-8601-Zeitstempel",
  "source": "szenario-lab",
  "scenario": {}
}
```

Bewertung der Umsetzung:

- Die Utility erfüllt den Kernzweck: Sie kapselt die Payload-Erzeugung in einer klar abgegrenzten Funktion.
- Das Objekt ist serialisierbar und damit als Grundlage für `JSON.stringify(...)` geeignet.
- Metadaten (`exportType`, `formatVersion`, `exportedAt`, `source`) sind vorhanden und stabil benannt.
- Für reproduzierbare Abläufe (z. B. Tests) kann `exportedAt` über `options.exportedAt` explizit gesetzt werden.

## 4. Erfüllungsgrad gegenüber dem Zielbild aus Phase 5.4

Die Zielpunkte aus Phase 5.4 werden im Rahmen von Phase 5.5 erfüllt:

- **Lokaler Draft als Quelle:** Das übergebene `scenarioDraft` wird in die Payload eingebettet.
- **Metadaten im Export:** Sind vorhanden.
- **Importfähigkeit vorbereiten:** Durch `exportType` und `formatVersion` ist ein versionierbarer Importpfad vorbereitet.
- **Keine Speicherung/kein LocalStorage:** Wurde eingehalten.
- **Keine UI/kein Download:** Wurde eingehalten.

Damit ist Phase 5.5 als vorbereitender, technischer Baustein konsistent umgesetzt.

## 5. Grenzen der aktuellen Utility

Die aktuelle Utility ist bewusst schlank. Daraus ergeben sich klare Grenzen:

- Keine Dateierzeugung, kein Download und keine Browser-Interaktion.
- Keine Persistenz (weder lokal noch serverseitig).
- Keine Importlogik.
- Keine inhaltliche Normalisierung oder Schema-Validierung des `scenario`-Objekts.
- Keine Garantie, dass `options.exportedAt` ein valider ISO-8601-Zeitstempel ist.
- Keine Zusicherung einer tiefen Immutability für verschachtelte Objekte, falls Aufrufer dieselben Referenzen weiterverwenden.

Diese Grenzen sind für den Scope von Phase 5.5 akzeptabel und entsprechen der beabsichtigten Minimalität.

## 6. Risiken vor dem nächsten Schritt

Vor einem nutzbaren Export-Feature sollten folgende Risiken adressiert werden:

1. **Schema-Drift-Risiko:** Ohne verbindliches Export-Schema kann sich die Struktur des `scenario`-Objekts zwischen Versionen unbeabsichtigt ändern.
2. **Validitätsrisiko bei Metadaten:** Ungültige oder uneinheitliche `exportedAt`-Werte könnten Nachverarbeitung/Import erschweren.
3. **Kompatibilitätsrisiko:** Bei späteren Änderungen am Format muss die Semantik von `formatVersion` klar geregelt werden (Migrationsstrategie).
4. **Datenqualitätsrisiko:** Wenn unvollständige Drafts exportiert werden, können Folgeprozesse auf inkonsistente Inhalte treffen.

## 7. Empfehlung für Phase 5.6+

Für den nächsten Schritt ist sinnvoll:

- Ein minimales, dokumentiertes Export-Schema (inkl. Pflicht-/Optionalfelder) festlegen.
- Versionierungsregeln für `formatVersion` definieren.
- Festlegen, wie mit unvollständigen Drafts beim Export umgegangen wird (zulassen, warnen oder blockieren).
- Erst danach UI- oder Download-Aspekte ergänzen.

## 8. Fazit

Die JSON-Export-Payload-Utility erfüllt den in Phase 5.5 definierten Zweck vollständig: Sie liefert einen klaren, serialisierbaren Payload-Grundbaustein ohne unerwünschte Seiteneffekte (keine Speicherung, keine UI, kein Download).

Für produktionsnahe Export-/Import-Flows fehlen erwartungsgemäß noch Schema- und Kompatibilitätsregeln. Genau diese Punkte sollten als nächster fachlicher Schritt priorisiert werden.
