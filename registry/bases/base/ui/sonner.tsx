"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { toast, Toaster as Sonner, type ToasterProps } from "sonner"

import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"
import { cn } from "@/registry/bases/base/lib/utils"

// ============================================================================
// Toaster — sonner の Provider（ルートに1つ配置）
// ============================================================================

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <IconPlaceholder
            lucide="CircleCheckIcon"
            tabler="IconCircleCheck"
            hugeicons="CheckmarkCircle02Icon"
            phosphor="CheckCircleIcon"
            remixicon="RiCheckboxCircleLine"
            className="size-4"
          />
        ),
        info: (
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="InformationCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
            className="size-4"
          />
        ),
        warning: (
          <IconPlaceholder
            lucide="TriangleAlertIcon"
            tabler="IconAlertTriangle"
            hugeicons="Alert02Icon"
            phosphor="WarningIcon"
            remixicon="RiErrorWarningLine"
            className="size-4"
          />
        ),
        error: (
          <IconPlaceholder
            lucide="OctagonXIcon"
            tabler="IconAlertOctagon"
            hugeicons="MultiplicationSignCircleIcon"
            phosphor="XCircleIcon"
            remixicon="RiCloseCircleLine"
            className="size-4"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="Loader2Icon"
            tabler="IconLoader"
            hugeicons="Loading03Icon"
            phosphor="SpinnerIcon"
            remixicon="RiLoaderLine"
            className="size-4 animate-spin"
          />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

// ============================================================================
// Toast compound components — カスタムレンダリング用
// ============================================================================

type ToastVariant = "default" | "success" | "info" | "warning" | "danger"

function Toast({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast"
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function ToastIndicator({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { variant?: ToastVariant }) {
  if (!children && variant === "default") return null

  return (
    <div
      data-slot="toast-indicator"
      className={cn("flex shrink-0 items-center", className)}
      {...props}
    >
      {children ?? (
        <>
          {variant === "success" && (
            <IconPlaceholder lucide="CircleCheckIcon" className="size-4" />
          )}
          {variant === "info" && (
            <IconPlaceholder lucide="InfoIcon" className="size-4" />
          )}
          {variant === "warning" && (
            <IconPlaceholder lucide="TriangleAlertIcon" className="size-4" />
          )}
          {variant === "danger" && (
            <IconPlaceholder lucide="OctagonXIcon" className="size-4" />
          )}
        </>
      )}
    </div>
  )
}

function ToastContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function ToastTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    >
      {children}
    </p>
  )
}

function ToastDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="toast-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

function ToastCloseButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="toast-close"
      type="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md p-1 text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      <IconPlaceholder lucide="XIcon" className="size-3.5" />
      <span className="sr-only">Close</span>
    </button>
  )
}

function ToastAction({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="toast-action"
      type="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-transparent px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export {
  toast,
  Toast,
  ToastAction,
  ToastCloseButton,
  ToastContent,
  ToastDescription,
  ToastIndicator,
  Toaster,
  ToastTitle,
}
export type { ToastVariant }
