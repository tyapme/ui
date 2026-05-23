"use client"

import { useState } from "react"
import { GripVerticalIcon } from "lucide-react"

import { Badge } from "@/styles/base/ui/badge"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/styles/base/ui/sortable"

import { cn } from "@/lib/utils"

interface GridItem {
  id: string
  title: string
  description: string
  type: "image" | "document" | "audio" | "video" | "featured"
  size: string
}

const defaultGridItems: GridItem[] = [
  {
    id: "1",
    title: "Hero Image",
    description: "Main banner image",
    type: "image",
    size: "2.4 MB",
  },
  {
    id: "2",
    title: "Product Specs",
    description: "Technical documentation",
    type: "document",
    size: "1.2 MB",
  },
  {
    id: "3",
    title: "Demo Video",
    description: "Product demonstration",
    type: "video",
    size: "15.7 MB",
  },
  {
    id: "4",
    title: "Audio Guide",
    description: "Voice instructions",
    type: "audio",
    size: "8.3 MB",
  },
  {
    id: "5",
    title: "Gallery Photo 1",
    description: "Product view 1",
    type: "image",
    size: "3.1 MB",
  },
  {
    id: "6",
    title: "Gallery Photo 2",
    description: "Product view 2",
    type: "image",
    size: "2.8 MB",
  },
  {
    id: "7",
    title: "User Manual",
    description: "Installation guide",
    type: "document",
    size: "4.2 MB",
  },
  {
    id: "8",
    title: "Background Music",
    description: "Ambient soundtrack",
    type: "audio",
    size: "12.1 MB",
  },
  {
    id: "9",
    title: "Feature Highlight",
    description: "Key product features",
    type: "featured",
    size: "N/A",
  },
]

const getTypeVariant = (type: GridItem["type"]) => {
  switch (type) {
    case "image":
      return "default"
    case "document":
      return "secondary"
    case "audio":
      return "destructive"
    case "video":
      return "outline"
    case "featured":
      return "secondary"
  }
}

const getItemSize = (type: GridItem["type"]) => {
  switch (type) {
    case "featured":
      return "col-span-2 row-span-2"
    case "image":
    case "video":
      return "col-span-1 row-span-1"
    case "document":
    case "audio":
      return "col-span-1 row-span-1"
    default:
      return "col-span-1 row-span-1"
  }
}

export function Sortable2() {
  const [items, setItems] = useState<GridItem[]>(defaultGridItems)

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 p-4">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        strategy="grid"
        className="grid auto-rows-fr grid-cols-3 gap-3"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className={cn(
                "group bg-background border-border hover:bg-accent/50 relative cursor-pointer rounded-md border p-3 transition-colors",
                getItemSize(item.type),
                "flex min-h-[100px] flex-col"
              )}
            >
              <SortableItemHandle className="text-muted-foreground hover:text-foreground absolute end-1.5 top-2.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <GripVerticalIcon className="h-3.5 w-3.5" />
              </SortableItemHandle>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium">{item.title}</h4>
                <p className="text-muted-foreground mt-0.5 truncate text-xs">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <Badge variant={getTypeVariant(item.type)}>
                  {item.type}
                </Badge>
                {item.type !== "featured" && (
                  <span className="text-muted-foreground text-xs">
                    {item.size}
                  </span>
                )}
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
