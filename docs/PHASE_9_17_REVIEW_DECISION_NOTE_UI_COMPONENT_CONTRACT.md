# Phase 9.17 · Review des Entscheidungsnotiz-UI-Komponenten-Kontrakts prüfen

## 1. Review-Ziel
Prüfung, ob der in Phase 9.16 dokumentierte UI-Komponenten-Kontrakt für `DecisionNotePanel` ausreichend klein, fachlich sauber begrenzt, testbar, barrierearm vorbereitbar und frei von Empfehlungs-, Bewertungs- oder Entscheidungsautomatisierung ist.

## 2. Geprüfte Dateien
- `README.md`
- `ROADMAP.md`
- `docs/PHASE_9_15_REVIEW_DECISION_NOTE_UI_CONCEPT.md`
- `docs/PHASE_9_16_DECISION_NOTE_UI_COMPONENT_CONTRACT_CONCEPT.md`
- `docs/PHASE_9_14_DECISION_NOTE_UI_CONCEPT.md`
- `src/features/scenarios/consulting/README.md`
- `src/features/scenarios/consulting/decisionNote/README.md`
- `src/features/scenarios/consulting/decisionNote/index.js`
- `src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.js`
- `src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.test.js`
- `src/pages/HomePage.jsx`
- `src/features/scenarios/editing/index.js`
- `src/features/scenarios/export/index.js`
- `src/features/scenarios/import/index.js`
- `src/features/scenarios/persistence/index.js`
- `package.json`

## 3. Ergebnis: Zielpfad eingehalten?
Prüfergebnis:
- Reine Konzeptphase wurde eingehalten.
- Keine Komponente implementiert.
- Keine JSX-Datei angelegt.
- Keine UI implementiert.
- Keine CSS-Änderung.
- Keine HomePage-Anbindung.
- Keine Bearbeitungsbereich-Anbindung.
- Keine Formularänderung.
- Keine Utility-Änderung.
- Keine Speicherung.
- Keine API-/Backend-Anbindung.
- Keine OpenAI-/LLM-Anbindung.
- Keine Simulation.
- Keine Reportlogik.
- Keine automatische Empfehlung.
- Kein Scoring.
- Keine Rangfolge.
- Keine Entscheidungsautomatisierung.
- Keine neue Dependency.

Bewertung: **freigegeben mit Hinweis**.

Hinweis: Die Konzeptgrenzen sind sauber dokumentiert. Für die spätere Umsetzung sollten Negativtests auf verbotene Labels und Interaktionselemente explizit vorgezogen werden.

## 4. Ergebnis: Komponententyp
Prüfergebnis:
- `DecisionNotePanel` ist als reine Präsentationskomponente definiert.
- Die Komponente liest ausschließlich über Props.
- Die Komponente ruft `createDecisionNoteDraft` nicht selbst auf.
- Die Komponente erzeugt keine Entscheidungsnotiz selbst.
- Die Komponente speichert nichts.
- Die Komponente ruft keine API auf.
- Die Komponente ruft kein OpenAI/LLM auf.
- Die Komponente mutiert keine Daten.
- Die Komponente hat keine Bewertungslogik.
- Die Komponente hat keine Interaktion im ersten Schnitt.
- Keine HomePage- oder Bearbeitungsbereich-Anbindung.

Bewertung:
- Presentation-only-Grenze: **stark genug**.
- Erzeugungslogik ausgeschlossen: **ausreichend klar**.
- Integrationsgrenze: **klar und restriktiv**.

## 5. Ergebnis: Modulpfad
Prüfergebnis:
- Empfohlener späterer Pfad ist sinnvoll: `src/features/scenarios/consulting/decisionNote/ui/DecisionNotePanel.jsx`.
- UI bleibt im `decisionNote`-Kontext.
- Trennung von Utility und UI bleibt sichtbar.
- Keine Vermischung mit `editing`, `export`, `import`, `persistence`.
- Noch keine Datei/kein Ordner angelegt.

Bewertung:
- Pfad: **sinnvoll**.
- Lokaler UI-Index: **vorerst nicht nötig**, erst bei zweiter UI-Datei.
- Re-Export: **erst nach späterem Integrations-Review**.

## 6. Ergebnis: Props-Kontrakt
Prüfergebnis:
- Minimaler Prop `decisionNote` ist fachlich eng.
- `decisionNote` orientiert sich am Rückgabeobjekt von `createDecisionNoteDraft`.
- Keine weiteren Props im ersten Schnitt vorgesehen.
- Verbotene Props (u. a. `onSave`, `onDecision`, `onRecommend`, `onRank`, `score`, `status`, `priority`, `variant`, `onGenerate`) sind konzeptionell ausgeschlossen.

Bewertung:
- Props sind **ausreichend eng**.
- `status`-Verbot ist **sinnvoll**, um Steuerlogik und Autoritätswirkung zu verhindern.
- Ergänzungsbedarf: Verbot von `onClick`, `onSubmit`, `onSelect`, `onChoose` sollte in den späteren Tests explizit auftauchen.
- `decisionNote` sollte als read-only behandelt werden.
- PropTypes/TypeScript sollen bis zu einer gesonderten TS-Entscheidung ausgeschlossen bleiben.

## 7. Ergebnis: Pflichtbereiche
Prüfergebnis:
Die geforderten Bereiche sind vollständig und konsistent:
- Titel „Entscheidungsnotiz“
- Statuslabel „Entwurf · keine Empfehlung“
- Einführungstext
- Entscheidungspunkt
- Optionen
- Zentrale Unterschiede
- Zielkonflikte
- Kritische Annahmen
- Offene Fragen
- Nächster Klärungsschritt
- Grenzen dieser Notiz

Bewertung:
- Pflichtbereiche: **vollständig**.
- Umfang: **noch schlank genug** für den ersten Schnitt.
- Testbarkeit: **gut**, da text- und strukturgetrieben.
- Statuslabel: **ausreichend stark**.

## 8. Ergebnis: Boundary-Block
Prüfergebnis:
- Boundary-Block ist Pflichtbestandteil.
- Immer sichtbar.
- Nicht einklappbar.
- Nicht nur Tooltip oder Icon.
- Nicht kontrastarm.
- Auch bei leerem/fehlendem `decisionNote` sichtbar.
- Mindestinhalt bestätigt:
  - keine Empfehlung
  - keine Entscheidung
  - kein Score
  - keine Rangfolge
  - ersetzt keine fachliche Prüfung

Bewertung:
- Grenze: **stark genug**.
- Ergänzung empfohlen: „keine automatische Entscheidung“ explizit aufnehmen.
- Formulierung „ersetzt keine fachliche Prüfung“ sollte in Tests als Pflichttext abgesichert werden.
- Position (Anfang/Ende): kann offen bleiben, aber konsistent festlegen sobald Implementierungsschnitt dokumentiert wird.

## 9. Ergebnis: Fallback-Verhalten
Prüfergebnis:
- Fehlendes/unvollständiges/fehlerhaftes `decisionNote` führt zu neutralem Leerzustand.
- Boundary-Block bleibt sichtbar.
- Hinweistext vorgesehen: „Für eine belastbare Entscheidungsnotiz fehlen noch Informationen.“
- Keine Alarm-Fehlermeldung.
- Keine Warnampel.
- Keine Aussage „nicht entscheidungsreif“.
- Keine automatische Reparatur.
- Kein Utility-Aufruf in der Komponente.

Bewertung:
- Fallback: **ausreichend defensiv**.
- Risiko Defizitwertung: **gering**, wenn neutraler Text beibehalten wird.
- Leerzustand sollte später als eigener Pflichttest ergänzt werden.

## 10. Ergebnis: Darstellungsregeln
Prüfergebnis erlaubt:
- semantische Überschriften
- Listen für Array-Felder
- einfache Abschnitte
- neutrale Platzhalter
- sichtbarer Boundary-Block
- klare Textstruktur

Prüfergebnis nicht erlaubt:
- Ampel
- Score-Badge
- Ranking-Zahlen
- Prioritätslabel
- Empfehlungskarte
- Entscheidungsstatus
- Fortschrittsbalken
- Management-Report-Layout
- Dashboard-Kachel
- Call-to-Action zur Entscheidung

Bewertung:
- Ausreichend konkret: **ja**.
- Ergänzung empfohlen: „Primärbutton“ explizit als verboten aufnehmen.
- Risiko visueller Autorität: **gut begrenzt**, wenn Dashboard-Optik ausgeschlossen bleibt.

## 11. Ergebnis: Verbotene Labels und UI-Texte
Prüfergebnis nicht zulässig:
- Empfehlung
- Beste Option
- Entscheidung treffen
- Jetzt entscheiden
- Bewertung
- Score
- Ranking
- Priorität
- Freigabe
- Freigeben
- Entscheidungsreif
- Optimal
- Ampel
- Status
- Risikofrei
- Priorisieren
- Übernehmen
- Auswählen
- Abschließen

Prüfergebnis zulässig:
- Entwurf
- Strukturhilfe
- Klärung
- Offene Fragen
- Zu prüfen
- Grenzen dieser Notiz
- Nächster Klärungsschritt

Sonderregel:
- „Entscheidungsnotiz“ als Titel ist zulässig.
- „Entscheidung“ als direktives Label/Handlungsaufforderung ist nicht zulässig.

Bewertung:
- Negativliste: **weitgehend vollständig**.
- Testdifferenz Titel vs. verbotene Handlungslabels: **empfohlen**.
- Ergänzungen sinnvoll: „empfohlen“, „wählen“, „freigegeben“, „Entscheidungsstatus“, „Qualität“, „Risikoarm“.

## 12. Ergebnis: Keine Interaktion im ersten Schnitt
Prüfergebnis nicht erlaubt:
- Button
- Submit
- Speichern
- Aktualisieren
- Übernehmen
- Freigeben
- Exportieren
- Empfehlung anzeigen
- Bewertung berechnen
- Entscheidung markieren

Prüfergebnis erlaubt:
- reine Anzeige
- statische Abschnitte
- semantische Listen

Bewertung:
- Interaktionsverbot: **klar**.
- Spätere Tests ohne Buttons/Formulare/Inputs sind **zwingend empfehlenswert**.
- Link/Anchor sollte ebenfalls ausgeschlossen werden, solange es rein präsentativ bleibt.

## 13. Ergebnis: A11y-Akzeptanzkriterien
Prüfergebnis:
- Klare Überschriftenhierarchie.
- Titel als semantische Überschrift.
- Abschnitte mit verständlichen Überschriften.
- Array-Inhalte als echte Listen.
- Boundaries textlich sichtbar.
- Keine reine Farbbedeutung.
- Ausreichender Kontrast.
- Keine Icons als alleinige Bedeutung.
- Keine automatisch fokussierten Elemente.
- Keine Tastaturfalle.
- Keine unnötige Live-Region.
- Screenreader soll erkennen:
  - Status: Entwurf.
  - keine Empfehlung.
  - keine Entscheidung.
  - Grenzen der Notiz.

Bewertung:
- Konkretisierung: **gut**.
- Testbarkeit: **ausreichend**, mit pragmatischem SSR-Fokus.
- `aria-label`/`aria-labelledby` kann später vorgesehen werden, wenn dafür ein konkreter Bedarf entsteht.
- In SSR-Umgebungen sind Struktur- und Texttests realistisch, Kontrasttests ggf. ergänzend über manuelle Prüfung.

## 14. Ergebnis: Testanforderungen für spätere Implementierung
Prüfergebnis vorgesehen:
- Strukturtests
- Boundary-Tests
- keine Automatisierung
- keine Interaktion
- Fallback-Tests
- Scope-Tests
- kein Utility-Aufruf in Komponente
- kein Storage
- kein Fetch/API
- keine OpenAI-/LLM-Anbindung
- keine HomePage-Anbindung
- keine Import-/Export-/Persistenzkopplung

Bewertung:
- Insgesamt konkret genug: **ja, mit Ergänzungsbedarf**.
- Ergänzung empfohlen:
  - Quelltext-Negativtest für `DecisionNotePanel.jsx`
  - Render-Negativtests gegen Buttons/Formulare/Inputs
  - Tests gegen verbotene Labels
  - Pflichttest für fehlendes `decisionNote`

## 15. Ergebnis: Spätere Komponenten-API
Prüfergebnis:
- Empfohlene API `function DecisionNotePanel({ decisionNote }) { ... }` ist konsistent.
- `scenarioDraft` als Prop bleibt nicht empfohlen.
- Begründung schlüssig: `scenarioDraft` zieht Erzeugungslogik in die Komponente, `decisionNote` hält presentation-only.

Bewertung:
- API: **sinnvoll**.
- `decisionNote` sollte optional defensiv behandelbar bleiben.
- `decisionNote` darf in der Komponente nicht verändert werden.
- Keine Default-Erzeugung aus `scenarioDraft` innerhalb der Komponente.

## 16. Ergebnis: Integrationsgrenze
Prüfergebnis:
- Spätere Komponente zunächst nur lokal im Modul.
- Keine HomePage-Einbindung.
- Keine Bearbeitungsbereich-Einbindung.
- Kein Routing.
- Kein globaler Export außerhalb DecisionNote-Modul.
- Keine Dashboard-Platzierung.
- Keine automatische Anzeige in produktiver UI.

Bewertung:
- Integrationsgrenze: **stark genug**.
- Lokale Implementierung ohne Integration: **sinnvoll**.
- Phase 9.18 sollte diese Grenze explizit bestätigen.

## 17. Ergebnis: Risiken und Gegenmaßnahmen
Risiken:
- Komponente wirkt trotz Boundary wie Empfehlung.
- Titel wird als Entscheidungsstatus gelesen.
- Statuslabel wird übersehen.
- Boundary-Block wirkt wie Kleingedrucktes.
- Leere Felder wirken wie Mängel.
- Visuelle Hierarchie macht Panel zu autoritativ.
- Spätere Integration überlädt UI.
- Versehentliche Interaktionserweiterung.
- `scenarioDraft` statt `decisionNote` zieht Fachlogik in UI.

Gegenmaßnahmen:
- Props auf `decisionNote` begrenzen.
- Keine Buttons.
- Boundary-Block als Pflicht.
- Keine Score-/Ranking-/Empfehlungslabels.
- Keine Dashboard-Optik.
- Neutrale Leerzustände.
- A11y-Kriterien verbindlich machen.
- Tests gegen verbotene Labels.
- Tests gegen Buttons/Formulare.
- Review vor Implementierung.
- Integration erst nach separatem Konzept.

Bewertung:
- Umfang: **weitgehend vollständig**.
- Ergänzung empfohlen: gegen farbliche Autorität/mobile Überladung explizite Layout-Hinweise in Phase 9.18.
- Konkrete Testhinweise: in Phase 9.18 weiter präzisieren.

## 18. Ergebnis: Dokumentationsstand
Prüfergebnis:
- Konzeptdokument vorhanden.
- README verweist auf Phase 9.16.
- ROADMAP markiert Phase 9.16 als abgeschlossen.
- Phase 9.17 war vor diesem Review noch nicht als offener nächster Schritt sichtbar.

Doku-Nachtrag:
- ROADMAP und README werden im Rahmen dieser Reviewphase minimal ergänzt (kein funktionaler Blocker).

## 19. Quality-Gate-Ergebnis
Ausgeführt:
- `npm test` → **grün**.
- `npm run build` → **grün**.

Details:
- `npm test`: 200 Tests bestanden, 0 fehlgeschlagen.
- `npm run build`: Vite-Produktionsbuild erfolgreich.

Hinweis:
- Keine Codefixes vorgenommen.

## 20. Entscheidung
**Phase 9.16 freigegeben mit Hinweisen.**

Hinweise:
- Testvertrag vor Implementierung explizit machen.
- Quelltext-Negativtest für spätere Panel-Datei vorsehen.
- Keine Buttons/Formulare/Inputs im ersten Schnitt.
- Boundary-Block testpflichtig machen.
- Fehlendes `decisionNote` als Pflichttestfall aufnehmen.
- Verbotene Labels als Testliste aufnehmen.

## 21. Anschlusslogik
Empfohlener nächster Schritt:
**Phase 9.18 · Entscheidungsnotiz-UI-Implementierungsschnitt minimal vorbereiten**

Ziel:
- konkrete Implementierungsgrenzen für `DecisionNotePanel` festlegen
- Testanforderungen für spätere Implementierung präzisieren
- weiterhin keine Implementierung

Empfehlung:
Nicht direkt implementieren. Zuerst Implementierungsschnitt/Testvertrag minimal vorbereiten.

## 22. Negativ-Liste: Was im Review NICHT gemacht wurde
- keine Codefixes
- keine UI-Implementierung
- keine Codeänderung (außer Dokumentation)
- keine Teständerung
- keine neue Funktionalität
- keine neue Fachlogik
- keine Utility-Änderung
- keine neue Utility
- keine neue Komponente
- keine JSX-Datei
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
