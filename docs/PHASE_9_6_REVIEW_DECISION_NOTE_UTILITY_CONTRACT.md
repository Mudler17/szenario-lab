# Phase 9.6 · Review des Entscheidungsnotiz-Utility-Kontrakts prüfen

## 1. Review-Ziel
Prüfung, ob der in Phase 9.5 dokumentierte Utility-Kontrakt für eine spätere Entscheidungsnotiz ausreichend präzise, testbar, minimal und frei von Entscheidungsautomatisierung ist.

## 2. Geprüfte Dateien
- `README.md`
- `ROADMAP.md`
- `docs/PHASE_9_3_DECISION_NOTE_IMPLEMENTATION_SLICE_CONCEPT.md`
- `docs/PHASE_9_4_REVIEW_DECISION_NOTE_IMPLEMENTATION_SLICE.md`
- `docs/PHASE_9_5_DECISION_NOTE_UTILITY_CONTRACT_CONCEPT.md`
- `src/pages/HomePage.jsx`
- `src/domain/seeds/exampleScenario.js`
- `src/features/scenarios/editing/index.js`
- `src/features/scenarios/editing/state/index.js`
- `src/features/scenarios/export/index.js`
- `src/features/scenarios/import/index.js`
- `src/features/scenarios/persistence/index.js`

## 3. Ergebnis: Zielpfad eingehalten?
Prüfung:
- Utility-Kontrakt bleibt auf Entscheidungsnotiz-Draft begrenzt.
- Keine Implementierung.
- Keine UI.
- Keine Speicherung.
- Keine OpenAI-/LLM-Anbindung.
- Keine Simulation.
- Keine Reportlogik.
- Keine automatische Entscheidung.
- Keine automatische Empfehlung.
- Kein Scoring.
- Keine Rangfolge.

Bewertung: **freigegeben mit Hinweis**.

Hinweis:
- Der Zielpfad ist eingehalten; es bleibt jedoch sinnvoll, den Sprach-Negativkatalog vor Implementierung noch minimal zu schärfen (siehe Abschnitte 9 und 12).

## 4. Ergebnis: Funktionsname
Geprüft:
- `createDecisionNoteDraft(scenarioDraft, options = {})` ist fachlich passend.
- `Draft` hält den vorläufigen Charakter sichtbar.
- `create` klingt nicht nach Entscheidung oder Empfehlung.
- `scenarioDraft` passt zur bestehenden lokalen Draft-Logik.
- `options` bleibt technisch, nicht fachautomatisierend.

Bewertung:
- Name ausreichend präzise: **ja**.
- Risiko von Missverständnis: **gering**.
- Alternative nötig: **nein**.

## 5. Ergebnis: Modulpfad
Geprüft:
- empfohlener Pfad: `src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.js`
- `consulting` hält Abstand zu Entscheidungsautomatisierung.
- `decisionNote` bleibt eng.
- keine Vermischung mit `editing`, `export`, `import`, `persistence`.
- noch kein Ordner/keine Datei angelegt.

Bewertung:
- Pfad sinnvoll: **ja**.
- lokales README später sinnvoll: **ja, optional**.
- Re-Export erst in Implementierungsphase: **ja**.

## 6. Ergebnis: Rückgabeobjekt
Geprüft:
- Pflichtfelder vollständig definiert:
  - `decisionPoint`
  - `options`
  - `centralDifferences`
  - `targetConflicts`
  - `criticalAssumptions`
  - `openQuestions`
  - `nextClarificationStep`
  - `boundaries`
- stabile Typen (`string`, `string[]`) sind festgelegt.
- keine `null`/`undefined` vorgesehen.
- `boundaries` als Pflichtfeld und nicht leer.

Bewertung:
- ausreichend stabil: **ja**.
- zu restriktiv: **eher nein** (im Minimal-Schnitt sinnvoll).
- fehlt `meta`: **nicht zwingend** für den ersten Schnitt.
- Placeholder-Arrays vs. leere Arrays: **konzeptionell vertretbar**, aber in Tests klar als Platzhalter kenntlich machen.
- Risiko scheinbarer Vollständigkeit durch Placeholder: **vorhanden**, daher Platzhalter sprachlich eindeutig markieren.

## 7. Ergebnis: Feldkontrakt und Fallbacks
Geprüft:
- fehlende Daten werden als Klärungsbedarf markiert.
- keine erfundenen Fakten.
- keine implizite Priorisierung.
- `decisionPoint` bleibt neutral.
- `options` ohne Rangfolge.
- `centralDifferences` beschreibend.
- `targetConflicts` ungelöst.
- `criticalAssumptions` ohne Wahrheitsbehauptung.
- `openQuestions` als Klärungsfragen.
- `nextClarificationStep` ohne Handlungsimperativ.
- `boundaries` als Schutzgrenzen.

Bewertung:
- Fallbacks konkret genug: **weitgehend ja**.
- Gefahr zu vieler Standardtexte: **moderat**.
- Platzhalter-Markierung in späterer Implementierung: **empfohlen**.

## 8. Ergebnis: Erlaubte und verbotene Datenzugriffe
Geprüft:
Erlaubt:
- lesender Zugriff auf übergebenen `scenarioDraft`
- Grunddaten, Annahmen, Evidenz, Personas, Ressourcen, Phasen, Beziehungen, Interventionen

Nicht erlaubt:
- Browser-Speicher
- Backend
- API
- OpenAI/LLM
- externe Daten
- Import-/Export-Pipelines
- Mutation von `scenarioDraft`
- andere Szenarien

Bewertung:
- ausreichend klar: **ja**.
- `fetch`, `axios`, `XMLHttpRequest` explizit ergänzt: **ja (in Testanforderungen verankert)**.
- Single-Scenario-Grenze stark genug: **ja**.
- Multi-Szenario-Vergleich ausgeschlossen: **ja**.

## 9. Ergebnis: Sprachliche Schutzgrenzen
Geprüft:
Positivkriterien vorhanden (`prüfen`, `klären`, `sichtbar machen`, `offen`, Vorläufigkeit, Unsicherheitstransparenz).
Negativkatalog vorhanden (`optimal`, `alternativlos`, `muss`, `richtig`, `empfohlen`, `beste Option`, `risikofrei`, `jetzt entscheiden`, `sofort umsetzen`, `klar überlegen`).

Bewertung:
- Negativkatalog stark genug: **grundsätzlich ja, mit Hinweisen**.
- `muss`-Differenzierung ausreichend: **ja**, wenn auf Entscheidungsanweisung bezogen.
- „klar überlegen“ sprachlich unpräzise: **ja, später ergänzen/ersetzen empfohlen**.
- zusätzlich sinnvoll zu ergänzen:
  - `verbindlich`
  - `objektiv besser`
  - `sollte gewählt werden`
  - `keine weitere Prüfung nötig`
  - `Entscheidung ist reif`
- spätere Tests gegen generierte Standardsprache: **erforderlich**.

## 10. Ergebnis: `nextClarificationStep`
Geprüft:
- nur Klärungsaufforderung.
- keine Umsetzungsaufforderung.
- keine Entscheidungsaufforderung.
- keine Freigabe-/Priorisierungslogik.
- neutraler Fallback vorgesehen.

Bewertung:
- ausreichend operationalisiert: **ja**.
- erster Schnitt ggf. auf festen Fallback begrenzen: **sinnvoll**.
- Risiko als Handlungsempfehlung: **niedrig bis moderat**, durch Negativtests weiter reduzierbar.

## 11. Ergebnis: `boundaries`
Geprüft:
- Pflichtfeld.
- nicht leer.
- Anti-Automatisierungsgrenze.
- keine Empfehlungssprache.
- Schutz gegen Entscheidung, Score, Rangfolge, Empfehlung.

Bewertung:
- stark genug: **ja**.
- Mindestinhalte ausreichend: **ja, mit Testhärtung empfohlen**.
- spätere Testpflicht sinnvoll für:
  - enthält „keine Empfehlung“
  - enthält „keine Entscheidung“
  - enthält „kein Score“
  - enthält „keine Rangfolge“

## 12. Ergebnis: Testanforderungen
Geprüft:
- Strukturtests
- Fallback-Tests
- Immutability-Test
- Negativtests auf verbotene Sprache
- Tests auf Nicht-Automatisierung
- Seiteneffekt-Negativtests
- Single-Scenario-Grenze

Bewertung:
- ausreichend konkret: **ja, mit kleiner Nachschärfung sinnvoll**.
- Browser-/API-Negativtests (`localStorage`, `sessionStorage`, `indexedDB`, `fetch`, `XMLHttpRequest`, `axios`): **sollten explizit als Einzeltests ausformuliert werden**.
- Tests gegen Import-/Export-/Persistenzaufrufe: **sinnvoll explizit aufnehmen**.
- Test auf Nicht-Entstehen von `score`, `ranking`, `recommendation`, `decision` Feldern: **empfohlen**.
- Test auf Input-Mutation: **bereits enthalten, beibehalten**.

## 13. Ergebnis: Scope-Hygiene
Geprüft, dass NICHT eingeführt wurde:
- Codeänderung
- UI-Änderung
- CSS-Änderung
- Teständerung
- neue Utility
- neue Komponente
- neue Fachlogik im Code
- Formularänderung
- JSON-Exportänderung
- JSON-Importänderung
- Speicherung
- LocalStorage
- SessionStorage
- IndexedDB
- Backend/API
- OpenAI-/LLM-Anbindung
- Simulation
- Report-Implementierung
- Entscheidungsnotiz-Implementierung
- automatische Bewertung
- Entscheidungsautomatisierung
- finales Scoring
- automatische Empfehlung

Ergebnis: **eingehalten**.

## 14. Ergebnis: README/ROADMAP
Geprüft:
- README nannte vor dieser Phase noch 9.4 als aktuellen Stand und führte 9.5-Dokument nicht in der Dokumentationsliste.
- ROADMAP markierte 9.5 als abgeschlossen, führte 9.6 aber noch nicht offen.

Bewertung:
- Auffälligkeit ist **Doku-Nachtrag, kein funktionaler Blocker**.

Umsetzung in Phase 9.6 (minimal):
- README auf Phase 9.6 aktualisiert.
- README-Dokumentationsliste um 9.5 und 9.6 ergänzt.
- ROADMAP: Phase 9.6 als abgeschlossen markiert.
- ROADMAP: Phase 9.7 als nächster Schritt offen ergänzt.

## 15. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnis:
- `npm test`: **bestanden**, 186 Tests bestanden, 0 fehlgeschlagen.
- `npm run build`: **bestanden**.
- Keine Codefixes durchgeführt.

## 16. Entscheidung
**Phase 9.5 freigegeben mit Hinweisen.**

Begründung:
- Utility-Kontrakt ist grundsätzlich implementierungsnah und klar abgegrenzt.
- Vor/nährend der Implementierung sollten Sprach-/Negativkatalog und explizite Testfälle für Nicht-Automatisierung minimal geschärft werden.

## 17. Anschlusslogik
Review ohne Blocker.

Empfohlene Fortsetzung:
**Option A: Phase 9.7 · Entscheidungsnotiz-Utility minimal implementieren**

Grenzen:
- nur `createDecisionNoteDraft`
- nur Modulpfad `src/features/scenarios/consulting/decisionNote/`
- keine UI
- keine HomePage-Anbindung
- keine Speicherung
- keine OpenAI-/LLM-Anbindung
- keine Empfehlung
- kein Score
- keine Rangfolge
- Tests verpflichtend

Alternative bei Nachschärfungsbedarf:
**Option B: Phase 9.7 · Entscheidungsnotiz-Test- und Sprachgrenzen nachschärfen**

Empfehlung:
- Da keine Blocker vorliegen: **Option A**, mit engem Implementierungsauftrag und begleitender Testhärtung.

## 18. Negativ-Liste: Was im Review NICHT gemacht wurde
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Utility
- keine neue Komponente
- keine neue Fachlogik im Code
- keine Änderung an bestehenden Formularen
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine API
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine HomePage-Anbindung
- keine OpenAI-Anbindung
- keine LLM-Anbindung
- keine Simulation
- keine Report-Implementierung
- keine Vergleichs-Implementierung
- keine Entscheidungsnotiz-Implementierung
- keine Phasen-/Beziehungs-Implementierung
- keine Strategie-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- kein finales Scoring
- keine automatische Empfehlung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung
- keine Codefixes
