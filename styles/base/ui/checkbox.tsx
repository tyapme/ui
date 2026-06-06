"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"

// React 19 hoists <style precedence href> to <head> and deduplicates across instances.
const CHECKBOX_ANIMATION_CSS = `
  [data-slot="checkbox"] {
    transition:
      border-color     220ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 220ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow       240ms cubic-bezier(0.22, 1, 0.36, 1),
      transform        130ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  [data-slot="checkbox"]:not(:disabled):not([data-disabled]):active {
    transform: scale(0.89);
    transition-duration: 70ms;
  }
  [data-slot="checkbox-indicator"] {
    animation: checkbox-pop-in 180ms ease-out both;
  }
  @keyframes checkbox-pop-in {
    from { opacity: 0; scale: 0.5; }
    to   { opacity: 1; scale: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-slot="checkbox"] { transition: none !important; }
    [data-slot="checkbox-indicator"] { animation: none !important; }
  }
`

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  const ref = React.useRef<HTMLButtonElement>(null)
  useShakeOnInvalid(ref)
  return (
    <>
      <style precedence="component" href="checkbox-transitions">{CHECKBOX_ANIMATION_CSS}</style>
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(
          "t-input peer relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[6px] border border-input outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current [&>svg]:size-3.5"
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  )
}

export { Checkbox }
