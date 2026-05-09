function PhaseList({ phases }) {
  if (!Array.isArray(phases) || phases.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Phasen</h3>
      <ul>
        {phases.map((phase) => (
          <li key={phase.id}>
            {phase.order}. <strong>{phase.name}</strong>: {phase.goal}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PhaseList;
