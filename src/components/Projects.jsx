import { useRef, useState, useEffect } from 'react';
import Project from './Project';
import {
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
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
  {
    title: 'Project Management Dashboard',
    description:
      'A production-style project management dashboard focused on scalable frontend architecture. Built with React and Redux Toolkit, this app demonstrates real-world state management, API-driven data flows, and professional UI patterns commonly used in modern software teams.',
    features: [
      'View and manage project issues in a dashboard layout',
      'Create, edit, and delete issues with form validation',
      'Filter issues by status and priority',
      'Sort and paginate large issue lists',
      'Global state management using Redux Toolkit',
      'Async data fetching with loading and error states',
      'Responsive, mobile-friendly dashboard design'
    ],
    tech: [
      'React (Functional Components & Hooks)',
      'Redux Toolkit',
      'RTK Query for API data fetching',
      'REST APIs',
      'JavaScript (ES6+)',
      'CSS for responsive layouts'
    ],
    demoLink: null, // coming soon
    repoLink: null, // coming soon
    status: 'WIP'
  }
  // Add more projects here
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update button visibility based on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollByPage = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === 'right' ? el.clientWidth : -el.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="projects" id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className='projects-wrapper'>
              <button className={`scroll-btn left ${canScrollLeft ? 'visible' : 'hidden'}`} onClick={() => scrollByPage('left')}>
                <FaChevronLeft />
              </button>
              

              <div className="projects-grid" ref={scrollRef}>
                  {projectList.map((project, index) => (
                    <div className='project-item' key={index}>
                      <Project {...project} />
                    </div>
              ))}
              </div>
              
              <button className={`scroll-btn right ${canScrollRight ? 'visible' : 'hidden'}`} onClick={() => scrollByPage('right')}>
                <FaChevronRight />
              </button>
              
            </div>
          </div>
      </section>   
    </>
    
  );
};
