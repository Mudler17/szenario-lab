import ScenarioSection from './ScenarioSection';

function ScenarioSummary({ scenario }) {
  if (!scenario) {
    return null;
  }

  const personas = Array.isArray(scenario.personas) ? scenario.personas : [];
  const resources = Array.isArray(scenario.resources) ? scenario.resources : [];
  const phases = Array.isArray(scenario.phases) ? scenario.phases : [];
  const assumptions = Array.isArray(scenario.assumptions) ? scenario.assumptions : [];
  const relationships = Array.isArray(scenario.relationships) ? scenario.relationships : [];
  const evidence = Array.isArray(scenario.evidence) ? scenario.evidence : [];
  const interventions = Array.isArray(scenario.interventions) ? scenario.interventions : [];
  const strategies = Array.isArray(scenario.strategies) ? scenario.strategies : [];

  if (
    personas.length === 0 &&
    resources.length === 0 &&
    phases.length === 0 &&
    assumptions.length === 0 &&
    relationships.length === 0 &&
    evidence.length === 0 &&
    interventions.length === 0 &&
    strategies.length === 0
  ) {
    return null;
  }

  return (
    <ScenarioSection title="Zusammenfassung">
      <ul>
        <li>Personas: {personas.length}</li>
        <li>Ressourcen: {resources.length}</li>
        <li>Phasen: {phases.length}</li>
        <li>Annahmen: {assumptions.length}</li>
        <li>Beziehungen: {relationships.length}</li>
        <li>Evidenz: {evidence.length}</li>
        <li>Interventionen: {interventions.length}</li>
        <li>Strategien: {strategies.length}</li>
      </ul>
    </ScenarioSection>
  );
}

export default ScenarioSummary;
