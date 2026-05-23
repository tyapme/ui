"use client"

import * as React from "react"
import { CalendarDate, CalendarDateTime, Time } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateRangePicker as AriaDateRangePicker,
  DateSegment as AriaDateSegment,
  Group as AriaGroup,
  TimeField as AriaTimeField,
  type DateSegmentProps as AriaDateSegmentProps,
  type DateValue as AriaDateValue,
  type TimeValue as AriaTimeValue,
  type RangeValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/styles/base-maia/ui/button"
import { Calendar, RangeCalendar } from "@/styles/base-maia/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-maia/ui/popover"

// ローカル型定義 (react-day-picker 非依存)
type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}

// ============================================================================
// DateSegment — 個別の日付セグメント（年/月/日）
// ============================================================================

function DateSegment({
  className,
  ...props
}: AriaDateSegmentProps & { className?: string }) {
  return (
    <AriaDateSegment
      className={cn(
        "inline rounded-sm px-0.5 tabular-nums caret-transparent outline-none",
        "data-[placeholder]:text-muted-foreground",
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
        "data-[type=literal]:px-0 data-[type=literal]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// DateFieldInput — セグメント型日付入力
// ============================================================================

type Granularity = "day" | "hour" | "minute" | "second"

interface DateFieldInputProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  disabled?: boolean
  className?: string
  id?: string
  "aria-label"?: string
  granularity?: Granularity
}

function toAriaValue(value: Date | undefined, granularity: Granularity) {
  if (!value) return undefined
  if (granularity === "day") {
    return new CalendarDate(
      value.getFullYear(),
      value.getMonth() + 1,
      value.getDate()
    )
  }
  return new CalendarDateTime(
    value.getFullYear(),
    value.getMonth() + 1,
    value.getDate(),
    value.getHours(),
    value.getMinutes(),
    value.getSeconds()
  )
}

function toNativeDate(dateValue: AriaDateValue): Date {
  const d = new Date(dateValue.year, dateValue.month - 1, dateValue.day)
  if ("hour" in dateValue) {
    d.setHours(
      (dateValue as CalendarDateTime).hour,
      (dateValue as CalendarDateTime).minute,
      (dateValue as CalendarDateTime).second
    )
  }
  return d
}

function DateFieldInput({
  value,
  onValueChange,
  disabled = false,
  className,
  id,
  "aria-label": ariaLabel,
  granularity = "day",
}: DateFieldInputProps) {
  const ariaValue = React.useMemo(
    () => toAriaValue(value, granularity),
    [value, granularity]
  )

  function handleChange(dateValue: AriaDateValue | null) {
    if (!dateValue) {
      onValueChange?.(undefined)
      return
    }
    onValueChange?.(toNativeDate(dateValue))
  }

  return (
    <AriaDateField
      aria-label={ariaLabel}
      granularity={granularity}
      id={id}
      isDisabled={disabled}
      value={ariaValue as AriaDateValue | undefined}
      onChange={handleChange}
      className={cn("flex flex-col", className)}
    >
      <AriaDateInput className="inline-flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:bg-input/30">
        {(segment) => <DateSegment segment={segment} />}
      </AriaDateInput>
    </AriaDateField>
  )
}

// ============================================================================
// TimeFieldInput — セグメント型時刻入力
// ============================================================================

interface TimeFieldInputProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  disabled?: boolean
  className?: string
  id?: string
  "aria-label"?: string
  granularity?: "hour" | "minute" | "second"
}

function TimeFieldInput({
  value,
  onValueChange,
  disabled = false,
  className,
  id,
  "aria-label": ariaLabel,
  granularity = "minute",
}: TimeFieldInputProps) {
  const ariaValue = React.useMemo((): AriaTimeValue | undefined => {
    if (!value) return undefined
    return new Time(value.getHours(), value.getMinutes(), value.getSeconds())
  }, [value])

  function handleChange(timeValue: AriaTimeValue | null) {
    if (!timeValue) {
      onValueChange?.(undefined)
      return
    }
    const d = value ? new Date(value) : new Date()
    d.setHours(timeValue.hour, timeValue.minute, timeValue.second, 0)
    onValueChange?.(d)
  }

  return (
    <AriaTimeField
      aria-label={ariaLabel}
      granularity={granularity}
      id={id}
      isDisabled={disabled}
      value={ariaValue}
      onChange={handleChange}
      className={cn("flex flex-col", className)}
    >
      <AriaDateInput className="inline-flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:bg-input/30">
        {(segment) => <DateSegment segment={segment} />}
      </AriaDateInput>
    </AriaTimeField>
  )
}

// ============================================================================
// DatePicker — セグメント入力 + カレンダーポップオーバー
// ============================================================================

interface DatePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  showCalendar?: boolean
  disabled?: boolean
  granularity?: Granularity
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    "value" | "onChange" | "defaultFocusedValue"
  >
  className?: string
  id?: string
  "aria-label"?: string
}

function DatePicker({
  value,
  onValueChange,
  showCalendar = true,
  disabled = false,
  granularity = "day",
  calendarProps,
  className,
  id,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const ariaValue = React.useMemo(
    () => toAriaValue(value, granularity),
    [value, granularity]
  )

  function handleFieldChange(dateValue: AriaDateValue | null) {
    if (!dateValue) {
      onValueChange?.(undefined)
      return
    }
    onValueChange?.(toNativeDate(dateValue))
  }

  function handleCalendarChange(dateValue: AriaDateValue) {
    const date = toNativeDate(dateValue)
    if (value && granularity !== "day") {
      date.setHours(value.getHours(), value.getMinutes(), value.getSeconds())
    }
    onValueChange?.(date)
    setOpen(false)
  }

  if (!showCalendar) {
    return (
      <DateFieldInput
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        granularity={granularity}
        className={className}
        id={id}
        aria-label={ariaLabel}
      />
    )
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <AriaDateField
        aria-label={ariaLabel}
        granularity={granularity}
        id={id}
        isDisabled={disabled}
        value={ariaValue as AriaDateValue | undefined}
        onChange={handleFieldChange}
      >
        <AriaGroup className="inline-flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:bg-input/30">
          <AriaDateInput className="flex flex-1 items-center">
            {(segment) => <DateSegment segment={segment} />}
          </AriaDateInput>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  disabled={disabled}
                  className="-mr-1.5 shrink-0"
                  aria-label="カレンダーを開く"
                />
              }
            >
              <CalendarIcon className="size-3.5 text-muted-foreground" />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start" sideOffset={8}>
              <Calendar
                value={ariaValue}
                onChange={handleCalendarChange}
                defaultFocusedValue={ariaValue}
                {...calendarProps}
              />
            </PopoverContent>
          </Popover>
        </AriaGroup>
      </AriaDateField>
    </div>
  )
}

// ============================================================================
// DateRangePicker — セグメント入力 (start - end) + カレンダー
// ============================================================================

interface DateRangePickerProps {
  value?: DateRange
  onValueChange?: (range: DateRange | undefined) => void
  showCalendar?: boolean
  disabled?: boolean
  numberOfMonths?: number
  calendarProps?: Omit<
    React.ComponentProps<typeof RangeCalendar>,
    "value" | "onChange" | "visibleDuration"
  >
  className?: string
  id?: string
  "aria-label"?: string
}

function DateRangePicker({
  value,
  onValueChange,
  showCalendar = true,
  disabled = false,
  numberOfMonths = 2,
  calendarProps,
  className,
  id,
  "aria-label": ariaLabel,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)

  const ariaValue = React.useMemo((): RangeValue<AriaDateValue> | undefined => {
    if (!value?.from) return undefined
    const start = new CalendarDate(
      value.from.getFullYear(),
      value.from.getMonth() + 1,
      value.from.getDate()
    )
    const end = value.to
      ? new CalendarDate(
          value.to.getFullYear(),
          value.to.getMonth() + 1,
          value.to.getDate()
        )
      : start
    return { start, end }
  }, [value])

  function handleAriaChange(rangeValue: RangeValue<AriaDateValue> | null) {
    if (!rangeValue) {
      onValueChange?.(undefined)
      return
    }
    const from = new Date(
      rangeValue.start.year,
      rangeValue.start.month - 1,
      rangeValue.start.day
    )
    const to = new Date(
      rangeValue.end.year,
      rangeValue.end.month - 1,
      rangeValue.end.day
    )
    onValueChange?.({ from, to })
  }

  function handleRangeCalendarChange(rangeValue: RangeValue<AriaDateValue>) {
    const from = new Date(
      rangeValue.start.year,
      rangeValue.start.month - 1,
      rangeValue.start.day
    )
    const to = new Date(
      rangeValue.end.year,
      rangeValue.end.month - 1,
      rangeValue.end.day
    )
    onValueChange?.({ from, to })
    setOpen(false)
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <AriaDateRangePicker
        aria-label={ariaLabel ?? "日付範囲"}
        id={id}
        isDisabled={disabled}
        value={ariaValue}
        onChange={handleAriaChange}
      >
        <AriaGroup className="inline-flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:bg-input/30">
          <AriaDateInput slot="start" className="flex items-center">
            {(segment) => <DateSegment segment={segment} />}
          </AriaDateInput>
          <span className="px-1.5 text-muted-foreground" aria-hidden="true">
            –
          </span>
          <AriaDateInput slot="end" className="flex items-center">
            {(segment) => <DateSegment segment={segment} />}
          </AriaDateInput>
          {showCalendar && (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    disabled={disabled}
                    className="-mr-1.5 ml-auto shrink-0"
                    aria-label="カレンダーを開く"
                  />
                }
              >
                <CalendarIcon className="size-3.5 text-muted-foreground" />
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0"
                align="start"
                sideOffset={8}
              >
                <RangeCalendar
                  value={ariaValue}
                  onChange={handleRangeCalendarChange}
                  visibleDuration={
                    numberOfMonths > 1 ? { months: numberOfMonths } : undefined
                  }
                  {...calendarProps}
                />
              </PopoverContent>
            </Popover>
          )}
        </AriaGroup>
      </AriaDateRangePicker>
    </div>
  )
}

export {
  DateFieldInput,
  DatePicker,
  DateRangePicker,
  DateSegment,
  TimeFieldInput,
}
export type {
  DateFieldInputProps,
  DatePickerProps,
  DateRangePickerProps,
  TimeFieldInputProps,
}
