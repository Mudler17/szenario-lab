# Phase 7.7.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach der lokal freigegebenen Bearbeitung von Annahmen, Evidenz, Personas, Ressourcen und Phasen.

Diese Phase ist eine reine Konzeptphase.

## 2. Ausgangspunkt
- Grunddaten sind im lokalen Draft bearbeitbar.
- Annahmen sind im lokalen Draft bearbeitbar.
- Evidenz ist im lokalen Draft bearbeitbar.
- Personas sind im lokalen Draft bearbeitbar.
- Ressourcen sind im lokalen Draft bearbeitbar.
- Phasen sind im lokalen Draft bearbeitbar.
- Phase 7.6.3 hat die Phasen-Implementierung fachlich freigegeben.
- Weiterhin kein Speicher-, Backend-, LocalStorage-, OpenAI- oder Simulationsausbau.

## 3. Tempo-Regel
Für neue editierbare Entitäten gilt weiterhin der Drei-Schritt-Schnitt:
- Konzept
- Implementierung
- Review

Keine separaten Utility-/UI-/a11y-/Status-Sonderphasen.
Die Implementierungsphase bündelt Utility, UI, Add/Update/Remove, a11y-Basis, Status-/Hilfetexte, Tests, Doku sowie Quality Gate.

## 4. Kurze Kandidatenprüfung
- Beziehungen jetzt: Nach Personas, Ressourcen und Phasen fehlt die minimale relationale Ebene. Erst Beziehungen machen sichtbar, wie Rollen/Akteure, Spannungen, Einfluss, Vertrauen oder Abhängigkeiten innerhalb eines Szenarios zueinander stehen. Ohne diese Ebene bleiben Personas isolierte Einzelkarten.
- Interventionen später: Interventionen setzen eine stabilere relationale Ausgangslage voraus. Sonst würden Maßnahmen zu früh geplant, bevor klar ist, welche Beziehungen, Abhängigkeiten oder Konfliktlinien relevant sind.
- Metriken/Bewertungen später: Automatische Bewertungen oder Scores würden zu früh Scheingenauigkeit erzeugen und gehören nicht in den aktuellen lokalen Draft-Ausbau.
- Simulation später: Simulation braucht Beziehungen als späteren Strukturbaustein, wird aber in dieser Phase nicht vorbereitet oder umgesetzt.

## 5. Entscheidung
Phase 7.7 fokussiert die Entität Beziehungen.

Arbeitstitel der Entität: Beziehungen.

## 6. Fachlicher Zweck der Entität
Beziehungen machen sichtbar, wie relevante Akteure, Rollen, Perspektiven oder Szenarioelemente miteinander verbunden sind.

Beziehungen dienen im aktuellen Scope dazu:
- Verbindungslinien zwischen relevanten Szenarioelementen zu beschreiben,
- Spannungen, Vertrauen, Einfluss oder Abhängigkeiten minimal sichtbar zu machen,
- spätere Interventionslogik vorzubereiten, ohne sie bereits einzuführen,
- die Szenarioarbeit von isolierten Einzelentitäten zu einer einfachen Systemstruktur zu erweitern.

Beziehungen sind in Phase 7.7 ausdrücklich:
- keine Netzwerkanalyse,
- keine Organisationsdiagnostik,
- keine Stakeholderbewertung,
- keine automatische Konfliktanalyse,
- keine Simulation,
- keine Interventionsplanung.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur ein minimaler, robuster Zuschnitt vorbereitet:
- id
- sourceId
- targetId
- type
- description
- strength
- quality
- risks

Vorgeschlagene Werte:

type:
- communication
- dependency
- influence
- conflict
- support
- unclear

strength:
- low
- medium
- high
- unclear

quality:
- supportive
- neutral
- strained
- unclear

Leitlinien:
- sourceId und targetId bleiben zunächst freie Textfelder oder einfache Referenzen.
- Keine harte Validierung gegen Personas oder andere Entitäten.
- Keine Graph-Visualisierung.
- Keine automatische Netzwerkanalyse.
- Keine automatische Bewertung.
- Keine Simulation.

## 8. Abgrenzung
Beziehungen werden explizit abgegrenzt gegen:
- Personas: Personas beschreiben Rollen/Perspektiven; Beziehungen beschreiben Verbindungen zwischen Elementen.
- Ressourcen: Ressourcen beschreiben Mittel/Engpässe; Beziehungen beschreiben Kopplungen und Spannungen.
- Phasen: Phasen strukturieren Zeit/Prozess; Beziehungen strukturieren Verbindungen.
- Evidenz: Evidenz stützt oder relativiert Annahmen; Beziehungen beschreiben relationale Lage.
- Interventionen: Interventionen wären Maßnahmen; Beziehungen sind zunächst nur Beschreibung der Ausgangslage.
- Simulation: Keine dynamische Fortschreibung, keine Wirkungskette, keine Berechnung.
- Netzwerkanalyse: Keine Graphmetriken, keine Zentralität, keine Cluster, kein Ranking.

## 9. Pattern-Verweise
Es gelten die etablierten Muster der bisherigen editierbaren Entitäten:
- Draft-Utility-Pattern aus Annahmen/Evidenz/Personas/Ressourcen/Phasen.
- Lokale Bearbeitung im bestehenden Draft-State.
- Add/Update/Remove im lokalen Arbeitsspeicher.
- id-loser Schreibschutz.
- Sichtbarer Hinweis zur lokalen Draft-Grenze.
- Textliche Markierung unvollständiger Einträge.
- Keine Speicherung, kein LocalStorage, kein Backend.
- Komponenten-Tests im bestehenden SSR-Markup-Stil.
- Utility-Tests mit Nicht-Mutation, robusten Eingaben und LocalStorage-Guard.

## 10. Geplante Implementierungsphase 7.7.2
In einer gebündelten Implementierungsphase:
- Draft-Utilities für Beziehungen
- minimale UI für Beziehungen
- Add/Update/Remove
- a11y-Basis
- Status-/Hilfetexte
- Tests
- Phasendokumentation
- README/ROADMAP-Update
- npm test
- npm run build

## 11. Geplante Reviewphase 7.7.3
Ein Review mit Fokus auf:
- lokale Draft-Grenze
- Utility-/UI-Konsistenz
- Scope-Hygiene
- a11y-Basis
- Testabdeckung
- keine Stopplisten-Verstöße
- keine Netzwerkanalyse-/Interventions-/Simulationskaskade

## 12. Negativ-Liste
- keine Implementierung
- keine UI
- keine Utility
- keine Tests
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine neue Dependency
- keine globale State-Architektur
- keine Graph-Visualisierung
- keine Netzwerkanalyse
- keine Zentralitätsberechnung
- keine Clusteranalyse
- keine automatische Konfliktanalyse
- keine Stakeholderbewertung
- keine Organisationsdiagnostik
- keine Interventionsplanung
- keine Maßnahmensteuerung
- keine automatische Beziehungsbewertung
- keine harte relationale Validierung gegen Personas, Ressourcen, Phasen oder Evidenz
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine Utility-/UI-/a11y-/Status-Sonderphasen

## 13. Quality-Gate-Hinweis
- Da dies eine reine Konzeptphase ist, muss kein Anwendungscode geändert werden.
- README/ROADMAP konsistent halten.
- npm test und npm run build sind bei reinen Dokuänderungen optional; falls ausgeführt, Ergebnis dokumentieren.
