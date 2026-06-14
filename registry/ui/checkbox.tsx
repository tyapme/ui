"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon } from "lucide-react"

import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { cn } from "@/registry/bases/base/lib/utils"

const CHECKBOX_ANIMATION_CSS = `
  .cn-checkbox {
    transition:
      border-color     220ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 220ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow       240ms cubic-bezier(0.22, 1, 0.36, 1),
      transform        130ms cubic-bezier(0.22, 1, 0.36, 1);
    cursor: pointer;
  }
  .cn-checkbox:not(:disabled):not([data-disabled]):active {
    transform: scale(0.89);
    transition-duration: 70ms;
  }
  .cn-checkbox-indicator {
    animation: cn-checkbox-pop-in 180ms ease-out both;
  }
  @keyframes cn-checkbox-pop-in {
    from { opacity: 0; scale: 0.5; }
    to   { opacity: 1; scale: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    .cn-checkbox { transition: none !important; }
    .cn-checkbox-indicator { animation: none !important; }
  }
`

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  const ref = React.useRef<HTMLButtonElement>(null)
  useShakeOnInvalid(ref)
  return (
    <>
      <style precedence="component" href="cn-checkbox-transitions">
        {CHECKBOX_ANIMATION_CSS}
      </style>
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(
          "cn-checkbox t-input peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="cn-checkbox-indicator grid place-content-center text-current"
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  )
}

export { Checkbox }
