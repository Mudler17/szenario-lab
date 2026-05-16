# Phase 9.16 · Entscheidungsnotiz-UI-Komponenten-Kontrakt konzeptionell zuschneiden

## 1. Ziel der Phase
Konzeptioneller Zuschnitt des UI-Komponenten-Kontrakts für eine spätere reine Präsentationskomponente `DecisionNotePanel`.

Diese Phase legt nur fest, wie eine spätere Komponente aussehen darf. Es wird keine Komponente implementiert.

## 2. Ausgangspunkt
- Phase 9.14 hat ein UI-Konzept für die spätere Sichtbarkeit der Entscheidungsnotiz vorbereitet.
- Phase 9.15 hat dieses Konzept geprüft und freigegeben mit Hinweisen.
- Empfohlen wurde eine reine Präsentationskomponente ohne Interaktion, ohne Erzeugungslogik und ohne Integration.
- Die Utility `createDecisionNoteDraft` bleibt unverändert.
- Die spätere UI darf keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung erzeugen.

## 3. Leitfrage
Wie muss der Komponenten-Kontrakt von `DecisionNotePanel` aussehen, damit die Entscheidungsnotiz sichtbar wird, ohne wie Bewertung, Empfehlung, Report oder Entscheidung zu wirken?

## 4. Entscheidung: Komponententyp
Der spätere erste UI-Schnitt soll eine reine Präsentationskomponente sein:

`DecisionNotePanel`

Eigenschaften:
- liest ausschließlich über Props.
- ruft keine Utility selbst auf.
- erzeugt keine Entscheidungsnotiz selbst.
- speichert nichts.
- ruft keine API auf.
- ruft kein OpenAI/LLM auf.
- mutiert keine Daten.
- hat keine eigene Bewertungslogik.
- hat keine Interaktion im ersten Schnitt.
- wird nicht in `HomePage.jsx` eingebunden.
- wird nicht in den Bearbeitungsbereich eingebunden.

## 5. Empfohlener späterer Pfad
Empfohlener Pfad für eine spätere Implementierung:

```text
src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx
```

Begründung:
- klare Trennung zwischen Fach-/Utility-Logik und UI.
- UI-Artefakt bleibt im `decisionNote`-Kontext.
- späterer Testfokus auf Präsentation wird vereinfacht.

## 6. Kontraktzuschnitt (nur konzeptionell)

### 6.1 Zweck des Props-Kontrakts
`DecisionNotePanel` soll ein bereits vorhandenes `decisionNote`-Objekt ausschließlich darstellen.

Die Komponente darf nicht selbst entscheiden,
- ob eine Notiz erzeugt wird,
- wann sie aktualisiert wird,
- und wie fachliche Ableitung erfolgt.

### 6.2 Konzeptionelle Eingabe
Geplante spätere Eingabe:
- `decisionNote` (Objekt, read-only aus Sicht der Komponente)

Konzeptioneller Mindestinhalt:
- Entscheidungspunkt
- Optionen
- Zentrale Unterschiede
- Zielkonflikte
- Kritische Annahmen
- Offene Fragen
- Nächster Klärungsschritt
- Grenzen dieser Notiz (Boundary-Bereich)

Hinweis:
Die genaue Feldform bleibt an den bestehenden Utility-Vertrag gekoppelt; in dieser Phase wird keine neue Datenstruktur eingeführt.

### 6.3 Konzeptionelle Ausgabe
- rein visuelle Darstellung (später JSX), keine Rückgabeeffekte außerhalb des Renderings.
- keine Events als Pflichtbestandteil im ersten Schnitt.
- keine Callback-Props als Pflichtbestandteil im ersten Schnitt.

## 7. Pflichtbestandteil: Boundary-Block
Der Boundary-Block ist im späteren ersten UI-Schnitt verpflichtend und immer sichtbar.

Pflichtaussagen:
- keine Empfehlung
- keine Entscheidung
- kein Score
- keine Rangfolge
- ersetzt keine fachliche Prüfung

Zuschnitt:
- nicht einklappbar.
- nicht versteckt hinter Tooltip, Hover oder Icon-only.
- auch bei leerer oder unvollständiger Notiz sichtbar.
- textlich klar, ohne autoritative Tonalität.

## 8. Nicht-Ziele des ersten UI-Schnitts
Explizit ausgeschlossen:
- Erzeugungslogik innerhalb der Komponente.
- automatische Aktualisierung.
- manuelle Aktualisierung per Button.
- jegliche Interaktion.
- HomePage-Integration.
- Bearbeitungsbereich-Integration.
- Persistenz, Export, Import.
- API-/Backend-Aufrufe.
- OpenAI-/LLM-Aufrufe.
- Empfehlung, Scoring, Ranking, Entscheidung.

## 9. A11y-Akzeptanzkriterien (für spätere Implementierung)
Für den späteren Implementierungsschnitt sind folgende Akzeptanzkriterien vorzusehen:
- klare Überschriftenhierarchie.
- semantische Listen für strukturierte Inhalte.
- Boundary-Block mit verständlichem Klartext.
- keine reine Farbcodierung.
- ausreichender Kontrast.
- keine Icons als alleinige Bedeutungsträger.
- Tastatur- und Screenreader-Verständlichkeit ohne Interaktion sicherstellen.

Hinweis:
Da der erste Schnitt ohne Interaktion geplant ist, sind keine Fokus-Workflows oder ARIA-Live-Regionen erforderlich.

## 10. Qualitätsgrenzen für die Folgephase
Vor einer späteren Implementierung müssen folgende Grenzen eingehalten bleiben:
- Presentation-only-Umsetzung ohne Utility-Aufruf.
- keine Logikverlagerung aus `createDecisionNoteDraft`.
- keine Änderung an JSON-Import/-Export.
- keine Änderung an Persistenzmodulen.
- keine Einbindung in `HomePage.jsx` ohne separate Freigabephase.

## 11. Ergebnis der Phase 9.16
- Komponenten-Kontrakt für `DecisionNotePanel` konzeptionell zugeschnitten.
- Boundary-Block als Pflichtbestandteil festgelegt.
- erste UI explizit als nicht-interaktiv festgelegt.
- Integrations- und Automatisierungsgrenzen explizit fixiert.

Status:
**Phase 9.16 konzeptionell abgeschlossen.**
