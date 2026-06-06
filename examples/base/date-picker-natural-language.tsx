"use client"

import * as React from "react"
import { getLocalTimeZone, parseDate } from "@internationalized/date"
import * as chrono from "chrono-node"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useLocale } from "react-aria-components"

import { getDateFnsLocale } from "@/lib/date-locale"
import { Button } from "@/styles/base/ui/button"
import { Calendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import { Input } from "@/styles/base/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

export default function DatePickerNaturalLanguage() {
  const [inputValue, setInputValue] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const { locale } = useLocale()
  const dateFnsLocale = getDateFnsLocale(locale)

  const parsed = React.useMemo(() => {
    if (!inputValue) return null
    const result = chrono.parseDate(inputValue)
    if (!result) return null
    const y = result.getFullYear()
    const m = String(result.getMonth() + 1).padStart(2, "0")
    const d = String(result.getDate()).padStart(2, "0")
    try {
      return parseDate(`${y}-${m}-${d}`)
    } catch {
      return null
    }
  }, [inputValue])

  return (
    <Field className="w-72">
      <FieldLabel>Date</FieldLabel>
      <div className="relative flex items-center">
        <Input
          placeholder="e.g. next friday, in 2 weeks…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pr-10"
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute right-1"
                aria-label="Open calendar"
              />
            }
          >
            <CalendarIcon className="size-4 text-muted-foreground" />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              value={parsed}
              onChange={(v) => {
                const d = v.toDate(getLocalTimeZone())
                setInputValue(format(d, "PPP", { locale: dateFnsLocale }))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {parsed && (
        <p className="mt-1 text-xs text-muted-foreground">
          {format(parsed.toDate(getLocalTimeZone()), "EEEE, PPP", {
            locale: dateFnsLocale,
          })}
        </p>
      )}
    </Field>
  )
}
