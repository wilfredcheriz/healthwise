/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export
  eslint: {
    ignoreDuringBuilds: true, // Prevents lint errors from breaking build
  },
};

module.exports = nextConfig;
