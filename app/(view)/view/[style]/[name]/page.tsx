/* eslint-disable react-hooks/static-components */
import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import {
  getDemoItem,
  getRegistryComponent,
  getRegistryItem,
} from "@/lib/registry"
import { absoluteUrl } from "@/lib/utils"

import "@/app/legacy-themes.css"

import { ComponentPreview } from "./component-preview"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: string) => {
    // Try registry item first, then fallback to demo item (for examples).
    const item = await getRegistryItem(name, styleName)
    if (item) {
      return item
    }
    return await getDemoItem(name, styleName)
  }
)

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}): Promise<Metadata> {
  const { style: styleName, name } = await params

  if (styleName !== "base") {
    return {}
  }

  const item = await getCachedRegistryItem(name, styleName)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/view/${styleName}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export async function generateStaticParams() {
  const { Index } = await import("@/registry/__index__")
  const { ExamplesIndex } = await import("@/examples/__index__")
  const params: Array<{ style: string; name: string }> = []

  // Add sidebar examples for the base style.
  const examples = ExamplesIndex["base"]
  if (examples) {
    for (const exampleName of Object.keys(examples)) {
      if (exampleName.startsWith("sidebar-")) {
        params.push({ style: "base", name: exampleName })
      }
    }
  }

  // Add UI components from the base style index.
  if (Index["base"]) {
    const styleIndex = Index["base"]
    for (const itemName in styleIndex) {
      const item = styleIndex[itemName]
      if (
        [
          "registry:block",
          "registry:component",
          "registry:example",
          "registry:internal",
        ].includes(item.type)
      ) {
        params.push({ style: "base", name: item.name })
      }
    }
  }

  return params
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}) {
  const { style: styleName, name } = await params

  // Only "base" style is supported.
  if (styleName !== "base") {
    return notFound()
  }

  const item = await getCachedRegistryItem(name, styleName)
  const Component = getRegistryComponent(name, styleName)

  if (!item || !Component) {
    return notFound()
  }

  return (
    <ComponentPreview>
      <Component />
    </ComponentPreview>
  )
}
