# Phase 11.3 · Beratungsreport-Utility-Kontrakt konzeptionell zuschneiden

## Ziel der Phase
Diese Phase definiert rein konzeptionell den fachlichen und technischen Kontrakt für eine spätere Utility, die aus einem vorhandenen `scenarioDraft` ein neutrales Beratungsreport-Draft-Objekt erzeugt.

Die Phase enthält **keine Implementierung**, **keine UI-Änderung**, **keine Teständerung** und **keine neue Produktfunktion**.

## Ausgangslage
- In Phase 11.1 wurde ein minimales, neutrales Beratungsreport-Konzept vorbereitet.
- In Phase 11.2 wurde dieses Konzept geprüft und fachlich freigegeben.
- Als nächster Schritt wird der Utility-Kontrakt präzise zugeschnitten, damit eine spätere Implementierung eng begrenzt und testbar bleibt.

## Verantwortlichkeit der späteren Utility
### Arbeitsname
`createConsultingReportDraft(scenarioDraft)`

### Verantwortung
- erzeugt ein **neutrales** `reportDraft` aus einem vorhandenen `scenarioDraft`
- strukturiert vorhandene Informationen in feste Report-Abschnitte
- setzt sichtbare Beratungsgrenzen (Boundary-Block)

### Explizit nicht in Verantwortung
- keine Empfehlungserzeugung
- keine Entscheidungserzeugung
- kein Scoring, keine Rangfolge, keine Simulation
- keine UI-Darstellung
- keine Persistenz, kein Export, kein Import
- keine API-/Backend-/LLM-Anbindung

## Input-Kontrakt
### Primärer Input
- genau ein Eingabeobjekt: `scenarioDraft`

### Eingabeprinzipien
- nur lesender Zugriff auf `scenarioDraft`
- keine Mutation des Inputs
- keine Seiteneffekte

### Erlaubte Datenquellen
Ausschließlich Daten aus dem übergebenen `scenarioDraft`.

Nicht erlaubt:
- externe Quellen
- `localStorage` / Browser-Speicher
- JSON-Export-/Import-Pfade
- Netzwerkanfragen / APIs / Backend
- OpenAI-/LLM-Aufrufe

## Output-Kontrakt
### Primärer Output
- genau ein Rückgabeobjekt: `reportDraft`

### Output-Prinzipien
- neutral, strukturiert, nachvollziehbar
- keine normative Sprache und keine Entscheidungsvorwegnahme
- robust auch bei unvollständigem/minimalem Input

## Pflichtstruktur des Report-Draft-Objekts
Das spätere `reportDraft` muss mindestens folgende Top-Level-Struktur enthalten:

- `reportType`
- `formatVersion`
- `boundary`
- `source`
- `sections`

### Entscheidung zu `createdAt`
`createdAt` wird in diesem Kontrakt **bewusst ausgeschlossen**.

Begründung:
- reduziert zeitabhängige Seiteneffekte im Utility-Kontext
- hält Output deterministischer und testfreundlicher
- vermeidet implizite Verantwortung für Zeitstempel-/Lokalisierungslogik

## Pflichtsektionen
`sections` muss mindestens die folgenden neutralen Sektionen enthalten:

1. Ausgangslage
2. Zielbild / Fragestellung
3. Annahmen
4. Evidenz
5. Personas / Stakeholder
6. Ressourcen
7. Phasen
8. Beziehungen
9. Interventionen
10. Risiken / Unsicherheiten
11. Offene Klärungsfragen
12. Nächste Arbeitsschritte

Hinweis: Die spätere Utility strukturiert nur vorhandene Draft-Inhalte; sie erzeugt keine neue Fachbewertung.

## Boundary-Block (verpflichtend)
Das Output-Objekt muss einen klar sichtbaren `boundary`-Block enthalten, der mindestens folgende Grenzen explizit macht:

- strukturierend
- nicht entscheidend
- keine Empfehlung
- kein Scoring
- keine Rangfolge
- keine Simulation
- keine LLM-Ausgabe

## Neutralitätsregeln
Die spätere Utility darf keine normativen/entscheidenden Ergebnisfelder erzeugen.

### Verbotene bzw. riskante Ergebnisfelder/Begriffe
- `recommendation`
- `score`
- `ranking`
- `decision`
- `bestOption`
- `should`
- `must`
- `empfehlung`
- `beste Option`
- `Entscheidung`

### Regelwirkung
- weder als Top-Level-Felder noch als section-nahe Ergebnisfelder verwenden
- keine impliziten Synonyme mit gleichem normativen Effekt einführen

## Testbarer späterer Implementierungskontrakt
Für die spätere Implementierungsphase sind mindestens folgende Tests vorzubereiten:

1. erzeugt alle Pflichtsektionen
2. nutzt ausschließlich `scenarioDraft` als Datenquelle
3. mutiert Input nicht
4. enthält verpflichtenden Boundary-Block
5. enthält keine Score-/Ranking-/Recommendation-Felder
6. funktioniert bei fehlenden optionalen Arrays robust
7. bleibt bei leerem/minimalem Draft robust

Empfohlene Zusatzhärtung:
- Quelltext-Negativtests gegen Browser-Speicher-, Netzwerk-, Import-/Export- und LLM-Bezüge
- Assertions auf neutrale Feldnamen und Verbotsliste

## Risiken / Gegenmaßnahmen
- **Risiko:** Scope Drift in Richtung Empfehlung/Entscheidung.  
  **Gegenmaßnahme:** verpflichtender Boundary-Block + Negativ-Liste + Feldverbote in Tests.

- **Risiko:** Verdeckte Datenquellen (Storage/Netzwerk).  
  **Gegenmaßnahme:** strikter Input-only-Kontrakt + Quelltext-Negativtests.

- **Risiko:** Instabilität bei lückenhaftem Draft.  
  **Gegenmaßnahme:** robuste Defaults und Tests für minimalen Input.

## Anschlusslogik
Phase 11.4 soll als **Review dieses Utility-Kontrakts** durchgeführt werden.

Ziel von Phase 11.4:
- prüfen, ob Kontrakt vollständig, konsistent und testbar ist
- bestätigen, dass keine Implementierung vorgezogen wurde
- offene Kanten vor möglicher Implementierungsphase schließen

## Negativ-Liste
Diese Phase liefert ausdrücklich **nicht**:

- keine Codeänderung
- keine UI-Änderung
- keine Teständerung
- keine Report-Utility
- keine Report-Komponente
- keine Exportänderung
- keine neue Persistenzlogik
- kein Backend
- keine API
- keine Accounts
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
