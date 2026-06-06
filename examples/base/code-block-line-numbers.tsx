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

const code = `import { useEffect, useRef, useState } from "react"

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])

  return debounced
}`

export default function CodeBlockLineNumbers() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language="tsx" showLineNumbers>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>use-debounce.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
