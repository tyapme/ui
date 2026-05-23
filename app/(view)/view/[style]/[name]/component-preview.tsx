"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

import { Toaster } from "@/registry/ui/sonner"

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <div
        className={cn(
          "bg-background *:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {children}
      </div>
      <Toaster position="top-center" />
    </TooltipPrimitive.Provider>
  )
}
