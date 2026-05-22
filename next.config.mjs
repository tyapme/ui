/** @type {import('next').NextConfig} */
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "@/.source": "./.source",
      "@/.source/server": "./.source/server",
    },
  },
};

export default withMDX(nextConfig);
