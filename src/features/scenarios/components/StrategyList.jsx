function StrategyList({ strategies }) {
  if (!strategies) {
    return null;
  }

  return (
    <>
      <h3>Strategien</h3>
      <ul>
        {strategies.map((strategy) => (
          <li key={strategy.id}>
            <strong>{strategy.name}</strong>: {strategy.guidingLogic}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StrategyList;
