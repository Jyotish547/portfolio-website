import Hero from "./components/pages/Hero";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
    </main>
  );
}
