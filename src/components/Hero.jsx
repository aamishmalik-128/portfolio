import React from 'react';
import { ArrowRight, Download, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-text-column">
            <div className="hero-number-tag">01</div>
            
            <span className="hero-subtitle-tag">
              DESIGNING EXPERIENCES THAT
            </span>

            <h1 className="hero-title">
              <span className="title-line">INSPIRE.</span>
              <span className="title-line">ENGAGE.</span>
              <span className="title-line">CONVERT.</span>
            </h1>

            <p className="hero-bio">
              I'm Muhammad Aamish — a Full Stack Developer crafting digital experiences that blend strategy, robust backend architectures, and modern frontend technologies to create real impact.
            </p>

            <div className="hero-cta-group">
              <a href="#work" className="btn-primary-cyan">
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Muhammad_Aamish_Resume.pdf"
                className="btn-secondary-dark"
                id="hero-download-resume-btn"
              >
                <span>DOWNLOAD RESUME</span>
                <Download size={15} />
              </a>
            </div>

            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>AVAILABLE FOR FREELANCE & FULL-TIME</span>
            </div>
          </div>

          {/* Right Column: Seamless Character blending into dark background */}
          <div className="hero-image-column">
            <div className="hero-seamless-wrapper">
              {/* Concentric glowing cyber neon rings behind head & torso */}
              <div className="hero-ring-ambient"></div>
              <div className="hero-ring-outer"></div>
              <div className="hero-ring-middle"></div>
              <div className="hero-ring-core"></div>
              
              {/* Seamless blended character portrait */}
              <img
                src="/images/profile-transparent.png"
                alt="Muhammad Aamish - Full Stack Developer"
                className="hero-portrait-ref"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Scroll Indicator */}
      <a href="#about" className="scroll-indicator-container" aria-label="Scroll down">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-mouse-pill">
          <div className="scroll-mouse-wheel"></div>
        </div>
        <ArrowDown size={14} className="scroll-arrow-down" />
      </a>
    </section>
  );
}
