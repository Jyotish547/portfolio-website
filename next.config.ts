import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Improve page loading performance
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
