import './CtaLinks.css';

export default function CtaLinks() {
    return (
        <div className='container'>
          <a className='cta cta-primary' href='#projects'>View Projects</a>
          <a className='cta cta-secondary' href='#contact-me'>Contact Me</a>
          <a className="cta cta-primary" href="/Barrett_Poole_Frontend_Developer.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
    )
}