export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills & Expertise</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon">💻</div>
          <h3>Programming</h3>
          <p>Java • Python • C • JavaScript</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🌐</div>
          <h3>Web Development</h3>
          <p>HTML • CSS • React • Node.js</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🗄️</div>
          <h3>Database</h3>
          <p>MySQL • MongoDB • PostgreSQL</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🔧</div>
          <h3>Tools & Tech</h3>
          <p>Git • GitHub • VS Code • Docker</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🤖</div>
          <h3>AI & ML</h3>
          <p>Machine Learning • Data Science • Deep learning</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">☁️</div>
          <h3>Cloud</h3>
          <p>AWS • Azure • Cloud Computing</p>
        </div>
      </div>
    </section>
  );
}
