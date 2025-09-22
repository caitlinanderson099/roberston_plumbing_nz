import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingHeader = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F3F4F6',
  };

  const navigate = useNavigate();

  const handleContact = (e) => {
    e.preventDefault();
    navigate('/contactus');
  }

  return (
    <div className="page-header landing-header" style={headerStyle}>
      {/* Overlay */}
      <div className="overlay"></div>
      <div className="header-cta">
        {/* Title */}
      <h1 className="header-title">{title}</h1>
      {/* CTA Button */}
      <button onClick={handleContact}>GET IN TOUCH TODAY!</button>
      </div>
      
    </div>
  );
};

export default LandingHeader;
