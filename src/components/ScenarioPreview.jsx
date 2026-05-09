import { exampleScenario } from '../domain';

function ScenarioPreview() {
  return (
    <section className="scenario-preview" aria-label="Beispielszenario Vorschau">
      <h2>{exampleScenario.name}</h2>
      <p>{exampleScenario.description}</p>
      <ul>
        <li>Anzahl Personas: {exampleScenario.personas.length}</li>
        <li>Anzahl Ressourcen: {exampleScenario.resources.length}</li>
        <li>Anzahl Phasen: {exampleScenario.phases.length}</li>
        <li>Anzahl Annahmen: {exampleScenario.assumptions.length}</li>
        <li>Anzahl Beziehungen: {exampleScenario.relationships.length}</li>
        <li>Anzahl Interventionen: {exampleScenario.interventions.length}</li>
        <li>Anzahl Strategien: {exampleScenario.strategies.length}</li>
      </ul>
    </section>
  );
}

export default ScenarioPreview;
