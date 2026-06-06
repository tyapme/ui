import * as React from "react"

// Shared overlay classes used by both Dialog and AlertDialog
export const DIALOG_OVERLAY_CLASSES = [
  "fixed inset-0 isolate z-50",
  "bg-white/5 backdrop-blur-2xl backdrop-saturate-150",
  "transition-opacity duration-200",
  "data-starting-style:opacity-0",
  "data-ending-style:opacity-0 data-ending-style:duration-100",
  "motion-reduce:transition-none",
].join(" ")

// Shared content positioning + transition classes
// Mobile: full-width bottom sheet sliding up from below
// Desktop (sm+): centered modal scaling up from 0.96
export const DIALOG_CONTENT_BASE_CLASSES = [
  // Positioning — mobile: floating bottom sheet; desktop: centered via auto margins
  "fixed bottom-0 inset-x-0 z-50 w-full outline-none",
  "max-sm:bottom-2 max-sm:inset-x-2 max-sm:w-auto",
  "sm:inset-0 sm:m-auto sm:h-fit",
  // Appearance
  "bg-popover text-popover-foreground ring-foreground/5 grid gap-6 text-sm ring-1",
  // Padding — safe area on mobile bottom
  "p-6 max-sm:pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]",
  // Border radius — all sides (floating on mobile, centered on desktop)
  "rounded-4xl",
  // Transition origin
  "origin-bottom sm:origin-center",
  // Enter / exit transitions
  "transition-[opacity,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  // Mobile: slide up from bottom + fade
  "data-starting-style:translate-y-full data-starting-style:opacity-0",
  "data-ending-style:translate-y-full data-ending-style:opacity-0 data-ending-style:duration-150",
  // Desktop: scale + fade (override translate-y to 0)
  "sm:data-starting-style:translate-y-0 sm:data-starting-style:scale-[0.96]",
  "sm:data-ending-style:translate-y-0 sm:data-ending-style:scale-[0.96]",
  "motion-reduce:transition-none",
].join(" ")

// Drag handle — shows only on mobile to indicate swipe-to-dismiss affordance
export function DialogDragHandle() {
  return (
    <div
      aria-hidden
      className="mx-auto mb-2 h-1 w-10 shrink-0 rounded-full bg-foreground/20 sm:hidden"
    />
  )
}
