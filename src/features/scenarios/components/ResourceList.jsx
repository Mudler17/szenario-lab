function ResourceList({ resources }) {
  if (!Array.isArray(resources) || resources.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Ressourcen</h3>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <strong>{resource.name}</strong> ({resource.type}) – {resource.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResourceList;
