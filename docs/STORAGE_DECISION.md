# Speicherentscheidung · Konzeptvorbereitung

## 1. Zweck

Dieses Dokument bereitet die spätere Speicherentscheidung für `szenario-lab` vor.

Es wird noch keine Speicherung implementiert.

Ziel ist, vor der technischen Umsetzung zu klären:

- Was ist das Original?
- Was ist ein Draft?
- Was ist ein gespeicherter Zustand?
- Was bedeutet Reset nach Speicherung?
- Soll automatisch oder manuell gespeichert werden?
- Ist LocalStorage der richtige nächste Schritt?
- Wie bleibt die App kontrolliert und nachvollziehbar?

## 2. Ausgangspunkt

Die App besitzt aktuell eine lokale Szenario-Bearbeitung für drei Grundfelder:

- `name`
- `description`
- `goal`

Vorhanden sind:

- lokaler Draft im Arbeitsspeicher
- Reset auf Originalzustand
- direkte Vorschau
- minimale lokale Validierung
- Tests für Draft-State-Utilities
- Quality Gate mit `npm test` und `npm run build`

Bewusst noch nicht vorhanden:

- Speicherung
- LocalStorage
- Datenbank
- Backend
- Versionierung
- Szenarioverwaltung
- automatische Wiederherstellung
- Export/Import
- Mehrbenutzerfähigkeit

## 3. Zentrale Begriffe

### Original

Das Original ist der Ausgangszustand, aus dem der lokale Draft erzeugt wird.

Aktuell ist das Original:

- `exampleScenario`
- statisch im Code vorhanden
- nicht durch Nutzer speicherbar
- Referenzpunkt für Reset

### Draft

Der Draft ist die lokale Arbeitskopie des Originals.

Aktuell gilt:

- Draft liegt nur im Arbeitsspeicher
- Draft kann bearbeitet werden
- Draft steuert die Vorschau
- Draft geht beim Neuladen der Seite verloren
- Draft ist noch kein gespeicherter Zustand

### Gespeicherter Zustand

Ein gespeicherter Zustand wäre ein bewusst abgelegtes Szenario.

Er ist aktuell noch nicht vorhanden.

Später muss geklärt werden:

- Ist der gespeicherte Zustand ein neues Original?
- Kann ein gespeicherter Zustand wieder bearbeitet werden?
- Gibt es nur einen gespeicherten Stand oder mehrere Versionen?
- Gibt es einen Unterschied zwischen Speichern und Exportieren?

### Reset

Reset bedeutet aktuell:

- Draft wird aus dem statischen Original neu erzeugt.
- Alle lokalen Änderungen werden verworfen.
- Es gibt keine gespeicherten Zwischenstände.

Nach Einführung von Speicherung muss entschieden werden:

- Reset auf ursprüngliches Beispielszenario?
- Reset auf zuletzt gespeicherten Zustand?
- Reset auf zuletzt geladenen Zustand?
- Reset nur für ungespeicherte Änderungen?

## 4. Speicheroptionen

### Option A · Noch keine Speicherung

Beschreibung:
Die App bleibt zunächst bewusst im Arbeitsspeicher.

Vorteile:

- sehr geringe Komplexität
- keine Persistenzfehler
- keine Datenschutzfragen
- keine Verwechslung zwischen Draft und gespeichertem Zustand
- Entwicklung bleibt kontrolliert

Nachteile:

- Änderungen gehen beim Neuladen verloren
- geringer praktischer Nutzwert für längeres Arbeiten
- Nutzer müssen Inhalte ggf. manuell sichern

Bewertung:
Gut, wenn zuerst weitere Tests, Validierung oder UI-Struktur folgen sollen.

### Option B · Manueller JSON-Export

Beschreibung:
Nutzer können den aktuellen Draft als JSON-Datei herunterladen.

Vorteile:

- transparente Speicherung
- Nutzer kontrollieren Datei selbst
- kein LocalStorage nötig
- keine automatische Datenhaltung im Browser
- gut für frühe Entwicklungsphase
- Reimport später möglich

Nachteile:

- weniger komfortabel
- Nutzer müssen Dateien selbst verwalten
- Importlogik wäre später nötig
- keine automatische Wiederherstellung

Bewertung:
Sehr geeigneter nächster Speicherschritt, weil er kontrolliert und nachvollziehbar ist.

### Option C · LocalStorage mit manuellem Speichern

Beschreibung:
Nutzer klicken bewusst auf „Speichern“. Der aktuelle Draft wird im Browser gespeichert.

Vorteile:

- komfortabler als JSON-Export
- Arbeitsstand bleibt nach Neuladen erhalten
- technisch überschaubar
- kein Backend nötig

Nachteile:

- browser- und gerätegebunden
- Speicherzustand kann für Nutzer unsichtbar bleiben
- Reset-Logik wird komplexer
- Gefahr von Verwechslung zwischen Original, Draft und gespeichertem Stand
- LocalStorage ist kein professionelles Datenmanagement

Bewertung:
Sinnvoll, aber erst nach genauer Reset- und Lade-Logik.

### Option D · LocalStorage mit Autosave

Beschreibung:
Jede Änderung wird automatisch im Browser gespeichert.

Vorteile:

- sehr komfortabel
- kaum Datenverlust
- moderne Nutzererwartung

Nachteile:

- schwerer zu erklären
- Reset wird heikel
- fehlerhafte Eingaben werden sofort gespeichert
- Validierungslogik wird wichtiger
- Nutzer verlieren eventuell den Unterschied zwischen Entwurf und gespeichertem Stand

Bewertung:
Für diese frühe Phase nicht empfohlen.

### Option E · Backend/Datenbank

Beschreibung:
Szenarien werden serverseitig gespeichert.

Vorteile:

- professionelle Speicherlogik möglich
- spätere Mehrbenutzerfähigkeit
- Versionierung möglich
- Projektstruktur möglich
- langfristig tragfähig

Nachteile:

- deutlich höhere Komplexität
- Authentifizierung nötig
- Datenschutz und Rechtekonzept nötig
- Deployment komplexer
- nicht passend für den aktuellen frühen Stand

Bewertung:
Langfristig relevant, aber aktuell zu früh.

## 5. Empfohlene Entscheidung

Für den nächsten konkreten Speicherschritt wird empfohlen:

Option B · Manueller JSON-Export

Begründung:

Der manuelle JSON-Export passt am besten zum aktuellen Entwicklungsstand.

Er ist:

- kontrolliert
- transparent
- ohne automatische Persistenz
- ohne Backend
- ohne LocalStorage
- gut testbar
- gut rückbaubar
- anschlussfähig an späteren JSON-Import

Er vermeidet die wichtigsten Risiken von LocalStorage:

- unklare automatische Speicherung
- unklare Reset-Bedeutung
- versteckte Datenhaltung im Browser
- Verwechslung zwischen Draft und gespeichertem Zustand

## 6. Noch nicht empfohlene Entscheidung

Nicht empfohlen als nächster Schritt:

### LocalStorage

LocalStorage sollte noch nicht direkt umgesetzt werden.

Vorher müssen geklärt werden:

- Wird manuell oder automatisch gespeichert?
- Was passiert bei ungültigem Draft?
- Was macht Reset?
- Was ist der Unterschied zwischen gespeicherten und ungespeicherten Änderungen?
- Gibt es eine Ladefunktion?
- Wie wird Nutzerinnen und Nutzern sichtbar gemacht, was gespeichert ist?

### Backend/Datenbank

Backend oder Datenbank sind aktuell zu früh.

Vorher braucht es:

- stabileres Domänenmodell
- Export/Import-Logik
- Speichersemantik
- Tests
- Datenschutzkonzept
- Rollen-/Rechtekonzept

## 7. Konsequenzen für Phase 5.4

Wenn der Empfehlung gefolgt wird, wäre der nächste Schritt:

Phase 5.4 · JSON-Export konzeptionell vorbereiten

Noch nicht direkt implementieren.

Zuerst klären:

- Welche Felder gehören in den Export?
- Wird der Draft exportiert oder ein bereinigtes Szenario?
- Soll Validierung vor Export blockieren oder nur warnen?
- Wie soll die Datei heißen?
- Welche Version bekommt das Exportformat?
- Wie wird später Reimport vorbereitet?

## 8. Qualitätsgrenze

Auch für spätere Speicher- oder Export-Schritte gilt ab Phase 5.2:

Vor Abschluss müssen erfolgreich laufen:

```bash
npm test
npm run build
```
