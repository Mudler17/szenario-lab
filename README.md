# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 7.1 · Nächstes editierbares Szenariofeld konzeptionell ausgewählt

## Lokale Befehle
```bash
npm install
npm run dev
npm test
npm run build
```

## Hinweis
Die App erlaubt derzeit die Bearbeitung von drei bestehenden Szenario-Grundfeldern im lokalen Draft: Name, Beschreibung und Ziel.
Die Formularstruktur wurde in Phase 4.5 verbessert: Der Bereich ist als „Szenario-Grunddaten“ mit `fieldset` und `legend` strukturiert, alle drei Felder haben Hilfetexte und die Eingaben nutzen `aria-describedby`.
In Phase 4.6 wurde die wiederholte Draft-Update-Logik für diese drei bestehenden Felder (Name, Beschreibung, Ziel) in eine kleine State-Utility ausgelagert.
In Phase 4.7 wurde zusätzlich eine minimale lokale Validierung ergänzt: Name, Beschreibung und Ziel dürfen nicht leer sein; leere Felder zeigen sichtbare Hinweise im Draft-Formular.
In Phase 4.8 wurden Bearbeitungsbereich und Vorschau in der Home-Ansicht als klar getrennte Bereiche dargestellt (inklusive Überschriften und kurzer Hinweise), ohne neue Fachlogik einzuführen.
Es wurden keine neuen Felder ergänzt. Die Vorschau reagiert weiterhin direkt auf Änderungen, und über Reset werden die drei Originalwerte wiederhergestellt.
Wichtig: Keine Speicherung, kein LocalStorage, keine Simulation, keine OpenAI-Anbindung, keine weiteren aktiven Formularbereiche und keine neuen Module.
In Phase 4.8.1 wurde dafür ergänzend ein bewusst schlankes Minimal-CSS dokumentiert: `workspace-grid` strukturiert Bearbeitung und Vorschau als Bereiche, `workspace-panel` vereinheitlicht die Panel-Gestaltung, `editor-panel` und `preview-panel` differenzieren beide Ansichten visuell, und `workspace-hint` formatiert erklärende Hinweise.
Auch in Phase 4.8.1 gilt unverändert: keine React-Logikänderung, keine neuen Felder, keine Speicherung, kein LocalStorage, keine Simulation, keine OpenAI-Anbindung und keine neuen Module.
In Phase 5.1 wurde ein minimales Testfundament eingeführt: Es wird der native Node-Test-Runner verwendet, und `npm test` führt `node --test` aus.
Getestet werden ausschließlich Draft-State-Utilities: `createDraftFromScenario`, `resetDraft`, `updateScenarioDraftField` und `validateScenarioDraftBasics`.
Nicht Teil von Phase 5.1 sind React-Komponententests oder UI-Änderungen. Ebenfalls unverändert bleibt: keine neuen Features, keine neuen Felder, keine Speicherung, kein LocalStorage, keine Simulation, keine OpenAI-Anbindung und keine neuen Fachmodule.

In Phase 5.5 wurde eine reine Export-Payload-Utility vorbereitet. Sie erzeugt aus dem aktuellen Szenario-Draft ein serialisierbares JavaScript-Objekt mit `exportType`, `formatVersion`, `exportedAt`, `source` und `scenario`.
Es gibt weiterhin keinen Download-Button, keine UI, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.6 wurde das konzeptionelle JSON-Export-Schema verbindlich dokumentiert (Top-Level-Struktur, Pflichtfelder, optionale Metadaten und Erweiterungsregeln).
Es gibt weiterhin keinen Download-Button, keine Export-UI, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.7 wurde eine reine Export-Dateinamen-Utility vorbereitet. Sie erzeugt aus dem Szenario-Namen und einem Exportzeitpunkt einen sicheren Dateinamen für spätere JSON-Exporte.
Es gibt weiterhin keinen Download-Button, keine UI, keinen JSON-Import, kein LocalStorage und keine Speicherung.


In Phase 5.9 wurde eine reine Export-Orchestrierungs-Utility vorbereitet. Sie führt Export-Payload, Export-Dateiname und einen gemeinsamen Exportzeitpunkt in einem JavaScript-Objekt zusammen.
Es gibt weiterhin keinen Download-Button, keine UI, keinen Browser-Blob, kein JSON.stringify, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.10 wurde der spätere JSON-Download konzeptionell vorbereitet. Der Download wird als separater technischer Browser-Adapter nach `createScenarioExportDraft` verstanden. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Änderung, keinen Browser-Blob, kein `URL.createObjectURL`, kein `JSON.stringify` im Anwendungscode, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.11 wurde eine kleine technische JSON-Download-Utility vorbereitet. Sie kann einen bereits erzeugten Export-Draft mit payload und filename als JSON-Datei im Browser ausleiten. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.


In Phase 5.11 Review wurde die JSON-Download-Utility geprüft. Sie bleibt als technischer Browser-Adapter nach `createScenarioExportDraft` abgegrenzt. Die Review bestätigt die grundsätzliche Funktion und Testabdeckung, empfiehlt aber vor einer UI-Einbindung eine kleine Härtung des Cleanup-Verhaltens, insbesondere rund um `URL.revokeObjectURL`. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.


In Phase 5.12 wurde das Cleanup-Verhalten der JSON-Download-Utility gehärtet. Die Utility versucht temporäre Download-Elemente und Objekt-URLs auch bei Fehlern im Klick- oder Cleanup-Ablauf kontrolliert aufzuräumen. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.12 Review wurde die Cleanup-Härtung der JSON-Download-Utility geprüft. Die Review bestätigt, dass temporäre Download-Elemente und Objekt-URLs auch bei Klick- und Cleanup-Fehlern kontrolliert behandelt werden. Die Utility bleibt weiterhin ein technischer Browser-Adapter ohne Download-Button, ohne Export-UI, ohne React-Einbindung, ohne JSON-Import, ohne LocalStorage und ohne Speicherung.

In Phase 5.13 wurde die spätere UI-Einbindung des JSON-Downloads konzeptionell vorbereitet. Festgelegt wurde insbesondere, dass Download nicht mit App-interner Speicherung gleichgesetzt werden darf, dass ein späterer Button klar als „JSON herunterladen“ bezeichnet werden soll und dass Datenschutz- sowie Statushinweise vorzusehen sind. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.13 Review wurde das JSON-Download-UI-Konzept geprüft. Die Review bestätigt, dass die spätere UI nur als Auslöser für die getrennte Export- und Download-Logik dienen soll, dass Download nicht als App-interne Speicherung missverstanden werden darf und dass nutzerfreundliche Status-, Fehler- und Datenschutzhinweise vorzusehen sind. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.14 wurde eine reine Mapping-Utility für JSON-Download-Statusmeldungen vorbereitet. Sie übersetzt technische Ergebnisobjekte des Download-Adapters in nutzerfreundliche Erfolg-, Fehler- und Info-Meldungen. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.14 Review wurde die Mapping-Utility für JSON-Download-Statusmeldungen geprüft. Die Review bestätigt, dass technische Ergebnisobjekte und reason-Werte nutzerfreundlich gekapselt werden und die spätere UI keine technischen Fehlercodes direkt anzeigen muss. Es gibt weiterhin keinen Download-Button, keine Export-UI, keine React-Einbindung, keinen JSON-Import, kein LocalStorage und keine Speicherung.

In Phase 5.15 wurde eine minimale JSON-Download-UI im bestehenden Bearbeitungsbereich vorbereitet. Der Button „JSON herunterladen“ nutzt den aktuellen lokalen Draft, erzeugt einen Export-Draft, löst den Browser-Download aus und zeigt nutzerfreundliche Statusmeldungen. Download bleibt ausdrücklich von App-interner Speicherung getrennt. Es gibt weiterhin keinen JSON-Import, kein LocalStorage, keine Backend-Speicherung, keine Simulation und keine OpenAI-Anbindung.

In Phase 5.15 Review wurde die minimale JSON-Download-UI geprüft. Die Review bestätigt, dass der Button „JSON herunterladen“ den aktuellen lokalen Draft verwendet, die vorbereitete Export-/Download-Logik auslöst und nutzerfreundliche Statusmeldungen anzeigt. Download bleibt von App-interner Speicherung getrennt. Als nächster UI-Aufräumpunkt wurde die veraltete Hero-Phase-Note identifiziert. Es gibt weiterhin keinen JSON-Import, kein LocalStorage, keine Backend-Speicherung, keine Simulation und keine OpenAI-Anbindung.

In Phase 5.16 wurde die veraltete Hero-Phase-Note neutralisiert. Der sichtbare Hinweis beschreibt nun den aktuellen Nutzungsmodus als lokalen Draft mit Bearbeitung, Vorschau und JSON-Download ohne App-Speicherung. Es wurden keine neue Fachlogik, keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5.16 Review wurden die neutralisierten UI-Hinweise geprüft. Die Review bestätigt, dass der Hero-Hinweis den aktuellen Nutzungsmodus als lokalen Draft mit Bearbeitung, Vorschau und JSON-Download ohne App-Speicherung verständlich beschreibt. Es wurden keine Fachlogik, keine Exportlogik, keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5.17 wurde die Zugänglichkeit der JSON-Download-Statusmeldung minimal verbessert. Die Statusmeldung nutzt nun zusätzlich zu `aria-live="polite"` auch `role="status"`, damit Erfolg-, Fehler- und Info-Meldungen besser als Statusaktualisierungen erkennbar sind. Es wurden keine Fachlogik, keine Exportlogik, keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5.17 Review wurde die Accessibility-Verbesserung der JSON-Download-Statusmeldung geprüft. Die Review bestätigt, dass die Statusmeldung textlich sichtbar bleibt, weiterhin `aria-live="polite"` nutzt und zusätzlich mit `role="status"` als Statusregion ausgezeichnet ist. Es wurden keine Fachlogik, keine Exportlogik, keine Downloadlogik, keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5.18 wurden die nutzerfreundlichen JSON-Download-Statusmeldungen fachlich konsolidiert. Die Initial-, Erfolgs- und Fehlermeldungen sind nun einheitlicher formuliert und reduzieren technische Begriffe, ohne die Download-, Export- oder UI-Logik zu ändern. Es wurden keine Fachlogik, keine Exportlogik, keine Downloadlogik, keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5.19 wurde JSON-Export/Download fachlich abschließend geprüft. Die Review bestätigt die stimmige Kette aus Export-Payload, Dateiname, Orchestrierung, Download-Adapter und UI-Statusmeldungen ohne neue Fachlogik. Es wurden keine Speicherung, kein LocalStorage, kein JSON-Import, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 5 Review wurde die Stabilisierung durch Tests abgeschlossen. Die dokumentierten Reviews und Quality-Gates für Phase 5 sind abgeschlossen; der Fokus bleibt auf lokalem Draft und JSON-Download ohne App-interne Speicherung.

In Phase 6.1 wurde der spätere JSON-Import konzeptionell vorbereitet.
Import bleibt ausdrücklich von Speicherung getrennt. Es wurden keine Importfunktion, kein Datei-Upload, keine UI, kein LocalStorage, keine Simulation und keine OpenAI-Anbindung ergänzt.

In Phase 6.1 Review wurde das JSON-Import-Konzept geprüft. Die Review bestätigt die Abgrenzung von Import, Speicherung und LocalStorage sowie die geplante Prüfung von Exporttyp, Formatversion, Szenarioobjekt und Pflichtfeldern. Es wurden keine Importfunktion, kein Datei-Upload, keine UI und keine Speicherung ergänzt.


In Phase 6.2 wurde die spätere JSON-Import-Validierung konzeptionell vorbereitet. Festgelegt wurden Eingabeform, Ergebnisobjekt, Fehlercodes, Warnungen, Validierungsreihenfolge, Nutzertexte und spätere Testfälle. Es wurden keine Validierungsfunktion, kein Datei-Upload, keine UI, keine Speicherung und kein LocalStorage ergänzt.


In Phase 6.2 Review wurde das JSON-Import-Validierungskonzept geprüft. Die Review bewertet Eingabeform, Ergebnisobjekt, Reason-Codes, Warnungen, Validierungsreihenfolge, Nutzertexte, Testperspektive sowie Sicherheits- und Datenschutzgrenzen. Es wurden keine Validierungsfunktion, kein Datei-Upload, keine UI, keine Speicherung und kein LocalStorage ergänzt.

In Phase 6.3 wurde eine reine Utility zur Validierung bereits geparster JSON-Import-Payloads vorbereitet. Die Utility prüft Exporttyp, Formatversion, Szenarioobjekt sowie die Pflichtfelder Name, Beschreibung und Ziel und gibt strukturierte Result-Objekte zurück. Es wurden kein Datei-Upload, kein FileReader, kein JSON.parse im Anwendungscode, keine UI, keine Speicherung, kein LocalStorage und keine Importübernahme ergänzt.

In Phase 6.3 enthält die Utility zusätzlich nicht-blockierende Warnungen für unbekannte Top-Level-Felder und unbekannte Scenario-Felder.

In Phase 6.4 wurde das JSON-Import-Parsing konzeptionell vorbereitet (Text → `JSON.parse` → `validateScenarioImportPayload` → Result), weiterhin ohne UI, Datei-Upload, Speicherung oder Draft-Übernahme.

In Phase 6.4 Review wurde das JSON-Import-Parsing-Konzept fachlich geprüft und ohne Blocker bestätigt.

In Phase 6.5 wurde eine reine Parsing-Utility für JSON-Import-Text vorbereitet. Sie parst Text via `JSON.parse` und reicht erfolgreiche Parse-Ergebnisse unverändert an `validateScenarioImportPayload` weiter; bei Syntaxfehlern liefert sie ein eigenes `invalid-json-syntax`-Ergebnis. Es wurden keine UI, kein Datei-Upload, kein FileReader, keine Speicherung, kein LocalStorage und keine Draft-Übernahme ergänzt.

In Phase 6.5 Review wurde die JSON-Import-Parsing-Utility fachlich geprüft. Die Review bestätigt JSON.parse-only-Parsing, strukturiertes invalid-json-syntax-Handling sowie unveränderte Durchgabe von Validierungsfehlern und Warnungen. Es wurden keine UI, kein Datei-Upload, kein FileReader, keine Speicherung, kein LocalStorage und keine Draft-Übernahme ergänzt.


In Phase 6.6 wurden nutzerfreundliche Statusmeldungen für die spätere JSON-Import-Kette konzeptionell vorbereitet. Definiert wurden Mapping-Ziele für Parsing-/Validierungs-Result-Objekte, Meldungstypen (success, warning, error, info), Beispieltexte sowie klare Abgrenzungen ohne UI, Datei-Upload, Speicherung, LocalStorage oder Draft-Übernahme.

In Phase 6.7 Review wurde die JSON-Import-Statusmeldungs-Utility fachlich geprüft und ohne Blocker bestätigt. Das Mapping von Import-Resultaten auf nutzerfreundliche Statusmeldungen ist konsistent; es wurden keine UI-/Upload-/Storage-Erweiterungen ergänzt.


In Phase 6.8 Review wurde das JSON-Import-UI-Konzept fachlich geprüft und ohne Blocker bestätigt. Die geplante UI-Kette (Dateiauswahl → Text lesen → Parsing/Validierung → Status → bewusste Übernahme) ist konsistent beschrieben und klar von Implementierung, Speicherung und Server-Anbindung abgegrenzt.

In Phase 6.8 wurde die spätere JSON-Import-UI konzeptionell vorbereitet. Definiert wurden die minimale UI-Kette (Dateiauswahl → Text lesen → Parsing/Validierung → Status), klare Übernahmegrenzen (kein Auto-Replace), Accessibility-Anforderungen sowie Datenschutz-/Sicherheitsgrenzen. Es wurden keine UI implementiert, kein Datei-Upload, kein FileReader, keine Draft-Übernahme, keine Speicherung und kein LocalStorage ergänzt.

In Phase 6.9 wurde eine minimale lokale JSON-Import-Prüfung ergänzt. Dateien werden lokal gelesen und geprüft; es gibt weiterhin keine Draft-Übernahme, keine Speicherung, kein LocalStorage und keine Server-/OpenAI-Anbindung.

Im Phase-6.9-Review wurde diese UI fachlich geprüft und ohne Blocker bestätigt: eigener Prüfbereich, lokale Dateiprüfung mit FileReader-Adapter, Status-/Warnhinweise sowie klare Abgrenzung ohne Übernahme- oder Speicherlogik.

In Phase 6.10 wurde konzeptionell festgelegt, unter welchen Bedingungen ein geprüftes Szenario später den lokalen Draft ersetzen darf. Die Übernahme bleibt ein bewusster Schritt und ist weiterhin von Speicherung, LocalStorage und Server-Anbindung getrennt.

In Phase 6.10 Review wurde das JSON-Import-Übernahme-Konzept fachlich geprüft und ohne Blocker bestätigt. Die Übernahme bleibt ein bewusster, bestätigter Schritt bei gültigem Prüfergebnis und weiterhin strikt getrennt von Speicherung, LocalStorage und Server-/OpenAI-Anbindung.

In Phase 6.11 wurde eine bewusst bestätigte Übernahme geprüfter JSON-Importe in den lokalen Draft ergänzt. Die Übernahme ersetzt nur den lokalen Arbeitsspeicher-Draft und bleibt von Speicherung, LocalStorage, Server-Upload und OpenAI-Anbindung getrennt.

In Phase 6.11 Review wurde die minimale JSON-Import-Übernahme fachlich geprüft und ohne Blocker bestätigt. Die Übernahme bleibt ein bewusster lokaler Schritt ohne Speicherung; redundante Warnanzeige bei gültigem Import wurde minimal konsolidiert.

In Phase 6.12 wurde die gesamte lokale JSON-Import-/Export-Kette fachlich geprüft: Export, Download, lokale Importprüfung, Statusmeldungen und bewusste Draft-Übernahme. Die Kette bleibt weiterhin ohne App-Speicherung, ohne LocalStorage, ohne Server-Upload und ohne OpenAI-Anbindung.


In Phase 7.0 wurde entschieden, die App nach Abschluss der lokalen JSON-Import-/Export-Kette fachlich in Richtung weiterer editierbarer Szenariofelder weiterzuentwickeln. Simulation, Persistenz und zusätzliche Speichermechanismen bleiben weiterhin zurückgestellt.

In Phase 7.1 wurde fachlich geprüft, welcher Szenario-Bereich als nächstes editierbar werden soll. Die Entscheidung bereitet Annahmen als ersten zusätzlichen editierbaren Bereich vor; Implementierung, Speicherung, Simulation und Persistenz bleiben weiterhin ausgeschlossen.

## Dokumentation
- Architektur: `docs/ARCHITECTURE.md`
- Domänenmodell: `docs/DOMAIN_MODEL.md`
- Review-Dokument: `docs/DRAFT_EDITING_REVIEW.md`
- Phase-4-Review: `docs/PHASE_4_REVIEW.md`
- Phase-5-Entscheidung: `docs/PHASE_5_DIRECTION.md`
- Phase-5.1-Testreview: `docs/PHASE_5_1_TEST_REVIEW.md`
- Quality Gate: `docs/QUALITY_GATE.md`
- Phase-5.2-Quality-Gate-Review: `docs/PHASE_5_2_QUALITY_GATE_REVIEW.md`
- Speicherentscheidung (Konzeptvorbereitung): `docs/STORAGE_DECISION.md`
- JSON-Export-Konzeptvorbereitung: `docs/JSON_EXPORT_CONCEPT.md`
- Phase-5.5-Review (Export-Payload-Utility): `docs/PHASE_5_5_EXPORT_PAYLOAD_REVIEW.md`
- JSON-Export-Schema (Konzept): `docs/JSON_EXPORT_SCHEMA.md`
- Phase-5.7-Review (Export-Dateinamen): `docs/PHASE_5_7_EXPORT_FILENAME_REVIEW.md`
- JSON-Export-Orchestrierung (Konzept): `docs/JSON_EXPORT_ORCHESTRATION_CONCEPT.md`
- Phase-5.9-Review (Export-Orchestrierungs-Utility): `docs/PHASE_5_9_EXPORT_DRAFT_REVIEW.md`
- JSON-Download-Konzept: `docs/JSON_DOWNLOAD_CONCEPT.md`
- Phase-5.11-Review (JSON-Download-Utility): `docs/PHASE_5_11_DOWNLOAD_UTILITY_REVIEW.md`
- Phase-5.12-Review (JSON-Download-Cleanup): `docs/PHASE_5_12_DOWNLOAD_CLEANUP_REVIEW.md`
- JSON-Download-UI-Konzept: `docs/JSON_DOWNLOAD_UI_CONCEPT.md`
- Phase-5.13-Review (JSON-Download-UI-Konzept): `docs/PHASE_5_13_DOWNLOAD_UI_CONCEPT_REVIEW.md`
- Phase-5.14-Review (JSON-Download-Statusmeldungen): `docs/PHASE_5_14_DOWNLOAD_STATUS_MESSAGES_REVIEW.md`
- Phase-5.15-Review (JSON-Download-UI): `docs/PHASE_5_15_DOWNLOAD_UI_REVIEW.md`
- Phase-5.16-Review (UI-Hinweise): `docs/PHASE_5_16_UI_HINTS_REVIEW.md`
- Phase-5.17-Review (Download-Status-Accessibility): `docs/PHASE_5_17_DOWNLOAD_STATUS_ACCESSIBILITY_REVIEW.md`
- Phase-6-Richtungsentscheidung: `docs/PHASE_6_DIRECTION.md`
- JSON-Import-Konzept: `docs/JSON_IMPORT_CONCEPT.md`
- Phase-6.1-Review (JSON-Import-Konzept): `docs/PHASE_6_1_JSON_IMPORT_CONCEPT_REVIEW.md`
- JSON-Import-Validierungskonzept: `docs/JSON_IMPORT_VALIDATION_CONCEPT.md`
- Phase-6.2-Review (JSON-Import-Validierungskonzept): `docs/PHASE_6_2_JSON_IMPORT_VALIDATION_CONCEPT_REVIEW.md`
- Phase-6.3-Review (JSON-Import-Validierungs-Utility): `docs/PHASE_6_3_JSON_IMPORT_VALIDATION_UTILITY_REVIEW.md`
- Phase-6.4-Review (JSON-Import-Parsing-Konzept): `docs/PHASE_6_4_JSON_IMPORT_PARSING_CONCEPT_REVIEW.md`
- JSON-Import-Parsing-Konzept (Phase 6.4): `docs/JSON_IMPORT_PARSING_CONCEPT.md`
- Phase-6.5-Review (JSON-Import-Parsing-Utility): `docs/PHASE_6_5_JSON_IMPORT_PARSING_UTILITY_REVIEW.md`
- JSON-Import-Statusmeldungen-Konzept (Phase 6.6): `docs/JSON_IMPORT_STATUS_MESSAGES_CONCEPT.md`
- Phase-6.6-Review (JSON-Import-Statusmeldungs-Konzept): `docs/PHASE_6_6_JSON_IMPORT_STATUS_MESSAGES_CONCEPT_REVIEW.md`
- Phase-6.7-Review (JSON-Import-Statusmeldungs-Utility): `docs/PHASE_6_7_JSON_IMPORT_STATUS_MESSAGES_UTILITY_REVIEW.md`
- JSON-Import-UI-Konzept (Phase 6.8): `docs/JSON_IMPORT_UI_CONCEPT.md`
- Phase-6.8-Review (JSON-Import-UI-Konzept): `docs/PHASE_6_8_JSON_IMPORT_UI_CONCEPT_REVIEW.md`
- Phase-6.9-Review (JSON-Import-UI): `docs/PHASE_6_9_JSON_IMPORT_UI_REVIEW.md`
- JSON-Import-Übernahme-Konzept (Phase 6.10): `docs/JSON_IMPORT_DRAFT_ADOPTION_CONCEPT.md`
- Phase-6.10-Review (JSON-Import-Übernahme-Konzept): `docs/PHASE_6_10_JSON_IMPORT_DRAFT_ADOPTION_CONCEPT_REVIEW.md`
- Phase-6.11-Review (JSON-Import-Übernahme): `docs/PHASE_6_11_JSON_IMPORT_DRAFT_ADOPTION_REVIEW.md`
- Phase-6.12-Abschlussreview (JSON-Import/Export): `docs/PHASE_6_12_JSON_IMPORT_EXPORT_FINAL_REVIEW.md`
- Phase-7-Richtungsentscheidung: `docs/PHASE_7_DIRECTION.md`
- Phase-7.1-Auswahl nächstes editierbares Feld: `docs/PHASE_7_1_NEXT_EDITABLE_FIELD_SELECTION.md`

- Phase-5.14-Statusmeldungen werden durch `src/features/scenarios/export/createJsonDownloadStatusMessage.js` vorbereitet.
