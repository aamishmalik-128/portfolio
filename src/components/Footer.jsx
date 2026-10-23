import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer-section-ref">
      <div className="container">
        <div className="footer-grid-ref">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <a href="#home" className="footer-brand-link">
              <div className="brand-monogram-box">MA</div>
              <div>
                <div className="brand-name-bold">MUHAMMAD AAMISH</div>
                <div className="brand-role-cyan">Full Stack Developer</div>
              </div>
            </a>
            
            <p className="footer-tagline">
              Designing experiences that make a difference.
            </p>

            <div className="footer-social-circles">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-circle-btn"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="social-circle-btn"
                aria-label="Phone"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col-nav">
            <div className="footer-heading-ref">NAVIGATION</div>
            <ul className="footer-list-ref">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col-resources">
            <div className="footer-heading-ref">RESOURCES</div>
            <ul className="footer-list-ref">
              <li><a href="#work">Style Guide</a></li>
              <li><a href="#work">Case Studies</a></li>
              <li><a href="#skills">Design System</a></li>
              <li><a href="#services">Blog</a></li>
              <li><a href="#contact">FAQs</a></li>
            </ul>
          </div>

          {/* Info with World Map Graphic */}
          <div className="footer-col-info">
            <div className="footer-heading-ref">INFO</div>
            <ul className="footer-list-ref">
              <li>Islamabad, Pakistan</li>
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
            </ul>

            {/* Subtle world map dots graphic */}
            <div className="footer-world-map-graphic"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-ref">
          <div className="footer-copy">
            &copy; 2026 Muhammad Aamish. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
