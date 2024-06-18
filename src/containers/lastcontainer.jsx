// // LastContainer.jsx

// import React from 'react';
// import '../styles/lastcontainer.css';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// const LastContainer = ({ showPersonal }) => { // Receive the showPersonal function as prop
//   return (
//     <div className='lastcontainer'>
//       <div className='contact-info'>
//         <h2>Contact Me</h2>
//         <p>Email: tharunrachabanti@gmail.com</p>
//         <p>Phone: +91 9347644178</p>
//       </div>
//       <div className='social-media'>
//         <h2>Follow Me</h2>
//         <div className='icons'>
//           <a href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>
//             <FaLinkedin />
//           </a>
//           <a href='https://github.com/yourprofile' target='_blank' rel='noopener noreferrer'>
//             <FaGithub />
//           </a>
//           <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
//             <FaTwitter />
//           </a>
//         </div>
//       </div>
//       <div className='cta'>
//         <p>I'm currently open to new opportunities. Let's get in touch!</p>
//       </div>
//       <button onClick={showPersonal}>personal</button> {/* Call showPersonal function on button click */}
//     </div>
//   );
// }

// export default LastContainer;



import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/lastcontainer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';



const LastContainer = () => {
  return (
    <div className='lastcontainer'>
      <div className='contact-info'>
        <h2>Contact Me</h2>
        <p>Email: tharunrachabanti@gmail.com</p>
        <p>Phone: +91 9347644178</p>
      </div>
      <div className='social-media'>
        <h2>Follow Me</h2>
        <div className='icons'>
          <a href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className='cta'>
        <p>I'm currently open to new opportunities. Let's get in touch!</p>
      </div>
      <Link to="/personal">
        <button>personal</button>
      </Link>
    </div>
  );
}

export default LastContainer;
