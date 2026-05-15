# Phase 7.8.1 · Relationship-Schema-Harmonisierung konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung einer späteren Harmonisierung des Relationship-Schemas. Ziel ist eine einheitliche fachliche Grundlage für lesende Vorschau, lokale Bearbeitung, JSON-Import/-Export und spätere Anschlusslogik wie Interventionen.

Diese Phase trifft noch keine Implementierungsänderung.

## 2. Ausgangslage
- Beziehungen sind editierbar.
- Review 7.7.3 hat Implementierung freigegeben.
- Audit nach 7.7 empfiehlt Harmonisierung vor Interventionen.
- Aktuelle Spannung zwischen altem Leseschema und neuem Editierschema.

## 3. Aktuelle Schema-Varianten

### 3.1 Altes lesendes Schema
Felder:
- id
- from
- to
- trust
- tension
- influence

Einordnung:
- stammt aus früherer lesender Vorschau
- stärker auf Beziehungsqualität zwischen Personas ausgelegt
- kompakt, aber weniger anschlussfähig an neue Bearbeitungslogik

### 3.2 Neues editierbares Schema
Felder:
- id
- sourceId
- targetId
- type
- description
- strength
- quality
- risks

Einordnung:
- stammt aus Phase 7.7.1/7.7.2
- stärker generisch-relational angelegt
- besser anschlussfähig an spätere Interventionen, Risiken und Systemlogik
- aktuell aber nicht vollständig mit alten Beispieldaten harmonisiert

## 4. Bewertungsmaßstäbe
Bewerte mögliche Zielschemata nach:
- Fachliche Klarheit
- Anschlussfähigkeit an Interventionen
- Verständlichkeit im Formular
- Rückwärtsverträglichkeit mit bestehenden Beispieldaten
- JSON-Import-/Export-Stabilität
- Einfachheit der späteren Umsetzung
- Vermeidung von Scheingenauigkeit
- Vermeidung von Netzwerkanalyse-/Simulationskaskaden

## 5. Zielbild für ein harmonisiertes Relationship-Schema
Empfohlenes Zielschema:

- id
- sourceId
- targetId
- type
- description
- strength
- quality
- risks

Begründung:
- sourceId/targetId sind neutraler und anschlussfähiger als from/to.
- type erlaubt unterschiedliche Beziehungsarten.
- description bietet Kontext statt Scheingenauigkeit.
- strength und quality ersetzen isolierte Werte wie trust/tension/influence durch robustere, einfachere Orientierung.
- risks schafft Anschluss an spätere Interventionen, ohne Interventionen jetzt einzuführen.

## 6. Umgang mit alten Feldern
Konzeptionelle Empfehlung:
- from → sourceId
- to → targetId
- trust/tension/influence nicht automatisch 1:1 in neue Felder pressen.
- Stattdessen spätere Migrationsentscheidung:
  - trust/tension/influence können in description zusammengeführt werden
  - oder teilweise in quality/strength übersetzt werden
  - oder als legacyNote dokumentiert werden
- In Phase 7.8.1 noch keine Entscheidung technisch umsetzen.

Wichtig:
Keine automatische Bewertung.
Keine Netzwerkanalyse.
Keine Simulation.
Keine Interventionslogik.

## 7. Optionen für spätere Umsetzung

### Option A: Beispiel-Szenario auf neues Schema umstellen
Nutzen:
- schnell sichtbar konsistenter Stand
Risiko:
- alte Lesekomponenten müssen ggf. angepasst werden

### Option B: Lesende RelationshipList auf neues Schema umstellen
Nutzen:
- Vorschau und Bearbeitung sprechen dieselbe Sprache
Risiko:
- alte Beispieldaten erscheinen ohne Mapping unvollständig

### Option C: kleine Mapping-/Normalisierungsutility vorbereiten
Nutzen:
- Übergang zwischen Alt- und Neu-Schema kontrollierbar
Risiko:
- kann zu früh technische Kompatibilitätslogik verfestigen

### Option D: vollständige kleine Harmonisierung in einer Implementierungsphase
Möglicher Umfang:
- exampleScenario migrieren
- RelationshipList an neues Schema anpassen
- ggf. Anzeige-Fallbacks für alte Felder
- Tests ergänzen
- README/ROADMAP/Doku aktualisieren
- npm test
- npm run build

## 8. Empfohlener nächster Umsetzungsschnitt
Empfehlung:
Phase 7.8.2 · Relationship-Schema-Harmonisierung minimal umsetzen

Empfohlener Umfang:
- exampleScenario.relationships auf neues Schema bringen
- RelationshipList so anpassen, dass sie das neue Schema lesend darstellen kann
- falls sinnvoll: defensive Fallbacks für alte Felder, aber keine große Mapping-Schicht
- bestehende RelationshipDraftForm nicht fachlich erweitern
- keine neue editierbare Entität
- keine Interventionen
- keine Simulation
- Tests für RelationshipList / relevante Anzeige ergänzen oder anpassen
- npm test und npm run build ausführen

## 9. Abgrenzung
Diese Konzeptphase bereitet nur vor:
- keine Migration
- keine Mapping-Utility
- keine Änderung am Beispiel-Szenario
- keine Änderung an RelationshipList
- keine Änderung an RelationshipDraftForm
- keine Änderung an HomePage
- keine Import-/Export-Änderung
- keine Interventionen

## 10. Risiken bei Nicht-Harmonisierung
- Bearbeitung und Vorschau nutzen unterschiedliche Begriffe.
- Bestehende Beziehungen können im Formular unvollständig wirken.
- Spätere Interventionen bauen auf uneinheitlicher Relationship-Grundlage auf.
- JSON-Export/-Import kann heterogene Relationship-Strukturen stabilisieren.
- Codex könnte in Folgephasen versehentlich zwei Schemata parallel weiterentwickeln.

## 11. Negativ-Liste
- keine Codeänderung
- keine UI-Änderung
- keine Teständerung
- keine Migration
- keine Mapping-Utility
- keine Änderung an exampleScenario
- keine Änderung an RelationshipList
- keine Änderung an RelationshipDraftForm
- keine Änderung an HomePage
- kein Import-/Export-Ausbau
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- keine Interventionen
- keine neue Entität
- keine neue Dependency
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
- keine automatische Bewertung
- keine Netzwerkanalyse
- keine Graph-Visualisierung

## 12. Quality-Gate-Hinweis
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung erfolgt ist.
- Wenn ausgeführt: Ergebnis dokumentieren.
