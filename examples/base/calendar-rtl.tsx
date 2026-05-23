"use client"

import * as React from "react"
import { type DateValue } from "@internationalized/date"
import { I18nProvider } from "react-aria-components"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Calendar } from "@/styles/base-nova/ui-rtl/calendar"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {},
  },
  ar: {
    dir: "rtl",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
}

const localeMap: Record<string, string> = {
  ar: "ar-SA",
  he: "he-IL",
  en: "en-US",
}

export function CalendarRtl() {
  const { dir, language } = useTranslation(translations, "ar")
  const [date, setDate] = React.useState<DateValue | null>(null)
  const locale = localeMap[language] ?? "en-US"

  return (
    <I18nProvider locale={locale}>
      <Calendar
        value={date}
        onChange={setDate}
        className="rounded-lg border [--cell-size:--spacing(9)]"
      />
    </I18nProvider>
  )
}
