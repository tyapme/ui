import * as React from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers"
import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import type { ShikiTransformer } from "shiki"
import { unified } from "unified"
import { visit } from "unist-util-visit"

import { cn } from "@/lib/utils"
import { MDCodeBlock } from "@/styles/base/ui-rtl/md-parser-code-block"
import {
  TypographyA,
  TypographyBlockquote,
  TypographyEM,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyHR,
  TypographyInlineCode,
  TypographyOL,
  TypographyP,
  TypographyStrong,
  TypographyTable,
  TypographyTD,
  TypographyTH,
  TypographyTR,
  TypographyUL,
} from "@/styles/base/ui-rtl/typography"

// Mirror the Shiki notation transformers used by the standalone CodeBlock so
// ```diff / [!code highlight] / [!code focus] annotations render identically.
const CODE_TRANSFORMERS: ShikiTransformer[] = [
  transformerNotationDiff({ matchAlgorithm: "v3" }),
  transformerNotationHighlight({ matchAlgorithm: "v3" }),
  transformerNotationWordHighlight({ matchAlgorithm: "v3" }),
  transformerNotationFocus({ matchAlgorithm: "v3" }),
  transformerNotationErrorLevel({ matchAlgorithm: "v3" }),
]

interface MDParserProps {
  children: string
  className?: string
}

type RuntimeOptions = Parameters<typeof toJsxRuntime>[1]
type MarkdownElementProps = {
  children?: React.ReactNode
  href?: string
  "data-language"?: string
  "data-raw"?: string
  "data-rehype-pretty-code-figure"?: unknown
  [key: string]: unknown
}

type MarkdownElementComponent = (props: MarkdownElementProps) => React.ReactNode

type HastElement = {
  type: string
  tagName?: string
  children?: unknown[]
  properties?: Record<string, unknown>
}

const isHastElement = (node: unknown): node is HastElement =>
  typeof node === "object" &&
  node !== null &&
  "type" in node &&
  (node as { type: unknown }).type === "element"

const toComponentProps = <TProps extends object>(
  props: Omit<MarkdownElementProps, "children">
) => props as TProps

function addLanguageToFigure() {
  return (tree: Parameters<typeof visit>[0]) => {
    visit(tree, "element", (node) => {
      const element = node as HastElement
      if (
        element.tagName === "figure" &&
        element.properties?.["data-rehype-pretty-code-figure"] !== undefined
      ) {
        const pre = element.children?.find(
          (child): child is HastElement =>
            isHastElement(child) && child.tagName === "pre"
        )
        const code = pre?.children?.find(
          (child): child is HastElement =>
            isHastElement(child) && child.tagName === "code"
        )
        if (code?.properties?.["data-language"]) {
          element.properties["data-language"] = code.properties["data-language"]
        }
      }
    })
  }
}

async function MDParser({ children, className }: MDParserProps) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      theme: { dark: "github-dark", light: "github-light" },
      keepBackground: false,
      transformers: CODE_TRANSFORMERS,
    })
    .use(addLanguageToFigure)

  const mdast = processor.parse(children)
  const hast = await processor.run(mdast)

  const content = toJsxRuntime(hast, {
    development: false,
    Fragment,
    jsx: jsx as RuntimeOptions["jsx"],
    jsxs: jsxs as RuntimeOptions["jsxs"],
    components: {
      figure: ({
        children: c,
        "data-rehype-pretty-code-figure": isFigure,
        "data-raw": raw,
        "data-language": lang,
        ...p
      }: MarkdownElementProps) => {
        if (isFigure !== undefined) {
          return (
            <MDCodeBlock raw={raw ?? ""} language={lang}>
              {c}
            </MDCodeBlock>
          )
        }
        return (
          <figure {...toComponentProps<React.ComponentProps<"figure">>(p)}>
            {c}
          </figure>
        )
      },
      h1: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyH1
          {...toComponentProps<React.ComponentProps<typeof TypographyH1>>(p)}
        >
          {c}
        </TypographyH1>
      ),
      h2: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyH2
          {...toComponentProps<React.ComponentProps<typeof TypographyH2>>(p)}
        >
          {c}
        </TypographyH2>
      ),
      h3: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyH3
          {...toComponentProps<React.ComponentProps<typeof TypographyH3>>(p)}
        >
          {c}
        </TypographyH3>
      ),
      h4: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyH4
          {...toComponentProps<React.ComponentProps<typeof TypographyH4>>(p)}
        >
          {c}
        </TypographyH4>
      ),
      p: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyP
          {...toComponentProps<React.ComponentProps<typeof TypographyP>>(p)}
        >
          {c}
        </TypographyP>
      ),
      blockquote: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyBlockquote
          {...toComponentProps<
            React.ComponentProps<typeof TypographyBlockquote>
          >(p)}
        >
          {c}
        </TypographyBlockquote>
      ),
      ul: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyUL
          {...toComponentProps<React.ComponentProps<typeof TypographyUL>>(p)}
        >
          {c}
        </TypographyUL>
      ),
      ol: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyOL
          {...toComponentProps<React.ComponentProps<typeof TypographyOL>>(p)}
        >
          {c}
        </TypographyOL>
      ),
      a: ({ href, children: c, ...p }: MarkdownElementProps) => (
        <TypographyA
          href={href}
          {...toComponentProps<React.ComponentProps<typeof TypographyA>>(p)}
        >
          {c}
        </TypographyA>
      ),
      table: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyTable
          {...toComponentProps<React.ComponentProps<typeof TypographyTable>>(p)}
        >
          {c}
        </TypographyTable>
      ),
      tr: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyTR
          {...toComponentProps<React.ComponentProps<typeof TypographyTR>>(p)}
        >
          {c}
        </TypographyTR>
      ),
      th: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyTH
          {...toComponentProps<React.ComponentProps<typeof TypographyTH>>(p)}
        >
          {c}
        </TypographyTH>
      ),
      td: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyTD
          {...toComponentProps<React.ComponentProps<typeof TypographyTD>>(p)}
        >
          {c}
        </TypographyTD>
      ),
      hr: (p: MarkdownElementProps) => (
        <TypographyHR
          {...toComponentProps<React.ComponentProps<typeof TypographyHR>>(p)}
        />
      ),
      strong: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyStrong
          {...toComponentProps<React.ComponentProps<typeof TypographyStrong>>(
            p
          )}
        >
          {c}
        </TypographyStrong>
      ),
      em: ({ children: c, ...p }: MarkdownElementProps) => (
        <TypographyEM
          {...toComponentProps<React.ComponentProps<typeof TypographyEM>>(p)}
        >
          {c}
        </TypographyEM>
      ),
      code: ({ children: c, ...p }: MarkdownElementProps) => {
        if (!p["data-language"]) {
          return <TypographyInlineCode>{c}</TypographyInlineCode>
        }
        return (
          <code {...toComponentProps<React.ComponentProps<"code">>(p)}>
            {c}
          </code>
        )
      },
    } satisfies Record<
      string,
      MarkdownElementComponent
    > as RuntimeOptions["components"],
  })

  return <div className={cn("", className)}>{content}</div>
}

export { MDParser }
