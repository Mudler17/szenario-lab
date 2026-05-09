# SCENARIO MODULE

## Zweck des Szenario-Moduls
Das Szenario-Modul bildet die fachliche Sicht auf ein einzelnes Szenario in einer rein lesenden Darstellung ab. Es dient dazu, zentrale Szenario-Bausteine strukturiert sichtbar zu machen und eine gemeinsame fachliche Sprache zwischen UI und Domänenmodell zu etablieren.

Das Modul ist aktuell bewusst als fachliche Ausarbeitungs- und Strukturierungsstufe angelegt: Es macht Inhalte sichtbar, ohne bereits operative Logik oder Eingriffsfunktionen bereitzustellen.

## Aktuell lesend sichtbare fachliche Teilbereiche
Der aktuelle Umfang umfasst ausschließlich lesende Teilansichten zu:
- Summary
- Personas
- Ressourcen
- Phasen
- Annahmen
- Evidenz
- Beziehungen
- Interventionen
- Strategien

Diese Teilbereiche dienen der fachlichen Orientierung und der transparenten Darstellung von Zusammenhängen innerhalb eines Szenarios. Evidenz wird aktuell ausschließlich lesend angezeigt, mit zugehörigen Annahmen soweit auflösbar namentlich verknüpft, und nicht bewertet.

## Fachliche Fragen, die das Modul künftig beantworten soll
Das Szenario-Modul soll perspektivisch dabei helfen, unter anderem folgende Fragen klarer zu beantworten:
- Welche Ausgangslage, Ziele und Rahmenbedingungen beschreibt das Szenario?
- Welche Personas sind beteiligt und wie stehen sie in Beziehung?
- Welche Ressourcen sind verfügbar, kritisch oder begrenzend?
- Wie ist das Szenario über Phasen strukturiert?
- Welche Annahmen tragen das Szenario und wo liegen Unsicherheiten?
- Welche Interventionen sind vorgesehen und wen oder was beeinflussen sie?
- Welche Strategien bündeln Interventionen und welche Zielrichtungen verfolgen sie?
- Welche fachlichen Abhängigkeiten und Spannungsfelder lassen sich bereits ohne Simulation erkennen?

## Ausdrücklich noch nicht Teil des Moduls
Folgende Bereiche sind derzeit bewusst **nicht** Bestandteil des Szenario-Moduls:
- Simulation
- Bewertung
- Speicherung
- Import
- OpenAI-Anbindung
- Bearbeitung

Damit bleibt das Modul auf fachliche Lesbarkeit, Struktur und Abgrenzung fokussiert.

## Abgrenzung zu anderen Modulen

### Abgrenzung zu `domain`
`domain` definiert die fachlichen Begriffe und Beziehungen als modellhafte Grundlage. Das Szenario-Modul nutzt diese Begriffe für die Darstellung, trifft aber selbst keine tiefere Regelentscheidung und implementiert keine fachliche Kernlogik.

### Abgrenzung zu `simulation`
`simulation` ist für zukünftige Berechnungs- und Ablauflogik zuständig. Das Szenario-Modul zeigt aktuell nur strukturierte Informationen und führt keine Simulationsschritte aus.

### Abgrenzung zu `report`
`report` wird zukünftig für Verdichtung, Vergleich und Ergebnisaufbereitung genutzt. Das Szenario-Modul liefert dafür die lesend sichtbare fachliche Ausgangsstruktur, jedoch keine Ergebnisbewertung.

### Abgrenzung zu `infrastructure`
`infrastructure` kapselt später Persistenz und externe Schnittstellen. Das Szenario-Modul enthält keine Datenbankanbindung, keine Speicherung und keine externen Integrationen.
