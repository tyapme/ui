"use client"

import * as React from "react"

import { DatePicker } from "@/styles/base/ui/date-picker"
import { Field, FieldLabel } from "@/styles/base/ui/field"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Field className="mx-auto w-48">
      <FieldLabel htmlFor="date">Date of birth</FieldLabel>
      <DatePicker
        id="date"
        value={date}
        onValueChange={setDate}
        aria-label="Date of birth"
      />
    </Field>
  )
}
