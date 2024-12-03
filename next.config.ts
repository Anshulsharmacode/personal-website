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
      // Add other domains as needed 
    ],
}
  /* config options here */
};

export default nextConfig;
