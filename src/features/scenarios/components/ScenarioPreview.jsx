import AssumptionList from './AssumptionList';
import PersonaList from './PersonaList';
import PhaseList from './PhaseList';
import ScenarioSummary from './ScenarioSummary';
import StrategyList from './StrategyList';

function ScenarioPreview({ scenario }) {
  if (!scenario) {
    return null;
  }

  return (
    <section className="scenario-preview" aria-label="Beispielszenario Vorschau">
      <h2>{scenario.name}</h2>
      <p>{scenario.description}</p>

      <ScenarioSummary scenario={scenario} />
      <PersonaList personas={scenario.personas} />
      <PhaseList phases={scenario.phases} />
      <AssumptionList assumptions={scenario.assumptions} />
      <StrategyList strategies={scenario.strategies} />
    </section>
  );
}

export default ScenarioPreview;
