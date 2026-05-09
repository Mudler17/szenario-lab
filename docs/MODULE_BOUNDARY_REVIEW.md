# MODULE BOUNDARY REVIEW

## Anlass
Dieses Review erfolgt nach Abschluss des ersten lesenden Feature-Moduls in Phase 3. Ziel ist eine kurze Belastungsprobe der Modulgrenzen vor Beginn von Phase 4.

## Prüfgegenstand
Geprüft wurden die aktuellen Grenzen zwischen:
- `pages`
- `features/scenarios`
- `domain`
- `simulation`
- `report`
- `infrastructure`

## Beobachtung der aktuellen Trennung

### Was ist bisher sauber getrennt?
- `pages` übernimmt aktuell die Seitenkomposition und verbindet Domänendaten mit dem Feature-Modul.
- `features/scenarios` enthält darstellende, rein lesende Anzeige-Logik in fachlichen Abschnitten.
- `domain` enthält Seed-Daten und Entity-Skeletons als fachliche Grundlage.
- `simulation`, `report` und `infrastructure` sind weiterhin klar getrennt vorbereitet und werden im aktuellen Szenario-Feature nicht operativ genutzt.

### Wo gibt es leichte Kopplungen?
- `HomePage` importiert sowohl `exampleScenario` aus `domain` als auch `ScenarioPreview` aus `features/scenarios`. Das ist als UI-Komposition aktuell akzeptabel, zeigt aber eine direkte Kopplungsstelle zwischen Seitenebene und konkretem Seed-Datensatz.
- `ScenarioPreview` erhält ein `scenario` als Prop und hängt damit bewusst am Domänenobjekt-Zuschnitt. Diese Kopplung ist für ein lesendes Modul sinnvoll, sollte aber bei späterer Bearbeitung nicht um Inline-Editierlogik im Listenlayout erweitert werden.

### Welche Grenzen müssen in Phase 4 besonders geschützt werden?
- Bearbeitungslogik darf nicht in bestehende Listen- und Vorschaukomponenten von `features/scenarios` eingebaut werden.
- Formulare sind bei Einführung als eigene Komponenten bzw. eigene Schicht vorzubereiten.
- `features/scenarios` bleibt ohne Speicherung, ohne Simulation und ohne Bewertungslogik.
- `domain` bleibt Träger der Begriffe/Strukturen; operative Abläufe gehören weiterhin nicht in `pages` oder rein darstellende Komponenten.

## Spezifische Prüfungen
- `HomePage` importiert `exampleScenario` aus `domain` und `ScenarioPreview` aus `features/scenarios`.
- `ScenarioPreview` erhält ein `scenario` als Prop.
- `features/scenarios` enthält Anzeige-Logik, aber keine Speicherung, Simulation oder Bearbeitung.
- `domain` enthält Seed-Daten und Entity-Skeletons.

## Ergebnis
- Die Modulgrenzen sind im aktuellen Stand tragfähig.
- In Phase 4 soll Bearbeitungslogik **nicht** in Listenkomponenten eingebaut werden.
- Formulare sind, falls später eingeführt, als eigene Komponenten/Schicht vorzubereiten.
