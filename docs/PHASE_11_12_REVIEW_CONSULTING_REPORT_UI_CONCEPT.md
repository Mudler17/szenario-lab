# Phase 11.12 · Review des Beratungsreport-UI-Konzepts prüfen

## Review-Ziel
Prüfung des in Phase 11.11 dokumentierten Beratungsreport-UI-Konzepts auf fachliche Tragfähigkeit, Architekturgrenzen, UX-Klarheit und A11y-Eignung – ohne Implementierung, ohne Utility-Änderung und ohne Erweiterung von Produktlogik.

## Geprüfte Dateien
- `docs/PHASE_11_11_CONSULTING_REPORT_UI_CONCEPT.md`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Konzept-Scope
**Ergebnis: bestanden.**

Das Konzept bleibt rein konzeptionell und hält die Scope-Grenzen ein:
- keine UI-Komponente implementiert,
- keine Utility-Änderung,
- keine Export-/Speicherlogik,
- keine API-/Backend-/LLM-Anbindung,
- keine neue Dependency.

Die Formulierungen in Phase 11.11 sind konsistent mit einem dokumentarischen Vorbereitungsstand ohne Codeeingriff.

## Prüfergebnis Ziel der späteren UI
**Ergebnis: bestanden mit kleinem Präzisierungshinweis.**

Das Zielbild ist klar:
- UI macht ausschließlich vorhandene `reportDraft`-Ergebnisse sichtbar,
- UI bleibt rein lesend,
- UI bleibt strukturierend und nicht entscheidend.

Präzisierungshinweis für die spätere Implementierung: Die Leselogik sollte zusätzlich explizit gegen implizite Entscheidungssignale abgesichert werden (z. B. neutrale Reihenfolge-/Label-Disziplin, keine hervorhebende Tonalität bei einzelnen Items).

## Prüfergebnis Platzierung
**Ergebnis: tragfähig als MVP, mit beobachtbarem UX-Risiko.**

Die empfohlene Platzierung als **eigener Abschnitt „Beratungsreport“ im Bearbeitungsbereich** ist als MVP-Schnitt nachvollziehbar:
- kleinster Integrationsaufwand,
- klare Auffindbarkeit,
- geringe technische Folgekosten.

Alternativen (separater Workspace-Bereich, neben Vorschau, unter Werkzeuge) wurden nachvollziehbar bewertet.

Offener Beobachtungspunkt:
- Bei wachsendem Szenarioinhalt kann der Bearbeitungsbereich visuell zu lang werden.
- Für Folgephasen sollte deshalb eine optionale Zweitbewertung erfolgen, ob der Report besser unterhalb der Vorschau oder als eigener Workspace-Bereich geführt wird.

## Prüfergebnis UI-Struktur
**Ergebnis: weitgehend vollständig.**

Die Strukturabdeckung ist für den konzeptionellen Stand ausreichend:
- Report-Kopf inkl. Boundary-Hinweis vorgesehen,
- 12 Sektionen vorgesehen,
- Item-Darstellung vorgesehen,
- Empty-States vorgesehen,
- Source-Hinweis vorgesehen,
- keine Buttons,
- keine Export-/Speicher-/Empfehlungsaktionen.

Hinweis zur sprachlichen Schärfung:
- Empty-State-Texte sollten strikt neutral gehalten sein, um keine Arbeitsaufforderung zu implizieren.

## Prüfergebnis Boundary / Neutralität
**Ergebnis: bestanden, mit Verbindlichkeits-Empfehlung.**

Die ausgeschlossenen Labels sind klar benannt:
- Empfehlung,
- Bewertung,
- Score,
- Ranking,
- Entscheidung,
- Priorität.

Visuelle Priorisierung ist im Konzept ausgeschlossen.

Empfehlung zur Nachschärfung in Folgephase:
- Boundary-Hinweis nicht optional formulieren, sondern als verpflichtender, dauerhaft sichtbarer Bestandteil des Report-Kopfs definieren.

## Prüfergebnis A11y
**Ergebnis: geeignet als konzeptionelle Grundlage.**

A11y-Anforderungen sind sinnvoll und ausreichend für den aktuellen Stand:
- semantische Überschriftenstruktur,
- Report-Region mit verständlichem `aria-label`,
- Boundary-Hinweis im Lesefluss,
- keine rein farbliche Bedeutungsvermittlung,
- verständliche Empty-States.

Empfehlung für Implementierungsphase:
- Boundary-Text sprachlich knapp und eindeutig halten, damit Screenreader-Nutzende nicht mit überlanger Vorbemerkung belastet werden.

## Prüfergebnis kleinster Implementierungsschnitt
**Ergebnis: sinnvoll zugeschnitten.**

Der vorgeschlagene Minimal-Schnitt ist angemessen:
- `ConsultingReportPreview.jsx` als reine Präsentationskomponente,
- Prop nur `reportDraft`,
- kein eigener State,
- keine Seiteneffekte,
- keine Buttons im ersten Schnitt.

Testanforderungen sind weitgehend vollständig.

Ergänzungsempfehlung:
- expliziter Negativtest auf Abwesenheit verbotener Begriffe im gerenderten Reportbereich.

## Risiken / Resthinweise
1. **Neutralitätswahrnehmung:** Auch neutrale Report-Darstellung kann als Entscheidungsassistenz interpretiert werden.
2. **Längenrisiko im Bearbeitungsbereich:** Der Abschnitt kann bei umfangreichen Drafts überladen wirken.
3. **Boundary-Hinweis wird überlesen:** Sichtbarkeit allein garantiert keine Wahrnehmung.
4. **Empty-States als Aufforderung gelesen:** Text muss bewusst deskriptiv statt handlungsleitend bleiben.
5. **Source-Hinweis ggf. zu technisch:** Begriffe wie `input-only` sollten ggf. nutzerfreundlich erläutert werden.

## Quality Gate
- `npm test`: auszuführen im Rahmen dieser Review.
- `npm run build`: auszuführen im Rahmen dieser Review.

Erwartung für diese Phase: Beide Checks grün, da keine Produktlogik geändert wurde.

## Entscheidung
**Freigabe mit Resthinweisen.**

Das Konzept aus Phase 11.11 ist fachlich, architektonisch, UX-seitig und a11y-seitig als Grundlage für einen kleinen späteren UI-Implementierungsschnitt tragfähig. Die benannten Resthinweise sind für die Folgephase als Präzisierungsaufgaben zu behandeln, nicht als Blocker für den Übergang.

## Anschlusslogik
Nächster offener Schritt:
- **Phase 11.13: Beratungsreport-UI-Komponenten-Kontrakt konzeptionell zuschneiden.**

Ziel der Anschlussphase:
- rein konzeptioneller, testbarer Komponentenvertrag,
- keine Implementierung,
- keine Erweiterung der Produktlogik.

## Negativ-Liste
Für diese Review-Phase explizit ausgeschlossen:
- keine Codeänderung an Produktlogik,
- keine UI-Komponente,
- keine Teständerung,
- keine Utility-Änderung,
- keine Exportänderung,
- keine Persistenzänderung,
- kein Backend,
- keine API,
- keine Accounts,
- kein Sync,
- keine Datenbank,
- keine OpenAI-/LLM-Anbindung,
- keine neue Dependency,
- keine automatische Empfehlung,
- kein Scoring,
- kein Ranking,
- keine Entscheidung,
- keine Simulation.
