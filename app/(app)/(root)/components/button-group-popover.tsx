import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"
import { Separator } from "@/styles/base-nova/ui/separator"
import { Textarea } from "@/styles/base-nova/ui/textarea"

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="icon-sm" aria-label="Open Popover" />}>
            <ChevronDownIcon />
          </PopoverTrigger>
        <PopoverContent align="end" className="gap-0 rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">Agent Tasks</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="Describe your task in natural language."
              className="mb-4 resize-none"
            />
            <p className="font-medium">Start a new task with Copilot</p>
            <p className="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the
              background and open a pull request for your review.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
