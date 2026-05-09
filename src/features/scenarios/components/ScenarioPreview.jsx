function ScenarioPreview({ scenario }) {
  if (!scenario) {
    return null;
  }

  return (
    <section className="scenario-preview" aria-label="Beispielszenario Vorschau">
      <h2>{scenario.name}</h2>
      <p>{scenario.description}</p>

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

      <h3>Personas</h3>
      <ul>
        {scenario.personas.map((persona) => (
          <li key={persona.id}>
            <strong>{persona.name}</strong> ({persona.role}) – {persona.perspective}
          </li>
        ))}
      </ul>

      <h3>Phasen</h3>
      <ul>
        {scenario.phases.map((phase) => (
          <li key={phase.id}>
            {phase.order}. <strong>{phase.name}</strong>: {phase.goal}
          </li>
        ))}
      </ul>

      <h3>Annahmen</h3>
      <ul>
        {scenario.assumptions.map((assumption) => (
          <li key={assumption.id}>
            {assumption.name} (Unsicherheit: {assumption.uncertainty})
          </li>
        ))}
      </ul>

      <h3>Strategien</h3>
      <ul>
        {scenario.strategies.map((strategy) => (
          <li key={strategy.id}>
            <strong>{strategy.name}</strong>: {strategy.guidingLogic}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ScenarioPreview;
