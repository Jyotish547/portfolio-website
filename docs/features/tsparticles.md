# tsParticles Implementation Guide

This document provides information on how tsParticles is implemented in the portfolio website and how to modify it for future needs.

## Overview

tsParticles is used to create an interactive particle background in the Hero section of the portfolio website. The implementation uses the latest version of tsParticles with React:

- `@tsparticles/react`: React wrapper for tsParticles
- `@tsparticles/engine`: Core engine for tsParticles
- `@tsparticles/preset-triangles`: Preset for triangle particles effect

## Current Implementation

The particles are implemented in the `Hero.tsx` component located at `app/components/pages/Hero.tsx`.

### Key Components

1. **Initialization**:
   - The particles engine is initialized using `initParticlesEngine` in a useEffect hook
   - The triangles preset is loaded using `loadTrianglesPreset`

2. **Rendering**:
   - The `Particles` component is conditionally rendered when the engine is initialized
   - Uses `fullScreen: { enable: true, zIndex: 0 }` to appear above the background but behind content
   - The Hero container has `z-index: 10` to ensure content appears above particles

3. **Configuration**:
   - Particles are configured using a `particlesOptions` object that follows the `ISourceOptions` interface
   - Current configuration uses the "triangles" preset with customized colors for particles, lines, and triangle fills
   - Performance balanced with 50 particles and moderate movement speed

## How to Modify

### Changing Particle Appearance

To modify the appearance of particles, edit the `particlesOptions` object in `Hero.tsx`:

```typescript
const particlesOptions: ISourceOptions = {
  preset: "triangles",
  // Modify these properties to change appearance
  particles: {
    color: {
      value: "#b9b9b9", // Particle color
    },
    links: {
      color: {
        value: "#b9b9b9", // Line color
      },
      triangles: {
        enable: true,
        color: {
          value: "#8b5cf6", // Triangle fill color
        },
        opacity: 0.1, // Triangle fill opacity
      }
    },
    // Other particle properties...
  },
  // ...
};
```

### Common Modifications

#### Change Particle and Line Colors

```typescript
particles: {
  color: {
    value: "#ffffff", // Change particle color
  },
  links: {
    color: {
      value: "#ffffff", // Change line color
    }
  }
}
```

#### Change Triangle Fill Color and Opacity

```typescript
particles: {
  links: {
    triangles: {
      color: {
        value: "#ff0000", // Change triangle fill color
      },
      opacity: 0.3, // Change triangle fill opacity (0-1)
    }
  }
}
```

#### Adjust Particle Count

```typescript
particles: {
  number: {
    value: 70, // Increase or decrease from current value of 50
  },
}
```

#### Change Particle Speed

```typescript
particles: {
  move: {
    speed: 3, // Increase or decrease from current value of 2
  },
}
```

#### Modify Interaction Behavior

```typescript
interactivity: {
  events: {
    onHover: {
      enable: true,
      mode: "attract", // Change interaction mode
    },
  },
}
```

### Performance Considerations

The current implementation balances visual appeal with performance:

1. **Particle Count**: 50 particles is a good middle ground for most devices
2. **Movement Speed**: Speed of 2 provides smooth animation without excessive CPU usage
3. **Triangle Opacity**: Low opacity (0.1) reduces the rendering impact
4. **Z-Index Management**: Proper layering to avoid unnecessary repaints

For further performance improvements, consider:

```typescript
// Reduce particle count for lower-end devices
particles: {
  number: {
    value: 30, // Lower value for better performance
  },
}

// Disable interactions on mobile
interactivity: {
  detect_on: "canvas", // or "window" for better performance
  events: {
    onHover: {
      enable: window.innerWidth > 768, // Only enable on desktop
    },
  },
}
```

### Responsive Configuration

For a responsive configuration that adapts to different devices:

```typescript
// Add this in your component
useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    setParticlesOptions(prev => ({
      ...prev,
      particles: {
        ...prev.particles,
        number: {
          value: width < 768 ? 30 : width < 1200 ? 50 : 70
        }
      }
    }));
  };
  
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call
  
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### Using Different Presets

To switch to a different preset:

1. Install the desired preset:
   ```bash
   npm install @tsparticles/preset-NAME
   ```

2. Import and load the preset in `Hero.tsx`:
   ```typescript
   import { loadPresetName } from "@tsparticles/preset-NAME";

   // In the initialization useEffect:
   useEffect(() => {
     initParticlesEngine(async (engine) => {
       await loadPresetName(engine);
     }).then(() => {
       setInit(true);
     });
   }, []);
   ```

3. Update the configuration to use the new preset:
   ```typescript
   const particlesOptions: ISourceOptions = {
     preset: "presetName",
     // Customizations...
   };
   ```

### Available Presets

Some popular presets include:

- `@tsparticles/preset-bubbles`
- `@tsparticles/preset-confetti`
- `@tsparticles/preset-fire`
- `@tsparticles/preset-fireworks`
- `@tsparticles/preset-fountain`
- `@tsparticles/preset-links`
- `@tsparticles/preset-snow`
- `@tsparticles/preset-stars`

## Resources

- [Official tsParticles Documentation](https://particles.js.org/)
- [GitHub Repository](https://github.com/tsparticles/tsparticles)
- [React tsParticles Documentation](https://github.com/tsparticles/react)
- [Available Presets](https://github.com/tsparticles/tsparticles/tree/main/presets)