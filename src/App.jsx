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
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="center-line" aria-hidden="true"></div>
      <header className='introduction'>
        <div className='container'>
          <h1>Barrett D. Poole</h1>
          <h2>Junior Frontend Developer</h2>
          <p>Frontend Developer building clean, responsive React applications with a focus on usability and maintainable code.</p>
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
        </div>
      </header>

      <section className='go-to-links'>
        <div className='container'>
          <a className='cta cta-primary' href='#projects'>View Projects</a>
          <a className='cta cta-secondary' href='#contact-me'>Contact Me</a>
        </div>
      </section>

      <div className='container'>
        <a href="#about-me" className="scroll-indicator" aria-label="Scroll down">
          <FaChevronDown />
        </a>
      </div>

      <section id="about-me" className='about-me'>
        <div className='container'>
          <h2>About Me</h2>
          <p>I’m a frontend-focused developer who enjoys building clean, responsive applications with thoughtful UI and maintainable architecture.</p>
          <p>My projects emphasize modern React patterns, component reusability, and clear state management — from a task manager app with persistent client-side data to this portfolio itself, designed to present work in a clear, recruiter-friendly way.</p>
          <p>I care about writing readable code, structuring components intentionally, and creating interfaces that feel polished and intuitive across devices.</p>
        </div>
      </section>

      <section className='tech-stack'>
        <div className='container'>
          <div className='skills'>
            <h2>Skills</h2>
            <ul>
              <li><FaHtml5 /> HTML5</li>
              <li><FaCss3Alt /> CSS3</li>
              <li><FaJsSquare /> JavaScript (ES6+)</li>
              <li><FaReact /> React</li>
            </ul>
          </div>

          <div className="stack-divider" aria-hidden="true"></div>

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
        </div>
      </section>

      <section id="projects" className='projects'>
        <div className='container'>
            <Projects />
        </div>
      </section>

      <section id="contact-me" className='contact-me'>
        <div className="container">
          <h2>Contact Me</h2>
          <p>I'm always open to new opportunities or collaborations. Reach out through any of the channels below:</p>
          <div className="contact-buttons">
            <a
              className="cta cta-primary"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="cta cta-primary"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="cta cta-secondary" href="mailto:youremail@example.com">
              Email Me
            </a>
          </div>
        </div>
      </section>
      
      <footer className='footer'>
        <div className='container'>
          <p>&copy; {new Date().getFullYear()} Barrett Poole. All rights reserved.</p>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#about-me">About Me</a>
            <a href="#contact-me">Contact</a>
          </div>
          <p className="footer-credit">Designed & built by Barrett Poole | Made with React and CSS</p>
        </div>
      </footer>
    </>
  )
}


export default App
