# Draft-Editing-Review (Phase 4.1–4.6)

## 1. Ausgangspunkt
- Lokaler Szenario-Draft ist sichtbar.
- Draft entsteht aus `exampleScenario`.
- Reset stellt den Originalzustand wieder her.
- Bearbeitbar sind derzeit nur drei Szenario-Grundfelder:
  - `name`
  - `description`
  - `goal`

## 2. Was umgesetzt wurde
- Phase 4.1: Lokaler Draft im Arbeitsspeicher sichtbar
- Phase 4.2: Szenario-Name bearbeitbar
- Phase 4.3: Szenario-Beschreibung bearbeitbar
- Phase 4.4: Szenario-Ziel bearbeitbar
- Phase 4.5: Formularstruktur verbessert
- Phase 4.6: Update-Logik in Utility ausgelagert

## 3. Was bewusst nicht umgesetzt wurde
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine Personas-Bearbeitung
- keine Ressourcen-Bearbeitung
- keine Interventionen-Bearbeitung
- keine weiteren Formularbereiche
- keine neuen Module
- keine Persistenzlogik

## 4. Bewertung
- Der aktuelle Draft-Stand ist klein, verständlich und kontrolliert.
- Die Trennung zwischen read-only Preview und lokalem Draft ist erkennbar.
- Die Update-Logik ist nicht mehr direkt mehrfach in HomePage dupliziert.
- Die App bleibt weiterhin ein lokaler Arbeitsentwurf ohne Speicherfunktion.

## 5. Risiken
- HomePage enthält weiterhin Orchestrierungslogik.
- Weitere Felder könnten schnell zu Formularwachstum führen.
- Vor der Bearbeitung von Personas/Ressourcen sollte die Grundstruktur stabil bleiben.
- Vor Speicherung braucht es klare Entscheidung über Speichergrenzen.

## 6. Empfehlung für nächste Schritte
Empfohlene Reihenfolge:
- Phase 4.7: einfache Validierung für Grundfelder vorbereiten
- Phase 4.8: visuelle Trennung von Bearbeitungsbereich und Preview verbessern
- Phase 4.9: bewusst entscheiden, ob Speicherung vorbereitet wird oder ob erst weitere Grundfelder folgen

Nicht als nächster Schritt empfohlen:
- Personas bearbeiten
- Ressourcen bearbeiten
- Interventionen bearbeiten
- LocalStorage einbauen
- Simulation einbauen
- OpenAI-Anbindung einbauen

## 7. Review-Ergebnis
Phase 4.1 bis 4.6 gelten als abgeschlossen.
Der nächste Schritt soll weiterhin klein bleiben und keine neue Funktionsschicht eröffnen.
