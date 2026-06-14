"use client"

import * as React from "react"
import { TooltipProvider } from "@/styles/base/ui/tooltip"

import { cn } from "@/lib/utils"

import { Toaster } from "@/registry/ui/sonner"

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          "bg-background *:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {children}
      </div>
      <Toaster position="top-center" />
    </TooltipProvider>
  )
}
