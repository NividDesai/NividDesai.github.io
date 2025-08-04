/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages doesn't support trailing slashes
  trailingSlash: false,
};

export default nextConfig;
