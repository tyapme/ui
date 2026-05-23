"use client"

import * as React from "react"
import QRCodeLib from "react-qr-code"

import { cn } from "@/lib/utils"

interface QRCodeProps extends React.ComponentProps<"div"> {
  value: string
  size?: number
  fgColor?: string
  bgColor?: string
  errorCorrectionLevel?: "L" | "M" | "Q" | "H"
}

function QRCode({
  value,
  size = 268,
  fgColor = "var(--foreground)",
  bgColor = "var(--background)",
  errorCorrectionLevel = "M",
  className,
  ...props
}: QRCodeProps) {
  return (
    <div
      data-slot="qr-code"
      className={cn("inline-flex", className)}
      {...props}
    >
      <QRCodeLib
        value={value}
        size={size}
        fgColor={fgColor}
        bgColor={bgColor}
        level={errorCorrectionLevel}
      />
    </div>
  )
}

export { QRCode, type QRCodeProps }
