const experience = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'Internship Studio',
    period: 'February 2026 - August 2026',
  },
  {
    role: 'IBM Cognos Analytics Virtual Intern',
    company: 'Adroit Technology',
    period: 'Virtual Internship',
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="list">
        {experience.map((e) => (
          <div className="card" key={e.role}>
            <h3>{e.role}</h3>
            <p className="muted">{e.company}</p>
            <p className="muted">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience