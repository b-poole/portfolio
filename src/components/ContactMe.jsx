import './ContactMe.css';

export default function ContactMe() {
    return (
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
    )
}