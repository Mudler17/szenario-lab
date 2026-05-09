# EDITABLE DATA MODEL (Phase 4, konzeptionell)

## Zweck
Dieses Dokument bereitet ein später lokal editierbares Szenario **konzeptionell** vor. Es beschreibt kein UI-Design, keine Formulare, keine Persistenz und keine operative Fachlogik. Ziel ist ein klarer fachlicher Rahmen für eine spätere Bearbeitung im lokalen UI-State.

## Ausgangspunkt
`exampleScenario` bleibt die Seed- und read-only-Quelle für das initiale Laden. Daraus kann später eine lokale Arbeitskopie erzeugt werden, die bearbeitbar ist.

## Grundverständnis des editierbaren Modells
Das editierbare Modell ist als **Arbeitskopie** zu verstehen:
- kein Persistenzmodell
- keine Datenbankrepräsentation
- keine Versionierungs- oder Speicherstrategie in Phase 4
- keine Simulationsergebnisse, keine Scores, keine OpenAI-generierten Inhalte

Die Arbeitskopie dient ausschließlich dazu, spätere lokale Bearbeitung im UI fachlich vorzustrukturieren.

---

## 1) ScenarioDraft

### Bearbeitbare Felder
- `name`
- `description`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil aus Seed übernommen)
- Referenzlisten/Zuordnungen nur soweit fachlich erlaubt; keine abgeleiteten Ergebnisfelder
- keine Simulations- oder Bewertungsfelder

### Offene Validierungsfragen
- Mindestlänge und maximale Länge für `name` und `description`
- Pflichtfeld-Regel für `name`
- Umgang mit reinem Whitespace

## 2) PersonaDraft

### Bearbeitbare Felder
- `name`
- `role`
- `perspective`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- Zugehörigkeit zum Scenario nur über stabile Referenz, nicht frei neu verdrahtet ohne Regel
- keine abgeleiteten Verhaltens- oder Wirkungsfelder

### Offene Validierungsfragen
- Eindeutigkeit von `name` innerhalb eines Scenarios
- Mindestanforderungen an `role`
- erlaubte Länge/Struktur von `perspective`

## 3) ResourceDraft

### Bearbeitbare Felder
- `name`
- `type`
- `description`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine Verbrauchs-/Auslastungsresultate
- keine automatische Priorisierung im Draft

### Offene Validierungsfragen
- Katalog vs. Freitext für `type`
- Eindeutigkeit von Ressourcennamen
- optionale vs. verpflichtende `description`

## 4) PhaseDraft

### Bearbeitbare Felder
- `name`
- `order`
- `goal`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine zeitlichen Simulationskennzahlen
- keine automatische Neuindizierung ohne explizite Regel

### Offene Validierungsfragen
- Muss `order` eindeutig und lückenlos sein?
- Darf `order` negativ/0 sein?
- Pflichtfeld-Regeln für `goal`

## 5) AssumptionDraft

### Bearbeitbare Felder
- `name`
- `uncertainty`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine evidenzbasierte Auto-Bewertung
- keine Score-Ableitung aus Unsicherheit

### Offene Validierungsfragen
- Wertebereich und Skala für `uncertainty`
- Pflichtfeld-Regel für `name`
- Bedarf einer normierten Unsicherheits-Skala

## 6) EvidenceDraft

### Bearbeitbare Felder
- `source`
- `evidenceType`
- `confidence`
- `relatedAssumptionId`
- `note`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine automatische Qualitätsklassifikation
- keine externe Verifikation oder Abruflogik

### Offene Validierungsfragen
- Muss `relatedAssumptionId` auf bestehende Assumption zeigen?
- Wertebereich für `confidence`
- Katalog vs. Freitext für `evidenceType`

## 7) RelationshipDraft

### Bearbeitbare Felder
- `from`
- `to`
- `trust`
- `tension`
- `influence`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine automatisch berechneten Netzwerkmetriken
- keine Konflikt-/Kooperationsscores

### Offene Validierungsfragen
- Verbot von Selbstbeziehungen (`from === to`)?
- Skalen und Grenzwerte für `trust`, `tension`, `influence`
- Duplikatregel für Beziehungspaare

## 8) InterventionDraft

### Bearbeitbare Felder
- `name`
- `goal`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine Wirkungsprognosen
- keine Ergebnis-/Impact-Scores

### Offene Validierungsfragen
- Pflichtfelder `name`/`goal`
- Minimale fachliche Spezifität für `goal`
- Eindeutigkeit von Interventionsnamen

## 9) StrategyDraft

### Bearbeitbare Felder
- `name`
- `guidingLogic`

### Nicht bearbeitbare bzw. abgeleitete Felder
- `id` (stabil)
- keine Strategie-Rankings
- keine automatische Nutzen-/Risiko-Bewertung

### Offene Validierungsfragen
- Pflichtfeld-Regel für `guidingLogic`
- Namenskonflikte innerhalb eines Scenarios
- Mindestanforderungen an Nachvollziehbarkeit der Leitlogik

---

## Verbindliche Regeln für Phase 4 (konzeptionell)
- IDs bleiben stabil.
- Keine Simulationsergebnisse im Draft.
- Keine Scores im Draft.
- Keine Speicherung in Phase 4.
- Keine OpenAI-generierten Inhalte im Draft.
- Der Draft dient nur der späteren lokalen UI-Bearbeitung als Arbeitskopie.
