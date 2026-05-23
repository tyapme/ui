"use client"

import * as React from "react"
import { getLocalTimeZone, type DateValue } from "@internationalized/date"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/styles/base/ui/button"
import { Calendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

export function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const [open, setOpen] = React.useState(false)

  const label = date
    ? format(date.toDate(getLocalTimeZone()), "PPP")
    : "Pick a date"

  return (
    <Field className="mx-auto w-72">
      <Popover open={open} onOpenChange={setOpen}>
        <FieldLabel htmlFor="date-picker-with-dropdowns-desktop">
          Date
        </FieldLabel>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-with-dropdowns-desktop"
              className="justify-start px-2.5 font-normal"
            />
          }
        >
          <ChevronDownIcon className="ml-auto" />
          <span>{label}</span>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            value={date}
            onChange={(v) => {
              setDate(v)
            }}
          />
          <div className="flex gap-2 border-t p-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Field>
  )
}
