import * as React from "react"

import { ScrollMask } from "@/styles/base/ui/scroll-mask"

const rows = Array.from({ length: 24 })
const cols = Array.from({ length: 12 })

export function ScrollMaskBothDemo() {
  return (
    <ScrollMask
      orientation="both"
      size="2.5rem"
      className="size-72 rounded-md border"
    >
      <div className="w-max p-4">
        {rows.map((_, r) => (
          <div key={r} className="flex gap-2">
            {cols.map((_, c) => (
              <div
                key={c}
                className="my-1 flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground"
              >
                {r}-{c}
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollMask>
  )
}
