import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ConnectMe.jsx";
import Skills from "./components/Skills.jsx";


function App() {
  
  return (
    <>
      <div className="bg-[#090B0F] w-full min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
