"use client"

import * as React from "react"
import { CalendarDate, type DateValue } from "@internationalized/date"

import { Calendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

export function CalendarBookedDates() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(new Date().getFullYear(), 1, 6)
  )
  const bookedDays = Array.from({ length: 15 }, (_, i) => 12 + i)

  const isDateUnavailable = (d: DateValue) =>
    d.month === 1 && bookedDays.includes(d.day)

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          value={date}
          onChange={setDate}
          isDateUnavailable={isDateUnavailable}
        />
      </CardContent>
    </Card>
  )
}
