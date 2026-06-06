"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { cn } from "@/registry/bases/base/lib/utils"

// React 19 hoists <style precedence href> to <head> and deduplicates across instances.
const SWITCH_MOTION_CSS = `
  .cn-switch {
    transition:
      background-color 200ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color     200ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow       220ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cn-switch .cn-switch-thumb {
    transition:
      transform 650ms cubic-bezier(0.34, 1.45, 0.64, 1),
      scale     180ms ease-out;
    will-change: transform;
  }
  .cn-switch:not([data-disabled]):active .cn-switch-thumb {
    scale: 1.25 0.875;
    transition-property: transform, scale;
    transition-duration: 650ms, 80ms;
    transition-timing-function: cubic-bezier(0.34, 1.45, 0.64, 1), ease-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .cn-switch { transition: none !important; }
    .cn-switch .cn-switch-thumb { transition: none !important; }
  }
`

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  const ref = React.useRef<HTMLButtonElement>(null)
  useShakeOnInvalid(ref)
  return (
    <>
      <style precedence="component" href="cn-switch-motion">{SWITCH_MOTION_CSS}</style>
      <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        data-size={size}
        className={cn(
          "cn-switch t-input peer group/switch relative inline-flex items-center outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="cn-switch-thumb pointer-events-none block ring-0"
        />
      </SwitchPrimitive.Root>
    </>
  )
}

export { Switch }
