'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

// This component injects critical CSS using a different approach
const CriticalStyles: React.FC = () => {
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'critical-css');
    
    // Add critical CSS
    styleElement.textContent = `
      /* Critical CSS preload - this ensures basic styles are available immediately */
      body {
        font-family: var(--font-roboto-flex);
        transition: background-color 0.1s ease-in-out;
      }
      
      /* Preload basic section styles */
      .section-container {
        width: 100%;
        max-width: 1280px;
      }
      
      /* Preload hero section */
      .hero-section {
        background-color: var(--black);
        color: var(--fb-primary);
      }
      
      /* Preload projects section */
      .projects-section {
        background-color: var(--white);
        color: var(--fw-primary);
      }
    `;
    
    // Add it to the head
    document.head.appendChild(styleElement);
    
    // Cleanup on unmount
    return () => {
      const element = document.getElementById('critical-css');
      if (element) {
        element.remove();
      }
    };
  }, []);
  
  return null;
};

export default CriticalStyles;
