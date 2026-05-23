"use client"

import {
  ColorField,
  ColorFieldGroup,
  ColorFieldInput,
  ColorFieldPrefix,
  ColorFieldSuffix,
} from "@/styles/base-nova/ui/color-field"
import { Label } from "@/styles/base-nova/ui/label"

export function ColorFieldChannel() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <ColorField defaultValue="#3b82f6" colorSpace="rgb" channel="red">
        <Label>Red</Label>
        <ColorFieldGroup>
          <ColorFieldInput />
        </ColorFieldGroup>
      </ColorField>
      <ColorField defaultValue="#3b82f6" colorSpace="rgb" channel="green">
        <Label>Green</Label>
        <ColorFieldGroup>
          <ColorFieldInput />
        </ColorFieldGroup>
      </ColorField>
      <ColorField defaultValue="#3b82f6" colorSpace="rgb" channel="blue">
        <Label>Blue</Label>
        <ColorFieldGroup>
          <ColorFieldInput />
        </ColorFieldGroup>
      </ColorField>
    </div>
  )
}
