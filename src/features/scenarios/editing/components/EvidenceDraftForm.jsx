import { getDraftEvidence } from '../state';

const SOURCE_TYPE_OPTIONS = ['observation', 'document', 'interview', 'data', 'other'];
const RELATION_OPTIONS = ['supports', 'contradicts', 'qualifies', 'unclear'];
const CONFIDENCE_OPTIONS = ['low', 'medium', 'high'];

function isIncompleteEvidence(evidence) {
  const title = typeof evidence?.title === 'string' ? evidence.title.trim() : '';
  const content = typeof evidence?.content === 'string' ? evidence.content.trim() : '';

  return title.length === 0 || content.length === 0;
}

function normalizeFieldValue(value) {
  return typeof value === 'string' ? value : '';
}

export default function EvidenceDraftForm({
  scenarioDraft,
  onAddEvidence,
  onUpdateEvidence,
  onRemoveEvidence,
}) {
  const evidence = getDraftEvidence(scenarioDraft);

  return (
    <section aria-label="Evidenz im lokalen Draft">
      <h3>Evidenz</h3>
      <p>Änderungen betreffen nur den lokalen Draft und werden nicht in der App gespeichert.</p>
      {evidence.length === 0 ? (
        <>
          <p>Noch keine Evidenz im Szenario-Draft vorhanden.</p>
          <button type="button" onClick={onAddEvidence}>Evidenz hinzufügen</button>
        </>
      ) : (
        <>
          <ul>
            {evidence.map((entry, index) => {
              const statusIncomplete = isIncompleteEvidence(entry);
              const entryId = typeof entry?.id === 'string' && entry.id.trim().length > 0
                ? entry.id
                : `evidence-${index}`;
              const hasValidId = typeof entry?.id === 'string' && entry.id.trim().length > 0;

              return (
                <li key={entryId}>
                  <article>
                    <h4>Evidenz {index + 1}</h4>
                    {statusIncomplete ? <p>Unvollständige Evidenz</p> : null}
                    {!hasValidId ? <p>Evidenz ohne gültige id ist schreibgeschützt.</p> : null}

                    <label htmlFor={`evidence-title-${entryId}`}>Titel</label>
                    <input
                      id={`evidence-title-${entryId}`}
                      type="text"
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.title)}
                      onChange={(event) => onUpdateEvidence(entryId, { title: event.target.value })}
                    />

                    <label htmlFor={`evidence-content-${entryId}`}>Inhalt</label>
                    <textarea
                      id={`evidence-content-${entryId}`}
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.content)}
                      onChange={(event) => onUpdateEvidence(entryId, { content: event.target.value })}
                    />

                    <label htmlFor={`evidence-sourceType-${entryId}`}>Quellentyp</label>
                    <select
                      id={`evidence-sourceType-${entryId}`}
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.sourceType) || 'other'}
                      onChange={(event) => onUpdateEvidence(entryId, { sourceType: event.target.value })}
                    >
                      {SOURCE_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>

                    <label htmlFor={`evidence-relation-${entryId}`}>Bezug</label>
                    <select
                      id={`evidence-relation-${entryId}`}
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.relation) || 'unclear'}
                      onChange={(event) => onUpdateEvidence(entryId, { relation: event.target.value })}
                    >
                      {RELATION_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>

                    <label htmlFor={`evidence-confidence-${entryId}`}>Vertrauen</label>
                    <select
                      id={`evidence-confidence-${entryId}`}
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.confidence) || 'medium'}
                      onChange={(event) => onUpdateEvidence(entryId, { confidence: event.target.value })}
                    >
                      {CONFIDENCE_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>

                    <label htmlFor={`evidence-assumptionId-${entryId}`}>Annahmenbezug</label>
                    <input
                      id={`evidence-assumptionId-${entryId}`}
                      type="text"
                      disabled={!hasValidId}
                      value={normalizeFieldValue(entry.assumptionId)}
                      onChange={(event) => onUpdateEvidence(entryId, { assumptionId: event.target.value })}
                    />

                    <button type="button" disabled={!hasValidId} onClick={() => onRemoveEvidence(entryId)}>
                      Evidenz entfernen
                    </button>
                  </article>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onAddEvidence}>Evidenz hinzufügen</button>
        </>
      )}
    </section>
  );
}
