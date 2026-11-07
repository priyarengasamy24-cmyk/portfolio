const certificates = [
  { title: 'UI/UX Design', issuer: 'Tamil Nadu Skill Development Corporation' },
  { title: 'Full Stack Development MasterClass', issuer: 'NoviTech R&D Private Limited', year: '2025' },
  { title: 'Backend App Development using Node.js and Express', issuer: 'IBM SkillsBuild' },
  { title: 'Big Data Computing', issuer: 'NPTEL' },
  { title: 'Cloud Computing', issuer: 'NPTEL' },
  { title: 'Digital Marketing', issuer: 'EDII-TN' },
]

const achievements = [
  "Participated in the TNWISE Women's Hackathon",
  'Secured 75% in NPTEL Big Data Computing',
  'Secured 70% in NPTEL Cloud Computing',
  'Completed the IBM Cognos Analytics Virtual Internship at Adroit Technology',
]

function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="skills-grid">
        {certificates.map((c) => (
          <div className="card" key={c.title}>
            <h3>{c.title}</h3>
            <p className="muted">{c.issuer}</p>
            {c.year && <p className="project-type">{c.year}</p>}
            {c.file && (
              <div className="project-actions">
                <a className="project-link" href={c.file} target="_blank" rel="noreferrer">View Certificate</a>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="sub-title">Achievements</h3>
      <ul className="cert-list">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  )
}

export default Certificates