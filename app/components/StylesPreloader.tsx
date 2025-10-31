'use client';

import React from 'react';

// This component helps preload styles to avoid CSS flashing
const StylesPreloader: React.FC = () => {
  return (
    <style jsx global>{`
      /* Critical CSS preload - this ensures basic styles are available immediately */
      body {
        font-family: var(--font-roboto-flex);
        transition: background-color 0.1s ease-in-out;
      }
      
      /* Preload basic section styles */
      .section-container {
        width: 100%;
        max-width: 1280px;
        padding: 2.5rem;
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
    `}</style>
  );
};

export default StylesPreloader;
