import * as React from "react"

import { ScrollMask } from "@/styles/base/ui/scroll-mask"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollMaskDemo() {
  return (
    <ScrollMask className="h-72 w-48 rounded-md border" size="3rem">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="py-2 text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollMask>
  )
}
