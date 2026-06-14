"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { TimePicker } from "@/styles/base/ui/time-picker"

export default function TimePickerInput() {
  const [time, setTime] = React.useState<Date>()

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="time-input">Time</FieldLabel>
      <TimePicker
        id="time-input"
        value={time}
        onValueChange={setTime}
        showDropdown={false}
        aria-label="Enter time"
      />
    </Field>
  )
}
