export default function Pro() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-img">📱</div>
          <div className="project-info">
            <h3>NIHU AI</h3>
            <p>
              NIHU AI is my personal offline AI assistant powered by machine
              learning and a local LLM, capable of thinking, analyzing, and
              helping with tasks without internet. It delivers fast, secure,
              on-device automation designed to solve problems the way humans do
              — just faster.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">🚀</div>
          <div className="project-info">
            <h3>Next-Gen AI Autonomous Delivery for Urban Cities</h3>
            <p>
              An intelligent autonomous delivery vehicle system for smart
              cities. It combines AI, navigation algorithms, and automation to
              create a futuristic delivery experience with high speed, safety,
              and reliability.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">⚡</div>
          <div className="project-info">
            <h3>
              MediConnect – Smart Prescription Verification & Hospital Medicine
              Delivery System
            </h3>
            <p>
              MediConnect is a full-stack hospital platform where patients can
              upload prescriptions, get automated verification, and order
              medicines directly from the pharmacy. It ensures accurate medicine
              matching, real-time stock checking, and fast, secure doorstep
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
