# Phase 11.5 · Beratungsreport-Utility minimal implementieren

## Ziel
Minimale, streng begrenzte Utility `createConsultingReportDraft(scenarioDraft)` implementieren, die aus einem vorhandenen Scenario-Draft ein neutrales `reportDraft` erzeugt.

## Umgesetzter Scope
- Neues Report-Modul unter `src/features/scenarios/report/`.
- Rein funktionale Utility ohne UI, Persistenz, API, Backend oder externe Anbindung.
- Robuste Verarbeitung von `null`, `undefined`, leerem Objekt und fehlenden optionalen Arrays.

## Dateien
- `src/features/scenarios/report/createConsultingReportDraft.js`
- `src/features/scenarios/report/createConsultingReportDraft.test.js`
- `src/features/scenarios/report/index.js`
- `src/features/scenarios/report/README.md`
- `README.md`
- `ROADMAP.md`
- `docs/PHASE_11_5_CONSULTING_REPORT_UTILITY_MINIMAL_IMPLEMENTATION.md`

## Utility-Kontrakt
**Name:** `createConsultingReportDraft(scenarioDraft)`

**Input:**
- genau ein Inputobjekt (`scenarioDraft`)
- nur lesender Zugriff
- keine Mutation

**Output (mindestens):**
- `reportType: "consulting-report-draft"`
- `formatVersion: 1`
- `boundary` mit allen Pflicht-Flags
- `source` mit Markerwerten (`type: "scenario-draft"`, `mode: "input-only"`)
- `sections` mit 12 Pflichtsektionen

## Output-Struktur
Top-Level:
- `reportType`
- `formatVersion`
- `boundary`
- `source`
- `sections`

Section-Struktur:
- `id`
- `title`
- `type`
- `items`
- `emptyState`

## Testabdeckung
Die Tests decken ab:
1. Pflichtfelder im Report-Draft
2. alle 12 Pflichtsektionen
3. kein `createdAt`
4. keine verbotenen Top-Level-Felder
5. korrekte Boundary-Flags
6. korrekte Source-Marker
7. keine Input-Mutation
8. robuste Behandlung von `null`/`undefined`/leerem Objekt
9. robuste Behandlung fehlender optionaler Arrays
10. Quelltext-Negativtest für verbotene Technologie-/Browser-/Netzwerk-/LLM-/Zeitmuster
11. Output-Negativtest für verbotene Empfehlungs-/Bewertungsbegriffe

## Quality Gate
- `npm test`
- `npm run build`

Beide Gates wurden ausgeführt.

## Negativ-Liste
Nicht umgesetzt:
- UI
- Report-Komponente
- Exportänderungen
- Persistenzlogik
- Backend/API
- OpenAI-/LLM-Anbindung
- neue Dependencies
- automatische Empfehlung
- Scoring
- Ranking
- Entscheidung
- Simulation

## Anschlusslogik
Nächster Schritt bleibt Review der minimalen Utility (Phase 11.6), ohne Scope-Ausweitung.
