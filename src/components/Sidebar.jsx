import { useState } from 'react'; 
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
import PDFViewer from './PDFViewer';

const Sidebar = () => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const openPdfViewer = (e) => {
    e.preventDefault();
    setShowPdfViewer(true);
  };

  const closePdfViewer = () => {
    setShowPdfViewer(false);
  };

  return (
    <aside className="sidebar">
      <div className="profile-container">
        <img src="/profile.jpeg" alt="Profile" className="profile-pic" />
        <h2 className="name">JaeYoung Choi</h2>
        <p className="title">M.S. student at AEL, KAIST</p>
        <p className="location">Daejeon, South Korea</p>
      </div>
      
      <ul className="contact-links">
        <li className="lab">
          <FontAwesomeIcon icon={faUniversity} className="icon" />
          <a href="https://reflect9.github.io/ael/" className="link lab">
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
          <a href="https://github.com/jaeyoungchoi1" className="link github">
            GitHub
          </a>
        </li>
        <li className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <a href="https://www.linkedin.com/in/jaeyoungchoikaist" className="link linkedin">
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
          <a href="#" onClick={openPdfViewer} className="link cv">
            CV
          </a>
        </li>
      </ul>

      {showPdfViewer && (
        <PDFViewer 
          pdfUrl="/JaeyoungChoi_CV.pdf" 
          onClose={closePdfViewer} 
        />
      )}
    </aside>
  )
}

export default Sidebar
