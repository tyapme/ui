import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkComponentPreview } from "fumadocs-registry/remark";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkComponentPreview],
  },
});
