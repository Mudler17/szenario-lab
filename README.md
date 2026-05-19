# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 10.3 · Browserlokale Draft-Speicherung nachgeschärft

Zwischenstand-Audit nach Phase 7.10 abgeschlossen

In Phase 10.3 wurde die browserlokale Draft-Speicherung nachgeschärft: robuste Fehlerbehandlung im LocalStorage-Adapter, erweiterte Negativ-/Fehlertests und ein Hydration-Guard gegen Initial-Überschreiben. Details: `docs/PHASE_10_3_BROWSER_LOCAL_DRAFT_PERSISTENCE_HARDENING.md`.

Phase-7.5-Schnitt: 7.5.1 Konzept · 7.5.2 Implementierung · 7.5.3 Review.

Nach Phase 7.7 wurde der Stand der editierbaren Entitäten geprüft. Beziehungen sind editierbar; als nächster sinnvoller Schritt wird eine konzeptionelle Relationship-Schema-Harmonisierung empfohlen.

In Phase 7.8.1 wurde die spätere Harmonisierung des Relationship-Schemas konzeptionell vorbereitet. Es wurden keine Migration, keine Mapping-Utility, keine UI-Änderung und keine Codeänderung umgesetzt.

In Phase 7.8.2 wurden Beispiel-Szenario und lesende Relationship-Vorschau auf das editierbare Relationship-Schema harmonisiert. Es wurden keine Interventionen, keine Simulation, keine Speicherung und keine Mapping-Architektur ergänzt.

In der Nacharbeit zu Phase 7.8.2 wurden die Relationship-Optionswerte im Beispiel-Szenario mit den Optionswerten des Editierformulars konsolidiert.

In Phase 7.9.1 wurden Interventionen als nächste editierbare Entität ausgewählt. Die Phase bleibt rein konzeptionell; es wurden keine Implementierung, keine UI, keine Utilities, keine Tests und keine Speicher-/Backend-/Simulationsanbindung ergänzt.

Nach der Freigabe der Interventionen wurde der lineare Bearbeitungsbereich geprüft. Das Audit empfiehlt vor weiteren Entitäten eine konzeptionelle UI-Struktur-Konsolidierung.

In Phase 7.10.1 wurde eine kleine Strukturverbesserung des Bearbeitungsbereichs konzeptionell vorbereitet. Zielbild sind Abschnittsnavigation, fachliche Gruppierung und ein klarer Werkzeugbereich ohne neue Fachlogik, Routing, Tabs oder globale State-Architektur.
In Phase 7.10.2 wurde diese Struktur minimal umgesetzt: Abschnittsnavigation, fachliche Gruppen und ein sichtbarer Werkzeugbereich für Reset/JSON-Download/JSON-Import-Prüfung – ohne Änderungen an Fachlogik, Formularfeldern, Draft-Utilities oder State-Architektur.

In Phase 7.10.3 wurde die minimale Strukturverbesserung des Bearbeitungsbereichs geprüft und freigegeben.

Nach Phase 7.10 wurde der Gesamtstand aus editierbaren Entitäten, Relationship-Harmonisierung, Interventionen-Ausbau und Bearbeitungsbereich-Struktur geprüft. Das Audit empfiehlt vor weiterem fachlichem Ausbau eine kurze Abschluss-/Statuskonsolidierung von Phase 7.

In Phase 7.11.1 wurde das spätere Abschlussaudit für Phase 7 konzeptionell vorbereitet. Ziel ist die gesamthafte Prüfung von editierbaren Entitäten, JSON-Werkzeugen, Relationship-Harmonisierung, Interventionen, Bearbeitungsbereich-Struktur, Dokumentation und Roadmap, bevor über die nächste Hauptphase entschieden wird.

In Phase 7.11.2 wurde Phase 7 gesamthaft geprüft. Der Ausbau editierbarer Szenariofelder, JSON-Werkzeuge, Relationship-Harmonisierung, Interventionen und Bearbeitungsbereich-Struktur wurde freigegeben. Phase 7 ist damit fachlich abgeschlossen; nächste Entscheidung ist Phase 8.0 zur Festlegung der nächsten Hauptphase.

In Phase 8.0 wurde die nächste Hauptphase festgelegt: Phase 8 bereitet die Persistenzentscheidung und Speicherarchitektur konzeptionell vor. Es wurde keine Speicherung, kein LocalStorage, kein Backend, keine Datenbank und keine Implementierung eingeführt.

In Phase 8.1 wurde die Persistenzentscheidung konzeptionell vorbereitet. Es wurden Speicheroptionen, Datenschutzgrenzen, Entscheidungskriterien und Ausschlüsse dokumentiert. Es wurde keine Speicherung, kein LocalStorage, kein Backend, keine Datenbank, keine Authentifizierung und keine Implementierung eingeführt.

In Phase 8.2 wurden Speicheroptionen bewertet. Ausgewählt wurde ein Hybridpfad: Der JSON-Datei-Workflow bleibt sicherer Standard; ein bewusst aktivierbarer Speicherpfad wird nur konzeptionell weiter vorbereitet. Es wurde keine Speicherung, kein LocalStorage, kein Backend, keine Datenbank und keine Implementierung eingeführt.

In Phase 8.3 wurde die Speicherarchitektur für einen später bewusst aktivierbaren Speicherpfad konzeptionell vorbereitet. Der JSON-Datei-Workflow bleibt Standard; Speicherung bleibt optional, explizit aktivierbar und ist noch nicht implementiert. Es wurde kein LocalStorage, kein SessionStorage, kein IndexedDB, kein Backend, keine Datenbank, keine Authentifizierung und keine API eingeführt.

In Phase 8.4 wurde die Speicherarchitektur-Konzeption aus Phase 8.3 geprüft. Die Architektur bleibt konzeptionell: keine Speicherung, kein LocalStorage, kein Backend, keine API und keine Implementierung. Als nächster Schritt wird eine konzeptionelle Vorbereitung von Persistenz-Schnittstellen und Kontrollpunkten empfohlen.

In Phase 8.5 wurden Persistenz-Schnittstellen und Kontrollpunkte für einen später bewusst aktivierbaren Speicherpfad konzeptionell vorbereitet. Es wurde keine Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine Implementierung eingeführt.

In Phase 8.6 wurde das Konzept zu Persistenz-Schnittstellen und Kontrollpunkten geprüft. Die Phase bleibt rein konzeptionell: keine Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine Implementierung. Als nächster Schritt wird eine konzeptionelle Vorbereitung der Persistenz-Integrationsgrenzen empfohlen.

In Phase 8.7 wurden Integrationsgrenzen für einen späteren Persistenz-Orchestrator konzeptionell vorbereitet. Ziel ist, HomePage, Draft-Utilities, JSON-Export und JSON-Import vor unkontrollierter Speicherlogik zu schützen. Es wurde keine Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine Implementierung eingeführt.

In Phase 8.8 wurde das Konzept zu Persistenz-Integrationsgrenzen geprüft. Die Phase bleibt rein konzeptionell: keine Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine Implementierung. Als nächster Schritt wird eine konzeptionelle Vorbereitung der Persistenz-Modulstruktur empfohlen.

In Phase 8.9 wurde die spätere Persistenz-Modulstruktur konzeptionell vorbereitet. Zielbild, Verantwortlichkeiten und Guard-Grenzen wurden dokumentiert, ohne Dateien anzulegen oder Implementierung zu starten. Es gibt weiterhin keine Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine Implementierung.

In Phase 8.10 wurde die Persistenz-Modulstruktur geprüft und freigegeben. Die Review bestätigt: keine Dateien unter `src/features/scenarios/persistence/`, keine Persistenz-Exporte, keine Speichertechnologie, keine Browser-Persistenz und keine API.

In Phase 8.11 wurde konzeptionell zugeschnitten, dass der erste spätere Implementierungsschritt nur eine sichere Nicht-Speicherungs-Grenze vorbereiten darf: NoPersistence-/Noop-Grundlage, Guard-Grundlage gegen verdeckte Speicherung und Status-/Meldungsgrundlage für „Speicherung nicht aktiv“. Es wurde weiterhin nichts implementiert: keine Speicherung, kein LocalStorage, kein SessionStorage, kein IndexedDB, kein Backend, keine API und keine UI.

In Phase 8.13 wurde unter `src/features/scenarios/persistence/` eine minimale technische Grundlage für Nicht-Speicherung ergänzt: NoPersistence-/Noop-Adapter, Guards gegen verdeckte Speicherung sowie Statuswerte und nutzerfreundliche Meldungen für „Speicherung nicht aktiv“. Es wurde weiterhin keine echte Speicherung eingeführt (kein LocalStorage, kein SessionStorage, kein IndexedDB, kein Backend, keine API, keine Datenbank, keine Authentifizierung, keine Accounts, keine UI- oder HomePage-Anbindung).

In Phase 8.14 wurde die in Phase 8.13 umgesetzte NoPersistence-/Guard-/Status-Grundlage geprüft. Die Grundlage bleibt strikt nicht-speichernd: keine echte Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine HomePage-Anbindung. Tests und Build wurden geprüft. Offene Hinweise werden in der nächsten Phase gezielt behandelt.


In Phase 8.15 wurde die NoPersistence-Grundlage nachgeschärft. Der NoPersistence-Adapter wurde API-seitig erweitert, Guards für Nicht-Speicheraktionen wurden expliziter, Statuswerte und Meldungen wurden präzisiert und Tests gegen Browser-API-Zugriffe ergänzt. Es wurde weiterhin keine echte Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine HomePage-Anbindung eingeführt.

In Phase 8.16 wurde die nachgeschärfte NoPersistence-/Guard-/Status-Grundlage geprüft. Die Grundlage bleibt strikt nicht-speichernd: keine echte Speicherung, kein LocalStorage, kein Backend, keine API, keine UI und keine HomePage-Anbindung. Tests und Build wurden geprüft.

In Phase 8.17 wurde der Persistenz-Zwischenstand nach der NoPersistence-/Guard-/Status-Grundlage geprüft. Die Phase bestätigt: Die App hat weiterhin keine echte Speicherung, kein LocalStorage, kein Backend, keine API, keine UI- und keine HomePage-Anbindung für Persistenz. Die NoPersistence-Grundlage ist als sichere Architektur- und Testgrenze etabliert. Als nächster Schritt wird das Phase-8-Abschlussaudit mit Übergang zu Phase 9 empfohlen.

In Phase 8.18 wurde Phase 8 abgeschlossen. Die Persistenzentscheidung und Speicherarchitektur sind vorbereitet, und eine NoPersistence-/Guard-/Status-Grundlage ist als sichere nicht-speichernde Architekturgrenze etabliert. Die App führt weiterhin keine echte Speicherung ein: kein LocalStorage, kein Backend, keine API, keine UI- und keine HomePage-Anbindung für Persistenz. Als nächste Hauptphase wird Phase 9 zur Beratungslogik und Entscheidungsqualität empfohlen.

In Phase 9.0 wurde die nächste Hauptphase festgelegt: Phase 9 baut Beratungslogik und Entscheidungsqualität aus. Als erste fachliche Linie wurde Vergleichs- und Entscheidungslogik gewählt. Es wurde keine Implementierung, keine UI, keine Simulation, kein Report-Ausbau, keine Speicherung und keine OpenAI-Anbindung eingeführt.

In Phase 9.1 wurde die Vergleichs- und Entscheidungslogik konzeptionell vorbereitet. Die App soll Unterschiede, Zielkonflikte, kritische Annahmen und Entscheidungsreife sichtbar machen, ohne Entscheidungen zu automatisieren. Es wurde keine Implementierung, keine UI, kein Scoring, keine automatische Empfehlung, keine Simulation, keine Speicherung und keine OpenAI-Anbindung eingeführt.

In Phase 9.2 wurde das Konzept zur Vergleichs- und Entscheidungslogik geprüft. Die Beratungslogik bleibt auf Entscheidungsvorbereitung begrenzt: keine automatische Entscheidung, kein finales Scoring, keine automatische Empfehlung, keine Simulation, keine OpenAI-Anbindung und keine Implementierung. Als nächster Schritt wird empfohlen, den kleinsten Implementierungsschnitt für eine Entscheidungsnotiz konzeptionell zuzuschneiden.

In Phase 9.3 wurde der kleinste spätere Implementierungsschnitt für eine Entscheidungsnotiz konzeptionell zugeschnitten: neutrale Struktur, keine Empfehlung, kein Scoring, keine Rangfolge, keine UI, keine Persistenz, keine OpenAI-Anbindung und keine Implementierung.

In Phase 9.4 wurde der konzeptionelle Implementierungsschnitt für eine Entscheidungsnotiz geprüft. Der Schnitt bleibt auf eine neutrale Utility-Grundlage begrenzt und führt keine Empfehlung, kein Scoring, keine Rangfolge, keine UI, keine Speicherung, keine OpenAI-Anbindung und keine Implementierung ein. Als nächster Schritt wird empfohlen, den Utility-Kontrakt für die Entscheidungsnotiz präzise zuzuschneiden.

In Phase 9.6 wurde der konzeptionelle Utility-Kontrakt für die spätere Entscheidungsnotiz geprüft. Der Kontrakt bleibt auf eine neutrale, testbare Entscheidungsnotiz-Grundlage begrenzt: keine Empfehlung, kein Scoring, keine Rangfolge, keine UI, keine Speicherung, keine OpenAI-/LLM-Anbindung und keine Implementierung im Review. Als nächster Schritt wird eine minimal begrenzte Implementierung der Utility empfohlen, sofern keine Blocker bestehen.

In Phase 9.8 wurde die minimale Utility `createDecisionNoteDraft` geprüft.
In Phase 9.9 wurden die Testgrenzen der Utility `createDecisionNoteDraft` nachgeschärft (u. a. explizite null/undefined-Eingaben, strengere Array-Inhaltsprüfungen, exakte Pflichtfeld-Keys, engere Schutztests für neutrale Sprache und Grenzen). Die Utility bleibt ohne neue Fachlogik sowie ohne UI-/Speicher-/Automatisierungsanbindung.

In Phase 9.10 wurden die in Phase 9.9 nachgeschärften Testgrenzen der Entscheidungsnotiz-Utility geprüft. Die Utility bleibt ohne UI, ohne Speicherung, ohne OpenAI-/LLM-Anbindung, ohne Empfehlung, ohne Scoring, ohne Rangfolge und ohne Entscheidungsautomatisierung. Offene Hinweise betreffen ausschließlich Testhärtung und keine neue Fachlogik.
In Phase 9.11 wurden die fehlenden Seiteneffekt- und Quelltext-Negativtests für `createDecisionNoteDraft` ergänzt. Die Utility bleibt ohne UI, ohne Speicherung, ohne OpenAI-/LLM-Anbindung, ohne Empfehlung, ohne Scoring, ohne Rangfolge und ohne Entscheidungsautomatisierung.
In Phase 9.12 wurden die in Phase 9.11 ergänzten Seiteneffekt- und Quelltext-Negativtests für `createDecisionNoteDraft` geprüft. Die Tests sichern ab, dass die Utility keine Browser-Speicher-, Netzwerk-, Import-/Export-, Persistenz-, DOM- oder OpenAI-/LLM-Bezüge nutzt. Die Utility bleibt fachlich unverändert: keine UI, keine Speicherung, keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung.

In Phase 9.13 wurde die Entscheidungsnotiz-Linie zwischengeprüft. Die Utility `createDecisionNoteDraft` ist fachlich und technisch stabil als neutrale Entscheidungsnotiz-Grundlage: keine UI, keine Speicherung, keine OpenAI-/LLM-Anbindung, keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung. Tests und Schutzgrenzen sind ausreichend gehärtet. Als nächster Schritt wird ein reines UI-Konzept für die spätere Sichtbarkeit der Entscheidungsnotiz empfohlen.

In Phase 9.14 wurde konzeptionell vorbereitet, wie die Entscheidungsnotiz später im Bearbeitungsbereich sichtbar gemacht werden kann. Der empfohlene Zielpfad ist ein eigener, klar abgegrenzter Abschnitt im Bearbeitungsbereich mit sichtbaren Boundaries und dem Status „Entwurf · keine Empfehlung“. Es wurde keine UI implementiert, keine HomePage- oder Bearbeitungsbereich-Anbindung vorgenommen, keine Speicherung, keine OpenAI-/LLM-Anbindung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung eingeführt.

In Phase 9.15 wurde das UI-Konzept für die spätere Sichtbarkeit der Entscheidungsnotiz geprüft. Der Zielpfad bleibt eng begrenzt: später zunächst eine reine Präsentationskomponente, keine HomePage- oder Bearbeitungsbereich-Anbindung, keine Speicherung, keine OpenAI-/LLM-Anbindung, keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung. Als nächster Schritt wird empfohlen, den UI-Komponenten-Kontrakt konzeptionell zuzuschneiden.

In Phase 9.17 wurde der UI-Komponenten-Kontrakt für die spätere `DecisionNotePanel`-Präsentationskomponente geprüft. Der Zielpfad bleibt eng begrenzt: presentation-only, Prop `decisionNote`, verpflichtender Boundary-Block, keine Interaktion, keine Erzeugungslogik, keine HomePage- oder Bearbeitungsbereich-Anbindung, keine Speicherung, keine OpenAI-/LLM-Anbindung, keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung. Als nächster Schritt wird empfohlen, den minimalen Implementierungsschnitt und Testvertrag vorzubereiten.

In Phase 9.18 wurde der minimale spätere Implementierungsschnitt für `DecisionNotePanel` konzeptionell vorbereitet. Festgelegt wurden der maximal erlaubte Dateiscope (Panel + Test), ein verpflichtender Testvertrag (inklusive Boundary-Block und fehlendem `decisionNote`), eine testpflichtige Negativliste verbotener Labels sowie harte Scope-Grenzen ohne Integration, ohne Speicherung und ohne OpenAI-/LLM-Anbindung.

 Die Utility bleibt auf eine neutrale Entscheidungsnotiz-Grundlage begrenzt und führt keine UI, keine Speicherung, keine OpenAI-/LLM-Anbindung, keine Empfehlung, kein Scoring, keine Rangfolge und keine Entscheidungsautomatisierung ein. Als nächster Schritt werden die Testgrenzen der Entscheidungsnotiz-Utility nachgeschärft, sofern die Review-Hinweise bestätigt werden.

- Phase-8.17 Persistenz-Zwischenstand-Audit: docs/PHASE_8_17_PERSISTENCE_INTERIM_AUDIT_AFTER_NO_PERSISTENCE.md
- Phase-8.18 Abschlussaudit und Phase-9-Übergang: docs/PHASE_8_18_PHASE_8_COMPLETION_AUDIT_AND_PHASE_9_TRANSITION.md
- Phase-9.0 Entscheidung Beratungslogik: docs/PHASE_9_0_NEXT_MAIN_PHASE_CONSULTING_LOGIC_DECISION.md
- Phase-9.1 Vergleichs- und Entscheidungslogik-Konzept: docs/PHASE_9_1_COMPARISON_AND_DECISION_LOGIC_CONCEPT.md
- Phase-9.2 Review Vergleichs- und Entscheidungslogik: docs/PHASE_9_2_REVIEW_COMPARISON_AND_DECISION_LOGIC.md
- Phase-9.3 Entscheidungsnotiz-Implementierungsschnitt: docs/PHASE_9_3_DECISION_NOTE_IMPLEMENTATION_SLICE_CONCEPT.md
- Phase-9.4 Review Entscheidungsnotiz-Implementierungsschnitt: docs/PHASE_9_4_REVIEW_DECISION_NOTE_IMPLEMENTATION_SLICE.md
- Phase-9.5 Entscheidungsnotiz-Utility-Kontrakt: docs/PHASE_9_5_DECISION_NOTE_UTILITY_CONTRACT_CONCEPT.md
- Phase-9.6 Review Entscheidungsnotiz-Utility-Kontrakt: docs/PHASE_9_6_REVIEW_DECISION_NOTE_UTILITY_CONTRACT.md
- Phase-9.7 Implementierung Entscheidungsnotiz-Utility (minimal): docs/PHASE_9_7_DECISION_NOTE_UTILITY_MINIMAL_IMPLEMENTATION.md
- Phase-9.8 Review Entscheidungsnotiz-Utility: docs/PHASE_9_8_REVIEW_DECISION_NOTE_UTILITY.md
- Phase-9.9 Entscheidungsnotiz-Testgrenzen nachschärfen: docs/PHASE_9_9_DECISION_NOTE_TEST_BOUNDARIES_HARDENING.md
- Phase-9.10 Review Entscheidungsnotiz-Testgrenzen: docs/PHASE_9_10_REVIEW_DECISION_NOTE_TEST_BOUNDARIES.md
- Phase-9.11 Entscheidungsnotiz-Seiteneffekt- und Quelltexttests: docs/PHASE_9_11_DECISION_NOTE_SIDE_EFFECT_AND_SOURCE_NEGATIVE_TESTS.md
- Phase-9.12 Review Entscheidungsnotiz-Seiteneffekt- und Quelltexttests: docs/PHASE_9_12_REVIEW_DECISION_NOTE_SIDE_EFFECT_AND_SOURCE_TESTS.md
- Phase-9.13 Entscheidungsnotiz-Zwischenstand-Audit: docs/PHASE_9_13_DECISION_NOTE_INTERIM_AUDIT.md
- Phase-9.14 Entscheidungsnotiz-UI-Konzept: docs/PHASE_9_14_DECISION_NOTE_UI_CONCEPT.md
- Phase-9.15 Review Entscheidungsnotiz-UI-Konzept: docs/PHASE_9_15_REVIEW_DECISION_NOTE_UI_CONCEPT.md
- Phase-9.17 Review Entscheidungsnotiz-UI-Komponenten-Kontrakt: docs/PHASE_9_17_REVIEW_DECISION_NOTE_UI_COMPONENT_CONTRACT.md
- Phase-9.18 Entscheidungsnotiz-UI-Implementierungsschnitt (Konzept): docs/PHASE_9_18_DECISION_NOTE_UI_IMPLEMENTATION_SLICE_CONCEPT.md

## Lokale Befehle
```bash
npm install
npm run dev
npm test
npm run build
```

## Hinweis
Die App erlaubt derzeit die Bearbeitung der folgenden Bereiche im lokalen Draft:
- Grunddaten: Name, Beschreibung, Ziel
- Annahmen
- Personas
- Ressourcen
- Phasen
- Evidenz
- Beziehungen
- Interventionen
Die Formularstruktur wurde in Phase 4.5 verbessert: Der Bereich ist als „Szenario-Grunddaten“ mit `fieldset` und `legend` strukturiert, alle drei Felder haben Hilfetexte und die Eingaben nutzen `aria-describedby`.
In Phase 4.6 wurde die wiederholte Draft-Update-Logik für diese drei bestehenden Felder (Name, Beschreibung, Ziel) in eine kleine State-Utility ausgelagert.
In Phase 4.7 wurde zusätzlich eine minimale lokale Validierung ergänzt: Name, Beschreibung und Ziel dürfen nicht leer sein; leere Felder zeigen sichtbare Hinweise im Draft-Formular.
In Phase 4.8 wurden Bearbeitungsbereich und Vorschau in der Home-Ansicht als klar getrennte Bereiche dargestellt (inklusive Überschriften und kurzer Hinweise), ohne neue Fachlogik einzuführen.
Es wurden keine neuen Felder ergänzt. Die Vorschau reagiert weiterhin direkt auf Änderungen, und über Reset werden die drei Originalwerte wiederhergestellt.
Wichtig: Der aktuelle Draft wird browserlokal per localStorage gespeichert (sofern verfügbar). Es gibt weiterhin kein Backend, keine Accounts, keine Synchronisierung und keine OpenAI-Anbindung.
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

In Phase 7.1 Review wurde die Auswahl des nächsten editierbaren Szenariofelds fachlich geprüft und ohne Blocker bestätigt. Die Empfehlung „Annahmen zuerst" bleibt bestehen; Implementierung, Speicherung, Simulation und Anbindungen bleiben weiterhin ausgeschlossen.

In Phase 7.2.1 wurde das Konzept für Annahmen als ersten zusätzlichen editierbaren Szenario-Bereich vorbereitet. Die Phase definiert Felder, Validierung, Pattern-Verweise, geplante Tests, JSON-Rundlauf und Negativ-Liste. Es wurde noch keine Implementierung ergänzt.

In Phase 7.3.1 wurde die nächste Entität nach der Annahmen-Bearbeitung neu bewertet und verbindlich als „Evidenz“ ausgewählt.

In Phase 7.3.2 wurde Evidenz im lokalen Draft minimal bearbeitbar umgesetzt (inkl. Add/Update/Remove, Basis-a11y, Status-/Hilfetexte und Tests), weiterhin ohne Speicherung, Backend oder Simulation.

In Phase 7.4.1 wurde nach Annahmen und Evidenz die nächste Entität für den lokalen Draft-Ausbau verbindlich ausgewählt: Personas. Die Phase bleibt rein konzeptionell; es wurden keine Implementierung, keine UI, keine Utilities, keine Tests und keine Speicher-/Backend-/Simulationsanbindung ergänzt.


In Phase 7.4.2 wurden Personas im lokalen Draft minimal bearbeitbar ergänzt (Add/Update/Remove, Basis-a11y, Status-/Hilfetexte, Tests), weiterhin ohne Speicherung, LocalStorage, Backend oder Simulation.

In Phase 7.5.1 wurde nach Annahmen, Evidenz und Personas die nächste Entität für den lokalen Draft-Ausbau verbindlich ausgewählt: Ressourcen. Die Phase bleibt rein konzeptionell; es wurden keine Implementierung, keine UI, keine Utilities, keine Tests und keine Speicher-/Backend-/Simulationsanbindung ergänzt.

In Phase 7.6.3 wurde die Phasen-Implementierung fachlich geprüft und zur Umsetzung freigegeben.
Phasen sind im lokalen Draft minimal bearbeitbar.

In Phase 7.7.1 wurde Beziehungen als nächste editierbare Entität ausgewählt. Die Phase bleibt rein konzeptionell; es wurden keine Implementierung, keine UI, keine Utilities, keine Tests und keine Speicher-/Backend-/Simulationsanbindung ergänzt.

## Dokumentation
- Architektur: `docs/ARCHITECTURE.md`
- Domänenmodell: `docs/DOMAIN_MODEL.md`
- Phase-8.15 NoPersistence-Nachschärfung: `docs/PHASE_8_15_NO_PERSISTENCE_FOUNDATION_REFINEMENT.md`
- Phase-8.16 Review nachgeschärfte NoPersistence-Grundlage: `docs/PHASE_8_16_REVIEW_REFINED_NO_PERSISTENCE_FOUNDATION.md`
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
- Phase-8.7 Persistenz-Integrationsgrenzen: `docs/PHASE_8_7_PERSISTENCE_INTEGRATION_BOUNDARIES_CONCEPT.md`
- Phase-8.8 Review Persistenz-Integrationsgrenzen: `docs/PHASE_8_8_REVIEW_PERSISTENCE_INTEGRATION_BOUNDARIES.md`
- Phase-8.14 Review NoPersistence-/Guard-/Status-Grundlage: `docs/PHASE_8_14_REVIEW_NO_PERSISTENCE_GUARD_STATUS_FOUNDATION.md`
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
- Phase-8.1 Persistenzentscheidung-Konzept: `docs/PHASE_8_1_PERSISTENCE_DECISION_CONCEPT.md`
- Phase-8.2 Speicheroptionen-Bewertung: `docs/PHASE_8_2_PERSISTENCE_OPTIONS_EVALUATION.md`
- Phase-8.3 Speicherarchitektur-Konzept: `docs/PHASE_8_3_ACTIVATABLE_PERSISTENCE_ARCHITECTURE_CONCEPT.md`
- Phase-8.4 Review Speicherarchitektur-Konzeption: `docs/PHASE_8_4_REVIEW_ACTIVATABLE_PERSISTENCE_ARCHITECTURE.md`
- Phase-8.5 Persistenz-Schnittstellen und Kontrollpunkte: `docs/PHASE_8_5_PERSISTENCE_INTERFACES_AND_CONTROLS_CONCEPT.md`
- Phase-8.6 Review Persistenz-Schnittstellen und Kontrollpunkte: `docs/PHASE_8_6_REVIEW_PERSISTENCE_INTERFACES_AND_CONTROLS.md`
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
- Zwischenstand-Audit nach Phase 7.10: `docs/PHASE_7_INTERMEDIATE_AUDIT_AFTER_7_10.md`
- JSON-Import-Übernahme-Konzept (Phase 6.10): `docs/JSON_IMPORT_DRAFT_ADOPTION_CONCEPT.md`
- Phase-6.10-Review (JSON-Import-Übernahme-Konzept): `docs/PHASE_6_10_JSON_IMPORT_DRAFT_ADOPTION_CONCEPT_REVIEW.md`
- Phase-6.11-Review (JSON-Import-Übernahme): `docs/PHASE_6_11_JSON_IMPORT_DRAFT_ADOPTION_REVIEW.md`
- Phase-6.12-Abschlussreview (JSON-Import/Export): `docs/PHASE_6_12_JSON_IMPORT_EXPORT_FINAL_REVIEW.md`
- Phase-7-Richtungsentscheidung: `docs/PHASE_7_DIRECTION.md`
- Phase-7.10.1 Bearbeitungsbereich-Struktur-Konzept: `docs/PHASE_7_10_1_EDITOR_STRUCTURE_CONCEPT.md`
- Phase-7.10.2 Bearbeitungsbereich-Struktur-Umsetzung (minimal): `docs/PHASE_7_10_2_EDITOR_STRUCTURE_MINIMAL_IMPLEMENTATION.md`
- Phase-7.10.3 Review Bearbeitungsbereich-Struktur: `docs/PHASE_7_10_3_REVIEW_EDITOR_STRUCTURE.md`
- Phase-7.11.1 Phase-7-Abschlussaudit-Konzept: `docs/PHASE_7_11_1_PHASE_7_COMPLETION_AUDIT_CONCEPT.md`
- Phase-7.11.2 Phase-7-Abschlussaudit: `docs/PHASE_7_11_2_PHASE_7_COMPLETION_AUDIT.md`
- Phase-8.0 Richtungsentscheidung nächste Hauptphase: `docs/PHASE_8_0_NEXT_MAIN_PHASE_DECISION.md`
- Phase-7.1-Auswahl nächstes editierbares Feld: `docs/PHASE_7_1_NEXT_EDITABLE_FIELD_SELECTION.md`
- Phase-7.1-Review (Auswahl nächstes editierbares Feld): `docs/PHASE_7_1_NEXT_EDITABLE_FIELD_SELECTION_REVIEW.md`
- Phase-7.2-Annahmen-Konzept: `docs/PHASE_7_2_DIRECTION.md`

- Phase-7.3.1-Konzept nächste Entität: `docs/PHASE_7_3_1_NEXT_ENTITY_CONCEPT.md`
- Phase-7.9.1-Konzept nächste Entität: `docs/PHASE_7_9_1_NEXT_ENTITY_CONCEPT.md`
- Phase-7.9.2-Implementierung Interventionen: `docs/PHASE_7_9_2_INTERVENTIONS_IMPLEMENTATION.md`
- Phase-7.9.3-Review Interventionen: `docs/PHASE_7_9_3_REVIEW_INTERVENTIONS_IMPLEMENTATION.md`
- UI-Struktur-Audit nach Interventionen: `docs/PHASE_7_UI_STRUCTURE_AUDIT_AFTER_INTERVENTIONS.md`
- Phase-7.3.2-Implementierung Evidenz: `docs/PHASE_7_3_2_EVIDENCE_IMPLEMENTATION.md`
- Phase-7.8.2-Nacharbeit Relationship-Optionswerte: `docs/PHASE_7_8_2_OPTIONS_VALUES_FIX.md`
- Phase-7.8.4 Review Relationship-Optionswerte-Nacharbeit: `docs/PHASE_7_8_4_REVIEW_RELATIONSHIP_OPTIONS_VALUES_FIX.md`

- Phase-7.4.1-Konzept nächste Entität: `docs/PHASE_7_4_1_NEXT_ENTITY_CONCEPT.md`
- Phase-7.5.1-Konzept nächste Entität: `docs/PHASE_7_5_1_NEXT_ENTITY_CONCEPT.md`

- Phase-7.7.1-Konzept nächste Entität: `docs/PHASE_7_7_1_NEXT_ENTITY_CONCEPT.md`
- Phase-7.7.2-Implementierung Beziehungen: `docs/PHASE_7_7_2_RELATIONSHIPS_IMPLEMENTATION.md`
- Phase-7.7.3-Review Beziehungen: `docs/PHASE_7_7_3_REVIEW_RELATIONSHIPS_IMPLEMENTATION.md`
- Zwischenstand-Audit nach Phase 7.7: `docs/PHASE_7_EDITABLE_ENTITIES_AUDIT_AFTER_7_7.md`
- Phase-7.8.1 Relationship-Schema-Harmonisierung: `docs/PHASE_7_8_1_RELATIONSHIP_SCHEMA_HARMONIZATION_CONCEPT.md`
- Phase-7.8.2 Relationship-Schema-Harmonisierung: `docs/PHASE_7_8_2_RELATIONSHIP_SCHEMA_HARMONIZATION_IMPLEMENTATION.md`

- Phase-5.14-Statusmeldungen werden durch `src/features/scenarios/export/createJsonDownloadStatusMessage.js` vorbereitet.


In Phase 7.5.2 wurden Ressourcen im lokalen Draft minimal bearbeitbar ergänzt (Add/Update/Remove, Basis-a11y, Status-/Hilfetexte, Tests), weiterhin ohne Speicherung, LocalStorage, Backend oder Simulation.

In Phase 7.6.1 wurde nach Annahmen, Evidenz, Personas und Ressourcen die nächste Entität für den lokalen Draft-Ausbau verbindlich ausgewählt: Phasen. Die Phase bleibt rein konzeptionell; es wurden keine Implementierung, keine UI, keine Utilities, keine Tests und keine Speicher-/Backend-/Simulationsanbindung ergänzt.


In Phase 7.7.2 wurden Beziehungen im lokalen Draft minimal bearbeitbar ergänzt (Add/Update/Remove, Basis-a11y, Status-/Hilfetexte, Tests), weiterhin ohne Speicherung, LocalStorage, Backend oder Simulation.


Aktueller Status:
Phase 7.8.4 · Review der Relationship-Optionswerte-Nacharbeit abgeschlossen

In Phase 7.7.3 wurde die Beziehungen-Implementierung fachlich geprüft und freigegeben.

In Phase 7.8.4 wurde die Nacharbeit zu den Relationship-Optionswerten geprüft und freigegeben. Der in Phase 7.8.3 dokumentierte Blocker ist behoben.



In Phase 7.9.2 wurden Interventionen im lokalen Draft minimal bearbeitbar ergänzt (Add/Update/Remove, Basis-a11y, Status-/Hilfetexte, Tests), weiterhin ohne Speicherung, LocalStorage, Backend, Aufgabensteuerung oder Simulation.

In Phase 7.9.3 wurde die Interventionen-Implementierung fachlich geprüft und freigegeben.


- Phase-10.1 Browserlokale Speicherung des aktuellen Drafts: docs/PHASE_10_1_LOCALSTORAGE_CURRENT_DRAFT_IMPLEMENTATION.md


Aktueller Status: Phase 10.2 · Review der browserlokalen Draft-Speicherung abgeschlossen.

- Phase-10.2 Review browserlokale Draft-Speicherung: `docs/PHASE_10_2_REVIEW_BROWSER_LOCAL_DRAFT_PERSISTENCE.md`

Hinweis: In Phase 10.2 wurde die browserlokale Draft-Speicherung aus Phase 10.1 geprüft. Der aktuelle Draft wird browserlokal via localStorage gespeichert; Backend, Accounts, Sync, Mehrszenario-Verwaltung, API und OpenAI-/LLM-Anbindung bleiben ausgeschlossen. Die Funktion ist als MVP-Nutzwert freigegeben, sollte aber in einer kurzen Nachschärfungsphase testseitig und initialisierungsseitig gehärtet werden.
