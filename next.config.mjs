/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages doesn't support trailing slashes
  trailingSlash: false,
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
