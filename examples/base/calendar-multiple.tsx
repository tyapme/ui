"use client"

import * as React from "react"
import { type DateValue } from "@internationalized/date"

import { Calendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

export function CalendarMultiple() {
  const [date, setDate] = React.useState<DateValue | null>(null)

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar value={date} onChange={setDate} />
      </CardContent>
    </Card>
  )
}
