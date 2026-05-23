import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">ホバーしてみて</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>ライブラリに追加</p>
      </TooltipContent>
    </Tooltip>
  )
}
