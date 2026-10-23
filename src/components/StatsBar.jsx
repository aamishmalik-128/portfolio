import React from 'react';
import { Clock, PackageCheck, Activity, Layers, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const statsList = [
    { icon: Clock, value: '3+', label: 'YEARS EXPERIENCE' },
    { icon: PackageCheck, value: '50+', label: 'PROJECTS DELIVERED' },
    { icon: Activity, value: '99%', label: 'CLIENT SATISFACTION' },
    { icon: Layers, value: '15+', label: 'TECH STACK TOOLS' },
    { icon: ShieldCheck, value: '100%', label: 'ON-TIME DELIVERY' },
  ];

  return (
    <section className="stats-section-ref">
      <div className="container">
        <div className="stats-row-ref">
          {statsList.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="stat-unit-ref">
                <div className="stat-icon-ref">
                  <IconComponent size={24} color="#00f2fe" />
                </div>
                <div className="stat-text-ref">
                  <div className="stat-number-ref">{stat.value}</div>
                  <div className="stat-sub-ref">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
