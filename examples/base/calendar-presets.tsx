"use client"

import * as React from "react"
import { getLocalTimeZone, today, type DateValue } from "@internationalized/date"

import { Button } from "@/styles/base-nova/ui/button"
import { Calendar } from "@/styles/base-nova/ui/calendar"
import { Card, CardContent, CardFooter } from "@/styles/base-nova/ui/card"

export function CalendarWithPresets() {
  const [date, setDate] = React.useState<DateValue | null>(
    today(getLocalTimeZone())
  )
  const [focusedDate, setFocusedDate] = React.useState<DateValue>(
    today(getLocalTimeZone())
  )

  return (
    <Card className="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          value={date}
          onChange={setDate}
          focusedValue={focusedDate}
          onFocusChange={setFocusedDate}
          className="p-0 [--cell-size:--spacing(9.5)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Today", days: 0 },
          { label: "Tomorrow", days: 1 },
          { label: "In 3 days", days: 3 },
          { label: "In a week", days: 7 },
          { label: "In 2 weeks", days: 14 },
        ].map((preset) => {
          const newDate = today(getLocalTimeZone()).add({ days: preset.days })
          return (
            <Button
              key={preset.days}
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => {
                setDate(newDate)
                setFocusedDate(newDate)
              }}
            >
              {preset.label}
            </Button>
          )
        })}
      </CardFooter>
    </Card>
  )
}
