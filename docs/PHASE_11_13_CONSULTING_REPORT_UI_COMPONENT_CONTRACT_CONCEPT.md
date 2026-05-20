# Phase 11.13 · Beratungsreport-UI-Komponenten-Kontrakt konzeptionell zuschneiden

## Ziel der Phase
Diese Phase definiert **rein konzeptionell** den Kontrakt für eine spätere Präsentationskomponente `ConsultingReportPreview`, die ein vorhandenes `reportDraft` in der UI **rein lesend** darstellt.

Es wird **keine** UI-Komponente implementiert, keine Produktlogik geändert und keine neue Fachfunktion eingeführt.

## Ausgangslage
- Phase 11.11 hat ein Beratungsreport-UI-Konzept vorbereitet.
- Phase 11.12 hat dieses Konzept geprüft und mit Resthinweisen freigegeben.
- Für den nächsten Umsetzungsschritt wird nun ein klarer Komponenten-Kontrakt benötigt, damit Implementierung und spätere Tests auf einer eindeutigen, begrenzten Basis starten.

## Komponentenname und Verantwortlichkeit
- Geplanter Komponentenname: `ConsultingReportPreview`
- Geplanter späterer Pfad: `src/features/scenarios/report/components/ConsultingReportPreview.jsx`
- Verantwortlichkeit:
  - Darstellung eines bereits vorhandenen `reportDraft`
  - strikt **read-only**
  - keine eigene Datenerzeugung
  - keine Seiteneffekte
  - keine Utility-Aufrufe innerhalb der Komponente, wenn `reportDraft` als Prop geliefert wird

## Props-Kontrakt
Erster Schnitt (minimal):
- **Pflicht-Prop:** `reportDraft`
- Keine `scenarioDraft`-Prop
- Keine Callback-Props
- Insbesondere keine:
  - `onExport`
  - `onSave`
  - `onDecide`
  - `onRecommend`

## Render-Kontrakt
Die spätere Komponente rendert:

1. Eine Report-Region mit sinnvollem `aria-label`
2. Einen Report-Kopf mit sichtbarem Boundary-Hinweis
3. Einen nutzerverständlichen Source-Hinweis
   - technische Marker wie `scenario-draft`/`input-only` bleiben intern
   - sichtbarer UI-Text z. B.: „Quelle: aktueller Szenario-Entwurf“
4. Die 12 Report-Sections aus `reportDraft.sections`
   - pro Section:
     - Überschrift
     - Items-Liste, wenn Items vorhanden sind
     - Empty-State-Text, wenn Items leer sind

Im ersten Schnitt ausdrücklich **nicht** enthalten:
- Buttons / Aktions-Elemente
- Scores
- Rankings
- Bewertungen
- Empfehlungen

## Boundary-Hinweis
Der Boundary-Hinweis ist verpflichtend und sichtbar im Hauptinhalt.

Anforderungen:
- kurz
- eindeutig
- nicht als versteckte Fußnote

Beispieltext:

> „Dieser Beratungsreport strukturiert vorhandene Angaben. Er erzeugt keine Empfehlung, Bewertung oder Entscheidung.“

## Empty-State-Regeln
Empty States bleiben neutral und deskriptiv:
- keine Arbeitsaufforderung
- kein „Muss“, „Sollte“, „Bitte ergänzen …“

Beispiel (zulässig):

> „Keine Inhalte im aktuellen Entwurf vorhanden.“

## A11y-Kontrakt
Die spätere Komponente erfüllt mindestens:
- Region/Sections mit passenden Labels (`section`/`region` + `aria-label`)
- klare Überschriftenhierarchie
- semantisch korrekte Listen für Items
- Boundary-Hinweis im normalen Lesefluss
- keine rein farbliche Bedeutungsübertragung
- Empty States als verständlicher Text

## Testbarer späterer Komponentenvertrag
Spätere Komponententests sollen mindestens absichern:
- sichtbares Rendern des Boundary-Hinweises
- Rendern aller Section-Überschriften
- Rendern von Items
- Rendern des Empty States bei leerer Section
- verständlicher Source-Hinweis
- keine Buttons vorhanden
- keine verbotenen Labels im UI-Text:
  - „Empfehlung“
  - „Bewertung“
  - „Score“
  - „Ranking“
  - „Entscheidung“
  - „Priorität“
- keine Utility-Aufrufe bei geliefertem `reportDraft`
- keine Seiteneffekte

## Risiken / Gegenmaßnahmen
1. **Risiko:** Report wirkt wie autoritative Entscheidung  
   **Gegenmaßnahme:** Boundary-Hinweis prominent im Kopf + neutrale Sprache ohne Entscheidungswörter.

2. **Risiko:** Report wird zu lang und schwer erfassbar  
   **Gegenmaßnahme:** klare Section-Struktur, konsistente Überschriften, fokussierte Item-Darstellung.

3. **Risiko:** Boundary wird überlesen  
   **Gegenmaßnahme:** sichtbare Position im Lesefluss nahe Titel, nicht im Footer verstecken.

4. **Risiko:** Empty States wirken wie Aufgabenliste  
   **Gegenmaßnahme:** rein deskriptive Empty-State-Texte ohne Handlungsimperative.

5. **Risiko:** Source-Hinweis ist zu technisch  
   **Gegenmaßnahme:** nutzerverständliche Formulierung („Quelle: aktueller Szenario-Entwurf“).

6. **Risiko:** verfrühte Einführung von Aktionsbuttons  
   **Gegenmaßnahme:** expliziter Ausschluss von Callbacks/Buttons im ersten Komponenten-Kontrakt.

## Anschlusslogik
Direkter Folgepfad:
- **Phase 11.14:** Review des Beratungsreport-UI-Komponenten-Kontrakts prüfen

Erst nach erfolgreichem Review darf ein minimaler Implementierungsschnitt geplant werden.

## Negativ-Liste
Nicht Teil dieser Phase:
- keine Codeänderung an Produktlogik
- keine UI-Komponente
- keine Teständerung
- keine Utility-Änderung
- keine Exportänderung
- keine Persistenzänderung
- kein Backend
- keine API
- keine Accounts
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine automatische Empfehlung
- kein Scoring
- kein Ranking
- keine Entscheidung
- keine Simulation
