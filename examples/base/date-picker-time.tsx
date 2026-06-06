"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { DatePicker } from "@/styles/base/ui/date-picker"

export default function DatePickerTime() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="w-72">
      <FieldLabel htmlFor="date-time">Date & time</FieldLabel>
      <DatePicker
        id="date-time"
        value={date}
        onValueChange={setDate}
        granularity="minute"
        aria-label="Select date and time"
      />
    </Field>
  )
}
