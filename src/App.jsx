import './App.css'
import { FaChevronDown } from 'react-icons/fa';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import CtaLinks from './components/CtaLinks';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='introduction'>
        <Introduction />
      </header>

      <main>
        <section className='go-to-links'>
          <CtaLinks />
        </section>

        <div className='container'>
          <a href="#about-me" className="scroll-indicator" aria-label="Scroll down">
            <FaChevronDown />
          </a>
        </div>

        <section id="about-me" className='about-me'>
          <AboutMe />
        </section>

        <section className='tech-stack'>
          <TechStack />
        </section>

        <section id="projects" className='projects'>
          <div className='container'>
              <Projects />
          </div>
        </section>

        <section id="contact-me" className='contact-me'>
          <ContactMe />
        </section>
      </main>
      
      
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}


export default App
