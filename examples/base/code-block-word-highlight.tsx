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

const code = `// [!code word:useCallback]
import { useCallback, useState } from "react"

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial)

  const toggle = useCallback(() => setOn((v) => !v), [])
  const setTrue = useCallback(() => setOn(true), [])
  const setFalse = useCallback(() => setOn(false), [])

  return { on, toggle, setTrue, setFalse }
}`

export default function CodeBlockWordHighlight() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language="tsx">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>use-toggle.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
