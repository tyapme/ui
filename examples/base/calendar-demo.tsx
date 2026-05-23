"use client"

import * as React from "react"
import { type DateValue } from "@internationalized/date"

import { Calendar } from "@/styles/base-nova/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<DateValue | null>(null)

  return (
    <Calendar
      value={date}
      onChange={setDate}
      className="rounded-lg border"
    />
  )
}
