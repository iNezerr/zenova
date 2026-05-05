/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.zenovaoil.com.ng',
      },
    ],
  },
};

export default nextConfig;
