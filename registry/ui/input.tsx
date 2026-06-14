"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { cn } from "@/registry/bases/base/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const ref = React.useRef<HTMLInputElement>(null)
  useShakeOnInvalid(ref)
  return (
    <InputPrimitive
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-4xl px-4 py-1",

        "text-base md:text-sm",

        "border border-input bg-input/30 text-foreground placeholder:text-muted-foreground",

        "transition-[color,background-color,border-color,box-shadow] duration-150 ease-out outline-none",

        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",

        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
