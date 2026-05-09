import ScenarioSection from './ScenarioSection';

function PhaseList({ phases }) {
  if (!Array.isArray(phases) || phases.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Phasen">
      <ul>
        {phases.map((phase) => (
          <li key={phase.id}>
            {phase.order}. <strong>{phase.name}</strong>: {phase.goal}
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default PhaseList;
