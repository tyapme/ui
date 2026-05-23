"use client"

import * as React from "react"

import { DatePicker } from "@/styles/base-nova/ui/date-picker"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"

export function DatePickerDateTime() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Field className="mx-auto w-64">
      <FieldLabel htmlFor="date-picker-datetime">Date &amp; Time</FieldLabel>
      <DatePicker
        id="date-picker-datetime"
        value={date}
        onValueChange={setDate}
        granularity="minute"
        aria-label="Date and time"
      />
    </Field>
  )
}
