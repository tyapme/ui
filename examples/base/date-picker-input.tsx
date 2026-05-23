"use client"

import * as React from "react"

import { DatePicker } from "@/styles/base-nova/ui/date-picker"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"

export function DatePickerInput() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  )

  return (
    <Field className="mx-auto w-48">
      <FieldLabel htmlFor="date-required">Subscription Date</FieldLabel>
      <DatePicker
        id="date-required"
        value={date}
        onValueChange={setDate}
        showCalendar={false}
        aria-label="Subscription Date"
      />
    </Field>
  )
}
