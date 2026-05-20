# Phase 11.8 · Review der nachgeschärften Beratungsreport-Utility prüfen

## Review-Ziel
Prüfung der in Phase 11.7 nachgeschärften Utility `createConsultingReportDraft(scenarioDraft)` auf fachliche Passung des Mappings, Architekturgrenzen, neutrale Ergebnisstruktur und Testabdeckung – ohne Scope-Erweiterung und ohne Implementierungsänderungen.

## Geprüfte Dateien
- `src/features/scenarios/report/createConsultingReportDraft.js`
- `src/features/scenarios/report/createConsultingReportDraft.test.js`
- `docs/PHASE_11_7_CONSULTING_REPORT_UTILITY_MAPPING_REFINEMENT.md`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Utility-Scope
**Ergebnis: erfüllt (grün).**

- Utility bleibt **utility-only**: reine Funktion, keine Seiteneffekte.
- Keine UI-Anbindung und keine Report-Komponente im Implementierungsumfang.
- Keine Speicherung/Persistenz-Logik.
- Kein Exportpfad.
- Keine API-/Backend-/LLM-Anbindung.
- Keine neue Dependency.

Die aktuelle Utility arbeitet ausschließlich auf dem übergebenen `scenarioDraft` und erzeugt daraus ein strukturelles `reportDraft`-Objekt.

## Prüfergebnis Output-Struktur
**Ergebnis: erfüllt (grün).**

Top-Level und Struktur sind unverändert stabil:

- `reportType: "consulting-report-draft"` korrekt.
- `formatVersion: 1` korrekt.
- `boundary` vollständig und unverändert (alle bekannten Boundary-Flags vorhanden).
- `source` unverändert mit Markerwerten `type: "scenario-draft"` und `mode: "input-only"`.
- `sections` weiterhin aus 12 Pflichtsektionen aufgebaut; je Sektion `id`, `title`, `type`, `items`, `emptyState`.
- Kein `createdAt` enthalten.

## Prüfergebnis Mapping aus scenarioDraft
**Ergebnis: weitgehend erfüllt (grün mit Resthinweis).**

Die Nachschärfung aus Phase 11.7 ist fachlich nachvollziehbar umgesetzt:

- `name` + `description` → **Ausgangslage**.
- `goal` → **Zielbild / Fragestellung**.
- `personas` → **Personas / Stakeholder** (bewusst keine Übernahme aus `stakeholders`).
- `assumptions`, `evidence`, `resources`, `phases`, `relationships`, `interventions` → passende jeweilige Sektionen.
- `openQuestions` + `clarificationQuestions` werden nur übernommen, wenn vorhanden.
- `nextSteps` + `workSteps` werden nur übernommen, wenn vorhanden.
- **Offene Klärungsfragen** und **Nächste Arbeitsschritte** bleiben leer, wenn keine expliziten Felder gesetzt sind.

## Prüfergebnis Risiken / Unsicherheiten
**Ergebnis: technisch erfüllt, fachlich mit Restlücke für Folgephase.**

Neutral übernommene Risikodaten:

- `relationships[].risks` werden übernommen.
- `phases[].risks` werden übernommen.
- `interventions[].risks` werden übernommen.
- `assumptions[].uncertainty` wird übernommen.

### Fachlicher Resthinweis
Bei `assumptions[].uncertainty` kann Kontext verloren gehen, wenn nur isolierte Werte wie „hoch“/„mittel“ eingetragen sind. In der aktuellen Form erscheint dann nur der Unsicherheitswert ohne Bezug zur zugrundeliegenden Annahme.

**Hinweis für Phase 11.9:**
Unsicherheiten aus Annahmen sollten mit Annahmenbezug übernommen werden, z. B.:
`Annahme: X · Unsicherheit: Y`.

## Prüfergebnis Neutralität
**Ergebnis: erfüllt (grün).**

- Keine Empfehlung.
- Kein Scoring.
- Kein Ranking.
- Keine Entscheidung.
- Keine Priorisierung.
- Keine beste Option.
- Keine Muss-/Sollte-Formulierungen als verdeckte Handlungsanweisung.
- EmptyStates bleiben strukturell-neutral.

## Prüfergebnis Tests
**Ergebnis: solide, mit gezielter Restlücke.**

Vorhanden und passend:

- Strukturtests (Top-Level, 12 Sektionen, Boundary, Source, `createdAt`-Ausschluss, verbotene Felder).
- Mapping-Tests für:
  - `name`/`description`
  - `goal`
  - `personas`
  - `assumptions/evidence/resources/phases/relationships/interventions`
- Risiko-/Unsicherheits-Tests:
  - `relationships[].risks`
  - `assumptions[].uncertainty`
- Optionalfeld-Tests:
  - `openQuestions/clarificationQuestions`
  - `nextSteps/workSteps`
  - leere optionale Felder
- Negativtests weiter vorhanden:
  - Quelltext-Schutztest auf verbotene Browser-/Netzwerk-/LLM-/Zeitmuster
  - Output-Neutralitätsbegriffe
  - Input-Mutationsschutz

Fehlend bzw. als Verbesserungspotenzial:

- Kein expliziter Test, der **Annahmenbezug + Unsicherheitswert** gemeinsam im Risiko-Output absichert (z. B. Stringformat mit Annahmenname).

## Risiken / Resthinweise
1. **Kontextverlust bei Annahmen-Unsicherheit**: rein isolierte Unsicherheitswerte können fachlich zu dünn sein.
2. **Keine Priorität/Empfehlung gewollt**: bleibt korrekt, darf bei einer möglichen Nachschärfung nicht verletzt werden.

## Quality Gate
- `npm test` → bestanden.
- `npm run build` → bestanden.

## Entscheidung
**Phase 11.8 freigegeben** mit dokumentierter Restlücke zur möglichen Nachschärfung des Unsicherheits-Mappings in Phase 11.9.

## Anschlusslogik
Empfohlener nächster Schritt:

- **Phase 11.9: Beratungsreport-Risiko-/Unsicherheiten-Mapping nachschärfen**, mit Fokus auf kontextreiche Übernahme von `assumptions[].uncertainty` bei gleichzeitiger Wahrung der Neutralitätsgrenzen.

## Negativ-Liste
Nicht Bestandteil von Phase 11.8:

- keine Codeänderung an Utility-Logik
- keine Teständerung
- keine UI-Änderung
- keine Report-Komponente
- keine Exportänderung
- keine Persistenzlogik
- kein Backend / keine API
- keine Accounts / kein Sync / keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
