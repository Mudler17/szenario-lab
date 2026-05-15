# Phase 9.14 · Entscheidungsnotiz-UI-Konzept vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung einer späteren UI-Sichtbarkeit der Entscheidungsnotiz.

Diese Phase klärt, wie die Utility `createDecisionNoteDraft` später kontrolliert sichtbar gemacht werden könnte, ohne jetzt UI zu implementieren.

## 2. Ausgangspunkt
- Phase 9.13 hat die Entscheidungsnotiz-Linie zwischengeprüft.
- `createDecisionNoteDraft` ist fachlich und technisch stabil.
- Die Utility erzeugt einen neutralen Entscheidungsnotiz-Draft.
- Die Utility trifft keine Entscheidung.
- Die Utility empfiehlt nichts.
- Die Utility erzeugt keinen Score.
- Die Utility erzeugt keine Rangfolge.
- Die Utility ist noch nicht UI-seitig sichtbar.
- Nächster fachlicher Nutzen entsteht durch kontrollierte Sichtbarkeit.

## 3. Leitfrage
Wie kann die Entscheidungsnotiz später im Bearbeitungsbereich sichtbar gemacht werden, ohne Autorität, Scheinsicherheit, Empfehlung, Scoring oder Entscheidungsautomatisierung zu erzeugen?

## 4. UI-Grundprinzipien
- Entscheidungsnotiz ist eine Strukturhilfe, kein Ergebnisbericht.
- Sichtbarkeit darf nicht wie Bewertung wirken.
- Boundaries müssen sichtbar bleiben.
- Die UI darf keine „beste Option“ suggerieren.
- Keine Ampel.
- Kein Score.
- Keine Rangfolge.
- Kein Primärbutton „Empfehlung übernehmen“.
- Kein Call-to-Action „Entscheiden“.
- Keine automatische Entscheidungsreife.
- Kein Management-Report.
- Keine Simulation.
- Keine KI-/LLM-Ausgabe.
- Menschliche Entscheidungshoheit bleibt sichtbar.

## 5. Empfohlene Platzierung

### Option A: eigener Abschnitt im Bearbeitungsbereich
Beschreibung:
- Entscheidungsnotiz als eigener, klar abgegrenzter Abschnitt im Bearbeitungsbereich.
- Nicht im Kopfbereich.
- Nicht als Dashboard-Kachel.
- Nicht als globaler App-Status.

Vorteile:
- nah an Szenariodaten.
- fachlich gut erklärbar.
- weniger autoritär als Dashboard.
- passt zur bestehenden Bearbeitungslogik.

Risiken:
- Bearbeitungsbereich kann überladen werden.
- UI muss klar als Entwurf markiert sein.

Bewertung:
- empfohlen.

### Option B: Hinweisbox unter vorhandenen Feldern
Beschreibung:
- Entscheidungsnotiz nur als kompakte Hinweisbox.

Vorteile:
- klein.
- geringe UI-Komplexität.

Risiken:
- Boundaries könnten übersehen werden.
- Artefaktstruktur wird zu stark verkürzt.
- Gefahr von Missverständnis.

Bewertung:
- nur als spätere Kurzform geeignet.

### Option C: Dashboard/Sidebar
Beschreibung:
- Entscheidungsnotiz als prominent sichtbares Beratungsartefakt.

Vorteile:
- sichtbar.
- schnell erreichbar.

Risiken:
- wirkt zu autoritativ.
- kann wie Bewertung oder Status erscheinen.
- zu früh für Minimalpfad.

Bewertung:
- aktuell nicht empfohlen.

Entscheidung:
**Option A: eigener Abschnitt im Bearbeitungsbereich** als späterer Zielpfad.

## 6. UI-Artefaktstruktur

### Titel
„Entscheidungsnotiz“

### Statuslabel
„Entwurf · keine Empfehlung“

### Kurzer Einführungstext
„Diese Notiz strukturiert offene Punkte für eine spätere fachliche Entscheidung. Sie trifft keine Entscheidung und ersetzt keine Prüfung.“

### Hauptbereiche
- Entscheidungspunkt
- Optionen
- Zentrale Unterschiede
- Zielkonflikte
- Kritische Annahmen
- Offene Fragen
- Nächster Klärungsschritt
- Grenzen dieser Notiz

### Boundary-Bereich
Immer sichtbar, nicht einklappbar:
- keine Empfehlung
- keine Entscheidung
- kein Score
- keine Rangfolge
- ersetzt keine fachliche Prüfung

## 7. Sichtbarkeit der Boundaries
- Boundaries dürfen nicht versteckt werden.
- Boundaries dürfen nicht nur im Tooltip stehen.
- Boundaries müssen im sichtbaren Block erscheinen.
- Boundaries sollten am Anfang oder am Ende klar sichtbar sein.
- Boundaries dürfen nicht kleiner oder kontrastarm sein.
- Boundaries müssen auch bei leerem Szenario sichtbar sein.

## 8. UI-Tonalität

Zulässige Labels:
- „Entwurf“
- „Strukturhilfe“
- „Klärung“
- „Offene Fragen“
- „Zu prüfen“
- „Grenzen dieser Notiz“

Nicht zulässig:
- „Empfehlung“
- „Beste Option“
- „Entscheidung“
- „Bewertung“
- „Score“
- „Ranking“
- „Freigabe“
- „Priorität“
- „Entscheidungsreif“

## 9. Interaktionsprinzipien

Für eine spätere UI gilt:

Erlaubt:
- Entscheidungsnotiz anzeigen.
- Bereiche leer oder mit Platzhaltern zeigen.
- Boundaries sichtbar zeigen.
- Hinweis auf Klärungsbedarf zeigen.
- ggf. manuelles Aktualisieren später prüfen.

Nicht erlaubt:
- automatisch speichern.
- automatisch entscheiden.
- Option priorisieren.
- Score anzeigen.
- Rangfolge anzeigen.
- Empfehlung erzeugen.
- Entscheidung als abgeschlossen markieren.
- Report generieren.
- OpenAI/LLM aufrufen.
- Daten an Backend/API senden.

## 10. Aktualisierung / Erzeugung

Konzeptionell mögliche spätere Varianten:

### Variante A: automatische Ableitung beim Rendern aus aktuellem Draft
Vorteil:
- keine Speicherung nötig.
- immer aktuell.

Risiko:
- kann wie Live-Bewertung wirken.

### Variante B: manuelle Schaltfläche „Entscheidungsnotiz aktualisieren“
Vorteil:
- Nutzerin erkennt: es ist ein bewusst erzeugter Entwurf.
- weniger Autoritätswirkung.

Risiko:
- zusätzlicher Button.
- Button-Text muss nicht-direktiv sein.

### Variante C: rein statischer Hinweis ohne Erzeugung
Vorteil:
- sicher.
- sehr minimal.

Risiko:
- fachlicher Nutzen gering.

Empfehlung:
Für spätere Implementierung zunächst Variante A oder C prüfen.
Falls Button:
- nicht „Empfehlung erstellen“
- nicht „Entscheiden“
- nicht „Bewertung berechnen“

Zulässig wäre höchstens:
- „Notiz aktualisieren“
- „Strukturhilfe anzeigen“

## 11. Leerzustand

Für leere oder unvollständige Szenarien:
- Entscheidungsnotiz zeigt Klärungsbedarf.
- Keine Fehlermeldung.
- Keine Warnampel.
- Keine Bewertung.
- Keine Aussage „nicht entscheidungsreif“.
- Hinweis:
  „Für eine belastbare Entscheidungsnotiz fehlen noch Informationen.“

Wichtig:
Auch leerer Zustand bleibt beratend, nicht bewertend.

## 12. A11y-/Usability-Anforderungen

Konzeptionell festlegen:
- klare Überschriftenhierarchie.
- ausreichend Kontrast.
- keine reine Farbcodierung.
- Boundaries textlich verständlich.
- Listen semantisch sauber.
- keine visuelle Ampel.
- keine Icons als alleinige Bedeutungsträger.
- ARIA nur dort, wo später notwendig.
- kein live-region-Zwang in erster UI-Konzeption, außer bei dynamischer Aktualisierung.

## 13. Minimaler späterer UI-Schnitt

Nur konzeptionell, keine Umsetzung.

Möglicher späterer kleinster UI-Schnitt:
- neue reine Präsentationskomponente:
  `DecisionNotePanel`
- Props:
  - `decisionNote`
- keine eigene Datenlogik.
- keine Speicherung.
- kein API-Zugriff.
- kein OpenAI-Aufruf.
- keine Mutation.
- keine HomePage-Anbindung.
- keine automatische Empfehlung.
- keine Scoring-Elemente.
- keine Rangfolge.

Möglicher späterer Pfad:
`src/features/scenarios/consulting/decisionNote/DecisionNotePanel.jsx`

Oder, wenn bestehende Struktur es sinnvoller macht:
`src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx`

Wichtig:
- jetzt keine Datei anlegen.
- jetzt keine Komponente implementieren.
- jetzt keine Tests anlegen.

## 14. Spätere Integrationsgrenze

Eine spätere UI darf zunächst nicht in `HomePage.jsx` eingebunden werden, bevor ein eigener Review erfolgt.

Mögliche spätere Reihenfolge:
- Phase 9.15: Review des UI-Konzepts.
- Phase 9.16: UI-Komponenten-Kontrakt konzeptionell zuschneiden.
- Phase 9.17: Review.
- Phase 9.18: minimale Präsentationskomponente implementieren.
- Phase 9.19: Review.
- erst danach mögliche Bearbeitungsbereich-Integration konzipieren.

Wichtig:
Die erste UI-Implementierung soll nur Präsentation sein, noch keine Integration in den Bearbeitungsbereich.

## 15. Risiken
- UI wirkt wie Empfehlung.
- Nutzerinnen lesen die Notiz als Bewertung.
- Boundaries werden übersehen.
- Button-Sprache erzeugt Entscheidungsdruck.
- Panel wird zu prominent.
- Reportlogik schiebt sich hinein.
- Vergleichslogik wird zu früh erweitert.
- UI erzeugt Scheinsicherheit bei lückenhaften Daten.
- Live-Aktualisierung wirkt wie automatisierte Bewertung.

## 16. Gegenmaßnahmen
- Statuslabel „Entwurf · keine Empfehlung“.
- Boundaries immer sichtbar.
- keine Ampeln.
- keine Scores.
- keine Rangfolge.
- keine Priorisierungsbegriffe.
- keine prominente Dashboard-Platzierung.
- zunächst Präsentationskomponente vor Integration.
- Review vor Implementierung.
- keine HomePage-Anbindung ohne eigene Phase.
- Tests gegen verbotene Labels später vorsehen.

## 17. Empfohlener nächster Schritt
**Phase 9.15 · Review des Entscheidungsnotiz-UI-Konzepts prüfen**

Ziel:
- prüfen, ob die UI-Konzeption ausreichend begrenzt ist.
- prüfen, ob Boundaries sichtbar genug sind.
- prüfen, ob ein späterer Präsentationskomponenten-Kontrakt sinnvoll vorbereitet werden kann.
- weiterhin keine Implementierung.

## 18. Negativ-Liste
- keine UI-Implementierung
- keine Codeänderung
- keine Teständerung
- keine neue Funktionalität
- keine neue Fachlogik
- keine Utility-Änderung
- keine neue Utility
- keine neue Komponente
- keine CSS-Änderung
- keine HomePage-Anbindung
- keine Bearbeitungsbereich-Anbindung
- keine Formularänderung
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine API
- kein fetch
- kein axios
- kein XMLHttpRequest
- keine OpenAI-/LLM-Anbindung
- keine Simulation
- keine Reportlogik
- keine Vergleichsautomatisierung
- kein Multi-Szenario-Vergleich
- keine automatische Empfehlung
- kein Scoring
- keine Rangfolge
- keine Entscheidungsautomatisierung
- keine neue Dependency
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 19. Quality-Gate-Hinweis
Da reine Konzeptphase:
- `npm test` und `npm run build` sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnisse dokumentieren.

Für Phase 9.14 wurden keine ausführbaren Änderungen am Code vorgenommen; daher wurden `npm test` und `npm run build` in dieser Phase nicht erneut ausgeführt.
