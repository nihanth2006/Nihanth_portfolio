export default function Certi() {
  return (
    <section id="certi">
      <h2>Certifications</h2>

      <div className="cert-grid">
        <div className="cert-card">
          <h3>AWS Cloud 101 Certification</h3>
          <p>
            Foundational certification covering AWS cloud concepts, services,
            and architecture.
          </p>
        </div>

        <div className="cert-card">
          <h3>Oracle APEX Cloud Developer Certification</h3>
          <p>
            Validated expertise in Oracle APEX low-code application development
            on Oracle Cloud.
          </p>
        </div>

        <div className="cert-card">
          <h3>Oracle Cloud Infrastructure (OCI) Certification</h3>
          <p>
            Strong understanding of OCI compute, networking, storage, IAM, and
            cloud fundamentals.
          </p>
        </div>

        <div className="cert-card">
          <h3>Cisco Networking Essentials Certification</h3>
          <p>
            Knowledge of networking basics, routing, switching, and
            troubleshooting techniques.
          </p>
        </div>

        <div className="cert-card">
          <h3>Accenture North America – Project Management Certification</h3>
          <p>
            Completed virtual experience program focused on project planning,
            communication, and execution.
          </p>
        </div>
      </div>

      {/* View All Certifications Button */}
      <div className="cert-btn-container">
        <a
          href="https://www.linkedin.com/in/b-nihanth-117407334/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-primary cert-btn"
        >
          View All Certifications
        </a>
      </div>
    </section>
  );
}
