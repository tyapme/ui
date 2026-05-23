"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"

import { DateRangePicker } from "@/styles/base-nova/ui/date-picker"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"

export function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <Field className="mx-auto w-72">
      <FieldLabel htmlFor="date-picker-range">Date Range</FieldLabel>
      <DateRangePicker
        id="date-picker-range"
        value={date}
        onValueChange={setDate}
        aria-label="Date range"
      />
    </Field>
  )
}
