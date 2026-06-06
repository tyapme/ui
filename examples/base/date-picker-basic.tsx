"use client"

import * as React from "react"
import { type DateValue, getLocalTimeZone } from "@internationalized/date"
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

export default function DatePickerBasic() {
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
