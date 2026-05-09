import { exampleScenario } from '../domain';

function ScenarioPreview() {
  return (
    <section className="scenario-preview" aria-label="Beispielszenario Vorschau">
      <h2>{exampleScenario.name}</h2>
      <p>{exampleScenario.description}</p>

      <h3>Zusammenfassung</h3>
      <ul>
        <li>Personas: {exampleScenario.personas.length}</li>
        <li>Ressourcen: {exampleScenario.resources.length}</li>
        <li>Phasen: {exampleScenario.phases.length}</li>
        <li>Annahmen: {exampleScenario.assumptions.length}</li>
        <li>Beziehungen: {exampleScenario.relationships.length}</li>
        <li>Interventionen: {exampleScenario.interventions.length}</li>
        <li>Strategien: {exampleScenario.strategies.length}</li>
      </ul>

      <h3>Personas</h3>
      <ul>
        {exampleScenario.personas.map((persona) => (
          <li key={persona.id}>
            <strong>{persona.name}</strong> ({persona.role}) – {persona.perspective}
          </li>
        ))}
      </ul>

      <h3>Phasen</h3>
      <ul>
        {exampleScenario.phases.map((phase) => (
          <li key={phase.id}>
            {phase.order}. <strong>{phase.name}</strong>: {phase.goal}
          </li>
        ))}
      </ul>

      <h3>Annahmen</h3>
      <ul>
        {exampleScenario.assumptions.map((assumption) => (
          <li key={assumption.id}>
            {assumption.name} (Unsicherheit: {assumption.uncertainty})
          </li>
        ))}
      </ul>

      <h3>Strategien</h3>
      <ul>
        {exampleScenario.strategies.map((strategy) => (
          <li key={strategy.id}>
            <strong>{strategy.name}</strong>: {strategy.guidingLogic}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ScenarioPreview;
