/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/shelfspace/api/:path*',
        destination: `http://${process.env.NEXT_PRIVATE_AZURE_ADDRESS}:8080/:path*`,
      },
      {
        source: '/trackmoji/:path*',
        destination: `http://${process.env.NEXT_PRIVATE_AZURE_ADDRESS}:3010/:path*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/getrecap',
        destination: "https://apps.apple.com/in/app/recap-every-memory-matters/id6743312643",
        permanent: true,
      }
    ];
  }

};

export default nextConfig;
