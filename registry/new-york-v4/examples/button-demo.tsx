import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">ボタン</Button>
      <Button variant="outline" size="icon" aria-label="送信">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
