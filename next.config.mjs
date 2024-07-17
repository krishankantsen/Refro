/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example.com',
           
          },
        ],
        domains: ['res.cloudinary.com']
      },
};

export default nextConfig;
