import path from "path"
import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*", "./styles/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ],
  },
  turbopack: {
    root: path.resolve(import.meta.dirname, "../.."),
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  redirects() {
    return [
      // Form redirects to /docs/forms.
      {
        source: "/docs/components/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/base/form",
        destination: "/docs/forms",
        permanent: true,
      },
      // Old base/ prefix → flat URL (permanent redirect for SEO).
      {
        source: "/docs/components/base/:name",
        destination: "/docs/components/:name",
        permanent: true,
      },
      // Old radix/ prefix → flat URL.
      {
        source: "/docs/components/radix/:name",
        destination: "/docs/components/:name",
        permanent: true,
      },
      // Other redirects.
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/sidebar",
        destination: "/docs/components/sidebar",
        permanent: true,
      },
      {
        source: "/react-19",
        destination: "/docs/react-19",
        permanent: true,
      },
      {
        source: "/charts",
        destination: "/charts/area",
        permanent: true,
      },
      {
        source: "/view/styles/:style/:name",
        destination: "/view/:name",
        permanent: true,
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
      {
        source: "/mcp",
        destination: "/docs/mcp",
        permanent: false,
      },
      {
        source: "/directory",
        destination: "/docs/directory",
        permanent: false,
      },
      {
        source: "/new",
        destination: "/docs/new",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/docs/skills",
        permanent: true,
      },
      {
        source: "/cli",
        destination: "/docs/cli",
        permanent: true,
      },
      {
        source: "/themes",
        destination: "/create",
        permanent: true,
      },
      {
        source: "/code/:path*",
        destination:
          "https://raw.githubusercontent.com/shadcn-ui/ui/refs/heads/main/:path*",
        permanent: false,
      },
    ]
  },
  rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
      {
        source: "/init.md",
        destination: "/init/md",
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
