import { getDraftPhases } from '../state';

const STATUS_OPTIONS = ['planned', 'active', 'completed', 'unclear'];

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

function isIncompletePhase(phase) {
  const title = typeof phase?.title === 'string' ? phase.title.trim() : '';
  const description = typeof phase?.description === 'string' ? phase.description.trim() : '';

  return title.length === 0 || description.length === 0;
}

export default function PhaseDraftForm({ scenarioDraft, onAddPhase, onUpdatePhase, onRemovePhase }) {
  const phases = getDraftPhases(scenarioDraft);

  return (
    <section aria-label="Phasen im lokalen Draft">
      <h3>Phasen</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      <p>Die Reihenfolge ist ein einfacher Orientierungswert, keine Projektplanung.</p>
      <p>Der Zeitraum ist eine freie Beschreibung, kein Kalendertermin.</p>
      {phases.length === 0 ? (
        <>
          <p>Noch keine Phasen im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddPhase}>Phase hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {phases.map((phase, index) => {
              const phaseId = typeof phase?.id === 'string' && phase.id.trim().length > 0 ? phase.id : `phase-${index}`;
              const hasValidId = typeof phase?.id === 'string' && phase.id.trim().length > 0;
              return (
                <li key={phaseId}>
                  <article>
                    <h4>Phase {index + 1}</h4>
                    {isIncompletePhase(phase) ? <p>Unvollständige Phase</p> : null}
                    {!hasValidId ? <p>Phase ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`phase-title-${phaseId}`}>Titel</label>
                    <input id={`phase-title-${phaseId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(phase.title)} onChange={(event) => onUpdatePhase(phaseId, { title: event.target.value })} />

                    <label htmlFor={`phase-description-${phaseId}`}>Beschreibung</label>
                    <textarea id={`phase-description-${phaseId}`} disabled={!hasValidId} value={normalizeFieldValue(phase.description)} onChange={(event) => onUpdatePhase(phaseId, { description: event.target.value })} />

                    <label htmlFor={`phase-order-${phaseId}`}>Reihenfolge</label>
                    <input id={`phase-order-${phaseId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(phase.order)} onChange={(event) => onUpdatePhase(phaseId, { order: event.target.value })} />

                    <label htmlFor={`phase-timeframe-${phaseId}`}>Zeitraum</label>
                    <input id={`phase-timeframe-${phaseId}`} type="text" disabled={!hasValidId} value={normalizeFieldValue(phase.timeframe)} onChange={(event) => onUpdatePhase(phaseId, { timeframe: event.target.value })} />

                    <label htmlFor={`phase-status-${phaseId}`}>Status</label>
                    <select id={`phase-status-${phaseId}`} disabled={!hasValidId} value={normalizeFieldValue(phase.status) || 'unclear'} onChange={(event) => onUpdatePhase(phaseId, { status: event.target.value })}>
                      {STATUS_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <label htmlFor={`phase-risks-${phaseId}`}>Risiken</label>
                    <textarea id={`phase-risks-${phaseId}`} disabled={!hasValidId} value={normalizeFieldValue(phase.risks)} onChange={(event) => onUpdatePhase(phaseId, { risks: event.target.value })} />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemovePhase(phaseId)}>Phase entfernen</button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddPhase}>Phase hinzufügen</button>
        </>
      )}
    </section>
  );
}
