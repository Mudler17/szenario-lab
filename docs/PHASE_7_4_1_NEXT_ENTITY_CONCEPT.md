# Phase 7.4.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach der freigegebenen Annahmen- und Evidenz-Bearbeitung.

## 2. Ausgangspunkt
- Annahmen-Bearbeitung ist lokal freigegeben (Phase 7.2.4 inkl. Review).
- Evidenz-Bearbeitung ist lokal freigegeben (Phase 7.3.2 inkl. Review).
- Weiterhin kein Speicher-/Backend-/Simulationsausbau.

## 3. Tempo-Regel
- Neue Entität = **Konzept · Implementierung · Review**.
- Keine Utility-/UI-/a11y-/Status-Sonderphasen.
- Die Implementierungsphase bündelt Utility, UI, a11y, Statusmeldungen, Tests und Doku.

## 4. Kurze Kandidatenprüfung
- **Personas jetzt:** Nach Annahmen (Hypothesen) und Evidenz (Hinweise) fehlt noch ein minimales Akteurs-/Rollenmodell, damit Perspektiven und Betroffenheiten strukturiert formulierbar werden.
- **Ressourcen später:** Ressourcen sind fachlich nützlicher, wenn zuerst klar ist, welche Rollen/Akteure betroffen sind.
- **Phasen später:** Zeitliche Struktur profitiert von stabileren inhaltlichen Bausteinen inklusive Rollenperspektiven.
- **Beziehungen später:** Beziehungen erzeugen früh relationale Komplexität und sollten auf einem klaren Persona-Grundmodell aufsetzen.
- **Interventionen später:** Maßnahmenplanung sollte nicht vor einem minimal stabilen Rollen- und Beziehungsverständnis starten.

## 5. Entscheidung
**Phase 7.4 fokussiert die Entität „Personas“.**

Arbeitstitel der Entität: **Personas**.

## 6. Fachlicher Zweck der Entität
- Personas machen sichtbar, welche Akteurs-/Rollenperspektiven im Szenario relevant sind.
- Personas sind **kein** vollständiges Stakeholdermanagement.
- Personas sind **keine** Beziehungsanalyse.
- Personas sind **keine** Simulation.
- Personas bleiben lokal im Draft und dienen der strukturierten Szenarioarbeit.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird nur der minimale Zuschnitt vorbereitet:
- `id`
- `name`
- `role`
- `perspective`
- `needs`
- `influence`
- `constraints`

Leitlinien:
- Keine Beziehungslogik einführen.
- Keine Organisationsstruktur modellieren.
- Keine Hierarchie- oder Netzwerklogik.
- Keine Verbindung zu Interventionen erzwingen.
- Keine komplexen psychologischen Profile.

## 8. Abgrenzung
Personas werden explizit abgegrenzt gegen:
- Annahmen
- Evidenz
- Ressourcen
- Beziehungen
- Interventionen
- Phasen
- Simulation
- Stakeholdermanagement
- Organisationsdiagnostik

## 9. Pattern-Verweise
Es gelten die etablierten Muster aus den bisherigen Phasen (nur Verweis):
- Draft-Utility-Pattern aus Annahmen/Evidenz.
- Lokale Bearbeitung aus Annahmen/Evidenz.
- id-loser Schreibschutz aus Annahmen/Evidenz.
- a11y-Grundmuster aus Annahmen/Evidenz.
- Testmuster aus Annahmen/Evidenz.
- Negativlisten-/Quality-Gate-Pattern aus den bisherigen Phasen.

## 10. Geplante Implementierungsphase 7.4.2
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

## 11. Geplante Reviewphase 7.4.3
Ein einziger Review mit Fokus auf:
- lokale Draft-Grenze
- Scope-Hygiene
- Tests
- a11y
- keine Stopplisten-Verstöße
- keine Beziehungs-/Interventionskaskade

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
- keine Beziehungslogik
- keine Interventionen
- keine Organisationsstrukturmodellierung
- keine psychologische Profilierung
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine Utility-/UI-/a11y-/Status-Sonderphasen

## 13. Quality-Gate-Hinweis
Da dies eine reine Konzeptphase ist, muss kein Anwendungscode geändert werden.

README/ROADMAP werden auf Konsistenz geprüft; falls geändert, bleibt die Änderung minimal.

`npm test` und `npm run build` sind bei reinen Dokuänderungen optional; falls ausgeführt, werden Ergebnisse dokumentiert.
