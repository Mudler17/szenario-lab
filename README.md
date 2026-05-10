# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 5.6 · JSON-Export-Schema konzeptionell festgelegt

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
