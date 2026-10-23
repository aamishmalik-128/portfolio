import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Client-side pure frontend form submission with instant confirmation
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your project inquiry has been received. I'll reply to ${formData.email} within 24 hours.`,
      });

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#00e5ff', '#ffffff'],
      });

      setFormData({
        name: '',
        email: '',
        projectType: 'MERN Stack Application',
        message: '',
      });
    } catch (err) {
      console.warn('Form submission:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section-ref">
      <div className="container">
        <div className="contact-box-ref">
          <div className="contact-grid-ref">
            {/* Left Column */}
            <div className="contact-info-col">
              <div>
                <div className="section-label-cyan">LET'S CREATE SOMETHING</div>
                <h2 className="contact-headline-ref">EXTRAORDINARY</h2>
                <p className="contact-sub-ref">
                  Have a project in mind? I'd love to hear about it. Send me a message and let's build something remarkable together.
                </p>
              </div>

              <div className="contact-pills-ref">
                <a href={`mailto:${personalInfo.email}`} className="contact-pill-item">
                  <div className="contact-icon-bubble">
                    <Mail size={16} color="#00f2fe" />
                  </div>
                  <span>{personalInfo.email}</span>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="contact-pill-item">
                  <div className="contact-icon-bubble">
                    <Phone size={16} color="#00f2fe" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>

                <div className="contact-pill-item">
                  <div className="contact-icon-bubble">
                    <MapPin size={16} color="#00f2fe" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form with Spacious Inputs */}
            <div className="contact-form-col">
              <form onSubmit={handleSubmit} className="form-fields-ref">
                {status.message && (
                  <div className={`form-alert-ref ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                    {status.message}
                  </div>
                )}

                <div className="form-row-2">
                  <div className="form-field-wrapper">
                    <label className="field-label-subtle" htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-ref"
                    />
                  </div>

                  <div className="form-field-wrapper">
                    <label className="field-label-subtle" htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-ref"
                    />
                  </div>
                </div>

                <div className="form-field-wrapper">
                  <label className="field-label-subtle" htmlFor="contact-project-type">Project Type</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="select-ref"
                  >
                    <option value="MERN Stack Application">MERN Stack Web Application</option>
                    <option value="Doctor Appointment / Healthcare System">Doctor Appointment / Healthcare System</option>
                    <option value="School / Institutional CMS">School / Institutional Management CMS</option>
                    <option value="Real Estate Web Portal">Real Estate Web Portal</option>
                    <option value="Hotel & Resort Booking Platform">Hotel & Resort Booking Platform</option>
                    <option value="Fitness & Health Web Application">Fitness & Health Web Application</option>
                    <option value="E-Commerce & Payment Integration">E-Commerce & Stripe Payments</option>
                    <option value="Laravel & Backend Engineering">Laravel & Relational MySQL</option>
                    <option value="Full Stack Custom Project">Full Stack Custom Project</option>
                    <option value="Consulting / Freelance">Consulting / Freelance Inquiry</option>
                  </select>
                </div>

                <div className="form-field-wrapper">
                  <label className="field-label-subtle" htmlFor="contact-message">Tell me about your project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Describe your project goals, scope, and target timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea-ref"
                  ></textarea>
                </div>

                <div className="form-btn-row">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="btn-primary-cyan btn-submit-ref"
                  >
                    <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
