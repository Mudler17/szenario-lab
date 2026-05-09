# FORM STRUCTURE PLAN (Phase 4, konzeptionell)

## Zweck
Dieses Dokument dient der **konzeptionellen Planung** einer späteren Formularstruktur für die Szenario-Bearbeitung in Phase 4.
Es enthält **keine UI-Implementierung**, **keinen Formularcode**, **keine Komponentenänderung** und **keine Persistenzlogik**.

## Grundsatz
Die bestehenden read-only-Komponenten bleiben unverändert.
Insbesondere bleibt die aktuelle Vorschau als Lesemodul bestehen; Bearbeitung wird nur als getrennte, spätere Formularfamilie vorbereitet.

## Geplante Formularfamilie (nur konzeptionell)
Später getrennt vorbereitete Formulare könnten sein:
- `ScenarioDraftForm`
- `PersonaDraftForm`
- `ResourceDraftForm`
- `PhaseDraftForm`
- `AssumptionDraftForm`
- `EvidenceDraftForm`
- `RelationshipDraftForm`
- `InterventionDraftForm`
- `StrategyDraftForm`

---

## 1) ScenarioDraftForm
- **Bearbeitete Draft-Entität:** `ScenarioDraft`
- **Felder:** `name`, `description`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - mehrzeiliger Text für `description`
- **Offene Validierungsfragen:**
  - Ist `name` verpflichtend?
  - Welche Mindest-/Maximallängen gelten für `name` und `description`?
  - Wie wird mit Whitespace-only Eingaben umgegangen?
- **Wichtig:** ausdrücklich keine Speicherung.

## 2) PersonaDraftForm
- **Bearbeitete Draft-Entität:** `PersonaDraft`
- **Felder:** `name`, `role`, `perspective`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - einzeiliger Text oder Auswahl für `role`
  - mehrzeiliger Text für `perspective`
- **Offene Validierungsfragen:**
  - Muss `name` pro Scenario eindeutig sein?
  - Ist `role` verpflichtend oder optional?
  - Welche Struktur und Länge sind für `perspective` zulässig?
- **Wichtig:** ausdrücklich keine Speicherung.

## 3) ResourceDraftForm
- **Bearbeitete Draft-Entität:** `ResourceDraft`
- **Felder:** `name`, `type`, `description`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - Auswahl oder Freitext für `type`
  - mehrzeiliger Text für `description`
- **Offene Validierungsfragen:**
  - Soll `type` aus einem Katalog kommen oder frei sein?
  - Muss `name` eindeutig sein?
  - Ist `description` verpflichtend?
- **Wichtig:** ausdrücklich keine Speicherung.

## 4) PhaseDraftForm
- **Bearbeitete Draft-Entität:** `PhaseDraft`
- **Felder:** `name`, `order`, `goal`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - numerischer Wert für `order`
  - mehrzeiliger Text für `goal`
- **Offene Validierungsfragen:**
  - Muss `order` eindeutig/lückenlos sein?
  - Ist `order` ab 1 verpflichtend?
  - Ist `goal` ein Pflichtfeld?
- **Wichtig:** ausdrücklich keine Speicherung.

## 5) AssumptionDraftForm
- **Bearbeitete Draft-Entität:** `AssumptionDraft`
- **Felder:** `name`, `uncertainty`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - numerische Skala oder Auswahl für `uncertainty`
- **Offene Validierungsfragen:**
  - Welcher Wertebereich gilt für `uncertainty`?
  - Wird eine normierte Skala benötigt?
  - Ist `name` verpflichtend?
- **Wichtig:** ausdrücklich keine Speicherung.

## 6) EvidenceDraftForm
- **Bearbeitete Draft-Entität:** `EvidenceDraft`
- **Felder:** `source`, `evidenceType`, `confidence`, `relatedAssumptionId`, `note`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `source`
  - Auswahl oder Freitext für `evidenceType`
  - numerische Skala oder Auswahl für `confidence`
  - Referenzauswahl für `relatedAssumptionId`
  - mehrzeiliger Text für `note`
- **Offene Validierungsfragen:**
  - Muss `relatedAssumptionId` auf eine bestehende Assumption verweisen?
  - Welcher Wertebereich gilt für `confidence`?
  - Katalog oder Freitext für `evidenceType`?
- **Wichtig:** ausdrücklich keine Speicherung.

## 7) RelationshipDraftForm
- **Bearbeitete Draft-Entität:** `RelationshipDraft`
- **Felder:** `from`, `to`, `trust`, `tension`, `influence`
- **Mögliche Eingabetypen (Konzept):**
  - Referenzauswahl für `from` und `to`
  - numerische Skala oder Auswahl für `trust`, `tension`, `influence`
- **Offene Validierungsfragen:**
  - Sind Selbstbeziehungen (`from === to`) verboten?
  - Welche Skalen/Grenzen gelten für `trust`, `tension`, `influence`?
  - Wie werden Duplikate gleicher Beziehungspaare verhindert?
- **Wichtig:** ausdrücklich keine Speicherung.

## 8) InterventionDraftForm
- **Bearbeitete Draft-Entität:** `InterventionDraft`
- **Felder:** `name`, `goal`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - mehrzeiliger Text für `goal`
- **Offene Validierungsfragen:**
  - Sind `name` und `goal` Pflichtfelder?
  - Welche minimale inhaltliche Spezifität gilt für `goal`?
  - Muss `name` eindeutig sein?
- **Wichtig:** ausdrücklich keine Speicherung.

## 9) StrategyDraftForm
- **Bearbeitete Draft-Entität:** `StrategyDraft`
- **Felder:** `name`, `guidingLogic`
- **Mögliche Eingabetypen (Konzept):**
  - einzeiliger Text für `name`
  - mehrzeiliger Text für `guidingLogic`
- **Offene Validierungsfragen:**
  - Ist `guidingLogic` verpflichtend?
  - Muss `name` im Scenario eindeutig sein?
  - Welche Mindestanforderungen gelten für Nachvollziehbarkeit?
- **Wichtig:** ausdrücklich keine Speicherung.

---

## Vorschlag für spätere Ordnerstruktur (nur konzeptionell)
- `src/features/scenarios/editing/`
- `src/features/scenarios/editing/components/`
- `src/features/scenarios/editing/state/`

## Verbindliche Grenzen für diese Planungsstufe
- Keine Änderung an `ScenarioPreview`.
- Keine Bearbeitung in Listenkomponenten.
- Keine Persistenz.
- Keine Simulation.
- Keine Bewertung.
- Keine OpenAI-Anbindung.
