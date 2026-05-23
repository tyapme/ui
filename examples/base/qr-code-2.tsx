import { QRCode } from "@/styles/base-nova/ui/qr-code"

const levels = ["L", "M", "Q", "H"] as const

export function QrCode2() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {levels.map((level) => (
        <div key={level} className="flex flex-col items-center gap-2">
          <div className="size-32">
            <QRCode data="https://example.com" robustness={level} />
          </div>
          <span className="text-muted-foreground text-xs">{level}</span>
        </div>
      ))}
    </div>
  )
}
