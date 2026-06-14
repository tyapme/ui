import { QRCode } from "@/styles/base/ui/qr-code"

export default function QRCodeColors() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      <QRCode value="https://ui.tyap.me" size={140} />
      <QRCode
        value="https://ui.tyap.me"
        size={140}
        fgColor="var(--primary)"
      />
      <QRCode
        value="https://ui.tyap.me"
        size={140}
        fgColor="#ffffff"
        bgColor="#7c3aed"
      />
    </div>
  )
}
