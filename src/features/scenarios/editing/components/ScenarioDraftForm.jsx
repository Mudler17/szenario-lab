function ScenarioDraftForm({ scenario, onNameChange, onDescriptionChange }) {
  if (!scenario) {
    return null;
  }

  return (
    <section aria-label="Szenario-Draft bearbeiten">
      <label htmlFor="scenario-draft-name">Szenario-Name</label>
      <input
        id="scenario-draft-name"
        name="scenarioName"
        type="text"
        value={scenario.name ?? ''}
        onChange={(event) => onNameChange(event.target.value)}
      />
      <label htmlFor="scenario-draft-description">Szenario-Beschreibung</label>
      <input
        id="scenario-draft-description"
        name="scenarioDescription"
        type="text"
        value={scenario.description ?? ''}
        onChange={(event) => onDescriptionChange(event.target.value)}
      />
    </section>
  );
}

export default ScenarioDraftForm;
