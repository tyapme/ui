import { cn } from "@/lib/utils"

const typeScale = [
  {
    label: "H1",
    size: "text-4xl",
    weight: "font-bold",
    tracking: "tracking-tight",
    sample: "Heading 1",
    sizeLabel: "36px",
    weightLabel: "700 Bold",
  },
  {
    label: "H2",
    size: "text-3xl",
    weight: "font-semibold",
    tracking: "tracking-tight",
    sample: "Heading 2",
    sizeLabel: "30px",
    weightLabel: "600 Semibold",
  },
  {
    label: "H3",
    size: "text-2xl",
    weight: "font-semibold",
    tracking: "tracking-tight",
    sample: "Heading 3",
    sizeLabel: "24px",
    weightLabel: "600 Semibold",
  },
  {
    label: "H4",
    size: "text-xl",
    weight: "font-medium",
    tracking: "",
    sample: "Heading 4",
    sizeLabel: "20px",
    weightLabel: "500 Medium",
  },
  {
    label: "Body LG",
    size: "text-base",
    weight: "font-normal",
    tracking: "",
    sample: "Large body text for product experiences",
    sizeLabel: "16px",
    weightLabel: "400 Regular",
  },
  {
    label: "Body",
    size: "text-sm",
    weight: "font-normal",
    tracking: "",
    sample: "Readable body text with consistent rhythm",
    sizeLabel: "14px",
    weightLabel: "400 Regular",
  },
  {
    label: "Caption",
    size: "text-xs",
    weight: "font-normal",
    tracking: "",
    sample: "Caption text for supporting details",
    sizeLabel: "12px",
    weightLabel: "400 Regular",
  },
  {
    label: "Code",
    size: "text-sm",
    weight: "font-medium font-mono",
    tracking: "",
    sample: "const value = 'code text'",
    sizeLabel: "14px",
    weightLabel: "500 Mono",
  },
]

interface DesignTypographyScaleProps {
  animate?: boolean
}

export function DesignTypographyScale({
  animate = true,
}: DesignTypographyScaleProps) {
  return (
    <div className="not-prose divide-y divide-border overflow-hidden rounded-2xl border border-border">
      {typeScale.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            animate && "typo-scale-row",
            "group relative flex items-center gap-5 px-6 py-5",
            "bg-background hover:bg-muted/50",
            "transition-colors duration-200 ease-out"
          )}
          style={animate ? { animationDelay: `${i * 48}ms` } : undefined}
        >
          {/* Label pill — left anchor */}
          <div className="w-[4.5rem] shrink-0 self-start pt-1">
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-md px-2 py-0.5",
                "bg-muted text-muted-foreground",
                "font-mono text-[10px] font-medium tracking-wide",
                "transition-colors duration-200",
                "group-hover:bg-foreground/8 group-hover:text-foreground"
              )}
            >
              {item.label}
            </span>
          </div>

          {/* Sample text — the specimen */}
          <p
            className={cn(
              "flex-1 leading-snug text-foreground",
              item.size,
              item.weight,
              item.tracking
            )}
          >
            {item.sample}
          </p>

          {/* Spec info — right, dims at rest, reveals on hover */}
          <div
            className={cn(
              "hidden shrink-0 flex-col items-end gap-0.5 sm:flex",
              "opacity-25 group-hover:opacity-100",
              "transition-opacity duration-250 ease-out"
            )}
          >
            <span className="font-mono text-[11px] font-medium text-foreground tabular-nums">
              {item.sizeLabel}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              {item.weightLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
