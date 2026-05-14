# Phase 7.6.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach Annahmen, Evidenz, Personas und Ressourcen.

## 2. Ausgangspunkt
- Annahmen-Bearbeitung ist lokal freigegeben.
- Evidenz-Bearbeitung ist lokal freigegeben.
- Personas-Bearbeitung ist lokal freigegeben.
- Ressourcen-Bearbeitung ist lokal freigegeben.
- Statusdokumentation wurde in Phase 7.5.4 konsolidiert.
- Weiterhin kein Speicher-/Backend-/Simulationsausbau.

## 3. Tempo-Regel
- Neue Entität = **Konzept · Implementierung · Review**.
- Keine Utility-/UI-/a11y-/Status-Sonderphasen.
- Implementierungsphase bündelt Utility, UI, Add/Update/Remove, a11y, Statusmeldungen, Tests und Doku.

## 4. Kurze Kandidatenprüfung
- **Warum Phasen jetzt?** Nach Annahmen, Evidenz, Personas und Ressourcen fehlt für die strukturierte Szenarioarbeit eine minimale zeitliche bzw. prozessuale Ordnung; Phasen schließen diese Lücke mit geringem Modellrisiko und ohne frühe Simulationslogik.
- **Warum Beziehungen später?** Beziehungen erzeugen früh dichte Querverknüpfungen zwischen Entitäten und erhöhen damit Komplexität, Kopplung und Pflegeaufwand.
- **Warum Interventionen später?** Interventionen ziehen schnell Maßnahmenlogik, Wirkannahmen und Umsetzungs-/Steuerungsfragen nach sich und erhöhen das Risiko vorzeitiger Modellkaskaden.

## 5. Entscheidung
**Phase 7.6 fokussiert die Entität „Phasen“.**

Arbeitstitel der Entität: **Phasen**.

## 6. Fachlicher Zweck der Entität
- Phasen machen sichtbar, welche zeitlichen oder prozessualen Abschnitte ein Szenario strukturieren.
- Phasen sind **keine** Simulation.
- Phasen sind **keine** Prozessautomatisierung.
- Phasen sind **keine** Projektplanung.
- Phasen sind **keine** Maßnahmensteuerung.
- Phasen bleiben lokal im Draft und dienen der strukturierten Szenarioarbeit.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur der minimale Zuschnitt vorbereitet:
- `id`
- `title`
- `description`
- `order`
- `timeframe`
- `status`
- `risks`

Vorgeschlagene Werte:

`status`
- `planned`
- `active`
- `completed`
- `unclear`

Leitlinien:
- `order` bleibt eine einfache Zahl oder ein einfacher Wert zur Sortierung.
- Keine Drag-and-drop-Logik.
- Keine Gantt-Logik.
- Keine Kalenderlogik.
- Keine Abhängigkeiten zwischen Phasen modellieren.
- Keine automatische Fortschrittsberechnung.
- Keine Verknüpfung zu Interventionen erzwingen.
- Keine Simulation.

## 8. Abgrenzung
Phasen werden explizit abgegrenzt gegen:
- Annahmen
- Evidenz
- Personas
- Ressourcen
- Beziehungen
- Interventionen
- Projektplanung
- Prozessmanagement
- Maßnahmensteuerung
- Simulation
- Kalender-/Terminlogik

## 9. Pattern-Verweise
Es gelten die etablierten Muster aus den bisherigen Entitäten (nur Verweis):
- Draft-Utility-Pattern aus Annahmen/Evidenz/Personas/Ressourcen
- lokale Bearbeitung aus Annahmen/Evidenz/Personas/Ressourcen
- id-loser Schreibschutz aus Annahmen/Evidenz/Personas/Ressourcen
- a11y-Grundmuster aus Annahmen/Evidenz/Personas/Ressourcen
- Testmuster aus Annahmen/Evidenz/Personas/Ressourcen
- Negativlisten-/Quality-Gate-Pattern aus bisherigen Phasen

## 10. Geplante Implementierungsphase 7.6.2
In **einer** gebündelten Implementierungsphase:
- Draft-Utilities
- minimale UI
- Add/Update/Remove
- a11y
- Status-/Hilfetexte
- Tests
- Phasendoku
- README/ROADMAP-Update
- `npm test`
- `npm run build`

## 11. Geplante Reviewphase 7.6.3
Ein einziger Review mit Fokus auf:
- lokale Draft-Grenze
- Scope-Hygiene
- Tests
- a11y
- keine Stopplisten-Verstöße
- keine Projektplanungs-/Prozessmanagement-/Simulationskaskade

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
- keine komplexe Validierungsengine
- keine Projektplanung
- kein Prozessmanagement
- keine Prozessautomatisierung
- keine Maßnahmensteuerung
- keine Kalenderlogik
- keine Gantt-Logik
- keine Drag-and-drop-Sortierung
- keine Phasenabhängigkeiten
- keine Beziehungslogik
- keine Interventionen
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine Utility-/UI-/a11y-/Status-Sonderphasen

## 13. Quality-Gate-Hinweis
- Da dies eine reine Konzeptphase ist, muss kein Anwendungscode geändert werden.
- README/ROADMAP konsistent halten.
- `npm test` und `npm run build` sind bei reinen Dokuänderungen optional; falls ausgeführt, Ergebnis dokumentieren.
