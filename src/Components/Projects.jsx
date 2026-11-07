const projects = [
  {
    name: 'AcadEase: Student Wellness Platform',
    type: 'Individual project (AI-assisted)',
    description: 'A futuristic web UI that monitors student workload and health, shows burnout analytics, and suggests an optimized daily plan.',
    tech: ['Figma Make', 'Framer Motion', 'UI/UX Design', 'Data Visualization'],
    role: 'UI design, prompts, layout and design decisions',
    github: 'https://github.com/priyarengasamy24-cmyk/AcadEase-Academic-Management',
    live: 'https://www.figma.com/make/mbyTO835dv3L3ABaeMIBOu/Futuristic-Student-Platform-UI?t=hwscI3bOXUOAbXUs-20&fullscreen=1',
  },
  {
    name: 'SmartHire AI: Recruitment Platform',
    type: 'Individual project (AI-assisted)',
    description: 'An AI-powered recruitment platform with resume analysis, ATS scoring, job listings and a candidate dashboard.',
    tech: ['Base44', 'AI Resume Analysis', 'UI/UX Design'],
    role: 'Prompts, feature planning and UI design',
    github: 'https://github.com/priyarengasamy24-cmyk/SMART-HIRE-AI',
    live: 'https://diligent-smart-hire-flow.base44.app',
  },
  {
    name: 'Cardio Care Ace: Chronic Disease and Cardiometabolic Prediction',
    type: 'Team project (2 members)',
    description: 'An AI-based system that predicts chronic disease and cardiometabolic risk.',
    tech: ['Python', 'AI'],
    role: 'Project presentation',
    github: 'https://github.com/priyarengasamy24-cmyk/Cardio-Care-Ace',
    live: 'https://cardio-1.vercel.app',
  },
  {
    name: 'GeoSR-X: Super Resolution Mapping from Satellite Imagery',
    type: 'Team project (6 members)',
    description: 'A deep learning approach to improve medium resolution satellite images.',
    tech: ['Python', 'Deep Learning'],
    role: 'Documentation and presentation',
    github: 'https://github.com/priyarengasamy24-cmyk/Deep-Learning-Based-Super-Resolution-Mapping-SRM',
    live: 'https://graceful-geo-vision-flow.base44.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="skills-grid">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p className="project-type">{p.type}</p>
            <p className="muted">{p.description}</p>
            <p className="muted"><strong>Role:</strong> {p.role}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-actions">
              {p.live && (
                <a className="project-link" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
              )}
              {p.github && (
                <a className="project-link ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects