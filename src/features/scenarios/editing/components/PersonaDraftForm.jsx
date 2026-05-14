import { getDraftPersonas } from '../state';

const INFLUENCE_OPTIONS = ['low', 'medium', 'high'];

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

function isIncompletePersona(persona) {
  const name = typeof persona?.name === 'string' ? persona.name.trim() : '';
  const role = typeof persona?.role === 'string' ? persona.role.trim() : '';

  return name.length === 0 || role.length === 0;
}

export default function PersonaDraftForm({
  scenarioDraft,
  onAddPersona,
  onUpdatePersona,
  onRemovePersona,
}) {
  const personas = getDraftPersonas(scenarioDraft);

  return (
    <section aria-label="Personas im lokalen Draft">
      <h3>Personas</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      {personas.length === 0 ? (
        <>
          <p>Noch keine Personas im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddPersona}>Persona hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {personas.map((persona, index) => {
              const personaId = typeof persona?.id === 'string' && persona.id.trim().length > 0
                ? persona.id
                : `persona-${index}`;
              const hasValidId = typeof persona?.id === 'string' && persona.id.trim().length > 0;

              return (
                <li key={personaId}>
                  <article>
                    <h4>Persona {index + 1}</h4>
                    {isIncompletePersona(persona) ? <p>Unvollständige Persona</p> : null}
                    {!hasValidId ? <p>Persona ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`persona-name-${personaId}`}>Name</label>
                    <input id={`persona-name-${personaId}`} disabled={!hasValidId} type="text" value={normalizeFieldValue(persona.name)} onChange={(event) => onUpdatePersona(personaId, { name: event.target.value })} />

                    <label htmlFor={`persona-role-${personaId}`}>Rolle</label>
                    <input id={`persona-role-${personaId}`} disabled={!hasValidId} type="text" value={normalizeFieldValue(persona.role)} onChange={(event) => onUpdatePersona(personaId, { role: event.target.value })} />

                    <label htmlFor={`persona-perspective-${personaId}`}>Perspektive</label>
                    <textarea id={`persona-perspective-${personaId}`} disabled={!hasValidId} value={normalizeFieldValue(persona.perspective)} onChange={(event) => onUpdatePersona(personaId, { perspective: event.target.value })} />

                    <label htmlFor={`persona-needs-${personaId}`}>Bedürfnisse</label>
                    <textarea id={`persona-needs-${personaId}`} disabled={!hasValidId} value={normalizeFieldValue(persona.needs)} onChange={(event) => onUpdatePersona(personaId, { needs: event.target.value })} />

                    <label htmlFor={`persona-influence-${personaId}`}>Einfluss</label>
                    <select id={`persona-influence-${personaId}`} disabled={!hasValidId} value={normalizeFieldValue(persona.influence) || 'medium'} onChange={(event) => onUpdatePersona(personaId, { influence: event.target.value })}>
                      {INFLUENCE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`persona-constraints-${personaId}`}>Einschränkungen</label>
                    <textarea id={`persona-constraints-${personaId}`} disabled={!hasValidId} value={normalizeFieldValue(persona.constraints)} onChange={(event) => onUpdatePersona(personaId, { constraints: event.target.value })} />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemovePersona(personaId)}>Persona entfernen</button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddPersona}>Persona hinzufügen</button>
        </>
      )}
    </section>
  );
}
