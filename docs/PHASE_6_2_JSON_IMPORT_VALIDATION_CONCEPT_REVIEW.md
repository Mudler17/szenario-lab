# Phase 6.2 Review · JSON-Import-Validierungskonzept

## 1. Zweck des Reviews

Dieses Review prüft das bestehende Konzeptdokument `docs/JSON_IMPORT_VALIDATION_CONCEPT.md` vor einer späteren Implementierung fachlich, architektonisch und aus Umsetzungs-/Testperspektive.

Es erfolgt **keine Implementierung** einer Validierungsfunktion.

## 2. Geprüfter Umfang

- `docs/JSON_IMPORT_VALIDATION_CONCEPT.md`
- `docs/JSON_IMPORT_CONCEPT.md`
- `docs/PHASE_6_1_JSON_IMPORT_CONCEPT_REVIEW.md`
- `docs/JSON_EXPORT_SCHEMA.md`
- `ROADMAP.md`
- `README.md`

## 3. Prüfergebnis fachliche Konsistenz

**Bewertung: erfüllt**

Kurze Begründung:

- Das Validierungskonzept grenzt Validierung klar von Speicherung, Draft-Übernahme und Wiederherstellung ab.
- Es ist ausdrücklich festgelegt, dass Validierung weder Datei-Lesen, UI-Anzeige noch Server-/OpenAI-Kommunikation übernimmt.
- Die Unterscheidung „Importprüfung ≠ Speicherung ≠ Wiederherstellung“ ist konsistent und verständlich.

## 4. Prüfergebnis Anschluss an Import-/Exportkonzept

**Bewertung: erfüllt**

Kurze Begründung:

- Das Validierungskonzept ist konsistent mit `docs/JSON_IMPORT_CONCEPT.md` und dem Export-Schema in `docs/JSON_EXPORT_SCHEMA.md`.
- `exportType`, `formatVersion`, `scenario`, `name`, `description`, `goal` werden inhaltlich stimmig behandelt.
- `formatVersion: 1` ist korrekt als erste unterstützte Version definiert.
- Unbekannte optionale Felder werden plausibel als tolerierbare Warnfälle geführt.

## 5. Prüfergebnis Eingabeform

**Bewertung: erfüllt**

Kurze Begründung:

- Die Signatur `validateScenarioImportPayload(payload, options = {})` ist für eine reine Utility plausibel.
- Die Utility prüft sinnvollerweise bereits geparstes JSON statt Dateiobjekte.
- Die Trennung von Datei-Lesen, JSON-Parsing, Validierung und späterer Übernahme ist klar dokumentiert.

Hinweise für spätere Implementierung:

- Übergabegrenzen strikt beibehalten: kein `FileReader`, kein Upload-Input, kein `JSON.parse` in der Utility.
- `options` minimal starten (z. B. unterstützte Versionen, Warnschwellen) und deterministisch auswerten.

## 6. Prüfergebnis Ergebnisobjekt

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Erfolgs- und Fehlerobjekt sind als Basis schlüssig (`ok`, `scenario`, `warnings` bzw. `reason`, `message`, `details`).
- Positiv: erwartbare Validierungsfehler sollen nicht per Exception geworfen werden.
- Positiv: Erfolgsszenario soll als Kopie zurückgegeben werden.

Empfohlene Präzisierungen:

- Bei Erfolg optional `message`/`details` erlauben (z. B. für neutrale Statushinweise), aber nicht verpflichtend.
- Bei Fehler zusätzlich ein optionales `warnings`-Array zulassen, damit nicht-blockierende Hinweise trotz Fehler transportiert werden können.
- Struktur von `details` früh als flaches, serialisierbares Objekt nachschärfen.

## 7. Prüfergebnis Reason-Codes

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die Liste ist für eine erste Implementierung solide.
- Einige Codes sind trennscharf, einige sollten für deterministische Priorisierung präzisiert werden.

Hinweise zu Trennschärfe und Fallback:

- `invalid-json-value` und `top-level-array` überschneiden sich teilweise; empfohlen: `top-level-array` als spezifischer Vorrangfall, `invalid-json-value` als generischer Restfall.
- `invalid-scenario` sollte klar als Sammelgrund für `null`/Array/nicht-Objekt dokumentiert bleiben oder in Untercodes aufgeteilt werden (später optional).
- `missing-required-field` und `invalid-required-field-type` sind sinnvoll getrennt.
- `payload-too-large` ist als späterer Grenzfall sinnvoll.
- `unknown-validation-error` ist als defensiver Fallback vertretbar, sollte aber selten und klar als Ausnahmefall markiert werden.

## 8. Prüfergebnis Warnungen

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Fehler/Warnung-Trennung ist grundsätzlich klar.
- Warnfälle (unbekannte Felder, lange Texte, große Struktur) sind fachlich nachvollziehbar.

Hinweise zur späteren Warning-Struktur:

- Warnungen sollten strukturierte Codes erhalten (analog zu `reason`) statt nur Freitext.
- Auch bei `ok: false` optional Warnungen zurückgeben, wenn sie bereits deterministisch erhoben wurden.
- Klar dokumentieren: Warnungen lösen weder Übernahme noch Speicherung aus.

## 9. Prüfergebnis Validierungsreihenfolge

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die Reihenfolge ist weitgehend sinnvoll, aber bei JavaScript-Typbesonderheiten leicht unscharf.

Hinweise zu `null`, Array-vs-Objekt und Type Guards:

- `null` sollte vor allgemeiner Objektprüfung explizit abgefangen werden.
- Array sollte vor „ist Objekt?“ separat geprüft werden, da Arrays in JavaScript Objekte sind.
- Für `scenario` gleiches Muster verwenden: zuerst Existenz, dann `null`, dann Array, dann Objekt.
- Für die spätere Utility explizite Type Guards vorbereiten, um deterministische Reasons sicherzustellen.

## 10. Prüfergebnis Nutzertexte

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Die Beispieltexte sind verständlich und vermeiden unnötige Technikdetails.
- Die Abgrenzung zwischen geprüft/übernommen/gespeichert ist angelegt, sollte aber noch expliziter werden.

Empfohlene spätere Ergänzungen:

- „Die Datei wurde gelesen, aber noch nicht übernommen.“
- „Der aktuelle Entwurf bleibt unverändert.“
- „Der Import wurde abgelehnt.“

Zusatzempfehlung:

- Separate Mapping-Utility für Nutzertexte beibehalten/empfehlen, damit Validierungslogik und UI-Sprache getrennt bleiben.

## 11. Prüfergebnis Testperspektive

**Bewertung: teilweise erfüllt**

Kurze Begründung:

- Vorhandene Testliste ist eine gute Basis.
- Für robuste Erstimplementierung fehlen noch einige explizite Randfälle.

Zusätzliche spätere Testfälle (nur dokumentiert):

- `payload` ist `undefined`.
- `formatVersion` ist String `"1"` statt Zahl `1`.
- Pflichtfelder enthalten nur Tabs/Zeilenumbrüche.
- `scenario` enthält zusätzliche Felder und erzeugt Warnungen statt Fehler.
- Warnungen werden gesammelt und deterministisch ausgegeben.
- Fehler werden bei Mehrfachproblemen deterministisch priorisiert.
- Erfolg gibt eine Kopie statt Originalreferenz zurück.
- Eingabeobjekt bleibt unverändert.

## 12. Prüfergebnis Sicherheit und Datenschutz

**Bewertung: erfüllt**

Kurze Begründung:

- Das Konzept schließt Code- und HTML-Ausführung, Serverübertragung, OpenAI-Anbindung, Speicherung sowie automatische Draft-Übernahme klar aus.
- Der Hinweis auf mögliche personenbezogene/vertrauliche Inhalte ist vorhanden.

Ergänzungsempfehlung:

- Optional expliziten Hinweis zu manipulativen/unerwarteten Inhalten ergänzen (z. B. irreführende oder ungewöhnlich große Inhaltspakete).

## 13. Architekturgrenzen

Dieses Review bestätigt ausdrücklich:

- keine Implementierung von `validateScenarioImportPayload`
- kein Datei-Upload
- kein `FileReader`
- kein `JSON.parse` im Anwendungscode
- keine UI
- keine Status-Komponente
- keine Speicherung
- kein LocalStorage
- keine Datenbank
- kein Backend
- keine automatische Wiederherstellung
- keine Importübernahme in Draft
- keine Änderung an Export-/Download-Utilities
- keine neuen Fachmodule

## 14. Gesamtfazit

**Entscheidung: Konzept ist ausreichend für den nächsten Schritt.**

Begründung:

- Es gibt keine fachlichen oder architektonischen Blocker.
- Die offenen Punkte sind Präzisierungen für deterministische Fehlermodelle, Warnungsstruktur und Reihenfolgefeinschliff.

Empfohlener nächster Schritt:

**Phase 6.3 · JSON-Import-Validierungs-Utility vorbereiten**

Wichtig für Phase 6.3:

- keine UI
- kein Datei-Upload
- kein `FileReader`
- kein `JSON.parse` im Anwendungscode
- keine Speicherung
- kein LocalStorage
- keine Importübernahme
- keine neuen Fachmodule
