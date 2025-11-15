import { useEffect, useState } from "react";

export default function Hero() {
  // 🔵 Typing Animation Logic
  const fullText = "B. NIHANTH";
  const typingSpeed = 90; // speed of typing
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  // 🔵 Smooth scrolling
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.onclick = (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      };
    });
  }, []);

  return (
    <section id="home" className="hero">
      <h1 className="typewriter">
        {text}
        <span className="cursor">|</span>
      </h1>

      <p className="tagline">B.Tech Undergraduate | Future-Ready Engineer</p>

      <p className="tagline-animate">
        AI Researcher & Innovator | Autonomous Tech Builder | Full Stack &
        Automation Engineer
      </p>

      <div className="cta-buttons">
        <a href="#projects" className="cta-button cta-primary">
          View My Work
        </a>
        <a href="#contact" className="cta-button cta-secondary">
          Let's Connect
        </a>
      </div>
    </section>
  );
}
