export const PAGES_NEW: string[] = []

export const PAGES_UPDATED: string[] = []

export type ComponentCategory = {
    label: string
    slugs: string[]
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
    {
        label: "入力",
        slugs: [
            "button",
            "button-group",
            "input",
            "input-group",
            "input-otp",
            "textarea",
            "select",
            "native-select",
            "combobox",
            "checkbox",
            "radio-group",
            "switch",
            "toggle",
            "toggle-group",
            "slider",
            "calendar",
            "date-picker",
            "field",
            "label",
            "form",
        ],
    },
    {
        label: "通知",
        slugs: [
            "alert",
            "alert-dialog",
            "sonner",
            "toast",
            "progress",
            "spinner",
            "skeleton",
        ],
    },
    {
        label: "オーバーレイ",
        slugs: [
            "dialog",
            "drawer",
            "sheet",
            "popover",
            "hover-card",
            "tooltip",
        ],
    },
    {
        label: "ナビゲーション",
        slugs: [
            "navigation-menu",
            "sidebar",
            "menubar",
            "breadcrumb",
            "tabs",
            "pagination",
            "command",
            "context-menu",
            "dropdown-menu",
        ],
    },
    {
        label: "表示",
        slugs: [
            "badge",
            "avatar",
            "card",
            "carousel",
            "table",
            "data-table",
            "chart",
            "accordion",
            "collapsible",
            "kbd",
            "typography",
            "empty",
            "item",
        ],
    },
    {
        label: "レイアウト",
        slugs: [
            "aspect-ratio",
            "resizable",
            "scroll-area",
            "separator",
            "direction",
        ],
    },
]
