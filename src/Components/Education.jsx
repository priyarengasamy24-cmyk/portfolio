const education = [
  {
    title: 'Higher Secondary Education (Class XII)',
    place: 'GHSS Vettaikaraniruppu',
    info: '2023 | Cutoff: 402 / 600 (67%)',
    status: 'Completed',
    current: false,
  },
  {
    title: 'B.E. Computer Science and Engineering',
    place: 'Arifa Institute of Technology',
    info: 'Expected 2027 | CGPA: 8.23 / 10',
    status: 'Present',
    current: true,
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((e) => (
          <div className={`timeline-item ${e.current ? 'current' : ''}`} key={e.title}>
            <span className="timeline-dot"></span>
            <div className="card">
              <span className={`status ${e.current ? 'now' : 'done'}`}>{e.status}</span>
              <h3>{e.title}</h3>
              <p className="muted">{e.place}</p>
              <p className="muted">{e.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education