"use client"

import {
  ColorField,
  ColorFieldGroup,
  ColorFieldInput,
} from "@/styles/base-nova/ui/color-field"
import { Label } from "@/styles/base-nova/ui/label"

export function ColorFieldDemo() {
  return (
    <div className="w-full max-w-64">
      <ColorField defaultValue="#3b82f6">
        <Label>カラー</Label>
        <ColorFieldGroup>
          <ColorFieldInput />
        </ColorFieldGroup>
      </ColorField>
    </div>
  )
}
