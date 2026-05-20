# Phase 11.9 · Beratungsreport-Risiko-/Unsicherheiten-Mapping nachschärfen

## Ziel
Die Utility `createConsultingReportDraft(scenarioDraft)` soll `assumptions[].uncertainty` nicht mehr isoliert übernehmen, sondern neutral und nachvollziehbar mit Bezug zur jeweiligen Annahme in die Sektion „Risiken / Unsicherheiten“ mappen.

## Anlass aus Phase 11.8
Die Review aus Phase 11.8 hat eine Restlücke benannt: Unsicherheiten aus Annahmen wurden zwar übernommen, erschienen aber als kontextarme Einzelwerte (z. B. „hoch“, „mittel“) ohne Annahmenbezug.

## Umgesetzter Scope
- Utility-only-Anpassung in `src/features/scenarios/report/createConsultingReportDraft.js`
- Testanpassungen/-ergänzungen in `src/features/scenarios/report/createConsultingReportDraft.test.js`
- Dokumentationsupdate in `src/features/scenarios/report/README.md`, `README.md`, `ROADMAP.md`
- Neues Phasendokument (dieses Dokument)

Nicht umgesetzt:
- keine UI
- keine Report-Komponente
- keine Exportänderung
- keine Persistenz-/Speicheränderung
- keine API/kein Backend
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency

## Mapping-Regeln
1. `assumptions[].uncertainty` wird nur übernommen, wenn ein nicht-leerer Stringwert vorliegt.
2. Bei vorhandenem Annahmennamen erfolgt neutrales Mapping mit Zusammenhang:
   - `Annahme: <Name> · Unsicherheit: <Wert>`
3. Bei fehlendem/leerem Annahmennamen wird neutraler Fallback verwendet:
   - `Annahme: Annahme ohne Bezeichnung · Unsicherheit: <Wert>`
4. Annahmen ohne Unsicherheit erzeugen keinen Risiko-/Unsicherheiten-Eintrag.
5. `relationships[].risks`, `phases[].risks` und `interventions[].risks` bleiben unverändert neutral übernommen.
6. Es werden keine Bewertungen, Priorisierungen, Empfehlungen oder Entscheidungen erzeugt.

## Testabdeckung
Abgedeckt durch Unit-Tests:
- Annahmen-Unsicherheit mit Annahmenname wird korrekt mit Bezug gemappt.
- Annahmen-Unsicherheit ohne Namen nutzt neutralen Fallback.
- Annahmen ohne Unsicherheit erzeugen keinen Eintrag.
- `relationships[].risks`, `phases[].risks`, `interventions[].risks` bleiben erhalten.
- Bestehende Mapping-Tests und Negativtests bleiben grün (Boundary, Source, verbotene Top-Level-Felder, kein `createdAt`, Input-Mutationsschutz, Quelltext-/Output-Negativlisten).

## Quality Gate
- `npm test`
- `npm run build`

Beide Befehle müssen erfolgreich durchlaufen.

## Negativ-Liste
Weiterhin explizit ausgeschlossen:
- recommendation
- score
- ranking
- decision
- bestOption
- priority
- rating
- recommendedAction
- dringend empfohlen
- zwingend
- beste Wahl
- Handlungsempfehlung
- Bewertung
- Empfehlung

## Anschlusslogik
Nächster Schritt gemäß Roadmap:
- **Phase 11.10:** Review des Risiko-/Unsicherheiten-Mappings prüfen.
