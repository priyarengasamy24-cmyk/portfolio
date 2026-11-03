const education = [
  {
    title: 'B.E. Computer Science and Engineering',
    place: 'Arifa Institute of Technology',
    info: 'Expected 2027 | CGPA: 8.23 / 10',
  },
  {
    title: 'Higher Secondary Education (Class XII)',
    place: 'GHSS Vettaikaraniruppu',
    info: '2023 | Cutoff: 402 / 600 (67%)',
  },
]

const certifications = [
  'UI/UX Design - Tamil Nadu Skill Development Corporation',
  'Full Stack Development MasterClass - NoviTech R&D (2025)',
  'Backend App Development using Node.js and Express - IBM SkillsBuild',
  'NPTEL - Big Data Computing (75%)',
  'NPTEL - Cloud Computing (70%)',
  'Digital Marketing - EDII-TN',
]

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="list">
        {education.map((e) => (
          <div className="card" key={e.title}>
            <h3>{e.title}</h3>
            <p className="muted">{e.place}</p>
            <p className="muted">{e.info}</p>
          </div>
        ))}
      </div>
      <h3 className="sub-title">Certifications</h3>
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  )
}

export default Education