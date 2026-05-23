import { cn } from "@/lib/utils"

const radiusScale = [
    { label: "None", cls: "rounded-none", token: "rounded-none", value: "0px" },
    { label: "SM", cls: "rounded-sm", token: "rounded-sm", value: "≈ 0.375rem" },
    { label: "MD", cls: "rounded-md", token: "rounded-md", value: "≈ 0.5rem" },
    { label: "LG", cls: "rounded-lg", token: "rounded-lg", value: "0.625rem (base)" },
    { label: "XL", cls: "rounded-xl", token: "rounded-xl", value: "≈ 0.875rem" },
    { label: "2XL", cls: "rounded-2xl", token: "rounded-2xl", value: "≈ 1.125rem" },
    { label: "3XL", cls: "rounded-3xl", token: "rounded-3xl", value: "≈ 1.375rem" },
    { label: "Full", cls: "rounded-full", token: "rounded-full", value: "9999px" },
]

export function DesignRadiusScale() {
    return (
        <div className="not-prose grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
            {radiusScale.map((item) => (
                <div key={item.token} className="flex flex-col gap-2">
                    <div
                        className={cn(
                            "flex h-20 items-center justify-center border-2 border-border bg-muted/30",
                            item.cls
                        )}
                    >
                        <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                    </div>
                    <div>
                        <p className="font-mono text-xs font-medium text-foreground">{item.token}</p>
                        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
