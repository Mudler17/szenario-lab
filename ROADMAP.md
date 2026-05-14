# ROADMAP

## Phase 0 – Planung
- [x] Planung abgeschlossen

## Phase 1 – Technisches Grundgerüst
- [x] Vite + React Basis eingerichtet
- [x] Startseite als Platzhalterstruktur angelegt
- [x] Grundlegende Projekt-Dokumentation ergänzt

## Phase 2 – Architektur und Domänenmodell
- [x] Architekturentscheidungen dokumentiert
- [x] Domänenmodell ausgearbeitet
- [x] Modulgrenzen vorläufig definiert
- [x] Code-Skeleton für Domänenmodell angelegt
- [x] Modulgrenzen nach erstem Fachmodul überprüft

## Phase 3 – Erste Fachmodule
- [x] Statisches Beispielszenario angelegt
- [x] Lesende Szenario-Vorschau aufgebaut und fachlich gegliedert
- [x] Beziehungen, Interventionen, Ressourcen und Evidenz in der lesenden Vorschau vorbereitet
- [x] Szenario-Modul fachlich dokumentiert

## Phase 4 – Szenario-Bearbeitung vorbereiten
- [x] Lokaler Draft-State vorbereitet
- [x] Grunddaten im lokalen Draft bearbeitbar gemacht: Name, Beschreibung, Ziel
- [x] Formularstruktur, Hilfetexte, Validierung, Reset und Vorschau verbessert
- [x] Phase 4 Review dokumentiert
- [ ] Keine App-interne Speicherung
- [ ] Kein LocalStorage
- [ ] Keine Simulation
- [ ] Keine OpenAI-Anbindung

## Phase 5 – Stabilisierung durch Tests und lokaler JSON-Export
- [x] Testfundament mit node --test eingeführt
- [x] Quality Gate mit npm test und npm run build dokumentiert
- [x] JSON-Export-Payload, Dateiname, Orchestrierung und Download-Adapter vorbereitet
- [x] Minimale JSON-Download-UI mit Statusmeldungen umgesetzt
- [x] Statusmeldungen und a11y der Download-Meldung geprüft
- [x] Phase 5 Review dokumentiert
- [ ] Keine App-interne Speicherung
- [ ] Kein LocalStorage
- [ ] Keine Simulation
- [ ] Keine OpenAI-Anbindung

## Phase 6 – Lokale JSON-Import-/Export-Kette
- [x] JSON-Import konzeptionell vorbereitet
- [x] Validierung, Parsing und Statusmeldungen vorbereitet
- [x] Minimale lokale JSON-Import-Prüfung umgesetzt
- [x] Bewusste Übernahme geprüfter JSON-Importe in den lokalen Draft umgesetzt
- [x] Phase 6.12: JSON-Import/Export fachlich abschließend geprüft
- [ ] Keine App-interne Speicherung
- [ ] Kein LocalStorage
- [ ] Kein Backend
- [ ] Keine OpenAI-Anbindung
- [ ] Keine Simulation

## Phase 7 – Szenario-Modell fachlich weiter editierbar machen

### Grundsatz
Neue Entität = Konzept · Implementierung · Review.
Keine separaten Utility-/UI-/a11y-/Status-Sonderphasen.

### Abgeschlossen
- [x] Phase 7.0: Nächste Entwicklungsrichtung nach lokaler Import-/Export-Kette festgelegt
- [x] Phase 7.1: Nächstes editierbares Szenariofeld konzeptionell ausgewählt
- [x] Phase 7.1 Review dokumentiert: Auswahl geprüft

- [x] Phase 7.2.1: Annahmen-Konzept vorbereitet
- [x] Phase 7.2.2: Annahmen-Implementierung vorbereitet
- [x] Phase 7.2.3 Review dokumentiert: Annahmen als editierbarer Bereich geprüft
- [x] Phase 7.2.4: Annahmen-Bearbeitung minimal umgesetzt
- [x] Phase 7.2.4 Review dokumentiert: Annahmen-Bearbeitung geprüft

- [x] Phase 7.3.1: Nächste Entität konzeptionell ausgewählt (Evidenz)
- [x] Phase 7.3.2: Evidenz-Implementierung gebündelt umgesetzt
- [x] Phase 7.3.3 Review dokumentiert: Evidenz-Implementierung geprüft

- [x] Phase 7.4.1: Nächste Entität konzeptionell ausgewählt (Personas)
- [x] Phase 7.4.2: Personas-Implementierung gebündelt umgesetzt
- [x] Phase 7.4.3 Review dokumentiert: Personas-Implementierung geprüft

- [x] Phase 7.5.1: Nächste Entität konzeptionell ausgewählt (Ressourcen)
- [x] Phase 7.5.2: Ressourcen-Implementierung gebündelt umgesetzt
- [x] Phase 7.5.3 Review dokumentiert: Ressourcen-Implementierung geprüft
- [x] Phase 7.5.4: Statusdokumentation nach Ressourcen-Review konsolidiert

### Aktuell editierbare Bereiche im lokalen Draft
- [x] Grunddaten: Name, Beschreibung, Ziel
- [x] Annahmen
- [x] Personas
- [x] Ressourcen
- [x] Evidenz

### Weiterhin ausgeschlossen
- [ ] Keine App-interne Speicherung
- [ ] Kein LocalStorage
- [ ] Kein Backend
- [ ] Keine OpenAI-Anbindung
- [ ] Keine Simulation
- [ ] Keine Beziehungslogik
- [ ] Keine Interventionen

### Möglicher nächster Schritt
- [ ] Phase 7.6.1: Nächste Entität auswählen und Konzept erstellen
