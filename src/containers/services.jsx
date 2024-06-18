import React from 'react';
import '../styles/services.css';

const servicesList = [
  {
    title: 'APP DEVELOPMENT',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'WEB DEVELOPMENT',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'WEB DESIGN',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
  {
    title: 'APP DEVELOPMENT',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'WEB DEVELOPMENT',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_640.jpg',
  },
  {
    title: 'WEB DESIGN',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
  
];

const Services = () => {
  return (
    <div className="servicesContainer">
      {servicesList.map((service, index) => (
        <div key={index} className="serviceCard">
          <div className="serviceLogoContainer">
            <img src={service.logo} alt={`${service.title} logo`} className="serviceLogo" />
          </div>
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
