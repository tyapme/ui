"use client"

import * as React from "react"

/**
 * Watches a `.t-input` element for `aria-invalid` changes in its subtree.
 * When the element transitions from valid → invalid, replays the
 * `t-input-shake` animation defined by the transitions-dev error-state-shake CSS.
 */
export function useShakeOnInvalid(ref: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const checkInvalid = (root: HTMLElement) =>
      root.matches("[aria-invalid='true']") ||
      root.matches("[data-invalid]") ||
      !!root.querySelector("[aria-invalid='true']") ||
      !!root.querySelector("[data-invalid]")

    let wasInvalid = checkInvalid(el)

    const cs = getComputedStyle(document.documentElement)
    const ms = (name: string, fb: number) => {
      const v = parseFloat(cs.getPropertyValue(name))
      return Number.isFinite(v) ? v : fb
    }

    const observer = new MutationObserver(() => {
      const isNowInvalid = checkInvalid(el)

      if (isNowInvalid && !wasInvalid) {
        el.classList.remove("is-shaking")
        void el.offsetWidth // force reflow so animation replays
        el.classList.add("is-shaking")

        const shakeMs =
          ms("--shake-dur-a", 80) * 2 + ms("--shake-dur-b", 60) * 2
        setTimeout(() => el.classList.remove("is-shaking"), shakeMs + 20)
      }

      wasInvalid = isNowInvalid
    })

    observer.observe(el, {
      subtree: true,
      attributeFilter: ["aria-invalid", "data-invalid"],
    })

    return () => observer.disconnect()
  }, [ref])
}
