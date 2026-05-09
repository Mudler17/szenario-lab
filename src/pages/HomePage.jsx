import { useMemo, useState } from 'react';
import { exampleScenario } from '../domain';
import { ScenarioDraftForm } from '../features/scenarios/editing';
import {
  createDraftFromScenario,
  resetDraft,
  updateScenarioDraftField,
} from '../features/scenarios/editing/state';
import ScenarioPreview from '../features/scenarios/components/ScenarioPreview';

function HomePage() {
  const originalScenario = useMemo(() => exampleScenario, []);
  const [scenarioDraft, setScenarioDraft] = useState(() => createDraftFromScenario(originalScenario));

  const handleResetDraft = () => {
    setScenarioDraft(resetDraft(originalScenario));
  };

  const updateDraftField = (fieldName, value) => {
    setScenarioDraft((currentDraft) => updateScenarioDraftField(currentDraft, fieldName, value));
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
        <p className="phase-note">Phase 4.4 · Lokaler Szenario-Entwurf (nur im Arbeitsspeicher)</p>
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

      <section aria-label="Lokaler Szenario-Entwurf">
        <p>
          Aktiver Modus: <strong>Lokaler Draft</strong> (nicht gespeichert)
        </p>
        <ScenarioDraftForm
          scenario={scenarioDraft}
          onNameChange={handleScenarioNameChange}
          onDescriptionChange={handleScenarioDescriptionChange}
          onGoalChange={handleScenarioGoalChange}
        />
        <button type="button" onClick={handleResetDraft}>
          Draft auf Original zurücksetzen
        </button>
      </section>

      <ScenarioPreview scenario={scenarioDraft} />
    </main>
  );
}

export default HomePage;
