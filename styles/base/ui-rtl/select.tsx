"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"

type SelectKind = "auto" | "native" | "custom"

function Select<Value = string, Multiple extends boolean | undefined = false>({
  kind = "auto",
  ...props
}: SelectPrimitive.Root.Props<Value, Multiple> & { kind?: SelectKind }) {
  const isMobile = useIsMobile()
  const mode = kind === "auto" ? (isMobile ? "native" : "custom") : kind

  if (mode === "native") {
    // Native <select>/<option> projection only supports string values.
    return <SelectNative {...(props as SelectPrimitive.Root.Props<string>)} />
  }

  return <SelectPrimitive.Root data-slot="select" {...props} />
}

// ----------------------------------------------------------------------------
// Native rendering — used when kind="native" (or kind="auto" on mobile).
// Re-uses the exact same JSX as the custom select: SelectTrigger / SelectValue /
// SelectContent / SelectGroup / SelectLabel / SelectItem children are
// introspected and projected onto a real <select> / <option> / <optgroup> tree.
// ----------------------------------------------------------------------------

function isElementOfType<P>(
  node: React.ReactNode,
  component: React.ComponentType<P>
): node is React.ReactElement<P> {
  return React.isValidElement(node) && node.type === component
}

function nativeOptionsFromNodes(nodes: React.ReactNode): React.ReactNode {
  return React.Children.map(nodes, (node) => {
    if (isElementOfType(node, SelectItem)) {
      const { value, children, disabled } = node.props
      return (
        <option value={value as string} disabled={disabled}>
          {children}
        </option>
      )
    }
    if (isElementOfType(node, SelectGroup)) {
      let label: React.ReactNode = undefined
      const options: React.ReactNode[] = []
      React.Children.forEach(node.props.children, (child) => {
        if (isElementOfType(child, SelectLabel)) {
          label = child.props.children
        } else {
          const projected = nativeOptionsFromNodes(child)
          React.Children.forEach(projected, (o) => options.push(o))
        }
      })
      return (
        <optgroup label={typeof label === "string" ? label : undefined}>
          {options}
        </optgroup>
      )
    }
    // SelectSeparator, SelectLabel outside a group, scroll buttons, etc. have no
    // native equivalent and are dropped.
    return null
  })
}

function SelectNative({
  children,
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  required,
  multiple,
}: SelectPrimitive.Root.Props<string>) {
  const ref = React.useRef<HTMLDivElement>(null)
  useShakeOnInvalid(ref)

  // Pull trigger styling/sizing/attributes and the placeholder/options out of
  // the children. Attributes the user put on <SelectTrigger> (id, aria-invalid,
  // aria-describedby, …) belong on the real focusable <select> in native mode.
  let triggerClassName: string | undefined
  let size: "sm" | "default" = "default"
  let triggerAttributes: Record<string, unknown> = {}
  let placeholder: React.ReactNode = undefined
  let options: React.ReactNode = null

  React.Children.forEach(children, (child) => {
    if (isElementOfType(child, SelectTrigger)) {
      const {
        className,
        size: triggerSize,
        children: triggerChildren,
        render: _render,
        ...rest
      } = child.props as SelectPrimitive.Trigger.Props & {
        size?: "sm" | "default"
      }
      triggerClassName = typeof className === "string" ? className : undefined
      if (triggerSize) size = triggerSize
      triggerAttributes = rest
      React.Children.forEach(triggerChildren, (c) => {
        if (isElementOfType(c, SelectValue)) {
          placeholder = c.props.placeholder
        }
      })
    } else if (isElementOfType(child, SelectContent)) {
      options = nativeOptionsFromNodes(child.props.children)
    }
  })

  const isControlled = value !== undefined
  const hasInitialValue = isControlled || defaultValue !== undefined

  return (
    <div
      ref={ref}
      className={cn(
        "t-input group/native-select relative w-fit has-[select:disabled]:opacity-50",
        triggerClassName
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="h-9 w-full min-w-0 appearance-none rounded-4xl border border-input bg-input/30 py-1 ps-3 pe-8 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-[size=sm]:h-8 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
        value={value as string | undefined}
        defaultValue={
          (defaultValue as string | undefined) ??
          (placeholder != null && !hasInitialValue ? "" : undefined)
        }
        onChange={
          onValueChange
            ? (event) =>
                (onValueChange as (v: string) => void)(event.target.value)
            : undefined
        }
        name={name}
        disabled={disabled}
        required={required}
        multiple={multiple}
        {...triggerAttributes}
      >
        {placeholder != null ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options}
      </select>
      <ChevronDownIcon
        className="pointer-events-none absolute end-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  )
}

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-start", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default"
}) {
  const ref = React.useRef<HTMLButtonElement>(null)
  useShakeOnInvalid(ref)
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "t-input flex w-fit items-center justify-between gap-1.5 rounded-4xl border border-input bg-input/30 px-3 py-2 text-sm whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "cn-menu-target cn-menu-translucent relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-popover text-popover-foreground shadow-2xl ring-1 ring-foreground/5 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-start-2 data-[side=inline-start]:slide-in-from-end-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-3 py-2.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-xl py-2 ps-3 pe-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute end-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "pointer-events-none -mx-1 my-1 h-px bg-border/50",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
