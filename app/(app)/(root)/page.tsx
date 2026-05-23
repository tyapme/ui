import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york-v4/ui/button"

import { RootComponents } from "./components"

const title = "TYAP.ME UI"
const description =
  "TYAP.ME のプロダクト画面を一貫した見た目と操作感で組み立てるための UI コンポーネント集。"

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="h-[31px] rounded-lg">
            <Link href="/docs/components">Components</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-lg">
            <Link href="/docs/installation">Docs</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="-mx-4 w-[160vw] overflow-hidden rounded-lg border border-border/50 md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/new-york-v4/dashboard-01-light.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/new-york-v4/dashboard-01-dark.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="hidden dark:block"
              priority
            />
          </section>
          <section className="hidden theme-container md:block">
            <RootComponents />
          </section>
        </div>
      </div>
    </div>
  )
}
