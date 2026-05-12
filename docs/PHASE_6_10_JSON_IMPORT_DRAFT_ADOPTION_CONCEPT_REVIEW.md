# Phase 6.10 Review · JSON-Import-Übernahme-Konzept

## Prüfkontext
- Datum: 2026-05-12
- Gegenstand:
  - `docs/JSON_IMPORT_DRAFT_ADOPTION_CONCEPT.md`
  - `README.md`
  - `ROADMAP.md`
- Ziel: Fachliche Prüfung des Konzepts zur späteren JSON-Import-Übernahme in den lokalen Draft (ohne Implementierung).

## Ergebnis
**Phase 6.10 Review fachlich bestanden.**

Es wurden **keine Blocker** festgestellt.

## Prüfpunkte und Bewertung

### 1) Bedingungen für Draft-Ersatz klar definiert
**Bewertung: Erfüllt.**

Das Konzept legt eindeutig fest:
- Übernahme nur bei gültigem Ergebnis (`ok: true` / `result.ok === true`).
- Übernahme nur nach bewusster Nutzeraktion.
- Übernahme nur nach Bestätigung.
- Keine automatische Übernahme nach Dateiauswahl.
- Keine automatische Übernahme nach erfolgreicher Prüfung.
- Keine Übernahme bei Fehlern (`ok !== true`).
- Übernahme bei Warnungen grundsätzlich möglich, Warnungen müssen sichtbar sein.

### 2) Schutz vor Datenverlust ausreichend beschrieben
**Bewertung: Erfüllt.**

Explizit gefordert sind sichtbare Hinweise:
- aktueller lokaler Draft wird ersetzt,
- Import ist keine Speicherung,
- bisheriger Draft wird nicht automatisch wiederhergestellt.

Zusätzlich ist die Empfehlung enthalten, den Warnhinweis unmittelbar vor dem Übernahme-CTA zu platzieren.

### 3) Bestätigung fachlich sinnvoll
**Bewertung: Erfüllt.**

- Bestätigung ist verpflichtend.
- Keine automatische Übernahme.
- UI-interne Bestätigung wird empfohlen.
- `window.confirm` wird explizit nicht empfohlen.
- Begründung (transparenter, barriereärmer, besser testbar) ist nachvollziehbar dokumentiert.

### 4) Verhalten des bisherigen Drafts klar beschrieben
**Bewertung: Erfüllt.**

- Bis zur Übernahme unverändert.
- Bei Übernahme Ersatz im Arbeitsspeicher.
- Kein automatisches Backup.
- Kein LocalStorage.
- Kein Server-Backup.
- Optionales Undo nur als spätere Möglichkeit, nicht verpflichtend.

### 5) Trennung von Import, Speicherung und LocalStorage
**Bewertung: Erfüllt.**

- Import = Übernahme in lokalen React-State.
- Speicherung bleibt separater, nicht umgesetzter Schritt.
- LocalStorage bleibt ausgeschlossen.
- Kein Backend/Server-Upload.
- Keine OpenAI-Anbindung.
- Keine persistente Historie.

### 6) Übernahmekette plausibel
**Bewertung: Erfüllt.**

Die definierte Kette ist konsistent und vollständig beschrieben:
Datei auswählen → JSON prüfen → gültiges Ergebnis → Status/Warnungen anzeigen → Übernahmebutton aktivieren → bewusste Bestätigung → `createDraftFromScenario` (oder gleichwertige Kopie) → `validateScenarioDraftBasics` erneut → Vorschau aktualisieren → Status „übernommen, aber nicht gespeichert“.

### 7) UI-Texte, Aktivierungslogik, Grenzen, Accessibility, Tests
**Bewertung: Erfüllt.**

Das Konzept enthält:
- konkrete UI-Texte,
- klare Aktivierungs-/Deaktivierungslogik,
- Datenschutz-/Sicherheitsgrenzen,
- Accessibility-Anforderungen (`role="status"`, `aria-live`, sichtbarer Warntext, Tastaturbedienung, keine reine Farbcodierung),
- konkrete Testperspektive für die Folgephase.

### 8) Keine Implementierung ergänzt
**Bewertung: Erfüllt.**

Im Rahmen dieser Review wurden keine Implementierungsänderungen ergänzt:
- kein Übernahmebutton implementiert,
- keine Draft-Übernahmelogik implementiert,
- keine Änderung an `HomePage.jsx`,
- keine Änderung am Draft-State,
- keine Speicherung,
- kein LocalStorage.

## Fazit
Das Konzept in Phase 6.10 ist fachlich schlüssig, konsistent zu den bisherigen Projektgrenzen und ausreichend präzise für eine spätere, kontrollierte Implementierung in Phase 6.11+.
