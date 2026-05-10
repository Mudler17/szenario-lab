# Phase 6.1 Review · JSON-Import-Konzept

## 1. Zweck des Reviews

Dieses Review prüft das vorhandene Konzeptdokument `docs/JSON_IMPORT_CONCEPT.md` vor einer späteren technischen Umsetzung fachlich, architektonisch und aus Nutzersicht.

Es erfolgt **keine Implementierung** einer Importfunktion.

## 2. Geprüfter Umfang

- `docs/JSON_IMPORT_CONCEPT.md`
- `docs/JSON_EXPORT_SCHEMA.md`
- `docs/PHASE_6_DIRECTION.md`
- `docs/STORAGE_DECISION.md`
- `ROADMAP.md`
- `README.md`

## 3. Prüfergebnis fachliche Konsistenz

**Bewertung: erfüllt**

Kurze Begründung:

- Das Import-Konzept grenzt klar ab: Import ist weder Speicherung noch LocalStorage noch automatische Wiederherstellung.
- Import wird als kontrolliertes Einlesen einer Nutzerdatei beschrieben.
- Ein stilles Überschreiben des vorhandenen Drafts wird ausgeschlossen.
- Ein Bestätigungsfluss vor Übernahme ist vorgesehen und fachlich plausibel.

Hinweis:

- Die Trennung zwischen „geprüft“ und „übernommen“ ist grundsätzlich vorhanden und sollte in späteren Statusmeldungen explizit sichtbar gemacht werden.

## 4. Prüfergebnis Anschluss an Export-Schema

**Bewertung: erfüllt**

Kurze Begründung:

- Das Import-Konzept ist konsistent zur Export-Top-Level-Struktur (`exportType`, `formatVersion`, `exportedAt`, `source`, `scenario`).
- `exportType: szenario-lab.scenario` wird korrekt als Pflichtprüfung benannt.
- `formatVersion: 1` wird korrekt als zunächst einzige unterstützte Version festgelegt.
- `scenario: null` wird plausibel abgelehnt.
- `name`, `description`, `goal` als Mindestfelder sind konsistent zum Export-Schema der Kernfelder.

## 5. Prüfergebnis Validierungslogik

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die vorgesehene Prüf-Reihenfolge ist logisch und robust (Parse → Struktur → Typ/Version → Pflichtfelder → Typen → Leerheitsprüfung).
- Wichtige Fehlersituationen sind bereits benannt (ungültiges JSON, falscher Exporttyp, falsche Version, fehlendes/ungültiges `scenario`, fehlende/leere Pflichtfelder).
- Toleranz unbekannter Felder ist grundsätzlich stimmig formuliert.

Ergänzungshinweise (nur konzeptionell):

- Klarstellen, dass „leere Pflichtfelder“ auch nur-Whitespace-Werte umfasst.
- Explizit ergänzen, dass Top-Level-Arrays (statt Objekt) abgelehnt werden.
- Explizit ergänzen, dass `scenario` als Array (statt Objekt) abgelehnt wird.
- Optional eine klare Obergrenze/Strategie für sehr große JSON-Strukturen benennen (Warnung oder Ablehnung), um Verhalten deterministisch zu halten.

## 6. Prüfergebnis Draft-/Reset-Semantik

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- „Importierter Inhalt wird zunächst lokaler Draft“ ist nachvollziehbar.
- „Übernahme erst nach expliziter Bestätigung“ ist korrekt und schützt vor unbeabsichtigtem Ersetzen.
- Die Empfehlung, erst ein bestätigtes Import-Ergebnis als möglichen späteren Reset-Ausgangspunkt zu nutzen, ist fachlich plausibel.

Nutzerverständnis-Risiko:

- Die Begriffe „geprüfter Import“, „übernommener Import“ und „gespeicherter Zustand“ sollten in späteren Texten/Statusmeldungen noch schärfer getrennt werden, um Missverständnisse zu vermeiden.

## 7. Prüfergebnis Nutzerkommunikation

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die vorhandenen Beispielmeldungen sind verständlich und nicht zu technisch.
- Import ≠ Speicherung wird als Leitlinie klar gefordert.

Empfohlene ergänzende spätere Meldungen:

- „Der Import würde den aktuellen Entwurf ersetzen.“
- „Bitte prüfe den Import vor der Übernahme.“
- „Der Import wurde geprüft, aber noch nicht übernommen.“

## 8. Prüfergebnis Sicherheit und Datenschutz

**Bewertung: erfüllt**

Kurze Begründung:

- Das Konzept grenzt klar ab: keine automatische Serverübertragung, keine OpenAI-Anbindung, keine externe Verarbeitung.
- Es wird ausdrücklich festgelegt, dass importierte Inhalte nicht als Code ausgeführt werden.
- HTML-Ausführung aus importierten Textfeldern wird ausgeschlossen.
- Ein Hinweis auf mögliche personenbezogene/vertrauliche Inhalte ist enthalten.

Ergänzungshinweis:

- Optional kann ein expliziter Nutzerhinweis zu „unerwarteten/manipulativen Inhalten“ ergänzt werden (z. B. ungewöhnlich lange Texte oder irreführende Inhalte).

## 9. Prüfergebnis Testperspektive

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die bestehenden vorgeschlagenen Testfälle sind eine gute Basis.
- Für robuste Validierung fehlen noch einige explizite Grenzfälle.

Empfohlene zusätzliche spätere Testfälle (nur Reviewhinweise):

- Top-Level ist Array statt Objekt → Ablehnung.
- `scenario` ist Array statt Objekt → Ablehnung.
- Pflichtfelder enthalten nur Leerzeichen → Ablehnung.
- Unbekannte Top-Level-Felder werden toleriert, sofern Pflichtstruktur intakt bleibt.
- Eingabe-/Originalobjekt wird nicht mutiert.
- Sehr große JSON-Struktur führt zu definierter Warnung oder Ablehnung.

## 10. Architekturgrenzen

Dieses Review bestätigt ausdrücklich:

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

## 11. Gesamtfazit

**Entscheidung: Konzept ist ausreichend für den nächsten Schritt.**

Begründung:

- Es liegen keine fachlichen oder architektonischen Blocker vor.
- Die offenen Punkte sind nachgelagerte Präzisierungen für Validierungsdetails und Nutzerkommunikation, keine grundlegenden Konzeptlücken.

Empfohlener nächster Schritt:

**Phase 6.2 · JSON-Import-Validierung konzeptionell vorbereiten**

Dabei zunächst rein konzeptionell zuschneiden:

- Eingabeform
- Ergebnisobjekt
- Fehlercodes
- Statusmeldungen
- Testfälle
- keine UI
- kein Datei-Upload
- keine Speicherung
