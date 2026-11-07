import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Certificates from './Components/Certificates'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Reveal from './Components/Reveal'

function App() {
  return (
    <>
      <div className="bg-blobs">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
        <span className="blob b3"></span>
      </div>
      <Navbar />
      <Home />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Certificates />
      <Reveal><Resume /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  )
}

export default App