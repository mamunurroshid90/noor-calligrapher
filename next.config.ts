/** @type {import('next').NextConfig} */
const nextConfig = {
  // এই অংশটুকু যোগ করতে হবে
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;