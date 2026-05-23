"use client"

import * as React from "react"
import { parseDate } from "chrono-node"
import {
  CalendarDate,
  getLocalTimeZone,
  type DateValue,
} from "@internationalized/date"
import { CalendarIcon } from "lucide-react"

import { Calendar } from "@/styles/base/ui/calendar"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/styles/base/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"

function formatDate(date: DateValue | null | undefined) {
  if (!date) {
    return ""
  }

  return date.toDate(getLocalTimeZone()).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function parseDateValue(input: string): DateValue | null {
  const parsed = parseDate(input)
  if (!parsed) return null

  return new CalendarDate(
    parsed.getFullYear(),
    parsed.getMonth() + 1,
    parsed.getDate()
  )
}

export function DatePickerNaturalLanguage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("In 2 days")
  const [date, setDate] = React.useState<DateValue | null>(
    parseDateValue(value)
  )

  return (
    <Field className="mx-auto max-w-xs">
      <FieldLabel htmlFor="date-optional">Schedule Date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-optional"
          value={value}
          placeholder="Tomorrow or next week"
          onChange={(e) => {
            setValue(e.target.value)
            const parsed = parseDateValue(e.target.value)
            if (parsed) {
              setDate(parsed)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <InputGroupButton
                  id="date-picker"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Select date"
                />
              }
            >
              <CalendarIcon />
              <span className="sr-only">Select date</span>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              sideOffset={8}
            >
              <Calendar
                value={date}
                onChange={(d) => {
                  setDate(d)
                  setValue(formatDate(d))
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      <div className="px-1 text-sm text-muted-foreground">
        Your post will be published on{" "}
        <span className="font-medium">{formatDate(date)}</span>.
      </div>
    </Field>
  )
}
