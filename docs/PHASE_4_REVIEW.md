# Phase 4 Review · Szenario-Bearbeitung bis Draft/Validierung/Layout

## 1. Zweck des Reviews

Dieses Review schließt die bisherige Phase 4 der Szenario-Bearbeitung ab.

Ziel war nicht, eine vollständige Bearbeitungsumgebung zu bauen, sondern kontrolliert zu prüfen, wie ein lokaler Szenario-Draft aus einer lesenden Vorschau heraus entstehen kann.

Die Phase sollte ausdrücklich klein bleiben:
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine weiteren aktiven Formularbereiche
- keine neuen Module

## 2. Ausgangspunkt

Vor Phase 4 gab es eine lesende Szenario-Vorschau auf Basis eines statischen Beispielszenarios.

Die App konnte Szenarioinhalte anzeigen, aber noch nicht lokal bearbeiten.

Die zentrale Frage für Phase 4 lautete:

Wie kann aus einem statischen Szenario eine kontrollierte lokale Arbeitskopie entstehen, ohne sofort Speicherung, Simulation oder weitere Fachmodule einzubauen?

## 3. Umgesetzte Schritte

### Phase 4.1 · Lokaler Draft sichtbar

- Aus `exampleScenario` wird ein lokaler Szenario-Draft erzeugt.
- Der Draft liegt nur im Arbeitsspeicher.
- Die Vorschau nutzt den Draft.
- Reset stellt den Originalzustand wieder her.

### Phase 4.2 · Szenario-Name bearbeitbar

- Das Feld `name` wurde im lokalen Draft bearbeitbar gemacht.
- Die Vorschau reagiert direkt auf Änderungen.
- Reset setzt den Namen auf das Original zurück.

### Phase 4.3 · Szenario-Beschreibung bearbeitbar

- Das Feld `description` wurde ergänzt.
- Weiterhin nur lokaler Draft.
- Keine Persistenz.

### Phase 4.4 · Szenario-Ziel bearbeitbar

- Das Feld `goal` wurde ergänzt.
- Bearbeitbar sind damit drei Szenario-Grundfelder:
  - `name`
  - `description`
  - `goal`

### Phase 4.5 · Formularstruktur verbessert

- Die drei Felder wurden semantisch als Szenario-Grunddaten gruppiert.
- `fieldset` und `legend` wurden ergänzt.
- Hilfetexte wurden ergänzt.
- Eingaben nutzen `aria-describedby`.

### Phase 4.6 · Update-Logik ausgelagert

- Wiederholte Update-Logik wurde aus `HomePage` entlastet.
- `updateScenarioDraftField` übernimmt die Aktualisierung einzelner Draft-Felder.
- Die Logik bleibt lokal und einfach.

### Phase 4.6 Review · Grenzen geprüft

- Die bis dahin erreichten Draft-Editing-Grenzen wurden dokumentiert.
- Bewusst ausgeschlossene Funktionsbereiche wurden erneut festgehalten.

### Phase 4.7 · Einfache lokale Validierung

- Für die drei vorhandenen Felder wurde minimale Validierung ergänzt.
- Regeln:
  - `name` darf nicht leer sein
  - `description` darf nicht leer sein
  - `goal` darf nicht leer sein
- Validierung bleibt rein lokal.
- Leere Felder zeigen sichtbare Hinweise.

### Phase 4.7.1 · Validierungs-Helper ausgelagert

- `validateScenarioDraftBasics` wurde in eine eigene State-Datei ausgelagert.
- Keine Logikänderung.
- Nur klarere Verantwortlichkeit.

### Phase 4.8 · Bearbeitung und Vorschau getrennt

- Bearbeitungsbereich und Vorschau wurden semantisch getrennt.
- Die Home-Ansicht enthält klar unterscheidbare Bereiche:
  - Bearbeitung
  - Vorschau

### Phase 4.8.1 · Minimal-CSS ergänzt

- Die Workspace-Panels wurden visuell differenziert.
- Ergänzte Klassen:
  - `workspace-grid`
  - `workspace-panel`
  - `editor-panel`
  - `preview-panel`
  - `workspace-hint`
- Keine React-Logik wurde geändert.

## 4. Aktueller Stand

Die App besitzt jetzt eine einfache lokale Szenario-Bearbeitung für drei Grundfelder.

Aktuell bearbeitbar:
- Szenario-Name
- Szenario-Beschreibung
- Szenario-Ziel

Aktuell vorhanden:
- lokaler Draft im Arbeitsspeicher
- Reset auf Originalzustand
- direkte Vorschau
- minimale lokale Validierung
- semantisch strukturierter Bearbeitungsbereich
- visuell getrennter Vorschau-Bereich
- getrennte State-Utilities für Draft-Erzeugung, Reset, Feld-Update und Validierung

## 5. Bewusst nicht umgesetzt

In Phase 4 wurde bewusst nicht umgesetzt:

- keine Speicherung
- kein LocalStorage
- kein Backend
- keine Datenbank
- keine Simulation
- keine OpenAI-Anbindung
- keine Reportlogik
- keine Personas-Bearbeitung
- keine Ressourcen-Bearbeitung
- keine Interventionen-Bearbeitung
- keine Phasen-Bearbeitung
- keine Beziehungs-Bearbeitung
- keine neuen Module
- keine komplexe Formularlogik
- keine automatische Übernahme von Daten
- keine Persistenzlogik

## 6. Bewertung

Phase 4 war erfolgreich, weil sie kontrolliert klein geblieben ist.

Positiv:
- Die lokale Draft-Idee ist praktisch überprüft.
- Bearbeitung und Vorschau sind getrennt.
- Reset funktioniert als Sicherheitsanker.
- Validierung wurde minimal und lokal gehalten.
- Die Update- und Validierungslogik wurde aus der UI herausgelöst.
- Der alte Fehler des unkontrollierten Funktionswachstums wurde vermieden.

Noch offen:
- `HomePage` orchestriert weiterhin relativ viel.
- Es gibt noch keine Entscheidung über Speicherung.
- Es gibt noch keine Entscheidung, ob zuerst weitere Grundfelder oder andere Entitäten folgen.
- Es gibt noch keine Tests.
- Es gibt noch keine formale Validierung über ein Schema.

## 7. Risiken für die nächste Phase

Die größten Risiken liegen nicht im aktuellen Code, sondern in der nächsten Entscheidung.

Risiko 1:
Zu schnell weitere Entitäten bearbeiten.

Beispiel:
- Personas
- Ressourcen
- Interventionen

Das würde die Komplexität deutlich erhöhen.

Risiko 2:
Speicherung zu früh einbauen.

Speicherung wirkt einfach, verändert aber die Architektur:
- Wann wird gespeichert?
- Was ist Draft?
- Was ist Original?
- Was ist verworfen?
- Was ist Version?
- Was passiert bei ungültigem Draft?

Risiko 3:
Validierung zu schnell ausweiten.

Mehr Validierung kann sinnvoll sein, sollte aber nicht zu versteckter Fachlogik in UI-Komponenten führen.

Risiko 4:
HomePage wird zur Container-Komponente mit zu viel Verantwortung.

## 8. Empfehlung

Vor dem nächsten Feature sollte entschieden werden, welche Richtung Phase 5 nimmt.

Mögliche Wege:

### Option A · Grunddaten weiter stabilisieren

Geeignet, wenn die Basis noch sauberer werden soll.

Mögliche Schritte:
- weiteres Grundfeld ergänzen
- Validierungsstruktur verbessern
- Formular in Container- und Presentational-Komponente trennen
- erste Tests für Draft-Utilities

### Option B · Speicherung vorbereiten

Geeignet, wenn der lokale Arbeitsstand erhalten bleiben soll.

Vorher klären:
- Was bedeutet Speichern?
- Wird automatisch oder manuell gespeichert?
- Wird LocalStorage genutzt?
- Wie wird Reset von gespeicherten Daten unterschieden?
- Gibt es eine Exportfunktion statt Speicherung?

### Option C · Bearbeitung weiterer Entitäten vorbereiten

Geeignet, wenn die App fachlich wachsen soll.

Nicht sofort direkt umsetzen, sondern zuerst konzeptionell klären:
- Welche Entität kommt zuerst?
- Personas?
- Ressourcen?
- Annahmen?
- Welche minimale Bearbeitung ist erlaubt?
- Wie bleibt Preview stabil?

### Option D · Tests einführen

Geeignet, um den Neustart technisch zu stabilisieren.

Sinnvolle erste Tests:
- `createDraftFromScenario`
- `resetDraft`
- `updateScenarioDraftField`
- `validateScenarioDraftBasics`

## 9. Empfehlung für den nächsten Schritt

Empfohlener nächster Schritt:

Phase 5.0 · Entscheidung über nächste Entwicklungsrichtung dokumentieren

Nicht sofort Code.

Zuerst sollte entschieden werden:

- Weiter Grunddaten bearbeiten?
- LocalStorage vorbereiten?
- Tests einführen?
- Personas/Ressourcen konzeptionell vorbereiten?
- UI weiter strukturieren?

## 10. Review-Ergebnis

Phase 4 gilt als abgeschlossen.

Der erreichte Stand ist:
- klein
- kontrolliert
- lokal
- ohne Persistenz
- ohne neue Fachmodule
- ohne Simulation
- ohne KI-Anbindung

Die nächste Phase darf nur mit einer bewussten Richtungsentscheidung beginnen.
