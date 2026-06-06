import { cn } from "@/registry/bases/base/lib/utils"

type SpinnerProps = Omit<React.ComponentProps<"span">, "children">

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <>
      <style>{`
        @keyframes spinner-fade {
          from { opacity: 1; }
          to { opacity: 0.15; }
        }
      `}</style>
      <span
        role="status"
        className={cn("box-border inline-block size-5", className)}
        {...props}
      >
        <span
          aria-hidden="true"
          className="relative top-1/2 left-1/2 block size-full"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className="absolute top-[-3.9%] left-[-10%] block h-[8%] w-[24%] rounded-(--radius) bg-current"
              style={{
                transform: `rotate(${i * 30}deg) translate(146%)`,
                animation: "spinner-fade var(--duration, 1.2s) linear infinite",
                animationDelay: `calc(var(--duration, 1.2s) / 12 * ${i - 12})`,
              }}
            />
          ))}
        </span>
        <span className="sr-only">Loading</span>
      </span>
    </>
  )
}

export { Spinner }
