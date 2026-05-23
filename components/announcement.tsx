import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/styles/base/ui/badge"

export function Announcement() {
  return (
    <Badge
      render={<Link href="/docs/components" />}
      variant="secondary"
      className="bg-muted"
    >
      TYAP.ME UI <ArrowRightIcon />
    </Badge>
  )
}
