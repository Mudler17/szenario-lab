import ScenarioSection from './ScenarioSection';

function AssumptionList({ assumptions }) {
  if (!Array.isArray(assumptions) || assumptions.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Annahmen">
      <ul>
        {assumptions.map((assumption) => (
          <li key={assumption.id}>
            {assumption.name} (Unsicherheit: {assumption.uncertainty})
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default AssumptionList;
