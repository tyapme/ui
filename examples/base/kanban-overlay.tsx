"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"

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

interface CardData {
  id: string
  title: string
}

const COLUMN_TITLES: Record<string, string> = {
  todo: "To Do",
  doing: "Doing",
  shipped: "Shipped",
}

const INITIAL: Record<string, CardData[]> = {
  todo: [
    { id: "a", title: "Define the API surface" },
    { id: "b", title: "Sketch the column layout" },
  ],
  doing: [
    { id: "c", title: "Implement drag overlay" },
    { id: "d", title: "Polish the handles" },
  ],
  shipped: [{ id: "e", title: "Publish to the registry" }],
}

function Card({ title }: { title: string }) {
  return (
    <div className="bg-card flex items-center gap-2 rounded-md border p-3 text-sm font-medium shadow-xs">
      <KanbanItemHandle className="text-muted-foreground hover:text-foreground">
        <GripVerticalIcon className="size-4" />
      </KanbanItemHandle>
      {title}
    </div>
  )
}

function Column({
  columnId,
  cards,
  ringWhileDragging = false,
}: {
  columnId: string
  cards: CardData[]
  ringWhileDragging?: boolean
}) {
  return (
    <KanbanColumn
      value={columnId}
      className={
        "bg-muted/40 gap-3 rounded-lg border p-3" +
        (ringWhileDragging ? " ring-primary ring-2" : "")
      }
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{COLUMN_TITLES[columnId]}</h3>
        <KanbanColumnHandle className="text-muted-foreground hover:text-foreground">
          <GripVerticalIcon className="size-4" />
        </KanbanColumnHandle>
      </div>
      <KanbanColumnContent value={columnId}>
        {cards.map((card) => (
          <KanbanItem key={card.id} value={card.id}>
            <Card title={card.title} />
          </KanbanItem>
        ))}
      </KanbanColumnContent>
    </KanbanColumn>
  )
}

export default function KanbanOverlayExample() {
  const [columns, setColumns] = React.useState(INITIAL)

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
      className="w-full p-4"
    >
      <KanbanBoard>
        {Object.entries(columns).map(([columnId, cards]) => (
          <Column key={columnId} columnId={columnId} cards={cards} />
        ))}
      </KanbanBoard>
      <KanbanOverlay>
        {({ value, variant }) => {
          if (variant === "column") {
            return (
              <Column
                columnId={value as string}
                cards={columns[value as string] ?? []}
                ringWhileDragging
              />
            )
          }
          const card = Object.values(columns)
            .flat()
            .find((c) => c.id === value)
          return card ? <Card title={card.title} /> : null
        }}
      </KanbanOverlay>
    </Kanban>
  )
}
