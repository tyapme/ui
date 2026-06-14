"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  DOCS_TOP_LEVEL_SECTIONS,
  isDocsPageVisible,
  isDocsSectionVisible,
  PAGES_NEW,
} from "@/lib/docs"
import { showMcpDocs } from "@/lib/flags"
import {
  getGroupedPagesFromFolder,
  getPagesFromFolder,
  type PageTreeRoot,
} from "@/lib/page-tree"
import { cn } from "@/lib/utils"
import { Button } from "@/styles/base/ui/button"

export function MobileNav({
  tree,
  items,
  className,
}: {
  tree: PageTreeRoot
  items: { href: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
          className
        )}
        onClick={() => setOpen(!open)}
      >
        <div className="relative flex h-8 w-4 items-center justify-center">
          <div className="relative size-4">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                open ? "top-[0.4rem] -rotate-45" : "top-1"
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                open ? "top-[0.4rem] rotate-45" : "top-2.5"
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </div>
        <span className="flex h-8 items-center text-lg leading-none font-medium">
          Menu
        </span>
      </Button>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 no-scrollbar overflow-y-auto bg-background transition-[top,opacity] duration-150",
          open
            ? "top-[var(--header-height)] opacity-100"
            : "pointer-events-none top-[var(--header-height)] opacity-0"
        )}
        style={{ top: "var(--header-height)" }}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-muted-foreground">
              Sections
            </div>
            <div className="flex flex-col gap-3">
              {DOCS_TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                if (!showMcpDocs && href.includes("/mcp")) {
                  return null
                }
                return (
                  <MobileLink key={name} href={href} onOpenChange={setOpen}>
                    {name}
                    {PAGES_NEW.includes(href) && (
                      <span
                        className="flex size-2 rounded-full bg-blue-500"
                        title="New"
                      />
                    )}
                  </MobileLink>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {tree?.children?.map((group, index) => {
              if (group.type !== "folder") return null
              if (!isDocsSectionVisible(group.$id)) return null

              const isComponents =
                group.$id === "components" || group.name === "Components"

              if (isComponents) {
                const categoryGroups = getGroupedPagesFromFolder(group)
                return categoryGroups.map((cat) => (
                  <div key={cat.category.label} className="flex flex-col gap-4">
                    <div className="text-sm font-medium text-muted-foreground">
                      {cat.category.label}
                    </div>
                    <div className="flex flex-col gap-3">
                      {cat.pages.map((item) => {
                        if (!showMcpDocs && item.url.includes("/mcp")) {
                          return null
                        }
                        if (!isDocsPageVisible(item.url)) {
                          return null
                        }
                        return (
                          <MobileLink
                            key={item.url}
                            href={item.url}
                            onOpenChange={setOpen}
                            className="flex items-center gap-2"
                          >
                            {item.name}
                            {PAGES_NEW.includes(item.url) && (
                              <span className="flex size-2 rounded-full bg-blue-500" />
                            )}
                          </MobileLink>
                        )
                      })}
                    </div>
                  </div>
                ))
              }

              const pages = getPagesFromFolder(group)
              return (
                <div key={index} className="flex flex-col gap-4">
                  <div className="text-sm font-medium text-muted-foreground">
                    {group.name}
                  </div>
                  <div className="flex flex-col gap-3">
                    {pages.map((item) => {
                      if (!showMcpDocs && item.url.includes("/mcp")) {
                        return null
                      }
                      if (!isDocsPageVisible(item.url)) {
                        return null
                      }
                      return (
                        <MobileLink
                          key={`${item.url}-${index}`}
                          href={item.url}
                          onOpenChange={setOpen}
                          className="flex items-center gap-2"
                        >
                          {item.name}
                          {PAGES_NEW.includes(item.url) && (
                            <span className="flex size-2 rounded-full bg-blue-500" />
                          )}
                        </MobileLink>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn("flex items-center gap-2 text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
