import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
        bodySizeLimit: '2mb', // Optional: set body size limit
        allowedOrigins: ['localhost:3000'] // Optional: specify allowed origins
    }
}
};

export default nextConfig;
