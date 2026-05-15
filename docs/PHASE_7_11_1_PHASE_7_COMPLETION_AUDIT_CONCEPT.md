# Phase 7.11.1 · Phase-7-Abschlussaudit konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung eines Phase-7-Abschlussaudits. Das spätere Audit soll prüfen, ob der Ausbau der editierbaren Szenariofelder, die Relationship-Harmonisierung, Interventionen, JSON-Werkzeuge und die Bearbeitungsbereich-Struktur konsistent, stabil und ausreichend dokumentiert sind.

Diese Phase bereitet nur vor und führt das Abschlussaudit noch nicht durch.

## 2. Ausgangspunkt
- Phase 7.10.3 ist abgeschlossen.
- Zwischenstand-Audit nach Phase 7.10 ist abgeschlossen.
- Der lokale Draft enthält inzwischen mehrere editierbare Bereiche.
- Relationship-Schema und Relationship-Optionswerte wurden harmonisiert.
- Interventionen wurden als lokale beschreibende Handlungsoptionen ergänzt.
- Bearbeitungsbereich wurde strukturiert.
- Weiterhin keine Speicherung, kein LocalStorage, kein Backend, keine OpenAI-Anbindung und keine Simulation.

## 3. Zweck des späteren Abschlussaudits
Das Abschlussaudit soll:
- den erreichten Stand von Phase 7 gesamthaft prüfen,
- offene Doku-/Statusspannungen identifizieren,
- prüfen, ob alle editierbaren Bereiche konsistent integriert sind,
- prüfen, ob Quality-Gates und Reviews dokumentiert sind,
- Scope-Grenzen erneut bestätigen,
- klären, ob Phase 7 fachlich abgeschlossen werden kann,
- entscheiden, welcher nächste Hauptschnitt sinnvoll ist.

## 4. Prüffelder des späteren Abschlussaudits

### 4.1 Editierbare Entitäten
Zu prüfen:
- Grunddaten
- Annahmen
- Evidenz
- Personas
- Ressourcen
- Phasen
- Beziehungen
- Interventionen

Je Bereich prüfen:
- lokal im Draft bearbeitbar?
- Add/Update/Remove vorhanden, soweit passend?
- id-loser Schreibschutz vorhanden, soweit passend?
- unvollständige Einträge markiert?
- Tests vorhanden?
- Review dokumentiert?
- keine Speicherung?
- keine harte relationale Validierung?
- keine Simulation?

Hinweis:
Grunddaten haben kein Add/Update/Remove im Listen-Sinn, sondern Feldbearbeitung von Name, Beschreibung, Ziel.

### 4.2 JSON-Werkzeuge
Zu prüfen:
- JSON-Download
- JSON-Import-Prüfung
- bewusste Übernahme geprüfter Imports in lokalen Draft

Kriterien:
- Download bleibt Download, keine App-Speicherung.
- Importprüfung bleibt lokal.
- Draft wird nur bewusst ersetzt.
- Nutzertexte sind weiterhin verständlich.
- Statusmeldungen bleiben a11y-kompatibel.

### 4.3 Relationship-Harmonisierung
Zu prüfen:
- Feldschema konsistent.
- Optionswerte konsistent.
- Beispiel-Szenario konsistent.
- RelationshipList und RelationshipDraftForm sprechen dieselbe Feldsprache.
- Historischer Blocker aus 7.8.3 ist durch 7.8.4 nachvollziehbar behoben.

### 4.4 Interventionen
Zu prüfen:
- Interventionen bleiben beschreibende Handlungsoptionen.
- Keine Aufgabensteuerung.
- Keine Termine.
- Keine Verantwortlichkeiten.
- Keine Ressourcenplanung.
- Keine Wirksamkeitsbewertung.
- Keine Simulation.

### 4.5 Bearbeitungsbereich-Struktur
Zu prüfen:
- Abschnittsnavigation vorhanden.
- Fachliche Gruppen vorhanden.
- Werkzeugbereich vorhanden.
- Keine Tabs.
- Keine Accordions.
- Kein Routing.
- Keine neue State-Architektur.
- Werkzeug-Sammelhinweis als möglicher kleiner Nachtrag.

### 4.6 README/ROADMAP/Dokumentation
Zu prüfen:
- README aktueller Status verständlich?
- Editierbare Bereiche korrekt?
- Dokumentationsliste vollständig genug?
- ROADMAP nachvollziehbar?
- Historie 7.8.3/7.8.4 verständlich?
- README-Länge akzeptabel oder konsolidierungsbedürftig?
- Keine rückwirkende Geschichtsglättung.

## 5. Bewertungsmaßstab
Das spätere Abschlussaudit soll je Prüffeld bewerten:
- freigegeben
- freigegeben mit Hinweis
- Nacharbeit empfohlen
- Blocker

Definitionen:
- Freigegeben: fachlich und technisch konsistent.
- Freigegeben mit Hinweis: kein Blocker, aber späterer Verbesserungsbedarf.
- Nacharbeit empfohlen: kleiner abgegrenzter Schnitt sinnvoll vor nächstem Hauptausbau.
- Blocker: Phase 7 sollte nicht abgeschlossen werden, bevor der Punkt behoben ist.

## 6. Erwartete offene Punkte
Mindestens prüfen:
- übergreifender Werkzeug-Sammelhinweis fehlt oder ist nur indirekt vorhanden
- README ist historisch lang
- ROADMAP-Historie 7.8.3/7.8.4 kann irritieren
- weitere fachliche Entität „Strategien“ wäre möglich, sollte aber erst nach Abschlussaudit folgen
- mögliche nächste Hauptphase muss klar abgegrenzt werden:
  - Strategien
  - Report
  - Simulation
  - Persistenz
  - UX-Ausbau
  - Doku-Konsolidierung

## 7. Empfohlener Ablauf für Phase 7.11.2
Phase 7.11.2 · Phase-7-Abschlussaudit durchführen

Geplanter Umfang:
- Audit-Dokument anlegen
- alle oben genannten Prüffelder bewerten
- README/ROADMAP nur minimal aktualisieren
- keine Codeänderung
- keine UI-Änderung
- keine Teständerung
- optional npm test/npm run build, wenn keine Codeänderung erfolgt
- klare Entscheidung:
  - Phase 7 abgeschlossen
  - oder Phase 7 mit Nacharbeit fortsetzen

## 8. Mögliche Anschlusslogik nach Abschlussaudit
Optionen:
- Phase 8.0 · Nächste Hauptphase festlegen
- Phase 7.12 · kleine Nacharbeit, falls Abschlussaudit Hinweise ergibt
- Phase 8.1 · Strategien konzeptionell vorbereiten
- Phase 8.1 · Persistenzentscheidung konzeptionell vorbereiten
- Phase 8.1 · Report-Ausbau konzeptionell vorbereiten

Empfehlung:
Erst nach Abschlussaudit entscheiden, ob fachlicher Ausbau, Persistenz oder Reportlogik als nächste Hauptphase sinnvoll ist.

## 9. Negativ-Liste
- kein Abschlussaudit durchführen
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Entität
- keine neue Utility
- keine neue Komponente
- keine neue Navigation
- keine Formularfeldänderung
- keine Draft-Utility-Änderung
- keine Import-/Export-Logikänderung
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- keine Strategie-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 10. Quality-Gate-Hinweis
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
