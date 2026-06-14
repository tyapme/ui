"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"

import { Badge } from "@/styles/base/ui/badge"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/styles/base/ui/kanban"

interface Task {
  id: string
  title: string
  priority: "low" | "medium" | "high"
}

const PRIORITY_VARIANT = {
  low: "secondary",
  medium: "outline",
  high: "destructive",
} as const

const COLUMN_TITLES: Record<string, string> = {
  backlog: "Backlog",
  in_progress: "In Progress",
  done: "Done",
}

const INITIAL: Record<string, Task[]> = {
  backlog: [
    { id: "1", title: "Audit color tokens", priority: "medium" },
    { id: "2", title: "Draft onboarding copy", priority: "low" },
    { id: "3", title: "Spec the empty states", priority: "high" },
  ],
  in_progress: [
    { id: "4", title: "Build the kanban board", priority: "high" },
    { id: "5", title: "Wire up drag sensors", priority: "medium" },
  ],
  done: [{ id: "6", title: "Set up the registry", priority: "low" }],
}

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-card flex items-center gap-2 rounded-md border p-3 shadow-xs">
      <KanbanItemHandle className="text-muted-foreground hover:text-foreground">
        <GripVerticalIcon className="size-4" />
      </KanbanItemHandle>
      <span className="flex-1 text-sm font-medium">{task.title}</span>
      <Badge variant={PRIORITY_VARIANT[task.priority]} className="capitalize">
        {task.priority}
      </Badge>
    </div>
  )
}

export default function KanbanDemo() {
  const [columns, setColumns] = React.useState(INITIAL)

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
      className="w-full p-4"
    >
      <KanbanBoard>
        {Object.entries(columns).map(([columnId, tasks]) => (
          <KanbanColumn
            key={columnId}
            value={columnId}
            className="bg-muted/40 gap-3 rounded-lg border p-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                {COLUMN_TITLES[columnId]}
              </h3>
              <span className="text-muted-foreground text-xs tabular-nums">
                {tasks.length}
              </span>
            </div>
            <KanbanColumnContent value={columnId}>
              {tasks.map((task) => (
                <KanbanItem key={task.id} value={task.id}>
                  <TaskCard task={task} />
                </KanbanItem>
              ))}
            </KanbanColumnContent>
          </KanbanColumn>
        ))}
      </KanbanBoard>
      <KanbanOverlay>
        {({ value, variant }) => {
          if (variant === "column") return null
          const task = Object.values(columns)
            .flat()
            .find((t) => t.id === value)
          return task ? <TaskCard task={task} /> : null
        }}
      </KanbanOverlay>
    </Kanban>
  )
}
