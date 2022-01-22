/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      crypto: false,
      path: require.resolve('path-browserify'),
      process: false,
      stream: false
    }
    return config;
  },
}

module.exports = nextConfig
