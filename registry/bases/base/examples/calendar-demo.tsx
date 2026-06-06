"use client"

import * as React from "react"
import { CalendarDate } from "@internationalized/date"
import { type DateValue } from "react-aria-components"

import { Calendar } from "@/registry/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate()
    )
  )

  return <Calendar value={date} onChange={setDate} />
}
