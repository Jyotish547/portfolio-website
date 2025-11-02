'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ResearchIllustration } from '../hero-illustrations/ResearchIllustration';
import { DesignIllustration } from '../hero-illustrations/DesignIllustration';
import { DevelopmentIllustration } from '../hero-illustrations/DevelopmentIllustration';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadTrianglesPreset } from '@tsparticles/preset-triangles';
import type { ISourceOptions } from '@tsparticles/engine';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [init, setInit] = useState(false);
  const illustrations = [
    { component: ResearchIllustration, key: "research" },
    { component: DesignIllustration, key: "design" },
    { component: DevelopmentIllustration, key: "development" },
  ];

  useEffect(() => {
    // For now, we only have one illustration, so we'll keep it active
    // This will be updated when more illustrations are added
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % illustrations.length);
    }, 5000); // Active state visible for 5 seconds before exiting

    return () => clearInterval(timer);
  }, [illustrations.length]);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadTrianglesPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log('Particles container loaded', container);
  }, []);

  // Particles configuration with triangles preset
  const particlesOptions: ISourceOptions = {
    preset: "triangles",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: "#9CA3AF", // Particle color
      },
      number: {
        value: 50, // This is a good balance between visual appeal and performance
      },
      move: {
        speed: 2, // This speed works well for most devices
      },
      links: {
        color: {
          value: "#9CA3AF", // Line color between particles
        },
        triangles: {
          enable: true,
          color: {
            value: "#9CA3AF", // Triangle fill color (violet to match theme)
          },
          opacity: 0.1, // Subtle transparency for the triangle fill
        }
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0, // Above background, below content
    },
  };

  return (
    <section className="hero-section relative">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
      )}
      <div className="hero-container relative z-10">
        <div className="hero-content">
          <div className='hero-title-icons'>
            
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="font-bold text-violet">Jyothish Gompa</span>
          </h1>
          <p className="caption-text">
            I love bringing ideas to life, from the first sketch to the final launch.
          </p>
        </div>
        <div className='hero-illustration-container'>
          <div className="svg-wrapper">
            <AnimatePresence mode="wait">
              {illustrations.map((Illustration, index) => (
                activeIndex === index && (
                  <Illustration.component 
                    key={Illustration.key} 
                    isActive={true}
                  />
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;