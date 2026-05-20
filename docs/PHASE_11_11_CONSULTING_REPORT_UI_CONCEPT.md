# Phase 11.11 · Beratungsreport-UI-Konzept vorbereiten

## Ziel der Phase
Phase 11.11 bereitet konzeptionell vor, wie ein bereits erzeugtes `reportDraft` in der Oberfläche später rein lesend sichtbar gemacht werden kann. Die Phase bleibt bewusst ohne Implementierung, ohne Utility-Änderungen und ohne zusätzliche Produktlogik.

## Ausgangslage
- In Phase 11.5 wurde die Utility `createConsultingReportDraft(scenarioDraft)` minimal implementiert.
- In Phase 11.7 und 11.9 wurde das Mapping fachlich nachgeschärft.
- In Phase 11.6, 11.8 und 11.10 wurde die Utility inkl. Mapping fachlich/technisch geprüft.
- Ergebnis: Ein neutrales `reportDraft` liegt als belastbare Grundlage vor; offen ist ausschließlich die spätere UI-Sichtbarkeit.

## Ziel der späteren UI
Die spätere UI hat genau drei Aufgaben:
1. Das bestehende neutrale Beratungsartefakt sichtbar machen.
2. Die vorhandenen Utility-Ergebnisse strukturiert darstellen.
3. Für Nutzer:innen klar erkennbar machen: Die Darstellung ist strukturierend, nicht entscheidend.

Daraus folgt:
- Keine Empfehlungen.
- Keine Bewertungen.
- Keine Priorisierung.
- Keine Entscheidungshilfe.
- Keine Simulation.
- Keine Export-/Speicherlogik.

## Platzierungsoptionen

### Option A · Eigener Bereich im Workspace
- Separater Bereich im bestehenden Arbeitslayout.
- Vorteil: klare fachliche Trennung zwischen Bearbeitung und Beratungsreport.
- Nachteil: zusätzlicher Layout-/Navigationsaufwand im ersten Schnitt.

### Option B · Neben der bestehenden Vorschau
- Report als paralleles Lesepanel zur Szenario-Vorschau.
- Vorteil: direkter Vergleich zwischen Szenarioinhalt und Report möglich.
- Nachteil: begrenzter Platz, Risiko visueller Überladung.

### Option C · Unter „Werkzeuge“
- Report im Umfeld von JSON-Download/Import-Nähe.
- Vorteil: schnell auffindbar in bestehender Struktur.
- Nachteil: fachlich missverständlich, da „Werkzeuge“ eher Aktionen als neutrale Ergebnisdarstellung suggeriert.

### Option D · Eigener Abschnitt „Beratungsreport“ im Bearbeitungsbereich
- Klar benannter Abschnitt innerhalb der vorhandenen Seite.
- Vorteil: geringe Integrationskosten, klare Auffindbarkeit, konsistent mit bestehender Abschnittslogik.
- Nachteil: kann ohne klare Boundary-Hinweise wie eine aktive Entscheidungsfunktion wirken.

## Empfohlener MVP-Platzierungsschnitt
Empfohlen wird **Option D: eigener Abschnitt „Beratungsreport“** als erster MVP-Schnitt.

Begründung:
- Kleinster Integrationsschnitt ohne neue Navigations- oder Routing-Logik.
- Fachlich klar benennbar und leicht dokumentierbar.
- Gut geeignet für eine erste rein lesende Präsentationskomponente.
- Minimiert Risiko, dass aus Versehen Interaktions-/Aktionslogik (Export, Speichern, Entscheidung) mit eingeführt wird.

## UI-Struktur (konzeptionell)

1. **Report-Kopf**
   - Überschrift „Beratungsreport“.
   - Sichtbarer Boundary-Hinweis (z. B. „Strukturierende Darstellung auf Basis des Scenario-Drafts – keine Empfehlung, keine Entscheidung“).

2. **Sections-Liste mit 12 Pflichtsektionen**
   - Reihenfolge orientiert sich am `reportDraft`.
   - Jede Sektion mit eindeutiger Überschrift.

3. **Empty-State pro Sektion**
   - Wenn eine Sektion keine Items enthält: neutrales Platzhalter-Label (z. B. „Keine Inhalte im aktuellen Draft vorhanden“).

4. **Items pro Sektion**
   - Reine Text-/Listen-Darstellung vorhandener Items.
   - Keine Score-, Ranking- oder Bewertungsindikatoren.

5. **Source-Hinweis**
   - Sichtbarer Herkunftshinweis auf Report-Ebene und/oder Sektionsebene:
     - `scenario-draft`
     - `input-only`

6. **Ausdrücklich nicht enthalten**
   - Keine Export-Buttons.
   - Keine Speichern-Buttons.
   - Keine Empfehlungs-/Score-Darstellung.

## Boundary- und Neutralitätshinweise
Die spätere UI muss die fachlichen Grenzen sichtbar machen, nicht nur implizit einhalten:
- Boundary-Hinweis im Kopf immer sichtbar.
- Neutrale Formulierungen statt Entscheidungsnarrative.
- Keine Labels wie „Empfehlung“, „Bewertung“, „Score“, „Ranking“, „Entscheidung“.
- Keine visuelle Hervorhebung, die als Priorisierung missverstanden werden kann.

## A11y-Anforderungen
- Semantische Überschriftenstruktur (`h2`/`h3` oder äquivalent konsistent).
- Report-Region als Landmark mit verständlichem `aria-label` (z. B. „Beratungsreport, rein strukturiert“).
- Verständliche, sprechende Section-Überschriften.
- Boundary-Hinweis sichtbar im regulären Lesefluss (nicht nur rein visuell versteckt).
- Keine rein farbliche Bedeutungsvermittlung; Hinweise müssen textlich verständlich sein.

## Kleinster späterer Implementierungsschnitt

### Mögliche spätere Komponente
`src/features/scenarios/report/components/ConsultingReportPreview.jsx`

### Geplanter Minimal-Kontrakt
- Prop: `reportDraft`
- Nur lesende Darstellung.
- Kein eigener State.
- Keine Seiteneffekte.
- Keine Buttons.
- Optionales rein lokales Ein-/Ausklappen ggf. später, aber **nicht** im ersten Schnitt.

## Spätere Testanforderungen
Für den späteren UI-Implementierungsschritt sind mindestens folgende Tests einzuplanen:
- Boundary-Hinweis sichtbar.
- Alle Sektionen sichtbar.
- Items sichtbar, wenn vorhanden.
- Empty-States sichtbar bei leeren Sektionen.
- Keine verbotenen Labels wie: Empfehlung, Bewertung, Score, Ranking, Entscheidung.

## Risiken / Gegenmaßnahmen
- **Risiko:** UI driftet in Entscheidungsassistenz ab.  
  **Gegenmaßnahme:** harte Negativliste in Komponente und Tests, sichtbarer Boundary-Block.

- **Risiko:** Verwechslung mit Export-/Speicherfunktionen.  
  **Gegenmaßnahme:** keine Aktions-Buttons im Report-Bereich, klare Trennung zu Werkzeugen.

- **Risiko:** A11y-Hinweise nur visuell und damit unzureichend wahrnehmbar.  
  **Gegenmaßnahme:** semantische Struktur + textlich sichtbare Hinweise + Landmark.

## Anschlusslogik
Nächster Schritt nach dieser Phase:
- **Phase 11.12:** Review des Beratungsreport-UI-Konzepts prüfen.

Danach (erst bei Freigabe):
- Zuschnitt eines kleinsten UI-Implementierungsschnitts als reine Präsentationskomponente.

## Negativ-Liste
Diese Phase und das spätere MVP-UI-Konzept schließen explizit aus:
- Keine Report-Komponente implementieren.
- Keine Utility-Änderung.
- Keine Exportfunktion.
- Keine Persistenzfunktion.
- Keine Entscheidungshilfe mit Score.
- Keine automatische Empfehlung.
- Keine LLM-Anbindung.
- Keine API-/Backend-/Datenbank-/Account-/Sync-Erweiterung.
- Keine neue Dependency.
