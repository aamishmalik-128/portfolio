import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aamish is a rare combination of deep backend engineering, system architecture, and modern frontend finesse. He took our vision and delivered a scalable product our users absolutely love.",
      name: "Jessica Miller",
      role: "Product Manager, Lumen",
      avatarBg: "#1a2c3a",
      initials: "JM",
    },
    {
      quote: "Working with Aamish was seamless from start to finish. His full-stack implementations are not only clean and robust, but also strategically aligned with our core business milestones.",
      name: "Daniel Carter",
      role: "CEO, Finova",
      avatarBg: "#22382c",
      initials: "DC",
    },
    {
      quote: "Aamish's attention to detail, role-based security, and user-first approach elevated our web application across every touchpoint. Highly recommended for any serious engineering project!",
      name: "Sarah Johnson",
      role: "Marketing Director, Verda",
      avatarBg: "#3a2238",
      initials: "SJ",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section-ref">
      <div className="container">
        <div className="section-label-cyan">TESTIMONIALS —</div>
        <h2 className="testimonials-title-ref">What Clients Say</h2>

        <div className="testimonials-grid-ref">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card-ref">
              <div>
                <div className="quote-mark-cyan">“</div>
                <p className="testimonial-body-ref">
                  {item.quote}
                </p>
              </div>

              <div className="testimonial-client-row">
                <div className="client-avatar-circle" style={{ backgroundColor: item.avatarBg }}>
                  {item.initials}
                </div>
                <div>
                  <div className="client-name-bold">{item.name}</div>
                  <div className="client-role-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
