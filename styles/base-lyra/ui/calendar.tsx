"use client"

import * as React from "react"
import {
  isToday as ariaIsToday,
  CalendarDate,
  getLocalTimeZone,
} from "@internationalized/date"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import {
  Button as AriaButton,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  Heading as AriaHeading,
  RangeCalendar as AriaRangeCalendar,
  type CalendarProps as AriaCalendarProps,
  type RangeCalendarProps as AriaRangeCalendarProps,
  type DateValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/styles/base-lyra/ui/button"

// ============================================================================
// CalendarHeader
// ============================================================================

function CalendarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between gap-1 pb-3", className)}
      {...props}
    />
  )
}

// ============================================================================
// CalendarHeading
// ============================================================================

function CalendarHeading({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeading>) {
  return (
    <AriaHeading
      className={cn(
        "flex-1 text-center text-sm font-medium select-none",
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// CalendarNavButton
// ============================================================================

function CalendarNavButton({
  slot,
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaButton> & { slot: "previous" | "next" }) {
  return (
    <AriaButton
      slot={slot}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-(--cell-size) shrink-0 p-0 opacity-50 hover:opacity-100",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
        className
      )}
      {...props}
    >
      {children ??
        (slot === "previous" ? (
          <ChevronLeftIcon className="cn-rtl-flip size-4" />
        ) : (
          <ChevronRightIcon className="cn-rtl-flip size-4" />
        ))}
    </AriaButton>
  )
}

// ============================================================================
// CalendarGrid
// ============================================================================

function CalendarGrid({
  className,
  ...props
}: React.ComponentProps<typeof AriaCalendarGrid>) {
  return (
    <AriaCalendarGrid
      className={cn("w-full border-collapse", className)}
      {...props}
    />
  )
}

// ============================================================================
// CalendarGridHeader
// ============================================================================

function CalendarGridHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaCalendarGridHeader>) {
  return (
    <AriaCalendarGridHeader className={className} {...props}>
      {children as (day: string) => React.ReactElement}
    </AriaCalendarGridHeader>
  )
}

// ============================================================================
// CalendarGridBody
// ============================================================================

function CalendarGridBody({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaCalendarGridBody>) {
  return (
    <AriaCalendarGridBody
      className={cn("[&>tr]:mt-2 [&>tr>td]:p-0", className)}
      {...props}
    >
      {children as (date: CalendarDate) => React.ReactElement}
    </AriaCalendarGridBody>
  )
}

// ============================================================================
// CalendarHeaderCell
// ============================================================================

function CalendarHeaderCell({
  className,
  ...props
}: React.ComponentProps<typeof AriaCalendarHeaderCell>) {
  return (
    <AriaCalendarHeaderCell
      className={cn(
        "w-(--cell-size) pb-2 text-[0.8rem] font-normal text-muted-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// CalendarCellIndicator
// ============================================================================

function CalendarCellIndicator({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-current",
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// CalendarCell
// ============================================================================

type CalendarCellRenderProps = {
  formattedDate: string
  isSelected: boolean
  isUnavailable: boolean
  isDisabled: boolean
  isOutsideMonth: boolean
}

type CalendarCellProps = {
  date: CalendarDate
  children?:
    | React.ReactNode
    | ((renderProps: CalendarCellRenderProps) => React.ReactNode)
  className?: string
}

function CalendarCell({ date, children, className }: CalendarCellProps) {
  return (
    <AriaCalendarCell date={date} className="p-0 outline-none">
      {(rp) => {
        const {
          formattedDate,
          isSelected,
          isSelectionStart,
          isSelectionEnd,
          isUnavailable,
          isDisabled,
          isOutsideVisibleRange,
          isFocusVisible,
          isHovered,
        } = rp

        const isRangeMiddle = isSelected && !isSelectionStart && !isSelectionEnd
        const isTodayDate = ariaIsToday(date, getLocalTimeZone())

        const content =
          typeof children === "function"
            ? children({
                formattedDate,
                isSelected,
                isUnavailable,
                isDisabled,
                isOutsideMonth: isOutsideVisibleRange,
              })
            : (children ?? formattedDate)

        return (
          <div
            className={cn(
              "relative flex size-(--cell-size) cursor-default items-center justify-center rounded-(--cell-radius) text-sm select-none",
              // Focus ring
              isFocusVisible &&
                "ring-2 ring-ring ring-offset-1 ring-offset-background",
              // Hover (only when not selected/unavailable/disabled)
              isHovered &&
                !isSelected &&
                !isDisabled &&
                !isOutsideVisibleRange &&
                "bg-accent text-accent-foreground",
              // Today (not selected)
              isTodayDate && !isSelected && "bg-muted text-foreground",
              // Selected / range start / range end
              isSelected &&
                !isRangeMiddle &&
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
              // Range middle
              isRangeMiddle && "rounded-none bg-primary/15 text-foreground",
              // Range start: square right edge (only when start ≠ end)
              isSelectionStart &&
                !isSelectionEnd &&
                "rounded-(--cell-radius) rounded-r-none",
              // Range end: square left edge (only when start ≠ end)
              isSelectionEnd &&
                !isSelectionStart &&
                "rounded-(--cell-radius) rounded-l-none",
              // Unavailable
              isUnavailable && "pointer-events-none line-through opacity-50",
              // Disabled (but not unavailable)
              isDisabled && !isUnavailable && "pointer-events-none opacity-50",
              // Outside visible range
              isOutsideVisibleRange &&
                "pointer-events-none text-muted-foreground opacity-30",
              className
            )}
          >
            {content}
          </div>
        )
      }}
    </AriaCalendarCell>
  )
}

// ============================================================================
// Default calendar content (used when no children prop provided)
// ============================================================================

function DefaultCalendarContent() {
  return (
    <>
      <CalendarHeader>
        <CalendarNavButton slot="previous" />
        <CalendarHeading />
        <CalendarNavButton slot="next" />
      </CalendarHeader>
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </>
  )
}

// ============================================================================
// Calendar (single date)
// ============================================================================

type CalendarProps<T extends DateValue = DateValue> = AriaCalendarProps<T> & {
  className?: string
  children?: React.ReactNode
}

function CalendarRoot<T extends DateValue = DateValue>({
  className,
  children,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar
      className={cn(
        "p-2 [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(8)]",
        "bg-background p-3",
        "in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        className
      )}
      {...props}
    >
      {children ?? <DefaultCalendarContent />}
    </AriaCalendar>
  )
}

const Calendar = Object.assign(CalendarRoot, {
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  GridBody: CalendarGridBody,
  HeaderCell: CalendarHeaderCell,
  Cell: CalendarCell,
  CellIndicator: CalendarCellIndicator,
})

// ============================================================================
// RangeCalendar
// ============================================================================

type RangeCalendarComponentProps<T extends DateValue = DateValue> =
  AriaRangeCalendarProps<T> & {
    className?: string
    children?: React.ReactNode
  }

function RangeCalendarRoot<T extends DateValue = DateValue>({
  className,
  children,
  ...props
}: RangeCalendarComponentProps<T>) {
  return (
    <AriaRangeCalendar
      className={cn(
        "p-2 [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(8)]",
        "bg-background p-3",
        "in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        className
      )}
      {...props}
    >
      {children ?? <DefaultCalendarContent />}
    </AriaRangeCalendar>
  )
}

const RangeCalendar = Object.assign(RangeCalendarRoot, {
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  GridBody: CalendarGridBody,
  HeaderCell: CalendarHeaderCell,
  Cell: CalendarCell,
  CellIndicator: CalendarCellIndicator,
})

export {
  Calendar,
  RangeCalendar,
  CalendarHeader,
  CalendarHeading,
  CalendarNavButton,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  CalendarCellIndicator,
}
export type { CalendarCellRenderProps }
