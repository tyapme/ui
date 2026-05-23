"use client"

import * as React from "react"

import { TimeFieldInput } from "@/styles/base/ui/time-field"

export function TimeFieldDemo() {
  const [value, setValue] = React.useState<Date | undefined>(
    new Date(2024, 0, 1, 14, 30)
  )

  return (
    <div className="flex w-full max-w-[200px] flex-col gap-2">
      <TimeFieldInput
        value={value}
        onValueChange={setValue}
        aria-label="Time"
      />
    </div>
  )
}
