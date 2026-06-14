"use client"

import { useState } from "react"
import { AtSignIcon, HashIcon, LinkIcon } from "lucide-react"

import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/styles/base/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "email",
    label: "Email",
    type: "text",
    icon: <AtSignIcon className="size-4" />,
    placeholder: "name@example.com",
    pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
    validation: (value) => ({
      valid: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(value)),
      message: "Enter a valid email address",
    }),
  },
  {
    key: "website",
    label: "Website",
    type: "text",
    icon: <LinkIcon className="size-4" />,
    placeholder: "https://example.com",
    validation: (value) => ({
      valid: /^https?:\/\/.+\..+/.test(String(value)),
      message: "Must start with http:// or https://",
    }),
  },
  {
    key: "ticket",
    label: "Ticket ID",
    type: "text",
    icon: <HashIcon className="size-4" />,
    placeholder: "ABC-123",
    validation: (value) => ({
      valid: /^[A-Z]{2,4}-\d+$/.test(String(value)),
      message: "Format must be like ABC-123",
    }),
  },
]

export default function FiltersValidation() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("email", "contains", ["@"]),
  ])

  return <Filters filters={filters} fields={fields} onChange={setFilters} />
}
