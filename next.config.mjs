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
        destination: 'http://20.193.252.127:8080/:path*',
      }
    ]
  }

};

export default nextConfig;
