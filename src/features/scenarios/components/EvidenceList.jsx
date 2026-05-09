function EvidenceList({ evidence, assumptions }) {
  if (!Array.isArray(evidence) || evidence.length === 0) {
    return null;
  }

  const assumptionNameById = new Map(
    (Array.isArray(assumptions) ? assumptions : []).map((assumption) => [assumption.id, assumption.name]),
  );

  return (
    <>
      <h3>Evidenz</h3>
      <ul>
        {evidence.map((item) => {
          const relatedAssumptionName =
            assumptionNameById.get(item.relatedAssumptionId) ?? item.relatedAssumptionId;

          return (
            <li key={item.id}>
              <strong>Quelle:</strong> {item.source} · <strong>Typ:</strong> {item.evidenceType} ·{' '}
              <strong>Vertrauen:</strong> {item.confidence} · <strong>Annahme:</strong>{' '}
              {relatedAssumptionName} · <strong>Notiz:</strong> {item.note}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EvidenceList;
