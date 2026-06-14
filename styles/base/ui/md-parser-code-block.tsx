"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  CodeBlockActions,
  CodeBlockContainer,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockProvider,
  CodeBlockTitle,
} from "@/styles/base/ui/code-block"

interface MDCodeBlockProps {
  raw: string
  language?: string
  className?: string
  children?: React.ReactNode
}

function MDCodeBlock({ raw, language, className, children }: MDCodeBlockProps) {
  return (
    <CodeBlockProvider code={raw}>
      <CodeBlockContainer
        language={language ?? "text"}
        className={cn("my-6", className)}
      >
        {language ? (
          <CodeBlockHeader>
            <CodeBlockTitle>
              <span className="font-mono text-xs">{language}</span>
            </CodeBlockTitle>
            <CodeBlockActions>
              <CodeBlockCopyButton />
            </CodeBlockActions>
          </CodeBlockHeader>
        ) : (
          <div className="absolute top-2 right-2 z-10 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            <CodeBlockCopyButton />
          </div>
        )}
        <div className="fd-code fd-code-animate relative max-h-[600px] overflow-auto text-sm [&_pre]:py-3.5">
          {children}
        </div>
      </CodeBlockContainer>
    </CodeBlockProvider>
  )
}

export { MDCodeBlock }
