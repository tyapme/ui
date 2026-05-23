"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { IconArrowRight } from "@tabler/icons-react"
import { useDocsSearch } from "fumadocs-core/search/client"
import { CornerDownLeftIcon, SearchIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { trackEvent } from "@/lib/events"
import { showMcpDocs } from "@/lib/flags"
import { getPagesFromFolder } from "@/lib/page-tree"
import { type source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import { Button } from "@/styles/base/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/styles/base/ui/command"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base/ui/dialog"
import { Separator } from "@/styles/base/ui/separator"
import { Spinner } from "@/styles/base/ui/spinner"

export function CommandMenu({
  tree,
  navItems,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  tree: typeof source.pageTree
  navItems?: { href: string; label: string }[]
}) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [renderDelayedGroups, setRenderDelayedGroups] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<
    "page" | "component" | null
  >(null)
  const [copyPayload, setCopyPayload] = React.useState("")

  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
  })
  // Track search queries with debouncing to avoid excessive tracking.
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)
  const lastTrackedQueryRef = React.useRef<string>("")

  const trackSearchQuery = React.useCallback((query: string) => {
    const trimmedQuery = query.trim()

    // Only track if the query is different from the last tracked query and has content.
    if (trimmedQuery && trimmedQuery !== lastTrackedQueryRef.current) {
      lastTrackedQueryRef.current = trimmedQuery
      trackEvent({
        name: "search_query",
        properties: {
          query: trimmedQuery,
          query_length: trimmedQuery.length,
        },
      })
    }
  }, [])

  const handleSearchChange = React.useCallback(
    (value: string) => {
      // Clear existing timeout.
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }

      // Set new timeout to debounce both search and tracking.
      searchTimeoutRef.current = setTimeout(() => {
        React.startTransition(() => {
          setSearch(value)
          trackSearchQuery(value)
        })
      }, 500)
    },
    [setSearch, trackSearchQuery]
  )

  // Cleanup timeout on unmount.
  React.useEffect(() => {
    if (open) {
      const frame = requestAnimationFrame(() => {
        setRenderDelayedGroups(true)
      })

      return () => {
        cancelAnimationFrame(frame)
      }
    }

    setRenderDelayedGroups(false)
  }, [open])

  React.useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  const commandFilter = React.useCallback(
    (value: string, searchValue: string, keywords?: string[]) => {
      const extendValue = value + " " + (keywords?.join(" ") || "")
      if (extendValue.toLowerCase().includes(searchValue.toLowerCase())) {
        return 1
      }
      return 0
    },
    []
  )

  const handlePageHighlight = React.useCallback(
    (isComponent: boolean, item: { url: string; name?: React.ReactNode }) => {
      if (isComponent) {
        setSelectedType("component")
        setCopyPayload("")
      } else {
        setSelectedType("page")
        setCopyPayload("")
      }
    },
    [setSelectedType, setCopyPayload]
  )

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    [setOpen]
  )

  const navItemsSection = React.useMemo(() => {
    if (!navItems || navItems.length === 0) {
      return null
    }

    return (
      <CommandGroup
        heading="ページ"
        className="p-0! **:[[cmdk-group-heading]]:scroll-mt-16 **:[[cmdk-group-heading]]:p-3! **:[[cmdk-group-heading]]:pb-1!"
      >
        {navItems.map((item) => (
          <CommandMenuItem
            key={item.href}
            value={`Navigation ${item.label}`}
            keywords={["nav", "navigation", item.label.toLowerCase()]}
            onHighlight={() => {
              setSelectedType("page")
              setCopyPayload("")
            }}
            onSelect={() => {
              runCommand(() => router.push(item.href))
            }}
          >
            <IconArrowRight />
            {item.label}
          </CommandMenuItem>
        ))}
      </CommandGroup>
    )
  }, [navItems, runCommand, router])

  const pageGroupsSection = React.useMemo(() => {
    return tree.children.map((group) => {
      if (group.type !== "folder") {
        return null
      }

      const pages = getPagesFromFolder(group).filter((item) => {
        if (!showMcpDocs && item.url.includes("/mcp")) {
          return false
        }

        return true
      })

      if (pages.length === 0) {
        return null
      }

      return (
        <CommandGroup
          key={group.$id}
          heading={group.name}
          className="p-0! **:[[cmdk-group-heading]]:scroll-mt-16 **:[[cmdk-group-heading]]:p-3! **:[[cmdk-group-heading]]:pb-1!"
        >
          {pages.map((item) => {
            const isComponent = item.url.includes("/components/")

            return (
              <CommandMenuItem
                key={item.url}
                value={
                  item.name?.toString() ? `${group.name} ${item.name}` : ""
                }
                keywords={isComponent ? ["component"] : undefined}
                onHighlight={() => handlePageHighlight(isComponent, item)}
                onSelect={() => {
                  runCommand(() => router.push(item.url))
                }}
              >
                {isComponent ? (
                  <div className="aspect-square size-4 rounded-full border border-dashed border-muted-foreground" />
                ) : (
                  <IconArrowRight />
                )}
                {item.name}
              </CommandMenuItem>
            )
          })}
        </CommandGroup>
      )
    })
  }, [tree.children, handlePageHighlight, runCommand, router])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }

    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "extend-touch-target size-8",
              "md:w-48 md:justify-start md:rounded-lg md:pl-3 md:pr-12 md:font-normal md:hover:bg-muted/50 md:dark:bg-card lg:w-40 xl:w-64"
            )}
            onClick={() => setOpen(true)}
          />
        }
      >
        <SearchIcon className="size-4.5 md:size-4 md:shrink-0 md:opacity-50" />
        <span className="hidden md:inline-flex xl:hidden">Search...</span>
        <span className="hidden xl:inline-flex">Search documentation...</span>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800">
        <DialogHeader className="sr-only">
          <DialogTitle>ドキュメントを検索...</DialogTitle>
          <DialogDescription>コマンドを検索して実行できます。</DialogDescription>
        </DialogHeader>
        <Command
          className="rounded-none bg-transparent **:data-[slot=command-input]:h-9! **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:h-9! **:data-[slot=command-input-wrapper]:pb-1"
          filter={commandFilter}
        >
          <div className="relative">
            <CommandInput
              placeholder="ドキュメントを検索..."
              onValueChange={handleSearchChange}
            />
            {query.isLoading && (
              <div className="pointer-events-none absolute top-1/2 right-3 z-10 flex -translate-y-1/2 items-center justify-center">
                <Spinner className="size-4 text-muted-foreground" />
              </div>
            )}
          </div>
          {/* input 下のぼかし */}
          <div className="pointer-events-none relative z-10 -mb-4 h-4 shrink-0 bg-gradient-to-b from-background to-transparent dark:from-neutral-900" />
          <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-8">
            <CommandEmpty className="py-12 text-center text-sm text-muted-foreground">
              {query.isLoading ? "検索中..." : "結果が見つかりませんでした。"}
            </CommandEmpty>
            {navItemsSection}
            {renderDelayedGroups ? (
              <>
                {pageGroupsSection}
                <SearchResults
                  setOpen={setOpen}
                  query={query}
                  search={search}
                />
              </>
            ) : null}
          </CommandList>
          {/* リスト下のぼかし（フッターバーの直上） */}
          <div className="pointer-events-none relative z-10 -mt-8 h-8 shrink-0 bg-gradient-to-t from-background to-transparent dark:from-neutral-900" />
        </Command>
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium text-muted-foreground dark:border-t-neutral-700 dark:bg-neutral-800">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>{" "}
            {selectedType === "page" || selectedType === "component"
              ? "ページへ移動"
              : null}
          </div>
          {copyPayload && (
            <>
              <Separator orientation="vertical" className="h-4!" />
              <div className="flex items-center gap-1">
                <CommandMenuKbd>⌘</CommandMenuKbd>
                <CommandMenuKbd>C</CommandMenuKbd>
                {copyPayload}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CommandMenuItem({
  children,
  className,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem
      ref={ref}
      className={cn(
        "h-9 rounded-md border border-transparent px-3! font-medium data-[selected=true]:border-input data-[selected=true]:bg-input/50",
        className
      )}
      {...props}
    >
      {children}
    </CommandItem>
  )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

type Query = Awaited<ReturnType<typeof useDocsSearch>>["query"]

function SearchResults({
  setOpen,
  query,
  search,
}: {
  setOpen: (open: boolean) => void
  query: Query
  search: string
}) {
  const router = useRouter()

  const uniqueResults = React.useMemo(() => {
    if (!query.data || !Array.isArray(query.data)) {
      return []
    }

    return query.data.filter(
      (item, index, self) =>
        !(
          item.type === "text" && item.content.trim().split(/\s+/).length <= 1
        ) && index === self.findIndex((t) => t.content === item.content)
    )
  }, [query.data])

  if (!search.trim()) {
    return null
  }

  if (!query.data || query.data === "empty") {
    return null
  }

  if (query.data && uniqueResults.length === 0) {
    return null
  }

  return (
    <CommandGroup
      className="px-0! **:[[cmdk-group-heading]]:scroll-mt-16 **:[[cmdk-group-heading]]:p-3! **:[[cmdk-group-heading]]:pb-1!"
      heading="検索結果"
    >
      {uniqueResults.map((item) => {
        return (
          <CommandItem
            key={item.id}
            data-type={item.type}
            onSelect={() => {
              router.push(item.url)
              setOpen(false)
            }}
            className="h-9 rounded-md border border-transparent px-3! font-normal data-[selected=true]:border-input data-[selected=true]:bg-input/50"
            keywords={[item.content]}
            value={`${item.content} ${item.type}`}
          >
            <div className="line-clamp-1 text-sm">{item.content}</div>
          </CommandItem>
        )
      })}
    </CommandGroup>
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-[15%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}
