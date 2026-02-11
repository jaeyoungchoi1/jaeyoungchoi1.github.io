const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
        <div className="logo">
            <strong>
                Jae Young Choi
            </strong>
        </div>
        <nav className="nav">
          <a href="CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          {/* <a href="#about">About Me</a>
          <a href="#news">Latest News</a>
          <a href="#publications">Publication</a>
          <a href="#edu">Education</a> */}
          {/*<a href="#experience">Experience</a>*/}
        </nav>
        </div>
      </header>
    )
  }
  
  export default Header
  