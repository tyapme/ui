"use client"

import * as React from "react"
import { IconInfoCircle, IconStar } from "@tabler/icons-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import { Label } from "@/styles/base-nova/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export function InputGroupButtonExample() {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <Label htmlFor="input-secure-19" className="sr-only">
        安全な入力欄
      </Label>
      <InputGroup className="[--radius:9999px]">
        <InputGroupInput id="input-secure-19" className="pl-0.5!" />
        <Popover>
          <InputGroupAddon>
            <PopoverTrigger
              render={
                <InputGroupButton
                  variant="secondary"
                  size="icon-xs"
                  aria-label="情報"
                />
              }
            >
              <IconInfoCircle />
            </PopoverTrigger>
          </InputGroupAddon>
          <PopoverContent
            align="start"
            alignOffset={10}
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">正規の接続ではありません。</p>
            <p>このサイトに機密情報は入力しないでください。</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1! text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
            aria-label="お気に入り"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
