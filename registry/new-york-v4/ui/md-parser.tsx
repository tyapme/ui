import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"

interface MDParserProps {
  children: string
  className?: string
}

function MDParser({ children, className }: MDParserProps) {
  return (
    <div className={cn("", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children: c }) => (
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              {c}
            </h1>
          ),
          h2: ({ children: c }) => (
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              {c}
            </h2>
          ),
          h3: ({ children: c }) => (
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              {c}
            </h3>
          ),
          h4: ({ children: c }) => (
            <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
              {c}
            </h4>
          ),
          p: ({ children: c }) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6">{c}</p>
          ),
          blockquote: ({ children: c }) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic">{c}</blockquote>
          ),
          ul: ({ children: c }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{c}</ul>
          ),
          ol: ({ children: c }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{c}</ol>
          ),
          li: ({ children: c }) => <li>{c}</li>,
          code: ({ className: cls, children: c }) => {
            const isBlock = /language-(\w+)/.test(cls || "")
            if (isBlock) {
              return <code className={cn("font-mono text-sm", cls)}>{c}</code>
            }
            return (
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {c}
              </code>
            )
          },
          pre: ({ children: c }) => (
            <pre className="mt-6 mb-4 overflow-x-auto rounded-lg border bg-black py-4 px-4">
              {c}
            </pre>
          ),
          a: ({ href, children: c }) => (
            <a
              href={href}
              className="font-medium text-primary underline underline-offset-4"
            >
              {c}
            </a>
          ),
          table: ({ children: c }) => (
            <div className="my-6 w-full overflow-y-auto">
              <table className="w-full">{c}</table>
            </div>
          ),
          tr: ({ children: c }) => (
            <tr className="m-0 border-t p-0 even:bg-muted">{c}</tr>
          ),
          th: ({ children: c }) => (
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {c}
            </th>
          ),
          td: ({ children: c }) => (
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {c}
            </td>
          ),
          hr: () => <hr className="my-4 md:my-8" />,
          strong: ({ children: c }) => (
            <strong className="font-semibold">{c}</strong>
          ),
          em: ({ children: c }) => <em className="italic">{c}</em>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

export { MDParser }
