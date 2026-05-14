import { getDraftResources } from '../state';

const RESOURCE_TYPE_OPTIONS = ['staff', 'time', 'budget', 'infrastructure', 'knowledge', 'access', 'other'];
const AVAILABILITY_OPTIONS = ['low', 'medium', 'high', 'unclear'];
const RELEVANCE_OPTIONS = ['low', 'medium', 'high'];

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

function isIncompleteResource(resource) {
  const name = typeof resource?.name === 'string' ? resource.name.trim() : '';
  const description = typeof resource?.description === 'string' ? resource.description.trim() : '';

  return name.length === 0 || description.length === 0;
}

export default function ResourceDraftForm({ scenarioDraft, onAddResource, onUpdateResource, onRemoveResource }) {
  const resources = getDraftResources(scenarioDraft);

  return (
    <section aria-label="Ressourcen im lokalen Draft">
      <h3>Ressourcen</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      {resources.length === 0 ? (
        <>
          <p>Noch keine Ressourcen im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddResource}>Ressource hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {resources.map((resource, index) => {
              const resourceId = typeof resource?.id === 'string' && resource.id.trim().length > 0 ? resource.id : `resource-${index}`;
              const hasValidId = typeof resource?.id === 'string' && resource.id.trim().length > 0;
              return (
                <li key={resourceId}>
                  <article>
                    <h4>Ressource {index + 1}</h4>
                    {isIncompleteResource(resource) ? <p>Unvollständige Ressource</p> : null}
                    {!hasValidId ? <p>Ressource ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`resource-name-${resourceId}`}>Name</label>
                    <input id={`resource-name-${resourceId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(resource.name)} onChange={(event) => onUpdateResource(resourceId, { name: event.target.value })} />

                    <label htmlFor={`resource-type-${resourceId}`}>Typ</label>
                    <select id={`resource-type-${resourceId}`} disabled={!hasValidId} value={normalizeFieldValue(resource.type) || 'other'} onChange={(event) => onUpdateResource(resourceId, { type: event.target.value })}>
                      {RESOURCE_TYPE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`resource-description-${resourceId}`}>Beschreibung</label>
                    <textarea id={`resource-description-${resourceId}`} disabled={!hasValidId} value={normalizeFieldValue(resource.description)} onChange={(event) => onUpdateResource(resourceId, { description: event.target.value })} />

                    <label htmlFor={`resource-availability-${resourceId}`}>Verfügbarkeit</label>
                    <select id={`resource-availability-${resourceId}`} disabled={!hasValidId} value={normalizeFieldValue(resource.availability) || 'unclear'} onChange={(event) => onUpdateResource(resourceId, { availability: event.target.value })}>
                      {AVAILABILITY_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`resource-relevance-${resourceId}`}>Relevanz</label>
                    <select id={`resource-relevance-${resourceId}`} disabled={!hasValidId} value={normalizeFieldValue(resource.relevance) || 'medium'} onChange={(event) => onUpdateResource(resourceId, { relevance: event.target.value })}>
                      {RELEVANCE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`resource-constraints-${resourceId}`}>Einschränkungen</label>
                    <textarea id={`resource-constraints-${resourceId}`} disabled={!hasValidId} value={normalizeFieldValue(resource.constraints)} onChange={(event) => onUpdateResource(resourceId, { constraints: event.target.value })} />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemoveResource(resourceId)}>Ressource entfernen</button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddResource}>Ressource hinzufügen</button>
        </>
      )}
    </section>
  );
}
