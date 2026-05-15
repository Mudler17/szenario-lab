# Phase 8.1 · Persistenzentscheidung konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung der Persistenzentscheidung. Diese Phase klärt, welche Speicheroptionen für szenario-lab grundsätzlich in Betracht kommen, welche ausgeschlossen bleiben, welche Risiken bestehen und nach welchen Kriterien in einer Folgephase entschieden werden soll.

Diese Phase implementiert noch keine Speicherung.

## 2. Ausgangspunkt
- Phase 7 ist abgeschlossen.
- Phase 8.0 hat Persistenzentscheidung und Speicherarchitektur als nächste Hauptphase festgelegt.
- Die App arbeitet aktuell mit lokalem React-Draft-State.
- JSON-Download ist vorhanden.
- JSON-Import-Prüfung mit bewusster Übernahme in den lokalen Draft ist vorhanden.
- Es gibt keine App-Speicherung.
- Es gibt kein LocalStorage.
- Es gibt kein Backend.
- Es gibt keine Datenbank.
- Es gibt keine Accounts.
- Es gibt keine Authentifizierung.
- Es gibt keine Simulation.
- Es gibt keine OpenAI-Anbindung.

## 3. Leitfrage
Soll szenario-lab künftig Szenarien speichern können – und falls ja: was, wo, wie lange, unter welcher Nutzerkontrolle und mit welchen Grenzen?

## 4. Grundannahmen
- Szenarien können künftig komplexe Organisationsinformationen enthalten.
- Szenarien können vertrauliche oder personenbezogene Informationen enthalten.
- Speicherung ist deshalb nicht nur eine technische Komfortfunktion.
- Speicherung verändert das Nutzungsmodell der App.
- Speicherung muss von JSON-Download und JSON-Import unterschieden bleiben.
- Speicherentscheidungen müssen Datenschutz, Datenminimierung und Nutzererwartungen berücksichtigen.

## 5. Speicheroptionen

### Option A: Weiterhin keine App-Speicherung, nur Datei-Workflow
Beschreibung:
- Szenarien bleiben im lokalen Draft.
- Nutzer sichern Szenarien über JSON-Download.
- Nutzer können Szenarien über JSON-Import-Prüfung wieder aufnehmen.

Nutzen:
- geringste technische und datenschutzbezogene Komplexität
- hohe Nutzerkontrolle
- keine verdeckte Persistenz
- kein Backend nötig
- keine Accounts nötig

Risiken:
- Nutzer können Entwürfe verlieren
- Wiederaufnahme hängt vom Dateimanagement ab
- weniger komfortabel
- Versionierung bleibt manuell

Bewertung:
- sicherster Minimalpfad
- aber begrenzter Bedienkomfort

### Option B: Browser-Speicherung, z. B. LocalStorage
Beschreibung:
- Szenarien werden im Browser gespeichert.

Nutzen:
- schnelle Wiederaufnahme
- einfache technische Umsetzung
- kein Backend nötig

Risiken:
- Datenschutzrisiko bei sensiblen Szenarien
- Nutzer können Speicherung unterschätzen
- Daten bleiben auf gemeinsam genutzten Geräten erhalten
- Speicherort ist für viele Nutzer intransparent
- schwer sauber zu versionieren
- kann gegen bisherige Nicht-Speicherungslogik wirken

Bewertung:
- nicht vorschnell einführen
- nur mit sehr klaren Warnungen, Einwilligung und Löschlogik denkbar
- aktuell eher kritisch

### Option C: SessionStorage / temporäre Browser-Speicherung
Beschreibung:
- Szenario bleibt nur für eine Browser-Sitzung erhalten.

Nutzen:
- etwas mehr Resilienz bei Navigation innerhalb der Sitzung
- weniger dauerhaft als LocalStorage
- kein Backend nötig

Risiken:
- Nutzer verstehen Dauer/Grenzen oft nicht
- keine zuverlässige Wiederaufnahme
- weiterhin Browser-Persistenz
- kann Scheinsicherheit erzeugen

Bewertung:
- als Hauptpfad wahrscheinlich schwach
- höchstens später als Schutzmechanismus gegen versehentliches Verlieren prüfen

### Option D: IndexedDB / komplexere lokale Browser-Speicherung
Beschreibung:
- Szenarien werden lokal im Browser in einer strukturierten Datenbank gespeichert.

Nutzen:
- mehr Kapazität
- strukturierte lokale Datenhaltung
- Offline-Fähigkeit

Risiken:
- hohe Komplexität
- schlechte Transparenz für Nutzer
- Datenschutz- und Löschkonzept erforderlich
- für aktuellen Reifegrad vermutlich zu schwergewichtig

Bewertung:
- derzeit nicht priorisieren

### Option E: Backend-Speicherung
Beschreibung:
- Szenarien werden serverseitig gespeichert.

Nutzen:
- echte Wiederaufnahme über Geräte hinweg
- zentrale Versionierung möglich
- Grundlage für spätere Zusammenarbeit, Reports, Freigaben

Risiken:
- Datenschutz, Rollen, Rechte, Authentifizierung
- Betriebsverantwortung
- Datenbank- und API-Komplexität
- Sicherheitsanforderungen
- deutlich größere Architekturphase

Bewertung:
- langfristig relevant
- nicht als direkte nächste Implementierung
- zuerst nur konzeptionell als Zielbild prüfen

### Option F: Hybrid: Datei-Workflow plus bewusst aktivierte Speicherung
Beschreibung:
- JSON-Datei-Workflow bleibt Standard.
- Speicherung wird später optional und explizit aktivierbar.

Nutzen:
- bewahrt Nutzerkontrolle
- erlaubt schrittweisen Ausbau
- verhindert verdeckte Speicherung
- anschlussfähig an spätere Backend- oder lokale Speicheroptionen

Risiken:
- mehr UX-Komplexität
- klare Begriffe und Hinweise nötig
- zwei Arbeitsmodi können verwirren

Bewertung:
- fachlich vielversprechend
- nur nach genauer Konzeption

## 6. Entscheidungskriterien für Phase 8.2
Die Folgephase soll Optionen anhand dieser Kriterien bewerten:

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

## 7. Vorläufige Präferenz
Empfohlene vorläufige Präferenz:
- Datei-Workflow bleibt zunächst der sichere Standard.
- Keine automatische Speicherung.
- Keine verdeckte Browser-Speicherung.
- Keine Backend-Speicherung ohne eigene Architekturphase.
- In Phase 8.2 soll geprüft werden, ob ein bewusst aktivierbarer Speicherpfad sinnvoll ist.
- LocalStorage darf nicht als schneller Standardweg gesetzt werden.

## 8. Harte Ausschlüsse für die nächste Phase
Für Phase 8.2 weiterhin ausschließen:
- keine Speicherimplementierung
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
- keine neue UI
- keine Simulation
- keine OpenAI-Anbindung

## 9. Datenschutz- und Datenminimierungsfragen
Zu klären:
- Welche Szenariodaten können personenbezogen sein?
- Welche Organisationsinformationen könnten vertraulich sein?
- Welche Daten dürfen überhaupt gespeichert werden?
- Braucht es Warnhinweise vor Speicherung?
- Braucht es Löschlogik?
- Braucht es Export-/Import-Transparenz?
- Braucht es Versionierungsregeln?
- Braucht es Rollen/Rechte, falls Backend später denkbar wird?
- Wie wird verhindert, dass sensible Daten unbewusst dauerhaft im Browser verbleiben?

## 10. Verhältnis zu JSON-Export und JSON-Import
Festhalten:
- JSON-Download ist aktuell der bewusste Sicherungsweg.
- JSON-Import-Prüfung ist aktuell der bewusste Wiederaufnahmeweg.
- Eine spätere App-Speicherung darf JSON nicht ersetzen, ohne bewusst entschieden zu werden.
- JSON bleibt wichtig für Portabilität, Review und Debugging.
- Speicherlogik darf nicht heimlich in Import-/Export-Utilities wandern.

## 11. Risiken bei falscher Persistenzentscheidung
- verdeckte Speicherung sensibler Daten
- falsche Nutzererwartung „ist gespeichert“
- Datenverlust durch unklare Arbeitslogik
- Datenschutzprobleme bei gemeinsam genutzten Geräten
- technische Verhärtung einer schnellen LocalStorage-Lösung
- spätere Migration wird schwerer
- Persistenz wird mit Versionierung, Teilen, Kollaboration, Backend oder KI vermischt

## 12. Empfohlener nächster Schnitt
Phase 8.2 · Speicheroptionen bewerten und Zielpfad auswählen

Ziel von 8.2:
- Optionen A–F anhand der Entscheidungskriterien bewerten
- Zielpfad auswählen:
  - kein Speicherpfad, Datei-Workflow bleibt Standard
  - oder bewusst aktivierbarer lokaler Speicherpfad
  - oder Backend-Zielbild nur konzeptionell
  - oder Hybridpfad
- keine Implementierung

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
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
