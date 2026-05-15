import ScenarioSection from './ScenarioSection';

function RelationshipList({ relationships, personas }) {
  if (!Array.isArray(relationships) || relationships.length === 0) {
    return null;
  }

  const personaNameById = new Map(
    (Array.isArray(personas) ? personas : []).map((persona) => [persona.id, persona.name]),
  );

  const displayPersona = (personaId) => personaNameById.get(personaId) ?? personaId;

  return (
    <ScenarioSection title="Beziehungen">
      <ul>
        {relationships.map((relationship) => {
          const sourceId = relationship.sourceId ?? relationship.from;
          const targetId = relationship.targetId ?? relationship.to;

          return (
            <li key={relationship.id}>
              <strong>Von:</strong> {displayPersona(sourceId)} · <strong>Zu:</strong>{' '}
              {displayPersona(targetId)} · <strong>Typ:</strong> {relationship.type} ·{' '}
              <strong>Beschreibung:</strong> {relationship.description} · <strong>Stärke:</strong>{' '}
              {relationship.strength} · <strong>Qualität:</strong> {relationship.quality} ·{' '}
              <strong>Risiken:</strong> {relationship.risks}
            </li>
          );
        })}
      </ul>
    </ScenarioSection>
  );
}

export default RelationshipList;
