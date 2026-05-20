# Phase 11.7 · Beratungsreport-Utility-Mapping nachschärfen

## Ziel
Das feldgenaue Mapping der bestehenden Utility `createConsultingReportDraft(scenarioDraft)` nachschärfen, damit vorhandene `scenarioDraft`-Daten fachlich passender in die bestehenden 12 Report-Sektionen überführt werden – ohne Scope-Erweiterung.

## Anlass aus Phase 11.6
Die Review aus Phase 11.6 hat bestätigt, dass Struktur, Boundary und Source stabil sind, aber fachliche Mapping-Lücken bestehen. Phase 11.7 schließt diese Lücken innerhalb der bestehenden Utility.

## Umgesetzter Scope
- `src/features/scenarios/report/createConsultingReportDraft.js`
- `src/features/scenarios/report/createConsultingReportDraft.test.js`
- `src/features/scenarios/report/README.md`
- `README.md`
- `ROADMAP.md`
- dieses Dokument

Nicht umgesetzt: UI, Report-Komponente, Exportänderung, Persistenz, API, Backend, OpenAI-/LLM-Anbindung, neue Dependency.

## Mapping-Regeln
1. **Ausgangslage**: nutzt `name` und `description` (neutral, ohne Bewertung).
2. **Zielbild / Fragestellung**: nutzt `goal`, falls vorhanden.
3. **Annahmen**: nutzt `assumptions`.
4. **Evidenz**: nutzt `evidence`.
5. **Personas / Stakeholder**: nutzt `personas` (nicht `stakeholders`).
6. **Ressourcen**: nutzt `resources`.
7. **Phasen**: nutzt `phases`.
8. **Beziehungen**: nutzt `relationships`.
9. **Interventionen**: nutzt `interventions`.
10. **Risiken / Unsicherheiten**: sammelt neutral bestehende Angaben aus z. B. `relationships[].risks`, `phases[].risks`, `interventions[].risks`, `assumptions[].uncertainty`.
11. **Offene Klärungsfragen**: übernimmt nur explizite Felder (`openQuestions`, `clarificationQuestions`) falls vorhanden; sonst leer.
12. **Nächste Arbeitsschritte**: übernimmt nur explizite Felder (`nextSteps`, `workSteps`) falls vorhanden; sonst leer.

## Testabdeckung
Tests prüfen u. a.:
- feldgenaues Mapping für Ausgangslage, Zielbild, Personas und Kernbereiche,
- neutrale Risiko-/Unsicherheitsübernahme aus bestehenden Feldern,
- optionale Übernahme expliziter Felder für offene Fragen und nächste Schritte,
- leere Sektionen bei fehlenden expliziten Feldern,
- unveränderte Boundary-/Source-/Top-Level-Grenzen,
- Input-Immutable-Verhalten,
- Quelltext- und Output-Negativtests.

## Quality Gate
- `npm test`
- `npm run build`

## Negativ-Liste
Unverändert ausgeschlossen:
- Empfehlung/Handlungsempfehlung
- Scoring/Rating
- Ranking/Priorisierung
- Entscheidung/Best-Option
- Simulation
- generierte offene Fragen
- generierte nächste Schritte

## Anschlusslogik
Nächster Schritt: **Phase 11.8 – Review der nachgeschärften Beratungsreport-Utility prüfen**.
