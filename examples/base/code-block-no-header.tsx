"use client"

import {
  CodeBlockActions,
  CodeBlockContainer,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockProvider,
} from "@/styles/base/ui/code-block"

const code = `import { createHighlighter } from "shiki"
import { transformerNotationDiff } from "@shikijs/transformers"

const highlighter = await createHighlighter({
  themes: ["github-light", "github-dark"],
  langs: ["typescript"],
})

const html = highlighter.codeToHtml(source, {
  lang: "typescript",
  themes: { light: "github-light", dark: "github-dark" },
  transformers: [transformerNotationDiff()],
})`

export default function CodeBlockNoHeader() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlockProvider code={code}>
        <CodeBlockContainer language="typescript" className="flex">
          <CodeBlockContent
            code={code}
            language="typescript"
            className="min-w-0 flex-1"
          />
          <div className="flex shrink-0 items-center border-l border-border/30 bg-code px-1">
            <CodeBlockActions>
              <CodeBlockCopyButton />
            </CodeBlockActions>
          </div>
        </CodeBlockContainer>
      </CodeBlockProvider>
    </div>
  )
}
