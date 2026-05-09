function AssumptionList({ assumptions }) {
  if (!assumptions) {
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
