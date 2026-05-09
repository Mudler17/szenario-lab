function PersonaList({ personas }) {
  if (!personas) {
    return null;
  }

  return (
    <>
      <h3>Personas</h3>
      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>
            <strong>{persona.name}</strong> ({persona.role}) – {persona.perspective}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PersonaList;
