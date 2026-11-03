const projects = [
  {
    name: 'Smart Academic Overload and Burnout Prevention System',
    description: 'A platform that helps students manage academic workload and prevent burnout.',
    tech: ['React.js', 'CSS'],
  },
  {
    name: 'AI-Driven Chronic Disease and Cardiometabolic Prediction System',
    description: 'An AI-based system that predicts chronic disease and cardiometabolic risk.',
    tech: ['Python', 'AI'],
  },
  {
    name: 'Super Resolution Mapping from Satellite Imagery',
    description: 'A deep learning approach to improve medium resolution satellite images.',
    tech: ['Python', 'Deep Learning'],
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
            <p className="muted">{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects