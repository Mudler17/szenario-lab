import { exampleScenario } from '../domain';
import ScenarioPreview from '../features/scenarios/components/ScenarioPreview';

function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>szenario-lab</h1>
        <p className="subtitle">Organisationsszenarien strukturiert modellieren</p>
        <p className="phase-note">Phase 3 · Erstes Fachmodul in Vorbereitung</p>
      </section>

      <section className="placeholder-grid" aria-label="Module in Vorbereitung">
        <article className="placeholder-card">
          <h2>Szenarien</h2>
          <p>Platzhalter</p>
        </article>
        <article className="placeholder-card">
          <h2>Simulation</h2>
          <p>Platzhalter</p>
        </article>
        <article className="placeholder-card">
          <h2>Report</h2>
          <p>Platzhalter</p>
        </article>
      </section>

      <ScenarioPreview scenario={exampleScenario} />
    </main>
  );
}

export default HomePage;
