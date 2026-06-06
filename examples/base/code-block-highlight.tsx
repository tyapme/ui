"use client"

import { FileIcon } from "lucide-react"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/styles/base/ui/code-block"

const code = `import { createHighlighter } from "shiki"

const highlighter = await createHighlighter({
  langs: ["typescript"],
  themes: ["github-light", "github-dark"], // [!code highlight]
})

const html = highlighter.codeToHtml(code, {
  lang: "typescript",
  themes: { // [!code highlight]
    light: "github-light", // [!code highlight]
    dark: "github-dark", // [!code highlight]
  }, // [!code highlight]
})`

export default function CodeBlockHighlight() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language="typescript">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>highlight.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
