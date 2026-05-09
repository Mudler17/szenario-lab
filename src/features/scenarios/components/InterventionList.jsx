function InterventionList({ interventions }) {
  if (!Array.isArray(interventions) || interventions.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Interventionen</h3>
      <ul>
        {interventions.map((intervention) => (
          <li key={intervention.id}>
            <strong>{intervention.name}</strong>: {intervention.goal}
          </li>
        ))}
      </ul>
    </>
  );
}

export default InterventionList;
