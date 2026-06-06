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

const code = `import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => { // [!code focus]
    try { // [!code focus]
      const item = window.localStorage.getItem(key) // [!code focus]
      return item ? JSON.parse(item) : initial // [!code focus]
    } catch { // [!code focus]
      return initial // [!code focus]
    } // [!code focus]
  }) // [!code focus]

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}`

export default function CodeBlockFocus() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language="tsx">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>use-local-storage.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
