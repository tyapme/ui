"use client"

import * as React from "react"
import { CalendarDate, type DateValue } from "@internationalized/date"
import { type RangeValue } from "react-aria-components"

import { RangeCalendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 1, 12),
    end: new CalendarDate(new Date().getFullYear(), 1, 12).add({ days: 30 }),
  })

  return (
    <RangeCalendar
      value={dateRange}
      onChange={setDateRange}
      visibleDuration={{ months: 2 }}
      className="rounded-lg border"
    />
  )
}
