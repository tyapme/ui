"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"

type Orientation = "vertical" | "horizontal" | "both"

type EdgeState = {
  top: boolean
  bottom: boolean
  left: boolean
  right: boolean
}

type ScrollMaskProps = useRender.ComponentProps<"div"> & {
  /**
   * Which axis (or both) gets a fade mask at its scrollable edges.
   * @default "vertical"
   */
  orientation?: Orientation
  /**
   * Length of the fade. A number is treated as pixels; any CSS length
   * (e.g. "2rem", "10%") is passed through untouched.
   * @default "2rem"
   */
  size?: number | string
  /**
   * Keep the fade visible even when the edge is not scrollable. When `false`
   * (default) the fade for an edge only appears once there is content hidden
   * beyond it — matching the fumadocs sidebar behaviour.
   * @default false
   */
  always?: boolean
  /**
   * Disable the mask entirely while keeping the scroll container. Useful for
   * toggling the effect without unmounting children.
   * @default false
   */
  disabled?: boolean
}

function toLength(value: number | string) {
  return typeof value === "number" ? `${value}px` : value
}

function edgeGradient(
  direction: "to bottom" | "to right",
  start: boolean,
  end: boolean,
  size: string
) {
  const from = start ? size : "0px"
  const to = end ? size : "0px"
  return `linear-gradient(${direction}, transparent 0, black ${from}, black calc(100% - ${to}), transparent 100%)`
}

function ScrollMask({
  className,
  style,
  render,
  orientation = "vertical",
  size = "2rem",
  always = false,
  disabled = false,
  ...props
}: ScrollMaskProps) {
  // Track the rendered node in state so the listener effect re-runs once it
  // mounts. `setNode` is passed as the ref and composed with any consumer ref
  // (and the `render` element's own ref) by `useRender`.
  const [node, setNode] = React.useState<HTMLElement | null>(null)
  const [edges, setEdges] = React.useState<EdgeState>({
    top: false,
    bottom: false,
    left: false,
    right: false,
  })

  React.useEffect(() => {
    if (!node) return

    const update = () => {
      const {
        scrollTop,
        scrollLeft,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth,
      } = node
      // scrollLeft is negative in RTL; compare against magnitude.
      const left = Math.abs(scrollLeft)
      const threshold = 1

      setEdges({
        top: scrollTop > threshold,
        bottom: scrollTop + clientHeight < scrollHeight - threshold,
        left: left > threshold,
        right: left + clientWidth < scrollWidth - threshold,
      })
    }

    update()
    node.addEventListener("scroll", update, { passive: true })

    const observer = new ResizeObserver(update)
    observer.observe(node)
    // Observe the content so masks update when children grow/shrink.
    Array.from(node.children).forEach((child) => observer.observe(child))

    return () => {
      node.removeEventListener("scroll", update)
      observer.disconnect()
    }
  }, [node])

  const length = toLength(size)
  const show = (edge: boolean) => always || edge

  const maskStyle = React.useMemo<React.CSSProperties>(() => {
    if (disabled) return {}

    const layers: string[] = []
    if (orientation !== "horizontal") {
      layers.push(
        edgeGradient("to bottom", show(edges.top), show(edges.bottom), length)
      )
    }
    if (orientation !== "vertical") {
      layers.push(
        edgeGradient("to right", show(edges.left), show(edges.right), length)
      )
    }

    const image = layers.join(", ")
    return {
      WebkitMaskImage: image,
      maskImage: image,
      ...(layers.length > 1
        ? {
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }
        : {}),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    disabled,
    orientation,
    length,
    always,
    edges.top,
    edges.bottom,
    edges.left,
    edges.right,
  ])

  // When used as a wrapper we tag + own the scroll container; with `render`
  // the child element already sets its own slot and overflow.
  const dataAttrs: Record<string, string> = { "data-orientation": orientation }
  if (!render) {
    dataAttrs["data-slot"] = "scroll-mask"
  }

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...dataAttrs,
        ref: setNode,
        className: cn(
          !render && orientation === "vertical" && "overflow-y-auto",
          !render && orientation === "horizontal" && "overflow-x-auto",
          !render && orientation === "both" && "overflow-auto",
          className
        ),
        style: { ...maskStyle, ...style },
      },
      props
    ),
  })
}

export { ScrollMask, type ScrollMaskProps }
