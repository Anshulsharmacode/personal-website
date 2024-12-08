import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: "miro.medium.com",
      },
      {
        protocol: 'https',
        hostname: "cdn-images-1.medium.com",
      },
      {
        protocol: 'https',
        hostname: "www.google.com",
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
      }
    ],
  },
  experimental: {
    // Removed fontLoaders as it does not exist in type 'ExperimentalConfig'
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
};

export default nextConfig;