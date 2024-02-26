/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s3-ap-south-1.amazonaws.com",
        port: "",
        pathname: "/static.awfis.com/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
