"use client"

import * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"

import { cn } from "@/lib/utils"

// ============================================================================
// Toaster — sonner の Provider（ルートに1つ配置）
// ============================================================================

// Type-differentiated icon badge: 28×28 rounded container with tinted bg
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
            <CircleCheckIcon className="size-3.5" />
          </IconBadge>
        ),
        info: (
          <IconBadge className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <InfoIcon className="size-3.5" />
          </IconBadge>
        ),
        warning: (
          <IconBadge className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <TriangleAlertIcon className="size-3.5" />
          </IconBadge>
        ),
        error: (
          <IconBadge className="bg-red-500/10 text-red-600 dark:text-red-400">
            <OctagonXIcon className="size-3.5" />
          </IconBadge>
        ),
        loading: (
          <IconBadge className="bg-foreground/5 text-foreground/50">
            <Loader2Icon className="size-3.5 animate-spin" />
          </IconBadge>
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          // Use 2xl radius to match the maia rounded-2xl aesthetic
          "--border-radius": "var(--radius-2xl)",
          // Nudge icon badge left slightly into the padding zone
          "--toast-icon-margin-start": "-2px",
          "--toast-icon-margin-end": "6px",
          // Float the close button outside the top-right corner (RTL-style positioning)
          // — avoids any overlap with the in-flow action button
          "--toast-close-button-start": "auto",
          "--toast-close-button-end": "0",
          "--toast-close-button-transform": "translate(35%, -35%)",
        } as React.CSSProperties
      }
      closeButton
      toastOptions={{
        classNames: {
          // Expand [data-icon] beyond sonner's 16px default to fit the badge
          toast: "rounded-2xl group/toast [&_[data-icon]]:!size-7",
          title: "!text-sm !font-semibold",
          description: "!text-[0.8rem] !leading-snug !text-muted-foreground",
          actionButton:
            "!bg-primary !text-primary-foreground !text-xs !font-medium !rounded-4xl !h-7 !px-3 !py-0",
          cancelButton:
            "!bg-muted !text-muted-foreground !text-xs !font-medium !rounded-4xl !h-7 !px-3 !py-0 hover:!bg-muted/80",
          // Ghost icon button — matches Dialog/Sheet close button (variant="ghost" size="icon-sm")
          // Positioned outside the toast corner via CSS vars so it never collides with action buttons
          closeButton:
            "!size-7 !rounded-4xl !bg-background !border !border-border/30 !shadow-none !text-muted-foreground hover:!bg-muted hover:!text-foreground opacity-0 group-hover/toast:opacity-100 !transition-all !duration-150 [&_svg]:!size-3.5 !p-0",
        },
      }}
      {...props}
    />
  )
}

export { toast, Toaster }
