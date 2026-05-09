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

function HomePage() {
  const originalScenario = useMemo(() => exampleScenario, []);
  const initialDraft = useMemo(() => createDraftFromScenario(originalScenario), [originalScenario]);
  const [scenarioDraft, setScenarioDraft] = useState(() => initialDraft);
  const [scenarioValidation, setScenarioValidation] = useState(() =>
    validateScenarioDraftBasics(initialDraft),
  );

  const handleResetDraft = () => {
    const resetScenario = resetDraft(originalScenario);
    setScenarioDraft(resetScenario);
    setScenarioValidation(validateScenarioDraftBasics(resetScenario));
  };

  const updateDraftField = (fieldName, value) => {
    setScenarioDraft((currentDraft) => {
      const nextDraft = updateScenarioDraftField(currentDraft, fieldName, value);
      setScenarioValidation(validateScenarioDraftBasics(nextDraft));
      return nextDraft;
    });
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
        <p className="phase-note">Phase 4.8 · Bearbeitungsbereich und Vorschau visuell klarer getrennt</p>
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
