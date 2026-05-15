import { getDraftRelationships } from '../state';

const TYPE_OPTIONS = ['communication', 'dependency', 'influence', 'conflict', 'support', 'unclear'];
const STRENGTH_OPTIONS = ['low', 'medium', 'high', 'unclear'];
const QUALITY_OPTIONS = ['supportive', 'neutral', 'strained', 'unclear'];

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

function isIncompleteRelationship(relationship) {
  const sourceId = typeof relationship?.sourceId === 'string' ? relationship.sourceId.trim() : '';
  const targetId = typeof relationship?.targetId === 'string' ? relationship.targetId.trim() : '';
  const description = typeof relationship?.description === 'string' ? relationship.description.trim() : '';

  return sourceId.length === 0 || targetId.length === 0 || description.length === 0;
}

export default function RelationshipDraftForm({
  scenarioDraft,
  onAddRelationship,
  onUpdateRelationship,
  onRemoveRelationship,
}) {
  const relationships = getDraftRelationships(scenarioDraft);

  return (
    <section aria-label="Beziehungen im lokalen Draft">
      <h3>Beziehungen</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      <p>Beziehungen beschreiben Verbindungen, keine Netzwerkanalyse und keine Simulation.</p>
      {relationships.length === 0 ? (
        <>
          <p>Noch keine Beziehungen im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddRelationship}>Beziehung hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {relationships.map((relationship, index) => {
              const relationshipId = typeof relationship?.id === 'string' && relationship.id.trim().length > 0
                ? relationship.id
                : `relationship-${index}`;
              const hasValidId = typeof relationship?.id === 'string' && relationship.id.trim().length > 0;

              return (
                <li key={relationshipId}>
                  <article>
                    <h4>Beziehung {index + 1}</h4>
                    {isIncompleteRelationship(relationship) ? <p>Unvollständige Beziehung</p> : null}
                    {!hasValidId ? <p>Beziehung ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`relationship-sourceId-${relationshipId}`}>Quelle</label>
                    <input id={`relationship-sourceId-${relationshipId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(relationship.sourceId)} onChange={(event) => onUpdateRelationship(relationshipId, { sourceId: event.target.value })} />

                    <label htmlFor={`relationship-targetId-${relationshipId}`}>Ziel</label>
                    <input id={`relationship-targetId-${relationshipId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(relationship.targetId)} onChange={(event) => onUpdateRelationship(relationshipId, { targetId: event.target.value })} />

                    <label htmlFor={`relationship-type-${relationshipId}`}>Typ</label>
                    <select id={`relationship-type-${relationshipId}`} disabled={!hasValidId} value={normalizeFieldValue(relationship.type) || 'unclear'} onChange={(event) => onUpdateRelationship(relationshipId, { type: event.target.value })}>
                      {TYPE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`relationship-description-${relationshipId}`}>Beschreibung</label>
                    <textarea id={`relationship-description-${relationshipId}`} disabled={!hasValidId} value={normalizeFieldValue(relationship.description)} onChange={(event) => onUpdateRelationship(relationshipId, { description: event.target.value })} />

                    <label htmlFor={`relationship-strength-${relationshipId}`}>Stärke</label>
                    <select id={`relationship-strength-${relationshipId}`} disabled={!hasValidId} value={normalizeFieldValue(relationship.strength) || 'unclear'} onChange={(event) => onUpdateRelationship(relationshipId, { strength: event.target.value })}>
                      {STRENGTH_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`relationship-quality-${relationshipId}`}>Qualität</label>
                    <select id={`relationship-quality-${relationshipId}`} disabled={!hasValidId} value={normalizeFieldValue(relationship.quality) || 'unclear'} onChange={(event) => onUpdateRelationship(relationshipId, { quality: event.target.value })}>
                      {QUALITY_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`relationship-risks-${relationshipId}`}>Risiken</label>
                    <textarea id={`relationship-risks-${relationshipId}`} disabled={!hasValidId} value={normalizeFieldValue(relationship.risks)} onChange={(event) => onUpdateRelationship(relationshipId, { risks: event.target.value })} />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemoveRelationship(relationshipId)}>Beziehung entfernen</button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddRelationship}>Beziehung hinzufügen</button>
        </>
      )}
    </section>
  );
}
