/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  redirects: async () => {
    return [
      { source: "/signin", destination: "/", permanent: false },
      { source: "/signnotexist", destination: "/", permanent: false },
      { source: "/signup/:id", destination: "/", permanent: false },
    ];
  },
};

module.exports = nextConfig;
