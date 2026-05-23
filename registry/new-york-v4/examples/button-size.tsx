import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          小
        </Button>
        <Button size="icon-sm" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">標準</Button>
        <Button size="icon" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          大
        </Button>
        <Button size="icon-lg" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
