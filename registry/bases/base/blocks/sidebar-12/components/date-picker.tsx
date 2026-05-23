import * as React from "react"
import { CalendarDate, type DateValue } from "@internationalized/date"

import { Calendar } from "@/registry/ui/calendar"
import {
  SidebarGroup,
  SidebarGroupContent,
} from "@/registry/ui/sidebar"

export function DatePicker() {
  const [date, setDate] = React.useState<DateValue | null>(
    new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, 12)
  )
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          value={date}
          onChange={setDate}
          className="bg-transparent [--cell-size:2.1rem]"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
