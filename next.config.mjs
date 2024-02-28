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
      {
        protocol: "https",
        hostname: "assets.everspringpartners.com",
      },
      {
        protocol: "https",
        hostname: "d1krbhyfejrtpz.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "wp.disruptiveadvertising.com",
      },
      {
        protocol: "https",
        hostname: "www.youcubed.org",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
