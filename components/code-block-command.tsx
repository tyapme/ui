"use client"

import * as React from "react"
import { IconCheck, IconCopy, IconTerminal } from "@tabler/icons-react"

import { copyToClipboardWithMeta } from "@/components/copy-button"
import { useConfig } from "@/hooks/use-config"
import { Button } from "@/styles/base/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base/ui/tabs"

// Base UI exposes data-starting-style (entering) and data-ending-style (leaving)
// on keepMounted panels. We use those as CSS hooks for a clean crossfade:
// entering panel fades from 0→1, leaving panel fades 1→0 absolutely positioned
// so it doesn't disturb the layout while animating out.
const CROSSFADE_CSS = `
  [data-slot="code-block-command"] .no-scrollbar { position: relative; }
  [data-slot="code-block-command"] .cn-tabs-content {
    opacity: 1;
    transform: none !important;
    transition: opacity 160ms cubic-bezier(0.22, 1, 0.36, 1) !important;
    will-change: opacity;
  }
  [data-slot="code-block-command"] .cn-tabs-content[data-starting-style] {
    opacity: 0;
  }
  [data-slot="code-block-command"] .cn-tabs-content[data-ending-style] {
    opacity: 0;
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-slot="code-block-command"] .cn-tabs-content { transition: none !important; }
  }
`

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}) {
  const [config, setConfig] = useConfig()
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const packageManager = config.packageManager || "pnpm"
  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }
  }, [__npm__, __pnpm__, __yarn__, __bun__])

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager as keyof typeof tabs]

    if (!command) {
      return
    }

    copyToClipboardWithMeta(command, {
      name: "copy_npm_command",
      properties: {
        command,
        pm: packageManager,
      },
    })
    setHasCopied(true)
  }, [packageManager, tabs])

  return (
    <div data-slot="code-block-command" className="overflow-x-auto">
      {/* React 19: hoisted to <head>, deduplicated across all instances */}
      <style precedence="component" href="cn-code-block-command-crossfade">{CROSSFADE_CSS}</style>
      <Tabs
        value={packageManager}
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          })
        }}
      >
        <div className="flex items-center gap-2 border-b border-border/50 px-3 py-1">
          <div className="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
            <IconTerminal className="size-3 text-code" />
          </div>
          <TabsList className="rounded-none bg-transparent p-0">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="h-7 border border-transparent pt-0.5 shadow-none! data-[state=active]:border-input data-[state=active]:bg-background!"
                >
                  {key}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>
        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent key={key} value={key} keepMounted className="mt-0 px-4 py-3.5">
                <pre>
                  <code
                    className="relative font-mono text-sm leading-none"
                    data-language="bash"
                  >
                    {value}
                  </code>
                </pre>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
      <Button
        data-slot="copy-button"
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
        onClick={copyCommand}
      >
        <span className="sr-only">Copy</span>
        <span className="t-icon-swap" data-state={hasCopied ? "b" : "a"}>
          <span className="t-icon" data-icon="a">
            <IconCopy />
          </span>
          <span className="t-icon" data-icon="b">
            <IconCheck />
          </span>
        </span>
      </Button>
    </div>
  )
}
