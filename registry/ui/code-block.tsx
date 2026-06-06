"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { CheckIcon, CopyIcon } from "lucide-react"
import type {
  BundledLanguage,
  BundledTheme,
  CodeOptionsMultipleThemes,
  HighlighterGeneric,
} from "shiki"
import { createHighlighter } from "shiki"
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers"

import { cn } from "@/registry/bases/base/lib/utils"
import { Button } from "@/registry/ui/button"

// ─── Types ────────────────────────────────────────────────────────────
export type CodeThemes = CodeOptionsMultipleThemes["themes"]

const DEFAULT_THEMES: CodeThemes = { light: "github-light", dark: "github-dark" }

// ─── Language detection ───────────────────────────────────────────────
const EXT_MAP: Record<string, BundledLanguage> = {
  ts: "typescript", tsx: "tsx", js: "javascript", jsx: "jsx",
  mjs: "javascript", cjs: "javascript", mts: "typescript",
  py: "python", rb: "ruby", rs: "rust", go: "go",
  java: "java", kt: "kotlin", swift: "swift",
  css: "css", scss: "scss", less: "less",
  html: "html", xml: "xml", svg: "xml",
  json: "json", yaml: "yaml", yml: "yaml", toml: "toml",
  sh: "bash", bash: "bash", zsh: "bash", fish: "fish",
  md: "markdown", mdx: "mdx",
  sql: "sql", prisma: "prisma",
  graphql: "graphql", gql: "graphql",
  dockerfile: "dockerfile",
  vue: "vue", svelte: "svelte",
  c: "c", cpp: "cpp", cs: "csharp", h: "c",
  php: "php", r: "r", lua: "lua",
}

export const detectLanguage = (filename?: string): BundledLanguage => {
  if (!filename) return "text" as BundledLanguage
  const ext = filename.split(".").pop()?.toLowerCase() ?? ""
  return EXT_MAP[ext] ?? ("text" as BundledLanguage)
}

// ─── Highlighting infrastructure ──────────────────────────────────────
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
  const p = createHighlighter({ langs: [lang], themes: ["github-light", "github-dark"] })
  highlighterCache.set(lang, p)
  return p
}

const rawHtml = (code: string): string =>
  `<pre class="shiki"><code>${code
    .split("\n")
    .map(
      (line) =>
        `<span class="line">${line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`
    )
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
      const lang = available.includes(language) ? language : ("text" as BundledLanguage)
      const html = hl.codeToHtml(code, {
        lang,
        themes,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transformers: [
          transformerNotationDiff({ matchAlgorithm: "v3" }),
          transformerNotationHighlight({ matchAlgorithm: "v3" }),
          transformerNotationWordHighlight({ matchAlgorithm: "v3" }),
          transformerNotationFocus({ matchAlgorithm: "v3" }),
          transformerNotationErrorLevel({ matchAlgorithm: "v3" }),
        ] as any[],
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

// ─── Annotation CSS ───────────────────────────────────────────────────
const CODE_BLOCK_CSS = `
/* Transparent background — override shiki's inline style */
.cn-code .shiki { background: transparent !important; }

/* Dark mode token colors */
.dark .cn-code .shiki span {
  color: var(--shiki-dark) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
}

/* Grid layout so each .line spans full width */
.cn-code .shiki code {
  display: grid;
  width: 100%;
  background: transparent !important;
}

/* Base line */
.cn-code .line {
  display: block;
  padding-inline: 1rem;
  position: relative;
  min-height: 1.5em;
}

/* Line numbers */
.cn-code-ln .shiki code { counter-reset: line; }
.cn-code-ln .line { padding-left: 3rem; }
.cn-code-ln .line::before {
  counter-increment: line;
  content: counter(line);
  position: absolute;
  left: 0;
  width: 2rem;
  text-align: right;
  color: currentColor;
  opacity: 0.38;
  user-select: none;
  font-size: 0.75em;
  line-height: 1.5em;
  font-variant-numeric: tabular-nums;
}

/* Diff notation — gutter indicator, no side stripe */
.cn-code .line.diff { padding-left: 1.75rem; }
.cn-code-ln .line.diff { padding-left: 3.75rem; }
.cn-code .line.diff::after {
  position: absolute;
  left: 0.5rem;
  top: 0;
  line-height: 1.5em;
  font-size: 0.85em;
  opacity: 0.6;
}
.cn-code .line.diff.add {
  background: oklch(65% 0.14 145 / 0.09);
}
.cn-code .line.diff.add::after {
  content: '+';
  color: oklch(52% 0.18 145);
}
.cn-code .line.diff.remove {
  background: oklch(60% 0.14 25 / 0.09);
}
.cn-code .line.diff.remove::after {
  content: '-';
  color: oklch(52% 0.18 25);
}
.dark .cn-code .line.diff.add { background: oklch(65% 0.14 145 / 0.06); }
.dark .cn-code .line.diff.remove { background: oklch(60% 0.14 25 / 0.06); }

/* Highlighted lines */
.cn-code .line.highlighted { background: oklch(60% 0.1 250 / 0.08); }
.dark .cn-code .line.highlighted { background: oklch(60% 0.1 250 / 0.06); }

/* Error levels */
.cn-code .line.error { background: oklch(60% 0.14 25 / 0.08); }
.cn-code .line.warning { background: oklch(75% 0.14 80 / 0.08); }

/* Focused lines */
.cn-code:has(.focused) .line {
  filter: blur(1.5px);
  opacity: 0.4;
  transition: filter 0.22s ease, opacity 0.22s ease;
}
.cn-code:has(.focused) .line.focused {
  filter: none;
  opacity: 1;
}

/* Highlighted words */
.cn-code .highlighted-word {
  background: oklch(82% 0.1 80 / 0.2);
  border-radius: 0.2em;
  padding: 0.05em 0.18em;
}
.dark .cn-code .highlighted-word { background: oklch(82% 0.1 80 / 0.13); }

/* Entry animation */
@keyframes cn-code-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.cn-code-animate { animation: cn-code-in 0.18s ease-out; }
`

// ─── Context ──────────────────────────────────────────────────────────
const CodeBlockContext = React.createContext<{ code: string }>({ code: "" })

// ─── CodeBlockContainer ───────────────────────────────────────────────
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
      className={cn(
        "group relative w-full overflow-hidden rounded-xl",
        "border border-border/40 bg-code text-code-foreground",
        className
      )}
      style={style}
      {...props}
    />
  )
}

// ─── CodeBlockHeader ─────────────────────────────────────────────────
export function CodeBlockHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        "flex items-center justify-between",
        "border-b border-border/30 bg-muted/40 px-3 py-2",
        "text-muted-foreground/70 text-xs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── CodeBlockTitle ───────────────────────────────────────────────────
export function CodeBlockTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-title"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── CodeBlockFilename ───────────────────────────────────────────────
export function CodeBlockFilename({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="code-block-filename"
      className={cn("font-mono", className)}
      {...props}
    >
      {children}
    </span>
  )
}

// ─── CodeBlockActions ────────────────────────────────────────────────
export function CodeBlockActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="code-block-actions"
      className={cn("-my-1 -mr-1 flex items-center gap-1", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── CodeBlockCopyButton ─────────────────────────────────────────────
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
        "shrink-0 text-muted-foreground/60",
        "hover:text-foreground data-[copied]:text-foreground",
        "transition-colors duration-150",
        className
      )}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      onClick={handleCopy}
      {...props}
    >
      {children ?? (
        <span className="t-icon-swap" data-state={copied ? "b" : "a"} aria-hidden>
          <span className="t-icon" data-icon="a">
            <CopyIcon className="size-3.5" />
          </span>
          <span className="t-icon" data-icon="b">
            <CheckIcon className="size-3.5" />
          </span>
        </span>
      )}
    </Button>
  )
}

// ─── CodeBlockContent ────────────────────────────────────────────────
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

  // Synchronous cache hit → no flicker on first render
  const syncHtml = React.useMemo(
    () =>
      syntaxHighlighting
        ? (highlightCode(code, language, themes) ?? fallback)
        : fallback,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [code, language, syntaxHighlighting]
  )

  const [asyncHtml, setAsyncHtml] = React.useState<string | null>(null)
  const keyRef = React.useRef({ code, language })

  if (keyRef.current.code !== code || keyRef.current.language !== language) {
    keyRef.current = { code, language }
    setAsyncHtml(null)
  }

  React.useEffect(() => {
    if (!syntaxHighlighting) return
    let cancelled = false
    const immediate = highlightCode(code, language, themes, (html) => {
      if (!cancelled) setAsyncHtml(html)
    })
    if (immediate !== null && !cancelled) setAsyncHtml(immediate)
    return () => {
      cancelled = true
    }
  }, [code, language, themes, syntaxHighlighting])

  const html = asyncHtml ?? syncHtml

  return (
    <div
      key={language}
      className={cn(
        "cn-code cn-code-animate relative overflow-auto text-sm",
        showLineNumbers && "cn-code-ln",
        "[&_.shiki]:py-4",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

// ─── CodeBlockLanguageSelector ────────────────────────────────────────
export type CodeBlockLanguageSelectorProps = SelectPrimitive.Root.Props<string> & {
  children?: React.ReactNode
}

export function CodeBlockLanguageSelector(props: CodeBlockLanguageSelectorProps) {
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
        "font-mono text-[11px] text-muted-foreground/70",
        "hover:bg-muted/60 hover:text-foreground",
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

export function CodeBlockLanguageSelectorValue(props: SelectPrimitive.Value.Props) {
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
            "min-w-[8rem] overflow-hidden rounded-lg border border-border/50",
            "bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5",
            "origin-[var(--transform-origin)]",
            "transition-[opacity,transform,scale] duration-150 ease-out",
            "[&[data-starting-style]]:opacity-0 [&[data-starting-style]]:scale-95",
            "[&[data-ending-style]]:opacity-0 [&[data-ending-style]]:scale-95",
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
        "flex w-full cursor-default select-none items-center rounded-md px-2 py-1.5",
        "font-mono text-xs text-muted-foreground outline-none",
        "data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
        "data-[selected]:text-foreground",
        "transition-colors duration-100",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="ml-auto">
        <CheckIcon className="size-3" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

// ─── CodeBlock (main composable entry point) ──────────────────────────
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
      <style precedence="component" href="cn-code-block">
        {CODE_BLOCK_CSS}
      </style>
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
