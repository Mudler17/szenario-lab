# Phase 7.5.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach der lokal freigegebenen Bearbeitung von Annahmen, Evidenz und Personas.

## 2. Ausgangspunkt
- Annahmen-Bearbeitung ist lokal freigegeben.
- Evidenz-Bearbeitung ist lokal freigegeben.
- Personas-Bearbeitung ist lokal freigegeben.
- Weiterhin kein Speicher-/Backend-/Simulationsausbau.

## 3. Tempo-Regel
- Neue Entität = **Konzept · Implementierung · Review**.
- Keine Utility-/UI-/a11y-/Status-Sonderphasen.
- Implementierungsphase bündelt Utility, UI, a11y, Statusmeldungen, Tests und Doku.

## 4. Kurze Kandidatenprüfung
- **Ressourcen jetzt:** Nach Annahmen (Hypothesen), Evidenz (Beleglage) und Personas (Perspektiven) fehlt ein minimaler strukturierter Blick auf verfügbare bzw. fehlende Mittel, Kapazitäten, Kompetenzen und Engpässe; das ist fachlich direkt anschlussfähig und bleibt im lokalen Draft-Pattern testbar.
- **Phasen später:** Zeitliche Struktur wird belastbarer, wenn zusätzlich zu Annahmen/Evidenz/Personas zuerst die relevanten Ressourcen sichtbar sind.
- **Beziehungen später:** Beziehungen erzeugen relationale Querverknüpfungen zwischen Akteuren und erhöhen das Komplexitätsrisiko vorzeitig.
- **Interventionen später:** Maßnahmenplanung sollte erst nach stabilerer Ausgangslage aus Perspektiven, Evidenz und Ressourcen erfolgen.

## 5. Entscheidung
**Phase 7.5 fokussiert die Entität „Ressourcen“.**

Arbeitstitel der Entität: **Ressourcen**.

## 6. Fachlicher Zweck der Entität
- Ressourcen machen sichtbar, welche Mittel, Kapazitäten, Kompetenzen oder Engpässe für ein Szenario relevant sind.
- Ressourcen sind **keine** Budgetplanung.
- Ressourcen sind **keine** Personalplanung.
- Ressourcen sind **keine** Organisationsstruktur.
- Ressourcen sind **keine** Simulation.
- Ressourcen bleiben lokal im Draft und dienen der strukturierten Szenarioarbeit.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur der minimale Zuschnitt vorbereitet:
- `id`
- `name`
- `type`
- `description`
- `availability`
- `relevance`
- `constraints`

Vorgeschlagene Werte:

`type`
- `staff`
- `time`
- `budget`
- `infrastructure`
- `knowledge`
- `access`
- `other`

`availability`
- `low`
- `medium`
- `high`
- `unclear`

`relevance`
- `low`
- `medium`
- `high`

Leitlinien:
- Keine Kostenrechnung.
- Keine Kapazitätsplanung.
- Keine Personalplanung.
- Keine Zuordnung zu Personas erzwingen.
- Keine Ressourcen-Abhängigkeiten modellieren.
- Keine Beschaffungslogik.
- Keine Simulation.

## 8. Abgrenzung
Ressourcen werden explizit abgegrenzt gegen:
- Annahmen
- Evidenz
- Personas
- Beziehungen
- Interventionen
- Phasen
- Budgetplanung
- Personalplanung
- Ressourcenmanagement
- Organisationsstrukturmodellierung
- Simulation

## 9. Pattern-Verweise
Es gelten die etablierten Muster aus den bisherigen Entitäten (nur Verweis):
- Draft-Utility-Pattern aus Annahmen/Evidenz/Personas
- lokale Bearbeitung aus Annahmen/Evidenz/Personas
- id-loser Schreibschutz aus Annahmen/Evidenz/Personas
- a11y-Grundmuster aus Annahmen/Evidenz/Personas
- Testmuster aus Annahmen/Evidenz/Personas
- Negativlisten-/Quality-Gate-Pattern aus bisherigen Phasen

## 10. Geplante Implementierungsphase 7.5.2
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

## 11. Geplante Reviewphase 7.5.3
Ein einziger Review mit Fokus auf:
- lokale Draft-Grenze
- Scope-Hygiene
- Tests
- a11y
- keine Stopplisten-Verstöße
- keine Budget-/Personalplanungs-/Simulationskaskade

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
- keine Kostenrechnung
- keine Budgetplanung
- keine Personalplanung
- kein Ressourcenmanagementsystem
- keine Organisationsstrukturmodellierung
- keine Beschaffungslogik
- keine Beziehungslogik
- keine Interventionen
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine Utility-/UI-/a11y-/Status-Sonderphasen

## 13. Quality-Gate-Hinweis
Da dies eine reine Konzeptphase ist, muss kein Anwendungscode geändert werden.

README/ROADMAP werden dennoch auf Konsistenz geprüft; falls geändert, bleibt die Änderung minimal.

`npm test` und `npm run build` sind bei reinen Dokuänderungen optional; falls ausgeführt, werden Ergebnisse dokumentiert.
