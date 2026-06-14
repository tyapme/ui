"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { TimePicker } from "@/styles/base/ui/time-picker"

export default function TimePickerSeconds() {
  const [time, setTime] = React.useState<Date>()

  return (
    <Field className="w-64">
      <FieldLabel htmlFor="time-seconds">Time</FieldLabel>
      <TimePicker
        id="time-seconds"
        value={time}
        onValueChange={setTime}
        granularity="second"
        secondStep={5}
        aria-label="Select time with seconds"
      />
    </Field>
  )
}
