"use client"

import * as React from "react"
import { I18nProvider } from "react-aria-components"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { TimePicker } from "@/styles/base/ui/time-picker"

const LOCALES = [
  { value: "en-US", label: "English" },
  { value: "ja-JP", label: "日本語" },
  { value: "zh-CN", label: "中文（简体）" },
  { value: "ko-KR", label: "한국어" },
  { value: "es-ES", label: "Español" },
  { value: "fr-FR", label: "Français" },
  { value: "de-DE", label: "Deutsch" },
  { value: "pt-BR", label: "Português" },
  { value: "ru-RU", label: "Русский" },
  { value: "ar-EG", label: "العربية", dir: "rtl" as const },
]

export default function TimePickerI18n() {
  const [time, setTime] = React.useState<Date>()
  const [locale, setLocale] = React.useState("en-US")
  const currentLocale = LOCALES.find((l) => l.value === locale)!

  return (
    <div className="flex flex-col items-center gap-6">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="h-9 rounded-4xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {LOCALES.map((l) => (
          <option key={l.value} value={l.value}>
            {l.label}
          </option>
        ))}
      </select>
      <I18nProvider locale={locale}>
        <div dir={currentLocale.dir ?? "ltr"}>
          <Field className="w-56">
            <FieldLabel htmlFor="time-i18n">Time</FieldLabel>
            <TimePicker
              id="time-i18n"
              value={time}
              onValueChange={setTime}
              aria-label="Select time"
            />
          </Field>
        </div>
      </I18nProvider>
    </div>
  )
}
