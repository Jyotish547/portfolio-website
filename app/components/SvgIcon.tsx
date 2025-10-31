import React from 'react';

interface SvgIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  name, 
  className = "", 
  width = 24, 
  height = 24 
}) => {
  return (
    <div className={`svg-icon ${className}`}>
      <img 
        src={`/svg/tools/${name}.svg`} 
        alt={name} 
        width={width} 
        height={height} 
        style={{ display: 'inline-block' }}
      />
    </div>
  );
};

export default SvgIcon;
