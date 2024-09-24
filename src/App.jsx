import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ConnectMe'; 
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import './index.css';

function MainContent() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#090B0F] w-full max-w-full overflow-hidden min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;