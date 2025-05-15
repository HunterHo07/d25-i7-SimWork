/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/d25-i7-SimWork',
  assetPrefix: '/d25-i7-SimWork',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure all paths are treated as static
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
