"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/styles/base-nova/ui/number-field"

export function NumberField3() {
  const [value, setValue] = useState<number | null>(1)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <NumberField
        value={value}
        onValueChange={setValue}
        min={1}
        max={99}
      >
        <NumberFieldScrubArea label="Quantity" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => setValue(Math.max(1, (value ?? 1) - 5))}
        >
          <MinusIcon className="size-3.5" />5
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => setValue(Math.min(99, (value ?? 1) + 5))}
        >
          <PlusIcon className="size-3.5" />5
        </Button>
      </div>
    </div>
  )
}
