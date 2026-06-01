import './App.css';
import profileImage from './assets/picc.png';
import todoImage from './assets/todo.png';
import habitImage from './assets/habit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="app-container">
      {/* PROFILE SECTION */}
      <div className="profile">
        <div className="left-content">
          <h1 className="prof-greeting">HELLO, I AM</h1>
          <h1 className="prof-name">Tanatswa Sibanda</h1>
          <p className="prof-title">Computer Engineering Student | Aspiring Software Developer</p>
          <p className="prof-description">
            I build functional applications and enjoy solving real-world problems with code.
            I am currently focused on React and continuously expanding my skills across software and systems.
          </p>
        </div>

        <div className="right-content">
          <img
            src={profileImage}
            alt="Tanatswa Sibanda"
            className="profile-image"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="prof-buttons">
        <button className="btn" onClick={() => {
          const projectsSection = document.querySelector('.projects-section');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          VIEW PROJECTS
        </button>
        <button
          className="btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/cv.pdf";
            link.download = "Tanatswa_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          DOWNLOAD CV
        </button>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm currently studying Computer Engineering at the University of Zimbabwe,
          with an interest in both software development and computer-based systems.
          I've been building applications using React and I enjoy turning ideas into
          functional, user-focused solutions while strengthening my problem-solving skills.
          I'm continuously learning and exploring areas beyond frontend, including backend
          and system-level concepts. I'm currently seeking an internship or attachment
          where I can gain real-world experience and grow as a developer.
        </p>
      </div>
      {/*Skills Section*/}
      <div className='skills-section'>

        <h2>Skills</h2>
        <div className='skills'>
          <div className='skills-categories'>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className='skills-categories'>
            <h3>Design</h3>
            <ul>
              <li>Figma</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className='skills-categories'>

            <h3>Tools</h3>
            <ul>

              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className='skills-categories'>
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Continuous Learning</li>
            </ul>
          </div>

        </div>
      </div>


      {/*Projects Section*/}
      <div className="projects-section">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Habit Tracker App </h3>
            <p>A React-based habit tracking app that helps users build consistent routines. Users can add custom habits, mark daily completion and visualize progress through interactive charts.  </p>
            <img src={habitImage} alt="Habit Tracker App" className="project-image" />
            <h4>Technologies Used</h4>
            <p>React, Recharts, CSS3, Local Storage</p>
            <a href="https://tanatswasibanda.github.io/Habit-Tracker/" target="_blank" className="project-link">View Project</a>

          </div>
          <div className="project-card">
            <h3>Kawaii To-Do List</h3>
            <p>A charming, user-friendly task management app with a cute "kawaii" design. Users can quickly add and view tasks in a visually appealing interface.</p>
            <img src={todoImage} alt="Kawaii To-Do List App" className="project-image" />
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, Local Storage</p>
            <a href="https://tanatswasibanda.github.io/To-Do-WebApp/" target="_blank" className="project-link">View Project</a>
          </div>
        </div>
      </div>

      {/*CONTACT SECTION*/}
      <div className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <a href="tel:+263780267447" >
            <img src={phoneIcon} alt="Phone" className="contact-link" />

          </a>
          <a href="mailto:tanatswa.m.sibanda@gmail.com" >
            <img src={emailIcon} alt="Email" className="contact-link" />

          </a>
          <a href="https://www.linkedin.com/in/tanatswa-sibanda-174839268/" target="_blank" rel="noopener noreferrer" >
            <img src={linkedinIcon} alt="LinkedIn" className="contact-link" />

          </a>
          <a href="https://github.com/TanatswaSibanda" target="_blank" rel="noopener noreferrer" >
            <img src={githubIcon} alt="GitHub" className="contact-link" />

          </a>
        </div>
      </div>


    </div >
  );
}

export default App;