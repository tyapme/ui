"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { PAGES_NEW } from "@/lib/docs"
import { showMcpDocs } from "@/lib/flags"
import {
  getGroupedPagesFromFolder,
  getPagesFromFolder,
} from "@/lib/page-tree"
import type { source } from "@/lib/source"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/styles/base/ui/sidebar"

const TOP_LEVEL_SECTIONS = [
  { name: "はじめに", href: "/docs" },
  {
    name: "コンポーネント",
    href: "/docs/components",
  },
  {
    name: "基本デザイン",
    href: "/docs/design",
  },
  {
    name: "インストール",
    href: "/docs/installation",
  },
  {
    name: "テーマ",
    href: "/docs/theming",
  },
  {
    name: "フォーム",
    href: "/docs/forms",
  },
]
const EXCLUDED_SECTIONS = ["installation", "dark-mode"]
const EXCLUDED_PAGES = [
  "/docs",
  "/docs/cli",
  "/docs/javascript",
  "/docs/legacy",
  "/docs/llms.txt",
  "/docs/mcp",
  "/docs/monorepo",
  "/docs/new",
  "/docs/package-imports",
  "/docs/skills",
]

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname()
  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="h-9" />
      <div className="absolute top-8 z-10 h-8 w-(--sidebar-menu-width) shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
      <div className="absolute top-12 right-2 bottom-0 hidden h-full w-px bg-linear-to-b from-transparent via-border to-transparent lg:flex" />
      <SidebarContent className="mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2">
        <SidebarGroup className="pt-6">
          <SidebarGroupLabel className="font-medium text-muted-foreground">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                if (!showMcpDocs && href.includes("/mcp")) {
                  return null
                }
                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      render={
                        <Link href={href}>
                          <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                          {name}
                          {PAGES_NEW.includes(href) && (
                            <span
                              className="flex size-2 rounded-full bg-blue-500"
                              title="New"
                            />
                          )}
                        </Link>
                      }
                      isActive={
                        href === "/docs"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                      className="relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48"
                    />
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children.map((item) => {
          if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
            return null
          }

          const isComponents =
            item.$id === "components" || item.name === "Components"

          if (item.type === "folder" && isComponents) {
            const groups = getGroupedPagesFromFolder(item)
            return groups.map((group) => (
              <SidebarGroup key={group.category.label}>
                <SidebarGroupLabel className="font-medium text-muted-foreground">
                  {group.category.label}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-0.5">
                    {group.pages.map((page) => {
                      if (!showMcpDocs && page.url.includes("/mcp")) {
                        return null
                      }
                      if (EXCLUDED_PAGES.includes(page.url)) {
                        return null
                      }
                      return (
                        <SidebarMenuItem key={page.url}>
                          <SidebarMenuButton
                            render={
                              <Link href={page.url}>
                                <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                                {page.name}
                                {PAGES_NEW.includes(page.url) && (
                                  <span
                                    className="flex size-2 rounded-full bg-blue-500"
                                    title="New"
                                  />
                                )}
                              </Link>
                            }
                            isActive={page.url === pathname}
                            className="relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48"
                          />
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))
          }

          return (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="font-medium text-muted-foreground">
                {item.name}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {item.type === "folder" && (
                  <SidebarMenu className="gap-0.5">
                    {getPagesFromFolder(item).map((page) => {
                      if (!showMcpDocs && page.url.includes("/mcp")) {
                        return null
                      }

                      if (EXCLUDED_PAGES.includes(page.url)) {
                        return null
                      }

                      return (
                        <SidebarMenuItem key={page.url}>
                          <SidebarMenuButton
                            render={
                              <Link href={page.url}>
                                <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                                {page.name}
                                {PAGES_NEW.includes(page.url) && (
                                  <span
                                    className="flex size-2 rounded-full bg-blue-500"
                                    title="New"
                                  />
                                )}
                              </Link>
                            }
                            isActive={page.url === pathname}
                            className="relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48"
                          />
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
        <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-background via-background/80 to-background/50 blur-xs" />
      </SidebarContent>
    </Sidebar>
  )
}
