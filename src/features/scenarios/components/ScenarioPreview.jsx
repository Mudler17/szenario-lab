import AssumptionList from './AssumptionList';
import EvidenceList from './EvidenceList';
import InterventionList from './InterventionList';
import PersonaList from './PersonaList';
import ResourceList from './ResourceList';
import PhaseList from './PhaseList';
import RelationshipList from './RelationshipList';
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
      <ResourceList resources={scenario.resources} />
      <PhaseList phases={scenario.phases} />
      <AssumptionList assumptions={scenario.assumptions} />
      <EvidenceList evidence={scenario.evidence} />
      <RelationshipList relationships={scenario.relationships} personas={scenario.personas} />
      <InterventionList interventions={scenario.interventions} />
      <StrategyList strategies={scenario.strategies} />
    </section>
  );
}

export default ScenarioPreview;
