# MODULE BOUNDARY REVIEW

## Anlass
Dieses Review erfolgt nach Abschluss des ersten lesenden Feature-Moduls (Phase 3), um die aktuell gelebten Modulgrenzen vor Beginn von Phase 4 zu überprüfen.

## Prüfumfang der Modulgrenzen
Geprüft wurden die Grenzen zwischen:
- `pages`
- `features/scenarios`
- `domain`
- `simulation`
- `report`
- `infrastructure`

## Beobachtungen

### Was ist bisher sauber getrennt?
- `pages` übernimmt die Seitenkomposition und bindet vorhandene Bausteine ein, ohne fachliche Operativlogik.
- `features/scenarios` konzentriert sich auf Anzeige- und Strukturierungslogik der lesenden Szenario-Vorschau.
- `domain` enthält fachliche Begriffe, Seed-Daten und Entity-Skeletons als modellhafte Basis.
- `simulation`, `report` und `infrastructure` bleiben weiterhin als vorbereitete, aber fachlich noch nicht aktiv genutzte Schichten getrennt.

### Wo gibt es leichte Kopplungen?
- Die `HomePage` importiert zugleich `exampleScenario` aus `domain` und `ScenarioPreview` aus `features/scenarios`.
- Diese direkte Verknüpfung ist im aktuellen Stand vertretbar, zeigt aber eine frühe Kopplung von Seitenkomposition an konkrete Seed-Daten.
- `ScenarioPreview` erhält ein `scenario` als Prop. Das ist aktuell sauber (Datenübergabe statt Eigenbezug), sollte aber stabil typisiert und klar als lesende Schnittstelle geschützt bleiben.

### Welche Grenzen müssen in Phase 4 besonders geschützt werden?
- Bearbeitungslogik darf nicht in bestehende Listen-/Vorschaukomponenten von `features/scenarios` eingebaut werden.
- Fachliche Bearbeitung sollte als eigene Schicht/Komponentenfamilie vorbereitet werden, getrennt von lesender Darstellung.
- Formulare sind bei späterer Einführung als eigenständige Komponenten mit klarer Abgrenzung zur reinen Anzeige vorzubereiten.
- `simulation`, `report` und `infrastructure` bleiben weiterhin ohne Durchstich aus UI-Listenkomponenten.

## Spezifische Prüfhinweise
- `HomePage` importiert `exampleScenario` aus `domain` und `ScenarioPreview` aus `features/scenarios`.
- `ScenarioPreview` erhält ein `scenario` als Prop.
- `features/scenarios` enthält Anzeige-Logik, aber keine Speicherung, Simulation oder Bearbeitung.
- `domain` enthält Seed-Daten und Entity-Skeletons.

## Ergebnis
- Die Modulgrenzen sind aktuell tragfähig.
- Für Phase 4 gilt: Bearbeitungslogik nicht in Listenkomponenten integrieren.
- Formulare sind – falls später eingeführt – als eigene Komponenten bzw. eigene Schicht vorzubereiten.
