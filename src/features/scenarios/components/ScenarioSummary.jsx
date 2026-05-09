function ScenarioSummary({ scenario }) {
  if (!scenario) {
    return null;
  }

  return (
    <>
      <h3>Zusammenfassung</h3>
      <ul>
        <li>Personas: {scenario.personas.length}</li>
        <li>Ressourcen: {scenario.resources.length}</li>
        <li>Phasen: {scenario.phases.length}</li>
        <li>Annahmen: {scenario.assumptions.length}</li>
        <li>Beziehungen: {scenario.relationships.length}</li>
        <li>Interventionen: {scenario.interventions.length}</li>
        <li>Strategien: {scenario.strategies.length}</li>
      </ul>
    </>
  );
}

export default ScenarioSummary;
