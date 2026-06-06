export const PAGES_NEW = ["/create", "/docs/registry/github", "/docs/changelog"]

export const PAGES_UPDATED = ["/docs/components/button"]

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
export const COMPONENT_CATEGORIES: { label: string; slugs: string[] }[] = [
  {
    label: "入力",
    slugs: [
      "button",
      "button-group",
      "calendar",
      "checkbox",
      "combobox",
      "date-picker",
      "field",
      "form",
      "input",
      "input-group",
      "input-otp",
      "native-select",
      "radio-group",
      "select",
      "slider",
      "switch",
      "textarea",
      "toggle",
      "toggle-group",
    ],
  },
  {
    label: "通知",
    slugs: ["alert", "alert-dialog", "sonner", "toast"],
  },
  {
    label: "ナビゲーション",
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
    label: "オーバーレイ",
    slugs: ["dialog", "drawer", "popover", "sheet", "tooltip"],
  },
  {
    label: "レイアウト",
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
    label: "表示",
    slugs: [
      "avatar",
      "badge",
      "chart",
      "data-table",
      "empty",
      "item",
      "kbd",
      "label",
      "progress",
      "skeleton",
      "spinner",
      "table",
      "typography",
    ],
  },
  {
    label: "その他",
    slugs: ["command", "direction"],
  },
]

