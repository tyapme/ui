"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"

import { cn } from "@/registry/bases/base/lib/utils"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

function IconBadge({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <div
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-xl",
        className
      )}
    >
      {children}
    </div>
  )
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <IconBadge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <IconPlaceholder
              lucide="CircleCheckIcon"
              tabler="IconCircleCheck"
              hugeicons="CheckmarkCircle02Icon"
              phosphor="CheckCircleIcon"
              remixicon="RiCheckboxCircleLine"
              className="size-3.5"
            />
          </IconBadge>
        ),
        info: (
          <IconBadge className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <IconPlaceholder
              lucide="InfoIcon"
              tabler="IconInfoCircle"
              hugeicons="InformationCircleIcon"
              phosphor="InfoIcon"
              remixicon="RiInformationLine"
              className="size-3.5"
            />
          </IconBadge>
        ),
        warning: (
          <IconBadge className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <IconPlaceholder
              lucide="TriangleAlertIcon"
              tabler="IconAlertTriangle"
              hugeicons="Alert02Icon"
              phosphor="WarningIcon"
              remixicon="RiErrorWarningLine"
              className="size-3.5"
            />
          </IconBadge>
        ),
        error: (
          <IconBadge className="bg-red-500/10 text-red-600 dark:text-red-400">
            <IconPlaceholder
              lucide="OctagonXIcon"
              tabler="IconAlertOctagon"
              hugeicons="MultiplicationSignCircleIcon"
              phosphor="XCircleIcon"
              remixicon="RiCloseCircleLine"
              className="size-3.5"
            />
          </IconBadge>
        ),
        loading: (
          <IconBadge className="bg-foreground/5 text-foreground/50">
            <IconPlaceholder
              lucide="Loader2Icon"
              tabler="IconLoader"
              hugeicons="Loading03Icon"
              phosphor="SpinnerIcon"
              remixicon="RiLoaderLine"
              className="size-3.5 animate-spin"
            />
          </IconBadge>
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",

          "--border-radius": "var(--radius-2xl)",

          "--toast-icon-margin-start": "-2px",
          "--toast-icon-margin-end": "6px",

          "--toast-close-button-start": "auto",
          "--toast-close-button-end": "0",
          "--toast-close-button-transform": "translate(35%, -35%)",
        } as React.CSSProperties
      }
      closeButton
      toastOptions={{
        classNames: {
          toast: "rounded-2xl group/toast [&_[data-icon]]:!size-7",
          title: "!text-sm !font-semibold",
          description: "!text-[0.8rem] !leading-snug !text-muted-foreground",
          actionButton:
            "!bg-primary !text-primary-foreground !text-xs !font-medium !rounded-4xl !h-7 !px-3 !py-0",
          cancelButton:
            "!bg-muted !text-muted-foreground !text-xs !font-medium !rounded-4xl !h-7 !px-3 !py-0 hover:!bg-muted/80",

          closeButton:
            "!size-7 !rounded-4xl !bg-background !border !border-border/30 !shadow-none !text-muted-foreground hover:!bg-muted hover:!text-foreground opacity-0 group-hover/toast:opacity-100 !transition-all !duration-150 [&_svg]:!size-3.5 !p-0",
        },
      }}
      {...props}
    />
  )
}

export { toast, Toaster }
