"use client"

import * as React from "react"
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DraggableAttributes,
  type DraggableSyntheticListeners,
  type DragOverEvent,
  type DragStartEvent,
  type DropAnimation,
  type Modifiers,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import {
  arrayMove,
  defaultAnimateLayoutChanges,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  type AnimateLayoutChanges,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

interface KanbanRootContextValue<T> {
  columns: Record<string, T[]>
  setColumns: (columns: Record<string, T[]>) => void
  getItemValue: (item: T) => string
  columnIds: string[]
  activeId: UniqueIdentifier | null
  resolveContainer: (id: UniqueIdentifier) => string | undefined
  isColumnId: (id: UniqueIdentifier) => boolean
  modifiers?: Modifiers
}

const KanbanRootContext = createContext<KanbanRootContextValue<unknown> | null>(
  null
)

function useKanbanRoot<T>() {
  const ctx = useContext(KanbanRootContext)
  if (!ctx) {
    throw new Error("Kanban components must be rendered within <Kanban>.")
  }
  return ctx as unknown as KanbanRootContextValue<T>
}

interface KanbanColumnContextValue {
  attributes?: DraggableAttributes
  listeners: DraggableSyntheticListeners | undefined
  dragging: boolean
  disabled?: boolean
}

const KanbanColumnContext = createContext<KanbanColumnContextValue>({
  listeners: undefined,
  dragging: false,
})

interface KanbanItemContextValue {
  listeners: DraggableSyntheticListeners | undefined
  dragging: boolean
  disabled?: boolean
}

const KanbanItemContext = createContext<KanbanItemContextValue>({
  listeners: undefined,
  dragging: false,
})

const KanbanOverlayFlag = createContext(false)

// ---------------------------------------------------------------------------
// Shared config
// ---------------------------------------------------------------------------

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true })

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: { active: { opacity: "0.4" } },
  }),
}

const subscribe = () => () => {}
function useIsClient() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export interface KanbanMoveEvent {
  event: DragEndEvent
  activeContainer: string
  activeIndex: number
  overContainer: string
  overIndex: number
}

export interface KanbanProps<T> extends Omit<
  useRender.ComponentProps<"div">,
  "children"
> {
  value: Record<string, T[]>
  onValueChange: (value: Record<string, T[]>) => void
  getItemValue: (item: T) => string
  children: ReactNode
  onMove?: (event: KanbanMoveEvent) => void
  modifiers?: Modifiers
}

function Kanban<T>({
  value,
  onValueChange,
  getItemValue,
  children,
  className,
  render,
  onMove,
  modifiers,
  ...props
}: KanbanProps<T>) {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  // Memoization is left to the React Compiler. The drag handlers read the
  // helpers below, which would otherwise defeat manual useCallback deps.
  const columnIds = Object.keys(value)

  const isColumnId = (id: UniqueIdentifier) => columnIds.includes(id as string)

  const resolveContainer = (id: UniqueIdentifier) => {
    if (isColumnId(id)) return id as string
    return columnIds.find((key) =>
      value[key].some((item) => getItemValue(item) === id)
    )
  }

  const indexOfItem = (container: string, id: UniqueIdentifier) =>
    value[container].findIndex((item) => getItemValue(item) === id)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
  }

  // Live cross-column transfer while hovering. Skipped when a custom onMove is
  // provided, so the consumer fully controls placement on drop instead.
  const handleDragOver = (event: DragOverEvent) => {
    if (onMove) return

    const { active, over } = event
    if (!over || isColumnId(active.id)) return

    const from = resolveContainer(active.id)
    const to = resolveContainer(over.id)
    if (!from || !to) return

    if (from === to) {
      const oldIndex = indexOfItem(from, active.id)
      const newIndex = indexOfItem(from, over.id)
      if (oldIndex === newIndex) return
      onValueChange({
        ...value,
        [from]: arrayMove(value[from], oldIndex, newIndex),
      })
      return
    }

    const fromItems = [...value[from]]
    const toItems = [...value[to]]
    const fromIndex = indexOfItem(from, active.id)
    const toIndex = isColumnId(over.id)
      ? toItems.length
      : indexOfItem(to, over.id)

    const [moved] = fromItems.splice(fromIndex, 1)
    toItems.splice(toIndex < 0 ? toItems.length : toIndex, 0, moved)

    onValueChange({ ...value, [from]: fromItems, [to]: toItems })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)
    if (!over) return

    // Delegate item placement to the consumer when onMove is supplied.
    if (onMove && !isColumnId(active.id)) {
      const from = resolveContainer(active.id)
      const to = resolveContainer(over.id)
      if (!from || !to) return
      onMove({
        event,
        activeContainer: from,
        activeIndex: indexOfItem(from, active.id),
        overContainer: to,
        overIndex: isColumnId(over.id)
          ? value[to].length
          : indexOfItem(to, over.id),
      })
      return
    }

    // Reorder columns relative to one another.
    if (isColumnId(active.id) && isColumnId(over.id)) {
      const oldIndex = columnIds.indexOf(active.id as string)
      const newIndex = columnIds.indexOf(over.id as string)
      if (oldIndex === newIndex) return
      const reordered = arrayMove(columnIds, oldIndex, newIndex)
      onValueChange(
        reordered.reduce<Record<string, T[]>>((acc, key) => {
          acc[key] = value[key]
          return acc
        }, {})
      )
      return
    }

    // Settle reordering inside a single column.
    const from = resolveContainer(active.id)
    const to = resolveContainer(over.id)
    if (from && to && from === to) {
      const oldIndex = indexOfItem(from, active.id)
      const newIndex = indexOfItem(from, over.id)
      if (oldIndex !== newIndex) {
        onValueChange({
          ...value,
          [from]: arrayMove(value[from], oldIndex, newIndex),
        })
      }
    }
  }

  const contextValue: KanbanRootContextValue<T> = {
    columns: value,
    setColumns: onValueChange,
    getItemValue,
    columnIds,
    activeId,
    resolveContainer,
    isColumnId,
    modifiers,
  }

  const rootProps = {
    "data-slot": "kanban",
    "data-dragging": activeId !== null,
    className: cn(activeId !== null && "cursor-grabbing!", className),
    children,
  }

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(rootProps, props),
  })

  return (
    <KanbanRootContext.Provider
      value={contextValue as unknown as KanbanRootContextValue<unknown>}
    >
      <DndContext
        sensors={sensors}
        modifiers={modifiers}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        {element}
      </DndContext>
    </KanbanRootContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// Board
// ---------------------------------------------------------------------------

export type KanbanBoardProps = useRender.ComponentProps<"div">

function KanbanBoard({ className, render, ...props }: KanbanBoardProps) {
  const { columnIds } = useKanbanRoot()

  const boardProps = {
    "data-slot": "kanban-board",
    className: cn("grid auto-rows-fr gap-4 sm:grid-cols-3", className),
  }

  return (
    <SortableContext items={columnIds} strategy={rectSortingStrategy}>
      {useRender({
        defaultTagName: "div",
        render,
        props: mergeProps<"div">(boardProps, props),
      })}
    </SortableContext>
  )
}

// ---------------------------------------------------------------------------
// Column
// ---------------------------------------------------------------------------

export interface KanbanColumnProps extends useRender.ComponentProps<"div"> {
  value: string
  disabled?: boolean
}

function KanbanColumn({
  value,
  className,
  render,
  disabled,
  ...props
}: KanbanColumnProps) {
  const isOverlay = useContext(KanbanOverlayFlag)
  const { activeId, isColumnId } = useKanbanRoot()

  const {
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    isDragging,
  } = useSortable({
    id: value,
    disabled: disabled || isOverlay,
    animateLayoutChanges,
  })

  const draggingColumn = activeId ? isColumnId(activeId) : false

  const overlayProps = {
    "data-slot": "kanban-column" as const,
    "data-value": value,
    "data-dragging": true,
    className: cn("group/kanban-column flex flex-col", className),
  }

  const liveProps = {
    "data-slot": "kanban-column" as const,
    "data-value": value,
    "data-dragging": isDragging,
    "data-disabled": disabled,
    ref: setNodeRef,
    style: {
      transition,
      transform: CSS.Transform.toString(transform),
    } as CSSProperties,
    className: cn(
      "group/kanban-column flex flex-col",
      isDragging && "z-50 opacity-50",
      disabled && "opacity-50",
      className
    ),
  }

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(isOverlay ? overlayProps : liveProps, props),
  })

  return (
    <KanbanColumnContext.Provider
      value={{
        attributes: isOverlay ? undefined : attributes,
        listeners: isOverlay ? undefined : listeners,
        dragging: isOverlay ? true : draggingColumn,
        disabled: isOverlay ? false : disabled,
      }}
    >
      {element}
    </KanbanColumnContext.Provider>
  )
}

export interface KanbanColumnHandleProps extends useRender.ComponentProps<"div"> {
  cursor?: boolean
}

function KanbanColumnHandle({
  className,
  render,
  cursor = true,
  ...props
}: KanbanColumnHandleProps) {
  const { attributes, listeners, dragging, disabled } =
    useContext(KanbanColumnContext)

  const handleProps = {
    "data-slot": "kanban-column-handle",
    "data-dragging": dragging,
    "data-disabled": disabled,
    ...attributes,
    ...listeners,
    className: cn(
      "opacity-0 transition-opacity group-hover/kanban-column:opacity-100",
      cursor && (dragging ? "cursor-grabbing!" : "cursor-grab!"),
      className
    ),
  }

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(handleProps, props),
  })
}

export interface KanbanColumnContentProps extends useRender.ComponentProps<"div"> {
  value: string
}

function KanbanColumnContent({
  value,
  className,
  render,
  ...props
}: KanbanColumnContentProps) {
  const { columns, getItemValue } = useKanbanRoot()

  const itemIds = useMemo(
    () => columns[value]?.map(getItemValue) ?? [],
    [columns, getItemValue, value]
  )

  const contentProps = {
    "data-slot": "kanban-column-content",
    className: cn("flex flex-col gap-2", className),
  }

  return (
    <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
      {useRender({
        defaultTagName: "div",
        render,
        props: mergeProps<"div">(contentProps, props),
      })}
    </SortableContext>
  )
}

// ---------------------------------------------------------------------------
// Item
// ---------------------------------------------------------------------------

export interface KanbanItemProps extends useRender.ComponentProps<"div"> {
  value: string
  disabled?: boolean
}

function KanbanItem({
  value,
  className,
  render,
  disabled,
  ...props
}: KanbanItemProps) {
  const isOverlay = useContext(KanbanOverlayFlag)
  const { activeId, isColumnId } = useKanbanRoot()

  const {
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    isDragging,
  } = useSortable({
    id: value,
    disabled: disabled || isOverlay,
    animateLayoutChanges,
  })

  const draggingItem = activeId ? !isColumnId(activeId) : false

  const overlayProps = {
    "data-slot": "kanban-item" as const,
    "data-value": value,
    "data-dragging": true,
    className: cn(className),
  }

  const liveProps = {
    "data-slot": "kanban-item" as const,
    "data-value": value,
    "data-dragging": isDragging,
    "data-disabled": disabled,
    ref: setNodeRef,
    style: {
      transition,
      transform: CSS.Transform.toString(transform),
    } as CSSProperties,
    ...attributes,
    className: cn(
      isDragging && "z-50 opacity-50",
      disabled && "opacity-50",
      className
    ),
  }

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(isOverlay ? overlayProps : liveProps, props),
  })

  return (
    <KanbanItemContext.Provider
      value={{
        listeners: isOverlay ? undefined : listeners,
        dragging: isOverlay ? true : draggingItem,
        disabled: isOverlay ? false : disabled,
      }}
    >
      {element}
    </KanbanItemContext.Provider>
  )
}

export interface KanbanItemHandleProps extends useRender.ComponentProps<"div"> {
  cursor?: boolean
}

function KanbanItemHandle({
  className,
  render,
  cursor = true,
  ...props
}: KanbanItemHandleProps) {
  const { listeners, dragging, disabled } = useContext(KanbanItemContext)

  const handleProps = {
    "data-slot": "kanban-item-handle",
    "data-dragging": dragging,
    "data-disabled": disabled,
    ...listeners,
    className: cn(
      cursor && (dragging ? "cursor-grabbing!" : "cursor-grab!"),
      className
    ),
  }

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(handleProps, props),
  })
}

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------

export interface KanbanOverlayProps extends Omit<
  React.ComponentProps<typeof DragOverlay>,
  "children"
> {
  children?:
    | ReactNode
    | ((params: {
        value: UniqueIdentifier
        variant: "column" | "item"
      }) => ReactNode)
}

function KanbanOverlay({ children, className, ...props }: KanbanOverlayProps) {
  const { activeId, isColumnId, modifiers } = useKanbanRoot()
  const mounted = useIsClient()

  const variant = activeId ? (isColumnId(activeId) ? "column" : "item") : "item"

  const content =
    activeId && children
      ? typeof children === "function"
        ? children({ value: activeId, variant })
        : children
      : null

  if (!mounted) return null

  return createPortal(
    <DragOverlay
      dropAnimation={dropAnimation}
      modifiers={modifiers}
      className={cn("z-50", activeId && "cursor-grabbing", className)}
      {...props}
    >
      <KanbanOverlayFlag.Provider value={true}>
        {content}
      </KanbanOverlayFlag.Provider>
    </DragOverlay>,
    document.body
  )
}

export {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
}
