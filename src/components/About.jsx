import React from 'react';
import { MapPin, ArrowRight, UserCheck, Compass, CheckCircle2, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'USER-CENTERED APPROACH',
      desc: 'Every decision I make is rooted in user needs and business goals.',
    },
    {
      icon: Compass,
      title: 'STRATEGIC THINKING',
      desc: 'I combine system design with strategy to drive meaningful results.',
    },
    {
      icon: CheckCircle2,
      title: 'PIXEL-PERFECT EXECUTION',
      desc: 'Precision in every detail. Clean, consistent, and scalable.',
    },
    {
      icon: Users,
      title: 'COLLABORATIVE PARTNER',
      desc: 'Clear communication, feedback loops, and a shared vision.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait Card with Location & Signature */}
          <div className="about-card-left">
            <div className="about-card-image-box">
              <img
                src="/images/profile.png"
                alt="Muhammad Aamish"
                className="about-portrait-img"
              />

              <div className="about-location-tag">
                <MapPin size={13} color="#00f2fe" />
                <span>Based in Islamabad, Pakistan</span>
              </div>

              <div className="about-signature">
                Muhammad Aamish
              </div>
            </div>
          </div>

          {/* Right Column: Bio & 4 Pillars */}
          <div className="about-content-right">
            <div className="section-label-cyan">ABOUT ME</div>

            <h2 className="about-heading-ref">
              <span>Design is not just</span>
              <span>what I do. It's how</span>
              <span className="about-highlight-cyan">I solve problems.</span>
            </h2>

            <p className="about-desc-ref">
              I am specialized in turning complex ideas into intuitive, elegant, and user-centered web applications. My process is collaborative, data-informed, and focused on outcomes that matter — for users and for businesses.
            </p>

            <div style={{ marginBottom: '2.25rem' }}>
              <a href="#work" className="btn-secondary-dark">
                <span>MORE ABOUT ME</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* 4 Pillars List */}
            <div className="about-pillars-list">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="about-pillar-item">
                    <div className="pillar-icon-circle">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div className="pillar-text-title">{item.title}</div>
                      <p className="pillar-text-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
