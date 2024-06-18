import React from 'react';
import '../styles/firstcontainer.css';
 // Import the Services component
import gggImage from '/assets/hhh.png';
import Services from './services';

const FirstContainer = () => {
  return (
    
    <div className="first-container">
      <h1 className="heading-3d">Services</h1>
      <img src={gggImage} alt="GGG Image" />

      {/* Render the Services component */}
      <Services />
    </div>
  );
}

export default FirstContainer;
