import './TechStack.css'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import { SiVite, SiVercel } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";

export default function TechStack() {
    return (
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
    )
}