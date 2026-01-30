import './App.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown
} from 'react-icons/fa'
import { SiVite, SiVercel } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";

function App() {
  return (
    <>
      <header className='introduction'>
        <h1>Barrett Poole</h1>
        <h2>Junior Frontend Developer</h2>
        <p>Building responsive, user-focused web applications with React and JavaScript.</p>
        <div className='intro-links'>
          <a
            href="https://www.linkedin.com/in/barrett-poole-630a3a145"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/b-poole"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>

          <a
            href="mailto:barrettpoole14@gmail.com"
            className="icon-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </header>

      <section className='go-to-links'>
        <a className='cta cta-primary' href='#projects'>View Projects</a>
        <a className='cta cta-secondary' href='#contact'>Contact Me</a>
      </section>

      <div className="scroll-indicator">
        <FaChevronDown />
      </div>

      <section className='about-me'>
        <h2>About Me</h2>
        <p>Hi, I’m Barrett. Junior Frontend Developer building responsive, user-focused web applications with React and JavaScript.</p>
      </section>

      <section className='tech-stack'>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJsSquare /> JavaScript (ES6+)</li>
            <li><FaReact /> React</li>
          </ul>
        </div>

        <div className='tools'>
          <h2>Tools & Workflow</h2>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li><BiLogoVisualStudio /> VS Code</li>
            <li><SiVite /> Vite</li>
            <li><SiVercel /> Vercel</li>
          </ul>
        </div>
      </section>

      <section className='projects'>
        <h2>Projects</h2>
        <div className='project-cards'>

        </div>
      </section>
      
      <footer className='contact-me'>
        <h2>Contact Me</h2>
        <div className='contact-links'>
          <div className='email'></div>
          <div className='linkedin'></div>
          <div className='github'></div>
        </div>
      </footer>
    </>
  )
}


export default App
