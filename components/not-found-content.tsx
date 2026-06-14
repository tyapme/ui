"use client"

import * as React from "react"
import Link from "next/link"

import { Kbd } from "@/styles/base/ui/kbd"

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/components/accordion", label: "Components" },
  { href: "/docs/design/typography", label: "Design" },
] as const

const NOT_FOUND_CSS = `
.nf-root {
  --avatar-lift: -6px;
  --avatar-dur: 320ms;
  --avatar-scale: 1.06;
  --avatar-falloff: 0.5;
  --avatar-ease-in: cubic-bezier(0.22, 1, 0.36, 1);
  --avatar-ease-out: cubic-bezier(0.34, 3.85, 0.64, 1);
}

@keyframes nf-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.nf-item {
  opacity: 0;
  animation: nf-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.nf-item:nth-child(1) {
  animation-delay: 0.04s;
}
.nf-item:nth-child(2) {
  animation-delay: 0.12s;
}
.nf-item:nth-child(3) {
  animation-delay: 0.2s;
}
.nf-item:nth-child(4) {
  animation-delay: 0.28s;
}

/* transitions-dev — avatar group hover (distance-falloff lift). */
.t-avatar {
  transform-origin: center;
  transform: translateY(var(--shift, 0px)) scale(var(--scale-active, 1));
  transition: transform var(--avatar-dur) var(--avatar-ease-in);
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .nf-item {
    opacity: 1;
    animation: none;
  }
  .t-avatar {
    transition: none !important;
    transform: none !important;
  }
}
`

export function NotFoundContent() {
  const rowRef = React.useRef<HTMLDivElement>(null)

  // Distance-falloff lift with direction-aware easing: timing-function is set
  // inline before the variable writes so hover-in eases cleanly and the return
  // springs back with an overshoot.
  const setShifts = React.useCallback(
    (activeIdx: number | null, phase: "in" | "out") => {
      const root = rowRef.current
      if (!root) return
      const cs = getComputedStyle(root)
      const num = (name: string, fb: number) => {
        const v = parseFloat(cs.getPropertyValue(name))
        return Number.isFinite(v) ? v : fb
      }
      const ease = (name: string, fb: string) =>
        cs.getPropertyValue(name).trim() || fb

      const lift = num("--avatar-lift", -6)
      const falloff = num("--avatar-falloff", 0.5)
      const scale = num("--avatar-scale", 1.06)
      const tf =
        phase === "out"
          ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
          : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)")

      root.querySelectorAll<HTMLElement>(".t-avatar").forEach((el, i) => {
        el.style.transitionTimingFunction = tf
        if (activeIdx === null) {
          el.style.setProperty("--shift", "0px")
          el.style.setProperty("--scale-active", "1")
          return
        }
        const d = Math.abs(i - activeIdx)
        el.style.setProperty("--shift", `${(lift * falloff ** d).toFixed(3)}px`)
        el.style.setProperty("--scale-active", i === activeIdx ? `${scale}` : "1")
      })
    },
    []
  )

  return (
    <section className="nf-root relative flex flex-1 items-center overflow-hidden px-6 py-24">
      <style>{NOT_FOUND_CSS}</style>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        <div className="nf-item flex items-baseline gap-3 leading-none font-bold tracking-tighter text-foreground">
          <span
            aria-hidden
            className="flex items-baseline gap-2 text-[clamp(4.5rem,20vw,11rem)] tabular-nums"
          >
            <span>4</span>
            <span className="relative top-[0.06em] inline-block aspect-square h-[0.72em] rounded-full border-[0.075em] border-current" />
            <span>4</span>
          </span>
          <span className="sr-only">404</span>
        </div>

        <div className="nf-item flex flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Error 404
          </p>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            This page isn&rsquo;t here.
          </h1>
          <p className="max-w-[52ch] leading-relaxed text-muted-foreground">
            The link may be broken, or the page may have moved. Pick up the
            trail from one of these instead.
          </p>
        </div>

        <div
          ref={rowRef}
          onMouseLeave={() => setShifts(null, "out")}
          className="nf-item flex flex-wrap gap-2.5"
        >
          {QUICK_LINKS.map(({ href, label }, i) => (
            <div
              key={href}
              className="t-avatar"
              onMouseEnter={() => setShifts(i, "in")}
            >
              <Link
                href={href}
                className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>

        <p className="nf-item flex items-center gap-2 text-sm text-muted-foreground">
          <span>Looking for something specific? Press</span>
          <Kbd>⌘&nbsp;K</Kbd>
          <span>to search.</span>
        </p>
      </div>
    </section>
  )
}
