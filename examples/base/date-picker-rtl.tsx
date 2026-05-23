"use client"

import * as React from "react"
import { getLocalTimeZone, type DateValue } from "@internationalized/date"
import { format } from "date-fns"
import { arSA, he } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import { I18nProvider } from "react-aria-components"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Button } from "@/styles/base/ui-rtl/button"
import { Calendar } from "@/styles/base/ui-rtl/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui-rtl/popover"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      placeholder: "Pick a date",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      placeholder: "اختر تاريخًا",
    },
  },
  he: {
    dir: "rtl",
    values: {
      placeholder: "בחר תאריך",
    },
  },
}

const dateFnsLocales = {
  ar: arSA,
  he: he,
} as const

const localeMap: Record<string, string> = {
  ar: "ar-SA",
  he: "he-IL",
  en: "en-US",
}

export function DatePickerRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")
  const [date, setDate] = React.useState<DateValue | null>(null)

  const dateFnsLocale =
    dir === "rtl"
      ? dateFnsLocales[language as keyof typeof dateFnsLocales]
      : undefined

  const locale = localeMap[language] ?? "en-US"

  const label = date
    ? format(date.toDate(getLocalTimeZone()), "PPP", { locale: dateFnsLocale })
    : t.placeholder

  return (
    <I18nProvider locale={locale}>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant={"outline"}
              data-empty={!date}
              className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
              dir={dir}
            />
          }
        >
          <span>{label}</span>
          <ChevronDownIcon data-icon="inline-end" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start" dir={dir}>
          <Calendar
            value={date}
            onChange={setDate}
          />
        </PopoverContent>
      </Popover>
    </I18nProvider>
  )
}
