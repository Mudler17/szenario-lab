function RelationshipList({ relationships }) {
  if (!Array.isArray(relationships) || relationships.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Beziehungen</h3>
      <ul>
        {relationships.map((relationship) => (
          <li key={relationship.id}>
            <strong>Von:</strong> {relationship.from} · <strong>Zu:</strong> {relationship.to} ·{' '}
            <strong>Vertrauen:</strong> {relationship.trust} · <strong>Spannung:</strong>{' '}
            {relationship.tension} · <strong>Einfluss:</strong> {relationship.influence}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RelationshipList;
