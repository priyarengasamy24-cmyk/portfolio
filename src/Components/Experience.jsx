const experience = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'Internship Studio',
    period: 'February 2026 - August 2026',
    project: 'EduGuard AI: Intelligent Proctoring',
    links: [
      { label: 'GitHub', url: 'https://github.com/priyarengasamy24-cmyk/EduGuard-AI-Intelligent-Proctoring/tree/main' },
      { label: 'Project Doc', url: 'https://colab.research.google.com/drive/1K03DY6qxP3lv1i553FejAcMXS3xc_SeJ?usp=sharing' },
    ],
  },
  {
    role: 'IBM Cognos Analytics Virtual Intern',
    company: 'AdroIT Technologies Innovative Solutions Pvt. Ltd.',
    period: '9 March 2026 - 10 April 2026',
    links: [
      { label: 'Cognos Project', url: 'https://github.com/priyarengasamy24-cmyk/IBM-PROJECT-COGNOS-' },
      { label: 'NM IBM Project', url: 'https://github.com/priyarengasamy24-cmyk/NM-IBM-PROJECT-' },
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'MaanavaN Learning Center LLP',
    period: '14 July 2025 - 29 July 2025',
    project: 'A Study on Scalable Web Development using Django and Modern Frontend Frameworks',
    links: [],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((e) => (
          <div className="timeline-item" key={e.role}>
            <span className="timeline-dot"></span>
            <div className="card">
              <h3>{e.role}</h3>
              <p className="muted">{e.company}</p>
              <p className="project-type">{e.period}</p>
              {e.project && (
                <p className="muted"><strong>Project:</strong> {e.project}</p>
              )}
              {e.links.length > 0 && (
                <div className="project-actions">
                  {e.links.map((l) => (
                    <a key={l.label} className="project-link" href={l.url} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience