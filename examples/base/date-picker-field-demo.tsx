"use client"

import * as React from "react"

import {
  DatePicker,
  DateRangePicker,
} from "@/styles/base/ui/date-picker"

export default function DatePickerFieldDemo() {
  const [date, setDate] = React.useState<Date>()
  const [range, setRange] = React.useState<{ from: Date | undefined; to?: Date }>()

  return (
    <div className="flex flex-col gap-4 w-72">
      <DatePicker
        value={date}
        onValueChange={setDate}
        aria-label="日付を選択"
      />
      <DateRangePicker
        value={range}
        onValueChange={setRange}
        aria-label="日付範囲を選択"
      />
    </div>
  )
}
