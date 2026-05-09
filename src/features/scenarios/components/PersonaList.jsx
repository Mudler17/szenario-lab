import ScenarioSection from './ScenarioSection';

function PersonaList({ personas }) {
  if (!Array.isArray(personas) || personas.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Personas">
      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>
            <strong>{persona.name}</strong> ({persona.role}) – {persona.perspective}
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default PersonaList;
