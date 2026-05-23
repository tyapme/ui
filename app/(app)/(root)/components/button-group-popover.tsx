import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/styles/base/ui/button"
import { ButtonGroup } from "@/styles/base/ui/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base/ui/popover"
import { Separator } from "@/styles/base/ui/separator"
import { Textarea } from "@/styles/base/ui/textarea"

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="icon-sm" aria-label="ポップアップを開く" />}>
            <ChevronDownIcon />
          </PopoverTrigger>
        <PopoverContent align="end" className="gap-0 rounded-xl p-0 text-sm">
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
