import React, { useState } from "react";


function Header(){

  const [isVisible, setIsVisible] = useState(false);


  const toggleList = () => {
    setIsVisible(!isVisible);
  };

  return(
    <header>
      <title>DENIS MATTHEW PORTFOLIO</title>
      <link href="styles/home.css" rel="stylesheet"></link>
      <div className="container-header">
        <div className="navbar">
          <div className="navbar-kiri">
            <a href="main.html">Denis Matthew</a>
          </div>
      
          <div className="navbar-kanan">
            <div className={`tombolMenu ${isVisible ? "active" : ""}`} onClick ={toggleList}>
              <span>{isVisible ? "X" : "☰"}</span>
            </div>

            <div className={`sideMenu ${isVisible ? "open" : ""}`}>
              <nav>
                <h3>Navigation</h3>
                <ul>
                  <li><a href="#about-me" onClick={toggleList}>About Me</a></li>
                  <li><a href="#project" onClick={toggleList}>Projects</a></li>
                  <li><a href="#footer" onClick={toggleList}>Contacts</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header