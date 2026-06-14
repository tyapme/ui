import * as React from "react"

import { cn } from "@/registry/bases/base/lib/utils"

export interface BarsSpinnerProps extends React.ComponentProps<"svg"> {
  /** The size of the spinner in pixels. */
  size?: number
  /** The color of the spinner bars. */
  color?: string
}

const BAR_COUNT = 12
const DURATION = 1.2 // seconds for one full revolution

function BarsSpinner({
  size = 20,
  color = "currentColor",
  className,
  ...props
}: BarsSpinnerProps) {
  return (
    <svg
      role="status"
      aria-label="Loading"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      {...props}
    >
      <style>
        {"@keyframes bars-spinner-fade{0%{opacity:1}100%{opacity:0.15}}"}
      </style>
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <rect
          key={i}
          x="11"
          y="2"
          width="2"
          height="5.5"
          rx="1"
          fill={color}
          transform={`rotate(${i * (360 / BAR_COUNT)} 12 12)`}
          style={{
            // Negative, staggered delays so one bar is always at full opacity,
            // producing the illusion of a highlight travelling around the ring.
            animation: `bars-spinner-fade ${DURATION}s linear ${
              (i / BAR_COUNT) * DURATION - DURATION
            }s infinite`,
          }}
        />
      ))}
    </svg>
  )
}

export { BarsSpinner }
