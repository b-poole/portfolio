import {
    FaGithubSquare,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa';
import './Introduction.css';

export default function Introduction() {
    return (
        <div className='container'>
            <h1 className='my-name'>Barrett D. Poole</h1>
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
    )
}