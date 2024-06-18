import React from 'react';
import '../styles/secondcontainer.css';

const Secondcontainer = () => {
  return (
    <div className='background'>
      <div className='container'>
        <div className='contact-container'>
          <h2>Contact Me</h2>
          <form className='contact-form'>
            <div className='input-group'>
              <input id='name' type='text' placeholder='Enter your name' required className='input-field' />
            </div>
            <div className='input-group'>
              <input id='email' type='email' placeholder='Enter your email' required className='input-field' />
            </div>
            <div className='input-group'>
              <textarea id='message' placeholder='Type your message here' required className='input-field'></textarea>
            </div>
            <button type='submit' className='send-btn'>Send Message</button>
          </form>
        </div>
        <div className='map-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717831223224!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Secondcontainer;
