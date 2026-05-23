"use client"

import * as React from "react"
import { Time } from "@internationalized/date"
import {
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  TimeField as AriaTimeField,
  type DateSegmentProps as AriaDateSegmentProps,
  type TimeValue as AriaTimeValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"

// ============================================================================
// TimeSegment — 個別の時刻セグメント（時/分/秒）
// ============================================================================

function TimeSegment({
  className,
  ...props
}: AriaDateSegmentProps & { className?: string }) {
  return (
    <AriaDateSegment
      data-slot="time-segment"
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
      data-slot="time-field"
      granularity={granularity}
      id={id}
      isDisabled={disabled}
      value={ariaValue}
      onChange={handleChange}
      className={cn("flex flex-col", className)}
    >
      <AriaDateInput
        data-slot="time-field-input"
        className="inline-flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:bg-input/30"
      >
        {(segment) => <TimeSegment segment={segment} />}
      </AriaDateInput>
    </AriaTimeField>
  )
}

export { TimeFieldInput, TimeSegment }
export type { TimeFieldInputProps }
