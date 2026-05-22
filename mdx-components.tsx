import { ComponentPreview } from "@/components/docs/component-preview";
import ButtonPreview from "@/registry/ui/button.preview";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ComponentPreview,
    ButtonPreview,
    ...components,
  };
}
