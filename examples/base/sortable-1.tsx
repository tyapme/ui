"use client"

import { useState } from "react"
import { GripVerticalIcon, ImageIcon, FileTextIcon, VideoIcon, MusicIcon } from "lucide-react"

import { Badge } from "@/styles/base/ui/badge"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/styles/base/ui/sortable"

interface Item {
  id: string
  title: string
  description: string
  type: "image" | "document" | "audio" | "video"
  size: string
}

const defaultItems: Item[] = [
  {
    id: "1",
    title: "Product Demo",
    description: "Main product image",
    type: "image",
    size: "2.4 MB",
  },
  {
    id: "2",
    title: "Product Specification",
    description: "Technical details document",
    type: "document",
    size: "1.2 MB",
  },
  {
    id: "3",
    title: "Product Demo Video",
    description: "How to use the product",
    type: "video",
    size: "15.7 MB",
  },
  {
    id: "4",
    title: "Product Audio Guide",
    description: "Audio instructions",
    type: "audio",
    size: "8.3 MB",
  },
  {
    id: "5",
    title: "Product Gallery",
    description: "Additional product view",
    type: "image",
    size: "3.1 MB",
  },
]

const getTypeIcon = (type: Item["type"]) => {
  switch (type) {
    case "image":
      return <ImageIcon className="h-4 w-4" />
    case "document":
      return <FileTextIcon className="h-4 w-4" />
    case "audio":
      return <MusicIcon className="h-4 w-4" />
    case "video":
      return <VideoIcon className="h-4 w-4" />
  }
}

const getTypeVariant = (type: Item["type"]) => {
  switch (type) {
    case "image":
      return "default"
    case "document":
      return "secondary"
    case "audio":
      return "destructive"
    case "video":
      return "outline"
  }
}

export function Sortable1() {
  const [items, setItems] = useState<Item[]>(defaultItems)

  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-6">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        strategy="vertical"
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div className="bg-background border-border hover:bg-accent/50 flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors">
              <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                <GripVerticalIcon className="h-4 w-4" />
              </SortableItemHandle>

              <div className="text-muted-foreground flex items-center gap-2">
                {getTypeIcon(item.type)}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium">{item.title}</h4>
                <p className="text-muted-foreground truncate text-xs">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={getTypeVariant(item.type)}>{item.type}</Badge>
                <span className="text-muted-foreground text-xs">
                  {item.size}
                </span>
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
