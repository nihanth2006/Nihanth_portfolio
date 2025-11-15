export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#exp">Experience</a> {/* NEW */}
          </li>
          <li>
            <a href="#certi">Certifications</a> {/* NEW */}
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
