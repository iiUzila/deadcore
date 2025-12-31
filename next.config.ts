import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A única coisa que vamos deixar aqui é a regra para ignorar erros no deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;