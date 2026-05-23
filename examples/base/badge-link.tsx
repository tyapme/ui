import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/styles/base/ui/badge"

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" title="Open Link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
