"use client"

import * as React from "react"
import { type DateValue, getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { I18nProvider, useLocale } from "react-aria-components"

import { getDateFnsLocale } from "@/lib/date-locale"
import { Button } from "@/styles/base/ui/button"
import { Calendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

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

function DatePickerLocale() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const { locale } = useLocale()

  return (
    <Field className="w-64">
      <FieldLabel>Date</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="justify-start font-normal data-[empty=true]:text-muted-foreground"
              data-empty={!date || undefined}
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date
            ? format(date.toDate(getLocalTimeZone()), "PPP", {
                locale: getDateFnsLocale(locale),
              })
            : "Select date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar value={date} onChange={setDate} />
        </PopoverContent>
      </Popover>
    </Field>
  )
}

export default function DatePickerI18n() {
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
          <DatePickerLocale />
        </div>
      </I18nProvider>
    </div>
  )
}
