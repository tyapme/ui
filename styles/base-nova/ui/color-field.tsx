"use client"

import * as React from "react"
import {
  ColorField as ColorFieldPrimitive,
  Input,
  type ColorFieldProps,
  type InputProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function ColorField({ className, ...props }: ColorFieldProps) {
  return (
    <ColorFieldPrimitive
      data-slot="color-field"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function ColorFieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="color-field-group"
      className={cn(
        "relative flex h-9 w-full items-center overflow-hidden rounded-md border border-input bg-transparent shadow-xs transition-[color,box-shadow] outline-none",
        "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        "has-[[aria-invalid]]:border-destructive has-[[aria-invalid]]:ring-destructive/20",
        "has-[[data-disabled]]:pointer-events-none has-[[data-disabled]]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ColorFieldInput({ className, ...props }: InputProps) {
  return (
    <Input
      data-slot="color-field-input"
      className={cn(
        "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:pointer-events-none md:text-sm",
        className
      )}
      {...props}
    />
  )
}

function ColorFieldPrefix({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="color-field-prefix"
      className={cn(
        "flex shrink-0 items-center pl-3 text-muted-foreground [&+[data-slot=color-field-input]]:pl-2",
        className
      )}
      {...props}
    />
  )
}

function ColorFieldSuffix({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="color-field-suffix"
      className={cn(
        "flex shrink-0 items-center pr-3 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ColorField,
  ColorFieldGroup,
  ColorFieldInput,
  ColorFieldPrefix,
  ColorFieldSuffix,
}
export type { ColorFieldProps }
