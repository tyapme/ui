"use client"

import * as React from "react"

import { DatePicker } from "@/styles/base-nova/ui/date-picker"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <DatePicker
      value={date}
      onValueChange={setDate}
      aria-label="日付を選択"
      className="w-[212px]"
    />
  )
}
