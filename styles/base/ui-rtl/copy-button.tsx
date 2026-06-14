"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/styles/base/ui-rtl/button"

const copyButtonVariants = cva("", {
  variants: {
    size: {
      sm: "size-8",
      default: "size-9",
      lg: "size-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const iconSizeMap = {
  sm: "size-3.5",
  default: "size-4",
  lg: "size-[18px]",
} as const

type CopyButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "size" | "children" | "onClick"
> &
  VariantProps<typeof copyButtonVariants> & {
    value: string
    timeout?: number
    onCopy?: (value: string) => void
  }

function CopyButton({
  value,
  size = "default",
  timeout = 1800,
  onCopy,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const iconSize = iconSizeMap[size ?? "default"]

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      onCopy?.(value)
      setTimeout(() => setCopied(false), timeout)
    })
  }

  return (
    <Button
      data-slot="copy-button"
      data-copied={copied || undefined}
      variant={variant}
      size={size === "sm" ? "icon-sm" : size === "lg" ? "icon-lg" : "icon"}
      className={cn(
        "relative shrink-0 text-muted-foreground",
        "hover:text-foreground",
        "data-[copied]:text-foreground",
        "transition-colors duration-150",
        copyButtonVariants({ size }),
        className
      )}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      {...props}
    >
      <span
        className="t-icon-swap"
        data-state={copied ? "b" : "a"}
        aria-hidden="true"
      >
        <span className="t-icon" data-icon="a">
          <CopyIcon className={iconSize} />
        </span>
        <span className="t-icon" data-icon="b">
          <CheckIcon className={iconSize} />
        </span>
      </span>
    </Button>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export { CopyButton }
