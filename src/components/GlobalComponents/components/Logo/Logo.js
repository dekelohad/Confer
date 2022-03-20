import React from 'react';

const Logo = ({ logoName, source, className = '' }) => {
  return <img src={source} alt={logoName} className={className} />;
};

export default Logo;
