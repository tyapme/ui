"use client"

import * as React from "react"
import {
  CalendarDate,
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useLocale } from "react-aria-components"

import { getDateFnsLocale } from "@/lib/date-locale"
import { Button } from "@/styles/base/ui/button"
import { Calendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

export default function DatePickerDob() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const { locale } = useLocale()
  const maxDate = today(getLocalTimeZone())
  const minDate = new CalendarDate(maxDate.year - 120, 1, 1)

  return (
    <Field className="w-64">
      <FieldLabel>Date of birth</FieldLabel>
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
            : "Pick a date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            value={date}
            onChange={setDate}
            minValue={minDate}
            maxValue={maxDate}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
