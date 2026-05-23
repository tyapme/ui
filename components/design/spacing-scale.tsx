const spacingVisualWidths: Record<string, string> = {
    "0": "w-0",
    "px": "w-px",
    "0.5": "w-0.5",
    "1": "w-1",
    "1.5": "w-1.5",
    "2": "w-2",
    "2.5": "w-2.5",
    "3": "w-3",
    "4": "w-4",
    "5": "w-5",
    "6": "w-6",
    "8": "w-8",
    "10": "w-10",
    "12": "w-12",
    "16": "w-16",
    "20": "w-20",
    "24": "w-24",
}

const spacingScale = [
    { token: "0", value: "0px" },
    { token: "px", value: "1px" },
    { token: "0.5", value: "2px" },
    { token: "1", value: "4px" },
    { token: "1.5", value: "6px" },
    { token: "2", value: "8px" },
    { token: "2.5", value: "10px" },
    { token: "3", value: "12px" },
    { token: "4", value: "16px" },
    { token: "5", value: "20px" },
    { token: "6", value: "24px" },
    { token: "8", value: "32px" },
    { token: "10", value: "40px" },
    { token: "12", value: "48px" },
    { token: "16", value: "64px" },
    { token: "20", value: "80px" },
    { token: "24", value: "96px" },
]

import { cn } from "@/lib/utils"

export function DesignSpacingScale() {
    return (
        <div className="not-prose rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[3rem_1fr_4rem] bg-muted/40 border-b border-border px-4 py-2 text-xs font-medium text-muted-foreground">
                <span>Token</span>
                <span className="pl-4">Visual</span>
                <span className="text-right">Value</span>
            </div>
            <div className="divide-y divide-border">
                {spacingScale.map((item) => (
                    <div
                        key={item.token}
                        className="grid grid-cols-[3rem_1fr_4rem] items-center px-4 py-2 hover:bg-muted/30 transition-colors"
                    >
                        <span className="font-mono text-xs text-muted-foreground">{item.token}</span>
                        <div className="pl-4 flex items-center h-4">
                            {item.token !== "0" && (
                                <div
                                    className={cn(
                                        "h-3 rounded-sm bg-primary/20 border-r-2 border-primary shrink-0",
                                        spacingVisualWidths[item.token]
                                    )}
                                />
                            )}
                        </div>
                        <span className="font-mono text-xs text-foreground text-right">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
