import React, { useState } from 'react';
import './Portfolio.css'; 
import githubLogo from '../images/github.svg';
import telegram from '../images/telegram.svg';
import projectImage from '../images/projectImage1.jpeg'; // Import project image
import logo from '../images/logo.jpg'; // Import project image


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0); // Add state for active navigation item

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <body>
        <nav className={`navbar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[4.5rem] w-[80vw] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[36rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 ${isOpen ? 'active' : ''}`}>
          <div className="navbar-container">
            <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className="navbar-menu">
  <li className="navbar-item">
    <a href="#" className={`navbar-link ${activeNavItem === 0 ? 'active-link slide-active' : ''}`} onClick={() => setActiveNavItem(0)}>𝗛𝗼𝗺𝗲</a>
    <div className={`active-box ${activeNavItem === 0 ? 'slide-active' : ''}`}></div>
  </li>
  <li className="navbar-item">
    <a href="#aboutme" className={`navbar-link ${activeNavItem === 1 ? 'active-link' : ''}`} onClick={() => setActiveNavItem(1)}>𝗔𝗯𝗼𝘂𝘁</a>
    <div className={`active-box ${activeNavItem === 1 ? 'slide-active' : ''}`}></div>
  </li>
  <li className="navbar-item">
    <a href="#Myprojects" className={`navbar-link ${activeNavItem === 2 ? 'active-link' : ''}`} onClick={() => setActiveNavItem(2)}>𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀</a>
    <div className={`active-box ${activeNavItem === 2 ? 'slide-active' : ''}`}></div>
  </li>
  <li className="navbar-item">
    <a href="#skills" className={`navbar-link ${activeNavItem === 3 ? 'active-link' : ''}`} onClick={() => setActiveNavItem(3)}>𝗦𝗸𝗶𝗹𝗹𝘀</a>
    <div className={`active-box ${activeNavItem === 3 ? 'slide-active' : ''}`}></div>
  </li>
 
</ul>


          </div>
        </nav>

        <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
        <div className="container2">
          <b>Hey there! I'm Developer Tanish, a dynamic full-stack developer specializing in React.js. I bring solid skills in Python and mastery in Flutter and React Native to the table! 😎</b>
          <br />
          <div className="contact-section">
            <button>Contact Me Here →</button>
            <div className="social-icons">
              <div className='imagess'><a href="https://github.com/developertanishofficial" target='_blank'><img src={githubLogo} alt="GitHub" /></a></div>
              <div className ='imagess'><a href="https://t.me/trexhq" target='_blank'><img src={telegram} alt="Telegram" /></a></div>
            </div>
          </div>
      <section id ='aboutme' className="aboutme">
        
        <div className="container3">
          <h1>About Me</h1>At <i>18</i>, I am a student residing in India, aspiring to become a successful software engineer. Passionate about space, I am both an astrophile and a coder. My coding journey involves proficiency in <b className="b1">Python</b> , <b className="b2">React.js</b> , <b className="b3">Next.js</b> , and <b className="b4">Php</b>. Currently, I am exploring the realms of mobile app development with <b className="b2">Flutter</b> and <b className="b4">React Native</b>. The vibrant world of technology fuels my curiosity and drive. Beyond coding, the cosmos beckons me with its mysteries. From the shimmering stars to the enigmatic planets, the vast expanse of space captivates my imagination. Exploring the wonders of the universe is not just a fascination; it's a thrilling journey that fuels my boundless curiosity. Spreading positivity is my mission, whether it's through writing code, exploring the wonders of the universe, or simply sharing inspiration. In every pursuit, I aim to create a ripple effect of positivity and curiosity.</div>
      </section>

      
      <section id = 'Myprojects'className="Myprojects">
        <h1>My Projects</h1>
        <div className="project-container">
          <div className="project-box">
            <div className="project-content">
              <div className="project-info">
                <h2>Digital Marketing Website</h2>
                <p>Digital marketing Website Which Allow To Do Multiple Works To Attract Customers For Grow Their Business In Online Era.</p>
                <br />
                <button className="projectbtn">Html</button>
                <button className="projectbtn">Css</button>
                <button className="projectbtn">Php</button>
                <button className="projectbtn">Javascript</button><br />
                <div className="source">
                <a  href="https://github.com/developertanishofficial/digital-marketing-website" target='_blank'> <button className="projectbtn">Source code</button></a>
                </div>
              </div>
            </div>
            <img className='projectimg' src={projectImage} alt="Project Image"/>
          </div>
        </div>
        <br />
        <div className="project-container">
          <div className="project-box">
            <div className="project-content">
              <div className="project-info">
                
                <h2>Digital Marketing Website</h2>
                <p>Digital marketing Website Which Allow To Do Multiple Works To Attract Customers For Grow Their Business In Online Era.</p>
                <br />
                <button className="projectbtn">Html</button>
                <button className="projectbtn">Css</button>
                <button className="projectbtn">Php</button>
                <button className="projectbtn">Javascript</button> <br />
                <div className="source">
                <a  href="https://github.com/developertanishofficial/digital-marketing-website" target='_blank'> <button className="projectbtn">Source code</button></a>
                </div>
              </div>
            </div>
            <img className='projectimg' src={projectImage} alt="Project Image"/>
          </div>
        </div>
      </section>
      <br /><br />


      <section id ='skills' className="skills">
        <h1>Skills</h1>
        <div class="skills-container">
        <div className="skills-content">
          <button className="skillsbtn">HTML</button>
          <button className="skillsbtn">CSS</button>
          <button className="skillsbtn">JavaScript</button>
          <button className="skillsbtn">TypeScript</button>
          <button className="skillsbtn">PHP</button>
          <button className="skillsbtn">Python</button>
          <button className="skillsbtn">React Js</button>
          <button className="skillsbtn">React Native</button>
          <button className="skillsbtn">Node Js</button>
          <button className="skillsbtn">Next Js</button>
          <button className="skillsbtn">Telegram Api</button>
          <button className="skillsbtn">Git</button>
          <button className="skillsbtn">C++</button>
          <button className="skillsbtn">C#</button>
          <button className="skillsbtn">Mongodb</button>
          
        </div>
      </div>
      </section>
      <br /><br />
        </div>
      <footer className='footer'>© 2024 Developer Trex. All rights reserved.</footer>



      </body>
    </>
  );
};

export default Navbar;
