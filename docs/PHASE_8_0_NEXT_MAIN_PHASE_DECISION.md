# Phase 8.0 · Nächste Hauptphase festlegen

## 1. Ziel der Phase
Festlegung der nächsten Hauptphase nach Abschluss von Phase 7.

Diese Phase trifft nur eine Richtungsentscheidung und implementiert noch nichts.

## 2. Ausgangspunkt
- Phase 7 ist abgeschlossen.
- Der lokale Draft ist fachlich stark ausgebaut.
- JSON-Download und JSON-Import-Prüfung sind vorhanden.
- Der Bearbeitungsbereich ist strukturiert.
- Weiterhin gibt es keine App-Speicherung.
- Weiterhin gibt es kein LocalStorage.
- Weiterhin gibt es kein Backend.
- Weiterhin gibt es keine Simulation.
- Weiterhin gibt es keine OpenAI-Anbindung.

## 3. Leitfrage
Welche Hauptphase ist jetzt sinnvoll, damit die App später stabil, nachvollziehbar und fachlich sauber weiterentwickelt werden kann?

## 4. Kandidatenprüfung

### Option A: Persistenzentscheidung und Speicherarchitektur vorbereiten
Nutzen:
- klärt, ob und wie Szenarien künftig erhalten bleiben
- verhindert zufällige Speicherentscheidungen
- schafft Grundlage für spätere Versionierung, Wiederaufnahme und ggf. Backend
- schützt JSON-Import/-Export vor Missverständnissen als Ersatzspeicher

Risiken:
- Persistenz kann früh zu komplex werden
- LocalStorage, Backend, Datenbank oder Accounts dürfen nicht vorschnell eingeführt werden
- Datenschutz- und Datenminimierungsfragen müssen sauber geklärt werden

Warum jetzt:
- Der lokale Draft ist inzwischen reich genug, dass Verlust/Weiterarbeit fachlich relevant wird
- Vor Report, Strategien oder Simulation sollte geklärt sein, was als dauerhafte Szenarioquelle gilt

Warum nicht jetzt:
- fachlicher Ausbau könnte weitergehen, aber auf unsicherer Speichergrundlage

### Option B: Strategien als nächste fachliche Entität vorbereiten
Nutzen:
- baut logisch auf Interventionen auf
- erweitert Szenarien Richtung übergreifender Handlungslogik

Risiken:
- kann schnell in Steuerungs-, Bewertungs- oder Entscheidungsautomatisierung kippen
- ohne Speicherentscheidung entstehen weitere komplexe lokale Daten ohne Persistenz

Bewertung:
- fachlich sinnvoll, aber nicht der stabilste nächste Hauptschnitt

### Option C: Report-Ausbau vorbereiten
Nutzen:
- macht modellierte Szenarien auswertbar und beratungsfähig
- kann auf vorhandene Entitäten zugreifen

Risiken:
- Reportlogik kann ohne Persistenz und Versionierung zu früh kommen
- Gefahr von Scheingenauigkeit

Bewertung:
- später sinnvoll, aber nach Persistenzklärung stabiler

### Option D: Simulation vorbereiten
Nutzen:
- zentraler langfristiger Mehrwert der App

Risiken:
- derzeit zu früh
- hohe Gefahr von Scheingenauigkeit
- benötigt stabile Datenmodelle, Bewertungslogik und klare Grenzen

Bewertung:
- nicht als nächste Hauptphase wählen

### Option E: README-/Doku-Konsolidierung als Hauptphase
Nutzen:
- reduziert historische Unübersichtlichkeit
- erleichtert Reviews

Risiken:
- geringer Produktfortschritt
- kann auch als Teilphase innerhalb Phase 8 oder als vorbereitende Nacharbeit erfolgen

Bewertung:
- sinnvoller Begleitschnitt, aber keine eigene Hauptphase vor Persistenzentscheidung

### Option F: UX-Ausbau
Nutzen:
- verbessert Bedienbarkeit

Risiken:
- ohne Speicherentscheidung bleibt Kernnutzen begrenzt
- UI kann wachsen, ohne Nutzungsmodell zu klären

Bewertung:
- später sinnvoll

## 5. Entscheidung
Die nächste Hauptphase wird:

**Phase 8 · Persistenzentscheidung und Speicherarchitektur vorbereiten**

Nicht entschieden wird:
- dass LocalStorage eingeführt wird
- dass ein Backend eingeführt wird
- dass eine Datenbank eingeführt wird
- dass Accounts eingeführt werden
- dass Speicherung sofort implementiert wird

Entschieden wird nur:
- Phase 8 prüft und konzipiert die Speicherfrage systematisch.

## 6. Ziel von Phase 8
Phase 8 soll klären:
- Soll die App überhaupt speichern?
- Wenn ja: was genau?
- Wo soll gespeichert werden?
- Welche Speicherformen sind ausgeschlossen?
- Wie bleibt JSON-Export/-Import als bewusstes Werkzeug erhalten?
- Wie werden Datenschutz, Datenminimierung und Nutzerkontrolle berücksichtigt?
- Wie werden spätere Versionierung und Wiederaufnahme vorbereitet?
- Wie wird verhindert, dass Speicherung mit Simulation oder KI-Anbindung vermischt wird?

## 7. Empfohlener Phasenschnitt für Phase 8

### Phase 8.1 · Persistenzentscheidung konzeptionell vorbereiten
Reines Konzept:
- Speicheroptionen prüfen
- lokale Speicherung vs. Datei-Workflow vs. Backend grob bewerten
- Datenschutz- und Scope-Grenzen dokumentieren
- Entscheidungskriterien formulieren

### Phase 8.2 · Speicheroptionen bewerten und Zielpfad auswählen
Reine Bewertungsphase oder Konzeptreview:
- Optionen vergleichen
- Zielpfad wählen
- Negativ-Liste festlegen

### Phase 8.3 · Speicherarchitektur konzeptionell vorbereiten
Nur falls Speicherung grundsätzlich bejaht wird:
- Architektur-Skizze
- Datenfluss
- Risiken
- Testschnitt
- Migrations-/Exportbezug

### Phase 8.4 · Implementierung nur nach gesonderter Freigabe
Noch nicht jetzt.

Wichtig:
Die genaue Unterteilung darf im Verlauf angepasst werden. Phase 8.0 legt nur die Hauptausrichtung fest.

## 8. Harte Grenzen für Phase 8.0
- keine Speicherimplementierung
- kein LocalStorage
- kein Backend
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine API
- keine neue Runtime-Logik
- keine Änderung an JSON-Export/-Import
- keine neue UI
- keine Simulation
- keine OpenAI-Anbindung

## 9. Risiken der gewählten Richtung
- Persistenz kann zu früh als technische Lösung behandelt werden.
- Datenschutzfragen können unterschätzt werden.
- LocalStorage kann als schnelle Lösung verführen, obwohl Datenart und Nutzererwartung unklar sind.
- Backend kann zu früh Komplexität erzeugen.
- Speicherung kann mit Versionierung, Teilen, Accounts oder KI-Anbindung vermischt werden.

Gegenmaßnahmen:
- Konzept vor Code.
- Negativ-Liste in jeder Phase.
- Keine Implementierung ohne explizite eigene Phase.
- Quality Gate bleibt erhalten.
- Datenschutz-/Datenminimierungsfragen früh sichtbar machen.
- JSON-Export/-Import weiterhin als bewusste Nutzerwerkzeuge behandeln.

## 10. Warum nicht direkt Strategien?
Strategien sind fachlich plausibel, aber erst nach Klärung der Speicherfrage stabil.

Begründung:
- Strategien würden weitere komplexe lokale Daten erzeugen.
- Ohne Persistenz bleibt die App bei komplexeren Szenarien fragil.
- Strategien können in Bewertungs- oder Steuerungslogik kippen.
- Persistenzentscheidung ist infrastrukturell vorgelagert.

## 11. Negativ-Liste
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Entität
- keine neue Utility
- keine neue Komponente
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine API
- keine OpenAI-Anbindung
- keine Simulation
- keine Strategie-Implementierung
- keine Report-Implementierung
- keine Persistenzentscheidung im technischen Sinn
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 12. Quality-Gate-Hinweis
Da reine Richtungs-/Dokumentationsphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.

Für Phase 8.0 wurden npm test und npm run build nicht ausgeführt, da ausschließlich Dokumentationsänderungen vorgenommen wurden und keine Codeänderung erfolgt ist.
