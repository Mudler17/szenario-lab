# Phase 5.0 · Nächste Entwicklungsrichtung

## 1. Ausgangspunkt

Phase 4 ist abgeschlossen.

Die App besitzt jetzt eine kontrollierte lokale Szenario-Bearbeitung für drei Grundfelder:

- `name`
- `description`
- `goal`

Vorhanden sind:

- lokaler Draft im Arbeitsspeicher
- Reset auf Originalzustand
- direkte Vorschau
- minimale lokale Validierung
- ausgelagerte Draft-State-Utilities
- visuell getrennter Bearbeitungs- und Vorschau-Bereich

Bewusst noch nicht vorhanden:

- Speicherung
- LocalStorage
- Simulation
- OpenAI-Anbindung
- Bearbeitung von Personas
- Bearbeitung von Ressourcen
- Bearbeitung von Interventionen
- weitere Formularbereiche
- neue Module

## 2. Entscheidungsoptionen

Für Phase 5 standen fünf Richtungen zur Auswahl.

### Option A · Tests einführen

Ziel:
Den vorhandenen Draft-Kern technisch absichern, bevor weitere Funktionen ergänzt werden.

Mögliche erste Tests:

- `createDraftFromScenario`
- `resetDraft`
- `updateScenarioDraftField`
- `validateScenarioDraftBasics`

Vorteile:

- schützt den bereits erreichten stabilen Stand
- verhindert Rückfälle in unkontrolliertes Vibe-Coding
- schafft Vertrauen vor Speicherung oder weiteren Entitäten
- hält den Scope klein
- betrifft zunächst reine Utility-Funktionen

Risiken:

- bringt zunächst keine sichtbare neue Funktion
- benötigt Test-Setup und neue Entwicklungsdisziplin

Bewertung:
Für den aktuellen Stand die stabilste nächste Richtung.

### Option B · LocalStorage/Speicherung vorbereiten

Ziel:
Lokale Drafts oder Szenarien dauerhaft erhalten.

Vorteile:

- sichtbarer Nutzwert
- Arbeitsstände gehen nicht verloren
- Vorbereitung für spätere Szenarioverwaltung

Risiken:

- erhöht Architekturkomplexität deutlich
- erfordert Entscheidung über Draft, Original, gespeicherte Version und Reset
- kann zu früh Persistenzlogik in die App ziehen

Bewertung:
Wichtig, aber erst nach Tests sinnvoll.

### Option C · Weitere Grundfelder bearbeiten

Ziel:
Die Bearbeitung im Szenario-Grundbereich erweitern.

Vorteile:

- fachlich naheliegend
- einfache Erweiterung des bestehenden Musters
- geringe Einstiegshürde

Risiken:

- reines Formularwachstum
- HomePage und ScenarioDraftForm könnten weiter anwachsen
- ohne Tests steigt Regressionsrisiko

Bewertung:
Später möglich, aber nicht als nächster Schritt empfohlen.

### Option D · Personas/Ressourcen konzeptionell vorbereiten

Ziel:
Die Bearbeitung weiterer Entitäten vorbereiten, ohne sie sofort umzusetzen.

Vorteile:

- fachlich relevant
- bereitet den nächsten großen Produktschritt vor
- verhindert vorschnelle UI-Umsetzung

Risiken:

- kann zu breit werden
- öffnet neue Komplexität
- benötigt klare Reihenfolge der Entitäten

Bewertung:
Als Konzeptphase sinnvoll, aber nach Testbasis besser.

### Option E · UI/Formularstruktur weiter entlasten

Ziel:
HomePage, Draft-Form und Preview strukturell weiter entkoppeln.

Vorteile:

- verbessert Wartbarkeit
- reduziert Container-Komplexität
- bereitet spätere Module vor

Risiken:

- kann zu Refactoring ohne Nutzwert werden
- ohne Tests ist Refactoring riskanter

Bewertung:
Sinnvoll, aber idealerweise nach ersten Utility-Tests.

## 3. Entscheidung

Für Phase 5 wird Option A gewählt:

Tests einführen.

Begründung:

Der aktuelle Draft-Kern ist klein genug, um jetzt gut testbar gemacht zu werden. Gleichzeitig ist er wichtig genug, dass spätere Erweiterungen ihn nicht beschädigen dürfen.

Tests sind der richtige nächste Schritt, weil sie:

- den erreichten stabilen Stand absichern,
- weitere Entwicklung kontrollierbarer machen,
- spätere Speicherung vorbereiten,
- Refactoring risikoärmer machen,
- den Neustart vom alten Prototypen methodisch unterscheiden.

## 4. Scope für Phase 5.1

Phase 5.1 soll nur ein minimales Testfundament einführen.

Empfohlene erste Tests:

- `createDraftFromScenario` erzeugt eine Arbeitskopie
- `createDraftFromScenario(null)` gibt `null` zurück
- `resetDraft` erzeugt wieder eine Arbeitskopie aus dem Original
- `updateScenarioDraftField` verändert nur das angegebene Feld
- `updateScenarioDraftField(null, ...)` gibt `null` zurück
- `validateScenarioDraftBasics` meldet leere Pflichtfelder
- `validateScenarioDraftBasics` gibt für gefüllte Felder leere Fehlermeldungen zurück

## 5. Nicht-Ziele für Phase 5.1

Nicht Teil von Phase 5.1:

- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Felder
- keine Personas-Bearbeitung
- keine Ressourcen-Bearbeitung
- keine Interventionen-Bearbeitung
- keine UI-Erweiterung
- keine neue Fachlogik
- kein großes Refactoring

## 6. Akzeptanzkriterien für Phase 5.1

Phase 5.1 ist erfolgreich, wenn:

- ein minimales Test-Setup vorhanden ist
- die Draft-State-Utilities getestet sind
- `npm test` oder ein gleichwertiger Testbefehl funktioniert
- bestehende App-Funktionalität unverändert bleibt
- keine neue Fachfunktion eingeführt wurde

## 7. Review-Ergebnis

Phase 5 beginnt mit technischer Stabilisierung.

Die nächste konkrete Phase lautet:

Phase 5.1 · Testfundament für Draft-State-Utilities einführen
