# DOMAIN MODEL (konzeptionell)

Dieses Dokument beschreibt ein erstes konzeptionelles Domänenmodell für `szenario-lab`.
Es enthält bewusst **keine** TypeScript-Typen und **keinen** Implementierungscode.

## 1) Scenario

**Zweck**
- Zentrale fachliche Einheit, in der ein untersuchter Kontext, seine Rahmenannahmen und Interventionen gebündelt werden.

**Wichtigste Felder (Konzept)**
- Identität/Name
- Zielbeschreibung
- Zeitrahmen
- Status (z. B. Entwurf, in Ausarbeitung)
- Referenzen auf beteiligte Personas, Ressourcen, Phasen, Annahmen und Interventionen

**Beziehungen**
- Ein Scenario umfasst mehrere Personas.
- Ein Scenario umfasst mehrere Resources.
- Ein Scenario ist in mehrere Phases gegliedert.
- Ein Scenario enthält mehrere Assumptions.
- Ein Scenario enthält mehrere Interventions.
- Ein Scenario kann mehrere Reports hervorbringen.

## 2) Persona

**Zweck**
- Repräsentiert eine beteiligte Rolle/Akteursgruppe im Scenario mit spezifischen Zielen, Perspektiven und Einschränkungen.

**Wichtigste Felder (Konzept)**
- Identität/Bezeichnung
- Rollenprofil
- Ziele/Interessen
- Restriktionen
- Entscheidungspräferenzen

**Beziehungen**
- Eine Persona gehört zu genau einem Scenario (im aktuellen Modell).
- Eine Persona kann von mehreren Interventions betroffen sein.
- Eine Persona kann Ressourcen nutzen oder beanspruchen.

## 3) Resource

**Zweck**
- Modelliert verfügbare oder limitierte Mittel (z. B. Budget, Zeit, Personal, Kapazität), die im Scenario relevant sind.

**Wichtigste Felder (Konzept)**
- Identität/Name
- Ressourcentyp
- verfügbare Menge/Kapazität
- Einheit
- Verfügbarkeitsbedingungen

**Beziehungen**
- Eine Resource gehört zu einem Scenario.
- Eine Resource kann in verschiedenen Phases unterschiedlich genutzt werden.
- Interventions können Resources verbrauchen, binden oder entlasten.

## 4) Phase

**Zweck**
- Strukturierung eines Scenarios in zeitliche oder logische Abschnitte.

**Wichtigste Felder (Konzept)**
- Identität/Name
- Reihenfolge
- Start-/Endkriterien (konzeptionell)
- Beschreibung des Abschnittsziels

**Beziehungen**
- Eine Phase gehört zu einem Scenario.
- Eine Phase enthält oder referenziert relevante Interventions.
- Eine Phase beeinflusst die Interpretation von Ressourcenverbrauch und Ergebnissen.

## 5) Intervention

**Zweck**
- Beschreibt eine gezielte Maßnahme, Entscheidung oder Veränderung innerhalb eines Scenarios.

**Wichtigste Felder (Konzept)**
- Identität/Name
- Beschreibung der Maßnahme
- erwarteter Effekt
- betroffene Personas
- betroffene Resources
- Zuordnung zu einer oder mehreren Phases

**Beziehungen**
- Eine Intervention gehört zu einem Scenario.
- Eine Intervention kann mehrere Personas und Resources betreffen.
- Eine Intervention basiert auf Assumptions und beeinflusst spätere Reports.

## 6) Assumption

**Zweck**
- Hält explizite Annahmen fest, die als Grundlage für Bewertung und spätere Simulation dienen.

**Wichtigste Felder (Konzept)**
- Identität/Bezeichnung
- Annahmeinhalt
- Gültigkeitsbereich
- Unsicherheitsgrad/Vertrauen
- Quelle/Begründung

**Beziehungen**
- Eine Assumption gehört zu einem Scenario.
- Assumptions können Interventions begründen oder einschränken.
- Assumptions beeinflussen die Aussagekraft von Reports.

## 7) Report

**Zweck**
- Verdichtet Ergebnisse eines Scenarios zu einer auswertbaren Darstellung für Entscheidungen und Kommunikation.

**Wichtigste Felder (Konzept)**
- Identität/Titel
- Erstellungszeitpunkt
- zusammengefasste Kernaussagen
- zugrunde liegende Scenario-Version
- Unsicherheiten/Annahmenhinweise

**Beziehungen**
- Ein Report bezieht sich auf genau ein Scenario (oder eine konkrete Scenario-Version).
- Ein Report referenziert relevante Assumptions und Interventions.
- Ein Scenario kann mehrere Reports über verschiedene Zeitpunkte/Stände besitzen.


## 8) Relationship

**Zweck**
- Modelliert Beziehungen zwischen Personas, um soziale Dynamiken und Abhängigkeiten explizit im Scenario abzubilden.

**Wichtigste Felder (Konzept)**
- beteiligte Personas
- Beziehungstyp
- Stärke
- Vertrauen
- Spannung
- Einfluss
- Notiz

**Beziehungen**
- Eine Relationship gehört zu einem Scenario.
- Eine Relationship verbindet zwei Personas.
- Eine Relationship kann Simulationsergebnisse und Report-Bewertungen beeinflussen.

## 9) Strategy

**Zweck**
- Erlaubt den Vergleich mehrerer Vorgehensweisen oder Handlungsoptionen innerhalb eines Scenarios.

**Wichtigste Felder (Konzept)**
- Name
- Ziel
- Leitlogik
- erwarteter Nutzen
- Risiken
- betroffene Interventionen

**Beziehungen**
- Eine Strategy gehört zu einem Scenario.
- Eine Strategy kann mehrere Interventions bündeln.
- Eine Strategy kann in Reports bewertet und gegenübergestellt werden.

## 10) Comparison

**Zweck**
- Stellt Varianten eines Scenarios oder unterschiedliche Strategien strukturiert gegenüber.

**Wichtigste Felder (Konzept)**
- Vergleichsgegenstand
- Kriterien
- Bewertung
- Zielkonflikte
- offene Annahmen

**Beziehungen**
- Eine Comparison bezieht sich auf Scenarios und/oder Strategies.
- Eine Comparison referenziert relevante Assumptions.
- Ergebnisse einer Comparison können in Reports einfließen.

## 11) Evidence

**Zweck**
- Macht Quellenlage und Begründungsqualität von Annahmen transparent.

**Wichtigste Felder (Konzept)**
- Quelle
- Evidenztyp
- Vertrauensgrad
- Bezug zur Annahme
- Notiz

**Beziehungen**
- Evidence stützt oder schwächt Assumptions.
- Evidence kann zur Nachvollziehbarkeit in Reports referenziert werden.

## 12) ScenarioVersion

**Zweck**
- Macht unterschiedliche Bearbeitungsstände eines Scenarios nachvollziehbar und vergleichbar.

**Wichtigste Felder (Konzept)**
- Versionsname
- Zeitpunkt
- Änderungsnotiz
- Bezug zum Scenario

**Beziehungen**
- Ein Scenario kann mehrere ScenarioVersions besitzen.
- Reports beziehen sich auf konkrete ScenarioVersions.
- ScenarioVersions können Grundlage für Comparisons sein.
