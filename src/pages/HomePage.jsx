import { useMemo, useState } from 'react';
import { exampleScenario } from '../domain';
import { ScenarioDraftForm } from '../features/scenarios/editing';
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
        <p className="phase-note">Lokaler Draft · Bearbeitung, Vorschau und JSON-Download ohne App-Speicherung</p>
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
