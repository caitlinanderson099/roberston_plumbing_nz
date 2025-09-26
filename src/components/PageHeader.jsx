import React from 'react';

const PageHeader = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    height: '400px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F3F4F6',
  };

  return (
    <div className="page-header" style={headerStyle}>
      {/* Overlay */}
      <div className="overlay"></div>
      {/* Title */}
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default PageHeader;
