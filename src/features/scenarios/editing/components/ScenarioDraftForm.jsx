function ScenarioDraftForm({ scenario, onNameChange }) {
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
    </section>
  );
}

export default ScenarioDraftForm;
