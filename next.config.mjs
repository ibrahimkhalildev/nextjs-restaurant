/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dj493l0jy/image/upload/**',
        search: ''
      }
    ]
  },
  reactCompiler: true
}

export default nextConfig
