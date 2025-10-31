const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Add Tailwind v4 optimization options
      minify: process.env.NODE_ENV === 'production',
      // These options help with faster development reloads
      quickDevelopment: true,
      incremental: true,
      // Enable faster hot reloading
      hotReloading: true,
    },
  },
};

export default config;
