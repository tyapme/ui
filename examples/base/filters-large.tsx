"use client"

import { useState } from "react"
import { CircleIcon, FlagIcon, TagIcon } from "lucide-react"

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
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused" },
      { value: "archived", label: "Archived" },
    ],
  },
  {
    key: "priority",
    label: "Priority",
    type: "select",
    icon: <FlagIcon className="size-4" />,
    options: [
      { value: "high", label: "High" },
      { value: "low", label: "Low" },
    ],
  },
  {
    key: "label",
    label: "Label",
    type: "multiselect",
    icon: <TagIcon className="size-4" />,
    options: [
      { value: "bug", label: "Bug" },
      { value: "feature", label: "Feature" },
    ],
  },
]

export default function FiltersLarge() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["active"]),
    createFilter("priority", "is", ["high"]),
  ])

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
      size="lg"
      radius="full"
    />
  )
}
