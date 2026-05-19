# Phase 11.6 · Review der minimalen Beratungsreport-Utility

## Review-Ziel
Prüfung der in Phase 11.5 eingeführten Utility `createConsultingReportDraft(scenarioDraft)` auf fachliche Korrektheit, Architekturgrenzen, Neutralität und Testabdeckung – ohne Erweiterung des Implementierungsscopes.

## Geprüfte Dateien
- `src/features/scenarios/report/createConsultingReportDraft.js`
- `src/features/scenarios/report/createConsultingReportDraft.test.js`
- `src/features/scenarios/report/index.js`
- `src/features/scenarios/report/README.md`

## Prüfergebnis Utility-Scope
**Ergebnis: bestanden (grün), mit fachlichem Mapping-Hinweis.**

- Utility bleibt klar **utility-only** (pure Funktion ohne Seiteneffekte).
- Keine UI-Elemente, keine Komponenten-Imports.
- Keine Persistenz-/Storage-Nutzung (`localStorage`, `indexedDB`, etc.).
- Keine Export-/Download-Orchestrierung.
- Keine API-/Backend-/Netzwerklogik.
- Keine OpenAI-/LLM-Anbindung.
- Keine neue Dependency.

## Prüfergebnis Output-Struktur
**Ergebnis: größtenteils bestanden (grün).**

- `reportType` = `consulting-report-draft` korrekt.
- `formatVersion` = `1` korrekt.
- `boundary` vollständig und mit klaren No-* Markern vorhanden.
- `source` enthält feste Markerwerte (`type: scenario-draft`, `mode: input-only`).
- `sections` vorhanden und als Array umgesetzt.
- `createdAt` wird nicht erzeugt.

## Prüfergebnis Pflichtsektionen
**Ergebnis: formal bestanden (grün).**

- 12 Pflichtsektionen sind vorhanden.
- Jede Sektion enthält die Struktur: `id`, `title`, `type`, `items`, `emptyState`.
- IDs sind stabil, sprechend und fachlich plausibel.
- Reihenfolge der Sektionen ist nachvollziehbar und testseitig abgesichert.

## Prüfergebnis Mapping aus scenarioDraft
**Ergebnis: fachlich teilweise bestanden (gelb).**

### Positiv
- Arrays wie `assumptions`, `evidence`, `resources`, `phases`, `relationships`, `interventions` können via `toItems` in Items überführt werden.
- Fehlende Arrays werden robust als leere Listen behandelt.
- Keine künstliche Bewertung/Anreicherung im Mapping.

### Kritischer Hinweis (Restlücke)
Die aktuelle Logik mappt generisch mit `draft[section.type]`. Dadurch entstehen fachliche Lücken:

- `Ausgangslage` nutzt `type: context`; im Szenario-Draft sind relevante Basisdaten typischerweise `name`/`description` und nicht zwingend `context`.
- `Zielbild / Fragestellung` nutzt `type: focus`; im Draft liegt das Ziel typischerweise als `goal` vor.
- `Personas / Stakeholder` nutzt `type: stakeholders`, obwohl im Draft häufig `personas` geführt werden.
- `Risiken / Unsicherheiten` nutzt `type: risks`; mögliche Draft-Felder wie `risk`/`risks` sind nicht explizit abgesichert und nicht testseitig belegt.
- `Offene Klärungsfragen` (`open-questions`) und `Nächste Arbeitsschritte` (`next-steps`) bleiben durch das rein schematische Feld-Matching oft leer.

**Bewertung:** technisch sauber, fachlich aber noch nicht ausreichend treffsicher für die erwartete inhaltliche Überführung aus realen Draft-Feldern.

## Prüfergebnis Neutralität
**Ergebnis: bestanden (grün), mit kleinem Sprachhinweis.**

- Keine Empfehlung, kein Scoring, kein Ranking, keine Entscheidung, keine Priorisierung.
- Keine „beste Option“-Logik.
- Keine Muss-/Sollte-Steuerung in der Output-Logik.
- `emptyState`-Texte bleiben deskriptiv-neutral.
- Wortlaut „prüfen“ in Empty-States ist grundsätzlich vertretbar (Beratungskontext, keine harte Handlungsnorm), kann aber in einer späteren Feinschärfung optional weicher formuliert werden.

## Prüfergebnis Tests
**Ergebnis: solide Basis, aber Mapping-Tests unvollständig (gelb).**

Vorhanden und gut:
- Strukturtests (Top-Level-Felder, Sections-Array).
- Pflichtsektionen (12 Titel).
- Boundary-Block explizit geprüft.
- Source-Block explizit geprüft.
- Kein `createdAt`.
- Keine verbotenen Top-Level-Felder.
- Input-Mutationsschutz.
- Robustheit für `null`/`undefined`/leeres Objekt.
- Robustheit bei fehlenden optionalen Arrays.
- Quelltext-Negativtests (Storage/Netzwerk/LLM/DOM/Zeitmuster).
- Output-Sprach-Negativtest (verbotene Begriffe).

Fehlend / Restlücken:
- Keine Tests, dass `name`/`description` in **Ausgangslage** landen.
- Keine Tests, dass `goal` in **Zielbild / Fragestellung** landet.
- Keine Szenario-Beispieldaten-Tests, die prüfen, ob Inhalte in den **fachlich passenden Sektionen** landen.
- Keine abgesicherte Mapping-Regel für `personas` → `Personas / Stakeholder`.
- Keine expliziten Mapping-Tests für `risk`/`risks`.

## Risiken / Resthinweise
1. **Fachliches Risiko:** Report kann trotz vorhandener Draft-Inhalte in zentralen Sektionen leer bleiben (insb. Ausgangslage/Zielbild/Stakeholder), was die Nutzbarkeit im Beratungskontext reduziert.
2. **Test-Risiko:** Der aktuelle Testsatz schützt Struktur und Grenzen, aber nicht die fachliche Mapping-Qualität.
3. **Sprach-Risiko (gering):** Einzelne Empty-State-Verben wie „prüfen“ könnten je nach Lesart als leicht normativ interpretiert werden.

## Quality Gate
- `npm test` → bestanden.
- `npm run build` → bestanden.

## Entscheidung
**Freigabe mit Resthinweisen (gelb-grün).**

Die Utility ist architektonisch sauber und scope-konform, jedoch fachlich im Mapping noch nicht ausreichend präzise. Kein Blocker für den Abschluss des Reviews, aber klare Nachschärfungsempfehlung für das Mapping.

## Anschlusslogik
Da fachliche Mapping-Lücken bestehen, wird als nächster Schritt empfohlen:

- **Phase 11.7: Beratungsreport-Utility-Mapping nachschärfen**
  - explizites Feld-Mapping (u. a. `name`/`description` → Ausgangslage, `goal` → Zielbild/Fragestellung, `personas` → Stakeholder-Sektion)
  - ergänzende fachliche Mapping-Tests auf Basis realistischer Draft-Daten

## Negativ-Liste
Nicht Bestandteil dieser Phase und weiterhin ausgeschlossen:
- keine Codeänderung an Utility oder Tests
- keine UI-Komponente
- keine Persistenz
- kein Export
- keine API/kein Backend
- keine Accounts/kein Sync/keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
