import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { findNeighbour } from "fumadocs-core/page-tree"

import { i18n } from "@/lib/i18n"
import { replaceComponentsList } from "@/lib/llm"
import { source } from "@/lib/source"
import { absoluteUrl, cn } from "@/lib/utils"
import { ComponentInstall } from "@/components/component-install"
import { DocsCopyPage } from "@/components/docs-copy-page"
import { DocsTableOfContents } from "@/components/docs-toc"
import { Button } from "@/styles/base/ui/button"

// OpenGraph locale codes per documentation language.
const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  ja: "ja_JP",
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug, params.lang)

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  // hreflang alternates so each locale points at its sibling translation.
  const slugPath = (params.slug ?? []).join("/")
  const languages = Object.fromEntries(
    i18n.languages.map((lang) => [
      lang,
      absoluteUrl(`/${lang}/docs${slugPath ? `/${slugPath}` : ""}`),
    ])
  )

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: absoluteUrl(page.url),
      languages,
    },
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      locale: OG_LOCALES[params.lang] ?? OG_LOCALES[i18n.defaultLanguage],
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
  }
}

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug, params.lang)
  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body
  // Bind the current locale to ComponentInstall so its Step labels are localized.
  const components = {
    ...mdxComponents,
    ComponentInstall: (props: React.ComponentProps<typeof ComponentInstall>) => (
      <ComponentInstall {...props} lang={params.lang} />
    ),
  }
  const isChangelog = params.slug?.[0] === "changelog"
  const isComponentsIndex = params.slug?.[0] === "components" && !params.slug?.[1]
  const neighbours = isChangelog
    ? { previous: null, next: null }
    : findNeighbour(source.getPageTree(params.lang), page.url)
  const raw = replaceComponentsList(await page.data.getText("raw"))

  return (
    <div
      data-slot="docs"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div
          className={cn(
            "mx-auto flex w-full min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300",
            !isComponentsIndex && "max-w-[40rem]"
          )}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between md:items-start">
              <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
                {doc.title}
              </h1>
              <div className="docs-nav flex items-center gap-2">
                <div className="hidden sm:block">
                  <DocsCopyPage page={raw} url={absoluteUrl(page.url)} />
                </div>
                <div className="ml-auto flex gap-2">
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      nativeButton={false}
                      render={<Link href={neighbours.previous.url} />}
                    >
                      <IconArrowLeft />
                      <span className="sr-only">Previous</span>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      nativeButton={false}
                      render={<Link href={neighbours.next.url} />}
                    >
                      <span className="sr-only">Next</span>
                      <IconArrowRight />
                    </Button>
                  )}
                </div>
              </div>
            </div>
            {doc.description && (
              <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
                {doc.description}
              </p>
            )}
          </div>
          <div className="w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0">
            <MDX components={components} />
          </div>
          <div className="hidden h-16 w-full items-center gap-2 px-4 sm:flex sm:px-0">
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="sm"
                className="shadow-none"
                nativeButton={false}
                render={<Link href={neighbours.previous.url} />}
              >
                <IconArrowLeft /> {neighbours.previous.name}
              </Button>
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                size="sm"
                className="ml-auto shadow-none"
                nativeButton={false}
                render={<Link href={neighbours.next.url} />}
              >
                {neighbours.next.name} <IconArrowRight />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        {doc.toc?.length ? (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            <DocsTableOfContents toc={doc.toc} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
