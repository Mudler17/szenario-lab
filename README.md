# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 6.4 · JSON-Import-Parsing konzeptionell vorbereitet

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

- Phase-5.14-Statusmeldungen werden durch `src/features/scenarios/export/createJsonDownloadStatusMessage.js` vorbereitet.
