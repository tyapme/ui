"use client"

import { CalendarDate } from "@internationalized/date"

import { RangeCalendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

const start = new CalendarDate(2025, 6, 5)

export function CardsCalendar() {
  return (
    <Card className="hidden max-w-[260px] p-0 sm:flex">
      <CardContent className="p-0">
        <RangeCalendar
          defaultValue={{
            start,
            end: start.add({ days: 8 }),
          }}
        />
      </CardContent>
    </Card>
  )
}
