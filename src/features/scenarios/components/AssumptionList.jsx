function AssumptionList({ assumptions }) {
  if (!Array.isArray(assumptions) || assumptions.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Annahmen</h3>
      <ul>
        {assumptions.map((assumption) => (
          <li key={assumption.id}>
            {assumption.name} (Unsicherheit: {assumption.uncertainty})
          </li>
        ))}
      </ul>
    </>
  );
}

export default AssumptionList;
