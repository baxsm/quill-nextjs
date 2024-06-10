/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/api/auth/login",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/api/auth/register",
        permanent: true,
      },
      {
        source: "/logout",
        destination: "/api/auth/logout",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = nextConfig;
