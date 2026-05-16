# Phase 9.18 · Entscheidungsnotiz-UI-Implementierungsschnitt minimal vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung des minimalen späteren Implementierungsschnitts für `DecisionNotePanel`.

Diese Phase bereitet nur den Implementierungsschnitt und Testvertrag vor. Es wird keine Komponente implementiert.

## 2. Ausgangspunkt
- Phase 9.16 hat den UI-Komponenten-Kontrakt für `DecisionNotePanel` konzeptionell zugeschnitten.
- Phase 9.17 hat diesen Kontrakt geprüft und freigegeben mit Hinweisen.
- Nächster Schritt ist nicht direkte Integration, sondern Vorbereitung eines eng begrenzten Implementierungsschnitts.
- Die spätere Komponente bleibt presentation-only.
- Keine HomePage-Anbindung.
- Keine Bearbeitungsbereich-Anbindung.
- Keine Erzeugungslogik.
- Keine Speicherung.
- Keine OpenAI-/LLM-Anbindung.
- Keine Empfehlung, kein Scoring, keine Rangfolge, keine Entscheidungsautomatisierung.

## 3. Leitfrage
Was ist der kleinste spätere Implementierungsschnitt, mit dem `DecisionNotePanel` als reine Präsentationskomponente umgesetzt werden kann, ohne Autoritätswirkung, Empfehlung, Scoring, Rangfolge oder Integration in die produktive UI zu erzeugen?

## 4. Entscheidung: Minimaler späterer Implementierungsschnitt

Der spätere Implementierungsschnitt darf maximal umfassen:

```text
src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx
src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.test.jsx
```

Zusatzgrenzen:
- Keine dritte Datei im ersten Schnitt.
- Kein CSS-Artefakt.
- Kein Re-Export außerhalb dieses UI-Pfads.
- Keine Änderung an `HomePage.jsx`.
- Keine Änderung an Bearbeitungsmodulen.
- Keine Änderung an Utility-Dateien.

## 5. Komponentenvertrag (später verbindlich)

### 5.1 Komponententyp
`DecisionNotePanel` ist im ersten Schnitt strikt presentation-only.

Die Komponente:
- liest ausschließlich über Props,
- erhält nur `decisionNote`,
- behandelt `decisionNote` read-only,
- ruft keine Utility auf,
- hat keine Event- oder Callback-Props,
- enthält keine Interaktion.

### 5.2 Pflichtbereiche in der Darstellung
Später verpflichtend sichtbare Inhalte:
- Titel: `Entscheidungsnotiz`
- Statuslabel: `Entwurf · keine Empfehlung`
- Einführungstext (neutral)
- Entscheidungspunkt
- Optionen
- Zentrale Unterschiede
- Zielkonflikte
- Kritische Annahmen
- Offene Fragen
- Nächster Klärungsschritt
- Boundary-Bereich: `Grenzen dieser Notiz`

### 5.3 Fallback bei fehlendem `decisionNote`
Pflichtverhalten für den späteren Testvertrag:
- Bei fehlendem, leerem oder unvollständigem `decisionNote` bleibt die Komponente neutral.
- Boundary-Bereich bleibt sichtbar.
- Hinweistext ist nicht-alarmistisch und ohne Autoritätswirkung.
- Kein Utility-Aufruf als Reparaturversuch.

## 6. Pflicht-Testvertrag für die spätere Implementierung

Mindestens folgende Testgruppen sind im ersten Implementierungsschnitt verpflichtend:

1. **Strukturtest**
   - Titel, Statuslabel und alle Pflichtbereiche werden dargestellt.
2. **Boundary-Block-Test**
   - Boundary-Bereich ist immer sichtbar, auch ohne verwertbares `decisionNote`.
3. **Fehlendes-`decisionNote`-Test**
   - Neutraler Leerzustand ohne Fehlerinszenierung.
4. **Negativtest Interaktion**
   - Keine Buttons, keine Formulare, keine Inputs, keine Selects, keine Textareas, keine Anchors.
5. **Negativtest Side Effects / Integrationen**
   - Kein Storage, kein Fetch/API, keine OpenAI-/LLM-Anbindung, keine HomePage-/Editing-Integration.
6. **Quelltext-Negativtest für Panel-Datei**
   - Prüft explizit, dass verbotene Tokens/Patterns nicht auftauchen (z. B. `fetch`, `localStorage`, `sessionStorage`, `indexedDB`, `axios`, `XMLHttpRequest`).

## 7. Verbotene Labels (später testpflichtige Negativliste)

Die folgenden Labels/Texte sind im ersten UI-Schnitt verboten und als Negativliste testlich abzusichern:
- `Empfehlung`
- `Beste Option`
- `Entscheidung treffen`
- `Jetzt entscheiden`
- `Bewertung`
- `Score`
- `Ranking`
- `Priorität`
- `Freigabe`
- `Freigeben`
- `Entscheidungsreif`
- `Optimal`
- `Ampel`
- `Status`
- `Risikofrei`
- `Priorisieren`
- `Übernehmen`
- `Auswählen`
- `Abschließen`
- `empfohlen`
- `wählen`
- `freigegeben`
- `Entscheidungsstatus`
- `Qualität`
- `Risikoarm`

Hinweis:
- Der Titel `Entscheidungsnotiz` ist erlaubt.
- Direktiv wirkende Entscheidungsaufforderungen bleiben verboten.

## 8. Scope-Grenzen (dürfen später nicht überschritten werden)
- Keine HomePage-Anbindung.
- Keine Bearbeitungsbereich-Anbindung.
- Keine Änderung an `decisionNote/index.js` im ersten Implementierungsschnitt.
- Keine Änderung an `createDecisionNoteDraft.js` oder zugehörigen Tests.
- Keine Änderung an Export-/Import-/Persistenzmodulen.
- Keine Speicherung (inkl. LocalStorage/SessionStorage/IndexedDB).
- Kein Backend, keine API, kein `fetch`, kein `axios`, kein `XMLHttpRequest`.
- Keine OpenAI-/LLM-Anbindung.
- Keine Reportlogik, keine Vergleichsautomatisierung.
- Keine Empfehlung, kein Scoring, keine Rangfolge, keine Entscheidungsautomatisierung.

## 9. Abnahmekriterien für den Start der späteren Implementierung
Ein späterer Implementierungsschritt ist nur dann im Scope, wenn:
- er auf die zwei freigegebenen UI-Dateien begrenzt bleibt,
- der Testvertrag (inkl. Boundary- und fehlendes-`decisionNote`-Pflichtfall) vollständig umgesetzt wird,
- die Negativliste verbotener Labels testlich abgesichert ist,
- keine Integrationsdatei und kein Fachmodul außerhalb des UI-Pfads geändert wird.

## 10. Ergebnis der Phase 9.18
- Minimaler späterer Implementierungsschnitt ist präzise begrenzt.
- Komponentenvertrag ist für einen ersten presentation-only-Schnitt konkretisiert.
- Pflicht-Testvertrag inkl. Negativtests ist festgelegt.
- Verbotene Labels sind als testpflichtige Liste fixiert.
- Scope-Grenzen für die Folgephase sind verbindlich dokumentiert.

Status:
**Phase 9.18 konzeptionell abgeschlossen.**
