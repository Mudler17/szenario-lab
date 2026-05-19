# Phase 11.1 · Konzept Beratungsoutput / Report vorbereiten

## Ausgangslage
Nach Phase 11.0 ist die nächste Hauptentwicklungsrichtung festgelegt: **Beratungsoutput / Report stärken**.
Der aktuelle Stand von szenario-lab liefert bereits einen editierbaren Szenario-Draft mit den zentralen Fachbereichen (Grunddaten, Annahmen, Evidenz, Personas, Ressourcen, Phasen, Beziehungen, Interventionen). Für eine beratungsfähige Nutzung fehlt jedoch noch eine neutrale, strukturierte Zusammenführung dieser Informationen.

## Ziel der Phase
Diese Phase bereitet **rein konzeptionell** vor, wie aus dem vorhandenen Szenario-Draft ein **minimaler Beratungsreport** abgeleitet werden kann.

Der Fokus liegt auf:
- Nachvollziehbarkeit,
- Strukturierung,
- Transparenz der vorhandenen Informationen,
- klaren fachlichen Grenzen (keine Automatisierung von Entscheidungen).

## Report-Zielbild
Der minimale Beratungsreport ist ein **neutraler Struktur-Output** für Entscheidungsvorbereitung und Beratungsdialog.

Er soll:
- vorhandene Draft-Inhalte geordnet bündeln,
- Zusammenhänge sichtbar machen,
- Unsicherheiten und Klärungsbedarfe benennen,
- den nächsten Arbeitsdialog erleichtern.

Er soll **nicht**:
- Entscheidungen treffen,
- Empfehlungen erzeugen,
- Scores oder Rangfolgen berechnen,
- Simulationen durchführen.

## Zielgruppen
1. **Beratende Person**
   - benötigt einen kompakten, neutralen Überblick für Moderation und Strukturierung des Gesprächs.
2. **Leitung / Entscheidungsvorbereitung**
   - benötigt eine nachvollziehbare Zusammenstellung von Ausgangslage, Annahmen, Evidenz, Risiken und offenen Fragen.
3. **Workshop- oder Projektteam**
   - benötigt ein gemeinsames Arbeitsartefakt zur Abstimmung, Priorisierung von Klärung und Planung der nächsten Schritte.

## Datenquellen aus dem bestehenden Szenario-Draft
Für den minimalen Report werden ausschließlich bereits vorhandene Felder genutzt:
- **Ausgangslage**: Szenario-Name, Beschreibung
- **Zielbild / Fragestellung**: Szenario-Ziel
- **Annahmen**
- **Evidenz**
- **Personas / Stakeholder**
- **Ressourcen**
- **Phasen**
- **Beziehungen**
- **Interventionen**

Zusätzlich können im Report aus vorhandenen Daten abgeleitete, aber rein deskriptive Hinweise aufgenommen werden, z. B.:
- Felder/Bereiche mit fehlenden Inhalten,
- sehr knappe/unspezifische Inhalte,
- erkennbare offene Klärungspunkte.

Dabei gilt: keine neue Fachlogik zur Bewertung, nur strukturierende Sicht auf vorhandene Daten.

## Minimale Report-Struktur
1. **Ausgangslage**
2. **Zielbild / Fragestellung**
3. **Annahmen**
4. **Evidenz**
5. **Personas / Stakeholder**
6. **Ressourcen**
7. **Phasen**
8. **Beziehungen**
9. **Interventionen**
10. **Risiken / Unsicherheiten** (aus Draft-Inhalten deskriptiv zusammengeführt)
11. **Offene Klärungsfragen** (aus Lücken/Widersprüchen im Draft abgeleitet, ohne Empfehlung)
12. **Nächste Arbeitsschritte** (als neutraler Arbeitsvorschlag, nicht als Entscheidungsanweisung)

## Beratungsgrenzen
Der Report bleibt strikt innerhalb der folgenden Grenzen:
- keine automatische Empfehlung,
- kein Scoring,
- keine automatische Entscheidung,
- keine Simulation,
- keine OpenAI-/LLM-Anbindung.

Der Report ist ein Beratungsartefakt zur Strukturierung, nicht zur Delegation von Urteilsbildung an das System.

## Nicht-Ziele
- keine Implementierung,
- keine Codeänderung,
- keine UI-Änderung,
- keine Teständerung,
- keine neue Report-Utility,
- keine neue Report-Komponente,
- keine Exportänderung,
- keine neue Persistenzlogik,
- kein Backend,
- keine API,
- keine Accounts,
- kein Sync,
- keine Datenbank,
- keine OpenAI-/LLM-Anbindung,
- keine neue Dependency,
- keine neue Produktfunktion.

## Risiken und Gegenmaßnahmen
1. **Risiko: Scheinobjektivität**
   - Gefahr: Der Report wirkt wie ein „objektives Urteil“.
   - Gegenmaßnahme: expliziter Boundary-Hinweis im Report („strukturierend, nicht entscheidend“).

2. **Risiko: Verdeckte Empfehlung**
   - Gefahr: Formulierungen kippen in implizite Handlungsempfehlungen.
   - Gegenmaßnahme: neutrale Sprache, Verbot normativer Wertungen, Review auf Empfehlungsbegriffe.

3. **Risiko: Zu langer Report**
   - Gefahr: sinkende Nutzbarkeit in Beratungssituationen.
   - Gegenmaßnahme: minimaler Standardschnitt, kurze Abschnittsformate, Fokus auf Relevanz.

4. **Risiko: Vermischung mit Entscheidungsnotiz**
   - Gefahr: Grenzen zwischen Report (Struktur) und Entscheidungsnotiz (Entscheidungsvorbereitung) verschwimmen.
   - Gegenmaßnahme: klare Trennung von Artefaktzweck und Labeling.

5. **Risiko: Vermischung mit Export/Speicherung**
   - Gefahr: Report-Generierung wird vorschnell mit Persistenz/Export verknüpft.
   - Gegenmaßnahme: Report zunächst als fachliche Struktur definieren, ohne Speicher-/Exportpfad.

## Kleinster späterer Implementierungsschnitt
Der kleinste sinnvolle spätere Schnitt (außerhalb dieser Phase) wäre:
- eine reine, seiteneffektfreie Utility, die aus dem bestehenden Draft ein neutrales Report-Draft-Objekt erzeugt,
- ohne UI-Integration,
- ohne Speicherung,
- ohne Export,
- ohne Empfehlung/Scoring/Entscheidung,
- mit klaren Pflichtfeldern und neutralem Boundary-Block.

Damit kann die fachliche Struktur testbar gemacht werden, bevor Darstellung oder Workflow-Fragen folgen.

## Anschlusslogik (Phase 11.2)
In Phase 11.2 soll das vorliegende Konzept geprüft werden. Schwerpunkt der Review:
- Schärfe der Grenzen (insb. keine Empfehlung/kein Scoring),
- Vollständigkeit der minimalen Report-Struktur,
- Konsistenz mit vorhandenem Draft-Modell,
- Tragfähigkeit des kleinsten Implementierungsschnitts,
- Risiken und Gegenmaßnahmen.

Erst nach erfolgreicher Review kann entschieden werden, ob ein eng begrenzter technischer Schnitt vorbereitet wird.

## Negativ-Liste
Explizit ausgeschlossen in dieser Phase und im minimalen Report-Zielbild:
- automatisches Urteil,
- Scoring,
- Ranking,
- Entscheidungsauswahl,
- Simulation,
- generative Textautomatik über OpenAI/LLM,
- neue Datenerhebung außerhalb des bestehenden Drafts,
- Kopplung an Export, Speicherung oder Sync,
- Kopplung an Backend/Accounts/Datenbank.
