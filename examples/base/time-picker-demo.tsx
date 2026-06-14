"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { TimePicker } from "@/styles/base/ui/time-picker"

export default function TimePickerDemo() {
  const [time, setTime] = React.useState<Date>()

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="time">Time</FieldLabel>
      <TimePicker
        id="time"
        value={time}
        onValueChange={setTime}
        aria-label="Select time"
      />
    </Field>
  )
}
