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

const code = `import { createStore } from "zustand" // [!code --]
import { create } from "zustand" // [!code ++]

const useStore = createStore(() => ({ // [!code --]
const useStore = create(() => ({ // [!code ++]
  count: 0,
  increment: () =>
    set((state) => ({ count: state.count + 1 })),
}))

export default useStore`

export default function CodeBlockDiff() {
  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language="tsx">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>store.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
