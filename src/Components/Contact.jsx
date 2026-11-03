function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const subject = encodeURIComponent('Portfolio message from ' + form.name.value)
    const body = encodeURIComponent(form.message.value + '\n\nFrom: ' + form.email.value)
    window.location.href = `mailto:priyarengasamy24@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-links">
        <a className="btn" href="mailto:priyarengasamy24@gmail.com">Email</a>
        <a className="btn" href="https://github.com/priyarengasamy24-cmyk" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/mohanapriya-r-8bb884308" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  )
}

export default Contact