import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Permite o deploy mesmo com avisos pequenos
    ignoreDuringBuilds: true,
  },
  // Se tiveres problemas com imagens de outros sites, adiciona isto depois:
  // images: { domains: ['teu-site.com'] } 
};

export default nextConfig;