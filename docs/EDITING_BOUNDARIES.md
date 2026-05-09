# EDITING BOUNDARIES (Phase 4)

## Zweck
Dieses Dokument legt die fachlichen Grenzen für die spätere Szenario-Bearbeitung in Phase 4 fest. Ziel ist eine klare Abgrenzung, **was grundsätzlich bearbeitbar vorbereitet werden darf** und **was ausdrücklich nicht** Teil der Bearbeitung ist.

Die Grenze wird dokumentarisch definiert, bevor Formulare oder editierbare UI gebaut werden.

## In Phase 4 grundsätzlich später bearbeitbare Bereiche
Folgende fachliche Felder dürfen in der späteren Bearbeitung grundsätzlich vorgesehen werden:

- **Szenario-Metadaten**
  - `name`
  - `description`

- **Personas**
  - `name`
  - `role`
  - `perspective`

- **Ressourcen**
  - `name`
  - `type`
  - `description`

- **Phasen**
  - `name`
  - `order`
  - `goal`

- **Annahmen**
  - `name`
  - `uncertainty`

- **Evidenz**
  - `source`
  - `evidenceType`
  - `confidence`
  - `relatedAssumptionId`
  - `note`

- **Beziehungen**
  - `from`
  - `to`
  - `trust`
  - `tension`
  - `influence`

- **Interventionen**
  - `name`
  - `goal`

- **Strategien**
  - `name`
  - `guidingLogic`

## In Phase 4 ausdrücklich noch nicht bearbeitbar
Folgende Bereiche dürfen in Phase 4 nicht bearbeitbar gemacht werden:

- Simulationsergebnisse
- Bewertungen oder Scores
- Persistenz-/Speicherstatus
- Importdaten
- OpenAI-generierte Inhalte

## Verbindliche Regeln für die Umsetzung in Phase 4
- Bestehende Lesekomponenten bleiben **read-only**.
- Bearbeitung erfolgt später in **eigenen Komponenten**.
- Es kommt **keine Bearbeitungslogik** in `ScenarioPreview` oder in Listenkomponenten.
- Es erfolgt **keine Speicherung** in Phase 4.
- Änderungen bleiben zunächst nur konzeptionell bzw. später lokal im UI-State.
