# Phase 5.15 Review · JSON-Download-UI

## Zweck des Reviews
Diese Review prüft die in Phase 5.15 minimal integrierte JSON-Download-UI im Bearbeitungsbereich auf fachliche Passung, UI-Grenzen, Nutzerverständlichkeit und grundlegende Barrierefreiheit.

## Geprüfter Umfang
- UI-Ablauf in der Home-Ansicht
- Platzierung des Exportbereichs im Bearbeitungsbereich
- Hinweisführung „Download ≠ Speicherung“
- Statuskommunikation inkl. `aria-live`
- minimale CSS-Ergänzungen
- Hinweise auf veraltete UI-Phasennotizen

## Geprüfte Dateien
- `src/pages/HomePage.jsx`
- `src/styles/global.css`
- `README.md`
- `ROADMAP.md`
- `docs/ARCHITECTURE.md`
- `docs/JSON_DOWNLOAD_UI_CONCEPT.md`

## Prüfergebnis UI-Ablauf
Die minimale JSON-Download-UI ist grundsätzlich passend umgesetzt.

Positiv bewertet:
- Der Button „JSON herunterladen“ arbeitet mit dem aktuellen lokalen `scenarioDraft`.
- Beim Klick wird zuerst ein Export-Draft mit `createScenarioExportDraft(scenarioDraft)` erzeugt.
- Anschließend wird `downloadScenarioExport(exportDraft)` aufgerufen.
- Das Ergebnis wird mit `createJsonDownloadStatusMessage(result)` in nutzerfreundliche Statusmeldungen übersetzt.
- Technische `reason`-Werte werden nicht direkt in der UI angezeigt.
- Der Download-Status wird beim Reset des Drafts zurückgesetzt.
- Der Download-Status wird bei Feldänderungen zurückgesetzt.
- Die UI bleibt Auslöser und übernimmt keine Exportfachlogik.
- Download bleibt von Speicherung getrennt.
- Es wird keine Speicherung, kein LocalStorage, kein JSON-Import und keine Backend-Logik eingeführt.

## Prüfergebnis Platzierung
Die Platzierung ist grundsätzlich sinnvoll, weil sich der Download auf den aktuell bearbeiteten lokalen Draft bezieht.

Positiv bewertet:
- Der Exportbereich ist im bestehenden Bearbeitungsbereich verortet.
- Die fachliche Nähe zum lokalen Draft ist klar erkennbar.
- Die Position unterhalb von „Draft auf Original zurücksetzen“ ist vertretbar.
- Es entsteht kein Eindruck eines neuen Hauptmoduls.
- Es entsteht kein Eindruck einer App-internen Speicherfunktion.

## Prüfergebnis Nutzerhinweise
Der Hinweis „Download ≠ Speicherung“ ist verständlich und ausreichend klar.

Positiv bewertet:
- Der Button-Text „JSON herunterladen“ vermeidet Speicher-Missverständnisse.
- Der Hinweistext macht klar, dass die Datei lokal auf das Gerät heruntergeladen wird.
- Der Hinweistext macht klar, dass keine Speicherung in der App erfolgt.
- Der Datenschutzhinweis zu personenbezogenen/vertraulichen Inhalten ist sichtbar und verständlich.
- Es wird nicht mit missverständlichen Speicherbegriffen wie „Projekt speichern“ gearbeitet.

## Prüfergebnis Barrierefreiheit
Für diesen ersten Schritt ist die Umsetzung angemessen.

Positiv bewertet:
- Eine Statusmeldung ist vorhanden.
- Die Statusmeldung nutzt `aria-live="polite"`.
- Status wird nicht rein farblich kommuniziert, sondern über Text.
- Der Download-Button ist klar beschriftet.
- Der Bereich ist mit `aria-label="JSON-Download"` auffindbar.

Hinweis für später:
- In einer Folgephase kann geprüft werden, ob `role="status"` zusätzlich sinnvoll ist.

## Prüfergebnis CSS
Die CSS-Ergänzungen sind klein und fokussiert.

Positiv bewertet:
- Ergänzungen bleiben auf Exportbereich und Statusmeldung begrenzt.
- Es wurde kein großes Layout umgebaut.
- Statusfarben werden nur ergänzend genutzt.
- Die Information bleibt über Text erhalten.

## Architekturgrenze
Die Review bestätigt die beabsichtigte Grenze:
- Die Home-UI triggert den Ablauf.
- Export-/Download-Fachlogik bleibt in vorbereiteten Utilities.
- Keine Verschiebung von Fachlogik in die UI.

## Nicht enthalten / weiterhin ausgeschlossen
Weiterhin nicht enthalten:
- App-interne Speicherung
- LocalStorage
- JSON-Import
- Backend-Speicherung
- Versionierung
- automatische Wiederherstellung
- Simulation
- OpenAI-Anbindung
- neue Fachmodule
- Änderungen am Szenario-Datenmodell

## Risiken und Hinweise
- Die Hero-Phase-Note „Phase 4.8 · Bearbeitungsbereich und Vorschau visuell klarer getrennt“ ist veraltet und kann Nutzer irritieren.
- Es sollte später geprüft werden, ob `role="status"` zusätzlich zu `aria-live` sinnvoll ist.
- Die Platzierung unter dem Reset-Button ist vertretbar, könnte aber später visuell noch stärker als Exportbereich abgegrenzt werden.
- Die UI löst aktuell direkt den Browser-Download aus; das ist für Phase 5.15 akzeptabel, sollte aber in späteren Phasen mit Blick auf Fehlerfälle und Browser-Verhalten weiter beobachtet werden.

## Empfehlung für nächste Phase
Bevorzugte Empfehlung:
- **Phase 5.16 · UI-Hinweise neutralisieren und Hero-Phase-Note bereinigen**

Alternative:
- Phase 5.15 Review-Fix · Hero-Phase-Note neutralisieren

Begründung:
Die Download-UI ist funktional passend. Der sichtbar veraltete Phase-4.8-Hinweis ist jetzt der wichtigste kleine UI-Konsistenzpunkt.
