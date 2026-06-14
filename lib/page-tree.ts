import { COMPONENT_CATEGORIES } from "@/lib/docs"
import type { source } from "@/lib/source"

// With i18n enabled, `source.pageTree` is keyed by language; a single tree is
// obtained via `source.getPageTree(lang)`. These types describe one such tree.
export type PageTreeRoot = ReturnType<typeof source.getPageTree>
export type PageTreeNode = PageTreeRoot["children"][number]
export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>

export function getPageTreeRoot(tree: PageTreeRoot): PageTreeRoot {
  return tree
}

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

// Get the pages from the components folder (flat structure).
export function getPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
  // Return direct page children of the components folder.
  return folder.children.filter(
    (child): child is PageTreePage => child.type === "page"
  )
}

// Get pages grouped by COMPONENT_CATEGORIES from the components folder.
export function getGroupedPagesFromFolder(
  folder: PageTreeFolder
): { category: { label: string }; pages: PageTreePage[] }[] {
  const allPages = folder.children.filter(
    (c): c is PageTreePage => c.type === "page"
  )

  const groups: { category: { label: string }; pages: PageTreePage[] }[] = []

  const pageBySlug = new Map<string, PageTreePage>()
  for (const page of allPages) {
    const slug = page.url.split("/").pop() ?? ""
    pageBySlug.set(slug, page)
  }

  const seen = new Set<string>()
  for (const { label, slugs } of COMPONENT_CATEGORIES) {
    const pages = slugs
      .map((slug) => pageBySlug.get(slug))
      .filter((p): p is PageTreePage => p !== undefined)
      .sort((a, b) => String(a.name).localeCompare(String(b.name)))
    if (pages.length > 0) {
      groups.push({ category: { label }, pages })
      for (const p of pages) seen.add(p.url)
    }
  }

  // Any pages not covered by the category map are appended as "Other".
  const uncategorized = allPages
    .filter((p) => !seen.has(p.url))
    .sort((a, b) => String(a.name).localeCompare(String(b.name)))
  if (uncategorized.length > 0) {
    const otherLabel = "Other"
    const existing = groups.find((g) => g.category.label === otherLabel)
    if (existing) {
      existing.pages.push(...uncategorized)
      existing.pages.sort((a, b) =>
        String(a.name).localeCompare(String(b.name))
      )
    } else {
      groups.push({ category: { label: otherLabel }, pages: uncategorized })
    }
  }

  // Final fallback: one group with all pages.
  if (groups.length === 0) {
    const pages = getAllPagesFromFolder(folder).sort((a, b) =>
      String(a.name).localeCompare(String(b.name))
    )
    if (pages.length > 0) {
      groups.push({ category: { label: String(folder.name ?? "") }, pages })
    }
  }

  return groups
}
