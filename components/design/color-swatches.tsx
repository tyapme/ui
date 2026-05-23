import { cn } from "@/lib/utils"

const semanticColors = [
    {
        group: "ベース",
        colors: [
            { token: "background", label: "Background", cls: "bg-background border border-border" },
            { token: "foreground", label: "Foreground", cls: "bg-foreground" },
            { token: "surface", label: "Surface", cls: "bg-surface border border-border" },
        ],
    },
    {
        group: "プライマリ",
        colors: [
            { token: "primary", label: "Primary", cls: "bg-primary" },
            { token: "primary-foreground", label: "Primary Foreground", cls: "bg-primary-foreground border border-border" },
        ],
    },
    {
        group: "セカンダリ / ミュート / アクセント",
        colors: [
            { token: "secondary", label: "Secondary", cls: "bg-secondary" },
            { token: "muted", label: "Muted", cls: "bg-muted" },
            { token: "accent", label: "Accent", cls: "bg-accent" },
        ],
    },
    {
        group: "フィードバック",
        colors: [
            { token: "destructive", label: "Destructive", cls: "bg-destructive" },
        ],
    },
    {
        group: "UI 要素",
        colors: [
            { token: "card", label: "Card", cls: "bg-card border border-border" },
            { token: "popover", label: "Popover", cls: "bg-popover border border-border" },
            { token: "border", label: "Border", cls: "bg-border" },
            { token: "input", label: "Input", cls: "bg-input" },
            { token: "ring", label: "Ring", cls: "bg-ring" },
        ],
    },
]

export function DesignColorSwatches() {
    return (
        <div className="not-prose space-y-8 py-2">
            {semanticColors.map((group) => (
                <div key={group.group}>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {group.group}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {group.colors.map((color) => (
                            <div key={color.token} className="flex flex-col gap-1.5">
                                <div className={cn("h-14 w-28 rounded-lg", color.cls)} />
                                <div>
                                    <p className="text-xs font-medium text-foreground">{color.label}</p>
                                    <p className="font-mono text-[10px] text-muted-foreground">--{color.token}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
