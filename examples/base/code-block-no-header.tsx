"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/styles/base/ui/button"

const code = `npx shadcn@latest add https://ui.tyap.me/r/code-block.json`

export default function CodeBlockNoHeader() {
  const [copied, setCopied] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = async () => {
    if (copied) return
    await navigator.clipboard.writeText(code)
    setCopied(true)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  React.useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    []
  )

  return (
    <div className="w-full max-w-xl">
      <div className="flex h-10 items-center overflow-hidden rounded-xl border border-border/40 bg-code text-code-foreground">
        <div className="min-w-0 flex-1 overflow-hidden pl-4 pr-2">
          <code className="select-all whitespace-nowrap font-mono text-sm text-code-foreground">
            {code}
          </code>
        </div>
        <div className="mx-0.5 h-5 w-px shrink-0 bg-border/40" />
        <Button
          size="icon-sm"
          variant="ghost"
          className="mx-1 shrink-0 text-muted-foreground/60 transition-colors hover:text-foreground"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
          onClick={handleCopy}
        >
          <span className="t-icon-swap" data-state={copied ? "b" : "a"} aria-hidden>
            <span className="t-icon" data-icon="a">
              <CopyIcon className="size-3.5" />
            </span>
            <span className="t-icon" data-icon="b">
              <CheckIcon className="size-3.5" />
            </span>
          </span>
        </Button>
      </div>
    </div>
  )
}
