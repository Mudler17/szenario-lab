# JSON-Import-Übernahme in lokalen Draft (Konzept · Phase 6.10)

## Ziel und Abgrenzung
Dieses Dokument legt fachlich fest, unter welchen Bedingungen ein bereits geprüftes JSON-Importszenario später in den lokalen Draft übernommen werden darf.

Phase 6.10 ist **rein konzeptionell**:
- keine Implementierung in `HomePage.jsx`
- keine Änderung am Draft-State
- kein Übernahmebutton im Code
- keine Speicherung
- kein LocalStorage
- kein Server-Upload
- keine OpenAI-Anbindung
- keine Simulation
- keine neuen Fachmodule

## Ausgangslage
- `validateScenarioImportPayload(payload)` validiert geparste Import-Payloads.
- `parseScenarioImportJsonText(jsonText)` parst JSON-Text und delegiert an die Validierung.
- `createJsonImportStatusMessage(result)` erzeugt nutzerfreundliche Import-Statusmeldungen.
- Die minimale JSON-Import-UI (Phase 6.9) erlaubt lokale Dateiauswahl, lokale Prüfung und Anzeige von Status/Warnungen/Fehlern.
- Der lokale Draft wird derzeit beim Import **nicht** verändert.

## Fachliche Übernahmekette (später, Phase 6.11+)
Datei auswählen
→ JSON prüfen
→ gültiges Importergebnis liegt vor
→ Status und ggf. Warnungen sichtbar anzeigen
→ Übernahmebutton aktivieren
→ Nutzer:in bestätigt bewusst
→ `importedScenario` wird mit `createDraftFromScenario` (oder gleichwertiger Draft-Kopie) in den lokalen Draft übernommen
→ `validateScenarioDraftBasics` wird erneut ausgeführt
→ Vorschau aktualisiert sich
→ Importstatus meldet: „Das geprüfte Szenario wurde in den lokalen Draft übernommen. Es wurde nicht gespeichert.“

## 1) Wann darf ein geprüftes Szenario den lokalen Draft ersetzen?
Eine spätere Übernahme ist nur zulässig, wenn alle Bedingungen erfüllt sind:
1. `parseScenarioImportJsonText(text)` hat ein Result mit `ok: true` geliefert.
2. Eine **bewusste Nutzeraktion** wurde ausgelöst (expliziter Übernahmeschritt).
3. Der Übernahmeschritt wurde bestätigt (siehe Abschnitt „Bestätigung“).

Nicht zulässig:
- keine automatische Übernahme nach Dateiauswahl
- keine automatische Übernahme nach erfolgreicher Prüfung
- keine Übernahme bei Fehlern (`ok !== true`)

Warnungen:
- Bei `ok: true` mit `warnings` bleibt Übernahme grundsätzlich erlaubt.
- Warnungen müssen vor der Übernahme sichtbar angezeigt werden.

Aktivierung:
- Übernahmebutton erst aktivieren, wenn ein gültiges Importergebnis vorliegt (`result.ok === true`).

## 2) Schutz vor Datenverlust
Vor der Übernahme muss im UI klar und gut sichtbar stehen:
- „Diese Aktion ersetzt den aktuellen lokalen Draft.“
- „Import ist keine Speicherung.“
- „Der bisherige lokale Draft kann nach Ersetzen nicht automatisch wiederhergestellt werden.“

Empfehlung zur Deutlichkeit:
- Warnhinweis immer unmittelbar vor dem Übernahme-CTA platzieren.
- Hinweis zusätzlich verstärken, wenn der aktuelle Draft verändert wurde (z. B. klarerer Textblock), ohne neue Persistenzlogik einzuführen.

Beispieltext:
„Der aktuell bearbeitete lokale Draft wird durch das geprüfte Szenario ersetzt. Diese Aktion speichert nichts in der App und kann nicht automatisch rückgängig gemacht werden.“

## 3) Bestätigungskonzept
Bestätigung ist verpflichtend.

### Minimalvariante
- Button: „Geprüftes Szenario in lokalen Draft übernehmen“
- Direkt davor sichtbarer Warnhinweis

### Sicherere Variante
- Nach erstem Klick zweite explizite Bestätigung im UI-Bereich, z. B. CTA „Aktuellen Draft ersetzen“
- Kein `window.confirm`

### Empfehlung für Phase 6.11
Für die erste Umsetzung wird eine **einfache, aber explizite UI-Bestätigung** im Importbereich empfohlen (ohne Browser-Dialog).

Begründung:
- transparenter
- barriereärmer
- besser automatisiert testbar

## 4) Was passiert mit dem bisherigen Draft?
- Bis zur bewussten Übernahme bleibt der bisherige Draft unverändert.
- Bei Übernahme wird der lokale Draft im Arbeitsspeicher ersetzt.
- Keine App-interne Speicherung.
- Kein LocalStorage.
- Kein automatisches Backup.
- Kein Server-Backup.

Optional später denkbar:
- temporäre In-Memory-Undo-Funktion.

Für die nächste Umsetzungsphase gilt:
- Undo ist **nicht verpflichtend**, damit die Übernahmelogik klein und klar bleibt.

Nach Übernahme:
- `validateScenarioDraftBasics` erneut ausführen.
- Vorschau aus dem neuen lokalen Draft aktualisieren.

## 5) Trennung von Import, Speicherung und LocalStorage
Import bleibt fachlich klar getrennt:
- Import = geprüfte Daten in lokalen React-State übernehmen.
- Speicherung = separater, weiterhin nicht umgesetzter Schritt.
- LocalStorage bleibt ausgeschlossen.
- Kein Backend.
- Kein Server-Upload.
- Keine OpenAI-Anbindung.
- Keine Simulation.
- Keine persistente Historie.

Dokumentation und UI-Texte sollen weiterhin explizit formulieren:
„Import ersetzt nur den lokalen Draft im Arbeitsspeicher. Er speichert nichts in der App.“

## A) Vorgesehene UI-Texte (spätere Phase)
- Button:
  „Geprüftes Szenario in lokalen Draft übernehmen“
- Warnhinweis:
  „Diese Aktion ersetzt den aktuellen lokalen Draft. Es wird nichts in der App gespeichert.“
- Erfolg nach Übernahme:
  „Das geprüfte Szenario wurde in den lokalen Draft übernommen. Es wurde nicht gespeichert.“
- Blockierender Hinweis bei Fehlern:
  „Dieses Szenario kann nicht übernommen werden, weil die Prüfung fehlgeschlagen ist.“
- Warnhinweis bei gültigem Import mit `warnings`:
  „Die Datei ist gültig, enthält aber zusätzliche Felder. Diese Felder werden derzeit nicht ausgewertet.“

## B) Aktivierungslogik (spätere Phase)
- Kein Importergebnis: Übernahmebutton nicht sichtbar oder deaktiviert.
- `result.ok !== true`: Übernahmebutton deaktiviert.
- `result.ok === true`: Übernahmebutton aktiv.
- `result.ok === true` mit `warnings`: Übernahmebutton aktiv, Warnhinweis sichtbar.
- Nach neuer Dateiauswahl: bisheriges Importergebnis zurücksetzen, Übernahmebutton wieder deaktivieren.
- Nach erfolgreicher Übernahme: Status aktualisieren, aber weiterhin keine Speicherung auslösen.

## C) Datenschutz und Sicherheit
- Importdatei bleibt lokal.
- Übernahme erfolgt nur in den lokalen Arbeitsspeicher.
- Keine Übertragung.
- Keine Persistenz.
- Keine personenbezogenen Daten automatisch speichern.
- Hinweis beibehalten, dass Nutzer:innen vor Export/Import auf vertrauliche Inhalte achten sollen.

## D) Accessibility
- Übernahmebutton eindeutig beschriften.
- Warnhinweis textlich sichtbar.
- Statusmeldung mit `role="status"` und `aria-live="polite"`.
- Keine reine Farbcodierung.
- Tastaturbedienbarkeit sicherstellen.
- Bestätigung darf nicht nur über Farbe oder Icon vermittelt werden.

## E) Testperspektive für Phase 6.11
Geplante Testfälle:
1. Kein Importergebnis → Übernahme nicht möglich.
2. Fehlerhaftes Importergebnis → Übernahme nicht möglich.
3. Gültiges Importergebnis ohne Warnungen → Übernahme möglich.
4. Gültiges Importergebnis mit Warnungen → Übernahme möglich, Warnung sichtbar.
5. Klick auf Übernahme ersetzt lokalen Draft.
6. Nach Übernahme läuft `validateScenarioDraftBasics` erneut.
7. Vorschau zeigt neues Szenario.
8. Import ersetzt nicht automatisch bei Prüfung.
9. Neue Dateiauswahl setzt Übernahmebereitschaft zurück.
10. Keine Speicherung, kein LocalStorage, kein Server-Upload.

## Ergebnis
Mit diesem Konzept ist klar definiert, dass eine spätere Draft-Übernahme nur nach erfolgreicher Prüfung **und** bewusster Bestätigung erfolgt. Gleichzeitig bleiben Import, Speicherung und Persistenz strikt getrennt.
