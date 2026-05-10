# Phase 6.0 · Nächste Entwicklungsrichtung nach Stabilisierung

## 1. Ausgangspunkt

Phase 5 ist abgeschlossen.

Der aktuelle Stand umfasst:

- lokaler Draft für `name`, `description` und `goal`
- Reset auf Originalzustand
- minimale lokale Validierung
- direkte Vorschau
- Testfundament für Draft-State-Utilities
- JSON-Export vorbereitet
- JSON-Download vorbereitet
- nutzerfreundliche Statusmeldungen
- minimale UI-Einbindung für den Download
- Quality Gate mit `npm test` und `npm run build`

Damit ist die technische Stabilisierung für den aktuellen Bearbeitungsumfang dokumentiert und überprüft.

## 2. Weiterhin bewusst nicht vorhanden

Folgende Themen sind weiterhin ausdrücklich nicht Teil des aktuellen Stands:

- keine App-interne Speicherung
- kein LocalStorage
- kein JSON-Import
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Fachmodule
- keine Bearbeitung weiterer Entitäten (Personas, Ressourcen, Interventionen)
- keine Backend-/Datenbanklogik

## 3. Entscheidungsoptionen für Phase 6

### Option A · JSON-Import konzeptionell vorbereiten

Ziel:
Den eingeführten JSON-Export später wieder einlesbar machen, zunächst ausschließlich konzeptionell.

Vorteile:

- direkt anschlussfähig an den abgeschlossenen Exportpfad
- erhöht die spätere Nutzbarkeit, weil Export nicht Einbahnstraße bleibt
- bleibt klein, wenn zunächst nur Regeln und Grenzfälle dokumentiert werden
- führt noch keine Speicherung ein

Risiken:

- Importlogik kann früh komplex werden (Schema, Validierung, Fehlermeldungen)
- klare Abgrenzung zu Speicherung muss sauber erklärt werden

Bewertung:
Sehr anschlussfähig und sinnvoll als kontrollierter nächster Konzeptschritt.

### Option B · Weitere Szenario-Grundfelder bearbeiten

Ziel:
Bearbeitung im bestehenden Grunddatenbereich erweitern.

Vorteile:

- geringer technischer Sprung
- vorhandenes Muster kann direkt weitergenutzt werden
- sichtbarer Produktfortschritt

Risiken:

- Gefahr von Formularwachstum ohne strategischen Richtungsentscheid
- verschiebt die Klärung zentraler Datenflüsse (z. B. Import/Übergaben)

Bewertung:
Möglich, aber fachlich weniger richtungsentscheidend als Import-Konzept.

### Option C · Personas/Ressourcen/Interventionen konzeptionell vorbereiten

Ziel:
Nächste fachliche Entitäten für spätere Bearbeitung planen.

Vorteile:

- fachlich wichtig für den Organisationssimulator
- hilft, spätere Modulgrenzen früh sauber zu planen

Risiken:

- deutlich komplexer als Grunddaten
- erhöht Koordinationsbedarf (Datenmodell, UI, Interaktionen)

Bewertung:
Wertvoll, aber als nächster Schritt potenziell zu breit.

### Option D · Report-/Beratungsdokument konzeptionell vorbereiten

Ziel:
Auf Basis von Szenario und Exportstruktur eine spätere Bericht-/Beratungslogik vorbereiten.

Vorteile:

- hoher fachlicher Beratungsnutzen
- passt langfristig zum Zielbild eines Organisationssimulators

Risiken:

- derzeit ohne Word-/PDF-Export und ohne neues Modul nur eingeschränkt konkretisierbar
- kann früh in Output-Formate statt Kern-Datenfluss ablenken

Bewertung:
Strategisch interessant, aber aktuell nachgelagert.

### Option E · LocalStorage/Speicherung konzeptionell neu prüfen

Ziel:
Nach JSON-Export erneut prüfen, ob manuelle Speicherung im Browser sinnvoll wird.

Vorteile:

- hoher praktischer Nutzwert
- kann Arbeitsunterbrechungen reduzieren

Risiken:

- weiterhin unklare Speichersemantik (Draft vs. Original vs. importierte Stände)
- erhöht Komplexität früh

Bewertung:
Wichtiges Thema, aber für den unmittelbaren nächsten Schritt weiterhin zurückgestellt.

### Option F · UI-Struktur/Komponentengrenzen entlasten

Ziel:
HomePage, Editor, Preview und Exportbereich strukturell für spätere Erweiterungen vorbereiten.

Vorteile:

- reduziert künftige Komplexität
- schützt Wartbarkeit vor größeren Formularerweiterungen

Risiken:

- Refactoring ohne unmittelbaren fachlichen Mehrwert möglich
- Gefahr, vor zentraler Richtungsentscheidung zu früh Struktur umzubauen

Bewertung:
Sinnvoll begleitend, aber nicht als primäre Phase-6.1-Richtung.

## 4. Entscheidung

Empfehlung für Phase 6.1:

**Option A · JSON-Import konzeptionell vorbereiten**

Begründung:

- Der Exportpfad ist abgeschlossen und dokumentiert.
- Ohne Import bleibt der Export fachlich eine Einbahnstraße.
- Ein reiner Konzeptschritt hält den Umfang klein und kontrolliert.
- Es wird weiterhin keine Speicherung eingeführt.
- Es wird weiterhin kein LocalStorage eingeführt.
- Es wird keine neue UI gebaut.
- Es wird keine neue Runtime-Fachlogik eingebaut.
- Spätere Speicherentscheidungen bleiben getrennt und bewusst steuerbar.

## 5. Scope für Phase 6.1

Phase 6.1 soll ausschließlich ein Konzeptdokument vorbereiten, z. B.:

`docs/JSON_IMPORT_CONCEPT.md`

Zu klärende Leitfragen:

- Welche Exportdateien dürfen importiert werden?
- Welche `formatVersion` wird akzeptiert?
- Wie wird `exportType` geprüft?
- Wird `scenario: null` abgelehnt?
- Was passiert bei fehlenden Feldern?
- Wird importierter Inhalt sofort Draft, neues Original oder nur Vorschau?
- Wie bleibt Reset-Verhalten verständlich?
- Wie wird verhindert, dass Import mit Speicherung verwechselt wird?
- Welche Fehlermeldungen werden benötigt?
- Welche Tests wären später notwendig?

## 6. Nicht-Ziele für Phase 6.1

Nicht Teil von Phase 6.1:

- keine Import-Implementierung
- kein Datei-Upload
- keine Speicherung
- kein LocalStorage
- keine Datenbank
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Fachmodule
- keine Bearbeitung von Personas/Ressourcen/Interventionen
- keine UI-Umsetzung
- keine große Architekturänderung

## 7. Akzeptanzkriterien

Phase 6.0 ist erfolgreich, wenn:

- `docs/PHASE_6_DIRECTION.md` ist angelegt
- eine klare Entscheidung für Phase 6.1 ist dokumentiert
- `ROADMAP.md` enthält den Abschnitt „Phase 6 – Nächste Entwicklungsrichtung“
- dort steht:
  - `[x] Phase 6.0 dokumentiert: Nächste Entwicklungsrichtung nach Stabilisierung festgelegt`
  - `[ ] Phase 6.1: JSON-Import konzeptionell vorbereiten`
- `README.md` enthält die minimale Statusaktualisierung:
  - `Phase 6.0 · Nächste Entwicklungsrichtung nach Stabilisierung festgelegt`
- es erfolgen keine Codeänderungen
