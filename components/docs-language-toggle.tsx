"use client"

import { usePathname, useRouter } from "next/navigation"

import { i18n } from "@/lib/i18n"
import { ToggleGroup, ToggleGroupItem } from "@/styles/base/ui/toggle-group"

const LANGUAGE_LABELS: Record<string, string> = {
  en: "EN",
  ja: "日本語",
}

export function DocsLanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split("/")
  const languages = i18n.languages as readonly string[]
  const current = languages.includes(segments[1])
    ? segments[1]
    : i18n.defaultLanguage

  // Only show on docs pages (URL pattern: /{lang}/docs/...)
  const isDocsPage =
    languages.includes(segments[1]) && segments[2] === "docs"
  if (!isDocsPage) return null

  function handleChange(value: string | readonly string[]) {
    const lang = typeof value === "string" ? value : value[0]
    if (!lang || lang === current) return
    const href = ["", lang, ...segments.slice(2)].join("/") || "/"
    router.push(href)
  }

  return (
    <ToggleGroup
      type="single"
      spacing={0}
      variant="outline"
      size="sm"
      value={current}
      onValueChange={handleChange}
      aria-label="Documentation language"
      className={className}
    >
      {i18n.languages.map((lang) => (
        <ToggleGroupItem key={lang} value={lang}>
          {LANGUAGE_LABELS[lang] ?? lang.toUpperCase()}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
