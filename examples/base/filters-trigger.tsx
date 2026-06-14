"use client"

import { useState } from "react"
import { CircleIcon, FlagIcon, SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/styles/base/ui/button"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/styles/base/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "Status",
    type: "multiselect",
    icon: <CircleIcon className="size-4" />,
    options: [
      { value: "open", label: "Open" },
      { value: "closed", label: "Closed" },
      { value: "merged", label: "Merged" },
    ],
  },
  {
    key: "priority",
    label: "Priority",
    type: "select",
    icon: <FlagIcon className="size-4" />,
    options: [
      { value: "high", label: "High" },
      { value: "medium", label: "Medium" },
      { value: "low", label: "Low" },
    ],
  },
]

export default function FiltersTrigger() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["open"]),
  ])

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
      radius="full"
      trigger={
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon data-icon="inline-start" />
          Add condition
        </Button>
      }
    />
  )
}
