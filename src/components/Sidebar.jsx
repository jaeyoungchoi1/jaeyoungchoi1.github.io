import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUniversity, 
  faEnvelope, 
  faFileAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <div className="profile-container">
        <img src="/profile.jpeg" alt="Profile" className="profile-pic" />
        <h2 className="name">Jae Young Choi</h2>
        <p className="title">Master's Student</p>
        <p className="location">Daejeon, South Korea</p>
      </div>
      
      <ul className="contact-links">
        <li className="lab">
          <FontAwesomeIcon icon={faUniversity} className="icon" />
          <a href="https://ai-experience-lab.github.io/" className="link lab" target="_blank" rel="noopener noreferrer">
            AI Experience Lab
          </a>
        </li>
        <li className="email">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <a href="mailto:jaeyoungchoi@kaist.ac.kr" className="link email">
            Email
          </a>
        </li>
        <li className="github">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <a href="https://github.com/jaeyoungchoi1" className="link github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <a href="https://www.linkedin.com/in/jaeyoungchoikaist" className="link linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        {/*<li className="scholar">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <a href="https://scholar.google.com/citations?user=xxx" className="link scholar">
            Google Scholar
          </a>
        </li>*/}
        <li className="cv">
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          <a href="/CV.pdf" className="link cv" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
