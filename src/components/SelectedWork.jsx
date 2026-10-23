import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="work" className="work-section">
      <div className="container">
        {/* Header matching reference image: Title on left, 'VIEW ALL PROJECTS ->' on right */}
        <div className="work-header-ref">
          <div>
            <div className="section-label-cyan">SELECTED WORK —</div>
            <h2 className="work-title-ref">Recent Projects</h2>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-projects-link"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* All Projects Grid in user specified order */}
        <div className="projects-grid-ref">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card-ref"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Mockup Preview */}
              <div className="project-mockup-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-mockup-img"
                  loading="lazy"
                />
              </div>

              {/* Card Footer Details */}
              <div className="project-details-row">
                <div>
                  <h3 className="project-name-bold">
                    {project.shortName}
                  </h3>
                  <div className="project-sub-title">
                    {project.title}
                  </div>
                  <div className="project-type-muted">
                    {project.subtitle}
                  </div>
                </div>

                <div className="project-arrow-btn">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
