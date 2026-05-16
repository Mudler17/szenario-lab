# Phase 9.15 · Review des Entscheidungsnotiz-UI-Konzepts prüfen

## 1. Review-Ziel
Prüfung, ob das in Phase 9.14 dokumentierte UI-Konzept für die spätere Sichtbarkeit der Entscheidungsnotiz fachlich tragfähig, ausreichend begrenzt, barrierearm vorbereitbar und frei von Empfehlungs-, Bewertungs- oder Entscheidungsautomatisierung ist.

## 2. Geprüfte Dateien
- README.md
- ROADMAP.md
- docs/PHASE_9_13_DECISION_NOTE_INTERIM_AUDIT.md
- docs/PHASE_9_14_DECISION_NOTE_UI_CONCEPT.md
- src/features/scenarios/consulting/README.md
- src/features/scenarios/consulting/decisionNote/README.md
- src/features/scenarios/consulting/decisionNote/index.js
- src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.js
- src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.test.js
- src/pages/HomePage.jsx
- src/features/scenarios/editing/index.js
- src/features/scenarios/export/index.js
- src/features/scenarios/import/index.js
- src/features/scenarios/persistence/index.js
- package.json

## 3. Ergebnis: Zielpfad eingehalten?
Prüfungsergebnis:
- reine Konzeptphase wurde eingehalten.
- keine UI implementiert.
- keine Komponente angelegt.
- keine CSS-Änderung.
- keine HomePage-Anbindung.
- keine Bearbeitungsbereich-Anbindung.
- keine Formularänderung.
- keine Utility-Änderung.
- keine Speicherung.
- keine OpenAI-/LLM-Anbindung.
- keine Simulation.
- keine Reportlogik.
- keine automatische Empfehlung.
- kein Scoring.
- keine Rangfolge.
- keine Entscheidungsautomatisierung.

Bewertung:
**freigegeben mit Hinweis**

Hinweis:
Die Konzeptgrenzen sind eingehalten; vor Implementierung sollte ein expliziter UI-Komponenten-Kontrakt (Presentation-only) vorgeschaltet werden.

## 4. Ergebnis: Grundidee der Sichtbarkeit
Prüfungsergebnis:
- Entscheidungsnotiz wird als Strukturhilfe verstanden.
- nicht als Bewertung.
- nicht als Empfehlung.
- nicht als Report.
- nicht als Entscheidung.
- nicht als Status der Szenarioqualität.
- nächster Nutzen entsteht durch kontrollierte Sichtbarkeit.

Bewertung:
- fachlich tragfähig: ja.
- Risiko von Autoritätswirkung adressiert: ja, durch klare Negativgrenzen und Boundary-Sichtbarkeit.
- „kontrollierte Sichtbarkeit“ konkret genug: überwiegend ja; für die nächste Phase sollte dies in einen konkreten Komponenten-Kontrakt übersetzt werden.

## 5. Ergebnis: Platzierungsentscheidung
Prüfungsergebnis:
- Option A (eigener Abschnitt im Bearbeitungsbereich) wurde empfohlen.
- nicht im Kopfbereich.
- nicht als Dashboard-Kachel.
- nicht als globaler App-Status.
- Option B nur als spätere Kurzform.
- Option C aktuell nicht empfohlen.

Bewertung:
- Option A sinnvoll: ja.
- Bearbeitungsbereich-Risiko ausreichend benannt: ja (Überladungsrisiko).
- Gefahr von Überladung: vorhanden, aber kontrollierbar.
- erste UI-Implementierung zunächst isolierte Präsentationskomponente ohne Integration: **ja, empfohlen**.

## 6. Ergebnis: UI-Artefaktstruktur
Prüfungsergebnis:
- Titel „Entscheidungsnotiz“ vorhanden.
- Statuslabel „Entwurf · keine Empfehlung“ vorhanden.
- Einführungstext grenzt Entscheidung/Prüfung ab.
- Hauptbereiche vorhanden:
  - Entscheidungspunkt
  - Optionen
  - Zentrale Unterschiede
  - Zielkonflikte
  - Kritische Annahmen
  - Offene Fragen
  - Nächster Klärungsschritt
  - Grenzen dieser Notiz
- Boundary-Bereich definiert als:
  - immer sichtbar
  - nicht einklappbar
  - keine Empfehlung
  - keine Entscheidung
  - kein Score
  - keine Rangfolge
  - ersetzt keine fachliche Prüfung

Bewertung:
- Struktur vollständig: ja.
- Struktur zu umfangreich: nein, für strukturierende Notiz angemessen.
- Boundary-Bereich stark genug: ja.
- Statuslabel klar genug: ja.

## 7. Ergebnis: Boundaries-Sichtbarkeit
Prüfungsergebnis:
- Boundaries nicht versteckt.
- nicht nur Tooltip.
- sichtbarer Block.
- Anfang oder Ende klar sichtbar.
- nicht kleiner oder kontrastarm.
- auch bei leerem Szenario sichtbar.

Bewertung:
- ausreichend konkret: ja.
- Boundary-Block im späteren UI-Kontrakt als Pflicht: **ja, empfohlen**.
- Boundary-Block später in Tests zwingend prüfen: **ja, empfohlen**.

## 8. Ergebnis: UI-Tonalität
Prüfungsergebnis:
Zulässige Labels enthalten:
- Entwurf
- Strukturhilfe
- Klärung
- Offene Fragen
- Zu prüfen
- Grenzen dieser Notiz

Nicht zulässige Labels enthalten:
- Empfehlung
- Beste Option
- Entscheidung
- Bewertung
- Score
- Ranking
- Freigabe
- Priorität
- Entscheidungsreif

Bewertung:
- Negativliste stark genug: weitgehend ja.
- Differenzierung zwischen Titel „Entscheidungsnotiz“ und verbotenem Label „Entscheidung“ nötig: ja, als explizite Regel sinnvoll.
- Ergänzende verbotene Begriffe empfohlen:
  - optimal
  - Ampel
  - Status (im Sinne von Entscheidungsstatus)
  - risikofrei
  - freigeben
  - priorisieren
  - übernehmen

## 9. Ergebnis: Interaktionsprinzipien
Prüfungsergebnis:
Erlaubt:
- anzeigen
- leere Bereiche/Platzhalter zeigen
- Boundaries sichtbar zeigen
- Klärungsbedarf zeigen
- manuelles Aktualisieren später prüfen

Nicht erlaubt:
- automatisch speichern
- automatisch entscheiden
- Option priorisieren
- Score anzeigen
- Rangfolge anzeigen
- Empfehlung erzeugen
- Entscheidung als abgeschlossen markieren
- Report generieren
- OpenAI/LLM aufrufen
- Daten an Backend/API senden

Bewertung:
- ausreichend klar: ja.
- Button-Risiken ausreichend begrenzt: weitgehend ja.
- erste Präsentationskomponente ohne Interaktion: **ja, empfohlen**.

## 10. Ergebnis: Aktualisierung / Erzeugung
Prüfungsergebnis:
- Variante A: automatische Ableitung beim Rendern.
- Variante B: manuelle Schaltfläche.
- Variante C: statischer Hinweis.
- Empfehlung aus Phase 9.14: zunächst Variante A oder C prüfen.
- nicht-direktive Buttontexte genannt:
  - „Notiz aktualisieren“
  - „Strukturhilfe anzeigen“

Bewertung:
- Variante A riskant wegen Live-Bewertungswirkung: ja, moderates Risiko.
- Variante C zu gering im Nutzen: potenziell ja.
- nächster Schritt zunächst reine Präsentationskomponente mit übergebenem `decisionNote` ohne Erzeugungslogik: **ja, empfohlen**.

Empfehlung:
Zuerst Presentation-only-Komponente; Erzeugungsmodus (A/B/C) erst in einer separaten Konzept-/Reviewphase festlegen.

## 11. Ergebnis: Leerzustand
Prüfungsergebnis:
- Klärungsbedarf statt Fehler.
- keine Warnampel.
- keine Bewertung.
- keine Aussage „nicht entscheidungsreif“.
- Hinweis auf fehlende Informationen.
- beratend, nicht bewertend.

Bewertung:
- stark genug: ja.
- leerer Zustand später eigener Testfall: **ja, empfohlen**.
- Risiko „fehlende Informationen“ als Defizitwertung: vorhanden, aber durch neutrale Tonalität gut begrenzbar.

## 12. Ergebnis: A11y-/Usability-Anforderungen
Prüfungsergebnis:
- Überschriftenhierarchie berücksichtigt.
- Kontrast berücksichtigt.
- keine reine Farbcodierung.
- Boundaries textlich verständlich.
- semantische Listen.
- keine visuelle Ampel.
- Icons nicht alleinige Bedeutungsträger.
- ARIA nur bei Bedarf.
- live-region nur bei dynamischer Aktualisierung.

Bewertung:
- ausreichend für Konzept: ja.
- Fokusführung/Tastaturbedienung fehlt: als späteres Akzeptanzkriterium ergänzen.
- Screenreader-Verständlichkeit des Boundary-Status fehlt: als späteres Akzeptanzkriterium ergänzen.
- separate A11y-Akzeptanzkriterien in UI-Komponentenphase: **ja, empfohlen**.

## 13. Ergebnis: Minimaler späterer UI-Schnitt
Prüfungsergebnis:
- `DecisionNotePanel` vorgesehen.
- Props: `decisionNote`.
- keine eigene Datenlogik.
- keine Speicherung.
- kein API-Zugriff.
- kein OpenAI-Aufruf.
- keine Mutation.
- keine HomePage-Anbindung.
- keine automatische Empfehlung.
- keine Scoring-Elemente.
- keine Rangfolge.
- möglicher Pfad:
  - `src/features/scenarios/consulting/decisionNote/DecisionNotePanel.jsx`
  - oder `src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx`

Bewertung:
- reine Präsentationskomponente als nächster Pfad sinnvoll: ja.
- vor Implementierung Komponenten-Kontrakt: **ja, empfohlen**.
- fachlich/technisch besserer Pfad: `src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx` für klare UI-Abgrenzung.

Empfehlung:
Zuerst Kontraktphase, danach minimale Presentation-only-Komponente ohne Integration.

## 14. Ergebnis: Integrationsgrenze
Prüfungsergebnis:
- keine HomePage-Anbindung vor eigenem Review.
- erste UI-Implementierung nur Präsentation.
- noch keine Bearbeitungsbereich-Integration.
- empfohlene Reihenfolge:
  - Review
  - Komponenten-Kontrakt
  - Review
  - minimale Präsentationskomponente
  - Review
  - erst später Integration konzipieren

Bewertung:
- Reihenfolge sinnvoll: ja.
- zu kleinteilig oder angemessen: angemessen wegen Autoritäts-/Scope-Risiken.
- Integrationsrisiko ausreichend kontrolliert: ja.

## 15. Ergebnis: Risiken und Gegenmaßnahmen
Prüfungsergebnis Risiken:
- UI wirkt wie Empfehlung.
- Nutzerinnen lesen Notiz als Bewertung.
- Boundaries werden übersehen.
- Button-Sprache erzeugt Entscheidungsdruck.
- Panel wird zu prominent.
- Reportlogik schiebt sich hinein.
- Vergleichslogik wird zu früh erweitert.
- Scheinsicherheit bei lückenhaften Daten.
- Live-Aktualisierung wirkt wie automatisierte Bewertung.

Prüfungsergebnis Gegenmaßnahmen:
- Statuslabel.
- Boundaries immer sichtbar.
- keine Ampeln.
- keine Scores.
- keine Rangfolge.
- keine Priorisierungsbegriffe.
- keine Dashboard-Platzierung.
- Präsentationskomponente vor Integration.
- Review vor Implementierung.
- keine HomePage-Anbindung ohne eigene Phase.
- spätere Tests gegen verbotene Labels.

Bewertung:
- vollständig: weitgehend ja.
- zusätzliche UI-spezifische Risiken ergänzbar:
  - visuelle Hierarchie zu dominant
  - farbliche Autorität
  - Primärbutton-Falle
  - leerer Zustand als Defizitwertung
  - mobile Überladung
- Gegenmaßnahmen ausreichend: ja, mit den oben genannten Ergänzungshinweisen.

## 16. Ergebnis: Scope-Hygiene
Geprüft und nicht eingeführt:
- Codeänderung (fachliche Implementierung)
- Teständerung
- UI-Implementierung
- CSS
- Komponente
- HomePage-Anbindung
- Bearbeitungsbereich-Anbindung
- Formularänderung
- Utility-Änderung
- Export-/Importänderung
- Speicherung
- Backend/API
- OpenAI-/LLM-Anbindung
- Simulation
- Reportlogik
- Vergleichsautomatisierung
- Multi-Szenario-Vergleich
- Empfehlung
- Scoring
- Rangfolge
- Entscheidungsautomatisierung
- neue Dependency

Bewertung:
Scope-Hygiene eingehalten.

## 17. Ergebnis: README/ROADMAP
Prüfungsergebnis:
- README nannte Phase 9.14 als letzten Stand und wurde nach Review minimal aktualisiert.
- README verweist jetzt zusätzlich auf:
  - `docs/PHASE_9_15_REVIEW_DECISION_NOTE_UI_CONCEPT.md`
- ROADMAP markierte Phase 9.14 als abgeschlossen und 9.15 als offen.
- ROADMAP wurde minimal aktualisiert:
  - Phase 9.15 auf abgeschlossen gesetzt.
  - nächster Schritt ergänzt:
    - Phase 9.16: Entscheidungsnotiz-UI-Komponenten-Kontrakt konzeptionell zuschneiden.

## 18. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test`
- `npm run build`

Ergebnisse:
- `npm test`: bestanden (`200` Tests bestanden, `0` fehlgeschlagen).
- `npm run build`: bestanden.

Hinweis:
- keine Codefixes durchgeführt (Reviewphase).

## 19. Entscheidung
**Phase 9.14 freigegeben mit Hinweisen.**

Hinweise:
- vor Implementierung Komponenten-Kontrakt zuschneiden.
- Boundary-Block als Pflichtbestandteil festlegen.
- keine Interaktion im ersten UI-Schnitt.
- Presentation-only-Komponente ohne Erzeugungslogik priorisieren.
- A11y-Akzeptanzkriterien konkretisieren.

## 20. Anschlusslogik
Review ohne Blocker.

Empfohlener nächster Schritt:
**Phase 9.16 · Entscheidungsnotiz-UI-Komponenten-Kontrakt konzeptionell zuschneiden**

Ziel:
- `DecisionNotePanel` als reine Präsentationskomponente konzeptionell zuschneiden.
- Props festlegen.
- Pflichtbereiche festlegen.
- Boundary-Block als Pflichtbestandteil definieren.
- verbotene Labels festlegen.
- A11y-Akzeptanzkriterien festlegen.
- keine Implementierung.

Empfehlung:
Komponenten-Kontrakt zuschneiden, noch keine Implementierung.

## 21. Negativ-Liste: Was im Review NICHT gemacht wurde
- keine Codefixes
- keine UI-Implementierung
- keine Codeänderung (fachliche Implementierung)
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
