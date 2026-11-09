import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.leslibraires.ca",
      },
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
      },
      {
        protocol: "https",
        hostname: "media.s-bol.com",
      },
      {
        protocol: "https",
        hostname: "arxiv.org",
      },
      {
        protocol: "https",
        hostname: "react-lm.github.io",
      },
      {
        protocol: "https",
        hostname: "lilianweng.github.io",
      },
      {
        protocol: "https",
        hostname: "www-cdn.anthropic.com",
      },
      {
        protocol: "https",
        hostname: "huyenchip.com",
      },
      {
        protocol: "https",
        hostname: "www.impawards.com",
      },
      {
        protocol: "https",
        hostname: "moviesmoviesmovies.co.uk",
      },
      {
        protocol: "https",
        hostname: "images1.penguinrandomhouse.com",
      },
      {
        protocol: "https",
        hostname: "images2.penguinrandomhouse.com",
      },
      {
        protocol: "https",
        hostname: "images3.penguinrandomhouse.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/blog/full-stack-ai-architecture.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/blog/ai-production-loop.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/blog/ai-request-lifecycle.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/blog/ai-agent-vs-chatbot.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/blog/agent-workflow-loop.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/image.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicons/favicon.ico",
        permanent: true,
      },
      {
        source: "/site.webmanifest",
        destination: "/favicons/site.webmanifest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
