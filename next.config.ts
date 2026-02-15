import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Webpack config for when using --webpack flag
  webpack: (config, { dir }) => {
    // Ensure webpack resolves modules from the project directory, not parent
    config.resolve.modules = [
      path.resolve(dir, "node_modules"),
      ...(config.resolve.modules || []),
    ];
    return config;
  },
  // Turbopack config (empty to silence the warning, Turbopack should handle module resolution correctly)
  turbopack: {},
  // Image configuration
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
