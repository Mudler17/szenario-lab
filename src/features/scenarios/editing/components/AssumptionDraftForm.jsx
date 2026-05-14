import { getDraftAssumptions } from '../state';

const CONFIDENCE_OPTIONS = ['low', 'medium', 'high'];

function isIncompleteAssumption(assumption) {
  const title = typeof assumption?.title === 'string' ? assumption.title.trim() : '';
  const content = typeof assumption?.content === 'string' ? assumption.content.trim() : '';

  return title.length === 0 || content.length === 0;
}

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

export default function AssumptionDraftForm({
  scenarioDraft,
  onAddAssumption,
  onUpdateAssumption,
  onRemoveAssumption,
}) {
  const assumptions = getDraftAssumptions(scenarioDraft);

  return (
    <section aria-label="Annahmen im lokalen Draft">
      <h3>Annahmen</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      {assumptions.length === 0 ? (
        <>
          <p>Noch keine Annahmen im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddAssumption}>Annahme hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {assumptions.map((assumption, index) => {
              const statusIncomplete = isIncompleteAssumption(assumption);
              const assumptionId = typeof assumption?.id === 'string' && assumption.id.trim().length > 0
                ? assumption.id
                : `assumption-${index}`;
              const titleFieldId = `assumption-title-${assumptionId}`;
              const contentFieldId = `assumption-content-${assumptionId}`;
              const scopeFieldId = `assumption-scope-${assumptionId}`;
              const confidenceFieldId = `assumption-confidence-${assumptionId}`;
              const rationaleFieldId = `assumption-rationale-${assumptionId}`;

              return (
                <li key={assumptionId}>
                  <article>
                    <h4>Annahme {index + 1}</h4>
                    {statusIncomplete ? <p>Unvollständige Annahme</p> : null}

                    <label htmlFor={titleFieldId}>Titel</label>
                    <input
                      id={titleFieldId}
                      type="text"
                      value={normalizeFieldValue(assumption.title)}
                      onChange={(event) => onUpdateAssumption(assumptionId, { title: event.target.value })}
                    />

                    <label htmlFor={contentFieldId}>Inhalt</label>
                    <textarea
                      id={contentFieldId}
                      value={normalizeFieldValue(assumption.content)}
                      onChange={(event) => onUpdateAssumption(assumptionId, { content: event.target.value })}
                    />

                    <label htmlFor={scopeFieldId}>Geltungsbereich</label>
                    <input
                      id={scopeFieldId}
                      type="text"
                      value={normalizeFieldValue(assumption.scope)}
                      onChange={(event) => onUpdateAssumption(assumptionId, { scope: event.target.value })}
                    />

                    <label htmlFor={confidenceFieldId}>Vertrauen</label>
                    <select
                      id={confidenceFieldId}
                      value={normalizeFieldValue(assumption.confidence) || 'medium'}
                      onChange={(event) => onUpdateAssumption(assumptionId, { confidence: event.target.value })}
                    >
                      {CONFIDENCE_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>

                    <label htmlFor={rationaleFieldId}>Begründung</label>
                    <textarea
                      id={rationaleFieldId}
                      value={normalizeFieldValue(assumption.rationale)}
                      onChange={(event) => onUpdateAssumption(assumptionId, { rationale: event.target.value })}
                    />

                    <button type="button" onClick={() => onRemoveAssumption(assumptionId)}>
                      Annahme entfernen
                    </button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddAssumption}>Annahme hinzufügen</button>
        </>
      )}
    </section>
  );
}
