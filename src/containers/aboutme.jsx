import React, { useState } from 'react';
import profileImage from '/assets/dispersionmine4.png';
import '../styles/aboutme.css';

const Aboutme = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      
      <div className={`aboutme-container ${isHovered ? 'hovered' : ''}`}>
      <h1 className="aboutme-heading">About me</h1>
        <div
          className="aboutme-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="card-image-container">
            <img src={profileImage} alt="Irene Mmassy" className="profile-image" />
          </div>
          <div className="card-content">
            <h1 className="name">Tharun Rachabanti</h1>
            <p className="title">Full Stack Developer</p>
            <p className="description">
            I'm a recent B.E. Computer Science graduate from Sathyabama University, now based in Hyderabad and aspiring to be a Software Engineer. My skills include Java, Python, C, Dart, data structures, algorithms, HTML5, CSS3, JavaScript, ReactJS, Node.js, Express.js, Firebase, MongoDB, and Oracle. I have hands-on experience with technologies like Flutter, Node.js, MongoDB,Firebase, integrating advanced concepts like AR, deep learning, and machine learning.


            </p>
            <p className='description1'>
            I developed a face recognition system with 98% accuracy. I'm a collaborative problem-solver who thrives in fast-paced environments, seeking a Software Engineering role to leverage my skills and innovative mindset.
            </p>
            {/* <div className="contact-info">
              <p><strong>Email:</strong> tharunrachabanti@gmail.com</p>
              <p><strong>Phone:</strong> +91 9347644178</p>
              
            </div> */}
            {/* <div className="freelance-status">
              <p>Freelance: Available</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
