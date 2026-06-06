"use client"

import * as React from "react"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { cn } from "@/registry/bases/base/lib/utils"

// React 19 hoists <style precedence href> to <head> and deduplicates across instances.
const RADIO_ANIMATION_CSS = `
  .cn-radio-group-item {
    transition:
      border-color     220ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 220ms cubic-bezier(0.22, 1, 0.36, 1),
      transform        130ms cubic-bezier(0.22, 1, 0.36, 1);
    cursor: pointer;
  }
  .cn-radio-group-item:not(:disabled):not([data-disabled]):active {
    transform: scale(0.89);
    transition-duration: 70ms;
  }

  .cn-radio-group-item::before {
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
  .cn-radio-group-item[data-checked]::before {
    opacity: 0;
    scale: 0;
  }
  .cn-radio-group-item[data-disabled]::before,
  .cn-radio-group-item:disabled::before {
    opacity: 0.08;
  }

  .cn-radio-group-indicator-icon {
    animation: cn-radio-dot-in 160ms ease-out both;
  }
  @keyframes cn-radio-dot-in {
    from { opacity: 0; scale: 0.4; }
    to   { opacity: 1; scale: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    .cn-radio-group-item,
    .cn-radio-group-item::before { transition: none !important; }
    .cn-radio-group-indicator-icon { animation: none !important; }
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
      <style precedence="component" href="cn-radio-group-transitions">{RADIO_ANIMATION_CSS}</style>
      <RadioGroupPrimitive
        data-slot="radio-group"
        value={groupValue ?? ""}
        onValueChange={handleValueChange}
        className={cn("cn-radio-group w-full", className)}
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
        "cn-radio-group-item t-input group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="cn-radio-group-indicator"
      >
        <span className="cn-radio-group-indicator-icon" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
