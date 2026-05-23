"use client"

import * as React from "react"

import { DatePicker, TimeFieldInput } from "@/styles/base/ui/date-picker"
import { Field, FieldGroup, FieldLabel } from "@/styles/base/ui/field"

export function DatePickerTime() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row">
      <Field>
        <FieldLabel htmlFor="date-picker-time">Date</FieldLabel>
        <DatePicker
          id="date-picker-time"
          value={date}
          onValueChange={setDate}
          aria-label="Date"
          className="w-40"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="time-picker-time">Time</FieldLabel>
        <TimeFieldInput
          id="time-picker-time"
          value={date}
          onValueChange={setDate}
          aria-label="Time"
          granularity="second"
        />
      </Field>
    </FieldGroup>
  )
}
