# Phase 7.2.2 Review · Annahmen-Implementierung prüfen

## Review-Ziel
Prüfung, ob die in Phase 7.2.2 eingeführten Annahmen-Utilities ausschließlich als robuste, unveränderliche Draft-Funktionen umgesetzt wurden und ohne versteckte Nebenlogik (UI, Speicherung, Import/Export-Ausbau, Simulation) auskommen.

## Geprüfte Dateien
- `src/features/scenarios/editing/state/assumptionDraftUtilities.js`
- `src/features/scenarios/editing/state/assumptionDraftUtilities.test.js`
- `src/features/scenarios/editing/state/index.js`
- `docs/PHASE_7_2_2_ASSUMPTIONS_IMPLEMENTATION_PREP.md`

## Ergebnis zur Utility-Reinheit
- Die vier Utilities (`getDraftAssumptions`, `addDraftAssumption`, `updateDraftAssumption`, `removeDraftAssumption`) operieren ausschließlich auf dem übergebenen Draft-Objekt.
- Keine UI-Aufrufe, keine Persistenz, keine Fremdmodule mit Side-Effects.
- Der Export über den bestehenden State-Index bleibt konsistent und ohne Architekturverzweigung.

## Ergebnis zur Nicht-Mutation
- Alle Pfade arbeiten mit Kopien (`...draft`, geklonte Annahmenliste, Objektkopien je Eintrag).
- Bestehende Tests prüfen bereits, dass Eingabe-Drafts in Add/Update/Remove unverändert bleiben.
- Bewertung: Nicht-Mutation erfüllt.

## Ergebnis zur Fehlerrobustheit
- Bei ungültigem Draft oder ungültigen Eingaben wird defensiv reagiert (früher Return des Original-Drafts bzw. leere Liste beim Read).
- Für nicht auffindbare IDs in Update/Remove bleibt der Draft unverändert.
- Bewertung: robustes Defensivverhalten für Utility-Kontext gegeben.

## Bewertung des `{}`-Verhaltens bei ungültigen Annahmen
### Befund
- Bisher wurden ungültige Annahmeneinträge in `cloneAssumptions` zu `{}` normalisiert.

### Risiko
- Für spätere UI-Anbindung erzeugt das „leere“ Phantom-Einträge ohne fachliche Felder/ID.
- Folgeeffekte: unnötige Renderfälle, potenziell inkonsistente Bearbeitung/Validierung.

### Entscheidung
- Minimal korrigiert: Ungültige Einträge werden nun herausgefiltert statt zu `{}` normalisiert.
- Das ist fachlich sinnvoller, da nur tatsächlich objektförmige Annahmen weitergereicht werden.
- Keine Erweiterung des Datenmodells, nur Robustheitskorrektur im bestehenden Utility.

## Testbewertung
- Bestehende Tests decken Kernpfade (Read/Add/Update/Remove, Nicht-Mutation, defensive Eingaben) bereits gut ab.
- Testlücke zum Spezialfall „ungültige Einträge in assumptions-Liste“ wurde geschlossen.
- Neuer Test prüft gezielt, dass ungültige Listeneinträge herausgefiltert werden.

## Negativ-Liste: Was im Review NICHT gemacht wurde
- keine UI-Integration
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine fachliche Erweiterung des Annahmenmodells
- keine größere Refaktorierung

## Quality-Gate-Ergebnis
- `npm test`: bestanden
- `npm run build`: bestanden

## Entscheidung
**Phase 7.2.2 freigegeben.**

## Anschlusslogik für Phase 7.2.3
- Auf Basis der nun gefilterten Annahmenliste kann Phase 7.2.3 die minimale UI-Anbindung planen, ohne Sonderbehandlung für künstliche `{}`-Phantomobjekte.
- Empfehlung: In 7.2.3 zusätzlich prüfen, ob UI-seitige Validierungs-/Fehlermeldungslogik klar zwischen „keine Annahmen“ und „inhaltlich unvollständige Annahme“ trennt.
