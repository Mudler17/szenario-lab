# Phase 7.9.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach Abschluss der Relationship-Schema-Harmonisierung.

Diese Phase ist eine reine Konzeptphase.

## 2. Ausgangspunkt
- Grunddaten sind lokal editierbar.
- Annahmen sind lokal editierbar.
- Evidenz ist lokal editierbar.
- Personas sind lokal editierbar.
- Ressourcen sind lokal editierbar.
- Phasen sind lokal editierbar.
- Beziehungen sind lokal editierbar.
- Relationship-Schema und Relationship-Optionswerte wurden harmonisiert.
- Weiterhin keine Speicherung, kein LocalStorage, kein Backend, keine OpenAI-Anbindung und keine Simulation.

## 3. Tempo-Regel
Für neue editierbare Entitäten gilt weiterhin:
- Konzept
- Implementierung
- Review

Keine separaten Utility-/UI-/a11y-/Status-Sonderphasen.
Die Implementierungsphase bündelt Utility, UI, Add/Update/Remove, a11y-Basis, Status-/Hilfetexte, Tests, Doku sowie Quality Gate.

## 4. Kurze Kandidatenprüfung

### Interventionen jetzt
Begründung:
- Beziehungen wurden fachlich harmonisiert.
- Interventionen bauen sinnvoll auf Beziehungen, Annahmen, Risiken und Phasen auf.
- Interventionen sind der nächste Schritt von „Szenario beschreiben“ zu „Handlungsoptionen modellieren“.
- Sie können zunächst rein beschreibend und lokal bleiben.

### Strategien später
Begründung:
- Strategien sind übergeordneter als einzelne Interventionen.
- Strategien sollten später auf bereits modellierten Interventionen aufsetzen.
- Zu frühe Strategien könnten zu abstrakt werden.

### UI-Struktur-Audit später
Begründung:
- Die Bearbeitungsseite wird länger.
- Ein UI-Struktur-Audit ist sinnvoll, aber nicht zwingend vor der nächsten fachlichen Entität.
- Es sollte spätestens nach Interventionen geprüft werden.

### Simulation später
Begründung:
- Simulation braucht stabilere Datenbasis.
- Interventionen dürfen jetzt noch keine Wirkungsrechnung auslösen.

## 5. Entscheidung
Phase 7.9 fokussiert die Entität Interventionen.

Arbeitstitel der Entität:
Interventionen

## 6. Fachlicher Zweck der Entität
Interventionen beschreiben mögliche bewusste Eingriffe, Maßnahmen oder Handlungsimpulse innerhalb eines Szenarios.

Im aktuellen Scope dienen Interventionen dazu:
- mögliche Handlungsoptionen sichtbar zu machen,
- Bezug zu Beziehungen, Phasen oder Risiken herzustellen,
- spätere Beratungs-/Entscheidungslogik vorzubereiten,
- Szenarien von reiner Beschreibung in Richtung Handlungsorientierung zu erweitern.

Interventionen sind in Phase 7.9 ausdrücklich:
- keine Maßnahmensteuerung,
- keine Aufgabenverwaltung,
- kein Projektmanagement,
- keine Workflow-Ausführung,
- keine Simulation,
- keine automatische Wirksamkeitsbewertung,
- keine Empfehlung durch KI,
- keine Umsetzungskontrolle.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur ein minimaler, robuster Zuschnitt vorbereitet:

- id
- name
- goal
- description
- targetRelationshipId
- phaseId
- status
- risks

Vorgeschlagene Werte:

status:
- idea
- planned
- active
- completed
- unclear

Leitlinien:
- targetRelationshipId bleibt zunächst freie Textreferenz oder einfache ID.
- phaseId bleibt zunächst freie Textreferenz oder einfache ID.
- Keine harte Validierung gegen Beziehungen oder Phasen.
- Keine automatische Wirksamkeitsbewertung.
- Keine Simulation.
- Keine Aufgabenlogik.
- Keine Termine.
- Keine Verantwortlichkeiten.
- Keine Ressourcenplanung.

## 8. Abgrenzung
Interventionen werden abgegrenzt gegen:

### Beziehungen
Beziehungen beschreiben die Ausgangslage zwischen Elementen. Interventionen beschreiben mögliche Eingriffe in diese Lage.

### Phasen
Phasen strukturieren zeitliche oder prozessuale Abschnitte. Interventionen können sich auf eine Phase beziehen, sind aber keine Projektplanung.

### Ressourcen
Ressourcen beschreiben Mittel, Kapazitäten oder Engpässe. Interventionen sind keine Ressourcenplanung.

### Annahmen und Evidenz
Annahmen und Evidenz beschreiben Begründungs- und Unsicherheitslage. Interventionen reagieren auf diese Lage, ersetzen sie aber nicht.

### Strategien
Strategien beschreiben übergreifende Handlungslogiken. Interventionen sind konkreter und sollten vor Strategien modelliert werden.

### Simulation
Interventionen lösen keine Wirkungskette, Fortschreibung oder Berechnung aus.

## 9. Pattern-Verweise
Es gelten die etablierten Muster:
- Draft-Utility-Pattern aus Annahmen, Evidenz, Personas, Ressourcen, Phasen und Beziehungen.
- Lokale Bearbeitung im bestehenden Draft-State.
- Add/Update/Remove im lokalen Arbeitsspeicher.
- id-loser Schreibschutz.
- Sichtbarer Hinweis zur lokalen Draft-Grenze.
- Textliche Markierung unvollständiger Einträge.
- Keine Speicherung, kein LocalStorage, kein Backend.
- Komponenten-Tests im bestehenden SSR-Markup-Stil.
- Utility-Tests mit Nicht-Mutation, robusten Eingaben und LocalStorage-Guard.

## 10. Geplante Implementierungsphase 7.9.2
In einer gebündelten Implementierungsphase:
- Draft-Utilities für Interventionen
- minimale UI für Interventionen
- Add/Update/Remove
- a11y-Basis
- Status-/Hilfetexte
- Tests
- Phasendokumentation
- README/ROADMAP-Update
- npm test
- npm run build

## 11. Geplante Reviewphase 7.9.3
Ein Review mit Fokus auf:
- lokale Draft-Grenze
- Utility-/UI-Konsistenz
- Scope-Hygiene
- keine Maßnahmensteuerungs-Kaskade
- keine Simulationskaskade
- a11y-Basis
- Testabdeckung
- README/ROADMAP/Doku-Kohärenz

## 12. Risiken
- Interventionen können fachlich schnell wie Projektmanagement wirken.
- Nutzer könnten Interventionen als echte Aufgaben oder Maßnahmensteuerung missverstehen.
- Zu viele Referenzfelder können eine harte relationale Validierung nahelegen.
- Wenn Interventionen zu früh als „wirksam“ dargestellt werden, entsteht Scheingenauigkeit.
- Die UI-Länge steigt weiter.

Gegenmaßnahmen:
- klare Hilfetexte,
- keine Termine,
- keine Verantwortlichen,
- keine automatische Bewertung,
- keine Wirkungssimulation,
- keine harte Validierung,
- Review nach Implementierung.

## 13. Negativ-Liste
- keine Implementierung
- keine UI
- keine Utility
- keine Tests
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- keine Maßnahmensteuerung
- keine Aufgabenverwaltung
- kein Projektmanagement
- keine Termine
- keine Verantwortlichkeiten
- keine Ressourcenplanung
- keine automatische Wirksamkeitsbewertung
- keine KI-Empfehlung
- keine Workflow-Logik
- keine harte relationale Validierung gegen Beziehungen, Phasen, Ressourcen, Personas, Annahmen oder Evidenz
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine globale State-Architektur
- keine neue Dependency
- kein Import-/Export-Ausbau
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 14. Quality-Gate-Hinweis
Da dies eine reine Konzeptphase ist:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung erfolgt ist.
- Wenn ausgeführt: Ergebnis dokumentieren.
