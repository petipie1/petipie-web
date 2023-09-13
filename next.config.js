/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["freepngimg.com", "res.cloudinary.com"]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY
  },
};

module.exports = nextConfig;
