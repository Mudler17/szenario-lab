# DRAFT STATE CONCEPT (Phase 4, konzeptionell)

## Zweck
Dieses Dokument dient der **konzeptionellen Vorbereitung** eines späteren lokalen Draft-State für die Szenario-Bearbeitung.
Es enthält **keine Implementierung**, **keinen produktiven State-Code**, **keine Formulare** und **keine Persistenzlogik**.

## Ausgangspunkt
- `exampleScenario` bleibt die Seed- und read-only-Quelle.
- Daraus kann später eine lokale Arbeitskopie erzeugt werden.
- Diese Arbeitskopie ist ausdrücklich **kein Persistenzmodell**.

## Begriffe

### Seed Scenario
Das initial geladene, unveränderte Quellszenario (z. B. `exampleScenario`) als read-only-Referenz.

### ScenarioDraft
Eine lokale Arbeitskopie des Seed Scenario, die später für Bearbeitung im UI vorbereitet werden kann.

### Dirty State
Markierung, welche Felder oder Bereiche im Draft vom Seed Scenario abweichen.

### Reset
Konzeptioneller Rücksetzvorgang, der den lokalen Draft wieder auf den Seed-Stand bringt.

### Local-only Changes
Änderungen, die ausschließlich lokal im Client bestehen und nicht gespeichert oder synchronisiert werden.

### Validation Messages
Konzeptionelle Rückmeldungen zu Eingabe- oder Regelverletzungen innerhalb des lokalen Draft-Kontexts.

## Mögliche State-Bereiche (konzeptionell)

### `originalScenario`
Read-only-Referenz auf das Seed Scenario als Vergleichsbasis.

### `draftScenario`
Lokale Arbeitskopie mit später potenziell bearbeitbaren Feldern gemäß dokumentierter Bearbeitungsgrenzen.

### `dirtyFields`
Sammlung/Struktur zur Markierung von Feldern, die gegenüber `originalScenario` geändert wurden.

### `validationMessages`
Sammlung fachlicher oder struktureller Validierungshinweise für den aktuellen Draft-Stand.

### `selectedSection`
Konzeptioneller Selektionszustand, welcher Bearbeitungsabschnitt gerade im Fokus ist.

## Mögliche Operationen (nur Konzept, nicht implementiert)
- `createDraftFromScenario`
- `updateScenarioMetadata`
- `updatePersona`
- `updateResource`
- `updatePhase`
- `updateAssumption`
- `updateEvidence`
- `updateRelationship`
- `updateIntervention`
- `updateStrategy`
- `resetDraft`

## Grenzen
- keine Speicherung
- keine Persistenz
- keine Simulation
- keine Bewertung
- keine OpenAI-Anbindung
- keine automatische fachliche Entscheidung

## Offene Fragen
- Sollen Änderungen sofort lokal übernommen oder erst bestätigt werden?
- Sollen mehrere Entitäten gleichzeitig bearbeitbar sein?
- Wie sichtbar soll Dirty State später werden?
- Wann werden Validierungsfehler angezeigt?

## Umsetzungsstand (Utilities)
- `createDraftFromScenario` wurde als erste reine Utility-Funktion umgesetzt.
- `resetDraft` wurde als zweite reine Utility-Funktion umgesetzt.
- `resetDraft` erzeugt aus `originalScenario` erneut eine lokale Arbeitskopie.
- Es gibt weiterhin keinen React-State, keine UI-Einbindung und keine Speicherung.
