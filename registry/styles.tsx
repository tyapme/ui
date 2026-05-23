import * as React from "react"

export const STYLES = [
  {
    name: "maia",
    title: "Maia",
    description: "Rounded, with generous spacing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        color="currentColor"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        ></circle>
      </svg>
    ),
  },
] as const

export type Style = (typeof STYLES)[number]
