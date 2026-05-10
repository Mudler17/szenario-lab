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
Die konzeptionelle Vorbereitung des editierbaren Arbeitskopie-Modells ist in `docs/EDITABLE_DATA_MODEL.md` dokumentiert.
Die konzeptionelle Planung der späteren Formularstruktur ist in `docs/FORM_STRUCTURE_PLAN.md` dokumentiert.
Wichtig: Diese Formularstruktur ist aktuell **nur geplant** und noch nicht implementiert.
Zusätzlich wurde ein minimales Editing-Code-Skeleton unter `src/features/scenarios/editing/` angelegt.
Das dokumentarische Review dieses Skeletons ist in `docs/EDITING_SKELETON_REVIEW.md` festgehalten.
Dieses Skeleton enthält derzeit ausdrücklich keine Formularlogik und keinen lokalen State.
Die konzeptionelle Schärfung eines späteren lokalen Draft-State ist in `docs/DRAFT_STATE_CONCEPT.md` dokumentiert.
Der Draft-State ist damit aktuell nur konzeptionell vorbereitet und ausdrücklich noch nicht als State-Verwaltung implementiert.
Als erste reine Utility-Funktion ist `createDraftFromScenario` vorhanden, um eine lokale Arbeitskopie zu erzeugen.
Als zweite reine Utility-Funktion ist `resetDraft` vorhanden, um aus dem Original erneut eine lokale Arbeitskopie zu erzeugen.
Dabei gilt ausdrücklich: keine UI-Einbindung, keine State-Verwaltung und kein Persistenzmodell.
Das dokumentarische Review dieser Utility ist in `docs/DRAFT_UTILITY_REVIEW.md` festgehalten.
Das dokumentarische Review der Reset-Utility ist in `docs/RESET_DRAFT_REVIEW.md` festgehalten.
Bearbeitung wird zunächst als getrennte Schicht bzw. Komponentenfamilie vorbereitet und nicht in bestehende read-only-Komponenten eingebaut.


## Phase 4.4 – Lokale Bearbeitung von Name, Beschreibung und Ziel
In Phase 4.4 sind drei Szenario-Grundfelder im lokalen Draft bearbeitbar: der Szenario-Name, die Szenario-Beschreibung und das Szenario-Ziel.
Die Änderung bleibt bewusst innerhalb der bestehenden Draft-Grenzen und ergänzt keine neuen Architekturbausteine.

Konkreter Umfang in Phase 4.4:
- bearbeitbar sind aktuell Szenario-Name, Szenario-Beschreibung und Szenario-Ziel
- die Szenario-Vorschau reagiert direkt auf alle drei Änderungen
- Reset stellt Name, Beschreibung und Ziel auf die Originalwerte aus dem Ausgangsszenario zurück
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module

Damit bleibt Phase 4.4 auf eine minimale, lokal begrenzte Editierfähigkeit fokussiert, ohne Persistenz-, Simulations- oder Integrationsschritte vorzuziehen.


## Phase 4.5 – Formularstruktur für Szenario-Grunddaten
In Phase 4.5 wurde die bestehende Formularstruktur für die drei bereits bearbeitbaren Szenario-Grunddaten verbessert.
Dabei wurde der Bereich als „Szenario-Grunddaten“ mit `fieldset` und `legend` semantisch gegliedert.
Die vorhandenen Felder Name, Beschreibung und Ziel wurden um Hilfetexte ergänzt; die zugehörigen Eingabefelder referenzieren diese Hinweise über `aria-describedby`.

Konkreter Umfang in Phase 4.5:
- keine neuen Felder; weiterhin nur Name, Beschreibung und Ziel
- verbesserte Zugänglichkeit und Strukturierung durch `fieldset`/`legend`
- Hilfetexte an allen drei bestehenden Feldern
- Verknüpfung der Hilfetexte über `aria-describedby`
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module

Damit bleibt Phase 4.5 innerhalb der bestehenden Grenzen des lokalen Draft-Editings und erweitert nur die semantische sowie zugänglichkeitsbezogene Formularqualität.


## Phase 4.6 – Draft-Update-Logik in Utility entlastet
In Phase 4.6 wurde die wiederholte Update-Logik für die drei bestehenden Szenario-Grundfelder (Name, Beschreibung und Ziel) aus `HomePage` in eine kleine Utility-Funktion ausgelagert.
Die fachliche Grenze bleibt unverändert: keine neuen Felder, keine neuen Module und keine zusätzliche Persistenz- oder Integrationslogik.

Konkreter Umfang in Phase 4.6:
- Utility `updateScenarioDraftField(draft, fieldName, value)` für bestehende Draft-Felder
- Nutzung dieser Utility in `HomePage` für Name, Beschreibung und Ziel
- Vorschau reagiert weiterhin direkt auf Änderungen
- Reset setzt weiterhin auf den Originalzustand zurück
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module




## Phase 4.7 – Einfache lokale Validierung der Szenario-Grundfelder
In Phase 4.7 wurde die bestehende lokale Draft-Bearbeitung für Name, Beschreibung und Ziel um eine minimale, rein lokale Validierung ergänzt.
Die Validierung prüft ausschließlich, ob die drei bestehenden Felder leer sind, und erzeugt dafür sichtbare Hinweise im Formular.

Konkreter Umfang in Phase 4.7:
- weiterhin nur die drei bestehenden Felder: Name, Beschreibung und Ziel
- lokale Validierung im Draft-Kontext (ohne Persistenz)
- sichtbare Hinweise bei leeren Feldern
- Vorschau und Reset bleiben unverändert funktionsfähig
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module

## Phase 4.7.1 – Validierungs-Helper als eigene Draft-State-Datei
In Phase 4.7.1 wurde die Funktion `validateScenarioDraftBasics` aus `updateScenarioDraftField.js` in eine eigene State-Datei ausgelagert.
Die bestehende Validierungslogik blieb dabei unverändert; es wurde nur die Verantwortlichkeit klarer getrennt.

Konkreter Umfang in Phase 4.7.1:
- `validateScenarioDraftBasics` ist organisatorisch aus der Update-Utility herausgelöst
- keine Änderung der Validierungsregeln
- keine UI-Änderung
- keine neuen Felder
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung


## Phase 4.8 – Bearbeitungsbereich und Vorschau visuell getrennt
In Phase 4.8 wurde die Home-Ansicht strukturell klarer in zwei semantische Bereiche gegliedert: **Bearbeitung** und **Vorschau**.
Die Änderung betrifft nur die visuelle und semantische Trennung in der UI-Komposition; die bestehende Draft-Logik für Name, Beschreibung und Ziel bleibt unverändert.

Konkreter Umfang in Phase 4.8:
- semantische Trennung in Bearbeitungs- und Vorschau-Section
- klare Überschriften und kurze Hinweise je Bereich
- visuelle Unterscheidung über bestehende/einfache CSS-Klassen
- keine neuen Felder
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module

## Phase 4.8.1 – Workspace-Panel-Styling mit Minimal-CSS
In Phase 4.8.1 wurde die in Phase 4.8 eingeführte Trennung von Bearbeitung und Vorschau ausschließlich auf Styling-Ebene präzisiert.
Dafür wurde ein minimales CSS-Set ergänzt, das die Bereiche strukturierter und visuell eindeutiger macht, ohne die bestehende React- oder Draft-Logik anzupassen.

Konkreter Umfang in Phase 4.8.1:
- `workspace-grid` strukturiert die Bereiche für Bearbeitung und Vorschau
- `workspace-panel` gestaltet die Panels konsistent
- `editor-panel` und `preview-panel` unterscheiden Bearbeitung und Vorschau visuell
- `workspace-hint` gestaltet die erklärenden Hinweise
- keine Änderung an React-Logik
- keine neuen Felder
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Module

## Phase 5.1 – Minimales Testfundament für Draft-State-Utilities
In Phase 5.1 wurde ein bewusst schlankes Testfundament für den bestehenden lokalen Draft-State dokumentiert.
Als Testlaufzeit wird der native Node-Test-Runner genutzt; `npm test` führt `node --test` aus.

Konkreter Umfang in Phase 5.1:
- getestet werden ausschließlich die Draft-State-Utilities `createDraftFromScenario`, `resetDraft`, `updateScenarioDraftField` und `validateScenarioDraftBasics`
- keine React-Komponententests
- keine UI-Änderung
- keine neuen Features
- keine neuen Felder
- keine Speicherung auf Dateisystem oder Backend
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Fachmodule



## Phase 5.5 – JSON-Export-Payload-Utility
In Phase 5.5 wurde eine reine Utility-Funktion vorbereitet, die aus einem Szenario-Draft ein serialisierbares Export-Payload-Objekt erzeugt.

Konkreter Umfang:
- `createScenarioExportPayload`
- `exportType`: `szenario-lab.scenario`
- `formatVersion`: `1`
- `exportedAt`
- `source`
- scenario-Kopie
- Tests für die Utility

Nicht enthalten:
- kein Download
- kein Button
- keine UI
- kein JSON-Import
- kein LocalStorage
- keine Speicherung

## Phase 5.6 – JSON-Export-Schema

In Phase 5.6 wurde das Export-Schema für spätere Szenario-Exporte konzeptionell festgelegt.

Konkreter Umfang:
- Top-Level-Felder `exportType`, `formatVersion`, `exportedAt`, `source`, `scenario`
- Mindeststruktur für `scenario`
- optionale Metadaten
- Kompatibilitäts- und Erweiterungsregeln
- Hinweise zu JSON-Kompatibilität
- keine neue Exportlogik
- kein Download
- keine UI
- kein Import
- keine Speicherung


## Phase 5.7 – JSON-Export-Dateinamen-Utility

In Phase 5.7 wurde eine reine Utility-Funktion vorbereitet, die aus einem Szenario-Draft einen sicheren Dateinamen für spätere JSON-Exporte erzeugt.

Konkreter Umfang:
- `createScenarioExportFilename`
- Prefix `szenario-lab`
- Slug aus `scenario.name`
- Datum `YYYY-MM-DD`
- Endung `.json`
- Fallback `export`
- Tests für die Utility

Nicht enthalten:
- kein Download
- kein Button
- keine UI
- kein JSON-Import
- kein LocalStorage
- keine Speicherung

## Phase 5.8 – JSON-Export-Orchestrierungskonzept

In Phase 5.8 wurde konzeptionell festgelegt, wie Export-Payload und Export-Dateiname später konsistent zusammengeführt werden.

Konkreter Umfang:
- gemeinsamer `exportedAt`-Zeitpunkt
- spätere Verbindung von Payload- und Dateinamen-Utility
- mögliche Orchestrierungsfunktion `createScenarioExportDraft`
- keine neue Utility
- kein Download
- keine UI
- kein Import
- keine Speicherung



## Phase 5.9 – JSON-Export-Orchestrierungs-Utility
In Phase 5.9 wurde eine reine Utility-Funktion vorbereitet, die Export-Payload, Export-Dateiname und gemeinsamen Exportzeitpunkt zusammenführt.

Konkreter Umfang:
- `createScenarioExportDraft`
- gemeinsamer `exportedAt`-Zeitpunkt
- Nutzung von `createScenarioExportPayload`
- Nutzung von `createScenarioExportFilename`
- Rückgabe von `payload`, `filename` und `exportedAt`
- Tests für die Utility

Nicht enthalten:
- kein Download
- kein Button
- keine UI
- kein Browser-Blob
- kein `URL.createObjectURL`
- kein `JSON.stringify`
- kein JSON-Import
- kein LocalStorage
- keine Speicherung
