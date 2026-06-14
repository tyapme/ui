"use client"

import * as React from "react"
import QRCode from "qrcode"

import { cn } from "@/lib/utils"

export interface QRCodeProps extends Omit<React.ComponentProps<"svg">, "ref"> {
  /** The text or URL to encode in the QR code. */
  value: string
  /** QR code size in pixels. */
  size?: number
  /** Foreground (dark) color. Accepts any CSS color, including CSS variables. */
  fgColor?: string
  /** Background (light) color. Accepts any CSS color, including CSS variables. */
  bgColor?: string
  /** Error correction level. L: 7%, M: 15%, Q: 25%, H: 30%. */
  errorCorrectionLevel?: "L" | "M" | "Q" | "H"
}

// Quiet-zone width, expressed in modules.
const MARGIN = 2

// The three finder patterns occupy the top-left, top-right and bottom-left
// 7×7 corners. Their modules are drawn as a stylised ring instead of dots.
function isInFinder(x: number, y: number, count: number) {
  return (
    (x < 7 && y < 7) || (x >= count - 7 && y < 7) || (x < 7 && y >= count - 7)
  )
}

function FinderPattern({
  x,
  y,
  cell,
  color,
}: {
  x: number
  y: number
  cell: number
  color: string
}) {
  return (
    <>
      {/* 1-module-thick rounded ring centred on the border modules. */}
      <rect
        x={(x + 0.5) * cell}
        y={(y + 0.5) * cell}
        width={cell * 6}
        height={cell * 6}
        rx={cell * 2}
        fill="none"
        stroke={color}
        strokeWidth={cell}
      />
      {/* 3×3 filled centre. */}
      <rect
        x={(x + 2) * cell}
        y={(y + 2) * cell}
        width={cell * 3}
        height={cell * 3}
        rx={cell}
        fill={color}
      />
    </>
  )
}

function QRCodeView({
  value,
  size = 268,
  fgColor = "var(--foreground)",
  bgColor = "var(--background)",
  errorCorrectionLevel = "M",
  className,
  ...props
}: QRCodeProps) {
  const { count, modules } = React.useMemo(() => {
    const qr = QRCode.create(value || " ", { errorCorrectionLevel })
    return { count: qr.modules.size, modules: qr.modules.data }
  }, [value, errorCorrectionLevel])

  const cell = size / (count + MARGIN * 2)
  const offset = MARGIN * cell

  const dots: React.ReactNode[] = []
  for (let y = 0; y < count; y++) {
    for (let x = 0; x < count; x++) {
      if (!modules[y * count + x] || isInFinder(x, y, count)) continue
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={offset + (x + 0.5) * cell}
          cy={offset + (y + 0.5) * cell}
          r={cell * 0.46}
          fill={fgColor}
        />
      )
    }
  }

  return (
    <svg
      role="img"
      aria-label={`QR code for ${value}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("rounded-xl", className)}
      {...props}
    >
      <rect width={size} height={size} rx={cell * 2} fill={bgColor} />
      <g transform={`translate(${offset} ${offset})`}>
        <FinderPattern x={0} y={0} cell={cell} color={fgColor} />
        <FinderPattern x={count - 7} y={0} cell={cell} color={fgColor} />
        <FinderPattern x={0} y={count - 7} cell={cell} color={fgColor} />
      </g>
      {dots}
    </svg>
  )
}

export { QRCodeView as QRCode }
