import { cn } from "@/lib/utils"

const elevationScale = [
    { level: 0, label: "Flat", cls: "shadow-none border border-border", desc: "フラット。標準的なコンテンツ領域。" },
    { level: 1, label: "Low", cls: "shadow-sm", desc: "カード、入力フィールド。" },
    { level: 2, label: "Medium", cls: "shadow-md", desc: "ドロップダウン、コンテキストメニュー。" },
    { level: 3, label: "High", cls: "shadow-lg", desc: "モーダル、ダイアログ。" },
    { level: 4, label: "Highest", cls: "shadow-xl", desc: "フルスクリーンオーバーレイ。" },
]

export function DesignElevationScale() {
    return (
        <div className="not-prose grid gap-4 py-2 sm:grid-cols-5">
            {elevationScale.map((item) => (
                <div key={item.level} className="flex flex-col gap-3">
                    <div
                        className={cn(
                            "flex h-24 items-center justify-center rounded-xl bg-card",
                            item.cls
                        )}
                    >
                        <span className="text-2xl font-bold text-muted-foreground/40">
                            {item.level}
                        </span>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-foreground">
                            Level {item.level} — {item.label}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
