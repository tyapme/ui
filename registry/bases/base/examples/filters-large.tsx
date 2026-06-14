"use client"

import { useState } from "react"

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/registry/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "Status",
    type: "multiselect",
    options: [
      { value: "open", label: "Open" },
      { value: "closed", label: "Closed" },
      { value: "in_review", label: "In Review" },
    ],
  },
  {
    key: "label",
    label: "Label",
    type: "multiselect",
    options: [
      { value: "bug", label: "Bug" },
      { value: "feature", label: "Feature" },
      { value: "docs", label: "Docs" },
    ],
  },
]

export default function FiltersLargeExample() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["open"]),
  ])

  return (
    <ExampleWrapper>
      <Example className="items-start p-4">
        <Filters size="lg" filters={filters} fields={fields} onChange={setFilters} />
      </Example>
    </ExampleWrapper>
  )
}
