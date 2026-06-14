import * as React from "react"

import { ScrollMask } from "@/styles/base/ui/scroll-mask"

const artworks = Array.from({ length: 16 }).map((_, i) => i + 1)

export function ScrollMaskHorizontalDemo() {
  return (
    <ScrollMask
      orientation="horizontal"
      size="4rem"
      className="w-full max-w-xl rounded-md border whitespace-nowrap"
    >
      <div className="flex w-max gap-4 p-4">
        {artworks.map((n) => (
          <div
            key={n}
            className="flex size-28 shrink-0 items-center justify-center rounded-xl bg-muted text-2xl font-medium text-muted-foreground"
          >
            {n}
          </div>
        ))}
      </div>
    </ScrollMask>
  )
}
