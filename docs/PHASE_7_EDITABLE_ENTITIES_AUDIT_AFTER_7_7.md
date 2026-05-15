# Zwischenstand-Audit · Editierbare Entitäten nach Phase 7.7

## 1. Ziel des Audits
Prüfung des erreichten Stands nach Phase 7.7: Welche Szenario-Bereiche sind im lokalen Draft editierbar, welche Grenzen gelten weiterhin, welche Inkonsistenzen oder Anschlussrisiken bestehen, und welcher nächste Entwicklungsschnitt ist fachlich sinnvoll?

## 2. Geprüfte Grundlage
Folgende Dateien wurden als Grundlage für dieses Zwischenstand-Audit geprüft:
- `README.md`
- `ROADMAP.md`
- `docs/PHASE_7_DIRECTION.md`
- `docs/PHASE_7_1_NEXT_EDITABLE_FIELD_SELECTION.md`
- `docs/PHASE_7_2_DIRECTION.md`
- `docs/PHASE_7_3_1_NEXT_ENTITY_CONCEPT.md`
- `docs/PHASE_7_3_2_EVIDENCE_IMPLEMENTATION.md`
- `docs/PHASE_7_4_1_NEXT_ENTITY_CONCEPT.md`
- `docs/PHASE_7_5_1_NEXT_ENTITY_CONCEPT.md`
- `docs/PHASE_7_6_3_REVIEW_PHASES_IMPLEMENTATION.md`
- `docs/PHASE_7_7_1_NEXT_ENTITY_CONCEPT.md`
- `docs/PHASE_7_7_2_RELATIONSHIPS_IMPLEMENTATION.md`
- `docs/PHASE_7_7_3_REVIEW_RELATIONSHIPS_IMPLEMENTATION.md`
- `src/pages/HomePage.jsx`
- `src/features/scenarios/editing/state/index.js`
- `src/features/scenarios/editing/index.js`
- `src/domain/seeds/exampleScenario.js`

## 3. Aktuell editierbare Bereiche

| Bereich | Status | Implementierungsstand | Reviewstand | Bemerkung |
|---|---|---|---|---|
| Grunddaten | Editierbar im lokalen Draft | Bearbeitung von Name, Beschreibung, Ziel vorhanden (kein Add/Remove, da keine Liste) | Review-/Statuskette in den bisherigen Phasen dokumentiert | Basisbearbeitung stabil; lokale Draft-Grenze bleibt aktiv |
| Annahmen | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert | Muster für listenbasierte Entitäten etabliert |
| Evidenz | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert | Formulargestützte Minimalbearbeitung inkl. Status-/Hilfetexte |
| Personas | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert | Entitätsmuster aus Evidenz konsistent fortgeführt |
| Ressourcen | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert | Lokale Draft-Bearbeitung ohne Speicheranbindung |
| Phasen | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert (7.6.3) | Ausbau entlang etablierter Draft-Patterns |
| Beziehungen | Editierbar im lokalen Draft | Add/Update/Remove vorhanden | Review dokumentiert (7.7.3) | Fachliche Schema-Spannung zwischen alten lesenden und neuen editierbaren Feldern bleibt offen |

Kurzfazit:
- Die genannten sieben Bereiche sind im lokalen Draft bearbeitbar.
- Für Listenentitäten liegt jeweils das Add/Update/Remove-Muster vor.
- Grunddaten bleiben als Feldbearbeitung ohne Add/Remove korrekt abgegrenzt.
- Tests und Reviewdokumente sind je ausgebautem Bereich in der bisherigen Phase-7-Kette dokumentiert.

## 4. Weiterhin nicht editierbare / nicht aktive Bereiche
Folgende Bereiche sind weiterhin **nicht** Teil des aktuellen editierbaren Draft-Ausbaus:
- Interventionen
- Strategien
- Simulation
- Report
- Persistenz/Speicherung
- Backend
- OpenAI-Anbindung
- LocalStorage

Einordnung:
- Der aktuelle Ausbau bleibt bewusst auf lokale Draft-Bearbeitung fokussiert.
- Nicht aktive Bereiche sind weiterhin aus Implementierung und Architekturgrenzen ausgeschlossen.

## 5. Architekturstand
- Die Bearbeitung erfolgt weiterhin lokal in der React-Anwendung, mit Fokus auf den Draft in `HomePage`.
- Draft-Utilities sind pro Entität/Anwendungsfall im Editing-Bereich vorbereitet und werden schrittweise erweitert.
- Es gibt weiterhin keine globale State-Architektur als Ziel dieser Phase.
- Es gibt weiterhin keine App-interne Speicherung (weder Backend noch LocalStorage).
- JSON-Download/Import bleibt als lokale Funktionalität fachlich von Speicherung getrennt.
- Quality Gate bleibt grundsätzlich über `npm test` und `npm run build` definiert; im vorliegenden Audit als reine Doku-Phase optional.

## 6. Wiederkehrende Muster
Etablierte Arbeitsmuster über die bisherigen Phase-7-Schnitte:
- Konzept vor Implementierung
- Implementierung gebündelt: Utility/UI/a11y/Status/Tests/Doku
- Review nach Implementierung
- Negativ-Liste pro Phase
- lokale Draft-Grenze sichtbar halten
- id-loser Schreibschutz
- unvollständige Einträge markieren
- LocalStorage-Guard in Tests
- README/ROADMAP nachziehen

## 7. Offene fachliche Spannungen

### 7.1 Relationship-Schema-Spannung
Beobachtung:
- Beispiel-Szenario und lesende Vorschau können weiterhin ältere Relationship-Felder nutzen:
  - `from`
  - `to`
  - `trust`
  - `tension`
  - `influence`
- Die neue editierbare Relationship-Bearbeitung nutzt:
  - `sourceId`
  - `targetId`
  - `type`
  - `description`
  - `strength`
  - `quality`
  - `risks`

Bewertung:
- Für Phase 7.7 kein akuter Blocker.
- Vor weiterem Ausbau jedoch ein relevanter Harmonisierungspunkt.
- Risiko: bestehende Beispiel-Beziehungen können im Formular unvollständig wirken.
- Risiko: Export/Import kann heterogene Relationship-Strukturen transportieren.
- Risiko: spätere Simulation oder Interventionen müssten andernfalls zwei Beziehungsschemata verstehen.

Empfehlung:
Vor der nächsten großen Entität sollte eine eigene Harmonisierungsphase erwogen werden.

### 7.2 README-Struktur
Beobachtung:
- Die README ist historisch stark angewachsen.
- Es bestehen mehrere Status-/Rückblickblöcke.
- Der aktuelle Status steht am Anfang, zusätzlich existieren spätere Statusblöcke weiter unten.

Bewertung:
- Kein funktionaler Blocker.
- Risiko: Codex/Reviewer orientieren sich an veralteten Textstellen.

Empfehlung:
Spätere README-Konsolidierung einplanen, aber im Audit nicht umsetzen.

### 7.3 Reihenfolge und UI-Länge
Bewertung:
- Der Bearbeitungsbereich enthält inzwischen viele Abschnitte.
- Für den aktuellen technischen Schnitt ist das noch akzeptabel.
- Risiko: Mit weiteren Entitäten kann die lineare Bearbeitungsseite unübersichtlich werden.
- Im Audit kein UI-Umbau.

## 8. Nächste mögliche Entwicklungsschnitte

### Option A: Relationship-Schema harmonisieren
- **Nutzen:** Einheitliche Datenbasis für bestehende und kommende Entitäten, geringere Folgekomplexität.
- **Risiko:** Konzept muss Alt-/Neu-Schema sauber abgrenzen, ohne vorschnelle Migration.
- **Warum jetzt:** Beziehungen wurden gerade editierbar gemacht; Anschlussfenster für saubere Konsolidierung ist günstig.
- **Warum nicht jetzt:** Falls unmittelbarer Featuredruck auf neue Entitäten liegt.
- **Abhängigkeiten:** Klare Felddefinition, Übergangsstrategie, spätere Umsetzungsphase.

### Option B: Nächste Entität auswählen (z. B. Interventionen)
- **Nutzen:** Sichtbarer Funktionsausbau entlang der bisherigen Roadmap-Logik.
- **Risiko:** Interventionen bauen fachlich auf Beziehungen auf; heterogenes Beziehungsschema kann die Grundlage verkomplizieren.
- **Warum jetzt:** Kontinuität im Entitätenausbau.
- **Warum nicht jetzt:** Vorherige Schema-Harmonisierung reduziert Architektur- und Folgerisiken.
- **Abhängigkeiten:** Fachkonzept Interventionen, UI-Fläche, ggf. Vorarbeit an Beziehungskonsistenz.

### Option C: UI-Struktur des Bearbeitungsbereichs konsolidieren
- **Nutzen:** Bessere Bedienbarkeit bei wachsendem Entitätenumfang.
- **Risiko:** UI-Umbau ohne vorherige fachliche Konsolidierung kann Struktur mehrfach anfassen.
- **Warum jetzt:** Abschnittslänge steigt bereits.
- **Warum nicht jetzt:** Priorität liegt fachlich eher auf Datenschema-Klarheit als auf Layout-Refactor.
- **Abhängigkeiten:** UX-Schnittentscheidung, Abgrenzung zu Fachlogik, Testanpassungen.

## 9. Empfehlung
Empfehlung für den nächsten Schritt:
- **Nicht sofort Interventionen implementieren.**
- **Zuerst eine kleine Konzeptphase zur Relationship-Schema-Harmonisierung vorbereiten.**

Begründung:
Interventionen bauen fachlich auf Beziehungen auf. Wenn das Beziehungsschema heterogen bleibt, wird spätere Interventionslogik unnötig unsauber. Eine vorgeschaltete, kleine Harmonisierungskonzeption schützt die weitere Architektur.

Vorschlag nächster Schnitt:
- **Phase 7.8.1 · Relationship-Schema-Harmonisierung konzeptionell vorbereiten**

Im nächsten Schnitt noch **nicht** umsetzen:
- keine Migration
- keine Mapping-Utility
- keine UI-Änderung
- keine Beispielscenario-Änderung

Erst Konzept.

## 10. Negativ-Liste
- keine Codeänderung
- keine UI-Änderung
- keine Teständerung
- keine neue Entität
- keine neue Utility
- keine Migration
- keine Mapping-Logik
- keine Änderung am Beispiel-Szenario
- keine Änderung an HomePage
- keine Änderung an Draft-Forms
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 11. Quality-Gate-Hinweis
Da dies eine reine Dokumentations-/Auditphase ist:
- `npm test` und `npm run build` sind optional.
- In diesem Schnitt wurden sie nicht ausgeführt, da keine Codeänderung vorgenommen wurde.
