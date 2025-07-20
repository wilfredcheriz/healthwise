/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint during builds (e.g., on Vercel)
  },
};

module.exports = nextConfig;
