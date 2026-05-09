function RelationshipList({ relationships, personas }) {
  if (!Array.isArray(relationships) || relationships.length === 0) {
    return null;
  }

  const personaNameById = new Map(
    (Array.isArray(personas) ? personas : []).map((persona) => [persona.id, persona.name]),
  );

  const displayPersona = (personaId) => personaNameById.get(personaId) ?? personaId;

  return (
    <>
      <h3>Beziehungen</h3>
      <ul>
        {relationships.map((relationship) => (
          <li key={relationship.id}>
            <strong>Von:</strong> {displayPersona(relationship.from)} · <strong>Zu:</strong>{' '}
            {displayPersona(relationship.to)} · <strong>Vertrauen:</strong> {relationship.trust} ·{' '}
            <strong>Spannung:</strong> {relationship.tension} · <strong>Einfluss:</strong>{' '}
            {relationship.influence}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RelationshipList;
