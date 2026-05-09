function ScenarioSection({ title, children }) {
  if (!children) {
    return null;
  }

  return (
    <section className="scenario-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default ScenarioSection;
