# Phase 7.7.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach Annahmen, Evidenz, Personas, Ressourcen und Phasen.

## 2. Ausgangspunkt nach Phase 7.6.3/7.6.4
- Die Phasen-Implementierung wurde in Phase 7.6.3 fachlich geprüft.
- Die Statusdokumentation wurde in Phase 7.6.4 konsolidiert.
- Annahmen, Evidenz, Personas, Ressourcen und Phasen sind lokal im Draft minimal bearbeitbar.
- Weiterhin kein Speicher-/Backend-/Simulationsausbau.

## 3. Tempo-Regel
- Neue Entität = **Konzept · Implementierung · Review**.
- Keine Utility-/UI-/a11y-/Status-Sonderphasen.
- Implementierung wird gebündelt in einer Phase umgesetzt und danach in einer Reviewphase geprüft.

## 4. Kurze Kandidatenprüfung
- **Beziehungen jetzt:** Nach Personas, Ressourcen und Phasen fehlt die relationale Ebene; Beziehungen machen Verknüpfungen zwischen Akteuren, Rollen und Szenarioelementen sichtbar.
- **Interventionen später:** Interventionen setzen eine stabilere relationale Ausgangslage voraus und würden sonst vorzeitig Maßnahmenlogik nachziehen.
- **Simulation später:** Simulation erhöht Modell- und Auswertungsdruck deutlich und ist für den aktuellen Ausbaupfad noch zu früh.
- **Automatische Bewertungen später:** Automatische Bewertungen benötigen belastbare relationale Datenbasis und klare Bewertungslogik, die aktuell bewusst nicht Teil des Scopes ist.

## 5. Entscheidung
**Phase 7.7 fokussiert die Entität „Beziehungen“.**

## 6. Fachlicher Zweck der Entität
- Beziehungen machen sichtbar, wie Personen, Rollen und Szenarioelemente miteinander verbunden sind.
- Beziehungen verhindern, dass Personas als isolierte Einzelkarten ohne Kontext stehen bleiben.
- Beziehungen sind im aktuellen Schritt **keine** Netzwerkanalyse und **keine** automatische Diagnose.
- Beziehungen bleiben lokal im Draft und dienen der strukturierten Szenarioarbeit.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur der minimale Zuschnitt vorbereitet:
- `id`
- `sourceId`
- `targetId`
- `type`
- `description`
- `strength`
- `quality`
- `risks`

Vorgeschlagene Werte:

`type`
- `communication`
- `dependency`
- `influence`
- `conflict`
- `support`
- `unclear`

`strength`
- `low`
- `medium`
- `high`
- `unclear`

`quality`
- `supportive`
- `neutral`
- `strained`
- `unclear`

Leitlinien:
- `sourceId` und `targetId` zunächst als freie Textfelder oder einfache Referenzen denken.
- Keine harte Validierung gegen Personas oder andere Entitäten.
- Keine Graph-Visualisierung.
- Keine Netzwerkanalyse.
- Keine automatische Bewertung.
- Keine Simulation.

## 8. Abgrenzung
Beziehungen werden explizit abgegrenzt gegen:
- Interventionen und Maßnahmensteuerung
- Simulation und Wirkmodellierung
- automatische Bewertungs-/Diagnoselogik
- Organisationsdiagnostik und Stakeholder-Ranking
- harte relationale Validierung gegen Personas, Ressourcen, Phasen oder Evidenz

## 9. Pattern-Verweise auf bisherige Entitäten
Es gelten die etablierten Muster aus den bisherigen Entitäten (nur Verweis):
- Draft-Utility-Pattern aus Annahmen/Evidenz/Personas/Ressourcen/Phasen
- lokale Bearbeitung im Draft aus Annahmen/Evidenz/Personas/Ressourcen/Phasen
- a11y-Grundmuster aus den bisherigen Entitäts-Implementierungen
- Testmuster aus den bisherigen Entitäts-Implementierungen
- Negativlisten-/Quality-Gate-Pattern aus bisherigen Phasen

## 10. Geplante Implementierungsphase 7.7.2
In **einer** gebündelten Implementierungsphase:
- Draft-Utilities
- minimale UI
- Add/Update/Remove
- a11y
- Status-/Hilfetexte
- Tests
- Doku-Updates (inkl. README/ROADMAP)
- `npm test`
- `npm run build`

## 11. Geplante Reviewphase 7.7.3
Ein einziger Review mit Fokus auf:
- lokale Draft-Grenze
- Scope-Hygiene
- Tests
- a11y
- keine Stopplisten-Verstöße
- keine Analyse-/Bewertungs-/Simulationskaskade

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
- Da dies eine reine Konzeptphase ist, wird kein Anwendungscode geändert.
- README/ROADMAP werden konsistent zum Phasenstand gehalten.
- `npm test` und `npm run build` sind bei reinen Dokuänderungen optional; wenn nicht ausgeführt, wird das Ergebnis als nicht ausgeführt dokumentiert.
