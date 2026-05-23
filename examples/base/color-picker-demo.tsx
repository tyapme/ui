"use client"

import { parseColor } from "react-aria-components"

import {
  ColorArea,
  ColorPicker,
  ColorPickerContent,
  ColorPickerTrigger,
  ColorSlider,
  ColorSwatch,
} from "@/styles/base-nova/ui/color-picker"

export function ColorPickerDemo() {
  return (
    <ColorPicker defaultValue={parseColor("hsl(200, 100%, 50%)")}>
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
        <ColorSlider channel="alpha" colorSpace="hsb">
          <ColorSlider.Track>
            <ColorSlider.Thumb />
          </ColorSlider.Track>
        </ColorSlider>
      </ColorPickerContent>
    </ColorPicker>
  )
}
