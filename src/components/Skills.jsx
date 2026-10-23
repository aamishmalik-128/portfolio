import React from 'react';
import {
  Atom,
  Zap,
  FileCode,
  Server,
  Cpu,
  Layers,
  Code,
  Container,
  Database,
  HardDrive,
  Palette,
  Workflow,
  GitBranch,
  Send,
  Terminal,
} from 'lucide-react';

export default function Skills() {
  const tools = [
    { name: 'React.js', icon: Atom },
    { name: 'Next.js', icon: Zap },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Cpu },
    { name: 'Laravel', icon: Layers },
    { name: 'PHP', icon: Code },
    { name: 'Docker', icon: Container },
    { name: 'MySQL / SQL', icon: Database },
    { name: 'MongoDB', icon: HardDrive },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Redux Toolkit', icon: Workflow },
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'Postman', icon: Send },
    { name: 'Linux', icon: Terminal },
  ];

  return (
    <section id="skills" className="tools-skills-section">
      <div className="container">
        <div className="tools-skills-label">TOOLS & SKILLS</div>

        <div className="tools-row-container">
          {tools.map((tool, idx) => {
            const IconComponent = tool.icon;
            return (
              <div key={idx} className="tool-badge-pill">
                <IconComponent size={18} color="#00f2fe" className="tool-badge-icon" />
                <span className="tool-badge-name">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
