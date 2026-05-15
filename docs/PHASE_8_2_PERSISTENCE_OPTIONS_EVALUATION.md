# Phase 8.2 · Speicheroptionen bewerten und Zielpfad auswählen

## 1. Ziel der Phase
Bewertung der in Phase 8.1 beschriebenen Speicheroptionen und Auswahl eines Zielpfads für die weitere Persistenz-Konzeption.

Diese Phase bewertet und entscheidet nur konzeptionell. Es wird keine Speicherung implementiert.

## 2. Ausgangspunkt
- Phase 7 ist abgeschlossen.
- Phase 8.0 hat Persistenzentscheidung und Speicherarchitektur als Hauptphase festgelegt.
- Phase 8.1 hat Speicheroptionen, Risiken, Datenschutzfragen und Entscheidungskriterien vorbereitet.
- Aktueller Stand:
  - lokaler React-Draft-State
  - JSON-Download
  - JSON-Import-Prüfung
  - bewusste Übernahme geprüfter Imports in lokalen Draft
- Nicht vorhanden:
  - App-Speicherung
  - LocalStorage
  - SessionStorage
  - IndexedDB
  - Backend
  - Datenbank
  - Authentifizierung
  - Accounts
  - API

## 3. Bewertungsmethode
Bewertet wurden die Optionen aus Phase 8.1 anhand folgender Kriterien:

- Datenschutzrisiko
- Transparenz für Nutzer
- Nutzerkontrolle
- Datenminimierung
- Wiederaufnahmefähigkeit
- Verlustvermeidung
- Versionierbarkeit
- technische Komplexität
- Testbarkeit
- a11y-/UX-Verständlichkeit
- Anschluss an JSON-Export/-Import
- Anschluss an spätere Reports
- Anschluss an spätere Simulation
- Anschluss an mögliche Kollaboration
- Betriebsaufwand
- Risiko von Scheinsicherheit

Bewertungsskala:
- niedrig
- mittel
- hoch

Zusätzlich je Option:
- Kurzfazit
- Ausschluss oder Weiterverfolgung
- Begründung

## 4. Optionenbewertung

### Option A: Weiterhin keine App-Speicherung, nur Datei-Workflow
- Datenschutzrisiko: niedrig
- Transparenz für Nutzer: hoch
- Nutzerkontrolle: hoch
- Datenminimierung: hoch
- Wiederaufnahmefähigkeit: mittel
- Verlustvermeidung: mittel
- Versionierbarkeit: mittel
- technische Komplexität: niedrig
- Testbarkeit: hoch
- a11y-/UX-Verständlichkeit: hoch
- Anschluss an JSON-Export/-Import: hoch
- Anschluss an spätere Reports: mittel
- Anschluss an spätere Simulation: mittel
- Anschluss an mögliche Kollaboration: niedrig
- Betriebsaufwand: niedrig
- Risiko von Scheinsicherheit: niedrig

Kurzfazit: Sehr sicherer Minimalpfad mit hoher Nutzerkontrolle und geringer Komplexität, aber mit Komfort- und Verlustvermeidungsgrenzen.

Ausschluss oder Weiterverfolgung: Weiterverfolgung als sicherer Standardpfad.

Begründung: Der bestehende Datei-Workflow ist verständlich und minimiert verdeckte Speicherung, bietet aber keine komfortable, kontinuierliche Wiederaufnahme ohne aktives Dateimanagement.

### Option B: Browser-Speicherung via LocalStorage
- Datenschutzrisiko: hoch
- Transparenz für Nutzer: niedrig
- Nutzerkontrolle: mittel
- Datenminimierung: niedrig
- Wiederaufnahmefähigkeit: mittel
- Verlustvermeidung: mittel
- Versionierbarkeit: niedrig
- technische Komplexität: niedrig
- Testbarkeit: mittel
- a11y-/UX-Verständlichkeit: niedrig
- Anschluss an JSON-Export/-Import: mittel
- Anschluss an spätere Reports: niedrig
- Anschluss an spätere Simulation: niedrig
- Anschluss an mögliche Kollaboration: niedrig
- Betriebsaufwand: niedrig
- Risiko von Scheinsicherheit: hoch

Kurzfazit: Technisch als Schnelllösung verlockend, aber datenschutz- und transparenzseitig für sensible Organisationsszenarien kritisch.

Ausschluss oder Weiterverfolgung: Als Standardpfad ausgeschlossen; später allenfalls optional, explizit aktiviert, erklärt und löschbar prüfbar.

Begründung: LocalStorage kann unbemerkte Persistenz auf geteilten Geräten verursachen und erzeugt ohne klare UX-/Löschkonzepte eine falsche Sicherheitserwartung.

### Option C: SessionStorage / temporäre Browser-Speicherung
- Datenschutzrisiko: mittel
- Transparenz für Nutzer: niedrig
- Nutzerkontrolle: mittel
- Datenminimierung: mittel
- Wiederaufnahmefähigkeit: niedrig
- Verlustvermeidung: niedrig
- Versionierbarkeit: niedrig
- technische Komplexität: niedrig
- Testbarkeit: mittel
- a11y-/UX-Verständlichkeit: niedrig
- Anschluss an JSON-Export/-Import: niedrig
- Anschluss an spätere Reports: niedrig
- Anschluss an spätere Simulation: niedrig
- Anschluss an mögliche Kollaboration: niedrig
- Betriebsaufwand: niedrig
- Risiko von Scheinsicherheit: hoch

Kurzfazit: Kann temporär gegen versehentliches Verlieren helfen, ist aber kein tragfähiger Hauptpfad.

Ausschluss oder Weiterverfolgung: Als Hauptzielpfad ausgeschlossen; später nur als eng begrenzter technischer Schutzmechanismus prüfbar.

Begründung: SessionStorage ist nicht stabil genug für Wiederaufnahme und birgt ein hohes Missverständnisrisiko bezüglich Persistenzdauer.

### Option D: IndexedDB / lokale strukturierte Browser-Speicherung
- Datenschutzrisiko: mittel
- Transparenz für Nutzer: niedrig
- Nutzerkontrolle: mittel
- Datenminimierung: mittel
- Wiederaufnahmefähigkeit: hoch
- Verlustvermeidung: hoch
- Versionierbarkeit: mittel
- technische Komplexität: hoch
- Testbarkeit: mittel
- a11y-/UX-Verständlichkeit: niedrig
- Anschluss an JSON-Export/-Import: mittel
- Anschluss an spätere Reports: mittel
- Anschluss an spätere Simulation: mittel
- Anschluss an mögliche Kollaboration: niedrig
- Betriebsaufwand: mittel
- Risiko von Scheinsicherheit: mittel

Kurzfazit: Mächtig, aber derzeit zu schwergewichtig und transparentionskritisch für den aktuellen Reifegrad.

Ausschluss oder Weiterverfolgung: Nicht nächster Zielpfad; ggf. langfristig prüfbar, falls lokale Offline-Speicherung zentral wird.

Begründung: Hoher Architektur- und UX-Aufwand steht aktuell nicht im Verhältnis zum konzeptionellen Stand von Persistenz und Nutzerkommunikation.

### Option E: Backend-Speicherung
- Datenschutzrisiko: hoch
- Transparenz für Nutzer: mittel
- Nutzerkontrolle: mittel
- Datenminimierung: mittel
- Wiederaufnahmefähigkeit: hoch
- Verlustvermeidung: hoch
- Versionierbarkeit: hoch
- technische Komplexität: hoch
- Testbarkeit: mittel
- a11y-/UX-Verständlichkeit: mittel
- Anschluss an JSON-Export/-Import: hoch
- Anschluss an spätere Reports: hoch
- Anschluss an spätere Simulation: hoch
- Anschluss an mögliche Kollaboration: hoch
- Betriebsaufwand: hoch
- Risiko von Scheinsicherheit: mittel

Kurzfazit: Langfristig relevant und zukunftsfähig, aber kein nächster Implementierungspfad.

Ausschluss oder Weiterverfolgung: Nicht als nächster Pfad; nur als späteres Zielbild bzw. eigene Hauptphase weiterzuführen.

Begründung: Authentifizierung, Rollen/Rechte, Betrieb, Sicherheit, Datenschutz und API-Architektur erfordern einen separaten, umfangreichen Phasenschnitt.

### Option F: Hybridpfad: Datei-Workflow bleibt Standard, Speicherung später bewusst aktivierbar
- Datenschutzrisiko: niedrig
- Transparenz für Nutzer: hoch
- Nutzerkontrolle: hoch
- Datenminimierung: hoch
- Wiederaufnahmefähigkeit: mittel
- Verlustvermeidung: mittel
- Versionierbarkeit: mittel
- technische Komplexität: mittel
- Testbarkeit: mittel
- a11y-/UX-Verständlichkeit: mittel
- Anschluss an JSON-Export/-Import: hoch
- Anschluss an spätere Reports: hoch
- Anschluss an spätere Simulation: hoch
- Anschluss an mögliche Kollaboration: mittel
- Betriebsaufwand: mittel
- Risiko von Scheinsicherheit: niedrig

Kurzfazit: Stärkster Zielpfad, weil er den sicheren Standard erhält und trotzdem einen kontrollierten Ausbau ermöglicht.

Ausschluss oder Weiterverfolgung: Weiterverfolgung als Zielpfad.

Begründung: Der Hybridpfad balanciert Datenschutz und Nutzerkontrolle mit einem realistischen Ausbaupfad, ohne frühzeitig eine konkrete Speichertechnologie festzuschreiben.

## 5. Vergleichstabelle

| Option | Datenschutzrisiko | Nutzerkontrolle | Wiederaufnahmefähigkeit | technische Komplexität | Transparenz | Zukunftsfähigkeit | Empfehlung |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Option A: Datei-Workflow ohne App-Speicherung | niedrig | hoch | mittel | niedrig | hoch | mittel | Als Standard beibehalten |
| Option B: LocalStorage | hoch | mittel | mittel | niedrig | niedrig | niedrig bis mittel | Nicht als Standard, derzeit nicht wählen |
| Option C: SessionStorage | mittel | mittel | niedrig | niedrig | niedrig | niedrig | Nicht als Hauptpfad wählen |
| Option D: IndexedDB | mittel | mittel | hoch | hoch | niedrig | mittel | Derzeit nicht nächster Pfad |
| Option E: Backend | hoch | mittel | hoch | hoch | mittel | hoch | Langfristig, aber nicht jetzt |
| Option F: Hybridpfad | niedrig | hoch | mittel | mittel | hoch | hoch | Zielpfad auswählen |

## 6. Zielpfadentscheidung
Ausgewählter Zielpfad:

**Hybridpfad mit Datei-Workflow als Standard und nur bewusst aktivierbarer Speicherung als späterem optionalem Ausbau.**

Konkret:
- JSON-Datei-Workflow bleibt der sichere Standard.
- Keine automatische Speicherung.
- Keine verdeckte Browser-Speicherung.
- Keine Backend-Speicherung ohne eigene Architekturphase.
- Keine konkrete Speichertechnologie wird in Phase 8.2 eingeführt.
- Phase 8.3 soll die Speicherarchitektur für einen bewusst aktivierbaren Speicherpfad konzeptionell vorbereiten.
- Dabei bleibt offen, ob der erste Speicherpfad später lokal, dateibasiert erweitert oder backendgestützt wird.
- LocalStorage darf nicht als Standard- oder Schnelllösung festgeschrieben werden.

## 7. Warum dieser Zielpfad?
- Szenarien können vertrauliche und personenbezogene Organisationsinformationen enthalten.
- Nutzerkontrolle ist wichtiger als Komfort durch verdeckte Speicherung.
- Der Datei-Workflow ist bereits vorhanden und verständlich.
- Gleichzeitig wird bei komplexeren Szenarien Wiederaufnahme wichtiger.
- Ein Hybridpfad erlaubt spätere Erweiterung ohne vorschnelle technische Verhärtung.
- Speicherlogik darf nicht unbemerkt in JSON-Import/-Export oder Draft-Utilities einwandern.

## 8. Nicht gewählte Optionen

### Nicht gewählt: reine LocalStorage-Strategie
Begründung:
- zu hohes Risiko verdeckter Speicherung
- geteilte Geräte
- geringe Transparenz
- Datenschutz-/Löschkonzept fehlt

### Nicht gewählt: SessionStorage als Hauptpfad
Begründung:
- kein stabiler Wiederaufnahmepfad
- erzeugt Scheinsicherheit

### Nicht gewählt: IndexedDB als nächster Pfad
Begründung:
- zu komplex für aktuellen Stand
- Transparenzproblem

### Nicht gewählt: Backend als nächster Pfad
Begründung:
- Authentifizierung, Rollen, Rechte, Betrieb, Datenschutz und API würden eigene Hauptphase erfordern

### Nicht gewählt: nur Datei-Workflow dauerhaft festschreiben
Begründung:
- sicher, aber bei komplexer werdenden Szenarien möglicherweise zu wenig komfortabel

## 9. Konsequenzen für Phase 8.3
Phase 8.3 soll heißen:

**Phase 8.3 · Speicherarchitektur für bewusst aktivierbaren Speicherpfad konzeptionell vorbereiten**

Ziel von Phase 8.3:
- Architektur-Skizze für optionalen Speicherpfad
- klare Trennung von:
  - lokalem Draft
  - JSON-Datei-Workflow
  - optionaler Speicherung
- Datenfluss beschreiben
- Datenschutz- und Löschanforderungen formulieren
- Nutzertexte und Kontrollpunkte konzeptionell vorbereiten
- noch keine Implementierung

Wichtig:
Phase 8.3 entscheidet noch nicht automatisch für LocalStorage, IndexedDB oder Backend. Sie bereitet die Architekturfrage vor.

## 10. Anforderungen an spätere Speicherung
Falls später Speicherung eingeführt wird, muss sie mindestens erfüllen:
- bewusst aktivierbar
- klar erkennbar
- jederzeit deaktivierbar oder löschbar
- keine automatische Speicherung ohne Hinweis
- klare Trennung von Download und App-Speicherung
- verständlicher Status
- Datenminimierung
- keine Speicherung sensibler Daten ohne Warnhinweis
- testbar
- dokumentiert
- keine Vermischung mit Simulation oder OpenAI-Anbindung

## 11. Datenschutz- und Sicherheitsgrenzen
- Szenarien können personenbezogene oder vertrauliche Organisationsdaten enthalten.
- Speicherung darf nicht als neutrale Komfortfunktion behandelt werden.
- Browser-Speicherung ist für Nutzer oft unsichtbar.
- Backend-Speicherung erzeugt deutlich höhere Anforderungen.
- Löschung, Export, Transparenz und Nutzerkontrolle sind Pflichtthemen.
- Eine spätere Architektur muss diese Fragen vor Code klären.

## 12. Verhältnis zu JSON-Export/-Import
- JSON-Download bleibt sicherer Standardweg für bewusste Sicherung.
- JSON-Import-Prüfung bleibt bewusster Wiederaufnahmeweg.
- Optionaler Speicherpfad darf JSON nicht ersetzen, bevor das ausdrücklich entschieden wird.
- JSON bleibt wichtig für Portabilität, Review, Debugging und manuelle Versionierung.
- Speicherlogik darf nicht heimlich in Export-/Import-Utilities verlagert werden.

## 13. Negativ-Liste
- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Utility
- keine neue Komponente
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine API
- keine Migration
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine OpenAI-Anbindung
- keine Simulation
- keine Strategie-Implementierung
- keine Report-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 14. Quality-Gate-Hinweis
Da reine Bewertungs-/Dokumentationsphase:
- `npm test` und `npm run build` sind optional.
- In dieser Phase wurden sie nicht ausgeführt, da keine Codeänderung vorgenommen wurde.
