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
        <p className="title">Master's Student @ KAIST</p>
        <p className="location">Daejeon, South Korea</p>
      </div>
      
      <div className="contact-links">
        <div className="contact scholar">
          <a href="https://scholar.google.com/citations?user=XD02UbAAAAAJ" className="link scholar" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          </a>
        </div>
        <div className="contact email">
          <a href="mailto:jaeyoungchoi@kaist.ac.kr" className="link email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        {/* <div className="contact github">
          <a href="https://github.com/jaeyoungchoi1" className="link github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div> */}
        <div className="contact linkedin">
          <a href="https://www.linkedin.com/in/jaeyoungchoikaist" className="link linkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        <div className="contact cv">
          <a href="/CV-5.pdf" className="link cv" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
          </a>
        </div>
        {/*<li className="scholar">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <a href="https://scholar.google.com/citations?user=xxx" className="link scholar">
            Google Scholar
          </a>
        </li>*/}
        {/* <li className="cv">
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          <a href="/CV.pdf" className="link cv" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </li> */}
      </div>
    </aside>
  )
}

export default Sidebar
