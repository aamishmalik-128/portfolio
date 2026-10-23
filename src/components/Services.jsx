import React from 'react';
import { Layout, Globe, Server, Layers, ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: Layout,
      title: 'UI/UX & FRONTEND',
      desc: 'Designing intuitive, high-performance web interfaces that delight users and deliver seamless, responsive experiences across devices.',
    },
    {
      icon: Globe,
      title: 'WEB DEVELOPMENT',
      desc: 'Modern, scalable web applications built with React, Next.js, and TypeScript that reflect your vision and drive engagement.',
    },
    {
      icon: Server,
      title: 'BACKEND & APIS',
      desc: 'Robust RESTful microservices, secure authentication, and database schemas engineered with Node.js, Express, Laravel, and SQL.',
    },
    {
      icon: Layers,
      title: 'SYSTEMS & DEVOPS',
      desc: 'Production-ready Docker containerization, Linux server configuration, and modular architectures for consistent deployments.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-label-cyan">SERVICES —</div>
        <h2 className="services-title-ref">How I Can Help</h2>

        <div className="services-grid-ref">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="service-card-ref">
                <div>
                  <div className="service-icon-box-ref">
                    <Icon size={22} color="#00f2fe" />
                  </div>
                  <h3 className="service-name-ref">{service.title}</h3>
                  <p className="service-desc-ref">{service.desc}</p>
                </div>

                <div className="service-arrow-ref">
                  <ArrowRight size={18} color="#00f2fe" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
