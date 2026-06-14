"use client"

import { useState } from "react"
import { ListFilterIcon } from "lucide-react"

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/ui/button"
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
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
      { value: "pending", label: "Pending" },
    ],
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    options: [
      { value: "admin", label: "Admin" },
      { value: "member", label: "Member" },
      { value: "viewer", label: "Viewer" },
    ],
  },
]

export default function FiltersTriggerExample() {
  const [filters, setFilters] = useState<Filter[]>([])

  return (
    <ExampleWrapper>
      <Example className="items-start gap-4 p-4">
        <Filters
          filters={filters}
          fields={fields}
          onChange={setFilters}
          trigger={
            <Button variant="outline" size="sm">
              <ListFilterIcon />
              {filters.length > 0 ? `${filters.length} filter${filters.length > 1 ? "s" : ""}` : "Filters"}
            </Button>
          }
        />
      </Example>
    </ExampleWrapper>
  )
}
