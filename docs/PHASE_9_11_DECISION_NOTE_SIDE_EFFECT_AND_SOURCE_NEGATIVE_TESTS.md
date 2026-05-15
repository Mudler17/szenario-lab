# Phase 9.11 · Entscheidungsnotiz-Seiteneffekt- und Quelltexttests ergänzen

## Ziel
Ergänzung der noch fehlenden Negativtests für `createDecisionNoteDraft`, ohne neue Fachlogik und ohne Verhaltensänderung der Utility.

## Umsetzungsumfang
- Ergänzung eines Seiteneffekt-Negativtests in `createDecisionNoteDraft.test.js`.
- Ergänzung eines Quelltext-Negativtests in `createDecisionNoteDraft.test.js`.
- Keine Änderung an `createDecisionNoteDraft.js`.
- Keine neue Utility, keine UI, keine Speicher-/Netzwerk-/API-Anbindung.

## Ergänzte Testhärtung

### 1) Seiteneffekt-Negativtest (Runtime)
Es wird abgesichert, dass `createDecisionNoteDraft` keine Zugriffe auf folgende globale Browser-/Netzwerk-Objekte ausführt:
- `localStorage`
- `sessionStorage`
- `indexedDB`
- `fetch`
- `XMLHttpRequest`
- `axios`

Vorgehen im Test:
- Temporäre Throwing-Getter/-Funktionen auf `globalThis`.
- Aufruf von `createDecisionNoteDraft({ name: 'Test', interventions: [{ name: 'Option A' }] })`.
- `assert.doesNotThrow(...)` als Nachweis fehlender Zugriffe.
- Saubere Wiederherstellung aller globalen Werte via `try/finally`.

### 2) Quelltext-Negativtest (Static)
Es wird der Quelltext von `createDecisionNoteDraft.js` als Text gelesen (nur Node-Built-ins: `node:fs`, `node:path`, `node:url`) und geprüft, dass folgende Muster nicht enthalten sind:

- `localStorage`
- `sessionStorage`
- `indexedDB`
- `fetch(`
- `XMLHttpRequest`
- `axios`
- `/export`
- `/import`
- `/persistence`
- `openai`
- `OpenAI`
- `document.`
- `window.`
- `navigator.`

## Ergebnis
Phase 9.11 härtet die Testgrenzen gegen unerlaubte Seiteneffekte und unerwünschte Quelltext-Kopplungen.
Fachverhalten und Kontrakt von `createDecisionNoteDraft` bleiben unverändert.
