import * as React from "react"

export const DIALOG_OVERLAY_CLASSES = [
  "fixed inset-0 isolate z-50",
  "bg-white/5 backdrop-blur-md backdrop-saturate-125",
  "transition-opacity duration-200",
  "data-starting-style:opacity-0",
  "data-ending-style:opacity-0 data-ending-style:duration-100",
  "motion-reduce:transition-none",
].join(" ")

export const DIALOG_CONTENT_BASE_CLASSES = [
  "fixed bottom-0 inset-x-0 z-50 w-full outline-none",
  "max-sm:bottom-2 max-sm:inset-x-2 max-sm:w-auto",
  "sm:inset-0 sm:m-auto sm:h-fit",

  "bg-popover text-popover-foreground ring-foreground/5 grid gap-6 text-sm ring-1",

  "p-6 max-sm:pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]",

  "rounded-4xl",

  "origin-bottom sm:origin-center",

  "transition-[opacity,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",

  "data-starting-style:translate-y-full data-starting-style:opacity-0",
  "data-ending-style:translate-y-full data-ending-style:opacity-0 data-ending-style:duration-150",

  "sm:data-starting-style:translate-y-0 sm:data-starting-style:scale-[0.96]",
  "sm:data-ending-style:translate-y-0 sm:data-ending-style:scale-[0.96]",
  "motion-reduce:transition-none",
].join(" ")

export function DialogDragHandle() {
  return (
    <div
      aria-hidden
      className="mx-auto mb-2 h-1 w-10 shrink-0 rounded-full bg-foreground/20 sm:hidden"
    />
  )
}
