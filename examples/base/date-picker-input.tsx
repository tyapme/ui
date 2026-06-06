"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { DatePicker } from "@/styles/base/ui/date-picker"

export default function DatePickerInput() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="w-64">
      <FieldLabel htmlFor="date-input">Date</FieldLabel>
      <DatePicker
        id="date-input"
        value={date}
        onValueChange={setDate}
        aria-label="Select date"
      />
    </Field>
  )
}
