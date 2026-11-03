const skills = [
  { category: 'Frontend', items: ['HTML & CSS (Basic)', 'JavaScript (Basic)', 'React.js (Learning)'] },
  { category: 'UI/UX Design', items: ['Figma', 'Canva', 'Wireframing'] },
  { category: 'Other', items: ['Python', 'SQL (Basic)', 'Node.js & Express (Basic)', 'Git & GitHub'] },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills