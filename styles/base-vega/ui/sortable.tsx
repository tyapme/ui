"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import {
  arrayMove,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/lib/utils"

type SortableLayout = "vertical" | "grid" | "nested"

interface SortableProps<T> extends React.ComponentProps<"div"> {
  value: T[]
  onValueChange: (value: T[]) => void
  getItemValue: (item: T) => UniqueIdentifier
  layout?: SortableLayout
}

function Sortable<T>({
  value,
  onValueChange,
  getItemValue,
  layout = "vertical",
  className,
  children,
  ...props
}: SortableProps<T>) {
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const itemIds = React.useMemo(
    () => value.map((item) => getItemValue(item)),
    [value, getItemValue]
  )

  const strategy =
    layout === "grid"
      ? rectSortingStrategy
      : layout === "nested"
        ? rectSortingStrategy
        : verticalListSortingStrategy

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = itemIds.indexOf(active.id)
      const newIndex = itemIds.indexOf(over.id)

      if (oldIndex !== -1 && newIndex !== -1) {
        onValueChange(arrayMove(value, oldIndex, newIndex))
      }
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={itemIds} strategy={strategy}>
        <div
          data-slot="sortable"
          data-layout={layout}
          className={cn(
            "flex",
            layout === "vertical" && "flex-col",
            layout === "grid" && "flex-wrap",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </SortableContext>
    </DndContext>
  )
}

interface SortableItemProps extends React.ComponentProps<"div"> {
  value: UniqueIdentifier
  disabled?: boolean
}

function SortableItem({
  value,
  disabled = false,
  className,
  children,
  ...props
}: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: value, disabled })

  return (
    <div
      ref={setNodeRef}
      data-slot="sortable-item"
      data-dragging={isDragging}
      className={cn("relative", isDragging && "z-10 opacity-80", className)}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
      {...props}
    >
      {children}
    </div>
  )
}

interface SortableItemHandleProps extends React.ComponentProps<"button"> {
  value?: UniqueIdentifier
}

function SortableItemHandle({
  className,
  children,
  ...props
}: SortableItemHandleProps) {
  return (
    <button
      type="button"
      data-slot="sortable-item-handle"
      className={cn(
        "inline-flex cursor-grab items-center justify-center active:cursor-grabbing",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Sortable, SortableItem, SortableItemHandle }
export { arrayMove } from "@dnd-kit/sortable"
