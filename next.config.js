/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/registration',
        destination: '/registration/index.html',
      },
    ]
  },
}

module.exports = nextConfig
