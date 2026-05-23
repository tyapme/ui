import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="ポップオーバーを開く">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">エージェントタスク</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="タスクを自然言語で記述してください。"
              className="mb-4 resize-none"
            />
            <p className="font-medium">Copilotで新しいタスクを開始</p>
            <p className="text-muted-foreground">
              タスクを自然言語で記述してください。Copilotがバックグラウンドで作業し、レビュー用のプルリクエストを作成します。
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
