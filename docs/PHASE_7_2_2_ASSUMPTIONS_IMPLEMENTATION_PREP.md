# Phase 7.2.2 · Annahmen-Implementierung vorbereiten

## Ziel der Phase
Die Bearbeitung von Annahmen wird technisch im Draft-Kontext vorbereitet, damit Annahmen in Folgephasen kontrolliert editiert werden können.

## Ausgangspunkt aus Phase 7.2.1
Phase 7.2.1 hat das Annahmen-Konzept festgelegt (Felder `id`, `title`, `content`, `scope`, `confidence`, `rationale`) und die Einführung als reine, lokale Draft-Erweiterung ohne Persistenz abgegrenzt.

## Umgesetzte technische Vorbereitung
- Neue Draft-Utilities für Annahmen unter `src/features/scenarios/editing/state/assumptionDraftUtilities.js`:
  - `getDraftAssumptions(draft)` liest Annahmen defensiv und liefert immer eine Liste.
  - `addDraftAssumption(draft, newAssumption)` fügt eine Annahme unveränderlich hinzu.
  - `updateDraftAssumption(draft, assumptionId, updates)` aktualisiert eine einzelne Annahme per `id` unveränderlich.
  - `removeDraftAssumption(draft, assumptionId)` entfernt eine Annahme per `id` unveränderlich.
- Robuste Eingabebehandlung:
  - ungültige Drafts oder ungültige Eingaben brechen kontrolliert ab,
  - vorhandene Draft-Referenzen werden in diesen Fällen unverändert zurückgegeben,
  - Annahmenlisten werden beim Lesen und Schreiben geklont, um unbeabsichtigte Mutation zu vermeiden.
- Export über den bestehenden Editing-State-Index ergänzt, ohne neue Architekturpfade.

## Bewusste Grenzen
- Fokus ausschließlich auf Utility-Ebene im Draft-Kontext.
- Keine UI-Erweiterung und keine Formulareinbindung.
- Keine Änderung am Persistenz- oder Import/Export-Verhalten.

## Negativ-Liste: Was diese Phase NICHT tut
- keine UI-Integration
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine fachliche Neubewertung des Annahmenmodells

## Test-/Build-Ergebnis
- `npm test`: erfolgreich.
- `npm run build`: erfolgreich.

## Anschlusslogik für die nächste Phase
Phase 7.2.3 prüft die vorbereiteten Annahmen-Utilities inklusive Testabdeckung und bewertet, ob die Utility-Grenzen für eine spätere, minimale UI-Einbindung stabil und konsistent sind.
