import './Footer.css';

export default function Footer() {
    return (
        <div className='container'>
          <p>&copy; {new Date().getFullYear()} Barrett Poole. All rights reserved.</p>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#about-me">About Me</a>
            <a href="#contact-me">Contact</a>
          </div>
          <p className="footer-credit">Designed & built by Barrett Poole | Made with React and CSS</p>
        </div>
    )
}