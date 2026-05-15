# Phase 9.5 · Entscheidungsnotiz-Utility-Kontrakt konzeptionell präzisieren

## 1. Ziel der Phase
Konzeptionelle Präzisierung des Utility-Kontrakts für eine spätere Entscheidungsnotiz.

Diese Phase bereitet eine spätere minimale Utility-Implementierung vor, ohne sie umzusetzen.

## 2. Ausgangspunkt
- Phase 9.3 hat den kleinsten Implementierungsschnitt für eine Entscheidungsnotiz konzeptionell zugeschnitten.
- Phase 9.4 hat diesen Schnitt freigegeben mit Hinweisen.
- Vor Implementierung müssen Funktionsname, Modulpfad, Rückgabeobjekt, Datenzugriffe, Fallbacks, Sprachgrenzen und Tests präzisiert werden.
- Die Entscheidungsnotiz bleibt Entscheidungsvorbereitung, nicht Entscheidung.

## 3. Leitfrage
Wie muss der Utility-Kontrakt aussehen, damit eine spätere Entscheidungsnotiz strukturiert, testbar und nicht-automatisierend bleibt?

## 4. Entscheidung: Funktionsname
Finaler Arbeitstitel für spätere Utility:

```text
createDecisionNoteDraft(scenarioDraft, options = {})
```

Begründung:
- `create` signalisiert Erzeugung eines Entwurfs, keine Entscheidung.
- `DecisionNote` beschreibt das Artefakt fachlich klar.
- `Draft` hält den vorläufigen, nicht-finalen Charakter sichtbar.
- `scenarioDraft` macht deutlich, dass nur der aktuelle lokale Entwurfsstand verarbeitet wird.
- `options` bleibt optional für rein technische Steueroptionen (z. B. Debug-/Strict-Modus), ohne Fachautomatisierung.

## 5. Empfehlung: Modulpfad (spätere Implementierung)
Empfohlener Modulpfad für eine spätere, minimale Implementierung:

```text
src/features/scenarios/consulting/decisionNote/createDecisionNoteDraft.js
```

Empfohlener Export (später):
- Named export `createDecisionNoteDraft`
- Re-Export über ein lokales `index.js` im `decisionNote`-Ordner

Scope-Hinweis:
- In Phase 9.5 wird dieser Pfad nur festgelegt, nicht angelegt.

## 6. Kontrakt: Rückgabeobjekt (fachliches Mindestformat)
Die spätere Utility soll immer ein Objekt mit stabilen Feldern zurückgeben:

```text
{
  decisionPoint: string,
  options: string[],
  centralDifferences: string[],
  targetConflicts: string[],
  criticalAssumptions: string[],
  openQuestions: string[],
  nextClarificationStep: string,
  boundaries: string[]
}
```

Verbindliche Regeln:
- Alle Felder sind Pflichtfelder (kein Feld darf fehlen).
- String-Felder enthalten niemals `null`/`undefined`.
- Array-Felder enthalten niemals `null`/`undefined`, sondern mindestens ein defensives Placeholder-Element bei fehlender Datenlage.
- `boundaries` ist verpflichtend und darf nie leer sein.
- Das Objekt beschreibt einen Klärungsstand, keine Entscheidung, keine Empfehlung.

## 7. Erlaubte Datenzugriffe (spätere Utility)
Erlaubt ist ausschließlich lesender Zugriff auf bereits vorhandene Daten innerhalb von `scenarioDraft`.

Erlaubte Datenbereiche:
- Szenario-Grunddaten (z. B. Name, Beschreibung, Ziel)
- Annahmen
- Evidenz
- Personas
- Ressourcen
- Phasen
- Beziehungen
- Interventionen

Nicht erlaubt:
- Zugriff auf Browser-Speicher (`localStorage`, `sessionStorage`, `indexedDB`)
- Netzwerkzugriffe, Backend, API
- OpenAI-/LLM-Zugriffe
- Zugriff auf Import-/Export-Pipelines zur Ableitung zusätzlicher Inhalte
- Schreiben/Mutieren am `scenarioDraft`-Input
- Lesen aus anderen Szenarien als dem übergebenen `scenarioDraft`

## 8. Fallback-Logik bei fehlenden Daten
Wenn Daten fehlen, bleibt die Utility defensiv und transparent.

Pflichtprinzipien:
- Kein Fehlerwurf allein wegen unvollständiger Fachdaten.
- Fehlende Inhalte werden als Klärungsbedarf markiert, nicht automatisch ergänzt.
- Keine erfundenen Fakten, keine implizite Priorisierung.

Konkrete Fallback-Regeln:
- Fehlender/leer wirkender Entscheidungspunkt → `decisionPoint` erhält neutralen Hinweis auf offenen Klärungsbedarf.
- Keine klar benennbaren Optionen → `options` enthält einen neutralen Placeholder (z. B. „Optionen aus dem aktuellen Entwurfsstand gemeinsam klären“).
- Keine belastbaren Unterschiede/Zielkonflikte/Annahmen → jeweilige Arrays erhalten neutrale Placeholder.
- Fehlende offene Fragen → `openQuestions` enthält mindestens eine neutrale Klärungsfrage.
- `nextClarificationStep` bleibt immer ein vorsichtiger Klärungsschritt, niemals Handlungsanweisung zur Entscheidung.
- `boundaries` enthält immer mindestens eine explizite Schutzgrenze (z. B. „Keine Empfehlung, keine automatische Entscheidung“).

## 9. Sprachliche Schutzgrenzen
Die spätere Utility muss sprachlich neutral, klärungsorientiert und nicht-direktiv bleiben.

Positivkriterien (erlaubte Sprachrichtung):
- „prüfen“, „klären“, „sichtbar machen“, „offen“
- vorsichtige Formulierungen mit Vorläufigkeitscharakter
- Fokus auf Transparenz von Unsicherheit

Negativkatalog (verbotene Formulierungen als Testanforderung):
- „optimal“
- „alternativlos“
- „muss“ (im Sinne zwingender Entscheidungsanweisung)
- „richtig“ (im Sinne finaler Entscheidungswertung)
- „empfohlen“
- „beste Option“
- „risikofrei“
- Formulierungen wie „jetzt entscheiden“, „sofort umsetzen“, „klar überlegen“

Spezifische Grenze für `nextClarificationStep`:
- Nur Klärungsaufforderung, keine Umsetzungs- oder Entscheidungsaufforderung.
- Muss sprachlich als nächster Prüf-/Klärungsschritt formuliert sein.

Spezifische Grenze für `boundaries`:
- Feld ist verpflichtend.
- Muss mindestens eine explizite Anti-Automatisierungsgrenze enthalten.
- Darf keine Empfehlungssprache enthalten.

## 10. Testanforderungen für spätere Implementierung
Die spätere Implementierung muss mindestens folgende Tests erfüllen:

1. **Strukturtest Rückgabeobjekt**
   - Alle Pflichtfelder vorhanden.
   - Korrekte Datentypen (`string`/`string[]`).

2. **Fallback-Tests bei fehlenden Daten**
   - Leerer/teilweiser `scenarioDraft` liefert stabiles Objekt.
   - `boundaries` bleibt vorhanden und nicht leer.
   - `nextClarificationStep` bleibt gesetzt und neutral.

3. **Immutability-Test**
   - Input `scenarioDraft` wird nicht mutiert.

4. **Negativtests auf verbotene Sprache**
   - Output enthält keine Begriffe aus dem Negativkatalog.

5. **Tests auf Nicht-Automatisierung**
   - Kein Score-Feld, keine Ranking-Felder, keine Empfehlungsfelder.
   - Keine Formulierung, die Entscheidung als abgeschlossen darstellt.

6. **Seiteneffekt-Negativtests**
   - Kein `localStorage`-/`sessionStorage`-/`indexedDB`-Zugriff.
   - Kein Netzwerkzugriff (`fetch`, `XMLHttpRequest`, API-Clients).
   - Keine Import-/Export-/Persistenzaufrufe.

7. **Single-Scenario-Grenze**
   - Utility verarbeitet nur das übergebene `scenarioDraft`.
   - Keine Multi-Szenario-Vergleichslogik im Minimal-Schnitt.

## 11. Abgrenzung (was diese Phase ausdrücklich nicht macht)
- Keine Implementierung der Utility.
- Keine Codeänderung außerhalb dieser Konzeptdokumentation.
- Keine UI-/CSS-/Formularänderung.
- Keine Testdateiänderung.
- Keine Import-/Export-/Persistenzänderung.
- Keine Entscheidung, Empfehlung, Priorisierung oder Automatisierung.

## 12. Ergebnis der Phase 9.5
Der Utility-Kontrakt für die spätere Entscheidungsnotiz ist konzeptionell präzisiert.

Damit ist die Grundlage geschaffen, in einer Folgephase eine minimale, testbare und sprachlich defensiv begrenzte Utility umzusetzen, ohne den Zielpfad der menschlichen Entscheidungssouveränität zu verlassen.
