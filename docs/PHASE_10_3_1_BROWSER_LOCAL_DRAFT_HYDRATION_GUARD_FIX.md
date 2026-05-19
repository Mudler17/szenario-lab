# Phase 10.3.1 · Hydration-Guard der browserlokalen Draft-Speicherung korrigieren

## Ziel
Sicherstellen, dass beim Initialstart kein Autosave mit dem Beispiel-Draft ausgeführt wird, bevor ein ggf. vorhandener browserlokaler Draft sauber hydriert wurde.

## Problem
Beim Start konnte der Autosave-`useEffect` trotz Hydration-Guard noch im Initialzyklus mit dem Initial-Draft laufen. Dadurch bestand das Risiko, dass ein vorhandener browserlokaler Draft direkt durch den Beispiel-Draft überschrieben wird.

## Ursache
Der bisherige Guard setzte `hasHydratedRef.current` bereits im Lade-`useEffect` auf `true`. Im gleichen Initial-Effect-Zyklus konnte danach der Autosave-`useEffect` laufen und speichern.

## Änderung
- In `HomePage` wurde ein zusätzlicher Initial-Guard für Autosave ergänzt: `hasInitializedAutosaveRef`.
- Ablauf jetzt:
  1. Hydration lädt einen vorhandenen Draft (falls vorhanden) und markiert die Hydration als abgeschlossen.
  2. Der erste Autosave-Lauf nach abgeschlossener Hydration wird bewusst übersprungen.
  3. Erst spätere tatsächliche Draft-Änderungen führen zu `saveScenarioDraft`.
- Die bestehende Statusregion bleibt unverändert (`role="status"`, `aria-live="polite"`).
- Keine neue UI, keine neue Produktfunktion.

## Tests
- Bestehende Testsuite und Build wurden als Quality Gate ausgeführt.
- Ein spezifischer Mount/`localStorage`-Hydrationstest in `HomePage.test.jsx` wurde in dieser Phase **nicht** ergänzt, da die vorhandene Teststruktur aktuell nur serverseitiges Static-Markup ohne Client-Mount/Effects abdeckt.

## Quality Gate
- `npm test`
- `npm run build`

## Negativ-Liste
- Keine Mehrszenario-Verwaltung
- Kein Backend
- Keine Accounts
- Keine API
- Kein Sync
- Keine Datenbank
- Keine OpenAI-/LLM-Anbindung
- Keine neue Dependency
- Keine UI-Umstrukturierung
- Keine neue Produktfunktion

## Anschlusslogik
- Phase 10.4 bleibt als nächster Schritt bestehen: Review der nachgeschärften browserlokalen Draft-Speicherung.
- In dieser Reviewphase sollte gezielt geprüft werden, ob ein zusätzlicher komponentennaher Mount-Test für Hydration/Autosave sinnvoll und mit vertretbarem Scope ergänzt werden kann.
