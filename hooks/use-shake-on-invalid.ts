import * as React from "react"

export function useShakeOnInvalid(
  ref: React.RefObject<HTMLElement | null>
) {
  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleInvalid() {
      const target = ref.current
      if (!target) return
      target.setAttribute("data-invalid", "")
      target.addEventListener(
        "animationend",
        () => target.removeAttribute("data-invalid"),
        { once: true }
      )
    }

    el.addEventListener("invalid", handleInvalid, true)
    return () => el.removeEventListener("invalid", handleInvalid, true)
  }, [ref])
}
