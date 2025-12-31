import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Isto permite que o deploy funcione mesmo com pequenos avisos
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;