# Phase 7.2.1 · Annahmen-Konzept

## 1. Ausgangslage

Phase 6.12 hat die lokale JSON-Import-/Export-Kette abgeschlossen. Die App kann derzeit:

- einen lokalen Draft bearbeiten,
- den lokalen Draft als JSON herunterladen,
- eine JSON-Datei lokal prüfen,
- ein gültig geprüftes Szenario bewusst in den lokalen Draft übernehmen.

Phase 7.0 hat als nächste Hauptentwicklungsrichtung festgelegt, das Szenario-Modell fachlich weiter editierbar zu machen.

Phase 7.1 hat „Annahmen“ als ersten zusätzlichen editierbaren Szenario-Bereich ausgewählt.

Aktuell sind im lokalen Draft nur diese Grundfelder aktiv editierbar:

- `name`
- `description`
- `goal`

Die Entität `Assumption` ist im Domain-Modell bereits angelegt. Das Domain-Modell beschreibt sie als explizite Annahmen, die Grundlage für Bewertung und spätere Simulation sein können.

## 2. Ziel von Phase 7.2

Phase 7.2 führt Annahmen als ersten zusätzlichen editierbaren Szenario-Bereich ein.

Der neue gestraffte Phasenschnitt für diese Entität lautet:

- **Phase 7.2.1** · Annahmen-Konzept
- **Phase 7.2.2** · Annahmen-Implementierung
- **Phase 7.2.3** · Annahmen-Review

Phase 7.2.1 klärt ausschließlich das Konzept:

- fachlicher Zweck der Annahmen,
- Felder der Entität,
- minimale Validierungsregeln,
- Pattern-Verweise auf bestehende Phasen,
- geplante Tests,
- JSON-Rundlauf,
- Accessibility-Anforderungen,
- Negativ-Liste,
- geschätzter Umfang.

## 3. Fachlicher Zweck von Annahmen

Annahmen machen sichtbar, worauf ein Szenario gedanklich beruht.

Sie beantworten Fragen wie:

- Wovon gehen wir aus?
- Welche Bedingungen nehmen wir an?
- Welche Unsicherheit steckt in dieser Annahme?
- Gilt die Annahme für das gesamte Szenario oder nur für einen Teilbereich?
- Wie wird die Annahme begründet?

Annahmen sind damit die Brücke zwischen beschreibendem Szenariotext und späterer Modellierung.

Ohne Annahmen bleibt ein Szenario vor allem erzählend.
Mit Annahmen wird es prüfbar, diskutierbar und später simulierbar.

## 4. Abgrenzung zu anderen Entitäten

### Annahmen vs. Evidenz

Annahmen formulieren, wovon ausgegangen wird.

Evidenz beschreibt später, wodurch diese Annahmen gestützt, geschwächt oder relativiert werden.

In Phase 7.2 wird noch keine eigene Evidenz-Entität editierbar gemacht. Das Feld `rationale` darf eine kurze Begründung enthalten, ersetzt aber keine spätere Evidenzmodellierung.

### Annahmen vs. Personas

Personas beschreiben beteiligte Rollen oder Akteursgruppen.

Annahmen können sich später auf Personas beziehen, aber Phase 7.2 führt noch keine Persona-Verknüpfung ein.

### Annahmen vs. Ressourcen

Ressourcen beschreiben verfügbare oder begrenzte Mittel.

Annahmen können später Aussagen über Ressourcen enthalten, aber Phase 7.2 modelliert Ressourcen noch nicht editierbar.

### Annahmen vs. Interventionen

Interventionen beschreiben gezielte Maßnahmen.

Annahmen können spätere Interventionen begründen oder begrenzen, aber Phase 7.2 führt noch keine editierbaren Interventionen ein.

### Annahmen vs. Phasen

Phasen strukturieren ein Szenario zeitlich oder logisch.

Annahmen können später phasenbezogen sein. Phase 7.2 führt jedoch noch keine Phasenverknüpfung ein.

## 5. Geplantes Datenmodell für Annahmen

Annahmen werden als Liste am Szenario geführt.

Vorgeschlagene Struktur im Szenario-Draft:

```js
assumptions: [
  {
    id: "assumption-1",
    title: "Ausreichende Akzeptanz im Team",
    content: "Das Team ist grundsätzlich bereit, neue KI-gestützte Arbeitsweisen zu erproben.",
    scope: "Gesamtszenario",
    confidence: "medium",
    rationale: "Bisherige Rückmeldungen aus Workshops zeigen Offenheit, aber auch Unsicherheit."
  }
]
