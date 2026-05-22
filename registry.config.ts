import type { PluginOptions } from "fumadocs-registry";

export default {
  baseUrl: process.env.REGISTRY_BASE_URL ?? "http://localhost:3000/r",
  registry: {
    name: "tyap",
    homepage: "https://ui.tyap.me",
  },
  componentsDirs: [
    { name: "ui", type: "ui" },
    { name: "lib", type: "lib" },
  ],
  docsDirs: ["content/docs/components"],
  componentsDir: "src/registry",
  outputDir: "public/r",
} satisfies PluginOptions;
