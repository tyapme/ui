import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import { toString as hastToString } from "hast-util-to-string"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypePrettyCode from "rehype-pretty-code"
import { unified } from "unified"
import { visit } from "unist-util-visit"

import { cn } from "@/registry/bases/base/lib/utils"
import { MDCodeBlock } from "@/registry/ui/md-parser-code-block"

interface MDParserProps {
  children: string
  className?: string
}

// Capture raw code text onto <pre data-raw="..."> before pretty-code transforms it
function captureRaw() {
  return (tree: Parameters<typeof visit>[0]) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "pre") {
        const code = node.children?.find(
          (c: any) => c.type === "element" && c.tagName === "code"
        )
        if (code) {
          node.properties = node.properties ?? {}
          node.properties["data-raw"] = hastToString(code)
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
    .use(captureRaw)
    .use(rehypePrettyCode, {
      theme: { dark: "github-dark", light: "github-light" },
      keepBackground: false,
    })

  const mdast = processor.parse(children)
  const hast = await processor.run(mdast)

  const content = toJsxRuntime(hast, {
    Fragment,
    jsx: jsx as any,
    jsxs: jsxs as any,
    components: {
      h1: ({ children: c, ...p }: any) => (
        <h1
          className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance"
          {...p}
        >
          {c}
        </h1>
      ),
      h2: ({ children: c, ...p }: any) => (
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          {...p}
        >
          {c}
        </h2>
      ),
      h3: ({ children: c, ...p }: any) => (
        <h3
          className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
          {...p}
        >
          {c}
        </h3>
      ),
      h4: ({ children: c, ...p }: any) => (
        <h4
          className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          {...p}
        >
          {c}
        </h4>
      ),
      p: ({ children: c, ...p }: any) => (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...p}>
          {c}
        </p>
      ),
      blockquote: ({ children: c, ...p }: any) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic" {...p}>
          {c}
        </blockquote>
      ),
      ul: ({ children: c, ...p }: any) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...p}>
          {c}
        </ul>
      ),
      ol: ({ children: c, ...p }: any) => (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...p}>
          {c}
        </ol>
      ),
      a: ({ href, children: c, ...p }: any) => (
        <a
          href={href}
          className="font-medium text-primary underline underline-offset-4"
          {...p}
        >
          {c}
        </a>
      ),
      table: ({ children: c, ...p }: any) => (
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full" {...p}>
            {c}
          </table>
        </div>
      ),
      tr: ({ children: c, ...p }: any) => (
        <tr className="m-0 border-t p-0 even:bg-muted" {...p}>
          {c}
        </tr>
      ),
      th: ({ children: c, ...p }: any) => (
        <th
          className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
          {...p}
        >
          {c}
        </th>
      ),
      td: ({ children: c, ...p }: any) => (
        <td
          className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          {...p}
        >
          {c}
        </td>
      ),
      hr: (p: any) => <hr className="my-4 md:my-8" {...p} />,
      strong: ({ children: c, ...p }: any) => (
        <strong className="font-semibold" {...p}>
          {c}
        </strong>
      ),
      em: ({ children: c, ...p }: any) => (
        <em className="italic" {...p}>
          {c}
        </em>
      ),
      code: ({ children: c, ...p }: any) => {
        // Inline code — no language class from pretty-code
        if (!p["data-language"]) {
          return (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {c}
            </code>
          )
        }
        return (
          <code {...p}>
            {c}
          </code>
        )
      },
      pre: ({ children: c, "data-raw": raw, "data-language": lang, ...p }: any) => (
        <MDCodeBlock raw={raw ?? ""} language={lang}>
          <pre {...p}>{c}</pre>
        </MDCodeBlock>
      ),
    },
  })

  return <div className={cn("", className)}>{content}</div>
}

export { MDParser }
