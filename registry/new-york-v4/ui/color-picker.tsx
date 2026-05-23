"use client"

import * as React from "react"
import {
  ColorArea as ColorAreaPrimitive,
  ColorPicker as ColorPickerPrimitive,
  ColorSlider as ColorSliderPrimitive,
  ColorSwatch as ColorSwatchPrimitive,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
  ColorSwatchPickerItem,
  ColorThumb,
  SliderOutput,
  SliderTrack,
  type ColorAreaProps,
  type ColorPickerProps,
  type ColorSliderProps,
  type ColorSwatchPickerItemProps,
  type ColorSwatchPickerProps,
  type ColorSwatchProps,
  type ColorThumbProps,
  type SliderOutputProps,
  type SliderTrackProps,
} from "react-aria-components"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// ColorPicker
// ---------------------------------------------------------------------------

function ColorPicker({
  children,
  className,
  ...props
}: Omit<ColorPickerProps, "children"> & {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <ColorPickerPrimitive data-slot="color-picker" {...props}>
      <PopoverPrimitive.Root>
        <div
          data-slot="color-picker-inner"
          className={cn("inline-flex", className)}
        >
          {children}
        </div>
      </PopoverPrimitive.Root>
    </ColorPickerPrimitive>
  )
}

function ColorPickerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="color-picker-trigger"
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </PopoverPrimitive.Trigger>
  )
}

function ColorPickerContent({
  className,
  children,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="color-picker-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex w-64 flex-col gap-3 rounded-md border bg-popover p-3 text-popover-foreground shadow-md outline-hidden origin-(--radix-popover-content-transform-origin)",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
}

// ---------------------------------------------------------------------------
// ColorArea
// ---------------------------------------------------------------------------

function ColorArea({ className, children, ...props }: ColorAreaProps) {
  return (
    <ColorAreaPrimitive
      data-slot="color-area"
      className={cn(
        "relative h-48 w-full cursor-crosshair rounded-sm",
        "forced-colors:border forced-colors:border-[ButtonBorder]",
        className
      )}
      {...props}
    >
      {children}
    </ColorAreaPrimitive>
  )
}

function ColorAreaThumb({ className, ...props }: ColorThumbProps) {
  return (
    <ColorThumb
      data-slot="color-area-thumb"
      className={cn(
        "block size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white shadow ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden active:cursor-grabbing",
        className
      )}
      {...props}
    />
  )
}

ColorArea.Thumb = ColorAreaThumb

// ---------------------------------------------------------------------------
// ColorSlider
// ---------------------------------------------------------------------------

function ColorSlider({ className, children, ...props }: ColorSliderProps) {
  return (
    <ColorSliderPrimitive
      data-slot="color-slider"
      className={cn("flex w-full flex-col gap-1", className)}
      {...props}
    >
      {children}
    </ColorSliderPrimitive>
  )
}

function ColorSliderTrack({ className, children, ...props }: SliderTrackProps) {
  return (
    <SliderTrack
      data-slot="color-slider-track"
      className={cn(
        "relative h-3 w-full cursor-pointer rounded-full",
        "before:absolute before:inset-0 before:rounded-full before:[background:repeating-conic-gradient(#aaa_0%_25%,transparent_0%_50%)_0_0/12px_12px]",
        className
      )}
      {...props}
    >
      {children}
    </SliderTrack>
  )
}

function ColorSliderThumb({ className, ...props }: ColorThumbProps) {
  return (
    <ColorThumb
      data-slot="color-slider-thumb"
      className={cn(
        "absolute top-1/2 block size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white shadow ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden active:cursor-grabbing",
        className
      )}
      {...props}
    />
  )
}

function ColorSliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <SliderOutput
      data-slot="color-slider-output"
      className={cn("text-sm text-muted-foreground tabular-nums", className)}
      {...props}
    />
  )
}

ColorSlider.Track = ColorSliderTrack
ColorSlider.Thumb = ColorSliderThumb
ColorSlider.Output = ColorSliderOutput

// ---------------------------------------------------------------------------
// ColorSwatch
// ---------------------------------------------------------------------------

function ColorSwatch({ className, ...props }: ColorSwatchProps) {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch"
      className={cn(
        "size-6 rounded-sm border border-black/10 dark:border-white/10",
        "forced-colors:border forced-colors:border-[ButtonBorder]",
        className
      )}
      {...props}
    />
  )
}

// ---------------------------------------------------------------------------
// ColorSwatchPicker
// ---------------------------------------------------------------------------

function ColorSwatchPicker({
  className,
  children,
  ...props
}: ColorSwatchPickerProps) {
  return (
    <ColorSwatchPickerPrimitive
      data-slot="color-swatch-picker"
      className={cn("flex flex-wrap gap-1.5", className)}
      {...props}
    >
      {children}
    </ColorSwatchPickerPrimitive>
  )
}

function ColorSwatchPickerItemComp({
  className,
  children,
  ...props
}: ColorSwatchPickerItemProps) {
  return (
    <ColorSwatchPickerItem
      data-slot="color-swatch-picker-item"
      className={cn(
        "relative cursor-pointer rounded-sm outline-none ring-ring/50 transition-[color,box-shadow]",
        "data-[selected]:ring-2 data-[selected]:ring-ring data-[selected]:ring-offset-1",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </ColorSwatchPickerItem>
  )
}

function ColorSwatchPickerSwatchComp({ className, ...props }: ColorSwatchProps) {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch-picker-swatch"
      className={cn(
        "size-6 rounded-sm border border-black/10 dark:border-white/10",
        className
      )}
      {...props}
    />
  )
}

ColorSwatchPicker.Item = ColorSwatchPickerItemComp
ColorSwatchPicker.Swatch = ColorSwatchPickerSwatchComp

export {
  ColorPicker,
  ColorPickerTrigger,
  ColorPickerContent,
  ColorArea,
  ColorAreaThumb,
  ColorSlider,
  ColorSliderTrack,
  ColorSliderThumb,
  ColorSliderOutput,
  ColorSwatch,
  ColorSwatchPicker,
}
export type {
  ColorPickerProps,
  ColorAreaProps,
  ColorSliderProps,
  ColorSwatchProps,
  ColorSwatchPickerProps,
  ColorSwatchPickerItemProps,
}
