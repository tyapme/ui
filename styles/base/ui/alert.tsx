import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  [
    "group/alert relative grid w-full gap-y-1.5 rounded-2xl border px-5 py-4 text-left text-sm",
    "has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-20",
    "has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3.5",
    "*:[svg]:row-span-2 *:[svg]:mt-0.5 *:[svg]:self-start *:[svg]:text-current",
    "*:[svg:not([class*='size-'])]:size-[18px]",
  ],
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: [
          "border-destructive/20 bg-destructive/5 dark:bg-destructive/10",
          "text-destructive",
          "*:data-[slot=alert-description]:text-destructive/80",
          "*:[svg]:text-current",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "leading-snug font-semibold group-has-[>svg]/alert:col-start-2",
        "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty",
        "group-has-[>svg]/alert:col-start-2",
        "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        "[&_p:not(:last-child)]:mb-4",
        "[&_li]:mt-0.5 [&_ul]:mt-1.5",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-4 right-4", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
