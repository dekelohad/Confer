import React from 'react';

const Icon = ({
  className = '',
  iconFamily,
  iconName,
  iconSize = 'fa-sm',
  children,
}) => {
  return (
    <p className={className}>
      <i className={`${iconFamily} ${iconName} ${iconSize}`}></i> {children}
    </p>
  );
};

export default Icon;
