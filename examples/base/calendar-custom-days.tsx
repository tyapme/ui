"use client"

import * as React from "react"
import { CalendarDate, isWeekend, type DateValue } from "@internationalized/date"
import { type RangeValue, useLocale } from "react-aria-components"

import { RangeCalendar } from "@/styles/base/ui/calendar"
import { Card, CardContent } from "@/styles/base/ui/card"

export function CalendarCustomDays() {
  const { locale } = useLocale()
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 12, 8),
    end: new CalendarDate(new Date().getFullYear(), 12, 8).add({ days: 10 }),
  })

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <RangeCalendar
          value={range}
          onChange={setRange}
          className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
        >
          <RangeCalendar.Header>
            <RangeCalendar.NavButton slot="previous" />
            <RangeCalendar.Heading />
            <RangeCalendar.NavButton slot="next" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid>
            <RangeCalendar.GridHeader>
              {(day) => (
                <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>
              )}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {(d) => {
                const isWeekendDay = isWeekend(d, locale)
                return (
                  <RangeCalendar.Cell date={d}>
                    {({ formattedDate, isOutsideMonth }) => (
                      <>
                        {formattedDate}
                        {!isOutsideMonth && (
                          <span className="text-[9px] opacity-70">
                            {isWeekendDay ? "$120" : "$100"}
                          </span>
                        )}
                      </>
                    )}
                  </RangeCalendar.Cell>
                )
              }}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </RangeCalendar>
      </CardContent>
    </Card>
  )
}
