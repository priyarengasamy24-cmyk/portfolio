function Home() {
  return (
    <section id="home" className="home">
      <img src="/profile.jpg" alt="Mohana Priya" className="avatar" />
      <h1>Hi, I'm <span className="grad">Mohana Priya</span></h1>
      <h3>Front-End Developer | UI/UX Enthusiast</h3>
      <p>I build clean and responsive web experiences.</p>
      <div className="hero-btns">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn ghost">Contact Me</a>
      </div>
    </section>
  )
}

export default Home