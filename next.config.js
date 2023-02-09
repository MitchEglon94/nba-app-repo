/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.usatsimg.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
