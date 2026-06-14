"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const TABS_ANIMATION_CSS = `
.cn-tabs-content {
  transition:
    opacity  280ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}
@starting-style {
  .cn-tabs-content:not([hidden]) {
    opacity: 0;
    transform: translateY(6px);
  }
  .cn-tabs-content[data-direction="forward"]:not([hidden]) {
    opacity: 0;
    transform: translateX(40px);
  }
  .cn-tabs-content[data-direction="backward"]:not([hidden]) {
    opacity: 0;
    transform: translateX(-40px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .cn-tabs-content { transition: none !important; }
}
`

type TabsCtxValue = {
  direction: "forward" | "backward" | null
  registerTab: (value: string) => () => void
}

type TabsValueChange = NonNullable<TabsPrimitive.Root.Props["onValueChange"]>
type TabsValue = Parameters<TabsValueChange>[0]
type TabsChangeDetails = Parameters<TabsValueChange>[1]

const TabsCtx = React.createContext<TabsCtxValue>({
  direction: null,
  registerTab: () => () => {},
})

function Tabs({
  className,
  orientation = "horizontal",
  onValueChange,
  defaultValue,
  value: valueProp,
  ...props
}: TabsPrimitive.Root.Props) {
  const tabOrderRef = React.useRef<string[]>([])
  const prevValueRef = React.useRef<string | null>(
    (defaultValue ?? valueProp ?? null) as string | null
  )
  const [direction, setDirection] = React.useState<
    "forward" | "backward" | null
  >(null)

  const registerTab = React.useCallback((value: string) => {
    tabOrderRef.current = [...tabOrderRef.current, value]
    return () => {
      tabOrderRef.current = tabOrderRef.current.filter((v) => v !== value)
    }
  }, [])

  const handleValueChange = React.useCallback(
    (newValue: TabsValue | null, eventDetails: TabsChangeDetails) => {
      if (newValue == null) return
      const prev = prevValueRef.current
      const nextValue = String(newValue)
      if (prev != null && prev !== nextValue) {
        const order = tabOrderRef.current
        const prevIdx = order.indexOf(prev)
        const nextIdx = order.indexOf(nextValue)
        if (prevIdx !== -1 && nextIdx !== -1) {
          setDirection(nextIdx > prevIdx ? "forward" : "backward")
        }
      }
      prevValueRef.current = nextValue

      onValueChange?.(newValue, eventDetails)
    },
    [onValueChange]
  )

  return (
    <TabsCtx.Provider value={{ direction, registerTab }}>
      <style precedence="component" href="cn-tabs-animation">
        {TABS_ANIMATION_CSS}
      </style>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        defaultValue={defaultValue}
        value={valueProp}
        onValueChange={
          handleValueChange as TabsPrimitive.Root.Props["onValueChange"]
        }
        className={cn(
          "group/tabs flex gap-3 data-horizontal:flex-col",
          className
        )}
        {...props}
      />
    </TabsCtx.Provider>
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-4xl p-[3px] group-data-horizontal/tabs:h-10 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-2 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, value, ...props }: TabsPrimitive.Tab.Props) {
  const { registerTab } = React.useContext(TabsCtx)

  React.useLayoutEffect(() => {
    if (value == null) return
    return registerTab(String(value))
  }, [value, registerTab])

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      value={value}
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-3xl px-3 py-1 text-sm font-medium whitespace-nowrap transition-all duration-150 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:px-3.5 group-data-vertical/tabs:py-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

        "text-foreground/40 hover:text-foreground/70 dark:text-foreground/35 dark:hover:text-foreground/65",

        "data-active:bg-foreground data-active:text-background data-active:hover:text-background",

        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:text-foreground/45 group-data-[variant=line]/tabs-list:hover:text-foreground group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:font-medium group-data-[variant=line]/tabs-list:data-active:text-foreground",

        "after:absolute after:origin-center after:scale-x-0 after:rounded-full after:bg-foreground after:opacity-0 after:transition-[opacity,transform] after:duration-200 group-data-horizontal/tabs:after:inset-x-1 group-data-horizontal/tabs:after:bottom-[-4px] group-data-horizontal/tabs:after:h-[3px] group-data-vertical/tabs:after:inset-y-1 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-[3px] group-data-[variant=line]/tabs-list:data-active:after:scale-x-100 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  const { direction } = React.useContext(TabsCtx)

  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      data-direction={direction ?? undefined}
      className={cn("&[hidden]:!hidden flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
