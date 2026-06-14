"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: PageTreeRoot
}) {
  const pathname = usePathname()
  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="h-9" />
      <SidebarContent className="mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2">
        <SidebarGroup className="pt-6">
          <SidebarGroupLabel className="font-medium text-muted-foreground">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DOCS_TOP_LEVEL_SECTIONS.map(({ name, href }) => {
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
          if (!isDocsSectionVisible(item.$id)) {
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
                      if (!isDocsPageVisible(page.url)) {
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

                      if (!isDocsPageVisible(page.url)) {
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
      </SidebarContent>
    </Sidebar>
  )
}
