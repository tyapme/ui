"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers"
import { CheckIcon, CopyIcon } from "lucide-react"
import type {
  BundledLanguage,
  BundledTheme,
  CodeOptionsMultipleThemes,
  HighlighterGeneric,
  ShikiTransformer,
} from "shiki"
import { createHighlighter } from "shiki"

import { cn } from "@/lib/utils"
import { Button } from "@/styles/base/ui-rtl/button"

export type CodeThemes = CodeOptionsMultipleThemes["themes"]

const DEFAULT_THEMES: CodeThemes = {
  light: "github-light",
  dark: "github-dark",
}

export const CODE_TRANSFORMERS: ShikiTransformer[] = [
  transformerNotationDiff({ matchAlgorithm: "v3" }),
  transformerNotationHighlight({ matchAlgorithm: "v3" }),
  transformerNotationWordHighlight({ matchAlgorithm: "v3" }),
  transformerNotationFocus({ matchAlgorithm: "v3" }),
  transformerNotationErrorLevel({ matchAlgorithm: "v3" }),
]

const EXT_MAP: Record<string, BundledLanguage> = {
  ts: "typescript",
  tsx: "tsx",
  js: "javascript",
  jsx: "jsx",
  mjs: "javascript",
  cjs: "javascript",
  mts: "typescript",
  py: "python",
  rb: "ruby",
  rs: "rust",
  go: "go",
  java: "java",
  kt: "kotlin",
  swift: "swift",
  css: "css",
  scss: "scss",
  less: "less",
  html: "html",
  xml: "xml",
  svg: "xml",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
  sh: "bash",
  bash: "bash",
  zsh: "bash",
  fish: "fish",
  md: "markdown",
  mdx: "mdx",
  sql: "sql",
  prisma: "prisma",
  graphql: "graphql",
  gql: "graphql",
  dockerfile: "dockerfile",
  vue: "vue",
  svelte: "svelte",
  c: "c",
  cpp: "cpp",
  cs: "csharp",
  h: "c",
  php: "php",
  r: "r",
  lua: "lua",
}

export const detectLanguage = (filename?: string): BundledLanguage => {
  if (!filename) return "text" as BundledLanguage
  const ext = filename.split(".").pop()?.toLowerCase() ?? ""
  return EXT_MAP[ext] ?? ("text" as BundledLanguage)
}

const highlighterCache = new Map<
  string,
  Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>
>()
const htmlCache = new Map<string, string>()
const subscribers = new Map<string, Set<(html: string) => void>>()

const cacheKey = (code: string, lang: BundledLanguage, themes: CodeThemes) => {
  const s = code.slice(0, 100)
  const e = code.length > 100 ? code.slice(-100) : ""
  return `${lang}:${JSON.stringify(themes)}:${code.length}:${s}:${e}`
}

const getHighlighter = (lang: BundledLanguage) => {
  const cached = highlighterCache.get(lang)
  if (cached) return cached
  const p = createHighlighter({
    langs: [lang],
    themes: ["github-light", "github-dark"],
  })
  highlighterCache.set(lang, p)
  return p
}

const escapeHtml = (line: string) =>
  line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const rawHtml = (code: string): string =>
  `<pre class="shiki"><code>${code
    .split("\n")
    .map((line) => `<span class="line">${escapeHtml(line)}</span>`)
    .join("\n")}</code></pre>`

export const highlightCode = (
  code: string,
  language: BundledLanguage,
  themes: CodeThemes = DEFAULT_THEMES,
  callback?: (html: string) => void
): string | null => {
  const key = cacheKey(code, language, themes)
  const cached = htmlCache.get(key)
  if (cached) return cached

  if (callback) {
    if (!subscribers.has(key)) subscribers.set(key, new Set())
    subscribers.get(key)!.add(callback)
  }

  getHighlighter(language)
    .then((hl) => {
      const available = hl.getLoadedLanguages()
      const lang = available.includes(language)
        ? language
        : ("text" as BundledLanguage)
      const html = hl.codeToHtml(code, {
        lang,
        themes,
        transformers: CODE_TRANSFORMERS,
      })
      htmlCache.set(key, html)
      const subs = subscribers.get(key)
      if (subs) {
        for (const sub of subs) sub(html)
        subscribers.delete(key)
      }
    })
    .catch((err) => {
      console.error("Shiki highlight failed:", err)
      subscribers.delete(key)
    })

  return null
}

/*
 * One shared stylesheet drives every code-block surface — the standalone
 * <CodeBlock> (client Shiki, `.line` rows) and the markdown parser
 * (rehype-pretty-code, `[data-line]` rows). Selectors target the Shiki
 * transformer classes directly so both markups render identically.
 */
const CODE_BLOCK_CSS = `
.fd-code pre,
.fd-code pre code {
  background: transparent !important;
  min-width: 100%;
}
.fd-code pre code {
  display: grid;
  font-size: inherit;
}
.dark .fd-code pre span {
  color: var(--shiki-dark) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
}

.fd-code .line,
.fd-code [data-line] {
  display: block;
  min-height: 1lh;
  padding-inline: 1rem;
  position: relative;
}
.fd-code .line:empty::before,
.fd-code [data-line]:empty::before {
  content: " ";
}

.fd-code-ln code {
  counter-reset: line;
}
.fd-code-ln .line,
.fd-code-ln [data-line] {
  padding-left: 3rem;
}
.fd-code-ln .line::before,
.fd-code-ln [data-line]::before {
  counter-increment: line;
  content: counter(line);
  position: absolute;
  left: 0;
  width: 2rem;
  text-align: right;
  color: var(--color-code-number, currentColor);
  opacity: 0.55;
  user-select: none;
  font-size: 0.8em;
  font-variant-numeric: tabular-nums;
}

.fd-code .diff {
  padding-left: 1.75rem;
}
.fd-code-ln .diff {
  padding-left: 3.75rem;
}
.fd-code .diff::after {
  position: absolute;
  left: 0.55rem;
  font-size: 0.85em;
}
.fd-code-ln .diff::after {
  left: 2.55rem;
}
.fd-code .diff.add {
  background: oklch(64% 0.15 150 / 0.1);
}
.fd-code .diff.add::after {
  content: "+";
  color: oklch(55% 0.16 150);
}
.fd-code .diff.remove {
  background: oklch(62% 0.18 25 / 0.1);
}
.fd-code .diff.remove::after {
  content: "-";
  color: oklch(55% 0.19 25);
}
.dark .fd-code .diff.add {
  background: oklch(64% 0.15 150 / 0.14);
}
.dark .fd-code .diff.remove {
  background: oklch(62% 0.18 25 / 0.14);
}

.fd-code .highlighted,
.fd-code [data-highlighted-line] {
  background: var(--color-code-highlight, oklch(60% 0.1 250 / 0.08));
}
.fd-code .highlighted.error {
  background: oklch(62% 0.18 25 / 0.12);
}
.fd-code .highlighted.warning {
  background: oklch(80% 0.15 85 / 0.14);
}

.fd-code:has(.focused) .line:not(.focused),
.fd-code:has(.focused) [data-line]:not(.focused) {
  filter: blur(2px);
  opacity: 0.45;
  transition:
    filter 0.2s ease,
    opacity 0.2s ease;
}
.fd-code:hover:has(.focused) .line,
.fd-code:hover:has(.focused) [data-line] {
  filter: none;
  opacity: 1;
}

.fd-code .highlighted-word,
.fd-code [data-highlighted-chars] {
  background: oklch(80% 0.12 85 / 0.22);
  border-radius: 0.25em;
  padding: 0.1em 0.15em;
}
.dark .fd-code .highlighted-word,
.dark .fd-code [data-highlighted-chars] {
  background: oklch(80% 0.12 85 / 0.16);
}

@keyframes fd-code-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fd-code-animate {
  animation: fd-code-in 0.16s ease-out;
}
`

function CodeBlockStyle() {
  return (
    <style precedence="component" href="fd-code-block">
      {CODE_BLOCK_CSS}
    </style>
  )
}

export const CodeBlockContext = React.createContext<{ code: string }>({
  code: "",
})

export function CodeBlockProvider({
  code,
  children,
}: {
  code: string
  children: React.ReactNode
}) {
  const ctx = React.useMemo(() => ({ code }), [code])
  return (
    <CodeBlockContext.Provider value={ctx}>
      <CodeBlockStyle />
      {children}
    </CodeBlockContext.Provider>
  )
}

export function CodeBlockContainer({
  className,
  language,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { language: string }) {
  return (
    <div
      data-slot="code-block"
      data-language={language}
      dir="ltr"
      className={cn(
        "group relative w-full overflow-hidden rounded-lg outline-none",
        "border bg-code text-sm text-code-foreground",
        className
      )}
      style={style}
      {...props}
    />
  )
}

export function CodeBlockHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        "flex items-center gap-2",
        "border-b bg-muted/50 px-4 py-1.5",
        "text-[13px] text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CodeBlockTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-title"
      className={cn(
        "flex min-w-0 flex-1 items-center gap-2 [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CodeBlockFilename({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="code-block-filename"
      className={cn("truncate font-mono", className)}
      {...props}
    >
      {children}
    </span>
  )
}

export function CodeBlockActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-actions"
      className={cn("-my-1 -me-2 flex shrink-0 items-center gap-1", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export type CodeBlockCopyButtonProps = React.ComponentProps<typeof Button> & {
  onCopy?: () => void
  onError?: (error: Error) => void
  timeout?: number
}

export function CodeBlockCopyButton({
  onCopy,
  onError,
  timeout = 2000,
  children,
  className,
  ...props
}: CodeBlockCopyButtonProps) {
  const [copied, setCopied] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const { code } = React.useContext(CodeBlockContext)

  const handleCopy = React.useCallback(async () => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      onError?.(new Error("Clipboard API not available"))
      return
    }
    if (copied) return
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      onCopy?.()
      timerRef.current = setTimeout(() => setCopied(false), timeout)
    } catch (err) {
      onError?.(err as Error)
    }
  }, [code, copied, onCopy, onError, timeout])

  React.useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    []
  )

  return (
    <Button
      data-slot="code-block-copy-button"
      data-copied={copied || undefined}
      size="icon-sm"
      variant="ghost"
      className={cn(
        "shrink-0 text-muted-foreground",
        "hover:text-foreground data-[copied]:text-foreground",
        className
      )}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      onClick={handleCopy}
      {...props}
    >
      {children ?? (
        <span className="relative size-3.5" aria-hidden>
          <CheckIcon
            className={cn(
              "absolute inset-0 size-3.5 transition-transform duration-200",
              copied ? "scale-100" : "scale-0"
            )}
          />
          <CopyIcon
            className={cn(
              "absolute inset-0 size-3.5 transition-transform duration-200",
              copied ? "scale-0" : "scale-100"
            )}
          />
        </span>
      )}
    </Button>
  )
}

export function CodeBlockContent({
  code,
  language,
  showLineNumbers = false,
  syntaxHighlighting = true,
  themes = DEFAULT_THEMES,
  className,
}: {
  code: string
  language: BundledLanguage
  showLineNumbers?: boolean
  syntaxHighlighting?: boolean
  themes?: CodeThemes
  className?: string
}) {
  const fallback = React.useMemo(() => rawHtml(code), [code])

  const syncHtml = React.useMemo(
    () =>
      syntaxHighlighting
        ? (highlightCode(code, language, themes) ?? fallback)
        : fallback,

    [code, fallback, language, syntaxHighlighting, themes]
  )

  const contentKey = React.useMemo(
    () => cacheKey(code, language, themes),
    [code, language, themes]
  )
  const [asyncState, setAsyncState] = React.useState<{
    key: string
    html: string | null
  }>({ key: contentKey, html: null })

  React.useEffect(() => {
    if (!syntaxHighlighting) return
    let cancelled = false
    const immediate = highlightCode(code, language, themes, (html) => {
      if (!cancelled) setAsyncState({ key: contentKey, html })
    })
    if (immediate !== null) {
      queueMicrotask(() => {
        if (!cancelled) setAsyncState({ key: contentKey, html: immediate })
      })
    }
    return () => {
      cancelled = true
    }
  }, [code, contentKey, language, themes, syntaxHighlighting])

  const asyncHtml = asyncState.key === contentKey ? asyncState.html : null
  const html = syntaxHighlighting ? (asyncHtml ?? syncHtml) : syncHtml

  return (
    <div
      key={language}
      className={cn(
        "fd-code fd-code-animate relative max-h-[600px] overflow-auto text-sm",
        showLineNumbers && "fd-code-ln",
        "[&_pre]:py-3.5",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export type CodeBlockLanguageSelectorProps =
  SelectPrimitive.Root.Props<string> & {
    children?: React.ReactNode
  }

export function CodeBlockLanguageSelector(
  props: CodeBlockLanguageSelectorProps
) {
  return <SelectPrimitive.Root {...props} />
}

export function CodeBlockLanguageSelectorTrigger({
  className,
  children,
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      data-slot="code-block-lang-trigger"
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1",
        "font-mono text-[11px] text-muted-foreground",
        "hover:bg-muted hover:text-foreground",
        "transition-colors duration-150 outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="opacity-50">
        <svg viewBox="0 0 10 6" className="size-2.5 fill-current" aria-hidden>
          <path d="M0 0l5 6 5-6z" />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function CodeBlockLanguageSelectorValue(
  props: SelectPrimitive.Value.Props
) {
  return <SelectPrimitive.Value {...props} />
}

export function CodeBlockLanguageSelectorContent({
  className,
  ...props
}: SelectPrimitive.Popup.Props) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner side="bottom" align="end" sideOffset={4}>
        <SelectPrimitive.Popup
          data-slot="code-block-lang-content"
          className={cn(
            "min-w-[8rem] overflow-hidden rounded-lg border",
            "bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5",
            "origin-[var(--transform-origin)]",
            "transition-[opacity,transform,scale] duration-150 ease-out",
            "[&[data-starting-style]]:scale-95 [&[data-starting-style]]:opacity-0",
            "[&[data-ending-style]]:scale-95 [&[data-ending-style]]:opacity-0",
            className
          )}
          {...props}
        />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

export function CodeBlockLanguageSelectorItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="code-block-lang-item"
      className={cn(
        "flex w-full cursor-default items-center rounded-md px-2 py-1.5 select-none",
        "font-mono text-xs text-muted-foreground outline-none",
        "data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
        "data-[selected]:text-foreground",
        "transition-colors duration-100",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="ms-auto">
        <CheckIcon className="size-3" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  code: string
  language: BundledLanguage
  showLineNumbers?: boolean
  syntaxHighlighting?: boolean
  themes?: CodeThemes
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  syntaxHighlighting = true,
  themes = DEFAULT_THEMES,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const ctx = React.useMemo(() => ({ code }), [code])

  return (
    <CodeBlockContext.Provider value={ctx}>
      <CodeBlockStyle />
      <CodeBlockContainer className={className} language={language} {...props}>
        {children}
        <CodeBlockContent
          code={code}
          language={language}
          showLineNumbers={showLineNumbers}
          syntaxHighlighting={syntaxHighlighting}
          themes={themes}
        />
      </CodeBlockContainer>
    </CodeBlockContext.Provider>
  )
}
