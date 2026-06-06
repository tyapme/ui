"use client"

import * as React from "react"
import { type DateValue, getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useLocale, type RangeValue } from "react-aria-components"

import { getDateFnsLocale } from "@/lib/date-locale"
import { Button } from "@/styles/base/ui/button"
import { RangeCalendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

export default function DatePickerRange() {
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>(null)
  const { locale } = useLocale()
  const dateFnsLocale = getDateFnsLocale(locale)

  const label = range
    ? range.start && range.end
      ? `${format(range.start.toDate(getLocalTimeZone()), "PP", { locale: dateFnsLocale })} – ${format(range.end.toDate(getLocalTimeZone()), "PP", { locale: dateFnsLocale })}`
      : format(range.start.toDate(getLocalTimeZone()), "PP", {
          locale: dateFnsLocale,
        })
    : null

  return (
    <Field className="w-72">
      <FieldLabel>Date range</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="justify-start font-normal data-[empty=true]:text-muted-foreground"
              data-empty={!range || undefined}
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {label ?? "Select date range"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <RangeCalendar
            value={range}
            onChange={setRange}
            visibleDuration={{ months: 2 }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
