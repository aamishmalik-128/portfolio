import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'work', 'skills', 'process', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand */}
        <a href="#home" className="nav-brand">
          <div className="nav-monogram">MA</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">MUHAMMAD AAMISH</span>
            <span className="nav-brand-role">Full Stack Developer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="nav-connect-btn">
          <span>LET'S CONNECT</span>
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: '0.5rem', width: 'fit-content' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
