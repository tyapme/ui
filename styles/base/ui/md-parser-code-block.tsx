"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/styles/base/ui/copy-button"

interface MDCodeBlockProps {
  raw: string
  language?: string
  className?: string
  children?: React.ReactNode
}

function MDCodeBlock({ raw, language, className, children }: MDCodeBlockProps) {
  return (
    <div
      className={cn(
        "group relative my-6 overflow-hidden rounded-lg border bg-[#0d1117]",
        className
      )}
    >
      {language && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <span className="font-mono text-xs text-white/40">{language}</span>
          <CopyButton
            value={raw}
            size="sm"
            className="text-white/40 hover:text-white/80"
          />
        </div>
      )}
      {!language && (
        <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
          <CopyButton
            value={raw}
            size="sm"
            className="text-white/40 hover:text-white/80"
          />
        </div>
      )}
      <div className="overflow-x-auto px-4 py-4 text-sm">{children}</div>
    </div>
  )
}

export { MDCodeBlock }
