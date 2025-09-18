/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
  },
  // Disable TypeScript config file usage
  typescript: {
    configFile: false,
  },
}

module.exports = nextConfig