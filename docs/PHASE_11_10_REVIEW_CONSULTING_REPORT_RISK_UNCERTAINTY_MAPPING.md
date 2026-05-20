# Phase 11.10 · Review des Risiko-/Unsicherheiten-Mappings prüfen

## Review-Ziel
Prüfung der in Phase 11.9 nachgeschärften Mapping-Logik der Utility `createConsultingReportDraft(scenarioDraft)` mit Fokus auf:
- striktem Utility-Scope,
- fachlich neutralem Risiko-/Unsicherheiten-Mapping,
- unveränderter Output-Struktur,
- Neutralitätsgrenzen ohne Empfehlung/Scoring/Priorisierung,
- Testabdeckung und Stabilität bestehender Schutztests.

Die Review führt **keine** neue Funktion ein und nimmt **keine** Architekturverlagerung vor.

## Geprüfte Dateien
- `src/features/scenarios/report/createConsultingReportDraft.js`
- `src/features/scenarios/report/createConsultingReportDraft.test.js`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Utility-Scope
Ergebnis: **bestanden**.

- Die Nachschärfung liegt vollständig in der Utility `createConsultingReportDraft`.
- Keine UI-Komponente wurde ergänzt oder geändert.
- Keine Report-Präsentationskomponente wurde ergänzt.
- Keine Speicherung/Persistenzlogik wurde ergänzt.
- Keine Exportlogik wurde ergänzt.
- Keine API-/Backend-/LLM-Anbindung wurde ergänzt.
- Keine neue Dependency wurde eingeführt.

Der Scope bleibt damit strikt „Utility-only“.

## Prüfergebnis Risiko-/Unsicherheiten-Mapping
Ergebnis: **bestanden**.

- `assumptions[].uncertainty` wird nicht mehr isoliert übernommen, sondern kontextualisiert.
- `assumptions[].name` + `assumptions[].uncertainty` werden neutral kombiniert als:
  - `Annahme: <Name> · Unsicherheit: <Unsicherheit>`.
- Fallback ohne Namen ist neutral und eindeutig:
  - `Annahme ohne Bezeichnung`.
- Annahmen ohne nutzbare `uncertainty` erzeugen keinen Eintrag.
- Bestehende Risikoquellen bleiben erhalten:
  - `relationships[].risks`
  - `phases[].risks`
  - `interventions[].risks`
- Es wird keine neue Risikobewertung eingeführt.
- Es wird keine Priorisierung eingeführt.
- Es wird keine Empfehlung eingeführt.

## Prüfergebnis Output-Struktur
Ergebnis: **bestanden**.

Unverändert gegenüber der vorherigen Utility-Struktur:
- `reportType` unverändert.
- `formatVersion` unverändert.
- `boundary` unverändert.
- `source` unverändert.
- `sections` unverändert.
- weiterhin **kein** `createdAt`.

## Prüfergebnis Neutralität
Ergebnis: **bestanden**.

- Keine Formulierung im Mapping, die als Empfehlung, Scoring, Ranking, Entscheidung oder Priorisierung gelesen werden muss.
- Der Begriff „Unsicherheit“ ist neutral und beschreibend.
- „Annahme ohne Bezeichnung“ ist verständlich, nicht wertend und fachlich akzeptabel.

## Prüfergebnis Tests
Ergebnis: **bestanden**.

Abgedeckte Prüffälle vorhanden:
- Annahme mit `name + uncertainty`.
- `uncertainty` ohne `name` (inkl. Fallback).
- Annahme ohne nutzbare `uncertainty` erzeugt keinen Risiko-/Unsicherheiten-Eintrag.

Bestehende Testgrenzen bleiben erhalten und laufen grün:
- Mapping-Tests insgesamt.
- Negativtests.
- Verbotene Top-Level-Felder.
- Kein `createdAt`.
- `source`/`boundary`-Konsistenz.
- Input-Mutation-Schutz.
- Verbotene Browser-/Netzwerk-/LLM-/Zeitmuster.
- Verbotene Output-Begriffe.

Quality Gate dieser Review:
- `npm test`.
- `npm run build`.

## Risiken / Resthinweise
- Die neue Unsicherheiten-Formulierung verbessert den Kontextbezug, ersetzt aber bewusst keine fachliche Risikobewertung.
- Bei künftigem UI-Ausbau sollte die kombinierte Formulierung unverändert neutral präsentiert werden (keine implizite Priorisierung durch Darstellung).
- Für Folgeschritte bleibt relevant: klare Trennung zwischen strukturierendem Report-Draft und beratender Empfehlung.

## Quality Gate
Ergebnis: **bestanden**.

- Tests erfolgreich.
- Build erfolgreich.

## Entscheidung
**Freigabe erteilt.**

Phase 11.9-Nachschärfung ist fachlich, architektonisch und testseitig tragfähig und bleibt innerhalb der definierten Grenzen.

## Anschlusslogik
Nächster offener Schritt:
- **Phase 11.11: Beratungsreport-UI-Konzept vorbereiten**

Der nächste Schritt bleibt konzeptionell und darf die Utility-Grenzen nicht auflösen.

## Negativ-Liste
Nicht Bestandteil dieser Phase:
- keine Codeänderung an Fachlogik außerhalb der Review-Dokumentation
- keine Teständerung
- keine UI-Änderung
- keine Report-Komponente
- keine Exportänderung
- keine Persistenzlogik
- kein Backend
- keine API
- keine Accounts
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
