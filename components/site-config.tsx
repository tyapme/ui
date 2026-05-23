"use client"

import * as React from "react"
import { GalleryHorizontalIcon } from "lucide-react"

import { trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { useLayout } from "@/hooks/use-layout"
import { Button } from "@/styles/base/ui/button"

export function SiteConfig({ className }: React.ComponentProps<typeof Button>) {
  const { layout, setLayout } = useLayout()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newLayout = layout === "fixed" ? "full" : "fixed"
        setLayout(newLayout)
        trackEvent({
          name: "set_layout",
          properties: { layout: newLayout },
        })
      }}
      className={cn("size-8", className)}
      title="レイアウト切り替え"
    >
      <span className="sr-only">レイアウト切り替え</span>
      <GalleryHorizontalIcon />
    </Button>
  )
}
