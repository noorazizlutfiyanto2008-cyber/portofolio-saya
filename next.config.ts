import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error kecil saat build
  },
  typescript: {
    ignoreBuildErrors: true, // Mengabaikan error tipe data saat build
  },
};

export default nextConfig;