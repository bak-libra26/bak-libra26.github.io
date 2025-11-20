import React from 'react';

const Cheoma = () => {
  return (
    <div className="cheoma-container" style={{ 
      position: 'absolute', 
      top: '60px', // Just below header
      right: 0,
      width: '400px', // Smaller, corner accent
      height: '120px', 
      overflow: 'hidden',
      zIndex: 90,
      pointerEvents: 'none',
      opacity: 0.8
    }}>
      <svg 
        viewBox="0 0 400 120" 
        preserveAspectRatio="none" 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
        }}
      >
        {/* Minimalist single stroke representing the eaves curve */}
        <path 
          d="M0,0 Q200,120 400,80" 
          fill="none"
          stroke="var(--color-text-main)"
          strokeWidth="1.5"
          opacity="0.1"
        />
        {/* A subtle fill for depth, very light */}
        <path 
          d="M0,0 Q200,120 400,80 L400,0 Z" 
          fill="var(--color-text-main)" 
          opacity="0.03"
        />
      </svg>
    </div>
  );
};

export default Cheoma;
