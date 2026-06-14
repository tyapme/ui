"use client"

import { useState } from "react"
import {
  CircleIcon,
  FlagIcon,
  LayersIcon,
  UserIcon,
} from "lucide-react"

import { createFilter, Filters, type Filter, type FilterFieldConfig } from "@/styles/base/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "Status",
    type: "multiselect",
    icon: <CircleIcon className="size-4" />,
    options: [
      { value: "backlog", label: "Backlog" },
      { value: "todo", label: "Todo" },
      { value: "in_progress", label: "In Progress" },
      { value: "done", label: "Done" },
      { value: "cancelled", label: "Cancelled" },
    ],
  },
  {
    key: "priority",
    label: "Priority",
    type: "multiselect",
    icon: <FlagIcon className="size-4" />,
    options: [
      { value: "urgent", label: "Urgent" },
      { value: "high", label: "High" },
      { value: "medium", label: "Medium" },
      { value: "low", label: "Low" },
      { value: "none", label: "No priority" },
    ],
  },
  {
    key: "assignee",
    label: "Assignee",
    type: "select",
    icon: <UserIcon className="size-4" />,
    options: [
      { value: "alice", label: "Alice" },
      { value: "bob", label: "Bob" },
      { value: "charlie", label: "Charlie" },
    ],
  },
  {
    key: "project",
    label: "Project",
    type: "multiselect",
    icon: <LayersIcon className="size-4" />,
    options: [
      { value: "design", label: "Design System" },
      { value: "backend", label: "Backend API" },
      { value: "mobile", label: "Mobile App" },
    ],
  },
  {
    key: "title",
    label: "Title",
    type: "text",
    placeholder: "Search title...",
  },
]

export default function FiltersDemo() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["in_progress", "todo"]),
    createFilter("priority", "is_any_of", ["high", "urgent"]),
  ])

  return (
    <div className="flex flex-col gap-4 p-4">
      <Filters filters={filters} fields={fields} onChange={setFilters} />
      {filters.length > 0 && (
        <pre className="bg-muted rounded-md p-3 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      )}
    </div>
  )
}
