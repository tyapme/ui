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
        success: <CircleCheckIcon className="size-4 text-emerald-500" />,
        info: <InfoIcon className="size-4 text-blue-500" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-500" />,
        error: <OctagonXIcon className="size-4 text-red-500" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      closeButton
      toastOptions={{
        classNames: {
          toast: "cn-toast",
          title: "text-sm font-medium",
          description: "text-sm text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground text-xs font-medium rounded-4xl px-3 py-1.5",
          cancelButton:
            "bg-muted text-muted-foreground text-xs font-medium rounded-4xl px-3 py-1.5",
          closeButton:
            "cn-toast-close absolute top-1.5 left-1.5 border border-border/30 bg-popover/80 text-muted-foreground hover:text-foreground rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 [&_svg]:size-3",
        },
      }}
      {...props}
    />
  )
}

export { toast, Toaster }
