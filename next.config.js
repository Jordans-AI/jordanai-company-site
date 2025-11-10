/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable standalone output for Docker
  output: 'standalone',
  // Optimize for production
  poweredByHeader: false,
  compress: true,
  // Fix standalone build path issue - set correct root directory
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
