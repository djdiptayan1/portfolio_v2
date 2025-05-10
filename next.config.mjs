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
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'http://20.193.252.127:8080/:path*',
        permanent: false
      }
    ]
  }

};

export default nextConfig;
