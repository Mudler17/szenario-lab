# ARCHITECTURE

## Zielarchitektur (High Level)
`szenario-lab` wird als modular aufgebaute Frontend-Anwendung vorbereitet, in der fachliche Entscheidungen, Simulation, Reporting und späterer Datenzugriff klar getrennt sind. Ziel ist eine Architektur, die frühe Konzeptarbeit erlaubt und später schrittweise erweitert werden kann, ohne Kernteile stark umzubauen.

Auf hoher Ebene werden folgende Schichten/Module vorgesehen:
- **UI (React)**: Darstellung, Eingabe, Nutzerführung
- **Domänenmodell**: zentrale Begriffe, Entitäten, Beziehungen, fachliche Invarianten als Modell
- **Simulation (später)**: Ablauf- und Szenarioberechnung auf Basis des Domänenmodells
- **Report (später)**: Verdichtung und Ausgabe von Ergebnissen für Auswertung/Kommunikation
- **Persistenz (später)**: Speicherung/Laden von Szenarien, Versionen und Ergebnissen

## Trennung der Verantwortlichkeiten

### UI
Die UI ist für Interaktion, Visualisierung und State-Orchestrierung verantwortlich, aber nicht für fachliche Kernentscheidungen.

### Domänenmodell
Das Domänenmodell bildet die fachlichen Objekte und Beziehungen ab. Es dient als gemeinsame Sprache zwischen UI, späterer Simulation und späterem Reporting.
In der aktuellen Phase wurde zusätzlich ein minimales Code-Skeleton im Projekt angelegt, das die dokumentierten Domänenbegriffe strukturell vorbereitet. Dieses Skeleton enthält bewusst noch keine fachliche Implementierung, keine Regeln und keine operative Logik.

### Simulation (zukünftig)
Simulation wird als eigenständiges Modul geplant, damit Berechnungsregeln austauschbar und testbar bleiben, ohne UI-Komponenten ändern zu müssen.

### Report (zukünftig)
Report-Logik wird getrennt vorbereitet, damit Ergebnisaufbereitung und Darstellung nicht mit Simulations- oder UI-Details vermischt werden.

### Persistenz (zukünftig)
Persistenz wird als spätere Schicht vorgesehen, um Speicherung unabhängig vom UI-Framework und von Domänenregeln zu gestalten.

## Warum Fachlogik nicht direkt in React-Komponenten liegen soll
Fachlogik in Komponenten führt typischerweise zu enger Kopplung zwischen Darstellung und Regeln. Das erschwert:
- Wiederverwendung in anderen Oberflächen
- Testbarkeit ohne Rendering-Kontext
- nachvollziehbare Weiterentwicklung von Regeln
- klare Verantwortungsgrenzen im Team

Durch die Trennung kann React auf die Rolle „UI-Adapter“ begrenzt werden, während fachliche Entscheidungen konsistent im Domänen- und späteren Service-/Simulationsbereich verortet werden.

## Vorläufige Modulstruktur
Die folgende Struktur ist eine Vorbereitung für spätere Phasen, ohne bereits Fachlogik zu implementieren:

- `src/pages/`
  - Seitenkomposition und Routing-nahe UI-Struktur
- `src/components/` *(später)*
  - wiederverwendbare UI-Bausteine
- `src/domain/`
  - Domänenentitäten, Value-Objekte, fachliche Schnittstellen
- `src/simulation/`
  - Simulationsabläufe und Rechenlogik
- `src/report/`
  - Report-Modelle und Ergebnisaufbereitung
- `src/infrastructure/`
  - Persistenzadapter, externe Schnittstellen
- `docs/`
  - Architektur- und Modellentscheidungen als Referenz

Diese Struktur bleibt bewusst vorläufig und wird in Phase 3 anhand der ersten Fachmodule konkretisiert.

Ein ergänzendes Boundary-Review nach Abschluss des ersten lesenden Fachmoduls ist in `docs/MODULE_BOUNDARY_REVIEW.md` dokumentiert.


## Aktueller Umsetzungsstand
Das Projekt enthält nun ein initiales Code-Skeleton für die vorgesehenen Module (`domain`, `simulation`, `report`, `infrastructure`). Es dient ausschließlich der Strukturvorbereitung; fachliche Umsetzung ist darin noch nicht enthalten.


## Fortschritt Phase 3 und Ausblick Phase 4
Das erste Feature-Modul wurde als rein lesende Szenario-Ansicht abgeschlossen. Damit ist die fachliche Darstellung eines statischen Beispielszenarios in gegliederten Teilbereichen umgesetzt, ohne Bearbeitung oder operative Fachlogik.

Für Phase 4 wird zuerst die fachliche Bearbeitungsgrenze dokumentiert. Auf dieser Grundlage werden danach Formularstrukturen geplant, bevor konkrete Bearbeitungsoberflächen umgesetzt werden.
Die dokumentierten Bearbeitungsgrenzen sind in `docs/EDITING_BOUNDARIES.md` festgehalten.
Bearbeitung wird zunächst als getrennte Schicht bzw. Komponentenfamilie vorbereitet und nicht in bestehende read-only-Komponenten eingebaut.
