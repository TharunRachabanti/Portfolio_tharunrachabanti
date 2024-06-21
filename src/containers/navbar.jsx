import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import profileImage from '/assets/tharun.png';
import { FaInstagram, FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const jobs = [
    'Software Developer',
    'Website Development',
    'Application Developer',
    'Front-End Developer',
    'Backend Development',
    'UI/UX Designer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [jobs.length]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <span className="navbar-name">TR</span>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contactme">Contact Me</a>
          
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
          </svg>
        </button>
      </div>
      {menuVisible && (
        <div className="navbar-links-mobile">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contactme">Contact Me</a>
        </div>
      )}
      <div className="navbar-bottom">
        <div className="navbar-info">
          <h1>I'm Tharun Rachabanti</h1>
          <b key={jobIndex} className="job-title-animation">{jobs[jobIndex]}</b>
          <p>Passionate and innovative Software Developer with real-time experience in full-stack web and mobile app development. Proficient in Java, Python, Dart, and various development frameworks. Adept at designing and implementing robust, scalable solutions. Strong problem-solving skills and a quick learner.
          </p>
          <button>Hire Me</button>
        </div>
        <div className="navbar-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;



