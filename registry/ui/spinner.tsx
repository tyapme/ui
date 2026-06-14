import * as React from "react"

import { cn } from "@/registry/bases/base/lib/utils"

export interface SpinnerProps extends React.ComponentProps<"svg"> {
  /** The size of the spinner in pixels. Tailwind size-* classes also work. */
  size?: number
  /** The color of the spinner bars. Defaults to currentColor. */
  color?: string
}

const BAR_COUNT = 12
const DURATION = 1.2

function Spinner({
  size = 16,
  color = "currentColor",
  className,
  ...props
}: SpinnerProps) {
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
            animation: `bars-spinner-fade ${DURATION}s linear ${
              (i / BAR_COUNT) * DURATION - DURATION
            }s infinite`,
          }}
        />
      ))}
    </svg>
  )
}

export { Spinner }
