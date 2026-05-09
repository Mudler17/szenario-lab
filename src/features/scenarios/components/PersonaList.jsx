function PersonaList({ personas }) {
  if (!Array.isArray(personas) || personas.length === 0) {
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
