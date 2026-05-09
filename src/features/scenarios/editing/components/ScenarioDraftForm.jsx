function ScenarioDraftForm({
  scenario,
  validation,
  onNameChange,
  onDescriptionChange,
  onGoalChange,
}) {
  if (!scenario) {
    return null;
  }

  const nameError = validation?.name;
  const descriptionError = validation?.description;
  const goalError = validation?.goal;

  return (
    <section aria-label="Szenario-Draft bearbeiten">
      <fieldset>
        <legend>Szenario-Grunddaten</legend>

        <p>Pflege hier die zentralen Angaben für das Szenario.</p>

        <div>
          <label htmlFor="scenario-draft-name">Szenario-Name</label>
          <p id="scenario-draft-name-help">Kurzer, eindeutiger Titel des Szenarios.</p>
          <input
            id="scenario-draft-name"
            name="scenarioName"
            type="text"
            aria-describedby="scenario-draft-name-help"
            aria-invalid={Boolean(nameError)}
            value={scenario.name ?? ''}
            onChange={(event) => onNameChange(event.target.value)}
          />
          {nameError ? <p role="alert">{nameError}</p> : null}
        </div>

        <div>
          <label htmlFor="scenario-draft-description">Szenario-Beschreibung</label>
          <p id="scenario-draft-description-help">Beschreibe knapp die Ausgangslage des Szenarios.</p>
          <input
            id="scenario-draft-description"
            name="scenarioDescription"
            type="text"
            aria-describedby="scenario-draft-description-help"
            aria-invalid={Boolean(descriptionError)}
            value={scenario.description ?? ''}
            onChange={(event) => onDescriptionChange(event.target.value)}
          />
          {descriptionError ? <p role="alert">{descriptionError}</p> : null}
        </div>

        <div>
          <label htmlFor="scenario-draft-goal">Szenario-Ziel</label>
          <p id="scenario-draft-goal-help">Definiere, was mit dem Szenario erreicht werden soll.</p>
          <input
            id="scenario-draft-goal"
            name="scenarioGoal"
            type="text"
            aria-describedby="scenario-draft-goal-help"
            aria-invalid={Boolean(goalError)}
            value={scenario.goal ?? ''}
            onChange={(event) => onGoalChange(event.target.value)}
          />
          {goalError ? <p role="alert">{goalError}</p> : null}
        </div>
      </fieldset>
    </section>
  );
}

export default ScenarioDraftForm;
