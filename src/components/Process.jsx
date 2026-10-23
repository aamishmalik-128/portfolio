import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      desc: 'Understanding your goals, audience, and challenges.',
    },
    {
      number: '02',
      title: 'DEFINE',
      desc: 'Research, strategy, and schema / architecture creation.',
    },
    {
      number: '03',
      title: 'DESIGN',
      desc: 'Wireframes, UI structure, and API contract design.',
    },
    {
      number: '04',
      title: 'DEVELOP',
      desc: 'Clean, production-ready code, microservices, and databases.',
    },
    {
      number: '05',
      title: 'DELIVER',
      desc: 'Launch, iterate, and continuous performance enhancement.',
    },
  ];

  return (
    <section id="process" className="process-section-ref">
      <div className="container">
        <div className="process-header-ref">
          <div>
            <div className="section-label-cyan">MY PROCESS</div>
            <h2 className="process-title-ref">From Idea to Impact</h2>
          </div>

          <div className="process-nav-arrows">
            <button className="process-arrow-btn" aria-label="Previous step">
              <ArrowLeft size={16} />
            </button>
            <button className="process-arrow-btn" aria-label="Next step">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="process-track-ref">
          {/* Connecting cyan horizontal line */}
          <div className="process-connecting-line"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="process-step-col">
              <div className="process-node-outer">
                <div className="process-node-inner">
                  {step.number}
                </div>
              </div>

              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
