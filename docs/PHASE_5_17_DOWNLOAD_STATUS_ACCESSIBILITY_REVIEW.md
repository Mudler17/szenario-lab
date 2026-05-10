# Phase 5.17 Review · UI-Zugänglichkeit der Download-Statusmeldung

## Zweck des Reviews

Dieses Review prüft die in Phase 5.17 umgesetzte Accessibility-Verbesserung der JSON-Download-Statusmeldung im bestehenden Exportbereich der Home-Ansicht. Der Fokus liegt auf der fachlichen Plausibilität der ARIA-Auszeichnung und der Einhaltung der bestehenden Architektur- und Funktionsgrenzen.

## Geprüfter Umfang

Geprüft wurden ausschließlich:

- die bestehende Statusmeldung im JSON-Download-Bereich,
- die gesetzten ARIA-Attribute (`role="status"`, `aria-live="polite"`),
- die textliche Verständlichkeit und Quellen der angezeigten Statusmeldung,
- die Abgrenzung zu Export-/Download-/Status-Utility-Logik,
- die CSS-seitige Einordnung der Statusdarstellung,
- die Architekturgrenzen (keine Speicherung, kein Import, keine neuen Fachmodule).

Nicht Teil dieses Reviews sind neue Features oder funktionale Erweiterungen.

## Geprüfte Dateien

- `src/pages/HomePage.jsx`
- `src/styles/global.css`
- `src/features/scenarios/export/createJsonDownloadStatusMessage.js`
- `src/features/scenarios/export/downloadScenarioExport.js`
- `src/features/scenarios/export/createScenarioExportDraft.js`

## Prüfergebnis Statusmeldung

Die Statusmeldung ist weiterhin vorhanden und bleibt im Exportbereich an sinnvoller Stelle direkt unter dem Button „JSON herunterladen“ positioniert.

Positiver Befund:

- `role="status"` ist ergänzt.
- `aria-live="polite"` bleibt erhalten.
- Die Meldung wird weiterhin textlich ausgegeben.
- Die Anzeige basiert weiterhin auf `downloadStatus.message`.
- Technische `reason`-Werte werden weiterhin nicht direkt in der UI angezeigt.
- Der Button „JSON herunterladen“ bleibt unverändert.
- Der Hinweis „Download ≠ Speicherung“ bleibt inhaltlich unverändert erhalten.
- Es wurden keine fachlichen Änderungen an der Download-/Export-Ausführung vorgenommen.

## Prüfergebnis Accessibility

Die Accessibility-Verbesserung ist grundsätzlich passend umgesetzt.

Bewertung:

- `role="status"` ist für eine nicht-dringliche Download-Statusmeldung plausibel.
- `aria-live="polite"` ist weiterhin angemessen, da die Meldung unterstützend und nicht kritisch-blockierend ist.
- Die Kombination aus `role="status"` und `aria-live="polite"` ist für diesen kleinen Schritt vertretbar.
- Status wird nicht ausschließlich über Farbe vermittelt; die Textmeldung bleibt die primäre Information.
- Erfolg-, Fehler- und Info-Zustände sind dadurch besser als Statusaktualisierung erkennbar.
- `aria-atomic` ist für den aktuellen Stand kein zwingender Blocker.

## Prüfergebnis CSS

Für Phase 5.17 Review war keine CSS-Änderung notwendig.

- Statusfarben bleiben ergänzend.
- Die eigentliche Information bleibt textlich.
- Es gab keinen Layout-Umbau.

## Prüfergebnis Architekturgrenze

Die Architekturgrenzen bleiben eingehalten:

- HomePage bleibt UI-Orchestrierung.
- Export-Utilities bleiben unverändert.
- Download-Utility bleibt unverändert.
- Statusmeldungs-Utility bleibt unverändert.
- Keine Speicherung ergänzt.
- Kein LocalStorage ergänzt.
- Kein JSON-Import ergänzt.
- Keine Backend-Speicherung ergänzt.
- Keine Simulation ergänzt.
- Keine OpenAI-Anbindung ergänzt.
- Keine neuen Fachmodule ergänzt.

## Nicht enthalten / weiterhin ausgeschlossen

Weiterhin nicht enthalten:

- App-interne Speicherung,
- LocalStorage,
- JSON-Import,
- Backend-Speicherung,
- Simulation,
- OpenAI-Anbindung,
- neue Fachmodule,
- neue Abhängigkeiten.

## Risiken und Hinweise

- Die Kombination `role="status"` und `aria-live="polite"` ist für diesen Stand vertretbar; später kann geprüft werden, ob eine der beiden Auszeichnungen redundant ist.
- `aria-atomic` ist aktuell kein Blocker, könnte aber später geprüft werden, falls Statusmeldungen komplexer werden.
- Bei späteren komplexeren Statusmeldungen sollte geprüft werden, ob Erfolg, Fehler und Info zusätzlich semantisch oder visuell klarer differenziert werden müssen.
- Automatisierte Accessibility-Tests sind noch nicht eingeführt; das bleibt ein möglicher späterer Qualitätsschritt.

## Empfehlung für nächste Phase

**Nächste sinnvolle Phase:**

Phase 5.18 · UI-Statusmeldungen fachlich konsolidieren

**Begründung:**

Nach der Accessibility-Auszeichnung sollte geprüft werden, ob die Statusmeldungen fachlich und visuell dauerhaft konsistent sind für:

- Initialmeldung,
- Erfolgsmeldung,
- Fehlermeldung,
- Reset nach Bearbeitung,
- Reset nach Draft-Reset.

Weiterhin gilt dabei:

- keine Speicherung,
- kein JSON-Import,
- kein LocalStorage,
- keine neue Fachlogik.
