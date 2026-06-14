"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"

import { useIsMobile } from "@/registry/bases/base/hooks/use-mobile"
import { useShakeOnInvalid } from "@/hooks/use-shake-on-invalid"
import { cn } from "@/registry/bases/base/lib/utils"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

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
        "cn-native-select-wrapper t-input group/native-select relative w-fit has-[select:disabled]:opacity-50",
        triggerClassName
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="cn-native-select outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
        value={value as string | undefined}
        defaultValue={
          (defaultValue as string | undefined) ??
          (placeholder != null && !hasInitialValue ? "" : undefined)
        }
        onChange={
          onValueChange
            ? (event) => (onValueChange as (v: string) => void)(event.target.value)
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
      <IconPlaceholder
        lucide="ChevronDownIcon"
        tabler="IconSelector"
        hugeicons="UnfoldMoreIcon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        className="cn-native-select-icon pointer-events-none absolute select-none"
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
      className={cn("cn-select-group", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("cn-select-value", className)}
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
        "cn-select-trigger t-input flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <IconPlaceholder
            lucide="ChevronDownIcon"
            tabler="IconSelector"
            hugeicons="UnfoldMoreIcon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            className="cn-select-trigger-icon pointer-events-none"
          />
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
            "cn-select-content cn-select-content-logical cn-menu-target cn-menu-translucent relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none",
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
      className={cn("cn-select-label", className)}
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
        "cn-select-item relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="cn-select-item-text shrink-0 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={<span className="cn-select-item-indicator" />}
      >
        <IconPlaceholder
          lucide="CheckIcon"
          tabler="IconCheck"
          hugeicons="Tick02Icon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
          className="cn-select-item-indicator-icon pointer-events-none"
        />
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
      className={cn("cn-select-separator pointer-events-none", className)}
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
      className={cn("cn-select-scroll-up-button top-0 w-full", className)}
      {...props}
    >
      <IconPlaceholder
        lucide="ChevronUpIcon"
        tabler="IconChevronUp"
        hugeicons="ArrowUp01Icon"
        phosphor="CaretUpIcon"
        remixicon="RiArrowUpSLine"
      />
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
      className={cn("cn-select-scroll-down-button bottom-0 w-full", className)}
      {...props}
    >
      <IconPlaceholder
        lucide="ChevronDownIcon"
        tabler="IconChevronDown"
        hugeicons="ArrowDown01Icon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
      />
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
