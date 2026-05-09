function EvidenceList({ evidence }) {
  if (!Array.isArray(evidence) || evidence.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Evidenz</h3>
      <ul>
        {evidence.map((item) => (
          <li key={item.id}>
            <strong>Quelle:</strong> {item.source} · <strong>Typ:</strong> {item.evidenceType} ·{' '}
            <strong>Vertrauen:</strong> {item.confidence} · <strong>Annahme:</strong>{' '}
            {item.relatedAssumptionId} · <strong>Notiz:</strong> {item.note}
          </li>
        ))}
      </ul>
    </>
  );
}

export default EvidenceList;
