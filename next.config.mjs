/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false, // ⛔ Turbopack disable (Vercel fix)
  },
};

export default nextConfig;
