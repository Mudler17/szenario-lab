# Phase 7.0 · Richtungsentscheidung nach lokaler Import-/Export-Kette

## 1. Ausgangslage nach Phase 6.12

Phase 6.12 ist abgeschlossen. Die lokale JSON-Import-/Export-Kette ist fachlich geprüft und umfasst:

- lokalen Draft bearbeiten
- JSON herunterladen
- JSON lokal prüfen
- geprüftes Szenario bewusst in den lokalen Draft übernehmen

Weiterhin nicht enthalten sind:

- App-interne Speicherung
- LocalStorage
- Server-Upload
- OpenAI-Anbindung
- Simulation
- neue Fachmodule

Damit ist die aktuelle Kette als lokaler, bewusst gesteuerter Arbeitsablauf bestätigt, aber das bearbeitbare Szenariomodell ist noch auf wenige Felder begrenzt (aktuell: Name, Beschreibung, Ziel).

## 2. Kurzbeschreibung der fünf Optionen A–E

### A) Weitere editierbare Szenariofelder
Ausbau der fachlich bearbeitbaren Modellbereiche (z. B. Annahmen, Evidenz, Personas, Ressourcen, Beziehungen, Interventionen, Strategien, Phasen), damit Szenarien nicht nur in Grunddaten, sondern strukturell bearbeitet werden können.

### B) Bessere UI-Struktur für Import/Export
Klarere Gruppierung und Führung der bestehenden Download-/Importprüfung-/Übernahme-Bereiche zur Senkung von Bedienfehlern und kognitiver Last.

### C) Temporäre Undo-Funktion nach Importübernahme
Kurzzeitige Wiederherstellung des vorherigen lokalen Drafts im Arbeitsspeicher nach bewusster Importübernahme als Sicherheitsnetz gegen versehentlichen Draft-Ersatz.

### D) Speicherentscheidung / Persistenzkonzept
Konzeptionelle Klärung eines späteren Speicherwegs (z. B. LocalStorage, dateibasiertes Arbeiten, Backend, Datenbank) inklusive technischer und fachlicher Rahmenbedingungen.

### E) Simulation als neues Modul
Start eines Simulationsmoduls als Kernfunktion der langfristigen Vision, mit Abhängigkeit von einem belastbaren und ausreichend breit bearbeitbaren Szenariomodell.

## 3. Bewertungstabelle nach den Kriterien

| Option | 1) Fachlicher Nutzen | 2) Anschlussfähigkeit | 3) Komplexitätsrisiko | 4) Testbarkeit | 5) Abhängigkeit von fehlenden Grundlagen | 6) Nutzen für spätere Simulation | 7) Empfehlung |
|---|---|---|---|---|---|---|---|
| **A – Weitere editierbare Felder** | **Sehr hoch**: Kernwert der Modellierungs-App steigt direkt | **Sehr hoch**: baut direkt auf Draft, Validierung, Import/Export auf | **Mittel bis hoch**: Formular-/Draft-Komplexität steigt | **Gut**: schrittweise per Utility/UI-Tests und JSON-Rundlauf prüfbar | **Mittel**: benötigt kein Persistenzsystem vorab | **Sehr hoch**: schafft tragfähige Simulationsbasis | **Jetzt (Hauptphase)** |
| **B – UI-Struktur Import/Export** | Mittel: bessere Bedienbarkeit, aber wenig neue Fachfähigkeit | Hoch: passt direkt auf vorhandene Import/Export-UI | Niedrig bis mittel | Gut: UI-Verhalten und Nutzerführung prüfbar | Niedrig | Mittel: indirekter Beitrag über weniger Bedienfehler | **Später / begleitend** |
| **C – Undo nach Importübernahme** | Mittel: Sicherheitsgewinn im Arbeitsfluss | Hoch: eng am bestehenden Übernahmepfad | Niedrig bis mittel: zusätzlicher temporärer Zustand | Gut: klar testbare Zustandswechsel | Niedrig | Niedrig bis mittel: eher UX-Schutz als Modellfortschritt | **Später (kleine Sicherheitsphase)** |
| **D – Persistenzkonzept** | Mittel bis hoch langfristig, kurzfristig begrenzt | Mittel: technisch anschlussfähig, fachlich noch verfrüht | Mittel: Architekturentscheidungen können verfrühen | Mittel: primär konzeptionell, weniger direkt verifizierbar im UI | **Hoch**: sinnvoll erst bei klarerem Datenumfang | Mittel: später wichtig, jetzt noch indirekt | **Später** |
| **E – Simulation als Modul** | Hoch strategisch, kurzfristig riskant | Niedrig bis mittel: Modellbasis noch zu schmal | **Hoch**: Gefahr von Übersteuerung | Mittel bis niedrig: ohne breites editierbares Modell schwer robust prüfbar | **Sehr hoch**: benötigt tragfähigeres Szenariomodell | Potenziell sehr hoch, aber erst bei besseren Grundlagen | **Zurückstellen** |

## 4. Entscheidung

**Phase 7 = Szenario-Modell fachlich weiter editierbar machen.**

Phase 7.0 legt als nächste Hauptentwicklungsrichtung den Ausbau weiterer editierbarer Szenariofelder fest (Option A).

## 5. Begründung

Vor Simulation und Persistenz braucht die App zunächst ein tragfähigeres bearbeitbares Szenariomodell.

Der aktuelle Stand erlaubt fachlich nur die Bearbeitung der Grundfelder **Name**, **Beschreibung** und **Ziel**. Für Organisationssimulationen ist das mittelfristig nicht ausreichend. Mindestens folgende Bereiche müssen schrittweise modellier- und bearbeitbar werden:

- Annahmen
- Evidenz
- Personas
- Ressourcen
- Beziehungen
- Interventionen
- Phasen

Option A liefert dafür den höchsten direkten Produktwert und verbessert zugleich die Grundlage für spätere Entscheidungen zu Persistenz und Simulation. Option B ist sinnvoll als flankierende Konsolidierung, sollte aber die fachliche Modell-Erweiterung nicht ersetzen. Option C ist als Sicherheitsfunktion wertvoll, jedoch nachrangig gegenüber dem Ausbau der fachlichen Bearbeitbarkeit. Option D ist wichtig, aber sinnvoller nach weiterer Modellschärfung. Option E bleibt strategisch relevant, wird jedoch bis zu einem breiter editierbaren Modell zurückgestellt.

## 6. Empfohlene nächste Teilphasen

- **Phase 7.1** · Nächstes editierbares Feld konzeptionell auswählen
- **Phase 7.2** · Annahmen als ersten zusätzlichen editierbaren Bereich konzeptionell vorbereiten
- **Phase 7.3** · Annahmen-Draft-State-Utility vorbereiten
- **Phase 7.4** · Annahmen-Formular minimal vorbereiten
- **Phase 7.5** · Annahmen-Vorschau und JSON-Rundlauf prüfen

## 7. Klare Grenzen von Phase 7.0

- keine Implementierung
- keine neuen Formularfelder in Phase 7.0
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine Server-Anbindung
- keine neuen Fachmodule

## Quality Gate (optional)

Da in Phase 7.0 ausschließlich Dokumentation geändert wird, sind `npm test` und `npm run build` optional und wurden in dieser Phase nicht als Pflichtkriterium ausgeführt.
