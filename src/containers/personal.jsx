import '../styles/personal.css';
import React from 'react';

const Personal = () => {
  return (
    <div className="personal-container">
      <h2>Mobile App: Jewellery App</h2>
      <div className="project-details">
        <h3>GitHub Link</h3>
        <p>Duration: June 2023 – Oct 2023</p>
        <h4>Description:</h4>
        <p>Crafted an advanced Flutter app for Balaji Jewellery, offering dynamic, tailored shopping experiences.</p>
        <p>Utilized Firebase for robust backend integration and optimized UI/UX design, ensuring smooth navigation and interaction.</p>
        <h4>Process:</h4>
        <ul>
          <li><strong>User Research:</strong> Understood user needs for a jewelry shopping app.</li>
          <li><strong>Wireframing:</strong> Designed the app interface.</li>
          <li><strong>Prototyping:</strong> Developed a prototype using Flutter.</li>
          <li><strong>User Testing:</strong> Ensured smooth navigation and interaction.</li>
        </ul>
        <h4>Outcome:</h4>
        <p>Enhanced engagement and sales with unique, user-centric features, fostering satisfaction.</p>
      </div>
      <div className="app-screens">
        <h3>App Screens</h3>
        <div className="screens-container">
          <img src="screen1.png" alt="App Screen 1" />
          <img src="screen2.png" alt="App Screen 2" />
          <img src="screen3.png" alt="App Screen 3" />
        </div>
      </div>
    </div>
  );
}

export default Personal;
