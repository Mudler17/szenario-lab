# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 5.11 Review · JSON-Download-Utility geprüft

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
