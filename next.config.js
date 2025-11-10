/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable standalone output for Docker
  output: 'standalone',
  // Optimize for production
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
