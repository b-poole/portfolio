import Project from './Project';
import './Projects.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'A React + Vite portfolio showcasing projects with clean components, responsive design, and practical frontend skills including styling, reusable components, and recruiter-focused UI/UX.',
    features: [
      "Fully responsive mobile-first design",
      "Clean, reusable React component architecture",
      "Projects section with live demos and source code links",
      "Contact section for recruiters",
      "Showcases real-world React fundamentals and state management",
      "User-focused, professional UI design"
    ],
    tech: [
      "React (Functional Components)",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "CSS Modules / Styled Components",
      "Vite (Fast Build Tool)",
      "Git & GitHub",
      "Responsive Design",
      "Deployed on Vercel"
    ],
    repoLink: 'https://github.com/b-poole/portfolio',
  },
  {
    title: 'Task Manager App',
    description: 'A React + Vite task manager showcasing clean component architecture, state management with Hooks, and client-side persistence. Users can create, edit, complete, and delete tasks — demonstrating practical React skills and maintainable code.',
    features: [
      "Add new tasks with title and due date",
      "Edit existing tasks inline",
      "Delete unwanted tasks",
      "Mark tasks as completed",
      "Tasks persist across browser reloads using localStorage",
      "Clean, readable component architecture"
    ],
    tech: [
      "React (Functional Components & Hooks)",
      "Vite (Fast build tool)",
      "JavaScript (ES6+)",
      "CSS for styling",
      "localStorage for persistence"
    ],
    demoLink: 'https://task-manager-bp.vercel.app/',
    repoLink: 'https://github.com/b-poole/task-manager',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <>
        <section className="projects" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
                </div>
            </div>
        </section>   
    </>
    
  );
};
