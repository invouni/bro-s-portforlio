import React from "react";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ConnectMe.jsx";
import Skills from "./components/Skills.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/navBar.jsx";
import ContactPage from './Pages/Contact.jsx';
import AboutPage from './Pages/About.jsx'

function App() {
  
  
  return (
    <>
      <Router>
        <div className="bg-[#090B0F] w-full max-w-full overflow-hidden min-h-screen">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <ContactMe />
                </>
              }
            />
            <Route 
              path="/about"
              element={<AboutPage />}
            />
            <Route 
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
