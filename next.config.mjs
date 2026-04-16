/** @type {import('next').NextConfig} */
import { redirects } from "./redirects.js";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 1 year in seconds
  formats: ["image/avif", "image/webp"], // AVIF = best compression
  deviceSizes: [640, 750, 828, 1080],
  imageSizes: [16, 32, 48, 64, 96, 128, 160, 240],

  transpilePackages: ["mui-tel-input"],
  bundlePagesRouterDependencies: true,

  experimental: {
    serverComponentsExternalPackages: [], // Keep this empty to force bundling
  },

  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/llms.txt",
        destination: "/api/llms.txt",
      },
      {
        source: "/travel-by-mood/peace-and-calm",
        destination: "/upcoming-trips",
      },
      {
        source: "/travel-by-mood/curiosity",
        destination: "/upcoming-trips",
      },
    ];
  },
  async redirects() {
    return redirects;
  },

  async headers() {
    return [
      // Static assets - 1 year
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Images - 1 year
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Blog pages - 24 hours
      {
        source: "/blog/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Event pages - 24 hours
      {
        source: "/events/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Gallery - 1 week
      {
        source: "/gallery/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      // Homepage - 12 hours
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=43200, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
