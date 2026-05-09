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
In der aktuellen Phase wird dieses Modell zunächst dokumentiert und fachlich geschärft; ein Code-Skeleton im Projekt folgt erst im nächsten Schritt.

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
- `src/domain/` *(später)*
  - Domänenentitäten, Value-Objekte, fachliche Schnittstellen
- `src/simulation/` *(später)*
  - Simulationsabläufe und Rechenlogik
- `src/report/` *(später)*
  - Report-Modelle und Ergebnisaufbereitung
- `src/infrastructure/` *(später)*
  - Persistenzadapter, externe Schnittstellen
- `docs/`
  - Architektur- und Modellentscheidungen als Referenz

Diese Struktur bleibt bewusst vorläufig und wird in Phase 3 anhand der ersten Fachmodule konkretisiert.
