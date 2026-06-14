"use client"

import { useState } from "react"
import { MailIcon } from "lucide-react"

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
    key: "email",
    label: "Email",
    type: "text",
    icon: <MailIcon className="size-4" />,
    placeholder: "Enter email...",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    validation: (value: unknown) => {
      const str = String(value)
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
      return { valid, message: valid ? "" : "Invalid email format" }
    },
  },
  {
    key: "url",
    label: "URL",
    type: "text",
    placeholder: "Enter URL...",
    pattern: "^https?://.*",
    validation: (value: unknown) => {
      const str = String(value)
      const valid = /^https?:\/\//.test(str)
      return { valid, message: valid ? "" : "Must start with http:// or https://" }
    },
  },
]

export default function FiltersValidationExample() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("email", "contains", [""]),
  ])

  return (
    <ExampleWrapper>
      <Example className="items-start p-4">
        <Filters filters={filters} fields={fields} onChange={setFilters} />
      </Example>
    </ExampleWrapper>
  )
}
