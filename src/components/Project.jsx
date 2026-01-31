export default function Project({ title, description, tech, features, demoLink, repoLink, status }) {
  return (
    <div className="project-card">
        {status  === 'WIP' ? (
            <span className="project-badge">LATEST</span>
        ): null}
        <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="project-features">
                <h4>Features</h4>
                <ul>
                    {features && features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className='project-footer'>
            <div className="project-tech">
                {tech.map((techItem, index) => (
                    <span key={index} className="tech-bubble">
                    {techItem}
                    </span>
                ))}
            </div>

            <div className="project-links">
            {demoLink ? (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="cta cta-primary">
                Live Demo
                </a>
            ) : (
                <span className="cta disabled">
                    Coming Soon
                </span>
            )}
            {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="cta cta-secondary">
                View Code
                </a>
            )}
            </div>
        </div>
        
    </div>
  );
};