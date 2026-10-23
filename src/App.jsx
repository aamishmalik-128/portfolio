import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Skills from './components/Skills';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Background Lighting & Grid Effects */}
      <div className="bg-glow-container">
        <div className="bg-glow-orb-1"></div>
        <div className="bg-glow-orb-2"></div>
        <div className="bg-glow-orb-3"></div>
      </div>
      <div className="bg-grid-pattern"></div>

      {/* Main Navigation */}
      <Navbar />

      {/* Content Sections */}
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <SelectedWork />
        <Skills />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
