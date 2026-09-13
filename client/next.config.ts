import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/services/technology',
        destination: '/services/Technology',
      },
      {
        source: '/services/brand-marketing',
        destination: '/services/Brand-Marketing',
      },
    ];
  },
};

export default nextConfig;
