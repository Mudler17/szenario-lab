import { getDraftInterventions } from '../state';

const STATUS_OPTIONS = ['idea', 'planned', 'active', 'completed', 'unclear'];

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

function isIncompleteIntervention(intervention) {
  const name = typeof intervention?.name === 'string' ? intervention.name.trim() : '';
  const goal = typeof intervention?.goal === 'string' ? intervention.goal.trim() : '';
  const description = typeof intervention?.description === 'string' ? intervention.description.trim() : '';

  return name.length === 0 || goal.length === 0 || description.length === 0;
}

export default function InterventionDraftForm({
  scenarioDraft,
  onAddIntervention,
  onUpdateIntervention,
  onRemoveIntervention,
}) {
  const interventions = getDraftInterventions(scenarioDraft);

  return (
    <section aria-label="Interventionen im lokalen Draft">
      <h3>Interventionen</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      <p>Interventionen beschreiben Handlungsoptionen, keine Aufgabensteuerung, keine Termine und keine Simulation.</p>
      {interventions.length === 0 ? (
        <>
          <p>Noch keine Interventionen im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddIntervention}>Intervention hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {interventions.map((intervention, index) => {
              const interventionId = typeof intervention?.id === 'string' && intervention.id.trim().length > 0
                ? intervention.id
                : `intervention-${index}`;
              const hasValidId = typeof intervention?.id === 'string' && intervention.id.trim().length > 0;

              return (
                <li key={interventionId}>
                  <article>
                    <h4>Intervention {index + 1}</h4>
                    {isIncompleteIntervention(intervention) ? <p>Unvollständige Intervention</p> : null}
                    {!hasValidId ? <p>Intervention ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`intervention-name-${interventionId}`}>Name</label>
                    <input id={`intervention-name-${interventionId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(intervention.name)} onChange={(event) => onUpdateIntervention(interventionId, { name: event.target.value })} />

                    <label htmlFor={`intervention-goal-${interventionId}`}>Ziel</label>
                    <textarea id={`intervention-goal-${interventionId}`} disabled={!hasValidId} value={normalizeFieldValue(intervention.goal)} onChange={(event) => onUpdateIntervention(interventionId, { goal: event.target.value })} />

                    <label htmlFor={`intervention-description-${interventionId}`}>Beschreibung</label>
                    <textarea id={`intervention-description-${interventionId}`} disabled={!hasValidId} value={normalizeFieldValue(intervention.description)} onChange={(event) => onUpdateIntervention(interventionId, { description: event.target.value })} />

                    <label htmlFor={`intervention-targetRelationshipId-${interventionId}`}>Bezug zu Beziehung</label>
                    <input id={`intervention-targetRelationshipId-${interventionId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(intervention.targetRelationshipId)} onChange={(event) => onUpdateIntervention(interventionId, { targetRelationshipId: event.target.value })} />

                    <label htmlFor={`intervention-phaseId-${interventionId}`}>Bezug zu Phase</label>
                    <input id={`intervention-phaseId-${interventionId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(intervention.phaseId)} onChange={(event) => onUpdateIntervention(interventionId, { phaseId: event.target.value })} />

                    <label htmlFor={`intervention-status-${interventionId}`}>Status</label>
                    <select id={`intervention-status-${interventionId}`} disabled={!hasValidId} value={normalizeFieldValue(intervention.status) || 'idea'} onChange={(event) => onUpdateIntervention(interventionId, { status: event.target.value })}>
                      {STATUS_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`intervention-risks-${interventionId}`}>Risiken</label>
                    <textarea id={`intervention-risks-${interventionId}`} disabled={!hasValidId} value={normalizeFieldValue(intervention.risks)} onChange={(event) => onUpdateIntervention(interventionId, { risks: event.target.value })} />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemoveIntervention(interventionId)}>Intervention entfernen</button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddIntervention}>Intervention hinzufügen</button>
        </>
      )}
    </section>
  );
}
