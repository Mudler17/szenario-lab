# JSON-Import-UI-Konzept (Phase 6.8)

## Ziel und Scope
Dieses Dokument bereitet **konzeptionell** eine spätere minimalistische UI-Einbindung für den JSON-Import vor.

In Scope ist ausschließlich die fachliche und technische UI-Kette zwischen Dateiauswahl, Parsing/Validierung und nutzerfreundlicher Statusanzeige.

Out of Scope (weiterhin **nicht** Bestandteil von Phase 6.8):
- keine konkrete UI-Implementierung
- kein Datei-Upload an Server
- kein produktiver FileReader-Einsatz im Code
- keine Draft-Übernahme-Implementierung
- keine Speicherung, kein LocalStorage
- keine OpenAI-Anbindung

## Ausgangslage aus Phase 6.3, 6.5 und 6.7
Für eine spätere UI-Einbindung liegen bereits getrennte Utilities vor:
- `validateScenarioImportPayload(payload)` prüft geparste Import-Payloads.
- `parseScenarioImportJsonText(text)` parst JSON-Text und delegiert Validierung.
- `createJsonImportStatusMessage(result)` übersetzt technische Resultate in nutzerfreundliche Meldungen.

Dadurch kann die UI schlank bleiben: Sie orchestriert nur Auswahl, Prüf-Trigger, Statusdarstellung und bewusste Übernahmeentscheidung.

## Geplante UI-Kette (später)
1. Nutzer:in wählt eine Datei aus (`<input type="file">`, JSON-orientiert).
2. UI liest die Datei als Text (lokal im Browser, keine Netzwerkübertragung).
3. UI ruft `parseScenarioImportJsonText(text)` auf.
4. UI gibt das Result an `createJsonImportStatusMessage(result)` weiter.
5. UI zeigt die nutzerfreundliche Statusmeldung an.
6. Falls `result.ok === true`: UI aktiviert zusätzlich eine **bewusste** Aktion
   „Szenario in lokalen Draft übernehmen“.
7. Erst nach aktivem Klick auf diese Schaltfläche wird der lokale Draft ersetzt.

Kurzform:
**Datei auswählen → als Text lesen → parseScenarioImportJsonText(text) → createJsonImportStatusMessage(result) → Status anzeigen → optional bewusste Übernahme → danach Draft ersetzen**

## Klärungen und fachliche Leitplanken
- **Import ist keine Speicherung.**
- **Import ersetzt nicht automatisch den aktuellen Draft.**
- Vor Übernahme soll sichtbar sein, **was geprüft wurde** (Status + ggf. Warnungen/Fehler).
- **Warnungen blockieren nicht**, müssen aber sichtbar sein.
- **Fehler blockieren** die Übernahme.
- Übernahme bleibt ein späterer, **bewusster** Schritt durch die Nutzer:innen.

## Konzeptionelle UI-Elemente
Für eine minimalistische Oberfläche werden folgende Elemente vorgesehen:

1. **Datei-Auswahlfeld**
   - Klar beschriftet, z. B. „JSON-Datei für Import auswählen“.
   - Optional mit accept-Hinweis auf `.json`.

2. **Button „JSON prüfen“**
   - Startet explizit die Prüfung der ausgewählten Datei.
   - Vermeidet implizite Auto-Prüfung bei Dateiauswahl.

3. **Statusmeldung**
   - Textlich sichtbarer Bereich mit `role="status"` und `aria-live="polite"`.
   - Zeigt initiale Hinweise, Erfolg, Warnung oder Fehler in verständlicher Sprache.

4. **Warnhinweisbereich bei `warnings`**
   - Zusätzlicher Bereich für nicht-blockierende Hinweise.
   - Warnungen separat vom Hauptstatus darstellen, aber semantisch verbunden.

5. **Deaktivierter/Aktivierter Übernahmebutton**
   - Label: „Szenario in lokalen Draft übernehmen“.
   - Standardmäßig deaktiviert.
   - Nur aktiv bei `ok: true`.

6. **Expliziter Hinweistext**
   - Sichtbarer Hinweis: „Import ersetzt den lokalen Draft erst nach Bestätigung“.

## Accessibility-Anforderungen
Die spätere UI soll barrierearm vorbereitet werden durch:
- eindeutige Labels für Datei-Input
- verständliche, handlungsorientierte Buttontexte
- Statusregion mit `role="status"` und `aria-live="polite"`
- Fehlermeldungen immer zusätzlich textlich sichtbar
- keine reine Farbcodierung (Farben nur ergänzend)
- vollständige Tastaturbedienbarkeit (Dateiauswahl, Prüfen, Übernahme)

## Datenschutz- und Sicherheitsgrenzen
Für die spätere Minimal-UI gelten folgende Grenzen:
- Datei bleibt lokal im Browser
- kein Upload an Server
- keine OpenAI-Anbindung
- keine Speicherung im Browser (kein LocalStorage)
- keine automatische Übernahme in den Draft

## Spätere Testperspektive (UI-orientiert)
Für die spätere Implementierung sollen mindestens folgende Fälle geprüft werden:
1. **Status initial**: Vor Dateiauswahl wird ein neutraler Hinweis angezeigt.
2. **Datei ausgewählt, noch nicht geprüft**: Keine Übernahme möglich, klarer Zwischenstatus.
3. **Gültiger Import ohne Warnungen**: Erfolgsmeldung, Übernahmebutton aktiv.
4. **Gültiger Import mit Warnungen**: Warnungen sichtbar, Übernahmebutton aktiv.
5. **Ungültiges JSON**: Fehlermeldung sichtbar, Übernahmebutton deaktiviert.
6. **Falscher Exporttyp**: Fehlermeldung sichtbar, Übernahmebutton deaktiviert.
7. **Aktivierungslogik**: Übernahmebutton nur bei `ok: true` aktiv.
8. **Accessibility der Statusmeldungen**: Statusbereich korrekt ausgezeichnet (`role="status"`/`aria-live`), Inhalte textlich verständlich.

## Ergebnis von Phase 6.8
Phase 6.8 liefert bewusst nur ein UI-Konzept als nächste Integrationsgrundlage.
Es erfolgt weiterhin **keine** Implementierung von Upload, FileReader-Logik, Draft-Übernahme oder Speicherung.
