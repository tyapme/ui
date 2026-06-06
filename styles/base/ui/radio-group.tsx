"use client"

import * as React from "react"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"

// React 19 hoists <style precedence href> to <head> and deduplicates across instances.
const RADIO_ANIMATION_CSS = `
  [data-slot="radio-group-item"] {
    transition:
      border-color     220ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 220ms cubic-bezier(0.22, 1, 0.36, 1),
      transform        130ms cubic-bezier(0.22, 1, 0.36, 1);
    cursor: pointer;
  }
  [data-slot="radio-group-item"]:not(:disabled):not([data-disabled]):active {
    transform: scale(0.89);
    transition-duration: 70ms;
  }

  /* Subtle inner dot when unchecked — gives the circle visual weight */
  [data-slot="radio-group-item"]::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 5px;
    height: 5px;
    border-radius: 9999px;
    background: var(--foreground);
    opacity: 0.18;
    transition: opacity 160ms ease, scale 160ms ease;
  }
  [data-slot="radio-group-item"][data-checked]::before {
    opacity: 0;
    scale: 0;
  }
  [data-slot="radio-group-item"][data-disabled]::before,
  [data-slot="radio-group-item"]:disabled::before {
    opacity: 0.08;
  }

  /* White dot pop-in — translate + scale combined so they never conflict */
  [data-slot="radio-group-indicator"] > span {
    animation: radio-dot-in 160ms ease-out both;
  }
  @keyframes radio-dot-in {
    from { opacity: 0; scale: 0.4; }
    to   { opacity: 1; scale: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-slot="radio-group-item"],
    [data-slot="radio-group-item"]::before { transition: none !important; }
    [data-slot="radio-group-indicator"] > span { animation: none !important; }
  }
`

type RadioGroupCtxValue = {
  groupValue: string | undefined
  clearValue: () => void
}

const RadioGroupCtx = React.createContext<RadioGroupCtxValue>({
  groupValue: undefined,
  clearValue: () => {},
})

function RadioGroup({
  value: valueProp,
  defaultValue,
  onValueChange,
  className,
  ...props
}: RadioGroupPrimitive.Props) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue)
  const groupValue = isControlled ? valueProp : internalValue

  const handleValueChange = (val: string) => {
    if (!isControlled) setInternalValue(val)
    onValueChange?.(val)
  }

  const clearValue = React.useCallback(() => {
    if (!isControlled) setInternalValue(undefined)
  }, [isControlled])

  return (
    <RadioGroupCtx.Provider value={{ groupValue, clearValue }}>
      <style precedence="component" href="radio-group-transitions">{RADIO_ANIMATION_CSS}</style>
      <RadioGroupPrimitive
        data-slot="radio-group"
        value={groupValue ?? ""}
        onValueChange={handleValueChange}
        className={cn("grid w-full gap-3", className)}
        {...props}
      />
    </RadioGroupCtx.Provider>
  )
}

function RadioGroupItem({
  value,
  onClick,
  className,
  ...props
}: RadioPrimitive.Root.Props) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const { groupValue, clearValue } = React.useContext(RadioGroupCtx)
  useShakeOnInvalid(ref)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value !== undefined && value === groupValue) {
      clearValue()
      e.preventDefault()
    }
    onClick?.(e as React.MouseEvent<HTMLButtonElement>)
  }

  return (
    <RadioPrimitive.Root
      ref={ref}
      value={value}
      onClick={handleClick}
      data-slot="radio-group-item"
      className={cn(
        "t-input group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input bg-input/20 outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className=""
      >
        <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
