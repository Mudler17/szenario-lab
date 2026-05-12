# Phase 7.2.1 · Annahmen-Konzept

## 1. Ausgangslage

Phase 6.12 hat die lokale JSON-Import-/Export-Kette abgeschlossen.

Phase 7.0 hat als nächste Hauptentwicklungsrichtung festgelegt, das Szenario-Modell fachlich weiter editierbar zu machen.

Phase 7.1 hat „Annahmen“ als ersten zusätzlichen editierbaren Szenario-Bereich ausgewählt.

Aktuell sind im lokalen Draft nur diese Grundfelder aktiv editierbar:

- `name`
- `description`
- `goal`

Die Entität `Assumption` ist im Domain-Modell bereits angelegt und dient als fachliche Grundlage für spätere Bewertung und Simulation.

## 2. Ziel von Phase 7.2

Phase 7.2 führt Annahmen als ersten zusätzlichen editierbaren Szenario-Bereich ein.

Der Phasenschnitt lautet:

- **Phase 7.2.1** · Annahmen-Konzept
- **Phase 7.2.2** · Annahmen-Implementierung
- **Phase 7.2.3** · Annahmen-Review

Phase 7.2.1 klärt ausschließlich konzeptionelle Punkte und enthält keine Implementierung.

## 3. Fachlicher Zweck von Annahmen

Annahmen machen sichtbar, worauf ein Szenario gedanklich beruht.

Sie dienen dazu:

- zentrale Voraussetzungen explizit zu machen,
- Unsicherheit transparent zu beschreiben,
- Diskussions- und Prüfgrundlagen für spätere Schritte zu schaffen,
- den Übergang von narrativer Beschreibung zu strukturierter Modellierung vorzubereiten.

## 4. Abgrenzung zu Evidenz, Personas, Ressourcen, Interventionen, Phasen

- **Evidenz:** Annahmen beschreiben „wovon ausgegangen wird“; Evidenz begründet oder widerlegt diese Annahmen.
- **Personas:** Personas beschreiben Rollen/Akteure; Annahmen beschreiben Bedingungen oder Erwartungen.
- **Ressourcen:** Ressourcen sind Mittel/Kapazitäten; Annahmen können Ressourcenaspekte enthalten, ersetzen aber kein Ressourcenmodell.
- **Interventionen:** Interventionen sind Maßnahmen; Annahmen sind Voraussetzungen oder Rahmenbedingungen dafür.
- **Phasen:** Phasen strukturieren Zeit/Abschnitte; Annahmen können phasenbezogen sein, werden in 7.2 aber noch ohne Phasenverknüpfung geführt.

## 5. Geplantes Datenmodell

Annahmen werden als Liste am Szenario geführt:

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
```

## 6. Felder

Verwendete Felder in Phase 7.2:

- `id`
- `title`
- `content`
- `scope`
- `confidence`
- `rationale`

## 7. Validierungsregeln

Minimale lokale Validierung (analog zu bisherigen Draft-Regeln):

- `id`: nicht leer; innerhalb der Liste eindeutig.
- `title`: nicht leer; getrimmt.
- `content`: nicht leer; getrimmt.
- `scope`: nicht leer; freier Text in 7.2.1.
- `confidence`: Pflichtfeld; erlaubte Werte zunächst `low | medium | high`.
- `rationale`: optional, aber wenn gesetzt dann getrimmt und nicht nur Whitespace.

## 8. Pattern-Verweise

Konzept orientiert sich an bereits etablierten Mustern:

- Draft-State-Update als kleine Utility (vgl. Phase 4.6).
- Minimalvalidierung mit klaren Hinweistexten (vgl. Phase 4.7).
- Klare UI/Domain-Abgrenzung und lokale Verarbeitung ohne Speicherung (vgl. Phase 5/6).
- Bewusste Negativabgrenzung gegen Persistenz/Simulation/Anbindung (durchgängig seit Phase 4).

## 9. JSON-Rundlauf

Zielbild für 7.2.x:

- Annahmen werden im Draft editiert.
- Beim Export laufen Annahmen unverändert in `scenario.assumptions` ein.
- Beim Import werden vorhandene `assumptions` übernommen, sofern die Basisvalidierung erfolgreich ist.
- Kein separates Speicherformat und keine neue Persistenzlogik.

## 10. Geplante Tests

Für Phase 7.2.2/7.2.3 vorgesehen:

- Utility-Tests für Erzeugen/Ändern/Löschen von Annahmen im Draft.
- Validierungstests für Pflichtfelder und `confidence`-Werte.
- UI-Tests für minimale Eingabeführung und Fehlhinweise.
- Rundlauf-Tests (Export/Import), dass `assumptions` stabil durchgereicht werden.

## 11. Accessibility-Anforderungen

Für den späteren UI-Schritt:

- Semantische Gruppierung der Annahmen-Eingaben (`fieldset`/`legend` oder gleichwertig).
- Eindeutige Labels je Feld.
- Fehlerhinweise per `aria-describedby` verknüpfen.
- Status-/Fehlermeldungen als zugängliche Live-Region, wenn sinnvoll.
- Fokusführung bei Validierungsfehlern nachvollziehbar halten.

## 12. Geschätzter Umfang

Phase 7.2.1 ist ein reiner Dokumentationsschritt mit geringem technischem Umfang.

Für 7.2.2 wird mit einem kleinen bis mittleren Umfang gerechnet (Draft-State + Validierung + minimale UI + Tests).

## 13. Risikohinweis

Haupt-Risiko ist konzeptioneller Drift: Annahmen könnten zu früh mit Evidenz, Ressourcen oder Interventionen vermischt werden.

Gegenmaßnahme: strikte Feldgrenzen und schrittweise Einführung ohne Querverknüpfungen in 7.2.2.

## 14. Negativ-Liste

In Phase 7.2.1 ausdrücklich **nicht** enthalten:

- keine Codeänderung,
- keine UI-Änderung,
- keine Draft-State-Änderung,
- keine JSON-Schema-Änderung,
- keine Speicherung,
- kein LocalStorage,
- kein Backend,
- keine OpenAI-Anbindung,
- keine Simulation,
- keine neuen Abhängigkeiten.

## 15. Erwartete Folgephase

Nächster Schritt ist **Phase 7.2.2 · Annahmen-Implementierung vorbereiten** mit minimaler Draft- und UI-Erweiterung im bestehenden Rahmen.

## 16. Quality Gate

Quality Gate für den Abschluss von 7.2.1:

- Alle Pflichtabschnitte dieses Dokuments vorhanden.
- Abgrenzung und Negativ-Liste klar dokumentiert.
- Verweis auf Folgephase 7.2.2 vorhanden.
- Keine Implementierungsartefakte in Code, Schema oder UI.
