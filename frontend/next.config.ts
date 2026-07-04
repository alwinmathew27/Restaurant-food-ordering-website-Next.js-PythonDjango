import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alwinmathew.pythonanywhere.com",
      },
    ],
  },
};

export default nextConfig;