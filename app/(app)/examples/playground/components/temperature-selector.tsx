"use client"

import * as React from "react"
import type { Slider as SliderPrimitive } from "@base-ui/react/slider"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base/ui/hover-card"
import { Label } from "@/styles/base/ui/label"
import { Slider } from "@/styles/base/ui/slider"

interface TemperatureSelectorProps {
  defaultValue: React.ComponentProps<
    typeof SliderPrimitive.Root
  >["defaultValue"]
}

export function TemperatureSelector({
  defaultValue,
}: TemperatureSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard>
        <HoverCardTrigger render={<div className="grid gap-4" />}>
          <div className="flex items-center justify-between">
            <Label htmlFor="temperature">Temperature</Label>
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {value}
            </span>
          </div>
          <Slider
            id="temperature"
            max={1}
            defaultValue={value}
            step={0.1}
            onValueChange={setValue}
            aria-label="Temperature"
          />
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Controls randomness: lowering results in less random completions. As
          the temperature approaches zero, the model will become deterministic
          and repetitive.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
