# Phase 9.1 · Vergleichs- und Entscheidungslogik konzeptionell vorbereiten

## 1. Ziel der Phase
Konzeptionelle Vorbereitung der Vergleichs- und Entscheidungslogik für Phase 9.

Diese Phase definiert fachliche Vergleichsfragen, Zielkonflikte, Entscheidungsnotizen und Grenzen. Es wird nichts implementiert.

## 2. Ausgangspunkt
- Phase 9.0 hat Vergleichs- und Entscheidungslogik als erste Hauptlinie gewählt.
- Phase 8 hat Persistenz bewusst begrenzt.
- JSON-Datei-Workflow bleibt Standard.
- NoPersistence-Grundlage bleibt bestehen.
- Es gibt weiterhin keine echte Speicherung.
- Die App soll keine Entscheidung automatisieren.
- Die App soll Entscheidungsqualität erhöhen.

## 3. Leitfrage
Welche Vergleichs- und Entscheidungslogik macht Szenarien beratungsfähiger, ohne Scheinobjektivität, automatisierte Entscheidung oder vorschnelles Scoring einzuführen?

## 4. Grundprinzipien
- Die App entscheidet nicht.
- Die App empfiehlt nicht automatisch.
- Die App macht Unterschiede sichtbar.
- Die App benennt Zielkonflikte.
- Die App markiert Annahmen und Unsicherheiten.
- Die App unterstützt menschliche Entscheidungsvorbereitung.
- Analyse, Bewertung, Empfehlung und Entscheidung bleiben getrennt.
- Scoring darf höchstens unterstützende Heuristik sein, nicht Entscheidung.
- Beratungssprache muss vorsichtig und nachvollziehbar bleiben.
- Keine KI-generierte Entscheidung.
- Keine Simulation.
- Keine neue Persistenz.

## 5. Zentrale Beratungsfragen

Definiere fachliche Vergleichsfragen, die später als Grundlage dienen könnten:

### 5.1 Was unterscheidet die Szenarien?
- Welche Grundannahmen unterscheiden sich?
- Welche Personas sind anders betroffen?
- Welche Ressourcenlagen unterscheiden sich?
- Welche Interventionen unterscheiden sich?
- Welche Risiken sind unterschiedlich?
- Welche offenen Fragen unterscheiden sich?

### 5.2 Was gewinnt man mit Szenario B gegenüber Szenario A?
- mehr Klarheit?
- mehr Akzeptanz?
- geringeres Risiko?
- bessere Beteiligung?
- realistischere Ressourcenplanung?
- höhere Governance-Sicherheit?
- bessere Anschlussfähigkeit?

### 5.3 Was verliert man mit Szenario B gegenüber Szenario A?
- mehr Aufwand?
- längere Dauer?
- geringere Geschwindigkeit?
- mehr Kommunikationsbedarf?
- höhere Konfliktwahrscheinlichkeit?
- mehr Abhängigkeit von Schlüsselpersonen?
- mehr Unsicherheit?

### 5.4 Welche Annahme entscheidet zwischen Varianten?
- Welche Annahme ist kritisch?
- Welche Annahme ist unsicher?
- Welche Annahme müsste geprüft werden?
- Welche Annahme erzeugt Scheinsicherheit?
- Welche Annahme kippt die Bewertung?

### 5.5 Welche Intervention wäre in beiden Szenarien sinnvoll?
- Was ist robust über Varianten hinweg?
- Welche Maßnahme hilft unabhängig vom gewählten Weg?
- Welche Intervention reduziert Unsicherheit?
- Welche Intervention verbessert Beteiligung?
- Welche Intervention schützt vor Eskalation?

### 5.6 Welche Entscheidung ist jetzt überhaupt fällig?
- Muss jetzt eine Strategie entschieden werden?
- Oder nur ein nächster Prüfschritt?
- Ist eine Entscheidung reif?
- Welche Information fehlt?
- Welche Stakeholder müssen einbezogen werden?

## 6. Zielkonfliktlogik

Definiere Zielkonflikte als Kern der Vergleichslogik.

Mögliche Zielkonflikte:
- Geschwindigkeit vs. Beteiligung
- Akzeptanz vs. Steuerbarkeit
- Innovation vs. Governance
- Klarheit vs. Offenheit
- Aufwand vs. Qualität
- Sicherheit vs. Lernraum
- Zentralisierung vs. lokale Passung
- Standardisierung vs. Kontextsensibilität
- kurzfristige Entlastung vs. langfristige Kompetenz
- Konfliktvermeidung vs. echte Klärung

Wichtig:
Zielkonflikte sind nicht Fehler, sondern Beratungsgegenstand.

## 7. Entscheidungsqualitätslogik

Entscheidungsqualität soll nicht bedeuten: „richtige Entscheidung automatisch berechnen“.

Entscheidungsqualität bedeutet:
- relevante Unterschiede sind sichtbar
- Annahmen sind benannt
- Unsicherheiten sind markiert
- Zielkonflikte sind bekannt
- Risiken sind nicht versteckt
- Beteiligungsbedarf ist erkennbar
- nächste Prüfschritte sind klar
- Entscheidung und Empfehlung sind sprachlich getrennt

## 8. Vergleichsobjekte

Konzeptionell unterscheiden:

### Szenariovergleich
Vergleich zwischen zwei oder mehreren Szenarien.

### Variantenvergleich
Vergleich verschiedener Bearbeitungsstände oder Handlungsvarianten innerhalb eines Szenarios.

### Interventionsvergleich
Vergleich möglicher Interventionen in einem Szenario.

### Entscheidungsnotiz
Kurze strukturierte Notiz:
- Entscheidungspunkt
- Optionen
- zentrale Differenz
- Zielkonflikt
- kritische Annahme
- offene Frage
- nächster Schritt

Empfehlung:
Für erste Phase-9-Implementierungen nicht alles gleichzeitig. Zuerst Szenario-/Variantenvergleich und Entscheidungsnotiz konzeptionell priorisieren.

## 9. Datenbasis aus bestehendem Modell

Prüfen, welche bestehenden Daten später genutzt werden könnten:

- Grunddaten
- Annahmen
- Personas
- Ressourcen
- Beziehungen
- Phasen
- Interventionen
- Evidenz
- JSON-Import/-Export-Metadaten nur als Kontext, nicht als Bewertung

Wichtig:
Keine neuen Felder in Phase 9.1.
Keine Schemaänderung.
Keine Datenmigration.

## 10. Analyseebenen

Vergleich sollte später auf mehreren Ebenen möglich sein:

### 10.1 Inhaltliche Ebene
Was ist sachlich anders?

### 10.2 Soziale Ebene
Wer ist betroffen, beteiligt, skeptisch, einflussreich?

### 10.3 Ressourcenebene
Welche Mittel, Zeit, Kompetenzen oder Engpässe unterscheiden sich?

### 10.4 Risikoebene
Welche Risiken, Unsicherheiten oder Nebenwirkungen unterscheiden sich?

### 10.5 Entscheidungsreife
Ist eine Entscheidung möglich oder braucht es erst Klärung?

## 11. Sprachliche Grenzen

Definiere zulässige und unzulässige Formulierungen.

Zulässig:
- „Dieses Szenario legt nahe ...“
- „Ein relevanter Zielkonflikt ist ...“
- „Eine kritische Annahme scheint ...“
- „Vor einer Entscheidung sollte geprüft werden ...“
- „Für die Beratung ist sichtbar ...“

Nicht zulässig:
- „Die richtige Entscheidung ist ...“
- „Die App empfiehlt verbindlich ...“
- „Szenario A ist objektiv besser ...“
- „Diese Option ist risikofrei ...“
- „Die Entscheidung kann automatisiert werden ...“

## 12. Kein finales Scoring

Scoring-Grenze:
- Kein Gesamtscore als Entscheidung.
- Keine Ampel als alleinige Empfehlung.
- Keine automatische Rangfolge.
- Keine scheinobjektive Priorisierung.

Falls später Kennzahlen genutzt werden:
- nur erklärend
- immer mit Annahmenhinweis
- immer mit Zielkonflikt
- nie als Ersatz für menschliche Entscheidung

## 13. Beratungsartefakte

Mögliche spätere Ausgaben:
- Vergleichsnotiz
- Zielkonfliktliste
- Entscheidungsnotiz
- Annahmenprüfung
- offene-Fragen-Liste
- robuste Interventionen
- Entscheidungsreife-Hinweis

Noch nicht:
- fertiger Management-Report
- PDF/DOCX-Export
- automatische Empfehlung
- Simulationsergebnis

## 14. Erster möglicher Implementierungsschnitt

Nur konzeptionell, keine Umsetzung.

Möglicher späterer Minimal-Schnitt:
- reine Utility für Entscheidungsfragen oder Entscheidungsnotiz-Skelett
- keine UI
- keine automatische Bewertung
- keine Speicherung
- keine OpenAI-Anbindung
- Tests für:
  - Trennung Analyse/Bewertung/Entscheidung
  - keine automatische Empfehlung
  - leere/fehlende Daten robust behandeln
  - keine Mutation des Szenario-Drafts

Alternative:
- zuerst Reviewphase
- dann kleinsten Implementierungsschnitt zuschneiden

Empfehlung:
Nach Phase 9.1 zuerst Review:
**Phase 9.2 · Review der Vergleichs- und Entscheidungslogik prüfen**

## 15. Risiken

- Scheinobjektivität durch Bewertungslogik
- zu frühes Scoring
- Entscheidungsautomatisierung durch Sprache
- Vergleich wird zu breit
- Reportlogik schiebt sich zu früh hinein
- Phasen-/Beziehungslogik wird vorgezogen und vergrößert Scope
- UI wird zu früh gebaut
- Nutzer verwechseln Analyse mit Empfehlung

## 16. Gegenmaßnahmen

- Negativ-Liste sichtbar halten
- Review vor Implementierung
- keine Gesamtscores
- sprachliche Grenzen definieren
- Entscheidungsnotiz statt Empfehlung
- Zielkonflikte statt Ranking
- kleine Utilities vor UI
- keine OpenAI-Anbindung
- keine Persistenzänderung
- Tests gegen automatische Empfehlung später vorsehen

## 17. Offene Entscheidungen

Offen bleibt:
- ob zuerst Entscheidungsfragen oder Entscheidungsnotiz implementiert werden
- ob A/B-Vergleich oder Multi-Szenario-Vergleich priorisiert wird
- ob Vergleich vollständig regelbasiert bleibt
- ob später ein Beratungsreport anschließt
- ob Phasen-/Beziehungslogik vorher vertieft werden muss
- welche bestehenden Felder für Vergleich ausreichen
- ob zusätzliche Datenfelder nötig werden
- wie Zielkonflikte später UI-seitig dargestellt werden

## 18. Empfohlener nächster Schritt

**Phase 9.2 · Review der Vergleichs- und Entscheidungslogik prüfen**

Ziel:
- prüfen, ob die Beratungslogik fachlich tragfähig ist
- prüfen, ob die Scoring-/Empfehlungsgrenzen stark genug sind
- prüfen, ob ein kleiner Implementierungsschnitt sinnvoll vorbereitet werden kann
- weiterhin keine Implementierung

## 19. Negativ-Liste

- keine Implementierung
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Utility
- keine neue Komponente
- keine neue Fachlogik im Code
- keine Änderung an bestehenden Formularen
- keine Änderung an JSON-Export
- keine Änderung an JSON-Import
- keine Speicherung
- kein LocalStorage
- kein SessionStorage
- kein IndexedDB
- kein Backend
- keine API
- keine Datenbank
- keine Authentifizierung
- keine Accounts
- keine HomePage-Anbindung
- keine OpenAI-Anbindung
- keine Simulation
- keine Report-Implementierung
- keine Vergleichs-Implementierung
- keine Phasen-/Beziehungs-Implementierung
- keine Strategie-Implementierung
- keine automatische Bewertung
- keine Entscheidungsautomatisierung
- kein finales Scoring
- keine automatische Empfehlung
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 20. Quality-Gate-Hinweis
Da reine Konzeptphase:
- `npm test` und `npm run build` sind optional.
- Wenn nicht ausgeführt: begründen, dass keine Codeänderung vorgenommen wurde.
- Wenn ausgeführt: Ergebnis dokumentieren.
