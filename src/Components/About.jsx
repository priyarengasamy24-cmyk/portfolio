const stats = [
  { num: '8.23', label: 'CGPA' },
  { num: '4', label: 'Projects' },
  { num: '6', label: 'Certifications' },
  { num: '2', label: 'Internships' },
]

const focus = [
  { icon: '🎨', title: 'UI/UX Design', text: 'Wireframes and clean interfaces in Figma and Canva, focused on simple, user-friendly layouts.' },
  { icon: '💻', title: 'Front-End Development', text: 'HTML, CSS and JavaScript, and currently growing my skills in React.js.' },
  { icon: '🤖', title: 'AI-Assisted Building', text: 'Using tools like Figma Make and Base44 to turn ideas into working prototypes quickly.' },
]

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I am a Computer Science and Engineering student at Arifa Institute of
        Technology with a strong interest in front-end development and UI/UX
        design. I enjoy designing in Figma and turning ideas into clean,
        responsive websites.
      </p>
      <p className="about-text">
        Along the way I completed an AI internship at Internship Studio, an IBM
        Cognos Analytics virtual internship, and a UI/UX Design course from the
        Tamil Nadu Skill Development Corporation. I like projects where design
        and technology meet.
      </p>

      <div className="about-grid">
        {stats.map((s) => (
          <div className="card stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <h3 className="sub-title">What I Do</h3>
      <div className="skills-grid">
        {focus.map((f) => (
          <div className="card" key={f.title}>
            <div className="icon-emoji">{f.icon}</div>
            <h3>{f.title}</h3>
            <p className="muted">{f.text}</p>
          </div>
        ))}
      </div>

      <p className="about-text" style={{ marginTop: '30px' }}>
        <strong>Career Objective:</strong> To grow as a front-end developer and
        build reliable, user-friendly products while learning new technologies.
      </p>
      <p className="about-text"><strong>Languages:</strong> Tamil (Native), English (Conversational)</p>
    </section>
  )
}

export default About