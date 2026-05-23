"use client"

import * as React from "react"
import {
  isToday as ariaIsToday,
  getLocalTimeZone,
  type CalendarDate,
} from "@internationalized/date"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react"
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
  CalendarStateContext,
  RangeCalendarStateContext,
  useLocale,
  type CalendarProps as AriaCalendarProps,
  type RangeCalendarProps as AriaRangeCalendarProps,
  type DateValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/styles/base-nova/ui/button"

// ============================================================================
// Internal Year Picker Context
// ============================================================================

const CalendarPickerContext = React.createContext<{
  isYearPickerOpen: boolean
  setIsYearPickerOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ isYearPickerOpen: false, setIsYearPickerOpen: () => {} })

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
        "size-7 shrink-0 p-0 opacity-50 hover:opacity-100",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
        "transition-opacity duration-150",
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
// CSS Grid override: overrides <table> display so cells are proper grid items.
// Enables margin-top on cells and full-column-width range band backgrounds.
// ============================================================================

function CalendarGrid({
  className,
  ...props
}: React.ComponentProps<typeof AriaCalendarGrid>) {
  return (
    <AriaCalendarGrid
      className={cn("grid w-full grid-cols-7", className)}
      {...props}
    />
  )
}

// ============================================================================
// CalendarGridHeader
// display:contents collapses <thead>/<tr> so <th> are direct grid items
// ============================================================================

function CalendarGridHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaCalendarGridHeader>) {
  return (
    <AriaCalendarGridHeader
      className={cn("contents [&>tr]:contents", className)}
      {...props}
    >
      {children as (day: string) => React.ReactElement}
    </AriaCalendarGridHeader>
  )
}

// ============================================================================
// CalendarGridBody
// display:contents collapses <tbody>/<tr> so <td> are direct grid items.
// First row gets mt-1 for visual separation from the weekday header.
// ============================================================================

function CalendarGridBody({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaCalendarGridBody>) {
  return (
    <AriaCalendarGridBody
      className={cn(
        "contents [&>tr]:contents [&>tr:first-child>td]:mt-1",
        className
      )}
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
        "flex items-center justify-center pb-2 text-xs font-medium text-muted-foreground select-none",
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
        "absolute bottom-0.5 left-1/2 size-[3px] -translate-x-1/2 rounded-full bg-current",
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// CalendarCell
//
// Two-layer design (CSS Grid enables seamless range band):
//   <td>  (AriaCalendarCell) — bg-primary/15 band fills full column width
//   <div> (inner)            — rounded-full circle for selection/hover/today
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
    <AriaCalendarCell
      date={date}
      className={(rp) => {
        const isRangeMiddle =
          rp.isSelected && !rp.isSelectionStart && !rp.isSelectionEnd
        const isRangeStart = rp.isSelectionStart && !rp.isSelectionEnd
        const isRangeEnd = rp.isSelectionEnd && !rp.isSelectionStart
        const showBand =
          (isRangeMiddle || isRangeStart || isRangeEnd) &&
          !rp.isOutsideVisibleRange

        return cn(
          "relative my-[2px] cursor-default p-0 outline-none",
          showBand && "bg-primary/15",
          isRangeStart &&
            !rp.isOutsideVisibleRange &&
            "rounded-l-(--cell-radius)",
          isRangeEnd && !rp.isOutsideVisibleRange && "rounded-r-(--cell-radius)"
        )
      }}
    >
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
              "relative flex aspect-square w-full items-center justify-center rounded-full text-sm font-medium select-none",
              "transition-[transform,background-color] duration-100 active:scale-95",
              isFocusVisible &&
                "ring-2 ring-ring ring-offset-1 ring-offset-background",
              !isSelected &&
                !isDisabled &&
                !isOutsideVisibleRange &&
                isHovered &&
                "bg-accent text-accent-foreground",
              isTodayDate && !isSelected && "font-semibold text-primary",
              isSelected &&
                !isRangeMiddle &&
                "bg-primary text-primary-foreground",
              isRangeMiddle && "text-foreground",
              isUnavailable && "pointer-events-none line-through opacity-50",
              isDisabled && !isUnavailable && "pointer-events-none opacity-50",
              isOutsideVisibleRange &&
                "pointer-events-none text-muted-foreground opacity-30",
              className
            )}
          >
            {content}
            {isTodayDate && (
              <span
                aria-hidden
                className={cn(
                  "absolute bottom-[3px] left-1/2 size-[3px] -translate-x-1/2 rounded-full",
                  isSelected && !isRangeMiddle
                    ? "bg-primary-foreground"
                    : "bg-primary"
                )}
              />
            )}
          </div>
        )
      }}
    </AriaCalendarCell>
  )
}

// ============================================================================
// CalendarYearNavButton (opt-in, not used in DefaultCalendarContent)
// ============================================================================

function CalendarYearNavButton({
  direction,
  className,
  ...props
}: { direction: "prev" | "next" } & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>) {
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState

  function handleClick() {
    if (!state) return
    const next =
      direction === "prev"
        ? state.focusedDate.subtract({ years: 1 })
        : state.focusedDate.add({ years: 1 })
    state.setFocusedDate(next)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-7 shrink-0 p-0 opacity-50 hover:opacity-100",
        "disabled:pointer-events-none disabled:opacity-30",
        className
      )}
      aria-label={direction === "prev" ? "前の年" : "次の年"}
      {...props}
    >
      {direction === "prev" ? (
        <ChevronsLeftIcon className="cn-rtl-flip size-4" />
      ) : (
        <ChevronsRightIcon className="cn-rtl-flip size-4" />
      )}
    </button>
  )
}

// ============================================================================
// CalendarYearPickerTrigger
// Replaces CalendarHeading in DefaultCalendarContent.
// AriaHeading is rendered sr-only for React Aria internal a11y wiring.
// ============================================================================

function CalendarYearPickerTrigger({ className }: { className?: string }) {
  const { isYearPickerOpen, setIsYearPickerOpen } = React.useContext(
    CalendarPickerContext
  )
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState
  const { locale } = useLocale()

  const title = React.useMemo(() => {
    if (!state) return ""
    return new Intl.DateTimeFormat(locale, {
      month: "long",
      year: "numeric",
    }).format(state.focusedDate.toDate(getLocalTimeZone()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.focusedDate.month, state?.focusedDate.year, locale])

  return (
    <>
      {/* Hidden heading for React Aria internal labelling */}
      <AriaHeading className="sr-only" />
      {/* Visible trigger */}
      <button
        type="button"
        onClick={() => setIsYearPickerOpen((o) => !o)}
        data-open={isYearPickerOpen || undefined}
        className={cn(
          "flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-sm",
          "text-sm font-medium select-none",
          "transition-colors hover:text-foreground/70",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
          className
        )}
        aria-expanded={isYearPickerOpen}
      >
        <span>{title}</span>
        <ChevronRightIcon
          className={cn(
            "size-3 text-muted-foreground transition-transform duration-200",
            isYearPickerOpen && "rotate-90"
          )}
        />
      </button>
    </>
  )
}

// ============================================================================
// CalendarYearPickerGrid
// 3-column year grid, centered on the current focused year.
// ============================================================================

function CalendarYearPickerGrid({ className }: { className?: string }) {
  const { setIsYearPickerOpen } = React.useContext(CalendarPickerContext)
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState

  if (!state) return null

  const currentYear = state.focusedDate.year
  const startYear = currentYear - 3
  const years = Array.from({ length: 12 }, (_, i) => startYear + i)

  function selectYear(year: number) {
    if (!state) return
    state.setFocusedDate(state.focusedDate.set({ year }))
    setIsYearPickerOpen(false)
  }

  return (
    <div
      className={cn(
        "animate-in duration-150 fade-in-0",
        "grid grid-cols-3 gap-1 p-1",
        className
      )}
    >
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => selectYear(year)}
          data-selected={year === currentYear || undefined}
          className={cn(
            "inline-flex h-8 items-center justify-center rounded-(--cell-radius) px-2.5 text-sm font-medium select-none",
            "transition-colors duration-100 active:scale-95",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            year === currentYear
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          aria-pressed={year === currentYear}
        >
          {year}
        </button>
      ))}
    </div>
  )
}

// ============================================================================
// Default calendar content
// ============================================================================

function DefaultCalendarContent() {
  const { isYearPickerOpen } = React.useContext(CalendarPickerContext)

  return (
    <>
      <CalendarHeader>
        <CalendarNavButton
          slot="previous"
          className={cn(isYearPickerOpen && "pointer-events-none opacity-0")}
        />
        <CalendarYearPickerTrigger />
        <CalendarNavButton
          slot="next"
          className={cn(isYearPickerOpen && "pointer-events-none opacity-0")}
        />
      </CalendarHeader>

      {isYearPickerOpen ? (
        <CalendarYearPickerGrid />
      ) : (
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
      )}
    </>
  )
}

// ============================================================================
// Calendar (single date)
// ============================================================================

type CalendarProps<T extends DateValue = DateValue> = AriaCalendarProps<T> & {
  className?: string
  children?: React.ReactNode
  defaultYearPickerOpen?: boolean
  isYearPickerOpen?: boolean
  onYearPickerOpenChange?: (isOpen: boolean) => void
}

function CalendarRoot<T extends DateValue = DateValue>({
  className,
  children,
  defaultYearPickerOpen = false,
  isYearPickerOpen: controlledOpen,
  onYearPickerOpenChange,
  ...props
}: CalendarProps<T>) {
  const [internalOpen, setInternalOpen] = React.useState(defaultYearPickerOpen)
  const isYearPickerOpen = controlledOpen ?? internalOpen
  const setIsYearPickerOpen: React.Dispatch<React.SetStateAction<boolean>> =
    React.useCallback(
      (value) => {
        const next =
          typeof value === "function" ? value(isYearPickerOpen) : value
        setInternalOpen(next)
        onYearPickerOpenChange?.(next)
      },
      [isYearPickerOpen, onYearPickerOpenChange]
    )

  return (
    <CalendarPickerContext.Provider
      value={{ isYearPickerOpen, setIsYearPickerOpen }}
    >
      <AriaCalendar
        className={cn(
          "p-2 [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(7)]",
          "bg-background p-3",
          "in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
          className
        )}
        {...props}
      >
        {children ?? <DefaultCalendarContent />}
      </AriaCalendar>
    </CalendarPickerContext.Provider>
  )
}

const Calendar = Object.assign(CalendarRoot, {
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  YearNavButton: CalendarYearNavButton,
  YearPickerTrigger: CalendarYearPickerTrigger,
  YearPickerGrid: CalendarYearPickerGrid,
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
    defaultYearPickerOpen?: boolean
    isYearPickerOpen?: boolean
    onYearPickerOpenChange?: (isOpen: boolean) => void
  }

function RangeCalendarRoot<T extends DateValue = DateValue>({
  className,
  children,
  defaultYearPickerOpen = false,
  isYearPickerOpen: controlledOpen,
  onYearPickerOpenChange,
  ...props
}: RangeCalendarComponentProps<T>) {
  const [internalOpen, setInternalOpen] = React.useState(defaultYearPickerOpen)
  const isYearPickerOpen = controlledOpen ?? internalOpen
  const setIsYearPickerOpen: React.Dispatch<React.SetStateAction<boolean>> =
    React.useCallback(
      (value) => {
        const next =
          typeof value === "function" ? value(isYearPickerOpen) : value
        setInternalOpen(next)
        onYearPickerOpenChange?.(next)
      },
      [isYearPickerOpen, onYearPickerOpenChange]
    )

  return (
    <CalendarPickerContext.Provider
      value={{ isYearPickerOpen, setIsYearPickerOpen }}
    >
      <AriaRangeCalendar
        className={cn(
          "p-2 [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(7)]",
          "bg-background p-3",
          "in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
          className
        )}
        {...props}
      >
        {children ?? <DefaultCalendarContent />}
      </AriaRangeCalendar>
    </CalendarPickerContext.Provider>
  )
}

const RangeCalendar = Object.assign(RangeCalendarRoot, {
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  YearNavButton: CalendarYearNavButton,
  YearPickerTrigger: CalendarYearPickerTrigger,
  YearPickerGrid: CalendarYearPickerGrid,
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
  CalendarYearNavButton,
  CalendarYearPickerTrigger,
  CalendarYearPickerGrid,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  CalendarCellIndicator,
}
export type { CalendarCellRenderProps }
