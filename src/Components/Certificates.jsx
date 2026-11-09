import { useState, useEffect } from 'react'

const certificates = [
  { title: 'UI/UX Design', issuer: 'Tamil Nadu Skill Development Corporation', file: '/certificates/ui-ux.jpg' },
  { title: 'Full Stack Development MasterClass', issuer: 'NoviTech R&D Private Limited', year: '2025' },
  { title: 'Backend App Development using Node.js and Express', issuer: 'IBM SkillsBuild' },
  { title: 'Introduction to Cognos Analytics', issuer: 'IBM Career Education Program', year: 'March 2026', file: '/certificates/ibm-cognos-course.png' },
  { title: 'Virtual Internship: IBM Cognos Analytics', issuer: 'AdroIT Technologies', year: 'March - April 2026', file: '/certificates/adroit-internship.png' },
  { title: 'Internship: Scalable Web Development using Django and Modern Frontend Frameworks', issuer: 'MaanavaN Learning Center LLP', year: 'July 2025' },
  { title: 'Big Data Computing', issuer: 'NPTEL', file: '/certificates/nptel-bigdata.jpg' },
  { title: 'Cloud Computing', issuer: 'NPTEL', file: '/certificates/nptel-cloud.jpg' },
  { title: 'Digital Marketing', issuer: 'EDII-TN', file: '/certificates/digital-marketing.jpg' },
]

const achievements = [
  "Participated in the TNWISE Women's Hackathon",
  'Secured 75% in NPTEL Big Data Computing',
  'Secured 70% in NPTEL Cloud Computing',
  'Completed the IBM Cognos Analytics Virtual Internship at AdroIT Technologies',
]

function Certificates() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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
                <button className="project-link" onClick={() => setSelected(c)}>
                  View Certificate
                </button>
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

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h3 className="modal-title">{selected.title}</h3>
            <img className="modal-img" src={selected.file} alt={selected.title} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates