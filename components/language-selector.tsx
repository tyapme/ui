"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base/ui/select"

export type Language = "en" | "ar" | "he"

export type Direction = "ltr" | "rtl"

export type Translations<
  T extends Record<string, string> = Record<string, string>,
> = Record<
  Language,
  {
    dir: Direction
    locale?: string
    values: T
  }
>

export const languageOptions = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic (العربية)" },
  { value: "he", label: "Hebrew (עברית)" },
] as const

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
  defaultLanguage = "ar",
}: {
  children: React.ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = React.useContext(LanguageContext)
  return context
}

type RtlLanguage = "ar" | "he"

/**
 * Like useTranslation, but for components that only support RTL languages (ar/he).
 * Centralizes the `language === "he" ? "he" : "ar"` guard so components don't repeat it.
 */
export function useRtlTranslation<T extends { dir: Direction }>(
  translations: Record<RtlLanguage, T>
): T & { lang: RtlLanguage } {
  const context = useLanguageContext()
  const lang: RtlLanguage = context?.language === "he" ? "he" : "ar"
  return { ...translations[lang], lang }
}

export function useTranslation<T extends Record<string, string>>(
  translations: Translations<T>,
  defaultLanguage: Language = "ar"
) {
  const context = useLanguageContext()
  const [localLanguage, setLocalLanguage] =
    React.useState<Language>(defaultLanguage)

  const language = context?.language ?? localLanguage
  const setLanguage = context?.setLanguage ?? setLocalLanguage

  const { dir, locale, values: t } = translations[language]
  return { language, setLanguage, dir, locale, t }
}

export interface LanguageSelectorProps {
  value: Language
  onValueChange: (value: Language) => void
}

export function LanguageSelector({
  value,
  onValueChange,
  className,
  languages = ["en", "ar", "he"],
}: LanguageSelectorProps & {
  className?: string
  languages?: Language[]
}) {
  return (
    <Select
      items={languageOptions}
      value={value}
      onValueChange={(value) => onValueChange(value as Language)}
    >
      <SelectTrigger
        size="sm"
        className={cn("w-36", className)}
        dir="ltr"
        data-name="language-selector"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        dir="ltr"
        className="data-open:animate-none data-closed:animate-none"
      >
        <SelectGroup>
          {languageOptions
            .filter((option) => languages.includes(option.value as Language))
            .map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
