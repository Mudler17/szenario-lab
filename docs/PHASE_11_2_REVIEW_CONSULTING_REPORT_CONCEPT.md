# Phase 11.2 · Review des Beratungsreport-Konzepts prüfen

## Review-Ziel
Prüfung des in Phase 11.1 vorbereiteten Konzepts für einen minimalen Beratungsreport auf fachliche Klarheit, Architekturgrenzen und MVP-Tauglichkeit.

Ziel des Reviews ist die Bestätigung, dass der Report weiterhin ein neutraler Struktur-Output bleibt und keine Entscheidungsautomatisierung, keine Persistenz-/Exportkopplung und keine OpenAI-/LLM-Anbindung einführt.

## Geprüfte Dateien
- `docs/PHASE_11_1_CONSULTING_REPORT_CONCEPT.md`
- `README.md`
- `ROADMAP.md`

## Prüfergebnis Zielbild
**Ergebnis: erfüllt (mit Resthinweis zur Sprachdisziplin).**

Das Zielbild ist klar als neutraler Struktur-Output beschrieben:
- Bündelung vorhandener Draft-Inhalte,
- Sichtbarmachung von Zusammenhängen,
- Benennung von Unsicherheiten und Klärungsbedarfen,
- Unterstützung des nächsten Arbeitsdialogs.

Entscheidungsautomatisierung wird explizit ausgeschlossen (keine Empfehlung, keine Entscheidung, kein Scoring/Ranking, keine Simulation). Der Nutzen für Beratende, Leitung und Workshop-/Projektteam ist plausibel und adressiert unterschiedliche Nutzungssituationen (Moderation, Entscheidungsvorbereitung, gemeinsame Abstimmung).

**Resthinweis:** Für spätere Implementierungsphasen sollte ein kurzer Boundary-Disclaimer als Pflichtbestandteil des Reports festgelegt werden, um Scheinobjektivität zusätzlich sprachlich abzusichern.

## Prüfergebnis Datenquellen
**Ergebnis: erfüllt.**

Das Konzept nutzt ausschließlich bestehende Draft-Felder und führt keine neuen Domänenfelder ein.
Die Zuordnung ist nachvollziehbar und vollständig entlang der vorhandenen Bereiche:
- Grunddaten (Name, Beschreibung, Ziel),
- Annahmen,
- Evidenz,
- Personas,
- Ressourcen,
- Phasen,
- Beziehungen,
- Interventionen.

Die genannten ergänzenden Hinweise (fehlende Inhalte, knappe Inhalte, offene Klärungspunkte) bleiben rein deskriptiv und sind als strukturierende Sicht auf vorhandene Daten abgegrenzt.

## Prüfergebnis minimale Report-Struktur
**Ergebnis: weitgehend erfüllt, MVP-tauglich.**

Die 12-teilige Struktur ist für einen ersten Beratungsreport fachlich vollständig genug und bleibt gleichzeitig klein genug für einen MVP-Schnitt.

Positiv:
- Kernbereiche des Drafts sind vollständig abgedeckt.
- Risiken/Unsicherheiten und offene Klärungsfragen sind als eigene deskriptive Abschnitte abgegrenzt.
- „Nächste Arbeitsschritte“ sind als neutraler Arbeitsvorschlag markiert.

**Resthinweis:** Bei der späteren textlichen Ausgestaltung der „nächsten Arbeitsschritte“ müssen normative Formulierungen konsequent vermieden werden (z. B. keine Muss-/Sollte-Empfehlungssprache als versteckte Entscheidungsvorgabe).

## Prüfergebnis Beratungsgrenzen
**Ergebnis: erfüllt.**

Die Beratungsgrenzen sind konsistent und ausreichend scharf dokumentiert:
- keine automatische Empfehlung,
- kein Scoring,
- keine Rangfolge,
- keine automatische Entscheidung,
- keine Simulation,
- keine OpenAI-/LLM-Anbindung,
- keine Export-/Speicher-Kopplung.

Die Trennung zwischen strukturierendem Beratungsartefakt und Urteilsbildung ist klar eingehalten.

## Prüfergebnis kleinster Implementierungsschnitt
**Ergebnis: erfüllt, sinnvoller nächster technischer Schritt.**

Der vorgeschlagene nächste Schnitt als reine, seiteneffektfreie Utility ist architektonisch passend und risikoarm.

Empfohlener Minimalumfang für Phase 11.3 (konzeptioneller Kontraktzuschnitt):
1. Utility erzeugt ausschließlich ein Report-Draft-Objekt aus vorhandenem Szenario-Draft.
2. Keine UI-Anbindung.
3. Keine Speicherung.
4. Keine Exportintegration.
5. Keine Entscheidungs-/Empfehlungslogik.

Später testbar zu definierende Pflichtfelder und Boundaries:
- Pflicht-Top-Level-Sektionen gemäß Minimalstruktur,
- eindeutige Source-Boundary: nur Input-Draft als Datenquelle,
- Seiteneffektfreiheit (kein Mutieren des Inputs),
- keine Ergebnisfelder für Score/Ranking/Recommendation/Decision,
- Boundary-Block im Output (z. B. „strukturierend, nicht entscheidend“).

## Risiken / Resthinweise
1. **Scheinobjektivität**
   - Risiko bleibt relevant, auch bei neutraler Struktur.
   - Resthinweis: klarer Boundary-Disclaimer im Reportkopf.

2. **Verdeckte Empfehlung**
   - Besonders kritisch bei „Risiken“ und „nächsten Arbeitsschritten“.
   - Resthinweis: neutrale, beschreibende Formulierungsregeln definieren.

3. **Zu langer Report**
   - Gefahr bei ungebremster Abschnittstiefe.
   - Resthinweis: später Zeichen-/Listenleitplanken für MVP festlegen.

4. **Vermischung mit Entscheidungsnotiz**
   - Risiko in Begrifflichkeit und Erwartungsmanagement.
   - Resthinweis: klare Artefakt-Labels und Zwecktexte beibehalten.

5. **Vermischung mit Export/Speicherung**
   - Architekturgrenze aktuell klar, aber später gefährdet.
   - Resthinweis: Utility-Kontrakt explizit ohne IO-Schnittstellen halten.

6. **Zu frühe UI-Fixierung**
   - Kann Utility-Grenzen unterlaufen.
   - Resthinweis: zuerst Kontrakt/Testbarkeit, danach Darstellung.

## Quality Gate
- `npm test` → bestanden
- `npm run build` → bestanden

## Entscheidung
**Freigabe mit Resthinweisen.**

Das Konzept aus Phase 11.1 ist fachlich und architektonisch tragfähig. Es bleibt innerhalb der definierten Beratungs- und Systemgrenzen und ist als Grundlage für den nächsten konzeptionellen Zuschnitt geeignet.

## Anschlusslogik
Nächster Schritt bleibt offen und wird gesetzt auf:
**Phase 11.3: Beratungsreport-Utility-Kontrakt konzeptionell zuschneiden**

Schwerpunkt Phase 11.3:
- Pflichtfelder des Report-Draft-Objekts präzisieren,
- Neutralitäts-/Boundary-Felder verpflichtend zuschneiden,
- testbare Negativgrenzen explizit definieren,
- weiterhin ohne Implementierung.

## Negativ-Liste
Weiterhin explizit ausgeschlossen:
- keine Codeänderung,
- keine Teständerung,
- keine UI-Änderung,
- keine Report-Utility-Implementierung,
- keine Report-Komponente,
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
