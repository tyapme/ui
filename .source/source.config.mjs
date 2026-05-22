// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkComponentPreview } from "fumadocs-registry/remark";
var docs = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkComponentPreview]
  }
});
export {
  source_config_default as default,
  docs
};
