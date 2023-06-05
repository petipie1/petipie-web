/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["freepngimg.com"]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
};

module.exports = nextConfig;
