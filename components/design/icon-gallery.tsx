import {
    IconAlertCircle,
    IconArrowRight,
    IconBell,
    IconBookmark,
    IconCheck,
    IconChevronRight,
    IconDownload,
    IconExternalLink,
    IconFile,
    IconFolder,
    IconHeart,
    IconHome,
    IconInfoCircle,
    IconSearch,
    IconSettings,
    IconStar,
    IconUser,
    IconX,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const iconCategories = [
    {
        label: "ナビゲーション",
        icons: [
            { icon: IconHome, name: "Home" },
            { icon: IconChevronRight, name: "ChevronRight" },
            { icon: IconArrowRight, name: "ArrowRight" },
            { icon: IconSearch, name: "Search" },
            { icon: IconSettings, name: "Settings" },
        ],
    },
    {
        label: "アクション",
        icons: [
            { icon: IconBookmark, name: "Bookmark" },
            { icon: IconHeart, name: "Heart" },
            { icon: IconStar, name: "Star" },
            { icon: IconDownload, name: "Download" },
            { icon: IconExternalLink, name: "ExternalLink" },
        ],
    },
    {
        label: "フィードバック",
        icons: [
            { icon: IconCheck, name: "Check" },
            { icon: IconX, name: "X" },
            { icon: IconInfoCircle, name: "InfoCircle" },
            { icon: IconAlertCircle, name: "AlertCircle" },
            { icon: IconBell, name: "Bell" },
        ],
    },
    {
        label: "コンテンツ",
        icons: [
            { icon: IconUser, name: "User" },
            { icon: IconFile, name: "File" },
            { icon: IconFolder, name: "Folder" },
        ],
    },
]

const iconSizes = [
    { label: "XS", cls: "size-3", px: "12px" },
    { label: "SM", cls: "size-4", px: "16px" },
    { label: "MD", cls: "size-5", px: "20px" },
    { label: "LG", cls: "size-6", px: "24px" },
    { label: "XL", cls: "size-8", px: "32px" },
]

export function DesignIconGallery() {
    return (
        <div className="not-prose space-y-8 py-2">
            {/* サイズ */}
            <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    サイズ
                </p>
                <div className="flex items-end gap-8 rounded-xl border border-border px-6 py-5 bg-card">
                    {iconSizes.map((s) => (
                        <div key={s.label} className="flex flex-col items-center gap-2">
                            <IconStar className={cn("text-foreground", s.cls)} />
                            <span className="text-xs text-muted-foreground">{s.label}</span>
                            <span className="font-mono text-[10px] text-muted-foreground/70">{s.px}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* カテゴリ別 */}
            {iconCategories.map((cat) => (
                <div key={cat.label}>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {cat.icons.map(({ icon: Icon, name }) => (
                            <div
                                key={name}
                                className="flex flex-col items-center gap-1.5 rounded-lg border border-border px-3 py-3 min-w-[72px] bg-card hover:bg-muted/60 transition-colors"
                            >
                                <Icon className="size-5 text-foreground" />
                                <span className="font-mono text-[10px] text-muted-foreground">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
