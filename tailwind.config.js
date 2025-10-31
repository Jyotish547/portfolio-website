/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Tailwind v4 specific options
  optimizeSpeed: true,
  experimental: {
    optimizeUniversalDefaults: true
  }
}
