"use client"

import * as React from "react"
import { Time } from "@internationalized/date"
import { ClockIcon } from "lucide-react"
import {
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  Group as AriaGroup,
  TimeField as AriaTimeField,
  useLocale,
  type DateSegmentProps as AriaDateSegmentProps,
  type TimeValue as AriaTimeValue,
} from "react-aria-components"

import { cn } from "@/registry/bases/base/lib/utils"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { Button } from "@/registry/ui/button"
import { ScrollMask } from "@/registry/ui/scroll-mask"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

type TimeGranularity = "hour" | "minute" | "second"
type HourCycle = 12 | 24 | "auto"

function TimeSegment({
  className,
  ...props
}: AriaDateSegmentProps & { className?: string }) {
  return (
    <AriaDateSegment
      className={cn(
        "inline rounded-md px-0.5 tabular-nums caret-transparent outline-none",
        "data-[placeholder]:text-muted-foreground",
        "data-[focused]:bg-foreground/15 data-[focused]:text-foreground",
        "data-[type=literal]:px-0 data-[type=literal]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/** Whether the locale formats time with a day period (AM/PM). */
function localeUses12Hour(locale: string): boolean {
  const parts = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
  }).formatToParts(new Date(2020, 0, 1, 13))
  return parts.some((p) => p.type === "dayPeriod")
}

/** Localized AM/PM labels for the active locale (e.g. 午前 / 午後, ص / م). */
function getDayPeriods(locale: string): { am: string; pm: string } {
  const fmt = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    hour12: true,
  })
  const read = (hour: number) =>
    fmt
      .formatToParts(new Date(2020, 0, 1, hour))
      .find((p) => p.type === "dayPeriod")?.value
  return { am: read(1) ?? "AM", pm: read(13) ?? "PM" }
}

interface TimeColumnProps {
  label: string
  options: number[]
  value: number | null
  onSelect: (value: number) => void
}

function TimeColumn({ label, options, value, onSelect }: TimeColumnProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const selectedRef = React.useRef<HTMLButtonElement>(null)

  // Center the selected option WITHIN the column only — never scroll the page
  // or any ancestor (which is what scrollIntoView would do).
  React.useEffect(() => {
    const container = scrollRef.current
    const el = selectedRef.current
    if (!container || !el) return
    container.scrollTop =
      el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2
  }, [])

  return (
    <ScrollMask
      size="1.5rem"
      render={
        <div
          ref={scrollRef}
          role="listbox"
          aria-label={label}
          className="flex max-h-56 flex-col overflow-y-auto px-1 py-1 [scrollbar-width:thin]"
        />
      }
    >
      {options.map((option) => {
        const isSelected = option === value
        return (
          <Button
            key={option}
            ref={isSelected ? selectedRef : undefined}
            type="button"
            role="option"
            variant={isSelected ? "default" : "ghost"}
            size="sm"
            className="mb-0.5 h-8 w-12 shrink-0 justify-center tabular-nums"
            aria-selected={isSelected}
            onClick={() => onSelect(option)}
          >
            {String(option).padStart(2, "0")}
          </Button>
        )
      })}
    </ScrollMask>
  )
}

interface TimePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  /** Show the clock dropdown. When false, renders a bare segmented input. */
  showDropdown?: boolean
  granularity?: TimeGranularity
  /**
   * `12` or `24` to force the hour cycle, or `"auto"` (default) to follow the
   * active locale.
   */
  hourCycle?: HourCycle
  /**
   * Override the AM/PM labels. By default they are localized for the active
   * locale (e.g. 午前/午後 in Japanese, ص/م in Arabic).
   */
  periods?: { am: string; pm: string }
  /** Minute step used to build the dropdown column. Defaults to 1. */
  minuteStep?: number
  /** Second step used to build the dropdown column. Defaults to 1. */
  secondStep?: number
  disabled?: boolean
  isInvalid?: boolean
  className?: string
  id?: string
  "aria-label"?: string
}

function toAriaTime(value: Date | undefined): AriaTimeValue | undefined {
  if (!value) return undefined
  return new Time(value.getHours(), value.getMinutes(), value.getSeconds())
}

function applyTime(base: Date | undefined, time: AriaTimeValue): Date {
  const d = base ? new Date(base) : new Date()
  d.setHours(time.hour, time.minute, time.second, 0)
  return d
}

function range(length: number, step = 1): number[] {
  const out: number[] = []
  for (let i = 0; i < length; i += step) out.push(i)
  return out
}

function TimePicker({
  value,
  onValueChange,
  showDropdown = true,
  granularity = "minute",
  hourCycle = "auto",
  periods,
  minuteStep = 1,
  secondStep = 1,
  disabled = false,
  isInvalid = false,
  className,
  id,
  "aria-label": ariaLabel,
}: TimePickerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  useShakeOnInvalid(ref)
  const [open, setOpen] = React.useState(false)
  const { locale } = useLocale()

  const is12h =
    hourCycle === "auto" ? localeUses12Hour(locale) : hourCycle === 12

  // Pass an explicit hourCycle to the field only when forced; "auto" lets the
  // field follow the locale on its own.
  const fieldHourCycle = hourCycle === "auto" ? undefined : hourCycle

  const dayPeriods = React.useMemo(
    () => periods ?? getDayPeriods(locale),
    [periods, locale]
  )

  const ariaValue = React.useMemo(() => toAriaTime(value), [value])

  function handleFieldChange(time: AriaTimeValue | null) {
    if (!time) {
      onValueChange?.(undefined)
      return
    }
    onValueChange?.(applyTime(value, time))
  }

  function selectPart(part: "hour" | "minute" | "second", next: number) {
    const current = ariaValue ?? new Time(0, 0, 0)
    let hour = current.hour
    if (part === "hour") {
      // 12h dropdown keeps the current AM/PM half.
      hour = is12h ? (current.hour >= 12 ? (next % 12) + 12 : next % 12) : next
    }
    const time = new Time(
      part === "hour" ? hour : current.hour,
      part === "minute" ? next : current.minute,
      part === "second" ? next : current.second
    )
    onValueChange?.(applyTime(value, time))
  }

  function selectPeriod(period: "am" | "pm") {
    const current = ariaValue ?? new Time(0, 0, 0)
    const isPM = current.hour >= 12
    if ((period === "pm") === isPM) return
    const hour = period === "pm" ? current.hour + 12 : current.hour - 12
    onValueChange?.(
      applyTime(value, new Time(hour, current.minute, current.second))
    )
  }

  const inputField = (
    <AriaTimeField
      aria-label={ariaLabel}
      granularity={granularity}
      hourCycle={fieldHourCycle}
      id={id}
      isDisabled={disabled}
      isInvalid={isInvalid}
      value={ariaValue ?? null}
      onChange={handleFieldChange}
      className="flex flex-1 items-center"
    >
      <AriaDateInput className="flex flex-1 items-center">
        {(segment) => <TimeSegment segment={segment} />}
      </AriaDateInput>
    </AriaTimeField>
  )

  if (!showDropdown) {
    return (
      <AriaTimeField
        aria-label={ariaLabel}
        granularity={granularity}
        hourCycle={fieldHourCycle}
        id={id}
        isDisabled={disabled}
        isInvalid={isInvalid}
        value={ariaValue ?? null}
        onChange={handleFieldChange}
        className={cn("flex flex-col", className)}
      >
        <div ref={ref} className="t-input">
          <AriaDateInput className="inline-flex h-9 w-full items-center rounded-4xl border border-input bg-transparent px-4 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[invalid]:border-destructive data-[invalid]:ring-3 data-[invalid]:ring-destructive/20 dark:bg-input/30 dark:data-[invalid]:ring-destructive/40">
            {(segment) => <TimeSegment segment={segment} />}
          </AriaDateInput>
        </div>
      </AriaTimeField>
    )
  }

  const selectedHour = ariaValue
    ? is12h
      ? ariaValue.hour % 12 === 0
        ? 12
        : ariaValue.hour % 12
      : ariaValue.hour
    : null

  return (
    <div className={cn("flex flex-col", className)}>
      <div ref={ref} className="t-input">
        <AriaGroup className="inline-flex h-9 w-full items-center rounded-4xl border border-input bg-transparent px-4 text-sm shadow-xs transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[invalid]:border-destructive data-[invalid]:ring-3 data-[invalid]:ring-destructive/20 dark:bg-input/30 dark:data-[invalid]:ring-destructive/40">
          {inputField}
          <span
            className="mx-2 h-4 w-px shrink-0 bg-border"
            aria-hidden="true"
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  disabled={disabled}
                  className="-mr-2 shrink-0"
                  aria-label="時刻を開く"
                />
              }
            >
              <ClockIcon className="size-4 text-muted-foreground" />
            </PopoverTrigger>
            <PopoverContent
              className="flex w-auto gap-0 p-0"
              align="start"
              sideOffset={8}
            >
              <TimeColumn
                label="時"
                options={is12h ? range(12).map((h) => h + 1) : range(24)}
                value={selectedHour}
                onSelect={(h) => selectPart("hour", is12h ? h % 12 : h)}
              />
              {granularity !== "hour" && (
                <>
                  <span className="my-1 w-px shrink-0 bg-border" />
                  <TimeColumn
                    label="分"
                    options={range(60, minuteStep)}
                    value={ariaValue?.minute ?? null}
                    onSelect={(m) => selectPart("minute", m)}
                  />
                </>
              )}
              {granularity === "second" && (
                <>
                  <span className="my-1 w-px shrink-0 bg-border" />
                  <TimeColumn
                    label="秒"
                    options={range(60, secondStep)}
                    value={ariaValue?.second ?? null}
                    onSelect={(s) => selectPart("second", s)}
                  />
                </>
              )}
              {is12h && (
                <>
                  <span className="my-1 w-px shrink-0 bg-border" />
                  <div
                    role="listbox"
                    aria-label="AM/PM"
                    className="flex flex-col justify-center gap-1 px-1.5 py-1"
                  >
                    {(["am", "pm"] as const).map((period) => {
                      const active =
                        ariaValue != null &&
                        (period === "pm") === ariaValue.hour >= 12
                      return (
                        <Button
                          key={period}
                          type="button"
                          role="option"
                          variant={active ? "default" : "outline"}
                          size="sm"
                          className="h-8 min-w-12 shrink-0 justify-center px-3 font-medium"
                          aria-selected={active}
                          onClick={() => selectPeriod(period)}
                        >
                          {dayPeriods[period]}
                        </Button>
                      )
                    })}
                  </div>
                </>
              )}
            </PopoverContent>
          </Popover>
        </AriaGroup>
      </div>
    </div>
  )
}

export { TimePicker, TimeSegment }
export type { TimePickerProps, TimeGranularity, HourCycle }
