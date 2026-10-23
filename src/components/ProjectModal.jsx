import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Project Image */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Tags */}
        <div className="modal-tags-row">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="modal-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h2 style={{ fontSize: '1.85rem', marginBottom: '0.4rem', color: '#fff' }}>
          {project.title}
        </h2>
        <p style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p style={{ color: '#8e9aa8', lineHeight: '1.7', fontSize: '0.95rem' }}>
          {project.description}
        </p>

        {/* Architectural Features */}
        <h4 style={{ marginTop: '1.5rem', fontSize: '1rem', letterSpacing: '0.05em' }}>
          KEY ARCHITECTURAL HIGHLIGHTS
        </h4>
        <ul className="modal-features-list">
          {project.features.map((feat, idx) => (
            <li key={idx} className="modal-feature-item">
              <CheckCircle2 size={16} className="modal-feature-bullet" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <GithubIcon size={18} />
              <span>VIEW SOURCE ON GITHUB</span>
            </a>
          )}
          <button onClick={onClose} className="btn-secondary">
            <span>CLOSE PREVIEW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
