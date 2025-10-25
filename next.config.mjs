/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 👈 tells Next.js/Vercel you’re using the app directory
    typedRoutes: true,
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "standalone", // 👈 ensures clean build for Vercel serverless env
};

export default nextConfig;
