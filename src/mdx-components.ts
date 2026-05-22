import { ComponentPreview } from "@/components/docs/component-preview";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ComponentPreview,
    ...components,
  };
}
