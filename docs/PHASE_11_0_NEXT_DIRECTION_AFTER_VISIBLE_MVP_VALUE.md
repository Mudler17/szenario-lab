# Phase 11.0 · Nächste Entwicklungsrichtung nach sichtbarem MVP-Nutzwert festlegen

## Ausgangslage
Phase 10 ist abgeschlossen. Der aktuelle Szenario-Draft wird browserlokal gespeichert, die LocalStorage-Fehlerpfade wurden gehärtet, der Hydration-Guard wurde korrigiert und die Nachschärfung wurde geprüft. Damit ist ein sichtbarer MVP-Nutzwert etabliert: Bearbeiten, lokale Fortsetzung und robuste Grundstabilität ohne Backend.

## Ziel der Phase
Für die nächste Hauptlinie wird **genau eine** priorisierte Entwicklungsrichtung festgelegt, die den kurzfristigen fachlichen Nutzen für Organisationsberatung erhöht, ohne die Architektur zu überbauen.

## Geprüfte Optionen
1. Beratungsoutput / Report stärken
2. Entscheidungsnotiz sichtbar machen
3. Szenario-Vergleich ausbauen
4. Phasen-/Beziehungsmodell stärker simulativ machen
5. Import/Export professioneller machen
6. Speicher-/Projektstruktur erweitern

## Bewertung der Optionen

### 1) Beratungsoutput / Report stärken
- **Unmittelbarer MVP-Nutzwert:** sehr hoch (direkt nutzbares Beratungsergebnis statt nur Modellbearbeitung)
- **Anschlussfähigkeit:** hoch (nutzt vorhandene Datenstruktur, Preview-Inhalte, Entscheidungsnotiz-Vorarbeiten)
- **Technische Komplexität:** mittel (komponieren, strukturieren, darstellen; keine Vollsimulation nötig)
- **Fachlicher Nutzen:** sehr hoch (Ergebnisqualität, Kommunikation, Dokumentierbarkeit)
- **Überbauungsrisiko:** mittel bis niedrig (bei klaren Scope-Grenzen)
- **Architekturpassung:** hoch (klar als zusätzliche Präsentations-/Kompositionsschicht abgrenzbar)
- **Kleinschrittigkeit:** hoch (zuerst minimale reportfähige Struktur)

### 2) Entscheidungsnotiz sichtbar machen
- **Unmittelbarer MVP-Nutzwert:** hoch
- **Anschlussfähigkeit:** sehr hoch
- **Technische Komplexität:** niedrig bis mittel
- **Fachlicher Nutzen:** hoch, aber enger Umfang als kompletter Beratungsoutput
- **Überbauungsrisiko:** niedrig
- **Architekturpassung:** sehr hoch
- **Kleinschrittigkeit:** sehr hoch

### 3) Szenario-Vergleich ausbauen
- **Unmittelbarer MVP-Nutzwert:** mittel bis hoch
- **Anschlussfähigkeit:** mittel
- **Technische Komplexität:** mittel bis hoch
- **Fachlicher Nutzen:** hoch
- **Überbauungsrisiko:** mittel
- **Architekturpassung:** mittel
- **Kleinschrittigkeit:** mittel

### 4) Phasen-/Beziehungsmodell stärker simulativ machen
- **Unmittelbarer MVP-Nutzwert:** mittel
- **Anschlussfähigkeit:** mittel
- **Technische Komplexität:** hoch
- **Fachlicher Nutzen:** potenziell hoch, aber unsicher ohne stabile Vergleichs-/Outputebene
- **Überbauungsrisiko:** hoch
- **Architekturpassung:** derzeit nur begrenzt
- **Kleinschrittigkeit:** niedrig bis mittel

### 5) Import/Export professioneller machen
- **Unmittelbarer MVP-Nutzwert:** mittel
- **Anschlussfähigkeit:** hoch
- **Technische Komplexität:** mittel
- **Fachlicher Nutzen:** mittel (mehr Prozessqualität als Beratungsmehrwert)
- **Überbauungsrisiko:** niedrig
- **Architekturpassung:** hoch
- **Kleinschrittigkeit:** hoch

### 6) Speicher-/Projektstruktur erweitern
- **Unmittelbarer MVP-Nutzwert:** niedrig bis mittel
- **Anschlussfähigkeit:** hoch
- **Technische Komplexität:** mittel bis hoch
- **Fachlicher Nutzen:** indirekt
- **Überbauungsrisiko:** mittel
- **Architekturpassung:** hoch, aber strategisch derzeit nachrangig
- **Kleinschrittigkeit:** mittel

## Entscheidung
Als nächste Hauptentwicklungsrichtung wird ausgewählt:

## **1) Beratungsoutput / Report stärken**

## Begründung
- Nach dem sichtbaren MVP-Nutzwert (editieren + lokal fortsetzen) ist der größte nächste Mehrwert ein **kommunizierbares Ergebnisartefakt** für Beratungskontexte.
- Die vorhandenen Bausteine (strukturierte Szenariodaten, Vergleichs-/Entscheidungslogik-Vorarbeiten, Entscheidungsnotiz-Linie) können in einen klaren Outputpfad integriert werden, ohne sofort Simulation oder Backend zu öffnen.
- Diese Linie liefert früh sichtbaren Nutzen für Stakeholder-Kommunikation, Entscheidungswerkstätten und Dokumentation.
- Gleichzeitig bleibt die Umsetzung kontrollierbar, wenn der Scope initial als „minimaler, neutraler Beratungsreport“ begrenzt wird.

## Nicht gewählte Optionen (als spätere Optionen)
- **Option 2 (Entscheidungsnotiz sichtbar machen):** bleibt hoher Kandidat und kann als Teilbaustein in die Reportlinie einfließen.
- **Option 3 (Szenario-Vergleich ausbauen):** sinnvoll nach erstem stabilen Output-Format, damit zusätzliche Vergleichstiefe direkt im Report nutzbar wird.
- **Option 4 (stärker simulativ):** bewusst später, da aktuell hohes Komplexitäts- und Überbauungsrisiko.
- **Option 5 (Import/Export professioneller):** weiterhin relevant für Prozessreife, aber nicht der stärkste unmittelbare Beratungsmehrwert.
- **Option 6 (Speicher-/Projektstruktur):** strategisch wichtig, jedoch nachrangig gegenüber sichtbarem fachlichem Output.

## Risiken
- Scope-Drift in Richtung „automatische Empfehlung“ oder implizites Scoring.
- Zu frühe Formatfixierung ohne klare Beratungsgrenzen.
- Vermischung von Output-Logik mit Speicher-/Synchronisationslogik.

## Anschlusslogik
Nächster Schritt ist eine **reine Konzeptphase 11.1**, die die gewählte Linie operationalisiert:
- Zielbild eines minimalen Beratungsreports
- klare Boundaries (neutral, nicht-automatisierend, ohne Backend)
- kleinster sinnvoller Umsetzungszuschnitt für spätere Implementierung

## Negativ-Liste
- keine Codeänderung
- keine UI-Änderung
- keine Teständerung
- keine neue Persistenzlogik
- kein Backend
- keine API
- keine Accounts
- kein Sync
- keine Datenbank
- keine OpenAI-/LLM-Anbindung
- keine neue Dependency
- keine neue Produktfunktion
