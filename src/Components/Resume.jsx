function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>
      <p className="about-text">View or download my resume to know more about my skills and experience.</p>
      <div className="contact-links">
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        <a className="btn ghost" href="/resume.pdf" download="Mohana_Priya_Resume.pdf">Download Resume</a>
      </div>
      <iframe className="resume-frame" src="/resume.pdf" title="Resume preview"></iframe>
    </section>
  )
}

export default Resume