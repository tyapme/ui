"use client"

import { parseColor } from "react-aria-components"

import {
  ColorArea,
  ColorPicker,
  ColorPickerContent,
  ColorPickerTrigger,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
} from "@/styles/base-nova/ui/color-picker"

const SWATCHES = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
]

export function ColorPickerSwatches() {
  return (
    <ColorPicker defaultValue={parseColor("hsl(220, 90%, 56%)")}>
      <ColorPickerTrigger>
        <ColorSwatch className="size-8 rounded-md border border-input shadow-xs" />
      </ColorPickerTrigger>
      <ColorPickerContent>
        <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness">
          <ColorArea.Thumb />
        </ColorArea>
        <ColorSlider channel="hue" colorSpace="hsb">
          <ColorSlider.Track>
            <ColorSlider.Thumb />
          </ColorSlider.Track>
        </ColorSlider>
        <ColorSwatchPicker>
          {SWATCHES.map((color) => (
            <ColorSwatchPicker.Item key={color} color={color}>
              <ColorSwatchPicker.Swatch />
            </ColorSwatchPicker.Item>
          ))}
        </ColorSwatchPicker>
      </ColorPickerContent>
    </ColorPicker>
  )
}
