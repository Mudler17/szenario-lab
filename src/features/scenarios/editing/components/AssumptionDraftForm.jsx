import { getDraftAssumptions } from '../state';

function isIncompleteAssumption(assumption) {
  const title = typeof assumption?.title === 'string' ? assumption.title.trim() : '';
  const content = typeof assumption?.content === 'string' ? assumption.content.trim() : '';

  return title.length === 0 || content.length === 0;
}

function renderFieldValue(value) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return '—';
  }

  return value;
}

export default function AssumptionDraftForm({ scenarioDraft }) {
  const assumptions = getDraftAssumptions(scenarioDraft);

  return (
    <section aria-label="Annahmen im lokalen Draft">
      <h3>Annahmen</h3>
      {assumptions.length === 0 ? (
        <p>Noch keine Annahmen im Szenario-Draft vorhanden.</p>
      ) : (
        <ul>
          {assumptions.map((assumption, index) => {
            const statusIncomplete = isIncompleteAssumption(assumption);
            const heading = renderFieldValue(assumption.title);
            const itemKey = typeof assumption?.id === 'string' && assumption.id.trim().length > 0
              ? assumption.id
              : `assumption-${index}`;

            return (
              <li key={itemKey}>
                <article>
                  <h4>{heading}</h4>
                  {statusIncomplete ? <p>Unvollständige Annahme</p> : null}
                  <p><strong>Inhalt:</strong> {renderFieldValue(assumption.content)}</p>
                  <p><strong>Geltungsbereich:</strong> {renderFieldValue(assumption.scope)}</p>
                  <p><strong>Vertrauen:</strong> {renderFieldValue(assumption.confidence)}</p>
                  <p><strong>Begründung:</strong> {renderFieldValue(assumption.rationale)}</p>
                  <p><em>Bearbeitung wird in Phase 7.2.4 vorbereitet.</em></p>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
