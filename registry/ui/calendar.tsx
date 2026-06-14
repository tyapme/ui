"use client"

import * as React from "react"
import {
  isToday as ariaIsToday,
  getDayOfWeek,
  getLocalTimeZone,
  type CalendarDate,
} from "@internationalized/date"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
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

import { cn } from "@/registry/bases/base/lib/utils"
import { buttonVariants } from "@/registry/ui/button"

const CalendarPickerContext = React.createContext<{
  isYearPickerOpen: boolean
  setIsYearPickerOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ isYearPickerOpen: false, setIsYearPickerOpen: () => {} })

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
          <ChevronLeft className="cn-rtl-flip size-4" />
        ) : (
          <ChevronRight className="cn-rtl-flip size-4" />
        ))}
    </AriaButton>
  )
}

function CalendarGrid({
  className,
  ...props
}: React.ComponentProps<typeof AriaCalendarGrid>) {
  return (
    <AriaCalendarGrid
      className={cn(
        "grid grid-cols-[repeat(7,var(--cell-size))] gap-y-1",
        className
      )}
      {...props}
    />
  )
}

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

function CalendarGridBody({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaCalendarGridBody>) {
  return (
    <AriaCalendarGridBody
      className={cn("contents [&>tr]:contents", className)}
      {...props}
    >
      {children as (date: CalendarDate) => React.ReactElement}
    </AriaCalendarGridBody>
  )
}

function CalendarHeaderCell({
  className,
  ...props
}: React.ComponentProps<typeof AriaCalendarHeaderCell>) {
  return (
    <AriaCalendarHeaderCell
      className={cn(
        "flex items-center justify-center pb-1 text-xs font-normal text-muted-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

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
  const { locale } = useLocale()

  const isRegularCalendar = !!React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const colIndex = getDayOfWeek(date, locale)

  return (
    <AriaCalendarCell
      date={date}
      className={(rp) => {
        const isRangeMiddle =
          !isRegularCalendar &&
          rp.isSelected &&
          !rp.isSelectionStart &&
          !rp.isSelectionEnd
        const isRangeStart =
          !isRegularCalendar && rp.isSelectionStart && !rp.isSelectionEnd
        const isRangeEnd =
          !isRegularCalendar && rp.isSelectionEnd && !rp.isSelectionStart
        const showBand =
          (isRangeMiddle || isRangeStart || isRangeEnd) &&
          !rp.isOutsideVisibleRange

        const roundLeft = showBand && (isRangeStart || colIndex === 0)
        const roundRight = showBand && (isRangeEnd || colIndex === 6)

        return cn(
          "relative flex cursor-default items-center justify-center p-0 outline-none",
          showBand && "bg-primary/15",
          roundLeft && "rounded-l-(--cell-radius)",
          roundRight && "rounded-r-(--cell-radius)"
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

        const isRangeMiddle =
          !isRegularCalendar &&
          isSelected &&
          !isSelectionStart &&
          !isSelectionEnd
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
              "relative flex size-(--cell-size) items-center justify-center rounded-full text-sm font-medium select-none",
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
            {!isRegularCalendar && rangeState && (
              <div
                aria-hidden
                className="absolute inset-0 z-10"
                onPointerDown={(e) => {
                  const current = rangeState.value
                  if (!current?.start || !current?.end || rangeState.anchorDate)
                    return
                  const { start, end } = current
                  if (start.compare(end) === 0) return

                  if (date.compare(end) > 0) {
                    e.stopPropagation()
                    rangeState.setValue({ start, end: date })
                    rangeState.setFocusedDate(date)
                  } else if (date.compare(start) < 0) {
                    e.stopPropagation()
                    rangeState.setValue({ start: date, end })
                    rangeState.setFocusedDate(date)
                  } else if (date.compare(start) > 0 && date.compare(end) < 0) {
                    const dStart = Math.abs(date.compare(start))
                    const dEnd = Math.abs(date.compare(end))
                    e.stopPropagation()
                    if (dStart <= dEnd) {
                      rangeState.setValue({ start: date, end })
                    } else {
                      rangeState.setValue({ start, end: date })
                    }
                    rangeState.setFocusedDate(date)
                  }
                }}
              />
            )}
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
        <ChevronsLeft className="cn-rtl-flip size-4" />
      ) : (
        <ChevronsRight className="cn-rtl-flip size-4" />
      )}
    </button>
  )
}

function CalendarYearPickerTrigger({ className }: { className?: string }) {
  const { isYearPickerOpen, setIsYearPickerOpen } = React.useContext(
    CalendarPickerContext
  )
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState
  const { locale } = useLocale()
  const focusedDate = state?.focusedDate

  const title = React.useMemo(() => {
    if (!focusedDate) return ""
    return new Intl.DateTimeFormat(locale, {
      month: "long",
      year: "numeric",
    }).format(focusedDate.toDate(getLocalTimeZone()))
  }, [focusedDate, locale])

  return (
    <>
      <AriaHeading className="sr-only" />
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
        <ChevronRight
          className={cn(
            "size-3 text-muted-foreground transition-transform duration-200",
            isYearPickerOpen && "rotate-90"
          )}
        />
      </button>
    </>
  )
}

const YEAR_ITEM_H = 32
const YEAR_PICKER_H = 224
const MONTH_ITEM_H = YEAR_ITEM_H
const MONTH_PICKER_H = YEAR_PICKER_H
const MIN_YEAR = 1900
const MAX_YEAR = 2100
const ALL_YEARS = Array.from(
  { length: MAX_YEAR - MIN_YEAR + 1 },
  (_, i) => MIN_YEAR + i
)
const YEAR_SCROLL_PAD = YEAR_PICKER_H / 2 - YEAR_ITEM_H / 2

function CalendarYearPickerGrid({ className }: { className?: string }) {
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const selectedRef = React.useRef<HTMLButtonElement>(null)

  React.useLayoutEffect(() => {
    if (!scrollRef.current || !selectedRef.current) return
    const container = scrollRef.current
    const item = selectedRef.current

    container.scrollTop =
      item.offsetTop - container.clientHeight / 2 + item.clientHeight / 2
  }, [])

  if (!state) return null

  const currentYear = state.focusedDate.year

  function selectYear(year: number) {
    state!.setFocusedDate(state!.focusedDate.set({ year }))
  }

  return (
    <div
      className={cn("relative animate-in duration-150 fade-in-0", className)}
      style={{ height: YEAR_PICKER_H }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(to bottom, var(--background, white) 0%, transparent 30%, transparent 70%, var(--background, white) 100%)",
        }}
      />
      <div
        ref={scrollRef}
        className="absolute inset-0 [scrollbar-width:none] overflow-y-auto px-1 [&::-webkit-scrollbar]:hidden"
      >
        <div style={{ height: YEAR_SCROLL_PAD }} aria-hidden />
        {ALL_YEARS.map((year) => (
          <button
            key={year}
            ref={year === currentYear ? selectedRef : undefined}
            type="button"
            onClick={() => selectYear(year)}
            style={{ height: YEAR_ITEM_H }}
            className={cn(
              "flex w-full items-center justify-center rounded-(--cell-radius) text-sm font-medium select-none",
              "transition-colors duration-100 active:scale-95",
              "focus-visible:relative focus-visible:z-30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              year === currentYear
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-pressed={year === currentYear}
          >
            {year}
          </button>
        ))}
        <div style={{ height: YEAR_SCROLL_PAD }} aria-hidden />
      </div>
    </div>
  )
}

function CalendarMonthPickerStatic({ className }: { className?: string }) {
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const state = calState ?? rangeState
  const { locale } = useLocale()

  if (!state) return null

  const currentMonth = state.focusedDate.month
  const monthsInYear = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate
  )
  const months = Array.from({ length: monthsInYear }, (_, i) => i + 1)

  function selectMonth(month: number) {
    state!.setFocusedDate(state!.focusedDate.set({ month }))
  }

  return (
    <div
      className={cn("grid grid-cols-2 gap-0.5 px-1", className)}
      style={{ height: MONTH_PICKER_H }}
    >
      {months.map((month) => {
        const label = new Intl.DateTimeFormat(locale, {
          month: "short",
        }).format(
          state.focusedDate.set({ month, day: 1 }).toDate(getLocalTimeZone())
        )
        return (
          <button
            key={month}
            type="button"
            onClick={() => selectMonth(month)}
            className={cn(
              "flex items-center justify-center rounded-(--cell-radius) text-sm font-medium select-none",
              "transition-colors duration-100 active:scale-95",
              "focus-visible:relative focus-visible:z-30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              month === currentMonth
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-pressed={month === currentMonth}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function DefaultCalendarContent() {
  const { isYearPickerOpen } = React.useContext(CalendarPickerContext)
  const calState = React.useContext(CalendarStateContext)
  const rangeState = React.useContext(RangeCalendarStateContext)
  const hasSelection = !!(calState?.value ?? rangeState?.value)

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
      <div className="relative">
        <div
          className={cn(isYearPickerOpen && "pointer-events-none invisible")}
        >
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </div>
        {isYearPickerOpen && (
          <div className="absolute inset-x-0 top-0 grid grid-cols-2 gap-2">
            <CalendarMonthPickerStatic />
            <CalendarYearPickerGrid />
          </div>
        )}
      </div>
    </>
  )
}

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
          "cn-calendar [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(8)]",
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
  MonthPickerStatic: CalendarMonthPickerStatic,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  GridBody: CalendarGridBody,
  HeaderCell: CalendarHeaderCell,
  Cell: CalendarCell,
  CellIndicator: CalendarCellIndicator,
})

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
          "cn-calendar [--cell-radius:var(--radius-md,calc(var(--radius)-2px))] [--cell-size:--spacing(8)]",
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
  MonthPickerStatic: CalendarMonthPickerStatic,
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
  CalendarMonthPickerStatic,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  CalendarCellIndicator,
}
export type { CalendarCellRenderProps }
