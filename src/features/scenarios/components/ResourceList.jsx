import ScenarioSection from './ScenarioSection';

function ResourceList({ resources }) {
  if (!Array.isArray(resources) || resources.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Ressourcen">
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <strong>{resource.name}</strong> ({resource.type}) – {resource.description}
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default ResourceList;
