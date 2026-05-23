"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"

import {
  DEFAULT_CONFIG,
  designSystemConfigSchema,
  type DesignSystemConfig,
} from "@/registry/config"

function readDesignSystemParams(
  searchParams: URLSearchParams
): DesignSystemConfig {
  return designSystemConfigSchema.parse({
    ...DEFAULT_CONFIG,
    ...Object.fromEntries(searchParams.entries()),
    rtl: searchParams.get("rtl") === "true" || DEFAULT_CONFIG.rtl,
    pointer: searchParams.get("pointer") === "true" || DEFAULT_CONFIG.pointer,
  })
}

export function useDesignSystemSearchParams() {
  const searchParams = useSearchParams()

  const params = React.useMemo(
    () => readDesignSystemParams(new URLSearchParams(searchParams.toString())),
    [searchParams]
  )

  return [params] as const
}
