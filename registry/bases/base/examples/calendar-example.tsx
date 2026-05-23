"use client"

import * as React from "react"
import {
  CalendarDate,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
  type DateValue,
} from "@internationalized/date"
import { format } from "date-fns"
import { useLocale } from "react-aria-components"
import { type RangeValue } from "react-aria-components"

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/ui/button"
import {
  Calendar,
  RangeCalendar,
} from "@/registry/ui/calendar"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/ui/popover"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function CalendarExample() {
  return (
    <ExampleWrapper>
      <CalendarSingle />
      <CalendarUnavailableDates />
      <CalendarMinMax />
      <CalendarRange />
      <CalendarRangeMultipleMonths />
      <CalendarWithIndicators />
      <CalendarWithTime />
      <CalendarWithPresets />
      <CalendarCustomCells />
      <DatePickerSimple />
      <DatePickerWithYearPicker />
      <DatePickerWithRange />
      <CalendarInCard />
      <CalendarInPopover />
    </ExampleWrapper>
  )
}

function CalendarInCard() {
  return (
    <Example title="In Card">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarInPopover() {
  return (
    <Example title="In Popover">
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline" className="px-2.5 font-normal" />}
        >
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendar"
            hugeicons="CalendarIcon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            data-icon="inline-start"
          />
          Open Calendar
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar />
        </PopoverContent>
      </Popover>
    </Example>
  )
}

function CalendarSingle() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      12
    )
  )
  return (
    <Example title="Single">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar value={date} onChange={setDate} />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarUnavailableDates() {
  const { locale } = useLocale()
  const [date, setDate] = React.useState<DateValue | null>(null)

  const now = today(getLocalTimeZone())
  const bookedDays = [3, 7, 12, 15, 21, 28]

  const isDateUnavailable = (d: DateValue) =>
    isWeekend(d, locale) || bookedDays.includes(d.day)

  return (
    <Example title="Unavailable Dates">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            value={date}
            onChange={setDate}
            minValue={now}
            isDateUnavailable={isDateUnavailable}
          />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarMinMax() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const now = today(getLocalTimeZone())

  return (
    <Example title="Min / Max Dates">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            value={date}
            onChange={setDate}
            minValue={now}
            maxValue={now.add({ months: 3 })}
          />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarRange() {
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 1, 12),
    end: new CalendarDate(new Date().getFullYear(), 1, 12).add({ days: 30 }),
  })

  return (
    <Example
      title="Range"
      containerClassName="lg:col-span-full 2xl:col-span-full"
      className="p-12"
    >
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <RangeCalendar
            value={range}
            onChange={setRange}
            visibleDuration={{ months: 2 }}
          />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarRangeMultipleMonths() {
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 4, 12),
    end: new CalendarDate(new Date().getFullYear(), 4, 12).add({ days: 60 }),
  })

  return (
    <Example
      title="Range Multiple Months"
      containerClassName="lg:col-span-full 2xl:col-span-full"
      className="p-12"
    >
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <RangeCalendar
            value={range}
            onChange={setRange}
            visibleDuration={{ months: 3 }}
          />
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarWithIndicators() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const datesWithEvents = [3, 7, 12, 15, 21, 28]

  return (
    <Example title="Cell Indicators">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar value={date} onChange={setDate}>
            <Calendar.Header>
              <Calendar.NavButton slot="previous" />
              <Calendar.Heading />
              <Calendar.NavButton slot="next" />
            </Calendar.Header>
            <Calendar.Grid>
              <Calendar.GridHeader>
                {(day) => (
                  <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                )}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(d) => (
                  <Calendar.Cell date={d}>
                    {({ formattedDate, isOutsideMonth }) => (
                      <>
                        {formattedDate}
                        {!isOutsideMonth &&
                          datesWithEvents.includes(d.day) && (
                            <Calendar.CellIndicator />
                          )}
                      </>
                    )}
                  </Calendar.Cell>
                )}
              </Calendar.GridBody>
            </Calendar.Grid>
          </Calendar>
        </CardContent>
      </Card>
    </Example>
  )
}

function CalendarWithTime() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      12
    )
  )

  return (
    <Example title="With Time">
      <Card size="sm" className="mx-auto w-fit">
        <CardContent>
          <Calendar
            value={date}
            onChange={setDate}
            className="p-0"
          />
        </CardContent>
        <CardFooter className="border-t bg-card">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="time-from"
                  type="time"
                  step="1"
                  defaultValue="10:30:00"
                  className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
                <InputGroupAddon>
                  <IconPlaceholder
                    lucide="Clock2Icon"
                    tabler="IconClockHour2"
                    hugeicons="Clock03Icon"
                    phosphor="ClockIcon"
                    remixicon="RiTimeLine"
                    className="text-muted-foreground"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="time-to">End Time</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="time-to"
                  type="time"
                  step="1"
                  defaultValue="12:30:00"
                  className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
                <InputGroupAddon>
                  <IconPlaceholder
                    lucide="Clock2Icon"
                    tabler="IconClockHour2"
                    hugeicons="Clock03Icon"
                    phosphor="ClockIcon"
                    remixicon="RiTimeLine"
                    className="text-muted-foreground"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
        </CardFooter>
      </Card>
    </Example>
  )
}

function CalendarWithPresets() {
  const { locale } = useLocale()
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(new Date().getFullYear(), 2, 12)
  )
  const [focusedDate, setFocusedDate] = React.useState<DateValue>(
    today(getLocalTimeZone())
  )

  return (
    <Example title="With Presets">
      <Card className="mx-auto w-fit max-w-[300px]" size="sm">
        <CardContent>
          <Calendar
            value={date}
            onChange={setDate}
            focusedValue={focusedDate}
            onFocusChange={setFocusedDate}
            className="p-0 [--cell-size:--spacing(9.5)]"
          />
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t">
          {[
            { label: "Today", days: 0 },
            { label: "Tomorrow", days: 1 },
            { label: "In 3 days", days: 3 },
            { label: "In a week", days: 7 },
            { label: "In 2 weeks", days: 14 },
          ].map((preset) => {
            const newDate = today(getLocalTimeZone()).add({ days: preset.days })
            return (
              <Button
                key={preset.days}
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setDate(newDate)
                  setFocusedDate(newDate)
                }}
              >
                {preset.label}
              </Button>
            )
          })}
        </CardFooter>
      </Card>
    </Example>
  )
}

function CalendarCustomCells() {
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 12, 8),
    end: new CalendarDate(new Date().getFullYear(), 12, 8).add({ days: 10 }),
  })
  const { locale } = useLocale()

  return (
    <Example title="Custom Cells (pricing)">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <RangeCalendar
            value={range}
            onChange={setRange}
            className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          >
            <RangeCalendar.Header>
              <RangeCalendar.NavButton slot="previous" />
              <RangeCalendar.Heading />
              <RangeCalendar.NavButton slot="next" />
            </RangeCalendar.Header>
            <RangeCalendar.Grid>
              <RangeCalendar.GridHeader>
                {(day) => (
                  <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>
                )}
              </RangeCalendar.GridHeader>
              <RangeCalendar.GridBody>
                {(d) => {
                  const isWeekendDay = isWeekend(d, locale)
                  return (
                    <RangeCalendar.Cell date={d}>
                      {({ formattedDate, isOutsideMonth }) => (
                        <>
                          {formattedDate}
                          {!isOutsideMonth && (
                            <span className="text-[9px] opacity-70">
                              {isWeekendDay ? "$120" : "$100"}
                            </span>
                          )}
                        </>
                      )}
                    </RangeCalendar.Cell>
                  )
                }}
              </RangeCalendar.GridBody>
            </RangeCalendar.Grid>
          </RangeCalendar>
        </CardContent>
      </Card>
    </Example>
  )
}

function DatePickerSimple() {
  const [date, setDate] = React.useState<DateValue | null>(null)

  const label = date
    ? format(date.toDate(getLocalTimeZone()), "PPP")
    : "Pick a date"

  return (
    <Example title="Date Picker Simple">
      <Field className="mx-auto w-72">
        <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="date-picker-simple"
                className="justify-start px-2.5 font-normal"
              />
            }
          >
            <IconPlaceholder
              lucide="CalendarIcon"
              tabler="IconCalendar"
              hugeicons="CalendarIcon"
              phosphor="CalendarBlankIcon"
              remixicon="RiCalendarLine"
              data-icon="inline-start"
            />
            <span>{label}</span>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar value={date} onChange={setDate} />
          </PopoverContent>
        </Popover>
      </Field>
    </Example>
  )
}

function DatePickerWithYearPicker() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const [open, setOpen] = React.useState(false)

  const label = date
    ? format(date.toDate(getLocalTimeZone()), "PPP")
    : "Pick a date"

  return (
    <Example title="Date Picker with Year Picker">
      <Field className="mx-auto w-72">
        <FieldLabel htmlFor="date-picker-year">Date</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="date-picker-year"
                className="justify-start px-2.5 font-normal"
              />
            }
          >
            <span>{label}</span>
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDownIcon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              data-icon="inline-start"
              className="ml-auto"
            />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              value={date}
              onChange={(v) => {
                setDate(v)
                setOpen(false)
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
    </Example>
  )
}

function DatePickerWithRange() {
  const [range, setRange] = React.useState<RangeValue<DateValue> | null>({
    start: new CalendarDate(new Date().getFullYear(), 1, 20),
    end: new CalendarDate(new Date().getFullYear(), 1, 20).add({ days: 20 }),
  })

  const label =
    range
      ? range.start && range.end
        ? `${format(range.start.toDate(getLocalTimeZone()), "LLL dd, y")} – ${format(range.end.toDate(getLocalTimeZone()), "LLL dd, y")}`
        : format(range.start.toDate(getLocalTimeZone()), "LLL dd, y")
      : "Pick a date"

  return (
    <Example title="Date Picker Range">
      <Field className="mx-auto w-72">
        <FieldLabel htmlFor="date-picker-range">Date Picker Range</FieldLabel>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="date-picker-range"
                className="justify-start px-2.5 font-normal"
              />
            }
          >
            <IconPlaceholder
              lucide="CalendarIcon"
              tabler="IconCalendar"
              hugeicons="CalendarIcon"
              phosphor="CalendarBlankIcon"
              remixicon="RiCalendarLine"
              data-icon="inline-start"
            />
            <span>{label}</span>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <RangeCalendar
              value={range}
              onChange={setRange}
              visibleDuration={{ months: 2 }}
            />
          </PopoverContent>
        </Popover>
      </Field>
    </Example>
  )
}

