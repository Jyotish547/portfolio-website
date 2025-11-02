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
      <div className="svg-wrapper">
        <img 
          src={`/svg/tools/${name}.svg`} 
          alt={name} 
          width={width} 
          height={height} 
          className="svg-illustration-icon"
          style={{ 
            display: 'inline-block',
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
    </div>
  );
};

export default SvgIcon;
