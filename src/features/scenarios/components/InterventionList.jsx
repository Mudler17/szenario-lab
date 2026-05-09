import ScenarioSection from './ScenarioSection';

function InterventionList({ interventions }) {
  if (!Array.isArray(interventions) || interventions.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Interventionen">
      <ul>
        {interventions.map((intervention) => (
          <li key={intervention.id}>
            <strong>{intervention.name}</strong>: {intervention.goal}
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default InterventionList;
