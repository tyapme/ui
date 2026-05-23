"use client"

import * as React from "react"
import { Plus } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base/ui/avatar"
import { Button } from "@/styles/base/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/base/ui/item"

function useAvatarGroupShifts(rootRef: React.RefObject<HTMLElement | null>) {
  return React.useCallback(
    (activeIdx: number | null, phase: "in" | "out") => {
      if (!rootRef.current) return
      const cs = getComputedStyle(document.documentElement)
      const num = (name: string, fb: number) => {
        const v = parseFloat(cs.getPropertyValue(name))
        return Number.isFinite(v) ? v : fb
      }
      const ease = (name: string, fb: string) =>
        cs.getPropertyValue(name).trim() || fb

      const lift = num("--avatar-lift", -4)
      const falloff = num("--avatar-falloff", 0.45)
      const scale = num("--avatar-scale", 1.05)
      const tf =
        phase === "out"
          ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
          : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)")

      rootRef.current
        .querySelectorAll<HTMLElement>(".t-avatar")
        .forEach((el, i) => {
          el.style.transitionTimingFunction = tf
          if (activeIdx == null) {
            el.style.setProperty("--shift", "0px")
            el.style.setProperty("--scale-active", "1")
            return
          }
          const d = Math.abs(i - activeIdx)
          el.style.setProperty(
            "--shift",
            (lift * Math.pow(falloff, d)).toFixed(3) + "px"
          )
          el.style.setProperty(
            "--scale-active",
            i === activeIdx ? String(scale) : "1"
          )
        })
    },
    [rootRef]
  )
}

function AvatarGroup() {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const setShifts = useAvatarGroupShifts(rootRef)
  return (
    <div
      ref={rootRef}
      className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale"
      onMouseLeave={() => setShifts(null, "out")}
    >
      <Avatar
        className="t-avatar hidden sm:flex"
        onMouseEnter={() => setShifts(0, "in")}
      >
        <AvatarImage src="/avatars/01.png" alt="TYAP.ME member" />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <Avatar
        className="t-avatar hidden sm:flex"
        onMouseEnter={() => setShifts(1, "in")}
      >
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar
        className="t-avatar"
        onMouseEnter={() => setShifts(2, "in")}
      >
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline" className="hidden">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/maxleiter.png" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Max Leiter</ItemTitle>
          <ItemDescription>5か月前に最終ログイン</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="招待"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <AvatarGroup />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>チームメンバーなし</ItemTitle>
          <ItemDescription>チームを招待して共同作業しましょう。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            招待
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
