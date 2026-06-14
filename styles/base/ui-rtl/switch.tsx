"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"

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
      <style precedence="component" href="cn-switch-motion">
        {SWITCH_MOTION_CSS}
      </style>
      <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        data-size={size}
        className={cn(
          "t-input peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="pointer-events-none block rounded-full bg-background ring-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:group-data-[size=default]/switch:data-checked:-translate-x-[calc(100%-2px)] rtl:group-data-[size=sm]/switch:data-checked:-translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 rtl:group-data-[size=default]/switch:data-unchecked:-translate-x-0 rtl:group-data-[size=sm]/switch:data-unchecked:-translate-x-0 dark:data-unchecked:bg-foreground"
        />
      </SwitchPrimitive.Root>
    </>
  )
}

export { Switch }
