"use client"

import * as React from "react"
import { CalendarDate, type DateValue } from "@internationalized/date"

import { Calendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

export function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, 12)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar value={date} onChange={setDate} />
      </CardContent>
    </Card>
  )
}
