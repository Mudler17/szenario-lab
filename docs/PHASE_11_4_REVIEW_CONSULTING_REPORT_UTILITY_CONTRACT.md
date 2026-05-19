# Phase 11.4 · Review des Beratungsreport-Utility-Kontrakts prüfen

## Review-Ziel
Prüfung des in Phase 11.3 definierten Kontrakts für die spätere Utility `createConsultingReportDraft(scenarioDraft)` auf fachliche Klarheit, architektonische Abgrenzung und testbare Umsetzbarkeit.

Der Review bleibt strikt konzeptionell:
- keine Implementierung
- keine Teständerung
- keine UI-/Persistenz-/API-/LLM-Erweiterung

## Geprüfte Dateien
- `docs/PHASE_11_3_CONSULTING_REPORT_UTILITY_CONTRACT_CONCEPT.md`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Verantwortlichkeit
**Ergebnis: bestanden (klar abgegrenzt).**

- Die Utility-Verantwortung ist auf die Erzeugung **genau eines** neutralen `reportDraft` aus einem vorhandenen `scenarioDraft` begrenzt.
- Die Nicht-Verantwortungen sind explizit und vollständig benannt: keine UI, keine Speicherung, kein Export/Import, keine API-/Backend-Anbindung, keine OpenAI-/LLM-Anbindung.
- Die Grenze „strukturierend statt entscheidend“ ist ausreichend deutlich formuliert.

**Review-Hinweis:** In der späteren Implementierung sollte die Signatur weiterhin exakt bei einem Inputobjekt bleiben, damit Scope Drift früh verhindert wird.

## Prüfergebnis Input-Kontrakt
**Ergebnis: bestanden (konsistent und restriktiv).**

- Input ist auf `scenarioDraft` als einziges Eingabeobjekt begrenzt.
- Lesender Zugriff, keine Input-Mutation und keine Seiteneffekte sind explizit festgelegt.
- Externe Datenquellen sind klar ausgeschlossen (Storage, Netz, Import/Export-Pfade, LLM).

**Review-Hinweis:** Für die spätere Umsetzung sind zusätzlich explizite Tests gegen implizite Zeit-/Umgebungsquellen (`Date.now`, globale Browserobjekte) sinnvoll, auch wenn `createdAt` bereits ausgeschlossen wurde.

## Prüfergebnis Output-Kontrakt
**Ergebnis: bestanden (ausreichend strukturiert).**

- Top-Level-Pflichtstruktur (`reportType`, `formatVersion`, `boundary`, `source`, `sections`) ist für MVP und Tests ausreichend.
- Der bewusste Ausschluss von `createdAt` ist fachlich sinnvoll (Determinismus, Testbarkeit, keine Zeitlogik-Verantwortung).
- Determinismus ist konzeptionell ausreichend abgesichert, sofern die spätere Utility keine externen Quellen nutzt.
- `source` ist als Herkunfts- und Grenzmarkierung sinnvoll; die Semantik ist tragfähig.

**Review-Hinweis:** In der Implementierungsphase sollte `source` zusätzlich formatseitig eng gehalten werden (z. B. feste Markerwerte statt Freitext), damit Interpretationsspielraum reduziert wird.

## Prüfergebnis Pflichtsektionen
**Ergebnis: bestanden (vollständig und MVP-tauglich).**

Die 12 Pflichtsektionen sind vollständig und decken die neutrale Strukturierung des vorhandenen Drafts gut ab:
1. Ausgangslage
2. Zielbild / Fragestellung
3. Annahmen
4. Evidenz
5. Personas / Stakeholder
6. Ressourcen
7. Phasen
8. Beziehungen
9. Interventionen
10. Risiken / Unsicherheiten
11. Offene Klärungsfragen
12. Nächste Arbeitsschritte

- „Risiken / Unsicherheiten“ und „Offene Klärungsfragen“ sind neutral und analytisch.
- „Nächste Arbeitsschritte“ ist fachlich vertretbar, hat aber ein Rest-Risiko normativer Wirkung.

**Review-Hinweis:** Für die spätere Umsetzung sollte sprachlich gesichert werden, dass „Nächste Arbeitsschritte“ als **optionale Klär-/Prüfschritte** formuliert bleiben (kein Soll-/Muss-Charakter).

## Prüfergebnis Boundary-Block
**Ergebnis: bestanden (pflichtig und geeignet).**

- Der verpflichtende Boundary-Block ist als Schutz gegen Scope Drift angemessen.
- Enthaltene Grenzen sind fachlich vollständig für den aktuellen Zuschnitt: keine Empfehlung, keine Entscheidung, kein Scoring, keine Rangfolge, keine Simulation, keine LLM-Ausgabe.
- Der Boundary-Block sollte später sowohl sichtbar formuliert als auch maschinenlesbar auswertbar gehalten werden (Testbarkeit + UI-Transparenz in späteren Phasen).

## Prüfergebnis Neutralitätsregeln
**Ergebnis: bestanden mit kleiner Erweiterungsempfehlung.**

- Verbotsliste deckt zentrale normative Felder/Begriffe bereits ab (`recommendation`, `score`, `ranking`, `decision`, `bestOption`, `should`, `must`, `empfehlung`, `beste Option`, `Entscheidung`).
- Sprachgrenze Deutsch/Englisch ist als Mindestschutz geeignet.

**Empfohlene Ergänzungen (für spätere Phase 11.5-Tests/Guards):**
- zusätzliche Feld-/Begriffsverbote: `priority`, `rating`, `recommendedAction`, `Handlungsempfehlung`, `Bewertung`
- ergänzende Formulierungsverbote mit gleichem Effekt: „dringend empfohlen“, „zwingend“, „beste Wahl“

## Prüfergebnis testbarer Implementierungskontrakt
**Ergebnis: bestanden (testbar, robust ausbaubar).**

Die geforderten Testpunkte sind fachlich korrekt und ausreichend konkret:
- Pflichtsektionen vollständig
- Input nicht mutieren
- nur `scenarioDraft` als Datenquelle
- Boundary-Block verpflichtend
- keine Score-/Ranking-/Recommendation-Felder
- robuste Defaults bei fehlenden Arrays
- robust bei minimalem/leerem Draft

Die geforderten Negativtests gegen verbotene Bezüge sind sinnvoll und zielgenau:
- `localStorage`, `sessionStorage`, `indexedDB`
- `fetch`, `XMLHttpRequest`, `axios`
- Import/Export-Bezüge
- OpenAI-/LLM-Bezüge
- `document`, `window`, `navigator`

## Risiken / Resthinweise
1. **Scope Drift** in Richtung Entscheidungs- oder Empfehlungslogik.  
   → Mit Boundary-Block + Negativliste + Feldverbotstests adressierbar.

2. **Versteckte Empfehlung** durch sprachliche Weichformen („naheliegend“, „sollte priorisiert werden“).  
   → Sprachtests und Begriffsliste in 11.5 ergänzen.

3. **Versteckte Datenquellen** über globale APIs oder Netzmodule.  
   → Quelltext-Negativtests verpflichtend umsetzen.

4. **Zu frühe UI-/Export-Kopplung** in der Utility.  
   → Utility strikt datenstrukturell halten; keine Formatierung für Rendering/Export vorziehen.

5. **Unklare `source`-Semantik** bei freier Textbefüllung.  
   → feste Markerwerte in 11.5 erwägen.

6. **Zu langer Report** ohne MVP-Nutzen bei umfangreichen Drafts.  
   → in 11.5 klare Kürzungs-/Begrenzungsregeln prüfen, ohne neue Fachbewertung.

## Quality Gate
- `npm test` auszuführen
- `npm run build` auszuführen

Review-Entscheidung gilt nur bei bestandenem Gate.

## Entscheidung
**Freigabe mit Hinweisen.**

Der Utility-Kontrakt aus Phase 11.3 ist fachlich, architektonisch und testseitig tragfähig. Die offenen Punkte sind keine Blocker, sondern Umsetzungsleitplanken für Phase 11.5.

## Anschlusslogik
Nächster Schritt bleibt:
- **Phase 11.5: Beratungsreport-Utility minimal implementieren**

Rahmen für 11.5:
- strikt Utility-only
- keine UI-/Persistenz-/API-/LLM-Erweiterung
- direkte Testabsicherung des Kontrakts inkl. Negativtests

## Negativ-Liste
Diese Phase enthält ausdrücklich **nicht**:
- keine Codeänderung an Produktfunktionen
- keine Teständerung
- keine UI-Änderung
- keine Report-Utility-Implementierung
- keine Report-Komponente
- keine Exportänderung
- keine neue Persistenzlogik
- kein Backend
- keine API
- keine Accounts
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
