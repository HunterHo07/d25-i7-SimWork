/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  // Remove basePath and assetPrefix as they're not needed for Vercel
  images: {
    domains: ['vercel.com'],
  },
  // Keep trailing slash for consistent URLs
  trailingSlash: true,
};

export default nextConfig;
