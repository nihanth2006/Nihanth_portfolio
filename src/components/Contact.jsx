export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>

      <div className="contact-content">
        <p>
          Ready to bring your ideas to life? Let's collaborate and create
          something extraordinary!
        </p>

        <div className="contact-links">
          {/* Updated Email */}
          <a href="mailto:nihanth1006@gmail.com" className="contact-link">
            <span>📧</span> Email Me
          </a>

          {/* Updated LinkedIn */}
          <a
            href="https://www.linkedin.com/in/b-nihanth-117407334/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💼</span> LinkedIn
          </a>

          {/* Updated GitHub */}
          <a
            href="https://github.com/nihanth2006"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💻</span> GitHub
          </a>

          {/* Optional: Twitter removed unless you want it */}
        </div>
      </div>
    </section>
  );
}
