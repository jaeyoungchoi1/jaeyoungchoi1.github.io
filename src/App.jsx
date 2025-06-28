import './App.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import AboutMeSection from './components/sections/AboutMeSection'
import NewsSection from './components/sections/NewsSection'
import PublicationSection from './components/sections/PublicationSection'
import EducationSection from './components/sections/EducationSection'

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <div className="content">
        <Sidebar />
        <main>
          <AboutMeSection />
          <NewsSection />
          <PublicationSection />
          <EducationSection />
        </main>
      </div>
      <div className="footer">
        <div className="copyright">© 2025 All Rights Reserved</div>
        <div className="last-update">Last updated: Jun 2025</div>
      </div>
    </div>
    </>
  )
}

export default App
