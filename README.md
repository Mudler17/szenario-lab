# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 7.5.4 · Statusdokumentation nach Ressourcen-Review konsolidiert.

Die App arbeitet mit einem lokalen Szenario-Draft im Arbeitsspeicher. Der Draft kann bearbeitet, in der Vorschau angezeigt, als JSON heruntergeladen und durch einen geprüften JSON-Import bewusst ersetzt werden. Dies ist keine App-interne Speicherung.

## Aktuell editierbare Bereiche im lokalen Draft
- Grunddaten: Name, Beschreibung, Ziel
- Annahmen
- Personas
- Ressourcen
- Evidenz

## Weiterhin ausgeschlossen
- keine App-interne Speicherung
- kein LocalStorage
- kein Backend
- keine KI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau über die bestehende lokale JSON-Kette hinaus
- keine neuen Dependencies
- keine Beziehungslogik
- keine Interventionen

## Lokale Befehle
npm install
npm run dev
npm test
npm run build

## Entwicklungsmodus
Für neue editierbare Entitäten gilt der Drei-Schritt-Schnitt: Konzept · Implementierung · Review.

Die Implementierungsphase bündelt Utility, UI, Add/Update/Remove, a11y-Basis, Status-/Hilfetexte, Tests, Doku sowie npm test und npm run build.

## Wichtige Dokumentation
- Architektur: docs/ARCHITECTURE.md
- Domänenmodell: docs/DOMAIN_MODEL.md
- Quality Gate: docs/QUALITY_GATE.md
- Phase-7-Richtungsentscheidung: docs/PHASE_7_DIRECTION.md
- Phase-7.2 Annahmen-Review: docs/PHASE_7_2_4_REVIEW_ASSUMPTIONS_EDITING.md
- Phase-7.3 Evidenz-Review: docs/PHASE_7_3_3_REVIEW_EVIDENCE_IMPLEMENTATION.md
- Phase-7.4 Personas-Review: docs/PHASE_7_4_3_REVIEW_PERSONAS_IMPLEMENTATION.md
- Phase-7.5 Ressourcen-Review: docs/PHASE_7_5_3_REVIEW_RESOURCES_IMPLEMENTATION.md

## Qualitätshinweis
Vor jeder neuen Entität müssen README und ROADMAP mit dem letzten Review übereinstimmen. Implementierungsphasen müssen npm test und npm run build grün abschließen.
