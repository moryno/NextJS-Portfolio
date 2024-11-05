// import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
};

export default nextConfig;
