import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Pro from "./components/pro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Exp from "./components/exp";
import Certi from "./components/certi";

export default function App() {
  return (
    <>
      <div className="animated-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Exp /> {/* Experience Section */}
      <Certi /> {/* Certifications Section */}
      <Pro /> {/* Projects Section */}
      <Contact />
      <Footer />
    </>
  );
}
