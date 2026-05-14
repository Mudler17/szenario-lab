import { useMemo, useState } from 'react';
import { exampleScenario } from '../domain';
import { ScenarioDraftForm, AssumptionDraftForm } from '../features/scenarios/editing';
import {
  createDraftFromScenario,
  resetDraft,
  updateScenarioDraftField,
  validateScenarioDraftBasics,
} from '../features/scenarios/editing/state';
import ScenarioPreview from '../features/scenarios/components/ScenarioPreview';
import {
  createScenarioExportDraft,
  downloadScenarioExport,
  createJsonDownloadStatusMessage,
} from '../features/scenarios/export';
import {
  createJsonImportStatusMessage,
  parseScenarioImportJsonText,
} from '../features/scenarios/import';

function HomePage() {
  const originalScenario = useMemo(() => exampleScenario, []);
  const initialDraft = useMemo(() => createDraftFromScenario(originalScenario), [originalScenario]);
  const [scenarioDraft, setScenarioDraft] = useState(() => initialDraft);
  const [scenarioValidation, setScenarioValidation] = useState(() =>
    validateScenarioDraftBasics(initialDraft),
  );
  const [downloadStatus, setDownloadStatus] = useState(() =>
    createJsonDownloadStatusMessage(),
  );
  const [selectedImportFile, setSelectedImportFile] = useState(null);
  const [importResult, setImportResult] = useState(null);
  const [importStatus, setImportStatus] = useState(() => ({
    type: 'info',
    message: 'Bitte wähle eine JSON-Datei für die Prüfung aus.',
  }));

  const handleResetDraft = () => {
    const resetScenario = resetDraft(originalScenario);
    setScenarioDraft(resetScenario);
    setScenarioValidation(validateScenarioDraftBasics(resetScenario));
    setDownloadStatus(createJsonDownloadStatusMessage());
  };

  const updateDraftField = (fieldName, value) => {
    setScenarioDraft((currentDraft) => {
      const nextDraft = updateScenarioDraftField(currentDraft, fieldName, value);
      setScenarioValidation(validateScenarioDraftBasics(nextDraft));
      setDownloadStatus(createJsonDownloadStatusMessage());
      return nextDraft;
    });
  };

  const handleDownloadJson = () => {
    const exportDraft = createScenarioExportDraft(scenarioDraft);
    const result = downloadScenarioExport(exportDraft);
    setDownloadStatus(createJsonDownloadStatusMessage(result));
  };

  const handleImportFileChange = (event) => {
    const [nextFile] = event.target.files ?? [];

    if (!nextFile) {
      setSelectedImportFile(null);
      setImportResult(null);
      setImportStatus({
        type: 'info',
        message: 'Bitte wähle eine JSON-Datei für die Prüfung aus.',
      });
      return;
    }

    setSelectedImportFile(nextFile);
    setImportResult(null);
    setImportStatus({
      type: 'info',
      message: 'Datei ausgewählt. Prüfe die Datei jetzt mit „JSON prüfen“.',
    });
  };

  const handleValidateImportJson = () => {
    if (!selectedImportFile) {
      setImportResult(null);
      setImportStatus({
        type: 'info',
        message: 'Bitte wähle zuerst eine JSON-Datei aus.',
      });
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const fileText = typeof fileReader.result === 'string' ? fileReader.result : '';
      const nextImportResult = parseScenarioImportJsonText(fileText);
      setImportResult(nextImportResult);
      setImportStatus(createJsonImportStatusMessage(nextImportResult));
    };

    fileReader.onerror = () => {
      const nextImportResult = { ok: false, reason: 'file-read-error' };
      setImportResult(nextImportResult);
      setImportStatus({
        type: 'error',
        message: 'Die Datei konnte nicht gelesen werden.',
      });
    };

    fileReader.readAsText(selectedImportFile);
  };


  const handleAdoptValidatedImport = () => {
    if (importResult?.ok !== true || !importResult.scenario) {
      setImportStatus({
        type: 'error',
        message: 'Dieses Szenario kann nicht übernommen werden, weil die Prüfung fehlgeschlagen ist.',
      });
      return;
    }

    const nextDraft = createDraftFromScenario(importResult.scenario);
    setScenarioDraft(nextDraft);
    setScenarioValidation(validateScenarioDraftBasics(nextDraft));
    setImportStatus({
      type: 'success',
      message:
        'Das geprüfte Szenario wurde in den lokalen Draft übernommen. Es wurde nicht gespeichert.',
    });
    setDownloadStatus(createJsonDownloadStatusMessage());
  };

  const handleScenarioNameChange = (nextName) => {
    updateDraftField('name', nextName);
  };

  const handleScenarioDescriptionChange = (nextDescription) => {
    updateDraftField('description', nextDescription);
  };

  const handleScenarioGoalChange = (nextGoal) => {
    updateDraftField('goal', nextGoal);
  };

  return (
    <main className="page">
      <section className="hero">
        <h1>szenario-lab</h1>
        <p className="subtitle">Organisationsszenarien strukturiert modellieren</p>
        <p className="phase-note">Lokaler Draft · Bearbeitung, Vorschau, JSON-Download und JSON-Importprüfung ohne App-Speicherung</p>
      </section>

      <section className="placeholder-grid" aria-label="Module in Vorbereitung">
        <article className="placeholder-card">
          <h2>Szenarien</h2>
          <p>Platzhalter</p>
        </article>
        <article className="placeholder-card">
          <h2>Simulation</h2>
          <p>Platzhalter</p>
        </article>
        <article className="placeholder-card">
          <h2>Report</h2>
          <p>Platzhalter</p>
        </article>
      </section>

      <section className="workspace-grid" aria-label="Lokaler Szenario-Entwurf und Vorschau">
        <section className="workspace-panel editor-panel" aria-label="Bearbeitung">
          <h2>Bearbeitung</h2>
          <p className="workspace-hint">
            Aktiver Modus: <strong>Lokaler Draft</strong> (nicht gespeichert)
          </p>
          <ScenarioDraftForm
            scenario={scenarioDraft}
            validation={scenarioValidation}
            onNameChange={handleScenarioNameChange}
            onDescriptionChange={handleScenarioDescriptionChange}
            onGoalChange={handleScenarioGoalChange}
          />
          <AssumptionDraftForm scenarioDraft={scenarioDraft} />
          <button type="button" onClick={handleResetDraft}>
            Draft auf Original zurücksetzen
          </button>

          <section className="export-panel" aria-label="JSON-Download">
            <h3>JSON-Download</h3>
            <p className="workspace-hint">
              Lädt den aktuellen lokalen Draft als JSON-Datei auf dein Gerät herunter. Dies ist keine Speicherung in der App.
            </p>
            <p className="workspace-hint">
              Prüfe vor dem Download, ob der Entwurf personenbezogene oder vertrauliche Informationen enthält.
            </p>
            <button type="button" onClick={handleDownloadJson}>
              JSON herunterladen
            </button>
            <p
              className={`download-status download-status-${downloadStatus.type}`}
              role="status"
              aria-live="polite"
            >
              {downloadStatus.message}
            </p>
          </section>

          <section className="export-panel" aria-label="JSON-Import prüfen">
            <h3>JSON-Import prüfen</h3>
            <p className="workspace-hint">
              Die Datei wird nur lokal geprüft. Der aktuelle Draft wird dadurch nicht ersetzt.
            </p>
            <label htmlFor="json-import-file">JSON-Datei für Import auswählen</label>
            <input
              id="json-import-file"
              type="file"
              accept="application/json,.json"
              onChange={handleImportFileChange}
            />
            <button
              type="button"
              onClick={handleValidateImportJson}
              disabled={!selectedImportFile}
            >
              JSON prüfen
            </button>
            <p
              className={`download-status download-status-${importStatus.type}`}
              role="status"
              aria-live="polite"
            >
              {importStatus.message}
            </p>
            {importResult?.ok === true ? (
              <div className="import-adoption-notice" aria-label="Import-Übernahmehinweis">
                <p>Diese Aktion ersetzt den aktuellen lokalen Draft. Es wird nichts in der App gespeichert.</p>
                {Array.isArray(importResult.warnings) && importResult.warnings.length > 0 ? (
                  <p>Die Datei ist gültig, enthält aber zusätzliche Felder. Diese Felder werden derzeit nicht ausgewertet.</p>
                ) : null}
                <button type="button" onClick={handleAdoptValidatedImport}>
                  Geprüftes Szenario in lokalen Draft übernehmen
                </button>
              </div>
            ) : (
              <p className="workspace-hint">
                Dieses Szenario kann erst übernommen werden, wenn die Prüfung erfolgreich war.
              </p>
            )}          </section>
        </section>

        <section className="workspace-panel preview-panel" aria-label="Vorschau">
          <h2>Vorschau</h2>
          <p className="workspace-hint">Die Vorschau aktualisiert sich direkt aus dem lokalen Draft.</p>
          <ScenarioPreview scenario={scenarioDraft} />
        </section>
      </section>
    </main>
  );
}

export default HomePage;
