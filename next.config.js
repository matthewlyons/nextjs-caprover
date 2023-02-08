/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "https://www.google.com",
      },
    ];
  },
};

module.exports = nextConfig;
