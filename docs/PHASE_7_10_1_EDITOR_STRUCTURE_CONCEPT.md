# Phase 7.10.1 · Bearbeitungsbereich-Struktur konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung einer kleinen, robusten Strukturverbesserung des Bearbeitungsbereichs nach dem Ausbau um Interventionen.

Diese Phase bereitet nur vor und implementiert noch nichts.

## 2. Ausgangspunkt
- Die App arbeitet weiterhin mit lokalem Draft.
- Viele Entitäten sind inzwischen editierbar:
  - Grunddaten
  - Annahmen
  - Personas
  - Ressourcen
  - Phasen
  - Beziehungen
  - Interventionen
  - Evidenz
- Zusätzlich befinden sich Reset, JSON-Download und JSON-Import-Prüfung im Bearbeitungsbereich.
- Der aktuelle Aufbau ist linear.
- Das UI-Struktur-Audit empfiehlt eine kleine Strukturkonsolidierung vor weiteren Entitäten.

## 3. Problemdefinition
- Der lineare Aufbau war für frühe Phasen robust.
- Mit vielen Entitäten wird die Seite lang.
- Orientierung, Scanbarkeit und Abschnittswechsel werden schwieriger.
- Export/Import liegen weit unten.
- Weitere Entitäten würden die Überladung verstärken.
- Die Lösung soll nicht in eine große UI-Reform kippen.

## 4. Ziele der späteren Strukturverbesserung
Die spätere Umsetzung soll:
- Orientierung verbessern,
- Scrollaufwand reduzieren oder besser strukturieren,
- Bearbeitung und Werkzeuge klarer trennen,
- lokale Draft-Grenze sichtbar halten,
- bestehende Formularlogik möglichst unverändert lassen,
- Tests nicht unnötig verkomplizieren,
- a11y verbessern oder mindestens nicht verschlechtern,
- ohne globale State-Architektur auskommen,
- ohne Routing auskommen,
- keine neue Fachlogik einführen.

## 5. Nicht-Ziele
- keine neue Fachentität
- keine Simulation
- keine Speicherung
- kein Backend
- kein LocalStorage
- keine OpenAI-Anbindung
- keine neue State-Architektur
- keine Routing-Lösung
- keine Tab-Komponente als erster Schritt
- keine komplexe Accordion-Architektur
- keine Änderung an Draft-Utilities
- keine Änderung an Import-/Export-Logik
- keine Validierungslogik
- keine Datenmodelländerung

## 6. Strukturprinzipien
- Bestehende Formulare bleiben fachlich unverändert.
- Struktur wird um bestehende Formulare gelegt, nicht in jedes Formular hineingebaut.
- Navigation bleibt HTML-nah und testbar.
- Sichtbarkeit bleibt wichtiger als visuelle Kompaktheit um jeden Preis.
- Export/Import werden als Werkzeuge verstanden, nicht als Entitäten.
- Gruppierung folgt fachlicher Orientierung, nicht technischer Dateistruktur.

## 7. Empfohlenes Zielbild

### 7.1 Abschnittsnavigation / Inhaltsübersicht
Konzept:
- Oben im Bearbeitungsbereich eine einfache Inhaltsübersicht mit Sprunglinks.
- Links zu:
  - Grunddaten
  - Annahmen
  - Personas
  - Ressourcen
  - Phasen
  - Beziehungen
  - Interventionen
  - Evidenz
  - Werkzeuge: Reset, JSON-Download, JSON-Import-Prüfung

Nutzen:
- schnelle Orientierung
- geringe technische Komplexität
- a11y-freundlich bei normalen Links
- keine neue State-Architektur

Risiken:
- IDs/Anker müssen konsistent gepflegt werden
- zusätzliche Linkliste kann selbst lang werden

### 7.2 Fachliche Gruppierung
Konzept:
Bearbeitungsbereich in wenige Gruppen gliedern:

Gruppe 1: Szenario-Basis
- Grunddaten
- Annahmen
- Evidenz

Gruppe 2: Akteure und Mittel
- Personas
- Ressourcen

Gruppe 3: Verlauf und Systemstruktur
- Phasen
- Beziehungen

Gruppe 4: Handlungsoptionen
- Interventionen

Gruppe 5: Werkzeuge
- Reset
- JSON-Download
- JSON-Import-Prüfung

Nutzen:
- fachlich bessere Orientierung
- spätere Erweiterung durch Strategien oder Reports leichter einordbar
- Export/Import werden klar von Entitäten getrennt

Risiken:
- Reihenfolge verändert Wahrnehmung
- bestehende Tests können auf Reihenfolge reagieren

### 7.3 Werkzeugbereich
Konzept:
- Reset, JSON-Download und JSON-Import-Prüfung als eigener Bereich „Werkzeuge“.
- Weiterhin klarer Hinweis:
  - lokal
  - keine App-Speicherung
  - Download ≠ Speicherung
  - Importprüfung ersetzt Draft nicht automatisch

Nutzen:
- weniger Vermischung von Bearbeitung und Werkzeugfunktionen
- bessere Verständlichkeit

Risiken:
- Werkzeuge dürfen nicht aus dem Draft-Kontext herausfallen

### 7.4 Native details/summary nur als spätere Option
Konzept:
- Noch nicht als erster Umsetzungsschritt.
- Nur prüfen, falls Abschnittsnavigation und Gruppierung nicht ausreichen.
- Keine eigene Accordion-State-Architektur.

Bewertung:
- kann Länge reduzieren
- erzeugt aber zusätzliche Test- und a11y-Fragen

### 7.5 Tabs nicht als nächster Schritt
Begründung:
- Tabs erzeugen zusätzliche State- und Fokuslogik.
- Höheres a11y-Risiko.
- Versteckte Inhalte können Entdeckbarkeit reduzieren.
- Für den aktuellen Stand zu schwergewichtig.

## 8. Empfohlener Implementierungsschnitt 7.10.2
Empfehlung:
Phase 7.10.2 · Bearbeitungsbereich-Struktur minimal umsetzen

Minimaler Umfang:
- bestehende Formulare nicht fachlich ändern
- keine Formularfelder ändern
- keine Draft-Utilities ändern
- IDs/Anker für vorhandene Abschnitte ergänzen
- einfache Abschnittsnavigation im Bearbeitungsbereich ergänzen
- Gruppierungsüberschriften oder einfache Gruppen-Wrapper ergänzen
- Reset, JSON-Download und JSON-Import-Prüfung als Werkzeugbereich sichtbar bündeln
- CSS nur minimal erweitern
- Tests für neue Struktur ergänzen/anpassen
- npm test
- npm run build

## 9. Geplante Reviewphase 7.10.3
Review mit Fokus auf:
- Orientierung verbessert?
- lokale Draft-Grenze weiterhin sichtbar?
- Export/Import weiterhin klar von Speicherung getrennt?
- keine Fachlogik geändert?
- keine neue State-Architektur?
- keine a11y-Verschlechterung?
- Tests und Build grün?

## 10. Risiken
- Strukturänderung kann ungewollt wie neue Funktionalität wirken.
- Gruppierung kann bestehende fachliche Reihenfolge verändern.
- Sprunglinks können brechen, wenn IDs nicht stabil sind.
- Export/Import können als separater Bereich missverstanden werden, wenn lokale Draft-Grenze nicht klar bleibt.
- Zu viel CSS kann aus kleinem Strukturumbau eine UI-Reform machen.

## 11. Negativ-Liste
- keine Implementierung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Komponente
- keine neue Navigation implementieren
- keine Accordions implementieren
- keine Tabs implementieren
- keine Routing-Lösung
- keine neue State-Architektur
- keine neue Entität
- keine neue Utility
- keine Formularfeldänderung
- keine Draft-Utility-Änderung
- keine Import-/Export-Logikänderung
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 12. Quality-Gate-Hinweis
Da reine Konzeptphase:
- npm test und npm run build sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
