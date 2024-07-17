/** @type {import('next').NextConfig} */

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/**',
    },
  ],
};

const nextConfig = {
  images,
};

export default nextConfig;
