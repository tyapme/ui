"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/styles/base/ui/field"
import { TimePicker } from "@/styles/base/ui/time-picker"

export default function TimePicker12h() {
  const [time, setTime] = React.useState<Date>()

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="time-12h">Time</FieldLabel>
      <TimePicker
        id="time-12h"
        value={time}
        onValueChange={setTime}
        hourCycle={12}
        minuteStep={5}
        aria-label="Select time"
      />
    </Field>
  )
}
