import { cn } from "@/lib/utils"

const typeScale = [
    { label: "H1", size: "text-4xl", weight: "font-bold", tracking: "tracking-tight", sample: "見出し1 — Heading 1", meta: "2.25rem / 36px / Bold" },
    { label: "H2", size: "text-3xl", weight: "font-semibold", tracking: "tracking-tight", sample: "見出し2 — Heading 2", meta: "1.875rem / 30px / Semibold" },
    { label: "H3", size: "text-2xl", weight: "font-semibold", tracking: "tracking-tight", sample: "見出し3 — Heading 3", meta: "1.5rem / 24px / Semibold" },
    { label: "H4", size: "text-xl", weight: "font-medium", tracking: "", sample: "見出し4 — Heading 4", meta: "1.25rem / 20px / Medium" },
    { label: "Body LG", size: "text-base", weight: "font-normal", tracking: "", sample: "本文（大）— ユーザー体験を支えるテキスト", meta: "1rem / 16px / Regular" },
    { label: "Body", size: "text-sm", weight: "font-normal", tracking: "", sample: "本文 — 一貫性のある読みやすいテキストです", meta: "0.875rem / 14px / Regular" },
    { label: "Caption", size: "text-xs", weight: "font-normal", tracking: "", sample: "キャプション — 補足説明テキスト", meta: "0.75rem / 12px / Regular" },
    { label: "Code", size: "text-sm", weight: "font-medium font-mono", tracking: "", sample: "const value = 'code text'", meta: "0.875rem / 14px / Mono" },
]

export function DesignTypographyScale() {
    return (
        <div className="not-prose rounded-xl border border-border overflow-hidden divide-y divide-border">
            {typeScale.map((item) => (
                <div
                    key={item.label}
                    className="flex items-baseline gap-4 px-5 py-4 hover:bg-muted/40 transition-colors"
                >
                    <div className="w-20 shrink-0">
                        <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                        <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">{item.meta}</p>
                    </div>
                    <p
                        className={cn(
                            "flex-1 text-foreground leading-snug",
                            item.size,
                            item.weight,
                            item.tracking
                        )}
                    >
                        {item.sample}
                    </p>
                </div>
            ))}
        </div>
    )
}
