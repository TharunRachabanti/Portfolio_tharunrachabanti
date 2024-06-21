import React from 'react';
import '../styles/services.css';

const servicesList = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces and experiences through detailed research, prototyping, and usability testing.',
    logo: '/assets/ui.png',
  },
  {
    title: 'Front-End Development',
    description: 'Building responsive and dynamic web and mobile interfaces using modern web technologies and frameworks.',
    logo: '/assets/fe.png',
  },
  {
    title: 'WEB DESIGN',
    description: 'Creating visually appealing and functional website layouts that prioritize user experience and accessibility',
    logo: '/assets/dispersionmine4.png',
  },
  {
    title: 'Full-Stack Development',
    description: 'Developing robust backend systems and seamless integrations with front-end applications.',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'App Development',
    description: 'Crafting high-performance mobile applications with a focus on user experience and cross-platform compatibility.',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'Web Development',
    description: 'Designing and developing scalable and responsive websites to deliver optimal user experiences across devices.',
    logo: '/assets/dispersionmine4.png',
  },
  
];

const Services = () => {
  return (
    <div className="servicesContainer">
      {servicesList.map((service, index) => (
        <div key={index} className="serviceCard">
          {/* <div className="serviceLogoContainer">
            <img src={service.logo} alt={`${service.title} logo`} className="serviceLogo" />
          </div> */}
          <div className="serviceContent">
            <h3 className="serviceTitle">{service.title}</h3>
            <p className="serviceDescription">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
