import type { source } from "@/lib/source"
import { COMPONENT_CATEGORIES, type ComponentCategory } from "@/lib/docs"

export type PageTreeNode = (typeof source.pageTree)["children"][number]
export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>

// Recursively find all pages in a folder tree.
export function getAllPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
  const pages: PageTreePage[] = []

  for (const child of folder.children) {
    if (child.type === "page") {
      pages.push(child)
    } else if (child.type === "folder") {
      pages.push(...getAllPagesFromFolder(child))
    }
  }

  return pages
}

// Get the pages from a folder, handling nested base folders (radix/base).
export function getPagesFromFolder(
  folder: PageTreeFolder,
  currentBase: string
): PageTreePage[] {
  // For the components folder, find the base subfolder.
  if (folder.$id === "components" || folder.name === "Components") {
    for (const child of folder.children) {
      if (child.type === "folder") {
        // Match by $id or by name.
        const isBase = child.$id === "base" || child.name === "Base UI"

        if (currentBase === "base" && isBase) {
          return child.children.filter(
            (c): c is PageTreePage => c.type === "page"
          )
        }
      }
    }

    // Fallback: return all pages from nested folders.
    return getAllPagesFromFolder(folder).filter(
      (page) => !page.url.endsWith("/components")
    )
  }

  // For other folders, return direct page children.
  return folder.children.filter(
    (child): child is PageTreePage => child.type === "page"
  )
}

// Get current base from pathname.
export function getCurrentBase(pathname: string): string {
  const baseMatch = pathname.match(/\/docs\/components\/(base)\//)
  return baseMatch ? baseMatch[1] : "base" // Default to base.
}

export type GroupedPages = {
  category: ComponentCategory
  pages: PageTreePage[]
}

// Group pages by COMPONENT_CATEGORIES. Pages not listed in any category go into a fallback group.
export function getGroupedPagesFromFolder(
  folder: PageTreeFolder,
  currentBase: string
): GroupedPages[] {
  const allPages = getPagesFromFolder(folder, currentBase)
  const pagesBySlug = new Map(
    allPages.map((p) => {
      const slug = p.url.split("/").pop() ?? ""
      return [slug, p]
    })
  )

  const groups: GroupedPages[] = COMPONENT_CATEGORIES.map((category) => ({
    category,
    pages: category.slugs.flatMap((slug) => {
      const page = pagesBySlug.get(slug)
      return page ? [page] : []
    }),
  })).filter((g) => g.pages.length > 0)

  // Collect any pages not in a category.
  const categorizedSlugs = new Set(
    COMPONENT_CATEGORIES.flatMap((c) => c.slugs)
  )
  const uncategorized = allPages.filter((p) => {
    const slug = p.url.split("/").pop() ?? ""
    return !categorizedSlugs.has(slug)
  })
  if (uncategorized.length > 0) {
    groups.push({
      category: { label: "その他", slugs: [] },
      pages: uncategorized,
    })
  }

  return groups
}
