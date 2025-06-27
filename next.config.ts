import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
        bodySizeLimit: '2mb', // Optional: set body size limit
        allowedOrigins: ['localhost:3000'] // Optional: specify allowed origins
    }
},
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
};
