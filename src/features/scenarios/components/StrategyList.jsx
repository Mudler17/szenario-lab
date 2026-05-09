import ScenarioSection from './ScenarioSection';

function StrategyList({ strategies }) {
  if (!Array.isArray(strategies) || strategies.length === 0) {
    return null;
  }

  return (
    <ScenarioSection title="Strategien">
      <ul>
        {strategies.map((strategy) => (
          <li key={strategy.id}>
            <strong>{strategy.name}</strong>: {strategy.guidingLogic}
          </li>
        ))}
      </ul>
    </ScenarioSection>
  );
}

export default StrategyList;
