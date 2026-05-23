"use client"

import * as React from "react"
import { Popover as BasePopover } from "@base-ui/react/popover"
import {
  ColorArea as ColorAreaPrimitive,
  ColorPicker as ColorPickerPrimitive,
  ColorSlider as ColorSliderPrimitive,
  ColorSwatchPickerItem,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
  ColorSwatch as ColorSwatchPrimitive,
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
      <BasePopover.Root>
        <div
          data-slot="color-picker-inner"
          className={cn("inline-flex", className)}
        >
          {children}
        </div>
      </BasePopover.Root>
    </ColorPickerPrimitive>
  )
}

function ColorPickerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <BasePopover.Trigger
      render={
        <button
          type="button"
          data-slot="color-picker-trigger"
          className={cn(
            "inline-flex cursor-pointer items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        />
      }
    >
      {children}
    </BasePopover.Trigger>
  )
}

function ColorPickerContent({
  className,
  children,
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof BasePopover.Popup> &
  Pick<
    React.ComponentProps<typeof BasePopover.Positioner>,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <BasePopover.Popup
          data-slot="color-picker-content"
          className={cn(
            "flex w-64 origin-(--transform-origin) flex-col gap-3 rounded-md border bg-popover p-3 text-popover-foreground shadow-md outline-hidden",
            "data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95",
            "data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95",
            className
          )}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
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
        "block size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white shadow ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden active:cursor-grabbing rtl:translate-x-1/2",
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
        "absolute top-1/2 block size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white shadow ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden active:cursor-grabbing rtl:translate-x-1/2",
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
        "relative cursor-pointer rounded-sm ring-ring/50 transition-[color,box-shadow] outline-none",
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

function ColorSwatchPickerSwatchComp({
  className,
  ...props
}: ColorSwatchProps) {
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
