# Szenario-Modul

## Zweck des Moduls
Dieses Modul bündelt die fachliche Struktur rund um Szenarien in der UI, beginnend mit einer rein lesenden Vorschau.

## Was hier später hinein darf
- Fachlich strukturierte Szenario-Ansichten und zugehörige UI-Komponenten
- Weitere modulinterne Darstellungskomponenten für Szenariokontexte
- Klare Schnittstellen zwischen Szenario-UI und Domänenmodell

## Was aktuell noch nicht hinein darf
- Simulation oder Simulationslogik
- OpenAI-Anbindung oder sonstige externe KI-Integration
- Datenbankzugriffe oder Persistenzlogik
- Speicherung von Szenariodaten
- Bearbeitungsfunktionen mit Formularen oder Buttons

## Aktueller Stand
Derzeit enthält das Modul ausschließlich eine lesende Szenario-Vorschau, ohne Bearbeitung, ohne Speicherung und ohne Simulation.
Die Vorschau wurde in kleine, rein lesende Anzeige-Komponenten (Summary, Persona-, Ressourcen-, Phasen-, Annahmen-, Beziehungs-, Interventions- und Strategieliste) zerlegt.
Beziehungen und Interventionen sind jetzt als eigene lesende Teilbereiche in der Vorschau sichtbar.
Beziehungen werden in der lesenden Vorschau mit Persona-Namen dargestellt, sofern die Persona-IDs auflösbar sind.

Ressourcen sind nun als eigener rein lesender Teilbereich in der Vorschau sichtbar.
