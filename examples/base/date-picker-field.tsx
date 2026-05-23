"use client"

import * as React from "react"

import { DateFieldInput } from "@/styles/base/ui/date-picker"
import { Field, FieldLabel } from "@/styles/base/ui/field"

export function DatePickerField() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Field className="mx-auto w-48">
      <FieldLabel htmlFor="date-field">Date Field</FieldLabel>
      <DateFieldInput
        id="date-field"
        value={date}
        onValueChange={setDate}
        aria-label="Date field"
      />
    </Field>
  )
}
