import type { source } from "@/lib/source"

export type DocsPageTree = ReturnType<typeof source.getPageTree>

export const PAGES_NEW: string[] = []

export const PAGES_UPDATED = ["/docs/components/button"]

export const DOCS_TOP_LEVEL_SECTIONS = [
  { name: "Get Started", href: "/docs" },
  {
    name: "Components",
    href: "/docs/components",
  },
  {
    name: "Design",
    href: "/docs/design/typography",
  },
  {
    name: "Installation",
    href: "/docs/installation",
  },
  {
    name: "Theme",
    href: "/docs/theming",
  },
  {
    name: "Forms",
    href: "/docs/forms",
  },
  {
    name: "Dark Mode",
    href: "/docs/dark-mode/next",
  },
  {
    name: "RTL",
    href: "/docs/rtl",
  },
]

export const DOCS_EXCLUDED_SECTIONS = new Set(["changelog", "registry"])

export const DOCS_EXCLUDED_PAGES = new Set([
  "/docs/cli",
  "/docs/directory",
  "/docs/figma",
  "/docs/javascript",
  "/docs/legacy",
  "/docs/llms.txt",
  "/docs/mcp",
  "/docs/monorepo",
  "/docs/new",
  "/docs/package-imports",
  "/docs/react-19",
  "/docs/skills",
  "/docs/tailwind-v4",
])

export function isDocsPageVisible(url: string) {
  return !DOCS_EXCLUDED_PAGES.has(url)
}

export function isDocsSectionVisible(id: string | undefined) {
  return !DOCS_EXCLUDED_SECTIONS.has(id ?? "")
}

export function isDocsRouteVisible(url: string) {
  const section = url.split("/").filter(Boolean)[1]

  return isDocsPageVisible(url) && isDocsSectionVisible(section)
}

// Pages that should NOT show the "old" badge (already updated).
export const COMPONENT_BADGE_EXCLUDE = new Set([
  "/docs/components/tabs",
  "/docs/components/button",
  "/docs/components/badge",
  "/docs/components/input",
  "/docs/components/avatar",
  "/docs/components/dialog",
])

// Category definitions for the components sidebar.
// Pages within each category are sorted alphabetically in the sidebar.
export const COMPONENT_CATEGORIES: {
  label: string
  slugs: string[]
}[] = [
  {
    label: "Input",
    slugs: [
      "button",
      "button-group",
      "calendar",
      "checkbox",
      "color-picker",
      "combobox",
      "date-picker",
      "field",
      "form",
      "input",
      "input-group",
      "input-otp",
      "copy-button",
      "radio-group",
      "select",
      "slider",
      "switch",
      "textarea",
      "time-picker",
      "toggle",
      "toggle-group",
    ],
  },
  {
    label: "Feedback",
    slugs: ["alert", "alert-dialog", "sonner", "toast"],
  },
  {
    label: "Navigation",
    slugs: [
      "breadcrumb",
      "context-menu",
      "dropdown-menu",
      "hover-card",
      "menubar",
      "navigation-menu",
      "pagination",
    ],
  },
  {
    label: "Overlay",
    slugs: ["dialog", "drawer", "popover", "sheet", "tooltip"],
  },
  {
    label: "Layout",
    slugs: [
      "accordion",
      "aspect-ratio",
      "card",
      "carousel",
      "collapsible",
      "resizable",
      "scroll-area",
      "separator",
      "sidebar",
      "tabs",
    ],
  },
  {
    label: "Display",
    slugs: [
      "avatar",
      "badge",
      "chart",
      "code-block",
      "data-table",
      "empty",
      "item",
      "kbd",
      "label",
      "progress",
      "qr-code",
      "skeleton",
      "spinner",
      "table",
      "timeline",
      "tweet-card",
      "typography",
    ],
  },
  {
    label: "Other",
    slugs: ["command", "direction", "md-parser"],
  },
]
