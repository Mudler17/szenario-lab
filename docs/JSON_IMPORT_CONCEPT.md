# JSON-Import-Konzept · Konzeptvorbereitung

## 1. Zweck

Dieses Dokument bereitet den späteren JSON-Import für `szenario-lab` fachlich und technisch vor.

Der Import soll zukünftig ermöglichen, bereits exportierte Szenario-Dateien wieder kontrolliert in die App einzulesen.

In dieser Phase wird **nichts** davon implementiert:

- keine Importfunktion
- kein Datei-Upload
- keine UI für Import
- keine Speicherung

Ziel ist ein klarer Datenvertrag und eine nachvollziehbare Importlogik **vor** jeder Implementierung.

## 2. Ausgangspunkt

Der Exportpfad ist vorhanden und abgeschlossen:

- JSON-Export ist konzeptionell und technisch vorbereitet
- JSON-Download ist vorhanden
- Export-Payload verwendet die Top-Level-Felder:
  - `exportType`
  - `formatVersion`
  - `exportedAt`
  - `source`
  - `scenario`

Aktuell sind lokaler Draft, Vorschau und Download vorhanden.

Ein JSON-Import ist noch nicht vorhanden.

## 3. Grundprinzipien für späteren Import

Für den späteren Import gelten folgende Leitprinzipien:

- Import ist **nicht** Speicherung.
- Import ist **nicht** LocalStorage.
- Import ist **nicht** automatische Wiederherstellung.
- Import ist kontrolliertes Einlesen einer Nutzerdatei.
- Import darf vorhandenen Draft nicht stillschweigend überschreiben.
- Import muss vor Übernahme prüfbar sein.
- Import muss verständliche Fehler liefern.

Damit bleibt die Bedienlogik transparent: Ein Dateieinlesen ist ein eigener Schritt und ersetzt keine separate Speicherentscheidung.

## 4. Zulässige Importdateien

Konzeptionell sollen zunächst nur folgende Dateien akzeptiert werden:

- Nur JSON-Dateien.
- Erwarteter `exportType`: `szenario-lab.scenario`.
- Unterstützte `formatVersion`: zunächst nur `1`.
- `scenario` muss vorhanden und ein Objekt sein.
- `scenario: null` wird abgelehnt.
- Im `scenario`-Objekt müssen mindestens vorhanden sein:
  - `name`
  - `description`
  - `goal`

Erweiterungsregeln:

- Unbekannte optionale Felder im `scenario` können später toleriert werden, solange Kernfelder gültig sind.
- Unbekannte Top-Level-Felder können toleriert werden, dürfen aber Pflichtfelder nicht ersetzen.

## 5. Prüf- und Validierungslogik

Ohne Implementierung wird folgende spätere Reihenfolge festgelegt:

1. Datei ist lesbar.
2. Inhalt ist valides JSON.
3. Top-Level ist ein Objekt.
4. `exportType` stimmt (`szenario-lab.scenario`).
5. `formatVersion` wird unterstützt (`1`).
6. `scenario` ist vorhanden und ist ein Objekt.
7. Pflichtfelder im `scenario` sind vorhanden (`name`, `description`, `goal`).
8. Pflichtfelder sind Strings.
9. Pflichtfelder sind nicht leer.
10. Optional: Warnung bei sehr großen oder unbekannten Feldern.

Bei einem negativen Prüfschritt soll der Import sauber abgebrochen werden.

## 6. Importiertes Szenario: Draft, Original oder Vorschau?

Konzeptionelle Entscheidung:

Importierter Inhalt soll später **zunächst als neuer lokaler Draft** übernommen werden, aber erst nach **expliziter Nutzerbestätigung**.

Begründung:

- So bleibt der bestehende Draft vor ungewolltem Überschreiben geschützt.
- Der Unterschied zwischen „Datei geprüft“ und „Inhalt übernommen“ bleibt verständlich.
- Import wird nicht mit dauerhafter Speicherung verwechselt.
- Ein späterer UI-Schritt kann vor Übernahme eine Vorschau/Zusammenfassung zeigen.

Wichtig:

- keine automatische Speicherung
- kein automatisches neues dauerhaftes Original
- Reset-Verhalten muss vor Umsetzung eindeutig geklärt sein

## 7. Reset-Semantik nach Import

Mögliche Varianten:

- A) Reset auf statisches Beispielszenario
- B) Reset auf zuletzt importierten Stand
- C) Reset auf zuletzt bestätigten Ausgangszustand

Empfehlung für erste spätere Import-Umsetzung:

Ein Import gilt erst dann als neuer Ausgangszustand, wenn Nutzerinnen und Nutzer ihn ausdrücklich übernehmen. Danach kann Reset auf diesen übernommenen Importzustand zurücksetzen.

In dieser Phase erfolgt dazu keine technische Umsetzung.

## 8. Fehlermeldungen und Nutzerkommunikation

Spätere Fehlermeldungen sollen verständlich und nicht-technisch sein, z. B.:

- „Die Datei konnte nicht gelesen werden.“
- „Die Datei enthält kein gültiges JSON.“
- „Diese Datei ist kein szenario-lab-Szenarioexport.“
- „Diese Exportversion wird noch nicht unterstützt.“
- „Der Import enthält kein gültiges Szenario.“
- „Name, Beschreibung oder Ziel fehlen.“
- „Der Import wurde nicht übernommen.“

Leitlinien:

- keine technischen Stacktraces
- keine rohen Parserfehler direkt anzeigen
- klar verständlich für Nutzer ohne Entwicklerwissen
- Import ≠ Speicherung deutlich kommunizieren

## 9. Sicherheits- und Datenschutzgrenzen

Konzeptionelle Grenzen für den späteren Import:

- Importierte Dateien können personenbezogene oder vertrauliche Daten enthalten.
- Die App soll keine Datei automatisch an Server senden.
- Keine OpenAI-Anbindung.
- Keine externe Verarbeitung.
- Keine Ausführung importierter Inhalte.
- JSON wird nur als Datenstruktur behandelt, nicht als Code.
- Keine HTML-Ausführung aus importierten Textfeldern.

## 10. Spätere Testfälle

Für eine spätere Implementierung werden mindestens folgende Tests empfohlen:

- gültiger Export Version 1 wird akzeptiert
- falscher `exportType` wird abgelehnt
- nicht unterstützte `formatVersion` wird abgelehnt
- ungültiges JSON wird abgelehnt
- fehlendes `scenario` wird abgelehnt
- `scenario: null` wird abgelehnt
- fehlende Pflichtfelder werden abgelehnt
- leere Pflichtfelder werden abgelehnt
- unbekannte optionale Felder werden toleriert
- Eingabeobjekt wird nicht mutiert

## 11. Nicht-Ziele

Nicht Teil dieser Phase sind:

- keine Import-Implementierung
- kein Datei-Upload
- keine UI
- keine Speicherung
- kein LocalStorage
- keine Datenbank
- kein Backend
- keine automatische Wiederherstellung
- keine Simulation
- keine OpenAI-Anbindung
- keine neuen Fachmodule
- keine Bearbeitung von Personas/Ressourcen/Interventionen

## 12. Empfehlung für nächste Phase

Empfohlener nächster Schritt:

**Phase 6.1 Review · JSON-Import-Konzept prüfen**

Begründung:

Vor jeder Implementierung sollte geprüft werden, ob Importlogik, Reset-Semantik, Datenschutzgrenzen und Nutzerkommunikation fachlich konsistent sind.

Damit wird die nächste mögliche technische Phase vorbereitet, aber noch nicht gestartet.
